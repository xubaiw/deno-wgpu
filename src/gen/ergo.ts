import lib from "./symbol.ts";
import * as C from "../util/conv.ts";
import * as E from "./enum.ts";
import * as CB from "./callback.ts";
export const createInstance = (
  descriptor: Deno.PointerValue,
): Deno.PointerValue => {
  const result = lib.symbols.wgpuCreateInstance(descriptor);
  return result;
};
export const getProcAddress = (
  device: Deno.PointerValue,
  procName: Deno.PointerValue,
): Deno.PointerValue => {
  const result = lib.symbols.wgpuGetProcAddress(device, procName);
  return result;
};
export const adapterEnumerateFeatures = (
  adapter: Deno.PointerValue,
  features: Deno.PointerValue,
): number | bigint => {
  const result = lib.symbols.wgpuAdapterEnumerateFeatures(adapter, features);
  return result;
};
export const adapterGetLimits = (
  adapter: Deno.PointerValue,
  limits: Deno.PointerValue,
): boolean => {
  const result = lib.symbols.wgpuAdapterGetLimits(adapter, limits);
  return C.toBool(result);
};
export const adapterGetProperties = (
  adapter: Deno.PointerValue,
  properties: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuAdapterGetProperties(adapter, properties);
  return result;
};
export const adapterHasFeature = (
  adapter: Deno.PointerValue,
  feature: E.FeatureName,
): boolean => {
  const result = lib.symbols.wgpuAdapterHasFeature(adapter, feature);
  return C.toBool(result);
};
export const adapterRequestDevice = (
  adapter: Deno.PointerValue,
  descriptor: Deno.PointerValue,
  callback: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuAdapterRequestDevice(
    adapter,
    descriptor,
    callback,
    null,
  );
  return result;
};
export const adapterReference = (adapter: Deno.PointerValue): void => {
  const result = lib.symbols.wgpuAdapterReference(adapter);
  return result;
};
export const adapterRelease = (adapter: Deno.PointerValue): void => {
  const result = lib.symbols.wgpuAdapterRelease(adapter);
  return result;
};
export const bindGroupSetLabel = (
  bindGroup: Deno.PointerValue,
  label: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuBindGroupSetLabel(bindGroup, label);
  return result;
};
export const bindGroupReference = (bindGroup: Deno.PointerValue): void => {
  const result = lib.symbols.wgpuBindGroupReference(bindGroup);
  return result;
};
export const bindGroupRelease = (bindGroup: Deno.PointerValue): void => {
  const result = lib.symbols.wgpuBindGroupRelease(bindGroup);
  return result;
};
export const bindGroupLayoutSetLabel = (
  bindGroupLayout: Deno.PointerValue,
  label: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuBindGroupLayoutSetLabel(
    bindGroupLayout,
    label,
  );
  return result;
};
export const bindGroupLayoutReference = (
  bindGroupLayout: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuBindGroupLayoutReference(bindGroupLayout);
  return result;
};
export const bindGroupLayoutRelease = (
  bindGroupLayout: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuBindGroupLayoutRelease(bindGroupLayout);
  return result;
};
export const bufferDestroy = (buffer: Deno.PointerValue): void => {
  const result = lib.symbols.wgpuBufferDestroy(buffer);
  return result;
};
export const bufferGetConstMappedRange = (
  buffer: Deno.PointerValue,
  offset: number | bigint,
  size: number | bigint,
): Deno.PointerValue => {
  const result = lib.symbols.wgpuBufferGetConstMappedRange(
    buffer,
    offset,
    size,
  );
  return result;
};
export const bufferGetMapState = (buffer: Deno.PointerValue): number => {
  const result = lib.symbols.wgpuBufferGetMapState(buffer);
  return C.toEnum<E.BufferMapState>(result);
};
export const bufferGetMappedRange = (
  buffer: Deno.PointerValue,
  offset: number | bigint,
  size: number | bigint,
): Deno.PointerValue => {
  const result = lib.symbols.wgpuBufferGetMappedRange(buffer, offset, size);
  return result;
};
export const bufferGetSize = (buffer: Deno.PointerValue): number | bigint => {
  const result = lib.symbols.wgpuBufferGetSize(buffer);
  return result;
};
export const bufferGetUsage = (buffer: Deno.PointerValue): number => {
  const result = lib.symbols.wgpuBufferGetUsage(buffer);
  return result;
};
export const bufferMapAsync = (
  buffer: Deno.PointerValue,
  mode: number,
  offset: number | bigint,
  size: number | bigint,
  callback: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuBufferMapAsync(
    buffer,
    mode,
    offset,
    size,
    callback,
    null,
  );
  return result;
};
export const bufferSetLabel = (
  buffer: Deno.PointerValue,
  label: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuBufferSetLabel(buffer, label);
  return result;
};
export const bufferUnmap = (buffer: Deno.PointerValue): void => {
  const result = lib.symbols.wgpuBufferUnmap(buffer);
  return result;
};
export const bufferReference = (buffer: Deno.PointerValue): void => {
  const result = lib.symbols.wgpuBufferReference(buffer);
  return result;
};
export const bufferRelease = (buffer: Deno.PointerValue): void => {
  const result = lib.symbols.wgpuBufferRelease(buffer);
  return result;
};
export const commandBufferSetLabel = (
  commandBuffer: Deno.PointerValue,
  label: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuCommandBufferSetLabel(commandBuffer, label);
  return result;
};
export const commandBufferReference = (
  commandBuffer: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuCommandBufferReference(commandBuffer);
  return result;
};
export const commandBufferRelease = (
  commandBuffer: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuCommandBufferRelease(commandBuffer);
  return result;
};
export const commandEncoderBeginComputePass = (
  commandEncoder: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue => {
  const result = lib.symbols.wgpuCommandEncoderBeginComputePass(
    commandEncoder,
    descriptor,
  );
  return result;
};
export const commandEncoderBeginRenderPass = (
  commandEncoder: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue => {
  const result = lib.symbols.wgpuCommandEncoderBeginRenderPass(
    commandEncoder,
    descriptor,
  );
  return result;
};
export const commandEncoderClearBuffer = (
  commandEncoder: Deno.PointerValue,
  buffer: Deno.PointerValue,
  offset: number | bigint,
  size: number | bigint,
): void => {
  const result = lib.symbols.wgpuCommandEncoderClearBuffer(
    commandEncoder,
    buffer,
    offset,
    size,
  );
  return result;
};
export const commandEncoderCopyBufferToBuffer = (
  commandEncoder: Deno.PointerValue,
  source: Deno.PointerValue,
  sourceOffset: number | bigint,
  destination: Deno.PointerValue,
  destinationOffset: number | bigint,
  size: number | bigint,
): void => {
  const result = lib.symbols.wgpuCommandEncoderCopyBufferToBuffer(
    commandEncoder,
    source,
    sourceOffset,
    destination,
    destinationOffset,
    size,
  );
  return result;
};
export const commandEncoderCopyBufferToTexture = (
  commandEncoder: Deno.PointerValue,
  source: Deno.PointerValue,
  destination: Deno.PointerValue,
  copySize: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuCommandEncoderCopyBufferToTexture(
    commandEncoder,
    source,
    destination,
    copySize,
  );
  return result;
};
export const commandEncoderCopyTextureToBuffer = (
  commandEncoder: Deno.PointerValue,
  source: Deno.PointerValue,
  destination: Deno.PointerValue,
  copySize: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuCommandEncoderCopyTextureToBuffer(
    commandEncoder,
    source,
    destination,
    copySize,
  );
  return result;
};
export const commandEncoderCopyTextureToTexture = (
  commandEncoder: Deno.PointerValue,
  source: Deno.PointerValue,
  destination: Deno.PointerValue,
  copySize: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuCommandEncoderCopyTextureToTexture(
    commandEncoder,
    source,
    destination,
    copySize,
  );
  return result;
};
export const commandEncoderFinish = (
  commandEncoder: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue => {
  const result = lib.symbols.wgpuCommandEncoderFinish(
    commandEncoder,
    descriptor,
  );
  return result;
};
export const commandEncoderInsertDebugMarker = (
  commandEncoder: Deno.PointerValue,
  markerLabel: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuCommandEncoderInsertDebugMarker(
    commandEncoder,
    markerLabel,
  );
  return result;
};
export const commandEncoderPopDebugGroup = (
  commandEncoder: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuCommandEncoderPopDebugGroup(commandEncoder);
  return result;
};
export const commandEncoderPushDebugGroup = (
  commandEncoder: Deno.PointerValue,
  groupLabel: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuCommandEncoderPushDebugGroup(
    commandEncoder,
    groupLabel,
  );
  return result;
};
export const commandEncoderResolveQuerySet = (
  commandEncoder: Deno.PointerValue,
  querySet: Deno.PointerValue,
  firstQuery: number,
  queryCount: number,
  destination: Deno.PointerValue,
  destinationOffset: number | bigint,
): void => {
  const result = lib.symbols.wgpuCommandEncoderResolveQuerySet(
    commandEncoder,
    querySet,
    firstQuery,
    queryCount,
    destination,
    destinationOffset,
  );
  return result;
};
export const commandEncoderSetLabel = (
  commandEncoder: Deno.PointerValue,
  label: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuCommandEncoderSetLabel(commandEncoder, label);
  return result;
};
export const commandEncoderWriteTimestamp = (
  commandEncoder: Deno.PointerValue,
  querySet: Deno.PointerValue,
  queryIndex: number,
): void => {
  const result = lib.symbols.wgpuCommandEncoderWriteTimestamp(
    commandEncoder,
    querySet,
    queryIndex,
  );
  return result;
};
export const commandEncoderReference = (
  commandEncoder: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuCommandEncoderReference(commandEncoder);
  return result;
};
export const commandEncoderRelease = (
  commandEncoder: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuCommandEncoderRelease(commandEncoder);
  return result;
};
export const computePassEncoderBeginPipelineStatisticsQuery = (
  computePassEncoder: Deno.PointerValue,
  querySet: Deno.PointerValue,
  queryIndex: number,
): void => {
  const result = lib.symbols.wgpuComputePassEncoderBeginPipelineStatisticsQuery(
    computePassEncoder,
    querySet,
    queryIndex,
  );
  return result;
};
export const computePassEncoderDispatchWorkgroups = (
  computePassEncoder: Deno.PointerValue,
  workgroupCountX: number,
  workgroupCountY: number,
  workgroupCountZ: number,
): void => {
  const result = lib.symbols.wgpuComputePassEncoderDispatchWorkgroups(
    computePassEncoder,
    workgroupCountX,
    workgroupCountY,
    workgroupCountZ,
  );
  return result;
};
export const computePassEncoderDispatchWorkgroupsIndirect = (
  computePassEncoder: Deno.PointerValue,
  indirectBuffer: Deno.PointerValue,
  indirectOffset: number | bigint,
): void => {
  const result = lib.symbols.wgpuComputePassEncoderDispatchWorkgroupsIndirect(
    computePassEncoder,
    indirectBuffer,
    indirectOffset,
  );
  return result;
};
export const computePassEncoderEnd = (
  computePassEncoder: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuComputePassEncoderEnd(computePassEncoder);
  return result;
};
export const computePassEncoderEndPipelineStatisticsQuery = (
  computePassEncoder: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuComputePassEncoderEndPipelineStatisticsQuery(
    computePassEncoder,
  );
  return result;
};
export const computePassEncoderInsertDebugMarker = (
  computePassEncoder: Deno.PointerValue,
  markerLabel: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuComputePassEncoderInsertDebugMarker(
    computePassEncoder,
    markerLabel,
  );
  return result;
};
export const computePassEncoderPopDebugGroup = (
  computePassEncoder: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuComputePassEncoderPopDebugGroup(
    computePassEncoder,
  );
  return result;
};
export const computePassEncoderPushDebugGroup = (
  computePassEncoder: Deno.PointerValue,
  groupLabel: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuComputePassEncoderPushDebugGroup(
    computePassEncoder,
    groupLabel,
  );
  return result;
};
export const computePassEncoderSetBindGroup = (
  computePassEncoder: Deno.PointerValue,
  groupIndex: number,
  group: Deno.PointerValue,
  dynamicOffsetCount: number | bigint,
  dynamicOffsets: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuComputePassEncoderSetBindGroup(
    computePassEncoder,
    groupIndex,
    group,
    dynamicOffsetCount,
    dynamicOffsets,
  );
  return result;
};
export const computePassEncoderSetLabel = (
  computePassEncoder: Deno.PointerValue,
  label: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuComputePassEncoderSetLabel(
    computePassEncoder,
    label,
  );
  return result;
};
export const computePassEncoderSetPipeline = (
  computePassEncoder: Deno.PointerValue,
  pipeline: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuComputePassEncoderSetPipeline(
    computePassEncoder,
    pipeline,
  );
  return result;
};
export const computePassEncoderReference = (
  computePassEncoder: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuComputePassEncoderReference(
    computePassEncoder,
  );
  return result;
};
export const computePassEncoderRelease = (
  computePassEncoder: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuComputePassEncoderRelease(computePassEncoder);
  return result;
};
export const computePipelineGetBindGroupLayout = (
  computePipeline: Deno.PointerValue,
  groupIndex: number,
): Deno.PointerValue => {
  const result = lib.symbols.wgpuComputePipelineGetBindGroupLayout(
    computePipeline,
    groupIndex,
  );
  return result;
};
export const computePipelineSetLabel = (
  computePipeline: Deno.PointerValue,
  label: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuComputePipelineSetLabel(
    computePipeline,
    label,
  );
  return result;
};
export const computePipelineReference = (
  computePipeline: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuComputePipelineReference(computePipeline);
  return result;
};
export const computePipelineRelease = (
  computePipeline: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuComputePipelineRelease(computePipeline);
  return result;
};
export const deviceCreateBindGroup = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue => {
  const result = lib.symbols.wgpuDeviceCreateBindGroup(device, descriptor);
  return result;
};
export const deviceCreateBindGroupLayout = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue => {
  const result = lib.symbols.wgpuDeviceCreateBindGroupLayout(
    device,
    descriptor,
  );
  return result;
};
export const deviceCreateBuffer = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue => {
  const result = lib.symbols.wgpuDeviceCreateBuffer(device, descriptor);
  return result;
};
export const deviceCreateCommandEncoder = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue => {
  const result = lib.symbols.wgpuDeviceCreateCommandEncoder(device, descriptor);
  return result;
};
export const deviceCreateComputePipeline = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue => {
  const result = lib.symbols.wgpuDeviceCreateComputePipeline(
    device,
    descriptor,
  );
  return result;
};
export const deviceCreateComputePipelineAsync = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
  callback: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuDeviceCreateComputePipelineAsync(
    device,
    descriptor,
    callback,
    null,
  );
  return result;
};
export const deviceCreatePipelineLayout = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue => {
  const result = lib.symbols.wgpuDeviceCreatePipelineLayout(device, descriptor);
  return result;
};
export const deviceCreateQuerySet = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue => {
  const result = lib.symbols.wgpuDeviceCreateQuerySet(device, descriptor);
  return result;
};
export const deviceCreateRenderBundleEncoder = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue => {
  const result = lib.symbols.wgpuDeviceCreateRenderBundleEncoder(
    device,
    descriptor,
  );
  return result;
};
export const deviceCreateRenderPipeline = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue => {
  const result = lib.symbols.wgpuDeviceCreateRenderPipeline(device, descriptor);
  return result;
};
export const deviceCreateRenderPipelineAsync = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
  callback: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuDeviceCreateRenderPipelineAsync(
    device,
    descriptor,
    callback,
    null,
  );
  return result;
};
export const deviceCreateSampler = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue => {
  const result = lib.symbols.wgpuDeviceCreateSampler(device, descriptor);
  return result;
};
export const deviceCreateShaderModule = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue => {
  const result = lib.symbols.wgpuDeviceCreateShaderModule(device, descriptor);
  return result;
};
export const deviceCreateSwapChain = (
  device: Deno.PointerValue,
  surface: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue => {
  const result = lib.symbols.wgpuDeviceCreateSwapChain(
    device,
    surface,
    descriptor,
  );
  return result;
};
export const deviceCreateTexture = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue => {
  const result = lib.symbols.wgpuDeviceCreateTexture(device, descriptor);
  return result;
};
export const deviceDestroy = (device: Deno.PointerValue): void => {
  const result = lib.symbols.wgpuDeviceDestroy(device);
  return result;
};
export const deviceEnumerateFeatures = (
  device: Deno.PointerValue,
  features: Deno.PointerValue,
): number | bigint => {
  const result = lib.symbols.wgpuDeviceEnumerateFeatures(device, features);
  return result;
};
export const deviceGetLimits = (
  device: Deno.PointerValue,
  limits: Deno.PointerValue,
): boolean => {
  const result = lib.symbols.wgpuDeviceGetLimits(device, limits);
  return C.toBool(result);
};
export const deviceGetQueue = (
  device: Deno.PointerValue,
): Deno.PointerValue => {
  const result = lib.symbols.wgpuDeviceGetQueue(device);
  return result;
};
export const deviceHasFeature = (
  device: Deno.PointerValue,
  feature: E.FeatureName,
): boolean => {
  const result = lib.symbols.wgpuDeviceHasFeature(device, feature);
  return C.toBool(result);
};
export const devicePopErrorScope = (
  device: Deno.PointerValue,
  callback: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuDevicePopErrorScope(device, callback, null);
  return result;
};
export const devicePushErrorScope = (
  device: Deno.PointerValue,
  filter: E.ErrorFilter,
): void => {
  const result = lib.symbols.wgpuDevicePushErrorScope(device, filter);
  return result;
};
export const deviceSetLabel = (
  device: Deno.PointerValue,
  label: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuDeviceSetLabel(device, label);
  return result;
};
export const deviceSetUncapturedErrorCallback = (
  device: Deno.PointerValue,
  callback: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuDeviceSetUncapturedErrorCallback(
    device,
    callback,
    null,
  );
  return result;
};
export const deviceReference = (device: Deno.PointerValue): void => {
  const result = lib.symbols.wgpuDeviceReference(device);
  return result;
};
export const deviceRelease = (device: Deno.PointerValue): void => {
  const result = lib.symbols.wgpuDeviceRelease(device);
  return result;
};
export const instanceCreateSurface = (
  instance: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue => {
  const result = lib.symbols.wgpuInstanceCreateSurface(instance, descriptor);
  return result;
};
export const instanceProcessEvents = (instance: Deno.PointerValue): void => {
  const result = lib.symbols.wgpuInstanceProcessEvents(instance);
  return result;
};
export const instanceRequestAdapter = (
  instance: Deno.PointerValue,
  options: Deno.PointerValue,
  callback: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuInstanceRequestAdapter(
    instance,
    options,
    callback,
    null,
  );
  return result;
};
export const instanceReference = (instance: Deno.PointerValue): void => {
  const result = lib.symbols.wgpuInstanceReference(instance);
  return result;
};
export const instanceRelease = (instance: Deno.PointerValue): void => {
  const result = lib.symbols.wgpuInstanceRelease(instance);
  return result;
};
export const pipelineLayoutSetLabel = (
  pipelineLayout: Deno.PointerValue,
  label: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuPipelineLayoutSetLabel(pipelineLayout, label);
  return result;
};
export const pipelineLayoutReference = (
  pipelineLayout: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuPipelineLayoutReference(pipelineLayout);
  return result;
};
export const pipelineLayoutRelease = (
  pipelineLayout: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuPipelineLayoutRelease(pipelineLayout);
  return result;
};
export const querySetDestroy = (querySet: Deno.PointerValue): void => {
  const result = lib.symbols.wgpuQuerySetDestroy(querySet);
  return result;
};
export const querySetGetCount = (querySet: Deno.PointerValue): number => {
  const result = lib.symbols.wgpuQuerySetGetCount(querySet);
  return result;
};
export const querySetGetType = (querySet: Deno.PointerValue): number => {
  const result = lib.symbols.wgpuQuerySetGetType(querySet);
  return C.toEnum<E.QueryType>(result);
};
export const querySetSetLabel = (
  querySet: Deno.PointerValue,
  label: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuQuerySetSetLabel(querySet, label);
  return result;
};
export const querySetReference = (querySet: Deno.PointerValue): void => {
  const result = lib.symbols.wgpuQuerySetReference(querySet);
  return result;
};
export const querySetRelease = (querySet: Deno.PointerValue): void => {
  const result = lib.symbols.wgpuQuerySetRelease(querySet);
  return result;
};
export const queueOnSubmittedWorkDone = (
  queue: Deno.PointerValue,
  callback: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuQueueOnSubmittedWorkDone(
    queue,
    callback,
    null,
  );
  return result;
};
export const queueSetLabel = (
  queue: Deno.PointerValue,
  label: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuQueueSetLabel(queue, label);
  return result;
};
export const queueSubmit = (
  queue: Deno.PointerValue,
  commandCount: number | bigint,
  commands: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuQueueSubmit(queue, commandCount, commands);
  return result;
};
export const queueWriteBuffer = (
  queue: Deno.PointerValue,
  buffer: Deno.PointerValue,
  bufferOffset: number | bigint,
  data: Deno.PointerValue,
  size: number | bigint,
): void => {
  const result = lib.symbols.wgpuQueueWriteBuffer(
    queue,
    buffer,
    bufferOffset,
    data,
    size,
  );
  return result;
};
export const queueWriteTexture = (
  queue: Deno.PointerValue,
  destination: Deno.PointerValue,
  data: Deno.PointerValue,
  dataSize: number | bigint,
  dataLayout: Deno.PointerValue,
  writeSize: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuQueueWriteTexture(
    queue,
    destination,
    data,
    dataSize,
    dataLayout,
    writeSize,
  );
  return result;
};
export const queueReference = (queue: Deno.PointerValue): void => {
  const result = lib.symbols.wgpuQueueReference(queue);
  return result;
};
export const queueRelease = (queue: Deno.PointerValue): void => {
  const result = lib.symbols.wgpuQueueRelease(queue);
  return result;
};
export const renderBundleSetLabel = (
  renderBundle: Deno.PointerValue,
  label: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuRenderBundleSetLabel(renderBundle, label);
  return result;
};
export const renderBundleReference = (
  renderBundle: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuRenderBundleReference(renderBundle);
  return result;
};
export const renderBundleRelease = (renderBundle: Deno.PointerValue): void => {
  const result = lib.symbols.wgpuRenderBundleRelease(renderBundle);
  return result;
};
export const renderBundleEncoderDraw = (
  renderBundleEncoder: Deno.PointerValue,
  vertexCount: number,
  instanceCount: number,
  firstVertex: number,
  firstInstance: number,
): void => {
  const result = lib.symbols.wgpuRenderBundleEncoderDraw(
    renderBundleEncoder,
    vertexCount,
    instanceCount,
    firstVertex,
    firstInstance,
  );
  return result;
};
export const renderBundleEncoderDrawIndexed = (
  renderBundleEncoder: Deno.PointerValue,
  indexCount: number,
  instanceCount: number,
  firstIndex: number,
  baseVertex: number,
  firstInstance: number,
): void => {
  const result = lib.symbols.wgpuRenderBundleEncoderDrawIndexed(
    renderBundleEncoder,
    indexCount,
    instanceCount,
    firstIndex,
    baseVertex,
    firstInstance,
  );
  return result;
};
export const renderBundleEncoderDrawIndexedIndirect = (
  renderBundleEncoder: Deno.PointerValue,
  indirectBuffer: Deno.PointerValue,
  indirectOffset: number | bigint,
): void => {
  const result = lib.symbols.wgpuRenderBundleEncoderDrawIndexedIndirect(
    renderBundleEncoder,
    indirectBuffer,
    indirectOffset,
  );
  return result;
};
export const renderBundleEncoderDrawIndirect = (
  renderBundleEncoder: Deno.PointerValue,
  indirectBuffer: Deno.PointerValue,
  indirectOffset: number | bigint,
): void => {
  const result = lib.symbols.wgpuRenderBundleEncoderDrawIndirect(
    renderBundleEncoder,
    indirectBuffer,
    indirectOffset,
  );
  return result;
};
export const renderBundleEncoderFinish = (
  renderBundleEncoder: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue => {
  const result = lib.symbols.wgpuRenderBundleEncoderFinish(
    renderBundleEncoder,
    descriptor,
  );
  return result;
};
export const renderBundleEncoderInsertDebugMarker = (
  renderBundleEncoder: Deno.PointerValue,
  markerLabel: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuRenderBundleEncoderInsertDebugMarker(
    renderBundleEncoder,
    markerLabel,
  );
  return result;
};
export const renderBundleEncoderPopDebugGroup = (
  renderBundleEncoder: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuRenderBundleEncoderPopDebugGroup(
    renderBundleEncoder,
  );
  return result;
};
export const renderBundleEncoderPushDebugGroup = (
  renderBundleEncoder: Deno.PointerValue,
  groupLabel: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuRenderBundleEncoderPushDebugGroup(
    renderBundleEncoder,
    groupLabel,
  );
  return result;
};
export const renderBundleEncoderSetBindGroup = (
  renderBundleEncoder: Deno.PointerValue,
  groupIndex: number,
  group: Deno.PointerValue,
  dynamicOffsetCount: number | bigint,
  dynamicOffsets: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuRenderBundleEncoderSetBindGroup(
    renderBundleEncoder,
    groupIndex,
    group,
    dynamicOffsetCount,
    dynamicOffsets,
  );
  return result;
};
export const renderBundleEncoderSetIndexBuffer = (
  renderBundleEncoder: Deno.PointerValue,
  buffer: Deno.PointerValue,
  format: E.IndexFormat,
  offset: number | bigint,
  size: number | bigint,
): void => {
  const result = lib.symbols.wgpuRenderBundleEncoderSetIndexBuffer(
    renderBundleEncoder,
    buffer,
    format,
    offset,
    size,
  );
  return result;
};
export const renderBundleEncoderSetLabel = (
  renderBundleEncoder: Deno.PointerValue,
  label: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuRenderBundleEncoderSetLabel(
    renderBundleEncoder,
    label,
  );
  return result;
};
export const renderBundleEncoderSetPipeline = (
  renderBundleEncoder: Deno.PointerValue,
  pipeline: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuRenderBundleEncoderSetPipeline(
    renderBundleEncoder,
    pipeline,
  );
  return result;
};
export const renderBundleEncoderSetVertexBuffer = (
  renderBundleEncoder: Deno.PointerValue,
  slot: number,
  buffer: Deno.PointerValue,
  offset: number | bigint,
  size: number | bigint,
): void => {
  const result = lib.symbols.wgpuRenderBundleEncoderSetVertexBuffer(
    renderBundleEncoder,
    slot,
    buffer,
    offset,
    size,
  );
  return result;
};
export const renderBundleEncoderReference = (
  renderBundleEncoder: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuRenderBundleEncoderReference(
    renderBundleEncoder,
  );
  return result;
};
export const renderBundleEncoderRelease = (
  renderBundleEncoder: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuRenderBundleEncoderRelease(
    renderBundleEncoder,
  );
  return result;
};
export const renderPassEncoderBeginOcclusionQuery = (
  renderPassEncoder: Deno.PointerValue,
  queryIndex: number,
): void => {
  const result = lib.symbols.wgpuRenderPassEncoderBeginOcclusionQuery(
    renderPassEncoder,
    queryIndex,
  );
  return result;
};
export const renderPassEncoderBeginPipelineStatisticsQuery = (
  renderPassEncoder: Deno.PointerValue,
  querySet: Deno.PointerValue,
  queryIndex: number,
): void => {
  const result = lib.symbols.wgpuRenderPassEncoderBeginPipelineStatisticsQuery(
    renderPassEncoder,
    querySet,
    queryIndex,
  );
  return result;
};
export const renderPassEncoderDraw = (
  renderPassEncoder: Deno.PointerValue,
  vertexCount: number,
  instanceCount: number,
  firstVertex: number,
  firstInstance: number,
): void => {
  const result = lib.symbols.wgpuRenderPassEncoderDraw(
    renderPassEncoder,
    vertexCount,
    instanceCount,
    firstVertex,
    firstInstance,
  );
  return result;
};
export const renderPassEncoderDrawIndexed = (
  renderPassEncoder: Deno.PointerValue,
  indexCount: number,
  instanceCount: number,
  firstIndex: number,
  baseVertex: number,
  firstInstance: number,
): void => {
  const result = lib.symbols.wgpuRenderPassEncoderDrawIndexed(
    renderPassEncoder,
    indexCount,
    instanceCount,
    firstIndex,
    baseVertex,
    firstInstance,
  );
  return result;
};
export const renderPassEncoderDrawIndexedIndirect = (
  renderPassEncoder: Deno.PointerValue,
  indirectBuffer: Deno.PointerValue,
  indirectOffset: number | bigint,
): void => {
  const result = lib.symbols.wgpuRenderPassEncoderDrawIndexedIndirect(
    renderPassEncoder,
    indirectBuffer,
    indirectOffset,
  );
  return result;
};
export const renderPassEncoderDrawIndirect = (
  renderPassEncoder: Deno.PointerValue,
  indirectBuffer: Deno.PointerValue,
  indirectOffset: number | bigint,
): void => {
  const result = lib.symbols.wgpuRenderPassEncoderDrawIndirect(
    renderPassEncoder,
    indirectBuffer,
    indirectOffset,
  );
  return result;
};
export const renderPassEncoderEnd = (
  renderPassEncoder: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuRenderPassEncoderEnd(renderPassEncoder);
  return result;
};
export const renderPassEncoderEndOcclusionQuery = (
  renderPassEncoder: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuRenderPassEncoderEndOcclusionQuery(
    renderPassEncoder,
  );
  return result;
};
export const renderPassEncoderEndPipelineStatisticsQuery = (
  renderPassEncoder: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuRenderPassEncoderEndPipelineStatisticsQuery(
    renderPassEncoder,
  );
  return result;
};
export const renderPassEncoderExecuteBundles = (
  renderPassEncoder: Deno.PointerValue,
  bundleCount: number | bigint,
  bundles: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuRenderPassEncoderExecuteBundles(
    renderPassEncoder,
    bundleCount,
    bundles,
  );
  return result;
};
export const renderPassEncoderInsertDebugMarker = (
  renderPassEncoder: Deno.PointerValue,
  markerLabel: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuRenderPassEncoderInsertDebugMarker(
    renderPassEncoder,
    markerLabel,
  );
  return result;
};
export const renderPassEncoderPopDebugGroup = (
  renderPassEncoder: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuRenderPassEncoderPopDebugGroup(
    renderPassEncoder,
  );
  return result;
};
export const renderPassEncoderPushDebugGroup = (
  renderPassEncoder: Deno.PointerValue,
  groupLabel: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuRenderPassEncoderPushDebugGroup(
    renderPassEncoder,
    groupLabel,
  );
  return result;
};
export const renderPassEncoderSetBindGroup = (
  renderPassEncoder: Deno.PointerValue,
  groupIndex: number,
  group: Deno.PointerValue,
  dynamicOffsetCount: number | bigint,
  dynamicOffsets: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuRenderPassEncoderSetBindGroup(
    renderPassEncoder,
    groupIndex,
    group,
    dynamicOffsetCount,
    dynamicOffsets,
  );
  return result;
};
export const renderPassEncoderSetBlendConstant = (
  renderPassEncoder: Deno.PointerValue,
  color: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuRenderPassEncoderSetBlendConstant(
    renderPassEncoder,
    color,
  );
  return result;
};
export const renderPassEncoderSetIndexBuffer = (
  renderPassEncoder: Deno.PointerValue,
  buffer: Deno.PointerValue,
  format: E.IndexFormat,
  offset: number | bigint,
  size: number | bigint,
): void => {
  const result = lib.symbols.wgpuRenderPassEncoderSetIndexBuffer(
    renderPassEncoder,
    buffer,
    format,
    offset,
    size,
  );
  return result;
};
export const renderPassEncoderSetLabel = (
  renderPassEncoder: Deno.PointerValue,
  label: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuRenderPassEncoderSetLabel(
    renderPassEncoder,
    label,
  );
  return result;
};
export const renderPassEncoderSetPipeline = (
  renderPassEncoder: Deno.PointerValue,
  pipeline: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuRenderPassEncoderSetPipeline(
    renderPassEncoder,
    pipeline,
  );
  return result;
};
export const renderPassEncoderSetScissorRect = (
  renderPassEncoder: Deno.PointerValue,
  x: number,
  y: number,
  width: number,
  height: number,
): void => {
  const result = lib.symbols.wgpuRenderPassEncoderSetScissorRect(
    renderPassEncoder,
    x,
    y,
    width,
    height,
  );
  return result;
};
export const renderPassEncoderSetStencilReference = (
  renderPassEncoder: Deno.PointerValue,
  reference: number,
): void => {
  const result = lib.symbols.wgpuRenderPassEncoderSetStencilReference(
    renderPassEncoder,
    reference,
  );
  return result;
};
export const renderPassEncoderSetVertexBuffer = (
  renderPassEncoder: Deno.PointerValue,
  slot: number,
  buffer: Deno.PointerValue,
  offset: number | bigint,
  size: number | bigint,
): void => {
  const result = lib.symbols.wgpuRenderPassEncoderSetVertexBuffer(
    renderPassEncoder,
    slot,
    buffer,
    offset,
    size,
  );
  return result;
};
export const renderPassEncoderSetViewport = (
  renderPassEncoder: Deno.PointerValue,
  x: bigint,
  y: bigint,
  width: bigint,
  height: bigint,
  minDepth: bigint,
  maxDepth: bigint,
): void => {
  const result = lib.symbols.wgpuRenderPassEncoderSetViewport(
    renderPassEncoder,
    x,
    y,
    width,
    height,
    minDepth,
    maxDepth,
  );
  return result;
};
export const renderPassEncoderReference = (
  renderPassEncoder: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuRenderPassEncoderReference(renderPassEncoder);
  return result;
};
export const renderPassEncoderRelease = (
  renderPassEncoder: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuRenderPassEncoderRelease(renderPassEncoder);
  return result;
};
export const renderPipelineGetBindGroupLayout = (
  renderPipeline: Deno.PointerValue,
  groupIndex: number,
): Deno.PointerValue => {
  const result = lib.symbols.wgpuRenderPipelineGetBindGroupLayout(
    renderPipeline,
    groupIndex,
  );
  return result;
};
export const renderPipelineSetLabel = (
  renderPipeline: Deno.PointerValue,
  label: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuRenderPipelineSetLabel(renderPipeline, label);
  return result;
};
export const renderPipelineReference = (
  renderPipeline: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuRenderPipelineReference(renderPipeline);
  return result;
};
export const renderPipelineRelease = (
  renderPipeline: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuRenderPipelineRelease(renderPipeline);
  return result;
};
export const samplerSetLabel = (
  sampler: Deno.PointerValue,
  label: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuSamplerSetLabel(sampler, label);
  return result;
};
export const samplerReference = (sampler: Deno.PointerValue): void => {
  const result = lib.symbols.wgpuSamplerReference(sampler);
  return result;
};
export const samplerRelease = (sampler: Deno.PointerValue): void => {
  const result = lib.symbols.wgpuSamplerRelease(sampler);
  return result;
};
export const shaderModuleGetCompilationInfo = (
  shaderModule: Deno.PointerValue,
  callback: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuShaderModuleGetCompilationInfo(
    shaderModule,
    callback,
    null,
  );
  return result;
};
export const shaderModuleSetLabel = (
  shaderModule: Deno.PointerValue,
  label: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuShaderModuleSetLabel(shaderModule, label);
  return result;
};
export const shaderModuleReference = (
  shaderModule: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuShaderModuleReference(shaderModule);
  return result;
};
export const shaderModuleRelease = (shaderModule: Deno.PointerValue): void => {
  const result = lib.symbols.wgpuShaderModuleRelease(shaderModule);
  return result;
};
export const surfaceGetPreferredFormat = (
  surface: Deno.PointerValue,
  adapter: Deno.PointerValue,
): number => {
  const result = lib.symbols.wgpuSurfaceGetPreferredFormat(surface, adapter);
  return C.toEnum<E.TextureFormat>(result);
};
export const surfaceReference = (surface: Deno.PointerValue): void => {
  const result = lib.symbols.wgpuSurfaceReference(surface);
  return result;
};
export const surfaceRelease = (surface: Deno.PointerValue): void => {
  const result = lib.symbols.wgpuSurfaceRelease(surface);
  return result;
};
export const swapChainGetCurrentTextureView = (
  swapChain: Deno.PointerValue,
): Deno.PointerValue => {
  const result = lib.symbols.wgpuSwapChainGetCurrentTextureView(swapChain);
  return result;
};
export const swapChainPresent = (swapChain: Deno.PointerValue): void => {
  const result = lib.symbols.wgpuSwapChainPresent(swapChain);
  return result;
};
export const swapChainReference = (swapChain: Deno.PointerValue): void => {
  const result = lib.symbols.wgpuSwapChainReference(swapChain);
  return result;
};
export const swapChainRelease = (swapChain: Deno.PointerValue): void => {
  const result = lib.symbols.wgpuSwapChainRelease(swapChain);
  return result;
};
export const textureCreateView = (
  texture: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue => {
  const result = lib.symbols.wgpuTextureCreateView(texture, descriptor);
  return result;
};
export const textureDestroy = (texture: Deno.PointerValue): void => {
  const result = lib.symbols.wgpuTextureDestroy(texture);
  return result;
};
export const textureGetDepthOrArrayLayers = (
  texture: Deno.PointerValue,
): number => {
  const result = lib.symbols.wgpuTextureGetDepthOrArrayLayers(texture);
  return result;
};
export const textureGetDimension = (texture: Deno.PointerValue): number => {
  const result = lib.symbols.wgpuTextureGetDimension(texture);
  return C.toEnum<E.TextureDimension>(result);
};
export const textureGetFormat = (texture: Deno.PointerValue): number => {
  const result = lib.symbols.wgpuTextureGetFormat(texture);
  return C.toEnum<E.TextureFormat>(result);
};
export const textureGetHeight = (texture: Deno.PointerValue): number => {
  const result = lib.symbols.wgpuTextureGetHeight(texture);
  return result;
};
export const textureGetMipLevelCount = (texture: Deno.PointerValue): number => {
  const result = lib.symbols.wgpuTextureGetMipLevelCount(texture);
  return result;
};
export const textureGetSampleCount = (texture: Deno.PointerValue): number => {
  const result = lib.symbols.wgpuTextureGetSampleCount(texture);
  return result;
};
export const textureGetUsage = (texture: Deno.PointerValue): number => {
  const result = lib.symbols.wgpuTextureGetUsage(texture);
  return result;
};
export const textureGetWidth = (texture: Deno.PointerValue): number => {
  const result = lib.symbols.wgpuTextureGetWidth(texture);
  return result;
};
export const textureSetLabel = (
  texture: Deno.PointerValue,
  label: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuTextureSetLabel(texture, label);
  return result;
};
export const textureReference = (texture: Deno.PointerValue): void => {
  const result = lib.symbols.wgpuTextureReference(texture);
  return result;
};
export const textureRelease = (texture: Deno.PointerValue): void => {
  const result = lib.symbols.wgpuTextureRelease(texture);
  return result;
};
export const textureViewSetLabel = (
  textureView: Deno.PointerValue,
  label: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuTextureViewSetLabel(textureView, label);
  return result;
};
export const textureViewReference = (textureView: Deno.PointerValue): void => {
  const result = lib.symbols.wgpuTextureViewReference(textureView);
  return result;
};
export const textureViewRelease = (textureView: Deno.PointerValue): void => {
  const result = lib.symbols.wgpuTextureViewRelease(textureView);
  return result;
};
export const generateReport = (
  instance: Deno.PointerValue,
  report: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuGenerateReport(instance, report);
  return result;
};
export const instanceEnumerateAdapters = (
  instance: Deno.PointerValue,
  options: Deno.PointerValue,
  adapters: Deno.PointerValue,
): number | bigint => {
  const result = lib.symbols.wgpuInstanceEnumerateAdapters(
    instance,
    options,
    adapters,
  );
  return result;
};
export const queueSubmitForIndex = (
  queue: Deno.PointerValue,
  commandCount: number | bigint,
  commands: Deno.PointerValue,
): number | bigint => {
  const result = lib.symbols.wgpuQueueSubmitForIndex(
    queue,
    commandCount,
    commands,
  );
  return result;
};
export const devicePoll = (
  device: Deno.PointerValue,
  wait: boolean,
  wrappedSubmissionIndex: Deno.PointerValue,
): boolean => {
  const result = lib.symbols.wgpuDevicePoll(
    device,
    C.toNum(wait),
    wrappedSubmissionIndex,
  );
  return C.toBool(result);
};
export const setLogCallback = (callback: Deno.PointerValue): void => {
  const result = lib.symbols.wgpuSetLogCallback(callback, null);
  return result;
};
export const setLogLevel = (level: E.LogLevel): void => {
  const result = lib.symbols.wgpuSetLogLevel(level);
  return result;
};
export const getVersion = (): number => {
  const result = lib.symbols.wgpuGetVersion();
  return result;
};
export const surfaceGetCapabilities = (
  surface: Deno.PointerValue,
  adapter: Deno.PointerValue,
  capabilities: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuSurfaceGetCapabilities(
    surface,
    adapter,
    capabilities,
  );
  return result;
};
export const renderPassEncoderSetPushConstants = (
  encoder: Deno.PointerValue,
  stages: number,
  offset: number,
  sizeBytes: number,
  data: Deno.PointerValue,
): void => {
  const result = lib.symbols.wgpuRenderPassEncoderSetPushConstants(
    encoder,
    stages,
    offset,
    sizeBytes,
    data,
  );
  return result;
};
export const renderPassEncoderMultiDrawIndirect = (
  encoder: Deno.PointerValue,
  buffer: Deno.PointerValue,
  offset: number | bigint,
  count: number,
): void => {
  const result = lib.symbols.wgpuRenderPassEncoderMultiDrawIndirect(
    encoder,
    buffer,
    offset,
    count,
  );
  return result;
};
export const renderPassEncoderMultiDrawIndexedIndirect = (
  encoder: Deno.PointerValue,
  buffer: Deno.PointerValue,
  offset: number | bigint,
  count: number,
): void => {
  const result = lib.symbols.wgpuRenderPassEncoderMultiDrawIndexedIndirect(
    encoder,
    buffer,
    offset,
    count,
  );
  return result;
};
export const renderPassEncoderMultiDrawIndirectCount = (
  encoder: Deno.PointerValue,
  buffer: Deno.PointerValue,
  offset: number | bigint,
  count_buffer: Deno.PointerValue,
  count_buffer_offset: number | bigint,
  max_count: number,
): void => {
  const result = lib.symbols.wgpuRenderPassEncoderMultiDrawIndirectCount(
    encoder,
    buffer,
    offset,
    count_buffer,
    count_buffer_offset,
    max_count,
  );
  return result;
};
export const renderPassEncoderMultiDrawIndexedIndirectCount = (
  encoder: Deno.PointerValue,
  buffer: Deno.PointerValue,
  offset: number | bigint,
  count_buffer: Deno.PointerValue,
  count_buffer_offset: number | bigint,
  max_count: number,
): void => {
  const result = lib.symbols.wgpuRenderPassEncoderMultiDrawIndexedIndirectCount(
    encoder,
    buffer,
    offset,
    count_buffer,
    count_buffer_offset,
    max_count,
  );
  return result;
};
