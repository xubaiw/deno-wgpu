import {
  CXChildVisitResult,
  CXCursorKind,
} from "https://deno.land/x/libclang@1.0.0-beta.8/mod.ts";

export const genCallbacks = async (tu, path) => {
  const cbs = {};
  tu.getCursor().visitChildren((cursor) => {
    if (cursor.kind == CXCursorKind.CXCursor_TypedefDecl) {
      const name = cursor.getSpelling().replace(/^WGPU/, "");
      if (name.match(/[cC]allback/)) {
        const under = cursor.getTypedefDeclarationOfUnderlyingType();
        const pointee = under?.getPointeeType();
        const result = getNativeType(
          pointee.getResultType().getKindSpelling(),
        );
        const parameters = [];
        const nArgs = pointee.getNumberOfArgumentTypes();
        for (let i = 0; i < nArgs; i++) {
          const kind = pointee?.getArgumentType(i)?.getCanonicalType()
            .getKindSpelling();
          const k2 = getNativeType(kind);
          parameters.push(k2);
        }
        cbs[name] = { result, parameters };
      }
    }
    return CXChildVisitResult.CXChildVisit_Recurse;
  });
  let text = ``;
  for (const [cn, cd] of Object.entries(cbs)) {
    text += `export const ${cn} = ${
      JSON.stringify(cd, undefined, 2)
    } as const;\n\n`;
  }
  await Deno.writeTextFile(path, text);
};

const getNativeType = (kind) => kind == "Enum" ? "u32" : kind?.toLowerCase();