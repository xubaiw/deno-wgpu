import lib from "./symbol.ts";
import * as C from "../util/conv.ts";
import * as E from "./enum.ts";
import * as CB from "./callback.ts";

export function createInstance(
  descriptor: Deno.PointerValue,
): Deno.PointerValue {
  const result = lib.symbols.wgpuCreateInstance(
    descriptor,
  );
  return result;
}

export function getProcAddress(
  device: Deno.PointerValue,
  procName: Deno.PointerValue,
): Deno.PointerValue {
  const result = lib.symbols.wgpuGetProcAddress(
    device,
    procName,
  );
  return result;
}

export function adapterEnumerateFeatures(
  adapter: Deno.PointerValue,
  features: Deno.PointerValue,
): number | bigint {
  const result = lib.symbols.wgpuAdapterEnumerateFeatures(
    adapter,
    features,
  );
  return result;
}

export function adapterGetLimits(
  adapter: Deno.PointerValue,
  limits: Deno.PointerValue,
): boolean {
  const result = lib.symbols.wgpuAdapterGetLimits(
    adapter,
    limits,
  );
  return C.toBool(result);
}

export function adapterGetProperties(
  adapter: Deno.PointerValue,
  properties: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuAdapterGetProperties(
    adapter,
    properties,
  );
  return result;
}

export function adapterHasFeature(
  adapter: Deno.PointerValue,
  feature: E.FeatureName,
): boolean {
  const result = lib.symbols.wgpuAdapterHasFeature(
    adapter,
    feature,
  );
  return C.toBool(result);
}

export function adapterRequestDevice(
  adapter: Deno.PointerValue,
  descriptor: Deno.PointerValue,
  callback: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuAdapterRequestDevice(
    adapter,
    descriptor,
    callback,
    null,
  );
  return result;
}

export function adapterReference(
  adapter: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuAdapterReference(
    adapter,
  );
  return result;
}

export function adapterRelease(
  adapter: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuAdapterRelease(
    adapter,
  );
  return result;
}

export function bindGroupSetLabel(
  bindGroup: Deno.PointerValue,
  label: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuBindGroupSetLabel(
    bindGroup,
    label,
  );
  return result;
}

export function bindGroupReference(
  bindGroup: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuBindGroupReference(
    bindGroup,
  );
  return result;
}

export function bindGroupRelease(
  bindGroup: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuBindGroupRelease(
    bindGroup,
  );
  return result;
}

export function bindGroupLayoutSetLabel(
  bindGroupLayout: Deno.PointerValue,
  label: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuBindGroupLayoutSetLabel(
    bindGroupLayout,
    label,
  );
  return result;
}

export function bindGroupLayoutReference(
  bindGroupLayout: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuBindGroupLayoutReference(
    bindGroupLayout,
  );
  return result;
}

export function bindGroupLayoutRelease(
  bindGroupLayout: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuBindGroupLayoutRelease(
    bindGroupLayout,
  );
  return result;
}

export function bufferDestroy(
  buffer: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuBufferDestroy(
    buffer,
  );
  return result;
}

export function bufferGetConstMappedRange(
  buffer: Deno.PointerValue,
  offset: number | bigint,
  size: number | bigint,
): Deno.PointerValue {
  const result = lib.symbols.wgpuBufferGetConstMappedRange(
    buffer,
    offset,
    size,
  );
  return result;
}

export function bufferGetMapState(
  buffer: Deno.PointerValue,
): number {
  const result = lib.symbols.wgpuBufferGetMapState(
    buffer,
  );
  return C.toEnum<E.BufferMapState>(result);
}

export function bufferGetMappedRange(
  buffer: Deno.PointerValue,
  offset: number | bigint,
  size: number | bigint,
): Deno.PointerValue {
  const result = lib.symbols.wgpuBufferGetMappedRange(
    buffer,
    offset,
    size,
  );
  return result;
}

export function bufferGetSize(
  buffer: Deno.PointerValue,
): number | bigint {
  const result = lib.symbols.wgpuBufferGetSize(
    buffer,
  );
  return result;
}

export function bufferGetUsage(
  buffer: Deno.PointerValue,
): number {
  const result = lib.symbols.wgpuBufferGetUsage(
    buffer,
  );
  return result;
}

export function bufferMapAsync(
  buffer: Deno.PointerValue,
  mode: number,
  offset: number | bigint,
  size: number | bigint,
  callback: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuBufferMapAsync(
    buffer,
    mode,
    offset,
    size,
    callback,
    null,
  );
  return result;
}

export function bufferSetLabel(
  buffer: Deno.PointerValue,
  label: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuBufferSetLabel(
    buffer,
    label,
  );
  return result;
}

export function bufferUnmap(
  buffer: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuBufferUnmap(
    buffer,
  );
  return result;
}

export function bufferReference(
  buffer: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuBufferReference(
    buffer,
  );
  return result;
}

export function bufferRelease(
  buffer: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuBufferRelease(
    buffer,
  );
  return result;
}

export function commandBufferSetLabel(
  commandBuffer: Deno.PointerValue,
  label: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuCommandBufferSetLabel(
    commandBuffer,
    label,
  );
  return result;
}

export function commandBufferReference(
  commandBuffer: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuCommandBufferReference(
    commandBuffer,
  );
  return result;
}

export function commandBufferRelease(
  commandBuffer: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuCommandBufferRelease(
    commandBuffer,
  );
  return result;
}

