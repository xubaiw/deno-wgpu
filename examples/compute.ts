/**
 * Adapted from https://github.com/gfx-rs/wgpu-native/blob/trunk/examples/compute/main.c
 */

import { delay } from "https://deno.land/std@0.190.0/async/mod.ts";
import { alloc, ref, wrap } from "../mod.ts";
import * as w from "../mod.ts";

// TODO: how to manage buffer ref count in struct
const cstr = (text: string) => {
  return Deno.UnsafePointer.of(new TextEncoder().encode(text));
};

const numbers = Uint32Array.from([1, 2, 3, 1000]);

// Create Instance
const instanceDescriptor = alloc(w.InstanceDescriptor);
const instance = w.createInstance(ref(instanceDescriptor));
console.log({ instance });

// Request adapter
const [, adapter] = await wrap(
  w.RequestAdapterCallback,
  w.instanceRequestAdapter,
  2,
)(instance, null);
console.log({ adapter });

// Request device
const deviceDescriptor = alloc(w.DeviceDescriptor);
const [, device] = await wrap(
  w.RequestDeviceCallback,
  w.adapterRequestDevice,
  2,
)(adapter, ref(deviceDescriptor));

const queue = w.deviceGetQueue(device);
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
const shaderModule = w.deviceCreateShaderModule(
  device,
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
const stagingBuffer = w.deviceCreateBuffer(
  device,
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
const storageBuffer = w.deviceCreateBuffer(
  device,
  ref(storageBufferDescriptor),
);
console.log({ storageBuffer });

// compute pipeline
// TODO: Fix sub-struct setting
const computePipelineDescriptor = alloc(w.ComputePipelineDescriptor);
computePipelineDescriptor.label = cstr("compute_pipeline");
computePipelineDescriptor.compute.module = shaderModule;
computePipelineDescriptor.compute.entryPoint = cstr("main");
console.log({ computePipelineDescriptor });
const computePipeline = w.deviceCreateComputePipeline(
  device,
  ref(computePipelineDescriptor),
);
console.log({ computePipeline });

// bind group layout
const bindGroupLayout = w.computePipelineGetBindGroupLayout(computePipeline, 0);
console.log({ bindGroupLayout });

// bind group
const bindGroupDescriptor = alloc(w.BindGroupDescriptor);
bindGroupDescriptor.label = cstr("bind_group");
bindGroupDescriptor.layout = bindGroupLayout;
bindGroupDescriptor.entryCount = BigInt(1);
const entry = alloc(w.BindGroupEntry);
entry.binding = 0;
entry.buffer = storageBuffer;
entry.offset = BigInt(0);
entry.size = BigInt(numbers.byteLength);
bindGroupDescriptor.entries = ref(entry);
const bindGroup = w.deviceCreateBindGroup(device, ref(bindGroupDescriptor));
console.log({ bindGroup });

const commandEncoderDescriptor = alloc(w.CommandEncoderDescriptor);
commandEncoderDescriptor.label = cstr("command_encoder");
const commandEncoder = w.deviceCreateCommandEncoder(
  device,
  ref(commandEncoderDescriptor),
);
console.log({ commandEncoder });

const computePassDescriptor = alloc(w.ComputePassDescriptor);
computePassDescriptor.label = cstr("compute_pass");
const computePassEncoder = w.commandEncoderBeginComputePass(
  commandEncoder,
  ref(computePassDescriptor),
);
console.log({ computePassEncoder });

w.computePassEncoderSetPipeline(computePassEncoder, computePipeline);
w.computePassEncoderSetBindGroup(computePassEncoder, 0, bindGroup, 0, null);
w.computePassEncoderDispatchWorkgroups(
  computePassEncoder,
  numbers.length,
  1,
  1,
);
w.computePassEncoderEnd(computePassEncoder);

w.commandEncoderCopyBufferToBuffer(
  commandEncoder,
  storageBuffer,
  0,
  stagingBuffer,
  0,
  numbers.byteLength,
);

const commandBufferDescriptor = alloc(w.CommandBufferDescriptor);
commandEncoderDescriptor.label = cstr("command_buffer");
const commandBuffer = w.commandEncoderFinish(
  commandEncoder,
  ref(commandBufferDescriptor),
);
console.log({ commandBuffer });

w.queueWriteBuffer(
  queue,
  storageBuffer,
  0,
  Deno.UnsafePointer.of(numbers),
  numbers.byteLength,
);
console.log("buffer written");
// TODO: easier **ptr creation
const arr = new BigUint64Array(1);
arr[0] = BigInt(Deno.UnsafePointer.value(commandBuffer));
w.queueSubmit(queue, 1, Deno.UnsafePointer.of(arr));
console.log("queue submited");

async function mapAsync(
  buffer: Deno.PointerValue,
  mode: w.MapMode,
  offset: number,
  size: number,
) {
  let userdata: number;
  const callback = new Deno.UnsafeCallback(
    w.BufferMapCallback,
    (status) => {
      userdata = status;
    },
  );
  w.bufferMapAsync(
    buffer,
    mode,
    offset,
    size,
    callback.pointer,
  );
  let i = 0;
  while (!w.devicePoll(device, false, null)) {
    await delay(10);
    console.log("poll", i);
    i += 1;
  }
  return userdata!;
}

await mapAsync(stagingBuffer, w.MapMode.MapMode_Read, 0, numbers.byteLength);

const buf = w.bufferGetMappedRange(stagingBuffer, 0, numbers.byteLength);
console.log({ buf });
if (buf) {
  const view = new Deno.UnsafePointerView(buf);
  console.log({ output: [0, 1, 2, 3].map((n) => view.getUint32(n * 4)) });
}

// TODO: cleanup
