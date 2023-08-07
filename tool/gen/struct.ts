import {
  CXChildVisitResult,
  CXCursorKind,
  CXTranslationUnit,
} from "https://deno.land/x/libclang@1.0.0-beta.8/mod.ts";

type StructDecl = {
  name: string
  size: number;
  fields: Record<string, FieldDecl>;
};

type FieldDecl = {
  size: number;
  offset: number;
  kind: string;
};

export const genStructs = async (tu: CXTranslationUnit, path: string) => {
  const structs: Record<string, StructDecl> = {};
  tu.getCursor().visitChildren((cursor) => {
    if (cursor.kind == CXCursorKind.CXCursor_StructDecl) {
      const name = cursor.getSpelling();
      const size = cursor.getType()!.getSizeOf();
      const fields: Record<string, FieldDecl> = {};
      cursor.visitChildren((cursor) => {
        if (cursor.kind == CXCursorKind.CXCursor_FieldDecl) {
          const name = cursor.getSpelling();
          const size = cursor.getType()!.getSizeOf();
          const offset = cursor.getOffsetOfField() / 8;
          const kind = cursor.getType()!.getCanonicalType().getKindSpelling();
          fields[name] = { size, offset, kind };
        }
        return CXChildVisitResult.CXChildVisit_Continue;
      });
      structs[name] = { name, size, fields };
    }
    return CXChildVisitResult.CXChildVisit_Recurse;
  });
  // write struct to file
  let text = ``;
  for (const [sname, sd] of Object.entries(structs)) {
    if (sd.size > 0) {
      text += `export const ${sname} = ${
        JSON.stringify(sd, undefined, 2)
      } as const;\n\n`;
      text += `export type ${sname} = typeof ${sname};\n\n`
    }
  }
  await Deno.writeTextFile(path, text);
};