export function commandEncoderBeginComputePass(
  commandEncoder: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue {
  const result = lib.symbols.wgpuCommandEncoderBeginComputePass(
    commandEncoder,
    descriptor,
  );
  return result;
}

export function commandEncoderBeginRenderPass(
  commandEncoder: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue {
  const result = lib.symbols.wgpuCommandEncoderBeginRenderPass(
    commandEncoder,
    descriptor,
  );
  return result;
}

export function commandEncoderClearBuffer(
  commandEncoder: Deno.PointerValue,
  buffer: Deno.PointerValue,
  offset: number | bigint,
  size: number | bigint,
): void {
  const result = lib.symbols.wgpuCommandEncoderClearBuffer(
    commandEncoder,
    buffer,
    offset,
    size,
  );
  return result;
}

export function commandEncoderCopyBufferToBuffer(
  commandEncoder: Deno.PointerValue,
  source: Deno.PointerValue,
  sourceOffset: number | bigint,
  destination: Deno.PointerValue,
  destinationOffset: number | bigint,
  size: number | bigint,
): void {
  const result = lib.symbols.wgpuCommandEncoderCopyBufferToBuffer(
    commandEncoder,
    source,
    sourceOffset,
    destination,
    destinationOffset,
    size,
  );
  return result;
}

export function commandEncoderCopyBufferToTexture(
  commandEncoder: Deno.PointerValue,
  source: Deno.PointerValue,
  destination: Deno.PointerValue,
  copySize: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuCommandEncoderCopyBufferToTexture(
    commandEncoder,
    source,
    destination,
    copySize,
  );
  return result;
}

export function commandEncoderCopyTextureToBuffer(
  commandEncoder: Deno.PointerValue,
  source: Deno.PointerValue,
  destination: Deno.PointerValue,
  copySize: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuCommandEncoderCopyTextureToBuffer(
    commandEncoder,
    source,
    destination,
    copySize,
  );
  return result;
}

export function commandEncoderCopyTextureToTexture(
  commandEncoder: Deno.PointerValue,
  source: Deno.PointerValue,
  destination: Deno.PointerValue,
  copySize: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuCommandEncoderCopyTextureToTexture(
    commandEncoder,
    source,
    destination,
    copySize,
  );
  return result;
}

export function commandEncoderFinish(
  commandEncoder: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue {
  const result = lib.symbols.wgpuCommandEncoderFinish(
    commandEncoder,
    descriptor,
  );
  return result;
}

export function commandEncoderInsertDebugMarker(
  commandEncoder: Deno.PointerValue,
  markerLabel: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuCommandEncoderInsertDebugMarker(
    commandEncoder,
    markerLabel,
  );
  return result;
}

export function commandEncoderPopDebugGroup(
  commandEncoder: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuCommandEncoderPopDebugGroup(
    commandEncoder,
  );
  return result;
}

export function commandEncoderPushDebugGroup(
  commandEncoder: Deno.PointerValue,
  groupLabel: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuCommandEncoderPushDebugGroup(
    commandEncoder,
    groupLabel,
  );
  return result;
}

export function commandEncoderResolveQuerySet(
  commandEncoder: Deno.PointerValue,
  querySet: Deno.PointerValue,
  firstQuery: number,
  queryCount: number,
  destination: Deno.PointerValue,
  destinationOffset: number | bigint,
): void {
  const result = lib.symbols.wgpuCommandEncoderResolveQuerySet(
    commandEncoder,
    querySet,
    firstQuery,
    queryCount,
    destination,
    destinationOffset,
  );
  return result;
}

export function commandEncoderSetLabel(
  commandEncoder: Deno.PointerValue,
  label: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuCommandEncoderSetLabel(
    commandEncoder,
    label,
  );
  return result;
}

export function commandEncoderWriteTimestamp(
  commandEncoder: Deno.PointerValue,
  querySet: Deno.PointerValue,
  queryIndex: number,
): void {
  const result = lib.symbols.wgpuCommandEncoderWriteTimestamp(
    commandEncoder,
    querySet,
    queryIndex,
  );
  return result;
}

export function commandEncoderReference(
  commandEncoder: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuCommandEncoderReference(
    commandEncoder,
  );
  return result;
}

export function commandEncoderRelease(
  commandEncoder: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuCommandEncoderRelease(
    commandEncoder,
  );
  return result;
}

export function computePassEncoderBeginPipelineStatisticsQuery(
  computePassEncoder: Deno.PointerValue,
  querySet: Deno.PointerValue,
  queryIndex: number,
): void {
  const result = lib.symbols.wgpuComputePassEncoderBeginPipelineStatisticsQuery(
    computePassEncoder,
    querySet,
    queryIndex,
  );
  return result;
}

export function computePassEncoderDispatchWorkgroups(
  computePassEncoder: Deno.PointerValue,
  workgroupCountX: number,
  workgroupCountY: number,
  workgroupCountZ: number,
): void {
  const result = lib.symbols.wgpuComputePassEncoderDispatchWorkgroups(
    computePassEncoder,
    workgroupCountX,
    workgroupCountY,
    workgroupCountZ,
  );
  return result;
}

export function computePassEncoderDispatchWorkgroupsIndirect(
  computePassEncoder: Deno.PointerValue,
  indirectBuffer: Deno.PointerValue,
  indirectOffset: number | bigint,
): void {
  const result = lib.symbols.wgpuComputePassEncoderDispatchWorkgroupsIndirect(
    computePassEncoder,
    indirectBuffer,
    indirectOffset,
  );
  return result;
}

export function computePassEncoderEnd(
  computePassEncoder: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuComputePassEncoderEnd(
    computePassEncoder,
  );
  return result;
}

export function computePassEncoderEndPipelineStatisticsQuery(
  computePassEncoder: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuComputePassEncoderEndPipelineStatisticsQuery(
    computePassEncoder,
  );
  return result;
}

export function computePassEncoderInsertDebugMarker(
  computePassEncoder: Deno.PointerValue,
  markerLabel: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuComputePassEncoderInsertDebugMarker(
    computePassEncoder,
    markerLabel,
  );
  return result;
}

export function computePassEncoderPopDebugGroup(
  computePassEncoder: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuComputePassEncoderPopDebugGroup(
    computePassEncoder,
  );
  return result;
}

export function computePassEncoderPushDebugGroup(
  computePassEncoder: Deno.PointerValue,
  groupLabel: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuComputePassEncoderPushDebugGroup(
    computePassEncoder,
    groupLabel,
  );
  return result;
}

export function computePassEncoderSetBindGroup(
  computePassEncoder: Deno.PointerValue,
  groupIndex: number,
  group: Deno.PointerValue,
  dynamicOffsetCount: number | bigint,
  dynamicOffsets: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuComputePassEncoderSetBindGroup(
    computePassEncoder,
    groupIndex,
    group,
    dynamicOffsetCount,
    dynamicOffsets,
  );
  return result;
}

export function computePassEncoderSetLabel(
  computePassEncoder: Deno.PointerValue,
  label: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuComputePassEncoderSetLabel(
    computePassEncoder,
    label,
  );
  return result;
}

export function computePassEncoderSetPipeline(
  computePassEncoder: Deno.PointerValue,
  pipeline: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuComputePassEncoderSetPipeline(
    computePassEncoder,
    pipeline,
  );
  return result;
}

export function computePassEncoderReference(
  computePassEncoder: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuComputePassEncoderReference(
    computePassEncoder,
  );
  return result;
}

export function computePassEncoderRelease(
  computePassEncoder: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuComputePassEncoderRelease(
    computePassEncoder,
  );
  return result;
}

export function computePipelineGetBindGroupLayout(
  computePipeline: Deno.PointerValue,
  groupIndex: number,
): Deno.PointerValue {
  const result = lib.symbols.wgpuComputePipelineGetBindGroupLayout(
    computePipeline,
    groupIndex,
  );
  return result;
}

export function computePipelineSetLabel(
  computePipeline: Deno.PointerValue,
  label: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuComputePipelineSetLabel(
    computePipeline,
    label,
  );
  return result;
}

export function computePipelineReference(
  computePipeline: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuComputePipelineReference(
    computePipeline,
  );
  return result;
}

export function computePipelineRelease(
  computePipeline: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuComputePipelineRelease(
    computePipeline,
  );
  return result;
}

export function deviceCreateBindGroup(
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue {
  const result = lib.symbols.wgpuDeviceCreateBindGroup(
    device,
    descriptor,
  );
  return result;
}

export function deviceCreateBindGroupLayout(
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue {
  const result = lib.symbols.wgpuDeviceCreateBindGroupLayout(
    device,
    descriptor,
  );
  return result;
}

export function deviceCreateBuffer(
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue {
  const result = lib.symbols.wgpuDeviceCreateBuffer(
    device,
    descriptor,
  );
  return result;
}

export function deviceCreateCommandEncoder(
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue {
  const result = lib.symbols.wgpuDeviceCreateCommandEncoder(
    device,
    descriptor,
  );
  return result;
}

export function deviceCreateComputePipeline(
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue {
  const result = lib.symbols.wgpuDeviceCreateComputePipeline(
    device,
    descriptor,
  );
  return result;
}

export function deviceCreateComputePipelineAsync(
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
  callback: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuDeviceCreateComputePipelineAsync(
    device,
    descriptor,
    callback,
    null,
  );
  return result;
}

export function deviceCreatePipelineLayout(
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue {
  const result = lib.symbols.wgpuDeviceCreatePipelineLayout(
    device,
    descriptor,
  );
  return result;
}

export function deviceCreateQuerySet(
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue {
  const result = lib.symbols.wgpuDeviceCreateQuerySet(
    device,
    descriptor,
  );
  return result;
}

export function deviceCreateRenderBundleEncoder(
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue {
  const result = lib.symbols.wgpuDeviceCreateRenderBundleEncoder(
    device,
    descriptor,
  );
  return result;
}

export function deviceCreateRenderPipeline(
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue {
  const result = lib.symbols.wgpuDeviceCreateRenderPipeline(
    device,
    descriptor,
  );
  return result;
}

export function deviceCreateRenderPipelineAsync(
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
  callback: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuDeviceCreateRenderPipelineAsync(
    device,
    descriptor,
    callback,
    null,
  );
  return result;
}

export function deviceCreateSampler(
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue {
  const result = lib.symbols.wgpuDeviceCreateSampler(
    device,
    descriptor,
  );
  return result;
}

export function deviceCreateShaderModule(
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue {
  const result = lib.symbols.wgpuDeviceCreateShaderModule(
    device,
    descriptor,
  );
  return result;
}

export function deviceCreateSwapChain(
  device: Deno.PointerValue,
  surface: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue {
  const result = lib.symbols.wgpuDeviceCreateSwapChain(
    device,
    surface,
    descriptor,
  );
  return result;
}

export function deviceCreateTexture(
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue {
  const result = lib.symbols.wgpuDeviceCreateTexture(
    device,
    descriptor,
  );
  return result;
}

export function deviceDestroy(
  device: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuDeviceDestroy(
    device,
  );
  return result;
}

export function deviceEnumerateFeatures(
  device: Deno.PointerValue,
  features: Deno.PointerValue,
): number | bigint {
  const result = lib.symbols.wgpuDeviceEnumerateFeatures(
    device,
    features,
  );
  return result;
}

export function deviceGetLimits(
  device: Deno.PointerValue,
  limits: Deno.PointerValue,
): boolean {
  const result = lib.symbols.wgpuDeviceGetLimits(
    device,
    limits,
  );
  return C.toBool(result);
}

export function deviceGetQueue(
  device: Deno.PointerValue,
): Deno.PointerValue {
  const result = lib.symbols.wgpuDeviceGetQueue(
    device,
  );
  return result;
}

export function deviceHasFeature(
  device: Deno.PointerValue,
  feature: E.FeatureName,
): boolean {
  const result = lib.symbols.wgpuDeviceHasFeature(
    device,
    feature,
  );
  return C.toBool(result);
}

export function devicePopErrorScope(
  device: Deno.PointerValue,
  callback: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuDevicePopErrorScope(
    device,
    callback,
    null,
  );
  return result;
}

export function devicePushErrorScope(
  device: Deno.PointerValue,
  filter: E.ErrorFilter,
): void {
  const result = lib.symbols.wgpuDevicePushErrorScope(
    device,
    filter,
  );
  return result;
}

export function deviceSetLabel(
  device: Deno.PointerValue,
  label: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuDeviceSetLabel(
    device,
    label,
  );
  return result;
}

export function deviceSetUncapturedErrorCallback(
  device: Deno.PointerValue,
  callback: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuDeviceSetUncapturedErrorCallback(
    device,
    callback,
    null,
  );
  return result;
}

export function deviceReference(
  device: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuDeviceReference(
    device,
  );
  return result;
}

export function deviceRelease(
  device: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuDeviceRelease(
    device,
  );
  return result;
}

export function instanceCreateSurface(
  instance: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue {
  const result = lib.symbols.wgpuInstanceCreateSurface(
    instance,
    descriptor,
  );
  return result;
}

export function instanceProcessEvents(
  instance: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuInstanceProcessEvents(
    instance,
  );
  return result;
}

export function instanceRequestAdapter(
  instance: Deno.PointerValue,
  options: Deno.PointerValue,
  callback: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuInstanceRequestAdapter(
    instance,
    options,
    callback,
    null,
  );
  return result;
}

export function instanceReference(
  instance: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuInstanceReference(
    instance,
  );
  return result;
}

export function instanceRelease(
  instance: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuInstanceRelease(
    instance,
  );
  return result;
}

export function pipelineLayoutSetLabel(
  pipelineLayout: Deno.PointerValue,
  label: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuPipelineLayoutSetLabel(
    pipelineLayout,
    label,
  );
  return result;
}

export function pipelineLayoutReference(
  pipelineLayout: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuPipelineLayoutReference(
    pipelineLayout,
  );
  return result;
}

export function pipelineLayoutRelease(
  pipelineLayout: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuPipelineLayoutRelease(
    pipelineLayout,
  );
  return result;
}

export function querySetDestroy(
  querySet: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuQuerySetDestroy(
    querySet,
  );
  return result;
}

export function querySetGetCount(
  querySet: Deno.PointerValue,
): number {
  const result = lib.symbols.wgpuQuerySetGetCount(
    querySet,
  );
  return result;
}

export function querySetGetType(
  querySet: Deno.PointerValue,
): number {
  const result = lib.symbols.wgpuQuerySetGetType(
    querySet,
  );
  return C.toEnum<E.QueryType>(result);
}

export function querySetSetLabel(
  querySet: Deno.PointerValue,
  label: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuQuerySetSetLabel(
    querySet,
    label,
  );
  return result;
}

export function querySetReference(
  querySet: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuQuerySetReference(
    querySet,
  );
  return result;
}

export function querySetRelease(
  querySet: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuQuerySetRelease(
    querySet,
  );
  return result;
}

export function queueOnSubmittedWorkDone(
  queue: Deno.PointerValue,
  callback: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuQueueOnSubmittedWorkDone(
    queue,
    callback,
    null,
  );
  return result;
}

export function queueSetLabel(
  queue: Deno.PointerValue,
  label: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuQueueSetLabel(
    queue,
    label,
  );
  return result;
}

export function queueSubmit(
  queue: Deno.PointerValue,
  commandCount: number | bigint,
  commands: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuQueueSubmit(
    queue,
    commandCount,
    commands,
  );
  return result;
}

export function queueWriteBuffer(
  queue: Deno.PointerValue,
  buffer: Deno.PointerValue,
  bufferOffset: number | bigint,
  data: Deno.PointerValue,
  size: number | bigint,
): void {
  const result = lib.symbols.wgpuQueueWriteBuffer(
    queue,
    buffer,
    bufferOffset,
    data,
    size,
  );
  return result;
}

export function queueWriteTexture(
  queue: Deno.PointerValue,
  destination: Deno.PointerValue,
  data: Deno.PointerValue,
  dataSize: number | bigint,
  dataLayout: Deno.PointerValue,
  writeSize: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuQueueWriteTexture(
    queue,
    destination,
    data,
    dataSize,
    dataLayout,
    writeSize,
  );
  return result;
}

export function queueReference(
  queue: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuQueueReference(
    queue,
  );
  return result;
}

export function queueRelease(
  queue: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuQueueRelease(
    queue,
  );
  return result;
}

export function renderBundleSetLabel(
  renderBundle: Deno.PointerValue,
  label: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuRenderBundleSetLabel(
    renderBundle,
    label,
  );
  return result;
}

export function renderBundleReference(
  renderBundle: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuRenderBundleReference(
    renderBundle,
  );
  return result;
}

export function renderBundleRelease(
  renderBundle: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuRenderBundleRelease(
    renderBundle,
  );
  return result;
}

export function renderBundleEncoderDraw(
  renderBundleEncoder: Deno.PointerValue,
  vertexCount: number,
  instanceCount: number,
  firstVertex: number,
  firstInstance: number,
): void {
  const result = lib.symbols.wgpuRenderBundleEncoderDraw(
    renderBundleEncoder,
    vertexCount,
    instanceCount,
    firstVertex,
    firstInstance,
  );
  return result;
}

export function renderBundleEncoderDrawIndexed(
  renderBundleEncoder: Deno.PointerValue,
  indexCount: number,
  instanceCount: number,
  firstIndex: number,
  baseVertex: number,
  firstInstance: number,
): void {
  const result = lib.symbols.wgpuRenderBundleEncoderDrawIndexed(
    renderBundleEncoder,
    indexCount,
    instanceCount,
    firstIndex,
    baseVertex,
    firstInstance,
  );
  return result;
}

export function renderBundleEncoderDrawIndexedIndirect(
  renderBundleEncoder: Deno.PointerValue,
  indirectBuffer: Deno.PointerValue,
  indirectOffset: number | bigint,
): void {
  const result = lib.symbols.wgpuRenderBundleEncoderDrawIndexedIndirect(
    renderBundleEncoder,
    indirectBuffer,
    indirectOffset,
  );
  return result;
}

export function renderBundleEncoderDrawIndirect(
  renderBundleEncoder: Deno.PointerValue,
  indirectBuffer: Deno.PointerValue,
  indirectOffset: number | bigint,
): void {
  const result = lib.symbols.wgpuRenderBundleEncoderDrawIndirect(
    renderBundleEncoder,
    indirectBuffer,
    indirectOffset,
  );
  return result;
}

export function renderBundleEncoderFinish(
  renderBundleEncoder: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue {
  const result = lib.symbols.wgpuRenderBundleEncoderFinish(
    renderBundleEncoder,
    descriptor,
  );
  return result;
}

export function renderBundleEncoderInsertDebugMarker(
  renderBundleEncoder: Deno.PointerValue,
  markerLabel: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuRenderBundleEncoderInsertDebugMarker(
    renderBundleEncoder,
    markerLabel,
  );
  return result;
}

export function renderBundleEncoderPopDebugGroup(
  renderBundleEncoder: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuRenderBundleEncoderPopDebugGroup(
    renderBundleEncoder,
  );
  return result;
}

export function renderBundleEncoderPushDebugGroup(
  renderBundleEncoder: Deno.PointerValue,
  groupLabel: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuRenderBundleEncoderPushDebugGroup(
    renderBundleEncoder,
    groupLabel,
  );
  return result;
}

export function renderBundleEncoderSetBindGroup(
  renderBundleEncoder: Deno.PointerValue,
  groupIndex: number,
  group: Deno.PointerValue,
  dynamicOffsetCount: number | bigint,
  dynamicOffsets: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuRenderBundleEncoderSetBindGroup(
    renderBundleEncoder,
    groupIndex,
    group,
    dynamicOffsetCount,
    dynamicOffsets,
  );
  return result;
}

export function renderBundleEncoderSetIndexBuffer(
  renderBundleEncoder: Deno.PointerValue,
  buffer: Deno.PointerValue,
  format: E.IndexFormat,
  offset: number | bigint,
  size: number | bigint,
): void {
  const result = lib.symbols.wgpuRenderBundleEncoderSetIndexBuffer(
    renderBundleEncoder,
    buffer,
    format,
    offset,
    size,
  );
  return result;
}

export function renderBundleEncoderSetLabel(
  renderBundleEncoder: Deno.PointerValue,
  label: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuRenderBundleEncoderSetLabel(
    renderBundleEncoder,
    label,
  );
  return result;
}

export function renderBundleEncoderSetPipeline(
  renderBundleEncoder: Deno.PointerValue,
  pipeline: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuRenderBundleEncoderSetPipeline(
    renderBundleEncoder,
    pipeline,
  );
  return result;
}

export function renderBundleEncoderSetVertexBuffer(
  renderBundleEncoder: Deno.PointerValue,
  slot: number,
  buffer: Deno.PointerValue,
  offset: number | bigint,
  size: number | bigint,
): void {
  const result = lib.symbols.wgpuRenderBundleEncoderSetVertexBuffer(
    renderBundleEncoder,
    slot,
    buffer,
    offset,
    size,
  );
  return result;
}

export function renderBundleEncoderReference(
  renderBundleEncoder: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuRenderBundleEncoderReference(
    renderBundleEncoder,
  );
  return result;
}

export function renderBundleEncoderRelease(
  renderBundleEncoder: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuRenderBundleEncoderRelease(
    renderBundleEncoder,
  );
  return result;
}

export function renderPassEncoderBeginOcclusionQuery(
  renderPassEncoder: Deno.PointerValue,
  queryIndex: number,
): void {
  const result = lib.symbols.wgpuRenderPassEncoderBeginOcclusionQuery(
    renderPassEncoder,
    queryIndex,
  );
  return result;
}

export function renderPassEncoderBeginPipelineStatisticsQuery(
  renderPassEncoder: Deno.PointerValue,
  querySet: Deno.PointerValue,
  queryIndex: number,
): void {
  const result = lib.symbols.wgpuRenderPassEncoderBeginPipelineStatisticsQuery(
    renderPassEncoder,
    querySet,
    queryIndex,
  );
  return result;
}

export function renderPassEncoderDraw(
  renderPassEncoder: Deno.PointerValue,
  vertexCount: number,
  instanceCount: number,
  firstVertex: number,
  firstInstance: number,
): void {
  const result = lib.symbols.wgpuRenderPassEncoderDraw(
    renderPassEncoder,
    vertexCount,
    instanceCount,
    firstVertex,
    firstInstance,
  );
  return result;
}

export function renderPassEncoderDrawIndexed(
  renderPassEncoder: Deno.PointerValue,
  indexCount: number,
  instanceCount: number,
  firstIndex: number,
  baseVertex: number,
  firstInstance: number,
): void {
  const result = lib.symbols.wgpuRenderPassEncoderDrawIndexed(
    renderPassEncoder,
    indexCount,
    instanceCount,
    firstIndex,
    baseVertex,
    firstInstance,
  );
  return result;
}

export function renderPassEncoderDrawIndexedIndirect(
  renderPassEncoder: Deno.PointerValue,
  indirectBuffer: Deno.PointerValue,
  indirectOffset: number | bigint,
): void {
  const result = lib.symbols.wgpuRenderPassEncoderDrawIndexedIndirect(
    renderPassEncoder,
    indirectBuffer,
    indirectOffset,
  );
  return result;
}

export function renderPassEncoderDrawIndirect(
  renderPassEncoder: Deno.PointerValue,
  indirectBuffer: Deno.PointerValue,
  indirectOffset: number | bigint,
): void {
  const result = lib.symbols.wgpuRenderPassEncoderDrawIndirect(
    renderPassEncoder,
    indirectBuffer,
    indirectOffset,
  );
  return result;
}

export function renderPassEncoderEnd(
  renderPassEncoder: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuRenderPassEncoderEnd(
    renderPassEncoder,
  );
  return result;
}

export function renderPassEncoderEndOcclusionQuery(
  renderPassEncoder: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuRenderPassEncoderEndOcclusionQuery(
    renderPassEncoder,
  );
  return result;
}

export function renderPassEncoderEndPipelineStatisticsQuery(
  renderPassEncoder: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuRenderPassEncoderEndPipelineStatisticsQuery(
    renderPassEncoder,
  );
  return result;
}

export function renderPassEncoderExecuteBundles(
  renderPassEncoder: Deno.PointerValue,
  bundleCount: number | bigint,
  bundles: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuRenderPassEncoderExecuteBundles(
    renderPassEncoder,
    bundleCount,
    bundles,
  );
  return result;
}

export function renderPassEncoderInsertDebugMarker(
  renderPassEncoder: Deno.PointerValue,
  markerLabel: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuRenderPassEncoderInsertDebugMarker(
    renderPassEncoder,
    markerLabel,
  );
  return result;
}

export function renderPassEncoderPopDebugGroup(
  renderPassEncoder: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuRenderPassEncoderPopDebugGroup(
    renderPassEncoder,
  );
  return result;
}

export function renderPassEncoderPushDebugGroup(
  renderPassEncoder: Deno.PointerValue,
  groupLabel: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuRenderPassEncoderPushDebugGroup(
    renderPassEncoder,
    groupLabel,
  );
  return result;
}

export function renderPassEncoderSetBindGroup(
  renderPassEncoder: Deno.PointerValue,
  groupIndex: number,
  group: Deno.PointerValue,
  dynamicOffsetCount: number | bigint,
  dynamicOffsets: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuRenderPassEncoderSetBindGroup(
    renderPassEncoder,
    groupIndex,
    group,
    dynamicOffsetCount,
    dynamicOffsets,
  );
  return result;
}

export function renderPassEncoderSetBlendConstant(
  renderPassEncoder: Deno.PointerValue,
  color: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuRenderPassEncoderSetBlendConstant(
    renderPassEncoder,
    color,
  );
  return result;
}

export function renderPassEncoderSetIndexBuffer(
  renderPassEncoder: Deno.PointerValue,
  buffer: Deno.PointerValue,
  format: E.IndexFormat,
  offset: number | bigint,
  size: number | bigint,
): void {
  const result = lib.symbols.wgpuRenderPassEncoderSetIndexBuffer(
    renderPassEncoder,
    buffer,
    format,
    offset,
    size,
  );
  return result;
}

export function renderPassEncoderSetLabel(
  renderPassEncoder: Deno.PointerValue,
  label: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuRenderPassEncoderSetLabel(
    renderPassEncoder,
    label,
  );
  return result;
}

export function renderPassEncoderSetPipeline(
  renderPassEncoder: Deno.PointerValue,
  pipeline: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuRenderPassEncoderSetPipeline(
    renderPassEncoder,
    pipeline,
  );
  return result;
}

export function renderPassEncoderSetScissorRect(
  renderPassEncoder: Deno.PointerValue,
  x: number,
  y: number,
  width: number,
  height: number,
): void {
  const result = lib.symbols.wgpuRenderPassEncoderSetScissorRect(
    renderPassEncoder,
    x,
    y,
    width,
    height,
  );
  return result;
}

export function renderPassEncoderSetStencilReference(
  renderPassEncoder: Deno.PointerValue,
  reference: number,
): void {
  const result = lib.symbols.wgpuRenderPassEncoderSetStencilReference(
    renderPassEncoder,
    reference,
  );
  return result;
}

export function renderPassEncoderSetVertexBuffer(
  renderPassEncoder: Deno.PointerValue,
  slot: number,
  buffer: Deno.PointerValue,
  offset: number | bigint,
  size: number | bigint,
): void {
  const result = lib.symbols.wgpuRenderPassEncoderSetVertexBuffer(
    renderPassEncoder,
    slot,
    buffer,
    offset,
    size,
  );
  return result;
}

export function renderPassEncoderSetViewport(
  renderPassEncoder: Deno.PointerValue,
  x: bigint,
  y: bigint,
  width: bigint,
  height: bigint,
  minDepth: bigint,
  maxDepth: bigint,
): void {
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
}

export function renderPassEncoderReference(
  renderPassEncoder: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuRenderPassEncoderReference(
    renderPassEncoder,
  );
  return result;
}

export function renderPassEncoderRelease(
  renderPassEncoder: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuRenderPassEncoderRelease(
    renderPassEncoder,
  );
  return result;
}

export function renderPipelineGetBindGroupLayout(
  renderPipeline: Deno.PointerValue,
  groupIndex: number,
): Deno.PointerValue {
  const result = lib.symbols.wgpuRenderPipelineGetBindGroupLayout(
    renderPipeline,
    groupIndex,
  );
  return result;
}

export function renderPipelineSetLabel(
  renderPipeline: Deno.PointerValue,
  label: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuRenderPipelineSetLabel(
    renderPipeline,
    label,
  );
  return result;
}

export function renderPipelineReference(
  renderPipeline: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuRenderPipelineReference(
    renderPipeline,
  );
  return result;
}

export function renderPipelineRelease(
  renderPipeline: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuRenderPipelineRelease(
    renderPipeline,
  );
  return result;
}

export function samplerSetLabel(
  sampler: Deno.PointerValue,
  label: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuSamplerSetLabel(
    sampler,
    label,
  );
  return result;
}

export function samplerReference(
  sampler: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuSamplerReference(
    sampler,
  );
  return result;
}

export function samplerRelease(
  sampler: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuSamplerRelease(
    sampler,
  );
  return result;
}

export function shaderModuleGetCompilationInfo(
  shaderModule: Deno.PointerValue,
  callback: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuShaderModuleGetCompilationInfo(
    shaderModule,
    callback,
    null,
  );
  return result;
}

export function shaderModuleSetLabel(
  shaderModule: Deno.PointerValue,
  label: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuShaderModuleSetLabel(
    shaderModule,
    label,
  );
  return result;
}

export function shaderModuleReference(
  shaderModule: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuShaderModuleReference(
    shaderModule,
  );
  return result;
}

export function shaderModuleRelease(
  shaderModule: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuShaderModuleRelease(
    shaderModule,
  );
  return result;
}

export function surfaceGetPreferredFormat(
  surface: Deno.PointerValue,
  adapter: Deno.PointerValue,
): number {
  const result = lib.symbols.wgpuSurfaceGetPreferredFormat(
    surface,
    adapter,
  );
  return C.toEnum<E.TextureFormat>(result);
}

export function surfaceReference(
  surface: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuSurfaceReference(
    surface,
  );
  return result;
}

export function surfaceRelease(
  surface: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuSurfaceRelease(
    surface,
  );
  return result;
}

export function swapChainGetCurrentTextureView(
  swapChain: Deno.PointerValue,
): Deno.PointerValue {
  const result = lib.symbols.wgpuSwapChainGetCurrentTextureView(
    swapChain,
  );
  return result;
}

export function swapChainPresent(
  swapChain: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuSwapChainPresent(
    swapChain,
  );
  return result;
}

export function swapChainReference(
  swapChain: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuSwapChainReference(
    swapChain,
  );
  return result;
}

export function swapChainRelease(
  swapChain: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuSwapChainRelease(
    swapChain,
  );
  return result;
}

export function textureCreateView(
  texture: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue {
  const result = lib.symbols.wgpuTextureCreateView(
    texture,
    descriptor,
  );
  return result;
}

export function textureDestroy(
  texture: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuTextureDestroy(
    texture,
  );
  return result;
}

export function textureGetDepthOrArrayLayers(
  texture: Deno.PointerValue,
): number {
  const result = lib.symbols.wgpuTextureGetDepthOrArrayLayers(
    texture,
  );
  return result;
}

export function textureGetDimension(
  texture: Deno.PointerValue,
): number {
  const result = lib.symbols.wgpuTextureGetDimension(
    texture,
  );
  return C.toEnum<E.TextureDimension>(result);
}

export function textureGetFormat(
  texture: Deno.PointerValue,
): number {
  const result = lib.symbols.wgpuTextureGetFormat(
    texture,
  );
  return C.toEnum<E.TextureFormat>(result);
}

export function textureGetHeight(
  texture: Deno.PointerValue,
): number {
  const result = lib.symbols.wgpuTextureGetHeight(
    texture,
  );
  return result;
}

export function textureGetMipLevelCount(
  texture: Deno.PointerValue,
): number {
  const result = lib.symbols.wgpuTextureGetMipLevelCount(
    texture,
  );
  return result;
}

export function textureGetSampleCount(
  texture: Deno.PointerValue,
): number {
  const result = lib.symbols.wgpuTextureGetSampleCount(
    texture,
  );
  return result;
}

export function textureGetUsage(
  texture: Deno.PointerValue,
): number {
  const result = lib.symbols.wgpuTextureGetUsage(
    texture,
  );
  return result;
}

export function textureGetWidth(
  texture: Deno.PointerValue,
): number {
  const result = lib.symbols.wgpuTextureGetWidth(
    texture,
  );
  return result;
}

export function textureSetLabel(
  texture: Deno.PointerValue,
  label: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuTextureSetLabel(
    texture,
    label,
  );
  return result;
}

export function textureReference(
  texture: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuTextureReference(
    texture,
  );
  return result;
}

export function textureRelease(
  texture: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuTextureRelease(
    texture,
  );
  return result;
}

export function textureViewSetLabel(
  textureView: Deno.PointerValue,
  label: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuTextureViewSetLabel(
    textureView,
    label,
  );
  return result;
}

export function textureViewReference(
  textureView: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuTextureViewReference(
    textureView,
  );
  return result;
}

export function textureViewRelease(
  textureView: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuTextureViewRelease(
    textureView,
  );
  return result;
}

export function generateReport(
  instance: Deno.PointerValue,
  report: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuGenerateReport(
    instance,
    report,
  );
  return result;
}

export function instanceEnumerateAdapters(
  instance: Deno.PointerValue,
  options: Deno.PointerValue,
  adapters: Deno.PointerValue,
): number | bigint {
  const result = lib.symbols.wgpuInstanceEnumerateAdapters(
    instance,
    options,
    adapters,
  );
  return result;
}

export function queueSubmitForIndex(
  queue: Deno.PointerValue,
  commandCount: number | bigint,
  commands: Deno.PointerValue,
): number | bigint {
  const result = lib.symbols.wgpuQueueSubmitForIndex(
    queue,
    commandCount,
    commands,
  );
  return result;
}

export function devicePoll(
  device: Deno.PointerValue,
  wait: boolean,
  wrappedSubmissionIndex: Deno.PointerValue,
): boolean {
  const result = lib.symbols.wgpuDevicePoll(
    device,
    C.toNum(wait),
    wrappedSubmissionIndex,
  );
  return C.toBool(result);
}

export function setLogCallback(
  callback: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuSetLogCallback(
    callback,
    null,
  );
  return result;
}

export function setLogLevel(
  level: E.LogLevel,
): void {
  const result = lib.symbols.wgpuSetLogLevel(
    level,
  );
  return result;
}

export function getVersion(): number {
  const result = lib.symbols.wgpuGetVersion();
  return result;
}

export function surfaceGetCapabilities(
  surface: Deno.PointerValue,
  adapter: Deno.PointerValue,
  capabilities: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuSurfaceGetCapabilities(
    surface,
    adapter,
    capabilities,
  );
  return result;
}

export function renderPassEncoderSetPushConstants(
  encoder: Deno.PointerValue,
  stages: number,
  offset: number,
  sizeBytes: number,
  data: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuRenderPassEncoderSetPushConstants(
    encoder,
    stages,
    offset,
    sizeBytes,
    data,
  );
  return result;
}

export function renderPassEncoderMultiDrawIndirect(
  encoder: Deno.PointerValue,
  buffer: Deno.PointerValue,
  offset: number | bigint,
  count: number,
): void {
  const result = lib.symbols.wgpuRenderPassEncoderMultiDrawIndirect(
    encoder,
    buffer,
    offset,
    count,
  );
  return result;
}

export function renderPassEncoderMultiDrawIndexedIndirect(
  encoder: Deno.PointerValue,
  buffer: Deno.PointerValue,
  offset: number | bigint,
  count: number,
): void {
  const result = lib.symbols.wgpuRenderPassEncoderMultiDrawIndexedIndirect(
    encoder,
    buffer,
    offset,
    count,
  );
  return result;
}

export function renderPassEncoderMultiDrawIndirectCount(
  encoder: Deno.PointerValue,
  buffer: Deno.PointerValue,
  offset: number | bigint,
  count_buffer: Deno.PointerValue,
  count_buffer_offset: number | bigint,
  max_count: number,
): void {
  const result = lib.symbols.wgpuRenderPassEncoderMultiDrawIndirectCount(
    encoder,
    buffer,
    offset,
    count_buffer,
    count_buffer_offset,
    max_count,
  );
  return result;
}

export function renderPassEncoderMultiDrawIndexedIndirectCount(
  encoder: Deno.PointerValue,
  buffer: Deno.PointerValue,
  offset: number | bigint,
  count_buffer: Deno.PointerValue,
  count_buffer_offset: number | bigint,
  max_count: number,
): void {
  const result = lib.symbols.wgpuRenderPassEncoderMultiDrawIndexedIndirectCount(
    encoder,
    buffer,
    offset,
    count_buffer,
    count_buffer_offset,
    max_count,
  );
  return result;
}
