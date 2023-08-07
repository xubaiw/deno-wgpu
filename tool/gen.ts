#!/usr/bin/env -S deno run -A --unstable
/**
 * @file Usage: LIBCLANG_PATH=<path-to-libclang> deno run -A --unstable gen.ts
 */

import {
  generateMetadata,
  Metadata,
  StructDecl,
  StructFieldDecl,
  TypeMetadata,
} from "https://denopkg.com/shirakaba/clang_metagen_deno@master/mod.ts";
import { dedent } from "npm:@qnighy/dedent";

const main = async () => {
  const metadata = loadMetadata();
  const ctx = { sink: "", metadata };
  dumpHeader(ctx);
  dumpFunctions(ctx);
  dumpEnums(ctx);
  dumpStructs(ctx);
  await Deno.writeTextFile(new URL("../src/ffi.ts", import.meta.url), ctx.sink);
};

type Ctx = { sink: string; metadata: Metadata };

const dumpHeader = (ctx: Ctx) => {
  ctx.sink += dedent`\
    import { endianness } from "node:os"
    import { prepare } from "./prepare.ts";
  
    const littleEndian = endianness() == "LE" ? true : false;
    const libPath = await prepare();` + "\n\n";
};
