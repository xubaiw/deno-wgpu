/**
 * @file This mod extract information from `vendor/*.h` and generate js binding to `src/gen`.
 *
 * The generator works in 2 tier:
 * - Tier 1: Basic symbol export (Deno.dlopen)
 * - Tier 2: Ergonomic wrapper around tier 1 (Enum, Struct, Class, Promise, etc...)
 *
 * Functions in this file generally follows the following naming convention:
 * - `writeXXX`: Dumpers, who call generators and actually write generated string to file. (Only writeTier1 and writeTier2)
 * - `generateXXX`: Generate content text
 * - `extractXXX`: extract infotmation that is used by generators
 * - `translateXXX`: translate libclang type
 */

import { ensureDir } from "https://deno.land/std@0.197.0/fs/ensure_dir.ts";
import { fromFileUrl } from "https://deno.land/std@0.197.0/path/mod.ts";
import camelCase from "https://deno.land/x/case@2.1.1/camelCase.ts";
import { join } from "https://deno.land/std@0.197.0/path/mod.ts";
import {
  CXChildVisitResult,
  CXCursor,
  CXCursorKind,
  CXIndex,
  CXTranslationUnit,
  CXType,
} from "https://deno.land/x/libclang@1.0.0-beta.8/mod.ts";
import { dedent } from "npm:@qnighy/dedent";

/** Mutable shared context to easily access information */
type Ctx = {
  tu: CXTranslationUnit;
  dir: string;
  symbols: Record<string, SymbolSpec>;
  callbacks: Record<string, SymbolSpec>;
  enums: Record<string, Record<string, unknown>>;
};

/** Do not use Deno.NativeType make life easier */
type SymbolSpec = {
  parameters: string[];
  result: string;
};

// Run main!
import.meta.main && await main();

/** Entry point for the whole generator */
async function main() {
  const ctx = extractCtx();
  await ensureDir(ctx.dir);
  await writeTier1(ctx);
  await writeTier2(ctx);
}

/** Write tier 1 binding (dlopen symbols). */
async function writeTier1(ctx: Ctx) {
  const { dir, symbols } = ctx;
  // generate file content
  const text = dedent`
    import { prepare } from "./prepare.ts";
    const libPath = await prepare();
    export default Deno.dlopen(libPath, ${JSON.stringify(symbols)});
  `;
  // write
  await Deno.writeTextFile(join(dir, `tier1.ts`), text);
}

/** Extract all information and create  */
function extractCtx(): Ctx {
  const header = fromFileUrl(import.meta.resolve("../vendor/wgpu.h"));
  const dir = fromFileUrl(import.meta.resolve("../src/"));
  const tu = new CXIndex().parseTranslationUnit(header);
  // prepare ctx
  const ctx: Ctx = {
    tu,
    dir,
    symbols: {},
    callbacks: {},
    enums: {},
  };
  // actual extracts
  extractSymbols(ctx);
  extractCallbacks(ctx);
  extractEnums(ctx);
  return ctx;
}

function extractEnums({ tu, enums }: Ctx) {
  // visit
  tu.getCursor().visitChildren((cursor) => {
    // only handle enums
    if (cursor.kind == CXCursorKind.CXCursor_EnumDecl) {
      // do not use enum name to merge implementation-native enums
      // visit sub constants
      cursor.visitChildren((cursor) => {
        // handle constants
        if (cursor.kind == CXCursorKind.CXCursor_EnumConstantDecl) {
          let [name, key] = nofix(cursor.getSpelling()).split("_");
          // special mapping of NativeFeature => FeatureName
          if (name == "NativeFeature") name = "FeatureName";
          // `Force32` is used to force enum to be uint32_t, so just skip it
          if (key == "Force32") return CXChildVisitResult.CXChildVisit_Continue;
          if (enums[name] == null) enums[name] = {};
          const value = cursor.getEnumConstantDeclarationUnsignedValue();
          enums[name][key] = value;
        }
        return CXChildVisitResult.CXChildVisit_Continue;
      });
    }
    return CXChildVisitResult.CXChildVisit_Continue;
  });
}

