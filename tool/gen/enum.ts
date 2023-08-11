import {
  CXChildVisitResult,
  CXCursorKind,
} from "https://deno.land/x/libclang@1.0.0-beta.8/mod.ts";
import { Ctx, join, nofix } from "./util.ts";

export const genEnums = async (ctx: Ctx) => {
  const { tu, dir } = ctx;
  // record
  const enums: Record<string, Record<string, unknown>> = {};
  // visit
  tu.getCursor().visitChildren((cursor) => {
    // only handle enums
    if (cursor.kind == CXCursorKind.CXCursor_EnumDecl) {
      // do not use enum name to merge implementation-native enums
      // visit sub constants
      cursor.visitChildren((cursor) => {
        // handle constants
        if (cursor.kind == CXCursorKind.CXCursor_EnumConstantDecl) {
          let [name, key] = nofix(cursor.getSpelling()).split("_");
          // special mapping of NativeFeature => FeatureName
          if (name == "NativeFeature") name = "FeatureName";
          // `Force32` is used to force enum to be uint32_t, so just skip it
          if (key == "Force32") return CXChildVisitResult.CXChildVisit_Continue;
          if (enums[name] == null) enums[name] = {};
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
    text += `export enum ${name} {`;
    for (const [k, v] of Object.entries(kv)) {
      const key = k.match(/^\d/) ? `_${k}` : k
      text += `${key} = ${v},`;
    }
    text += `}`;
  }
  // actual write
  await Deno.writeTextFile(join(dir, "enum.ts"), text);
};
