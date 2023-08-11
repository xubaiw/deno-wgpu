#!/usr/bin/env -S deno run -A --unstable

/** @file This example is adapted from https://github.com/gfx-rs/wgpu-native/blob/trunk/examples/compute */

import * as w from "../mod.ts";

/** The numbers to be computed collatz. */
let inputs;
if (Deno.args.length == 0) {
  console.log("Usage: pass in args to use custom numbers.");
  inputs = [1, 2, 3, 100];
} else {
  inputs = Deno.args.map(x => parseInt(x.trim()));
}
console.log({ inputs });
const numbers = Uint32Array.from(inputs);

// Create Instance
const instanceDescriptor = new w.InstanceDescriptor();
const instance = w.createInstance(instanceDescriptor.pointer);

// Request adapter
const [, adapter] = await instance.requestAdapter(null);

// Request device
const deviceDescriptor = new w.DeviceDescriptor();
const [, device] = await adapter.requestDevice(deviceDescriptor.pointer);

// Get queue
const queue = device.getQueue();

// Create shader module
const code = await Deno.readTextFile(
  new URL("./compute.wgsl", import.meta.url),
);
const wglsDescriptor = new w.ShaderModuleWGSLDescriptor();
wglsDescriptor.chain.sType = w.SType.SType_ShaderModuleWGSLDescriptor;
wglsDescriptor.code = cstr(code);
const shaderModuleDescriptor = new w.ShaderModuleDescriptor();
shaderModuleDescriptor.label = cstr("compute.wgsl");
shaderModuleDescriptor.nextInChain = wglsDescriptor.pointer;
const shaderModule = device.createShaderModule(shaderModuleDescriptor.pointer);

// Staging buffer
const stagingBufferDescriptor = new w.BufferDescriptor();
stagingBufferDescriptor.label = cstr("staging_buffer");
stagingBufferDescriptor.usage = w.BufferUsage.BufferUsage_MapRead |
  w.BufferUsage.BufferUsage_CopyDst;
stagingBufferDescriptor.size = numbers.byteLength;
stagingBufferDescriptor.mappedAtCreation = false;
const stagingBuffer = device.createBuffer(stagingBufferDescriptor.pointer);

// Storage buffer
const storageBufferDescriptor = new w.BufferDescriptor();
storageBufferDescriptor.label = cstr("storage_buffer");
storageBufferDescriptor.usage = w.BufferUsage.BufferUsage_Storage |
  w.BufferUsage.BufferUsage_CopyDst | w.BufferUsage.BufferUsage_CopySrc;
storageBufferDescriptor.size = numbers.byteLength;
storageBufferDescriptor.mappedAtCreation = false;
const storageBuffer = device.createBuffer(storageBufferDescriptor.pointer);

// compute pipeline
const computePipelineDescriptor = new w.ComputePipelineDescriptor();
computePipelineDescriptor.label = cstr("compute_pipeline");
computePipelineDescriptor.compute.module = shaderModule.pointer;
computePipelineDescriptor.compute.entryPoint = cstr("main");
const computePipeline = device.createComputePipeline(
  computePipelineDescriptor.pointer,
);

// bind group
const bindGroupLayout = computePipeline.getBindGroupLayout(0);
const bindGroupDescriptor = new w.BindGroupDescriptor();
bindGroupDescriptor.label = cstr("bind_group");
bindGroupDescriptor.layout = bindGroupLayout.pointer;
bindGroupDescriptor.entryCount = 1;
const entry = new w.BindGroupEntry();
entry.binding = 0;
entry.buffer = storageBuffer.pointer;
entry.offset = 0;
entry.size = numbers.byteLength;
bindGroupDescriptor.entries = entry.pointer;
const bindGroup = device.createBindGroup(bindGroupDescriptor.pointer);

// Command Encoder
const commandEncoderDescriptor = new w.CommandEncoderDescriptor();
commandEncoderDescriptor.label = cstr("command_encoder");
const commandEncoder = device.createCommandEncoder(
  commandEncoderDescriptor.pointer,
);

// Create compute pass and populate data
const computePassDescriptor = new w.ComputePassDescriptor();
computePassDescriptor.label = cstr("compute_pass");
const computePassEncoder = commandEncoder.beginComputePass(
  computePassDescriptor.pointer,
);
computePassEncoder.setPipeline(computePipeline);
computePassEncoder.setBindGroup(0, bindGroup, 0, null);
computePassEncoder.dispatchWorkgroups(
  numbers.length,
  1,
  1,
);
computePassEncoder.end();

commandEncoder.copyBufferToBuffer(
  storageBuffer,
  0,
  stagingBuffer,
  0,
  numbers.byteLength,
);

// Command Buffer
const commandBufferDescriptor = new w.CommandBufferDescriptor();
commandEncoderDescriptor.label = cstr("command_buffer");
const commandBuffer = commandEncoder.finish(commandBufferDescriptor.pointer);

// Write data to storage buffer
queue.writeBuffer(
  storageBuffer,
  0,
  Deno.UnsafePointer.of(numbers),
  numbers.byteLength,
);

// Summit and command and map result back to cpu
queue.submit(1, pp(commandBuffer.pointer));
await stagingBuffer.mapAsync(w.MapMode.MapMode_Read, 0, numbers.byteLength);

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