/** Extract callback from typedefs */
function extractCallbacks({tu, callbacks}: Ctx) {
  tu.getCursor().visitChildren((cursor) => {
    if (cursor.kind == CXCursorKind.CXCursor_TypedefDecl) {
      // "name"
      const name = nofix(cursor.getSpelling());
      // if name contains Callback then it's callback
      if (name.match(/Callback/)) {
        // pointee is the actual function type
        const pointee = cursor.getTypedefDeclarationOfUnderlyingType()!
          .getPointeeType()!;
        // "result"
        const result = translateKindToDenoNative(
          pointee.getResultType()!.getKindSpelling(),
        );
        // "parameters"
        const parameters = [];
        for (let i = 0; i < pointee.getNumberOfArgumentTypes(); i++) {
          const type = translateKindToDenoNative(
            pointee.getArgumentType(i)!.getCanonicalType()
              .getKindSpelling(),
          );
          parameters.push(type);
        }
        callbacks[name] = { result, parameters };
      }
    }
    return CXChildVisitResult.CXChildVisit_Recurse;
  });
}

function extractSymbols({ tu, symbols }: Ctx) {
  // visit
  tu.getCursor().visitChildren((cursor) => {
    // handle only function decl
    if (cursor.kind == CXCursorKind.CXCursor_FunctionDecl) {
      // "name"
      const name = cursor.getSpelling();
      // "result"
      const resultKind = cursor.getResultType()!.getCanonicalType()
        .getKindSpelling();
      const result = translateKindToDenoNative(resultKind);
      // "parameters"
      const parameters = [];
      for (let i = 0; i < cursor.getNumberOfArguments(); i++) {
        const pCursor = cursor.getArgument(i)!;
        const pKind = pCursor.getType()!.getCanonicalType().getKindSpelling();
        const type = translateKindToDenoNative(pKind);
        parameters.push(type);
      }
      symbols[name] = { result, parameters };
    }
    return CXChildVisitResult.CXChildVisit_Continue;
  });
  return symbols;
}

function translateKindToDenoNative(kind: string) {
  if (kind == "Pointer") return "pointer";
  if (kind == "ULong") return "u64";
  if (kind == "Bool") return "u8";
  if (kind == "Void") return "void";
  if (kind == "Enum") return "u32";
  if (kind == "ULongLong") return "u64";
  if (kind == "UInt") return "u32";
  if (kind == "Int") return "i32";
  if (kind == "Float") return "f32";
  throw new Error(`kind ${kind} not implemented`);
}

async function writeTier2(ctx: Ctx) {
  const { dir } = ctx;
  const enums = generateEnums(ctx);
  const structs = genStructs(ctx);
  const callbacks = generateCallbacks(ctx);
  const ergos = generateErgos(ctx);
  const text = dedent`
    import * as U from "./util.ts";
    import lib from "./tier1.ts";

    ${enums}
    ${structs}
    ${callbacks}
    ${ergos}
  `;
  await Deno.writeTextFile(join(dir, `tier2.ts`), text);
}

/** Remove the WGPU/wgpu prefix. */
function nofix(name: string): string {
  if (name.match(/^w/)) {
    return name.replace(/^wgpu/, "");
  } else return name.replace(/^WGPU/, "");
}

/** Insert separator to array of string. */
function sep(s: string) {
  const nn = <T>(x: T): x is NonNullable<T> => x !== null;
  return (...xs: (string | null | (string | null)[])[]): string =>
    xs.filter(nn).map((x) => typeof x == "string" ? x : x.filter(nn).join(s))
      .join(s);
}

/** Map key of object. */
function km<T>(
  xs: Record<string, unknown>,
  fn: (x: string, i: number) => T,
): T[] {
  return Object.keys(xs).map(fn);
}

function generateEnums({ enums }: Ctx) {
  // generate text content
  let text = "";
  for (const [name, kv] of Object.entries(enums)) {
    text += `export enum ${name} {`;
    for (const [k, v] of Object.entries(kv)) {
      const key = k.match(/^\d/) ? `_${k}` : k;
      text += `${key} = ${v},`;
    }
    text += `}`;
  }
  // actual write
  return text;
}

type StructSpec = {
  size: number;
  fields: Record<string, FieldSpec>;
};

type FieldSpec = {
  offset: number;
  size: number;
  kind: string;
  type?: string;
};

