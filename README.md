# deno-wgpu

Wgpu-native binding for Deno.

**Note: The author is not familiar with the WebGPU spec, so a polyfill is not planned recently. PRs are welcome.**

## Example

See [`./examples/compute.ts`](./examples/compute.ts) for the collatz example.

## Credits

- [wgpu-native](https://github.com/gfx-rs/wgpu-native): awesome WebGPU implementation, C headers and prebuilt binaries
- [ext/webgpu](https://github.com/denoland/deno/tree/v1.22.3/ext/webgpu): (previous) Deno official wgpu binding implementation
- [libclang](https://github.com/aapoalas/libclang_deno): for automatic FFI generation ([metagen](https://github.com/shirakaba/clang_metagen_deno) also helps)
