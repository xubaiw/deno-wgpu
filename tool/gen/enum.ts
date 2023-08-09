import {
  CXChildVisitResult,
  CXCursorKind,
} from "https://deno.land/x/libclang@1.0.0-beta.8/mod.ts";
import { Ctx, join } from "./util.ts";

export const genEnums = async (ctx: Ctx) => {
  const { tu, dir } = ctx;
  const enums: Record<string, Record<string, unknown>> = {};
  // visit
  tu.getCursor().visitChildren((cursor) => {
    // only handle enums
    if (cursor.kind == CXCursorKind.CXCursor_EnumDecl) {
      const name = removePrefix(cursor.getSpelling());
      if (enums[name] == null) enums[name] = {};
      // visit sub constants
      cursor.visitChildren((cursor) => {
        // handle constants
        if (cursor.kind == CXCursorKind.CXCursor_EnumConstantDecl) {
          const key = removePrefix(cursor.getSpelling());
          const value = cursor.getEnumConstantDeclarationUnsignedValue();
          enums[name][key] = value;
        }
        return CXChildVisitResult.CXChildVisit_Continue;
      });
    }
    return CXChildVisitResult.CXChildVisit_Continue;
  });
  // generate text content
  let text = "";
  for (const [name, kv] of Object.entries(enums)) {
    text += `export enum ${name} {\n`;
    for (const [k, v] of Object.entries(kv)) {
      text += `  ${k} = ${v},\n`;
    }
    text += `}\n\n`;
  }
  // actual write
  await Deno.writeTextFile(join(dir, "enum.ts"), text);
};

const removePrefix = (text: string) => text.replace(/^WGPU/, "")