type SCtx = {
  structs: Record<string, StructSpec>;
};

function genStructs(ctx: Ctx) {
  const { tu, dir } = ctx;
  const structs: Record<string, any> = {};
  // visit
  tu.getCursor().visitChildren((cursor) => {
    // only handle struct decl
    if (cursor.kind == CXCursorKind.CXCursor_StructDecl) {
      const name = nofix(cursor.getSpelling());
      const size = cursor.getType()!.getSizeOf();
      const fields: Record<string, any> = {};
      cursor.visitChildren((cursor) => {
        if (cursor.kind == CXCursorKind.CXCursor_FieldDecl) {
          const name = cursor.getSpelling();
          const offset = cursor.getOffsetOfField() / 8;
          const kind = cursor.getType()!.getCanonicalType().getKindSpelling();
          fields[name] = { offset, kind };
          if (kind == "Record") {
            fields[name]["type"] = cursor.getType()!.getSpelling();
            fields[name]["size"] = cursor.getType()!.getSizeOf();
          }
          if (kind == "Enum") {
            fields[name].type = cursor.getType()?.getSpelling();
          }
        }
        return CXChildVisitResult.CXChildVisit_Continue;
      });
      structs[name] = { name, size, fields };
    }
    return CXChildVisitResult.CXChildVisit_Recurse;
  });
  const sctx = { structs };
  // generate file content
  const header = dedent`
  `;
  const structdecl = sep("\n")(
    km(sctx.structs, (sname) => genStruct(sctx, sname)),
  );
  const text = dedent`
    ${header}
    ${structdecl}
  `;
  // actual write
  return text;
}

function genStruct(ctx: SCtx, structName: string) {
  const spec = ctx.structs[structName];
  const size = spec.size;
  if (size < 0) return "";
  const properties = sep("\n\n")(
    km(spec.fields, (fname) => genProperty(ctx, structName, fname)),
  );
  const encoder = generateStructEncoder(structName);
  return dedent`
    export class ${structName} extends U.StructBase {
      dataview: DataView;
      constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
        super();
        if (dataviewOrPtr == null) {
          this.dataview = new DataView(new ArrayBuffer(${size}));
        } else {
          if (dataviewOrPtr instanceof DataView) {
            this.dataview = dataviewOrPtr;
          } else {
            this.dataview = new DataView(new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(${size}))
          }
        }
      }
      ${properties}
      ${encoder}
    }
  `;
}

function genProperty(...args: [SCtx, string, string]) {
  // FIXME: use property field
  const getter = genGetter(...args);
  const setter = genSetter(...args);
  return dedent`
    ${getter}
    ${setter}
  `;
}

function genGetter(ctx: SCtx, sname: string, fname: string) {
  const type = genStructGetterType(ctx, sname, fname);
  const result = genStructGetterResult(ctx, sname, fname);
  return dedent`
    get ${fname}(): ${type} {
      return ${result};
    }
  `;
}

function genSetter(ctx: SCtx, sname: string, fname: string) {
  const type = genSetterType(ctx, sname, fname);
  const result = genSetterResult(ctx, sname, fname);
  return `
    set ${fname}(value: ${type}) {
      ${result};
    }
  `;
}

function generateStructEncoder(name: string): string {
  return dedent`
    static from() {
      // not implemented
    }
  `;
}

function genStructGetterType(ctx: SCtx, name: string, fname: string) {
  const { kind, type } = ctx.structs[name].fields[fname];
  if (kind == "Record") return nofix(type!);
  if (kind == "Pointer") return "Deno.PointerValue";
  if (kind == "Enum") return `${nofix(type!)}`;
  if (kind == "UInt") return "number";
  if (kind == "ULongLong") return "bigint";
  if (kind == "Bool") return "boolean";
  if (kind == "Double") return "number";
  if (kind == "ULong") return "bigint";
  if (kind == "Float") return "number";
  if (kind == "UShort") return "number";
  if (kind == "Int") return "number";
  throw new Error(
    `getter type: kind ${kind} in ${name}.${fname} not implemented`,
  );
}

