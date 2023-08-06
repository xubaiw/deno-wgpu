#!/usr/bin/env -S deno run -A --unstable
/**
 * @file Usage: LIBCLANG_PATH=<path-to-libclang> deno run -A --unstable gen.ts
 */

import {
  EnumConstantDecl,
  generateMetadata,
  Metadata,
  TypeMetadata,
} from "https://denopkg.com/shirakaba/clang_metagen_deno@master/mod.ts";

async function main() {
  const metadata = loadMetadata();
  const functions = extractFunctions(metadata);
  const constants = extractConstants(metadata);
  await dumpFfiFile(functions, constants);
}

async function dumpFfiFile(
  functions: Deno.ForeignLibraryInterface,
  constants: EnumConstantDecl[],
) {
  await Deno.writeTextFile(
    new URL("../src/ffi.ts", import.meta.url),
    `import { prepare } from "./prepare.ts";

const libPath = await prepare();

${constants.map((c) => `export const ${c.name} = ${c.value};`).join("\n")}

export const lib = Deno.dlopen(libPath, ${
      JSON.stringify(functions, undefined, 2)
    } as const);
`,
  );
}

function extractConstants(metadata: Metadata): EnumConstantDecl[] {
  const res: EnumConstantDecl[] = [];
  for (const e of metadata.enumDecls) {
    for (const c of e.constants) {
      res.push(c);
    }
  }
  return res;
}

/**
 * Extract FFI function definitions from metadata
 */
function extractFunctions(metadata: Metadata): Deno.ForeignLibraryInterface {
  const symbols: Deno.ForeignLibraryInterface = {};
  for (const fn of metadata.functionDecls) {
    symbols[fn.name] = {
      parameters: fn.parameters.map((p) =>
        getFfiType(p.type) as Deno.NativeType
      ),
      result: getFfiType(fn.result),
    };
  }
  return symbols;
}

/**
 * Load metadata from hard-coded header file path
 */
function loadMetadata() {
  return generateMetadata({
    umbrellaHeader: new URL("../vendor/wgpu.h", import.meta.url),
  });
}

/**
 * Extract Deno FFI native type from type metadata
 */
function getFfiType(type: TypeMetadata): Deno.NativeResultType {
  switch (type.canonicalKind) {
    case "Pointer":
      return "pointer";
    case "Void":
      return "void";
    case "Float":
      return "f32";
    case "Double":
      return "f64";
    // XXX: use actual record
    case "Record":
      if (type.size > 0) return { struct: Array(type.size).fill("u8") };
      else {
        throw new Error(
          `record ${type.name} of negative size ${type.size} is not implemented`,
        );
      }
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
}

if (import.meta.main) await main();
