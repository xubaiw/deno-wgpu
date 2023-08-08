import {
  CXChildVisitResult,
  CXCursorKind,
} from "https://deno.land/x/libclang@1.0.0-beta.8/mod.ts";

/** Generate TypeScript enum definition from c headers. */
export const genEnums = async (tu, path) => {
  const enums = {};
  tu.getCursor().visitChildren((cursor) => {
    // handle enums
    if (cursor.kind == CXCursorKind.CXCursor_EnumDecl) {
      const name = cursor.getSpelling().replace(/^WGPU/, "");
      // empty record
      if (enums[name] == null) enums[name] = {};
      cursor.visitChildren((cursor) => {
        // handle constants
        if (cursor.kind == CXCursorKind.CXCursor_EnumConstantDecl) {
          const key = cursor.getSpelling().replace(/^WGPU/, "");
          const value = cursor.getEnumConstantDeclarationUnsignedValue();
          enums[name][key] = value;
        }
        return CXChildVisitResult.CXChildVisit_Continue;
      });
    }
    return CXChildVisitResult.CXChildVisit_Continue;
  });
  let text = "";
  for (const [name, kv] of Object.entries(enums)) {
    text += `export enum ${name} {\n`;
    for (const [k, v] of Object.entries(kv)) {
      text += `  ${k} = ${v},\n`;
    }
    text += `}\n\n`;
  }
  await Deno.writeTextFile(path, text);
};