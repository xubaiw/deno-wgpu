import {
  CXChildVisitResult,
  CXCursorKind,
} from "https://deno.land/x/libclang@1.0.0-beta.8/mod.ts";
import { Ctx, join, removePrefix } from "./util.ts";

export const genCallbacks = async (ctx: Ctx) => {
  const { tu, dir } = ctx;
  const cbs: Record<string, unknown> = {};
  tu.getCursor().visitChildren((cursor) => {
    if (cursor.kind == CXCursorKind.CXCursor_TypedefDecl) {
      const name = removePrefix(cursor.getSpelling());
      if (name.match(/[cC]allback/)) {
        const under = cursor.getTypedefDeclarationOfUnderlyingType()!;
        const pointee = under.getPointeeType()!;
        const result = getNativeType(
          pointee.getResultType()!.getKindSpelling(),
        );
        const parameters = [];
        const nArgs = pointee.getNumberOfArgumentTypes();
        for (let i = 0; i < nArgs; i++) {
          const kind = pointee.getArgumentType(i)!.getCanonicalType()
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
    text += `export const ${cn} = ${JSON.stringify(cd)} as const;`;
  }
  await Deno.writeTextFile(join(dir, "callback.ts"), text);
};

const getNativeType = (kind: string) =>
  kind == "Enum" ? "u32" : kind?.toLowerCase();
