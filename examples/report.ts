#!/usr/bin/env -S deno run -A --unstable

import {
  alloc,
  lib,
  ptr,
  WGPUInstanceDescriptor,
  WGPUGlobalReport
} from "../mod.ts";

// Create Instance
const desc = alloc(WGPUInstanceDescriptor);
desc.nextInChain = null;
const instance = lib.symbols.wgpuCreateInstance(ptr(desc));

// Generate Report
const report = alloc(WGPUGlobalReport);
lib.symbols.wgpuGenerateReport(instance, ptr(report));
console.log(report);

// Release instance
lib.symbols.wgpuInstanceRelease(instance);
