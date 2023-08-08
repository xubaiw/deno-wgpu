#!/usr/bin/env -S deno run -A --unstable

import {
  alloc,
  lib,
  ref,
  WGPUInstanceDescriptor,
  WGPURequestAdapterCallback,
  WGPUSupportedLimits,
  wrap,
} from "../mod.ts";

// Create Instance
const desc = alloc(WGPUInstanceDescriptor);
desc.nextInChain = null;
const instance = lib.symbols.wgpuCreateInstance(ref(desc));

// Request adapter
const [_, adapter] = await wrap(
  WGPURequestAdapterCallback,
  lib.symbols.wgpuInstanceRequestAdapter,
  2,
)(instance, null, null);

// Get Limits
const slimits = alloc(WGPUSupportedLimits);
lib.symbols.wgpuAdapterGetLimits(adapter, ref(slimits));
console.log(slimits);

// Release instance
lib.symbols.wgpuInstanceRelease(instance);
