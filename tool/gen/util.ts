import { CXTranslationUnit } from "https://deno.land/x/libclang@1.0.0-beta.8/mod.ts";

export { default as camelCase } from "https://deno.land/x/case@2.1.1/camelCase.ts";
export { join } from "https://deno.land/std@0.197.0/path/mod.ts";

export type Ctx = {
  tu: CXTranslationUnit;
  dir: string;
};

export const removePrefix = (name: string): string => {
  if (name.match(/^w/)) {
    return name.replace(/^wgpu/, "");
  } else return name.replace(/^WGPU/, "");
};
