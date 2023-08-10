import { CXCursorKind } from "https://deno.land/x/libclang@1.0.0-beta.8/include/typeDefinitions.ts";
import {
  CXChildVisitResult,
  CXCursor,
  CXType,
} from "https://deno.land/x/libclang@1.0.0-beta.8/mod.ts";
import { camelCase, Ctx, join, nofix, sep } from "./util.ts";
import { dedent } from "npm:@qnighy/dedent";

const TYPE_MAP = {
  Pointer: "Deno.PointerValue",
  Void: "void",
  Enum: "number",
  UInt: "number",
  Record: "Uint8Array",
  ULongLong: "number | bigint",
  Bool: "boolean",
  Double: "number",
  ULong: "number | bigint",
  Float: "number",
  UShort: "number",
  Int: "number",
};

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
  kind: keyof typeof TYPE_MAP;
  type?: string;
};
type ParamSpec = ResultSpec & { name: string };

type CallbackSpec = {
  parameters: ResultSpec[];
  result: string;
};

export async function genErgos(ctx: Ctx) {
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
      let group = undefined;
      for (const g of Object.keys(classes)) {
        if (nofix(name).startsWith(g)) {
          group = g;
          break;
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

  const header = genHeader();
  const fns = sep("\n")(km(functions, (x) => genFunction(ectx, x)));
  const cls = sep("\n")(km(classes, (x) => genClass(ectx, x)));
  const text = dedent`
    ${header}

    ${fns}

    ${cls}
  `;
  // actual write
  await Deno.writeTextFile(join(dir, "ergo.ts"), text);
}

function genHeader() {
  return dedent`\
    /// <reference types="../../vendor/deno.unstable.d.ts" />

    import lib from "./symbol.ts";
    import * as E from "./enum.ts";
    import * as C from "./callback.ts";
    import * as UC from "../util/conv.ts";

    `;
}

function genClass(ctx: ECtx, className: string) {
  const specs = ctx.classes[className];
  const methods = sep("\n")(
    km(specs, (methodName) => genMethod(ctx, className, methodName)),
  );
  return dedent`
    export class ${className} extends UC.Base { 
      constructor(pointer: Deno.PointerValue, parent?: UC.Base) {
        super(pointer, parent);
      }
      ${methods}
    }
  `;
}

function genMethod(ctx: ECtx, className: string, methodId: string): string {
  const spec = ctx.classes[className][methodId];
  const name = camelCase(nofix(methodId).replace(className, ""));
  const hasCallback = spec.parameters.some((x) => x.name == "callback");
  if (!hasCallback) {
    // ordinary function
    const params = sep(",")(spec.parameters.map((p, i) => {
      if (i == 0) return null;
      if (p.name == "userdata") return null;
      return `${p.name}: ${genType(p)}`;
    }));
    const res = genType(spec.result);
    const body = genFunctionBody(ctx, className, methodId);
    return dedent`
      ${name}(${params}): ${res} {
        ${body}
      }
    `;
  } else {
    return genFunctionWithCallback(ctx, className, methodId);
  }
}

function genFunctionWithCallback(
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
        const cb = new Deno.UnsafeCallback(${cbDef}, (...args: UC.CbParam<${cbDef}>) => {
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
        const cb = new Deno.UnsafeCallback(${cbDef}, (...args: UC.CbParam<${cbDef}>) => {
          res(${datasetters} as ${promisetypes});
        })
        lib.symbols.${functionId}(${argBefore}${acomma} cb.pointer, null);
      `;
  return dedent`\
    ${prefix} ${name}(${paramsBeforeCb}): Promise<${promisetypes}>;
    ${prefix} ${name}(${paramsBeforeCb}${pcomma} callback: UC.CbFn<${cbDef}>): Deno.UnsafeCallback<${cbDef}>
    ${prefix} ${name}(${paramsBeforeCb}${pcomma} callback: Deno.UnsafeCallback<${cbDef}>): void
    ${prefix} ${name}(${paramsBeforeCb}${pcomma} callback: Deno.PointerValue): void
    ${prefix} ${name}(${paramsBeforeCb}${pcomma} callback?: UC.CbFn<${cbDef}> | Deno.UnsafeCallback<${cbDef}> | Deno.PointerValue): void | Promise<${promisetypes}> | Deno.UnsafeCallback<${cbDef}> {
      if (callback == null) {
        return new Promise((res) => {
          ${promiseImpl}
        });
      } else if (callback instanceof Deno.UnsafeCallback) {
        lib.symbols.${functionId}(${argBefore}${acomma} callback.pointer, null);
      } else if (callback instanceof Function) {
        const cb = new Deno.UnsafeCallback(${cbDef}, callback);
        lib.symbols.${functionId}(${argBefore}${acomma} cb.pointer, null);
        return cb;
      } else {
        lib.symbols.${functionId}(${argBefore}${acomma} callback, null);
      }
    }
  `;
}

function genFunction(ctx: ECtx, functionId: string): string {
  const spec = ctx.functions[functionId];
  const name = camelCase(nofix(functionId));
  const hasCallback = spec.parameters.some((x) => x.name == "callback");
  if (!hasCallback) {
    const params = sep(",")(spec.parameters.map((p) => {
      if (p.name == "userdata") return null;
      return `${p.name}: ${genType(p)}`;
    }));
    const res = genType(spec.result);
    const body = genFunctionBody(ctx, functionId);
    return dedent`\
    export function ${name}(${params}): ${res} {
      ${body}
    }
  `;
  } else {
    return genFunctionWithCallback(ctx, functionId);
  }
}

function genFunctionBody(ctx: ECtx, clsOrFn: string, optMId?: string) {
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
      type = `E.${nofix(spec.type!)}`;
      break;
    case "Pointer":
      if (spec.type) {
        if (spec.type.includes("Callback")) {
          type = `C.${nofix(spec.type)}`;
        } else {
          if (spec.type.includes("*")) {
            type = TYPE_MAP[spec.kind];
          } else {
            type = nofix(spec.type);
          }
        }
      } else {
        type = TYPE_MAP[spec.kind];
      }
      break;
    default:
      type = TYPE_MAP[spec.kind];
  }
  return type;
}

const genResultTransform = (
  ctx: ECtx,
  spec: ResultSpec,
  method: boolean,
  inner = "result",
): string => {
  const { kind, type } = spec;
  if (kind == "Bool") return `${inner} == 1`;
  if (kind == "Enum") return `${inner} as E.${nofix(type!)}`;
  if (kind == "Pointer") {
    if (type && nofix(type) in ctx.classes) {
      // creator
      return `new ${nofix(type)}(${inner} ${method ? ", this" : ""})`;
    }
  }
  return inner;
};

const genArgument = (spec: ParamSpec): string => {
  if (spec.name == "userdata") return "null";
  if (spec.kind == "Bool") return `${spec.name} ? 1 : 0`;
  if (spec.kind == "Pointer" && spec.type) {
    return `${spec.name}.pointer`;
  }
  return spec.name;
};

const extractResSpec = (
  type: CXType,
  classes: Record<string, Record<string, FnSpec>>,
): ResultSpec => {
  const kind = type.getCanonicalType()
    .getKindSpelling() as keyof typeof TYPE_MAP;
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
};

const extractParamSpec = (
  cursor: CXCursor,
  classes: Record<string, Record<string, FnSpec>>,
): ParamSpec => {
  const param = extractResSpec(cursor.getType()!, classes) as ParamSpec;
  param.name = cursor.getSpelling();
  return param;
};

function km<T>(
  xs: Record<string, unknown>,
  fn: (x: string, i: number) => T,
): T[] {
  return Object.keys(xs).map(fn);
}
