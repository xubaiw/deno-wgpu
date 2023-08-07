#!/usr/bin/env -S deno run -A --unstable
import { ensureDir } from "https://deno.land/std@0.197.0/fs/ensure_dir.ts";
import { fromFileUrl, join } from "https://deno.land/std@0.197.0/path/mod.ts";
import { CXIndex } from "https://deno.land/x/libclang@1.0.0-beta.8/mod.ts";
import { genEnums } from "./enum.ts";

const main = async () => {
  const header = fromFileUrl(import.meta.resolve("../../vendor/wgpu.h"));
  const dir = fromFileUrl(import.meta.resolve("../../src/gen/"));
  await ensureDir(dir);
  const tu = new CXIndex().parseTranslationUnit(header);
  await genEnums(tu, join(dir, "enum.ts"));
};

// Run!
import.meta.main && await main();
