#!/usr/bin/env -S deno run -A --unstable
/**
 * @file Usage: LIBCLANG_PATH=<path-to-libclang> deno run -A --unstable gen.ts
 */

import {
  generateMetadata,
  Metadata,
  StructDecl,
  StructFieldDecl,
  TypeMetadata,
} from "https://denopkg.com/shirakaba/clang_metagen_deno@master/mod.ts";
import { dedent } from "npm:@qnighy/dedent";

const main = async () => {
  const metadata = loadMetadata();
  const ctx = { sink: "", metadata };
  dumpHeader(ctx);
  dumpFunctions(ctx);
  dumpEnums(ctx);
  dumpStructs(ctx);
  await Deno.writeTextFile(new URL("../src/ffi.ts", import.meta.url), ctx.sink);
};

type Ctx = { sink: string; metadata: Metadata };

const dumpHeader = (ctx: Ctx) => {
  ctx.sink += dedent`\
    import { endianness } from "node:os"
    import { prepare } from "./prepare.ts";
  
    const littleEndian = endianness() == "LE" ? true : false;
    const libPath = await prepare();` + "\n\n";
};

const dumpFunctions = (ctx: Ctx) => {
  const symbols: Deno.ForeignLibraryInterface = {};
  for (const fn of ctx.metadata.functionDecls) {
    symbols[fn.name] = {
      parameters: fn.parameters.map((p) =>
        getNativeType(p.type) as Deno.NativeType
      ),
      result: getNativeType(fn.result),
    };
  }
  const ss = JSON.stringify(symbols, undefined, 2);
  ctx.sink += `export const lib = Deno.dlopen(libPath, ${ss}); \n\n`;
};

const dumpEnums = (ctx: Ctx) => {
  const enums: Record<string, Record<string, string>> = {};
  for (const e of ctx.metadata.enumDecls) {
    for (const c of e.constants) {
      const [prefix, key] = c.name.split("_");
      if (enums[prefix] == null) enums[prefix] = {};
      enums[prefix][key] = c.value;
    }
  }
  for (const [p, kv] of Object.entries(enums)) {
    ctx.sink += `export enum ${p} {\n`;
    for (const [k, v] of Object.entries(kv)) {
      const score = k.match(/^\d/) ? "_" : "";
      ctx.sink += `  ${score + k} = ${v},\n`;
    }
    ctx.sink += `}\n\n`;
  }
};

const dumpStructs = (ctx: Ctx) => {
  // collect all structs beforehand to avoid forward declaration
  const structs: Record<string, StructDecl> = {};
  for (const s of ctx.metadata.structDecls) {
    structs[s.name] = s;
  }
  for (const s of Object.values(structs)) {
    if (s.size > 0) {
      ctx.sink += dedent`
        export class ${s.name} {
          view: DataView;
          constructor(view?: DataView) {
            if (view) this.view = view;
            else this.view = new DataView(new ArrayBuffer(${s.size}))
          }
          static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
            const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(${s.size}));
            return new ${s.name}(view);
          }

          get pointer(): Deno.PointerValue {
            const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
            if (bufPtr == null) return null;
            return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
          }
      `;
      for (const f of s.fields) {
        ctx.sink += dedent`
          \
            get ${f.name}(): ${getType(f.type)} {
              return ${getGetter(f)};
            }
            set ${f.name}(value: ${getType(f.type)}) {
              ${getSetter(f)};
            }
        `;
      }
      ctx.sink += `}\n\n`;
    }
  }
};

