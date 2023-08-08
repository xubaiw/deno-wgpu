import {
  CXChildVisitResult,
  CXCursorKind,
} from "https://deno.land/x/libclang@1.0.0-beta.8/mod.ts";

export const genStructs = async (tu, path) => {
  const structs = {};
  tu.getCursor().visitChildren((cursor) => {
    if (cursor.kind == CXCursorKind.CXCursor_StructDecl) {
      const name = cursor.getSpelling().replace(/^WGPU/, "");
      const size = cursor.getType().getSizeOf();
      const fields = {};
      cursor.visitChildren((cursor) => {
        if (cursor.kind == CXCursorKind.CXCursor_FieldDecl) {
          const name = cursor.getSpelling();
          const offset = cursor.getOffsetOfField() / 8;
          const kind = cursor.getType().getCanonicalType().getKindSpelling();
          fields[name] = { offset, kind };
          if (kind == "Record") {
            fields[name]["type"] = cursor.getType().getSpelling().replace(/^WGPU/, "");
            fields[name]["size"] = cursor.getType().getSizeOf();
          }
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
      text += `export const ${sname} = {\n`;
      text += `  name: "${sname}",\n`;
      text += `  size: ${sd.size},\n`;
      text += `  fields: {\n`;
      for (const [fname, fd] of Object.entries(sd.fields)) {
        text += `    ${fname}: {\n`;
        text += `      offset: ${fd.offset},\n`;
        text += `      kind: "${fd.kind}",\n`;
        if (fd.kind == "Record") {
          text += `      size: ${fd.size},\n`;
          text += `      type: () => ${fd.type},\n`;
        }
        text += `    },\n`;
      }
      text += `  },\n`;
      text += `} as const;\n\n`;
    }
  }
  await Deno.writeTextFile(path, text);
};