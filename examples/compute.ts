#!/usr/bin/env -S deno run -A --unstable

/**
 * Adapted from https://github.com/gfx-rs/wgpu-native/blob/trunk/examples/compute/main.c
 */

import { alloc, ref } from "../mod.ts";
import * as w from "../mod.ts";

// TODO: how to manage buffer ref count in struct
const cstr = (text: string) => {
  return Deno.UnsafePointer.of(new TextEncoder().encode(text + "\0"));
};

const numbers = Uint32Array.from([1, 2, 3, 1000]);

// Create Instance
const instanceDescriptor = alloc(w.InstanceDescriptor);
const instance = w.createInstance(ref(instanceDescriptor));
console.log({ instance });

// Request adapter
const [, adapter] = await instance.requestAdapter(null);
console.log({ adapter });

// Request device
const deviceDescriptor = alloc(w.DeviceDescriptor);
const [, device] = await adapter.requestDevice(ref(deviceDescriptor));
console.log({ device });

const queue = device.getQueue();
console.log({ queue });

// Create shader module
const code = await Deno.readTextFile(
  new URL("./compute.wgsl", import.meta.url),
);
// TODO: too much programming burdun
const chain = alloc(w.ChainedStruct);
chain.sType = w.SType.SType_ShaderModuleWGSLDescriptor;
const wglsDescriptor = alloc(w.ShaderModuleWGSLDescriptor);
wglsDescriptor.chain = chain;
wglsDescriptor.code = cstr(code);
const shaderModuleDescriptor = alloc(w.ShaderModuleDescriptor);
shaderModuleDescriptor.label = cstr("compute.wgsl");
shaderModuleDescriptor.nextInChain = ref(wglsDescriptor);
const shaderModule = device.createShaderModule(
  ref(shaderModuleDescriptor),
);
console.log({ shaderModule });

// Staging buffer
const stagingBufferDescriptor = alloc(w.BufferDescriptor);
stagingBufferDescriptor.label = cstr("staging_buffer");
stagingBufferDescriptor.usage = w.BufferUsage.BufferUsage_MapRead |
  w.BufferUsage.BufferUsage_CopyDst;
stagingBufferDescriptor.size = BigInt(numbers.byteLength); // TODO: auto bigint conversion
stagingBufferDescriptor.mappedAtCreation = false;
const stagingBuffer = device.createBuffer(
  ref(stagingBufferDescriptor),
);
console.log({ stagingBuffer });

// Storage buffer
const storageBufferDescriptor = alloc(w.BufferDescriptor);
storageBufferDescriptor.label = cstr("storage_buffer");
storageBufferDescriptor.usage = w.BufferUsage.BufferUsage_Storage |
  w.BufferUsage.BufferUsage_CopyDst | w.BufferUsage.BufferUsage_CopySrc;
storageBufferDescriptor.size = BigInt(numbers.byteLength); // TODO: auto bigint conversion
storageBufferDescriptor.mappedAtCreation = false;
const storageBuffer = device.createBuffer(
  ref(storageBufferDescriptor),
);
console.log({ storageBuffer });

// compute pipeline
// TODO: Fix sub-struct setting
const computePipelineDescriptor = alloc(w.ComputePipelineDescriptor);
computePipelineDescriptor.label = cstr("compute_pipeline");
computePipelineDescriptor.compute.module = shaderModule.pointer;
computePipelineDescriptor.compute.entryPoint = cstr("main");
console.log({ computePipelineDescriptor });
const computePipeline = device.createComputePipeline(
  ref(computePipelineDescriptor),
);
console.log({ computePipeline });

// bind group layout
const bindGroupLayout = computePipeline.getBindGroupLayout(0);
console.log({ bindGroupLayout });

// bind group
const bindGroupDescriptor = alloc(w.BindGroupDescriptor);
bindGroupDescriptor.label = cstr("bind_group");
bindGroupDescriptor.layout = bindGroupLayout.pointer;
bindGroupDescriptor.entryCount = BigInt(1);
const entry = alloc(w.BindGroupEntry);
entry.binding = 0;
entry.buffer = storageBuffer.pointer;
entry.offset = BigInt(0);
entry.size = BigInt(numbers.byteLength);
bindGroupDescriptor.entries = ref(entry);
const bindGroup = device.createBindGroup(ref(bindGroupDescriptor));
console.log({ bindGroup });

const commandEncoderDescriptor = alloc(w.CommandEncoderDescriptor);
commandEncoderDescriptor.label = cstr("command_encoder");
const commandEncoder = device.createCommandEncoder(
  ref(commandEncoderDescriptor),
);
console.log({ commandEncoder });

const computePassDescriptor = alloc(w.ComputePassDescriptor);
computePassDescriptor.label = cstr("compute_pass");
const computePassEncoder = commandEncoder.beginComputePass(
  ref(computePassDescriptor),
);
console.log({ computePassEncoder });

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

const commandBufferDescriptor = alloc(w.CommandBufferDescriptor);
commandEncoderDescriptor.label = cstr("command_buffer");
const commandBuffer = commandEncoder.finish(
  ref(commandBufferDescriptor),
);
console.log({ commandBuffer });

queue.writeBuffer(
  storageBuffer,
  0,
  Deno.UnsafePointer.of(numbers),
  numbers.byteLength,
);
console.log("buffer written");
// TODO: easier **ptr creation
const arr = new BigUint64Array(1);
arr[0] = BigInt(Deno.UnsafePointer.value(commandBuffer.pointer));
queue.submit(1, Deno.UnsafePointer.of(arr));
console.log("queue submited");

await stagingBuffer.mapAsync(w.MapMode.MapMode_Read, 0, numbers.byteLength)

const buf = stagingBuffer.getMappedRange(0, numbers.byteLength);
console.log({ buf });
if (buf) {
  const view = new Deno.UnsafePointerView(buf);
  console.log({ output: [0, 1, 2, 3].map((n) => view.getUint32(n * 4)) });
}

// TODO: cleanup