function genStructGetterResult(ctx: SCtx, name: string, fname: string) {
  const { offset, kind, type, size } = ctx.structs[name].fields[fname];
  if (kind == "Record") {
    return `new ${
      nofix(type!)
    }(new DataView(this.dataview.buffer, this.dataview.byteOffset + ${offset}, ${size}))`;
  }
  if (kind == "Pointer") {
    return `Deno.UnsafePointer.create(this.dataview.getBigUint64(${offset}, U.LE))`;
  }
  if (kind == "Enum") {
    return `this.dataview.getUint32(${offset}, U.LE) as ${nofix(type!)}`;
  }
  if (kind == "UInt") return `this.dataview.getUint32(${offset}, U.LE)`;
  if (kind == "ULongLong") return `this.dataview.getBigUint64(${offset}, U.LE)`;
  if (kind == "Bool") return `this.dataview.getUint8(${offset}) == 1`;
  if (kind == "Double") return `this.dataview.getFloat64(${offset}, U.LE)`;
  if (kind == "ULong") return `this.dataview.getBigUint64(${offset}, U.LE)`;
  if (kind == "Float") return `this.dataview.getFloat32(${offset}, U.LE)`;
  if (kind == "UShort") return `this.dataview.getUint16(${offset}, U.LE)`;
  if (kind == "Int") return `this.dataview.getInt32(${offset}, U.LE)`;
  throw new Error(
    `getter result: kind ${kind} in ${name}.${fname} not implemented`,
  );
}

function genSetterResult(ctx: SCtx, name: string, fname: string) {
  const { offset, kind, size } = ctx.structs[name].fields[fname];
  if (kind == "Record") {
    return `new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, ${size}).set(new Uint8Array(value.dataview.buffer, value.dataview.byteOffset, value.dataview.byteLength))`;
  }
  if (kind == "Pointer") {
    return `this.dataview.setBigUint64(${offset}, BigInt(Deno.UnsafePointer.value(value)), U.LE);`;
  }
  if (kind == "Enum") {
    return `this.dataview.setUint32(${offset}, value, U.LE)`;
  }
  if (kind == "UInt") return `this.dataview.setUint32(${offset}, value, U.LE)`;
  if (kind == "ULongLong") {
    return `this.dataview.setBigUint64(${offset}, BigInt(value), U.LE)`;
  }
  if (kind == "Bool") return `this.dataview.setUint8(${offset}, value ? 1 : 0)`;
  if (kind == "Double") {
    return `this.dataview.setFloat64(${offset}, value, U.LE)`;
  }
  if (kind == "ULong") {
    return `this.dataview.setBigUint64(${offset}, BigInt(value), U.LE)`;
  }
  if (kind == "Float") {
    return `this.dataview.setFloat32(${offset}, value, U.LE)`;
  }
  if (kind == "UShort") {
    return `this.dataview.setUint16(${offset}, value, U.LE)`;
  }
  if (kind == "Int") return `this.dataview.setInt32(${offset}, value, U.LE)`;
  throw new Error(
    `setter result: kind ${kind} in ${name}.${fname} not implemented`,
  );
}

function genSetterType(ctx: SCtx, name: string, fname: string) {
  const { kind, type } = ctx.structs[name].fields[fname];
  if (kind == "Record") return nofix(type!);
  if (kind == "Pointer") return "Deno.PointerValue";
  if (kind == "Enum") return `${nofix(type!)} | number`;
  if (kind == "UInt") return "number";
  if (kind == "ULongLong") return "bigint | number";
  if (kind == "Bool") return "boolean | number | bigint";
  if (kind == "Double") return "number";
  if (kind == "ULong") return "bigint | number";
  if (kind == "Float") return "number";
  if (kind == "UShort") return "number";
  if (kind == "Int") return "number";
  throw new Error(
    `setter type: kind ${kind} in ${name}.${fname} not implemented`,
  );
}

function translateKindToDeno(kind: string) {
  if (kind == "Pointer") return "Deno.PointerValue";
  if (kind == "Void") return "void";
  if (kind == "Enum") return "number";
  if (kind == "UInt") return "number";
  if (kind == "Record") return "Uint8Array";
  if (kind == "ULongLong") return "number | bigint";
  if (kind == "Bool") return "boolean";
  if (kind == "Double") return "number";
  if (kind == "ULong") return "number | bigint";
  if (kind == "Float") return "number";
  if (kind == "UShort") return "number";
  if (kind == "Int") return "number";
  throw new Error(`kind ${kind} not implemented`);
}

