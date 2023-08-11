# deno-wgpu

Wgpu-native binding for Deno.

**Note: The author is not familiar with the WebGPU spec, so a polyfill is not planned recently. PRs are welcome.**

## Usage

`deno-wgpu` is not published to `deno.land`. You can import it from `denopkg.com`:

```ts
import * as W from "https://denopkg.com/xubaiw/deno-wgpu/mod.ts";

const desc = new w.InstanceDescriptor();
const instance = w.createInstance(desc.pointer);

const [, adapter] = await instance.requestAdapter(null);

// Further usage...
```

## Example

See [`./examples/compute.ts`](./examples/compute.ts) for the collatz example.

## Credits

- [wgpu-native](https://github.com/gfx-rs/wgpu-native): awesome WebGPU implementation, C headers and prebuilt binaries
- [ext/webgpu](https://github.com/denoland/deno/tree/v1.22.3/ext/webgpu): (previous) Deno official wgpu binding implementation
- [libclang](https://github.com/aapoalas/libclang_deno): for automatic FFI generation ([metagen](https://github.com/shirakaba/clang_metagen_deno) also helps)
