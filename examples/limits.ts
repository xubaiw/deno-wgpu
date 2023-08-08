#!/usr/bin/env -S deno run -A --unstable

import * as W from "../mod.ts";
import { alloc, ref, wrap } from "../mod.ts";

// Create Instance
const desc = W.alloc(W.WGPUInstanceDescriptor);
desc.nextInChain = null;
const instance = W.wgpuCreateInstance(W.ref(desc));

// Request adapter
const [_, adapter] = await wrap(
  W.WGPURequestAdapterCallback,
  W.wgpuInstanceRequestAdapter,
  2,
)(instance, null, null);

// Get Limits
const slimits = alloc(W.WGPUSupportedLimits);
W.wgpuAdapterGetLimits(adapter, ref(slimits));
console.log(slimits);

// Release instance
W.wgpuInstanceRelease(instance);
