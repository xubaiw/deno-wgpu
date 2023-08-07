#!/usr/bin/env -S deno run -A --unstable

import { lib, WGPUInstanceDescriptor, WGPUSupportedLimits } from "./mod.ts";

const NULL = Deno.UnsafePointer.create(0);

// Create Instance
const desc = new WGPUInstanceDescriptor()
desc.nextInChain = NULL;
const instance = lib.symbols.wgpuCreateInstance(desc.pointer);

const adapter = await requestAdapter(instance);

const slimits = new WGPUSupportedLimits();
lib.symbols.wgpuAdapterGetLimits(adapter, slimits.pointer);

console.log(slimits.limits.maxBindGroups);

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
      NULL,
      callback.pointer,
      NULL,
    );
  });
}
