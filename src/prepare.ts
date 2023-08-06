import cacheDir from "https://deno.land/x/cache_dir@0.2.0/mod.ts";
import { download } from "https://deno.land/x/download@v2.0.2/mod.ts";
import { readZip } from "https://deno.land/x/jszip@0.11.0/mod.ts";
import { exists } from "https://deno.land/std@0.197.0/fs/mod.ts";
import { join } from "https://deno.land/std@0.197.0/path/mod.ts";

const VERSION = "v0.17.0.2";

/**
 * Cache prebuilt dynamic libraries and return its path.
 */
export async function prepare(version = VERSION): Promise<string> {
  const url = getUrl(version);
  const dir = join(cacheDir() ?? ".deno", "deno", "wgpu", VERSION);
  const libName = getName();
  const libPath = join(dir, libName);
  if (!await exists(libPath)) {
    const zipFile = await download(url, { dir, file: "wgpu-native.zip" });
    const zip = await readZip(zipFile.fullPath);
    const arr = await zip.file(libName).async("uint8array");
    await Deno.writeFile(libPath, arr);
  }
  return libPath;
}

function getUrl(version: string) {
  return `https://github.com/gfx-rs/wgpu-native/releases/download/${version}/wgpu-${getOs()}-${getArch()}-release.zip`;
}

function getOs() {
  switch (Deno.build.os) {
    case "darwin":
      return "macos";
    default:
      return Deno.build.os;
  }
}

function getArch() {
  switch (Deno.build.arch) {
    case "aarch64":
      return "arm64";
    default:
      return Deno.build.arch;
  }
}

function getName() {
  const stem = "libwgpu_native.";
  switch (Deno.build.os) {
    case "darwin":
      return stem + "dylib";
    case "windows":
      return stem + "dll";
    default:
      return stem + "so";
  }
}

if (import.meta.main) {
  await prepare();
}
