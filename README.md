# deno-wgpu

Wgpu-native binding for Deno.

**Note: The polyfill part is not implemented. See issue #3.**

## Usage

`deno-wgpu` is not published to `deno.land`. You can import it from `denopkg.com`:

```ts
import * as W from "https://denopkg.com/xubaiw/deno-wgpu/mod.ts";

const instance = W.createInstance(new W.InstanceDescriptor());

const [, adapter] = await instance.requestAdapter(new W.RequestAdapterOption);

// Further usage...
```

A deno doc generated documentation can be found [here](https://doc.deno.land/https://denopkg.com/xubaiw/deno-wgpu@master/mod.ts). However, there is no comments.

Also see [`./examples/compute.ts`](./examples/compute.ts) for the collatz example.

## Credits

- [wgpu-native](https://github.com/gfx-rs/wgpu-native): awesome WebGPU implementation, C headers and prebuilt binaries
- [ext/webgpu](https://github.com/denoland/deno/tree/v1.22.3/ext/webgpu): (previous) Deno official wgpu binding implementation
- [libclang](https://github.com/aapoalas/libclang_deno): for automatic FFI generation ([metagen](https://github.com/shirakaba/clang_metagen_deno) also helps)
