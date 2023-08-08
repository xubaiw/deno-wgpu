#!/usr/bin/env -S deno run -A --unstable

import {
  alloc,
  lib,
  ptr,
  WGPUInstanceDescriptor,
  WGPURequestAdapterCallback,
  WGPUSupportedLimits,
  wrapcb,
} from "../mod.ts";

// Create Instance
const desc = alloc(WGPUInstanceDescriptor);
desc.nextInChain = null;
const instance = lib.symbols.wgpuCreateInstance(ptr(desc));

// Request adapter
const [_, adapter] = await wrapcb(
  WGPURequestAdapterCallback,
  lib.symbols.wgpuInstanceRequestAdapter,
  2,
)(instance, null, null);

// Get Limits
const slimits = alloc(WGPUSupportedLimits);
lib.symbols.wgpuAdapterGetLimits(adapter, ptr(slimits));
console.log(slimits);

// Release instance
lib.symbols.wgpuInstanceRelease(instance);
