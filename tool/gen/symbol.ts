import {
  CXChildVisitResult,
  CXCursorKind,
  CXType,
} from "https://deno.land/x/libclang@1.0.0-beta.8/mod.ts";
import { Ctx, dedent, join } from "./util.ts";

export const genSymbols = async (ctx: Ctx) => {
  const { tu, dir } = ctx;
  const symbols: Record<string, unknown> = {};
  // visit
  tu.getCursor().visitChildren((cursor) => {
    // handle only function decl
    if (cursor.kind == CXCursorKind.CXCursor_FunctionDecl) {
      const name = cursor.getSpelling();
      const result = getNativeType(cursor.getResultType()!);
      const parameters = [];
      for (let i = 0; i < cursor.getNumberOfArguments(); i++) {
        const argCursor = cursor.getArgument(i)!;
        const type = getNativeType(argCursor.getType()!);
        parameters.push(type);
      }
      // collect to symbol record
      symbols[name] = { result, parameters };
    }
    return CXChildVisitResult.CXChildVisit_Continue;
  });
  // generate file content
  const json = JSON.stringify(symbols, undefined, 2);
  const text = dedent`\
    import { prepare } from "../util/prepare.ts";

    const libPath = await prepare();

    export default Deno.dlopen(libPath, ${json});
  `;
  // write
  await Deno.writeTextFile(join(dir, `symbol.ts`), text);
};

const TYPE_MAP = {
  Pointer: "pointer",
  ULong: "u64",
  Bool: "u8",
  Void: "void",
  Enum: "u32",
  ULongLong: "u64",
  UInt: "u32",
  Int: "i32",
  Float: "f32",
};

export const getNativeType = (type: CXType) =>
  TYPE_MAP[type.getCanonicalType().getKindSpelling() as keyof typeof TYPE_MAP];
