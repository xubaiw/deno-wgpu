# deno-wgpu

WebGPU ponyfill for Deno through FFI and wgpu-native.

**Note: The polyfill part is not done, but can be viewed as Deno binding to wgpu-native.**

## Example

You can also see `./examples/compute.ts` for basic compute shader.

```ts
import {
  alloc,
  lib,
  ptr,
  WGPUInstanceDescriptor,
  WGPURequestAdapterCallback,
  WGPUSupportedLimits,
  withcb,
} from "https://denopkg.com/xubaiw/deno-wgpu/mod.ts";

// Create Instance
const desc = alloc(WGPUInstanceDescriptor);
desc.nextInChain = null;
const instance = lib.symbols.wgpuCreateInstance(ptr(desc));

// Request adapter
const [_, adapter] = await withcb(
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
```

## Credits

- [wgpu-native](https://github.com/gfx-rs/wgpu-native): awesome WebGPU implementation, C headers and prebuilt binaries
- [ext/webgpu](https://github.com/denoland/deno/tree/v1.22.3/ext/webgpu): (previous) Deno official wgpu binding implementation
- [libclang](https://github.com/aapoalas/libclang_deno): for automatic FFI generation ([metagen](https://github.com/shirakaba/clang_metagen_deno) also helps)