type ECtx = {
  functions: Record<string, FnSpec>;
  classes: Record<string, Record<string, FnSpec>>;
  callbacks: Record<string, CallbackSpec>;
};

type FnSpec = {
  parameters: ParamSpec[];
  result: ResultSpec;
};
type ResultSpec = {
  kind: string;
  type?: string;
};
type ParamSpec = ResultSpec & { name: string };

type CallbackSpec = {
  parameters: ResultSpec[];
  result: string;
};

function generateErgos(ctx: Ctx) {
  const { tu, dir } = ctx;
  const classes: Record<string, Record<string, FnSpec>> = {};
  const functions: Record<string, FnSpec> = {};
  const callbacks: Record<string, CallbackSpec> = {};
  tu.getCursor().visitChildren((cursor) => {
    if (cursor.kind == CXCursorKind.CXCursor_TypedefDecl) {
      const name = cursor.getSpelling();
      const implType = cursor.getTypedefDeclarationOfUnderlyingType()
        ?.getPointeeType();
      if (implType && implType.getSpelling().includes("Impl")) {
        classes[nofix(name)] = {};
      }
      if (name.includes("Callback")) {
        const result = implType!.getResultType()!.getSpelling();
        const parameters = [];
        for (let i = 0; i < implType!.getNumberOfArgumentTypes(); i++) {
          const t = implType!.getArgumentType(i);
          const type = t!.getSpelling();
          const kind = t!.getCanonicalType().getKindSpelling();
          parameters.push({ type, kind });
        }
        callbacks[name] = { result, parameters };
      }
    }
    return CXChildVisitResult.CXChildVisit_Recurse;
  });
  tu.getCursor().visitChildren((cursor) => {
    // handle function decl
    if (cursor.kind == CXCursorKind.CXCursor_FunctionDecl) {
      const name = cursor.getSpelling();
      let group: string | undefined = undefined;
      for (const g of Object.keys(classes)) {
        if (nofix(name).startsWith(g)) {
          if (group == null || g.length > group.length) {
            group = g;
          }
        }
      }
      const result = extractResSpec(cursor.getResultType()!, classes);
      const parameters = [];
      for (let i = 0; i < cursor.getNumberOfArguments(); i++) {
        const pCursor = cursor.getArgument(i)!;
        parameters.push(extractParamSpec(pCursor, classes));
      }
      if (group) {
        classes[group][name] = { result, parameters };
      } else {
        functions[name] = { result, parameters };
      }
    }
    return CXChildVisitResult.CXChildVisit_Continue;
  });
  const ectx = { classes, functions, callbacks };

  const fns = sep("\n")(km(functions, (x) => generateFunction(ectx, x)));
  const cls = sep("\n")(km(classes, (x) => generateClass(ectx, x)));
  const text = dedent`
    ${fns}
    ${cls}
  `;
  // actual write
  return text;
}

function generateClass(ctx: ECtx, className: string) {
  const specs = ctx.classes[className];
  const methods = sep("\n")(
    km(specs, (methodName) => generateClassMethod(ctx, className, methodName)),
  );
  return dedent`
    export class ${className} extends U.ClassBase { 
      constructor(pointer: Deno.PointerValue, parent?: U.ClassBase) {
        super(pointer, parent);
        U.registry.register(this, [pointer, lib.symbols.wgpu${className}Release]);
      }
      ${methods}
    }
  `;
}

function generateClassMethod(
  ctx: ECtx,
  className: string,
  methodId: string,
): string {
  const spec = ctx.classes[className][methodId];
  const name = camelCase(nofix(methodId).replace(className, ""));
  // hide release and reference
  if (name == "release" || name == "reference") return ``;
  const hasCallback = spec.parameters.some((x) => x.name == "callback");
  if (!hasCallback) {
    // ordinary function
    const params = sep(",")(spec.parameters.map((p, i) => {
      if (i == 0) return null;
      if (p.name == "userdata") return null;
      return `${p.name}: ${genType(p)}`;
    }));
    const res = genType(spec.result);
    const body = generateFunctionBody(ctx, className, methodId);
    return dedent`
      ${name}(${params}): ${res} {
        ${body}
      }
    `;
  } else {
    return generateFunctionWithCallback(ctx, className, methodId);
  }
}

