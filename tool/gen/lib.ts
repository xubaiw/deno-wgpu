import { CXCursorKind } from "https://deno.land/x/libclang@1.0.0-beta.8/include/typeDefinitions.ts";
import {
  CXChildVisitResult,
  CXTranslationUnit,
  CXType,
} from "https://deno.land/x/libclang@1.0.0-beta.8/mod.ts";
import { dedent } from "npm:@qnighy/dedent";

export const genLib = async (tu: CXTranslationUnit, path: string) => {
  const symbols: Deno.ForeignLibraryInterface = {};

  tu.getCursor().visitChildren((cursor) => {
    // handle function decl
    if (cursor.kind == CXCursorKind.CXCursor_FunctionDecl) {
      const name = cursor.getSpelling();
      const result = getNativeType(cursor.getResultType()!);
      const parameters: Deno.NativeType[] = [];
      const nArgs = cursor.getNumberOfArguments();
      for (let i = 0; i < nArgs; i++) {
        const argCursor = cursor.getArgument(i)!;
        const type = getNativeType(argCursor.getType()!) as Deno.NativeType;
        parameters.push(type);
      }
      symbols[name] = {
        result,
        parameters,
      };
    }
    return CXChildVisitResult.CXChildVisit_Continue;
  });

  // for (const fn of ctx.metadata.functionDecls) {
  //   symbols[fn.name] = {
  //     parameters: fn.parameters.map((p) =>
  //       getNativeType(p.type) as Deno.NativeType
  //     ),
  //     result: getNativeType(fn.result),
  //   };
  // }
  const text = dedent`\
    import { prepare } from "../util/prepare.ts";

    const libPath = await prepare();

    export const lib = Deno.dlopen(libPath, ${
    JSON.stringify(symbols, undefined, 2)
  }); \n\n`;
  await Deno.writeTextFile(path, text);
};

/**
 * Extract Deno FFI native type from type metadata
 */
const getNativeType = (type: CXType): Deno.NativeResultType => {
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
