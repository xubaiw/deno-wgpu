import { CXCursorKind } from "https://deno.land/x/libclang@1.0.0-beta.8/include/typeDefinitions.ts";
import {
  CXChildVisitResult,
} from "https://deno.land/x/libclang@1.0.0-beta.8/mod.ts";
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
  Float: "bigint",
  UShort: "number",
  Int: "number",
};

export const genLibAndFunctions = async (
  tu,
  lpath,
  fpath
) => {
  const symbols = {};
  const s2 = {};

  tu.getCursor().visitChildren((cursor) => {
    // handle function decl
    if (cursor.kind == CXCursorKind.CXCursor_FunctionDecl) {
      const name = cursor.getSpelling();
      const result = getNativeType(cursor.getResultType());
      const r2 =
        TYPE_MAP[cursor.getResultType().getCanonicalType().getKindSpelling()];
      const parameters = [];
      const p2 = [];
      const nArgs = cursor.getNumberOfArguments();
      for (let i = 0; i < nArgs; i++) {
        const argCursor = cursor.getArgument(i);
        const type = getNativeType(argCursor.getType());
        parameters.push(type);
        p2.push([
          argCursor.getSpelling(),
          TYPE_MAP[argCursor.getType()?.getCanonicalType().getKindSpelling()],
        ]);
      }
      symbols[name] = {
        result,
        parameters,
      };
      s2[name] = {
        r2,
        p2,
      };
    }
    return CXChildVisitResult.CXChildVisit_Continue;
  });

  const ltext = dedent`\
    import { prepare } from "../util/prepare.ts";

    const libPath = await prepare();

    export const lib = Deno.dlopen(libPath, ${
    JSON.stringify(symbols, undefined, 2)
  }); \n\n`;
  await Deno.writeTextFile(lpath, ltext);

  let ftext = `import { lib } from "./lib.js";\n\n`;
  for (const [sn, sd] of Object.entries(s2)) {
    ftext += `export const ${sn} = (\n`;
    for (const p of sd.p2) {
      ftext += `  ${p[0]}: ${p[1]},\n`;
    }
    ftext += `): ${sd.r2} =>\n  lib.symbols.${sn}(\n`;
    for (const p of sd.p2) {
      ftext += `    ${p[0]}`;
      if (p[1] == "boolean") {
        ftext += ` ? 1 : 0`;
      }
      ftext += `,\n`
    }
    ftext += `  )`;
    if (sd.r2 == "boolean") ftext += " == 1";
    ftext += `;\n\n`;
  }
  await Deno.writeTextFile(fpath, ftext);
};

/**
 * Extract Deno FFI native type from type metadata
 */
const getNativeType = (type) => {
  const name = type.getSpelling();
  const canonicalKind = type.getCanonicalType().getKindSpelling();
  const size = type.getSizeOf();
  switch (canonicalKind) {
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
      if (size > 0) return { struct: Array(size).fill("u8") };
      else {
        throw new Error(
          `record ${name} of negative size ${size} is not implemented`,
        );
      }
    // handle primitive type
    default: {
      const unsigned = canonicalKind == "Enum" ||
        canonicalKind.startsWith("U");
      switch (size) {
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
            `type ${name} of size ${size} is not implemented`,
          );
      }
    }
  }
};