const getGetter = (field: StructFieldDecl): string => {
  const type = field.type;
  const { name, canonicalKind, size } = type;
  const fieldOffset = field.offset / 8;
  switch (canonicalKind) {
    case "Pointer":
      return `Deno.UnsafePointer.create(this.view.getBigUint64(${fieldOffset}, littleEndian))`;
    case "Float":
      return `this.view.getFloat32(${fieldOffset}, littleEndian)`;
    case "Double":
      return `this.view.getFloat64(${fieldOffset}, littleEndian)`;
    case "Record":
      return `new ${name}(new DataView(this.view.buffer, this.view.byteOffset + ${fieldOffset}))`;
    // handle primitive type
    default: {
      const unsigned = canonicalKind == "Enum" ||
        canonicalKind.startsWith("U");
      let getter = "this.view.get";
      switch (size) {
        case 1:
          getter += unsigned ? "Uint8" : "Int8";
          break;
        case 2:
          getter += unsigned ? "Uint16" : "Int16";
          break;
        case 4:
          getter += unsigned ? "Uint32" : "Int32";
          break;
        case 8:
          getter += unsigned ? "BigUint64" : "BigInt64";
          break;
        default:
          throw new Error(
            `type ${name} of size ${size} is not implemented`,
          );
      }
      getter += `(` + fieldOffset;
      if (size != 1) getter += `, littleEndian`;
      getter += `)`;
      return getter;
    }
  }
};

const getSetter = (field: StructFieldDecl): string => {
  const type = field.type;
  const { name, canonicalKind, size } = type;
  const fieldOffset = field.offset / 8;
  switch (canonicalKind) {
    case "Pointer":
      return `this.view.setBigUint64(${fieldOffset}, BigInt(Deno.UnsafePointer.value(value)), littleEndian)`
    case "Float":
      return `this.view.setFloat32(${fieldOffset}, value, littleEndian)`;
    case "Double":
      return `this.view.setFloat64(${fieldOffset}, value, littleEndian)`;
    case "Record":
      return `new Uint8Array(this.view.buffer, this.view.byteOffset + ${fieldOffset}, ${size}).set(new Uint8Array(value.view.buffer, value.view.byteOffset, ${size}))`;
    // handle primitive type
    default: {
      const unsigned = canonicalKind == "Enum" ||
        canonicalKind.startsWith("U");
      let setter = "this.view.set";
      switch (size) {
        case 1:
          setter += unsigned ? "Uint8" : "Int8";
          break;
        case 2:
          setter += unsigned ? "Uint16" : "Int16";
          break;
        case 4:
          setter += unsigned ? "Uint32" : "Int32";
          break;
        case 8:
          setter += unsigned ? "BigUint64" : "BigInt64";
          break;
        default:
          throw new Error(
            `type ${name} of size ${size} is not implemented`,
          );
      }
      setter += `(` + fieldOffset + `, value`;
      if (size != 1) setter += `, littleEndian`;
      setter += `)`;
      return setter;
    }
  }
};
/**
 * Load metadata from hard-coded header file path
 */
const loadMetadata = () => {
  return generateMetadata({
    umbrellaHeader: new URL("../vendor/wgpu.h", import.meta.url),
  });
};

const getType = (type: TypeMetadata): string => {
  switch (type.canonicalKind) {
    case "Pointer":
      return "Deno.PointerValue";
    case "Bool":
      return "boolean";
    case "Enum":
      return type.name;
    case "Record":
      return type.name;
    default:
      return type.size > 4 ? "bigint" : "number"          
  }
};

/**
 * Extract Deno FFI native type from type metadata
 */
const getNativeType = (type: TypeMetadata): Deno.NativeResultType => {
  switch (type.canonicalKind) {
    case "Pointer":
      return "pointer";
    case "Void":
      return "void";
    case "Float":
      return "f32";
    case "Double":
      return "f64";
    case "Record":
      // use u8 to emulate record size
      if (type.size > 0) return { struct: Array(type.size).fill("u8") };
      else {
        throw new Error(
          `record ${type.name} of negative size ${type.size} is not implemented`,
        );
      }
    // handle primitive type
    default: {
      const unsigned = type.canonicalKind == "Enum" ||
        type.canonicalKind.startsWith("U");
      switch (type.size) {
        case 1:
          return unsigned ? "u8" : "i8";
        case 2:
          return unsigned ? "u16" : "u16";
        case 4:
          return unsigned ? "u32" : "u32";
        case 8:
          return unsigned ? "u64" : "u64";
        default:
          throw new Error(
            `type ${type.name} of size ${type.size} is not implemented`,
          );
      }
    }
  }
};

if (import.meta.main) await main();
