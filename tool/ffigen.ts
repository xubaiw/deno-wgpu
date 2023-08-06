#!/usr/bin/env -S deno run -A --unstable
/**
 * @file Usage: LIBCLANG_PATH=<path-to-libclang> deno run -A --unstable gen.ts
 */

import {
  generateMetadata,
  TypeMetadata,
} from "https://denopkg.com/shirakaba/clang_metagen_deno@master/mod.ts";

if (import.meta.main) main();

function main() {
  const metadata = generateMetadata({
    umbrellaHeader: new URL("../vendor/wgpu.h", import.meta.url),
  });
  const symbols: Deno.ForeignLibraryInterface = {};
  for (const fn of metadata.functionDecls) {
    symbols[fn.name] = {
      parameters: fn.parameters.map((p) =>
        toFFIType(p.type) as Deno.NativeType
      ),
      result: toFFIType(fn.result),
    };
  }
  Deno.writeTextFileSync(
    new URL("../src/ffi.ts", import.meta.url),
    `import { prepare } from "./prepare.ts";

const libPath = await prepare();

export const lib = Deno.dlopen(libPath, ${
      JSON.stringify(symbols, undefined, 2)
    } as const);
    `,
  );

  JSON.stringify(symbols, undefined, 2);
}

function toFFIType(type: TypeMetadata): Deno.NativeResultType {
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
