#!/usr/bin/env -S deno run -A --unstable
import { ensureDir } from "https://deno.land/std@0.197.0/fs/ensure_dir.ts";
import { fromFileUrl } from "https://deno.land/std@0.197.0/path/mod.ts";
import { CXIndex } from "https://deno.land/x/libclang@1.0.0-beta.8/mod.ts";
import { genSymbols } from "./symbol.ts";
import { genEnums } from "./enum.ts";
import { genStructs } from "./struct.ts";
import { genCallbacks } from "./callback.ts";
import { genErgos } from "./ergo.ts";

const main = async () => {
  // prepare dir
  const header = fromFileUrl(import.meta.resolve("../../vendor/wgpu.h"));
  const dir = fromFileUrl(import.meta.resolve("../../src/gen/"));
  await ensureDir(dir);
  // prepare context
  const tu = new CXIndex().parseTranslationUnit(header);
  const ctx = { tu, dir };
  // actual gens
  await genSymbols(ctx);
  await genEnums(ctx);
  await genStructs(ctx);
  await genCallbacks(ctx);
  await genErgos(ctx);
};

// Run!
import.meta.main && await main();
