#!/usr/bin/env -S deno run -A --unstable

import {
  alloc,
  lib,
  ref,
  WGPUInstanceDescriptor,
  WGPUSupportedLimits,
} from "../mod.ts";

// Create Instance
const desc = alloc(WGPUInstanceDescriptor);
desc.nextInChain = null;
const instance = lib.symbols.wgpuCreateInstance(ref(desc));

const adapter = await requestAdapter(instance);

const slimits = alloc(WGPUSupportedLimits);
lib.symbols.wgpuAdapterGetLimits(adapter, ref(slimits));
console.log(slimits);

// Release instance
lib.symbols.wgpuInstanceRelease(instance);

function requestAdapter(
  instance: Deno.PointerValue,
): Promise<Deno.PointerValue> {
  return new Promise((res) => {
    // TODO: auto generate callback
    const callback = new Deno.UnsafeCallback({
      parameters: ["u32", "pointer", "pointer", "pointer"],
      result: "void",
    }, (_status, adapter, _message, _userdata) => {
      // TODO: also generate enum
      res(adapter);
    });
    lib.symbols.wgpuInstanceRequestAdapter(
      instance,
      null,
      callback.pointer,
      null,
    );
  });
}
