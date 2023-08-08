#!/usr/bin/env -S deno run -A --unstable

import * as w from "../mod.ts";
import { alloc, ref, wrap } from "../mod.ts";

// Create Instance
const desc = alloc(w.InstanceDescriptor);
desc.nextInChain = null;
const instance = w.createInstance(ref(desc));

// Request adapter
const [_, adapter] = await wrap(
  w.RequestAdapterCallback,
  w.instanceRequestAdapter,
  2,
)(instance, null, null);

// Get Limits
const slimits = alloc(w.SupportedLimits);
w.adapterGetLimits(adapter, ref(slimits));
console.log(slimits);

// Release instance
w.instanceRelease(instance);
