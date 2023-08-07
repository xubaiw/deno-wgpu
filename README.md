# deno-wgpu

WebGPU ponyfill for Deno through FFI and wgpu-native.

**Note: The polyfill part is not done, but can be viewed as Deno binding to wgpu-native.**

## Credits

- [wgpu-native](https://github.com/gfx-rs/wgpu-native): awesome WebGPU implementation, C headers and prebuilt binaries
- [ext/webgpu](https://github.com/denoland/deno/tree/v1.22.3/ext/webgpu): (previous) Deno official wgpu binding implementation
- [libclang](https://github.com/aapoalas/libclang_deno): for automatic FFI generation ([metagen](https://github.com/shirakaba/clang_metagen_deno) also helps)
