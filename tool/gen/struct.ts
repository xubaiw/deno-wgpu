// deno-lint-ignore-file no-explicit-any
import {
  CXChildVisitResult,
  CXCursorKind,
} from "https://deno.land/x/libclang@1.0.0-beta.8/mod.ts";
import { Ctx, join, removePrefix } from "./util.ts";

export const genStructs = async (ctx: Ctx) => {
  const { tu, dir } = ctx;
  const structs: Record<string, any> = {};
  // visit
  tu.getCursor().visitChildren((cursor) => {
    // only handle struct decl
    if (cursor.kind == CXCursorKind.CXCursor_StructDecl) {
      const name = removePrefix(cursor.getSpelling());
      const size = cursor.getType()!.getSizeOf();
      const fields: Record<string, any> = {};
      cursor.visitChildren((cursor) => {
        if (cursor.kind == CXCursorKind.CXCursor_FieldDecl) {
          const name = cursor.getSpelling();
          const offset = cursor.getOffsetOfField() / 8;
          const kind = cursor.getType()!.getCanonicalType().getKindSpelling();
          fields[name] = { offset, kind };
          if (kind == "Record") {
            fields[name]["type"] = removePrefix(
              cursor.getType()!.getSpelling(),
            );
            fields[name]["size"] = cursor.getType()!.getSizeOf();
          }
        }
        return CXChildVisitResult.CXChildVisit_Continue;
      });
      structs[name] = { name, size, fields };
    }
    return CXChildVisitResult.CXChildVisit_Recurse;
  });
  // generate file content
  let text = ``;
  for (const [sname, sd] of Object.entries(structs)) {
    if (sd.size > 0) {
      text += `export const ${sname} = {\n`;
      text += `  name: "${sname}",\n`;
      text += `  size: ${sd.size},\n`;
      text += `  fields: {\n`;
      for (const [fname, fd] of Object.entries(sd.fields)) {
        text += `    ${fname}: {\n`;
        const fda = fd as any;
        text += `      offset: ${fda.offset},\n`;
        text += `      kind: "${fda.kind}",\n`;
        if (fda.kind == "Record") {
          text += `      size: ${fda.size},\n`;
          text += `      type: () => ${fda.type},\n`;
        }
        text += `    },\n`;
      }
      text += `  },\n`;
      text += `} as const;\n\n`;
    }
  }
  // actual write
  await Deno.writeTextFile(join(dir, "struct.ts"), text);
};