function generateFunctionWithCallback(
  ctx: ECtx,
  arg2: string,
  arg3?: string,
): string {
  const method = arg3 != null;
  const functionId = method ? arg3 : arg2;
  const spec = method ? ctx.classes[arg2][functionId] : ctx.functions[arg2];
  const name = method
    ? camelCase(nofix(arg3).replace(arg2, ""))
    : camelCase(nofix(arg2));
  const prefix = method ? "" : `export function`;
  const idxCb = spec.parameters.findIndex((x) => x.name == "callback")!;
  const callbackSpec =
    ctx.callbacks[spec.parameters[idxCb].type!.replace("Definition", "")];
  const paramsBeforeCb = sep(",")(spec.parameters.map((p, i) => {
    if (i == 0) return null;
    if (i >= idxCb) return null;
    if (p.name == "userdata") return null;
    return `${p.name}: ${genType(p)}`;
  }));
  const cbDef = genType(spec.parameters[idxCb]);
  const argBefore = sep(",")(
    spec.parameters.map((p, i) =>
      method && i == 0 ? `this.pointer` : i >= idxCb ? null : genArgument(p)
    ),
  );
  const datasetters = `[` + sep(",")(callbackSpec.parameters.map((cs, i) => {
    return genResultTransform(ctx, cs, method, `args[${i}]`);
  })) + `]`;
  const promisetypes = `[${
    sep(",")(callbackSpec.parameters.map((cs) => genType(cs)))
  }]`;
  const acomma = idxCb != 0 ? "," : "";
  const pcomma = method ? (idxCb != 1 ? "," : "") : acomma;
  const needPoll = name.includes("Async");
  const promiseImpl = needPoll
    ? `
        let data: ${promisetypes};
        const device = this.findInFamily(Device);
        if (!device) throw new Error("WGPU Object must be associated to Device to call async method.")
        const cb = new Deno.UnsafeCallback(${cbDef}, (...args: U.CbParam<${cbDef}>) => {
          data = ${datasetters}
        })
        lib.symbols.${functionId}(${argBefore}${acomma} cb.pointer, null);
        const id = setInterval(() => {
          if (lib.symbols.wgpuDevicePoll(device.pointer, 0, null)) {
            clearInterval(id);
            res(data!);
          }
        }, 10);
      `
    : `
        const cb = new Deno.UnsafeCallback(${cbDef}, (...args: U.CbParam<${cbDef}>) => {
          res(${datasetters} as ${promisetypes});
        })
        lib.symbols.${functionId}(${argBefore}${acomma} cb.pointer, null);
      `;
  return dedent`\
    ${prefix} ${name}(${paramsBeforeCb}): Promise<${promisetypes}>;
    ${prefix} ${name}(${paramsBeforeCb}${pcomma} callback: (...args: ${promisetypes}) => void): Deno.UnsafeCallback<${cbDef}>
    ${prefix} ${name}(${paramsBeforeCb}${pcomma} callback: Deno.UnsafeCallback<${cbDef}>): void
    ${prefix} ${name}(${paramsBeforeCb}${pcomma} callback: Deno.PointerValue): void
    ${prefix} ${name}(${paramsBeforeCb}${pcomma} callback?: ((...args: ${promisetypes}) => void) | Deno.UnsafeCallback<${cbDef}> | Deno.PointerValue): void | Promise<${promisetypes}> | Deno.UnsafeCallback<${cbDef}> {
      if (callback == null) {
        return new Promise((res) => {
          ${promiseImpl}
        });
      } else if (callback instanceof Deno.UnsafeCallback) {
        lib.symbols.${functionId}(${argBefore}${acomma} callback.pointer, null);
      } else if (callback instanceof Function) {
        const cb = new Deno.UnsafeCallback(${cbDef}, (...args: U.CbParam<${cbDef}>) => {
          callback(...${datasetters})
        });
        lib.symbols.${functionId}(${argBefore}${acomma} cb.pointer, null);
        return cb;
      } else {
        lib.symbols.${functionId}(${argBefore}${acomma} callback, null);
      }
    }
  `;
}

