import { CXTranslationUnit } from "https://deno.land/x/libclang@1.0.0-beta.8/mod.ts";

export { join } from "https://deno.land/std@0.197.0/path/mod.ts";
export { dedent } from "npm:@qnighy/dedent";

export type Ctx = {
  tu: CXTranslationUnit;
  dir: string;
};
