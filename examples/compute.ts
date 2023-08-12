#!/usr/bin/env -S deno run -A --unstable

/** @file This example is adapted from https://github.com/gfx-rs/wgpu-native/blob/trunk/examples/compute */

import * as w from "../mod.ts";

/** The numbers to be computed collatz. */
let inputs;
if (Deno.args.length == 0) {
  console.log("Usage: pass in args to use custom numbers.");
  inputs = [1, 2, 3, 100];
} else {
  inputs = Deno.args.map((x) => parseInt(x.trim()));
}
console.log({ inputs });
const numbers = Uint32Array.from(inputs);

// Create Instance
const instance = w.createInstance();

// Request adapter
const [, adapter] = await instance.requestAdapter();

// Request device
const [, device] = await adapter.requestDevice();

// Get queue
const queue = device.getQueue();

// Create shader module
const code = await Deno.readTextFile(
  new URL("./compute.wgsl", import.meta.url),
);
const shaderModule = device.createShaderModule({
  label: cstr("compute.wgsl"),
  nextInChain: {
    chain: { sType: w.SType.ShaderModuleWGSLDescriptor },
    code: cstr(code),
  },
});

// Staging buffer
const stagingBuffer = device.createBuffer({
  label: cstr("staging_buffer"),
  usage: w.BufferUsage.MapRead | w.BufferUsage.CopyDst,
  size: numbers.byteLength,
  mappedAtCreation: false,
});

// Storage buffer
const storageBuffer = device.createBuffer({
  label: cstr("storage_buffer"),
  usage: w.BufferUsage.Storage |
    w.BufferUsage.CopyDst | w.BufferUsage.CopySrc,
  size: numbers.byteLength,
  mappedAtCreation: false,
});

// compute pipeline
const computePipeline = device.createComputePipeline({
  label: cstr("compute_pipeline"),
  compute: {
    module: shaderModule,
    entryPoint: cstr("main"),
  },
});

// bind group
const bindGroupLayout = computePipeline.getBindGroupLayout(0);
const bindGroup = device.createBindGroup({
  label: cstr("bind_group"),
  layout: bindGroupLayout,
  entryCount: 1,
  entries: {
    binding: 0,
    buffer: storageBuffer,
    offset: 0,
    size: numbers.byteLength,
  },
});

// Command Encoder
const commandEncoder = device.createCommandEncoder({
  label: cstr("command_encoder"),
});

// Create compute pass and populate data
const computePassEncoder = commandEncoder.beginComputePass({
  label: cstr("compute_pass"),
});
computePassEncoder.setPipeline(computePipeline);
computePassEncoder.setBindGroup(0, bindGroup, 0, null);
computePassEncoder.dispatchWorkgroups(numbers.length, 1, 1);
computePassEncoder.end();

commandEncoder.copyBufferToBuffer(
  storageBuffer,
  0,
  stagingBuffer,
  0,
  numbers.byteLength,
);

// Command Buffer
const commandBuffer = commandEncoder.finish({
  label: cstr("command_buffer"),
});

// Write data to storage buffer
queue.writeBuffer(
  storageBuffer,
  0,
  Deno.UnsafePointer.of(numbers),
  numbers.byteLength,
);

// Summit and command and map result back to cpu
queue.submit(1, pp(commandBuffer.pointer));
await stagingBuffer.mapAsync(w.MapMode.Read, 0, numbers.byteLength);

// Print outputs
const outputs = stagingBuffer.getMappedRange(0, numbers.byteLength);
if (outputs) {
  const view = new Deno.UnsafePointerView(outputs);
  console.log({ outputs: [0, 1, 2, 3].map((n) => view.getUint32(n * 4)) });
}

// Below are utility functions

// TODO: how to manage buffer ref count in struct
function cstr(text: string) {
  return Deno.UnsafePointer.of(new TextEncoder().encode(text + "\0"));
}

// TODO: builtin easier double pointer (**obj) creation
function pp(...objs: Deno.PointerValue[]): Deno.PointerValue {
  const arr = new BigUint64Array(objs.length);
  for (let i = 0; i < objs.length; i++) {
    arr[i] = BigInt(Deno.UnsafePointer.value(objs[i]));
  }
  return Deno.UnsafePointer.of(arr);
}