function generateFunction(ctx: ECtx, functionId: string): string {
  const spec = ctx.functions[functionId];
  const name = camelCase(nofix(functionId));
  const hasCallback = spec.parameters.some((x) => x.name == "callback");
  if (!hasCallback) {
    const params = sep(",")(spec.parameters.map((p) => {
      if (p.name == "userdata") return null;
      return `${p.name}: ${genType(p)}`;
    }));
    const res = genType(spec.result);
    const body = generateFunctionBody(ctx, functionId);
    return dedent`\
    export function ${name}(${params}): ${res} {
      ${body}
    }
  `;
  } else {
    return generateFunctionWithCallback(ctx, functionId);
  }
}

function generateFunctionBody(ctx: ECtx, clsOrFn: string, optMId?: string) {
  let spec;
  let method: boolean;
  let id;
  if (optMId == null) {
    spec = ctx.functions[clsOrFn];
    method = false;
    id = clsOrFn;
  } else {
    spec = ctx.classes[clsOrFn][optMId];
    method = true;
    id = optMId;
  }
  const args = sep(",")(
    spec.parameters.map((p, i) =>
      method && i == 0 ? `this.pointer` : genArgument(p)
    ),
  );
  const transform = genResultTransform(ctx, spec.result, method);
  return dedent`
    const result = lib.symbols.${id}(${args});
    return ${transform}
  `;
}

function genType(spec: ResultSpec): string {
  let type;
  switch (spec.kind) {
    case "Enum":
      type = `${nofix(spec.type!)}`;
      break;
    case "Pointer":
      if (spec.type) {
        if (spec.type.includes("Callback")) {
          type = `${nofix(spec.type)}`;
        } else {
          if (spec.type.includes("*")) {
            type = translateKindToDeno(spec.kind);
          } else {
            type = nofix(spec.type);
          }
        }
      } else {
        type = translateKindToDeno(spec.kind);
      }
      break;
    default:
      type = translateKindToDeno(spec.kind);
  }
  return type;
}

function genResultTransform(
  ctx: ECtx,
  spec: ResultSpec,
  method: boolean,
  inner = "result",
): string {
  const { kind, type } = spec;
  if (kind == "Bool") return `${inner} == 1`;
  if (kind == "Enum") return `${inner} as ${nofix(type!)}`;
  if (kind == "Pointer") {
    if (type && nofix(type) in ctx.classes) {
      // creator
      return `new ${nofix(type)}(${inner} ${method ? ", this" : ""})`;
    }
  }
  return inner;
}

function genArgument(spec: ParamSpec): string {
  if (spec.name == "userdata") return "null";
  if (spec.kind == "Bool") return `${spec.name} ? 1 : 0`;
  if (spec.kind == "Pointer" && spec.type) {
    return `${spec.name}.pointer`;
  }
  return spec.name;
}

function extractResSpec(
  type: CXType,
  classes: Record<string, Record<string, FnSpec>>,
): ResultSpec {
  const kind = type.getCanonicalType()
    .getKindSpelling();
  const res: ResultSpec = { kind };
  if (kind == "Enum") res.type = nofix(type.getSpelling());
  if (kind == "Pointer") {
    // class
    const t = type.getSpelling();
    for (const g of Object.keys(classes)) {
      if (nofix(t) == g) res.type = g;
    }
    // callback
    if (t.includes("Callback")) res.type = t + "Definition";
  }
  return res;
}

function extractParamSpec(
  cursor: CXCursor,
  classes: Record<string, Record<string, FnSpec>>,
): ParamSpec {
  const param = extractResSpec(cursor.getType()!, classes) as ParamSpec;
  param.name = cursor.getSpelling();
  return param;
}

function generateCallbacks(ctx: Ctx) {
  const { callbacks } = ctx;
  return sep("\n")(km(callbacks, (name) => {
    return dedent`
      export const ${name}Definition = ${
      JSON.stringify(callbacks[name])
    } as const;
      export type ${name}Definition = typeof ${name}Definition;
    `;
  }));
}
