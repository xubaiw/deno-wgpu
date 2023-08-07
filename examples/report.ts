#!/usr/bin/env -S deno run -A --unstable

import {
  alloc,
  lib,
  ref,
  WGPUInstanceDescriptor,
  WGPUGlobalReport
} from "../mod.ts";

// Create Instance
const desc = alloc(WGPUInstanceDescriptor);
desc.nextInChain = null;
const instance = lib.symbols.wgpuCreateInstance(ref(desc));

const report = alloc(WGPUGlobalReport);
lib.symbols.wgpuGenerateReport(instance, ref(report));
console.log(report);

// Release instance
lib.symbols.wgpuInstanceRelease(instance);
