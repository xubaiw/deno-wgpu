import lib from "./symbol.ts";
import * as C from "../util/conv.ts";
import * as E from "./enum.ts";
import * as CB from "./callback.ts";
export const createInstance = (
  descriptor: Deno.PointerValue,
): Deno.PointerValue => lib.symbols.wgpuCreateInstance(descriptor);
export const getProcAddress = (
  device: Deno.PointerValue,
  procName: Deno.PointerValue,
): Deno.PointerValue => lib.symbols.wgpuGetProcAddress(device, procName);
export const generateReport = (
  instance: Deno.PointerValue,
  report: Deno.PointerValue,
): void => lib.symbols.wgpuGenerateReport(instance, report);
export const setLogCallback = (callback: Deno.PointerValue): void =>
  lib.symbols.wgpuSetLogCallback(callback, null);
export const setLogLevel = (level: E.LogLevel): void =>
  lib.symbols.wgpuSetLogLevel(level);
export const getVersion = (): number => lib.symbols.wgpuGetVersion();
export const Adapter = {
  enumerateFeatures: (
    adapter: Deno.PointerValue,
    features: Deno.PointerValue,
  ): number | bigint =>
    lib.symbols.wgpuAdapterEnumerateFeatures(adapter, features),
  getLimits: (adapter: Deno.PointerValue, limits: Deno.PointerValue): boolean =>
    C.toBool(lib.symbols.wgpuAdapterGetLimits(adapter, limits)),
  getProperties: (
    adapter: Deno.PointerValue,
    properties: Deno.PointerValue,
  ): void => lib.symbols.wgpuAdapterGetProperties(adapter, properties),
  hasFeature: (adapter: Deno.PointerValue, feature: E.FeatureName): boolean =>
    C.toBool(lib.symbols.wgpuAdapterHasFeature(adapter, feature)),
  requestDevice: (
    adapter: Deno.PointerValue,
    descriptor: Deno.PointerValue,
    callback: Deno.PointerValue,
  ): void =>
    lib.symbols.wgpuAdapterRequestDevice(adapter, descriptor, callback, null),
  reference: (adapter: Deno.PointerValue): void =>
    lib.symbols.wgpuAdapterReference(adapter),
  release: (adapter: Deno.PointerValue): void =>
    lib.symbols.wgpuAdapterRelease(adapter),
};
export const BindGroup = {
  setLabel: (bindGroup: Deno.PointerValue, label: Deno.PointerValue): void =>
    lib.symbols.wgpuBindGroupSetLabel(bindGroup, label),
  reference: (bindGroup: Deno.PointerValue): void =>
    lib.symbols.wgpuBindGroupReference(bindGroup),
  release: (bindGroup: Deno.PointerValue): void =>
    lib.symbols.wgpuBindGroupRelease(bindGroup),
  layoutSetLabel: (
    bindGroupLayout: Deno.PointerValue,
    label: Deno.PointerValue,
  ): void => lib.symbols.wgpuBindGroupLayoutSetLabel(bindGroupLayout, label),
  layoutReference: (bindGroupLayout: Deno.PointerValue): void =>
    lib.symbols.wgpuBindGroupLayoutReference(bindGroupLayout),
  layoutRelease: (bindGroupLayout: Deno.PointerValue): void =>
    lib.symbols.wgpuBindGroupLayoutRelease(bindGroupLayout),
};
export const Buffer = {
  destroy: (buffer: Deno.PointerValue): void =>
    lib.symbols.wgpuBufferDestroy(buffer),
  getConstMappedRange: (
    buffer: Deno.PointerValue,
    offset: number | bigint,
    size: number | bigint,
  ): Deno.PointerValue =>
    lib.symbols.wgpuBufferGetConstMappedRange(buffer, offset, size),
  getMapState: (buffer: Deno.PointerValue): number =>
    C.toEnum<E.BufferMapState>(lib.symbols.wgpuBufferGetMapState(buffer)),
  getMappedRange: (
    buffer: Deno.PointerValue,
    offset: number | bigint,
    size: number | bigint,
  ): Deno.PointerValue =>
    lib.symbols.wgpuBufferGetMappedRange(buffer, offset, size),
  getSize: (buffer: Deno.PointerValue): number | bigint =>
    lib.symbols.wgpuBufferGetSize(buffer),
  getUsage: (buffer: Deno.PointerValue): number =>
    lib.symbols.wgpuBufferGetUsage(buffer),
  mapAsync: (
    buffer: Deno.PointerValue,
    mode: number,
    offset: number | bigint,
    size: number | bigint,
    callback: Deno.PointerValue,
  ): void =>
    lib.symbols.wgpuBufferMapAsync(buffer, mode, offset, size, callback, null),
  setLabel: (buffer: Deno.PointerValue, label: Deno.PointerValue): void =>
    lib.symbols.wgpuBufferSetLabel(buffer, label),
  unmap: (buffer: Deno.PointerValue): void =>
    lib.symbols.wgpuBufferUnmap(buffer),
  reference: (buffer: Deno.PointerValue): void =>
    lib.symbols.wgpuBufferReference(buffer),
  release: (buffer: Deno.PointerValue): void =>
    lib.symbols.wgpuBufferRelease(buffer),
};
export const CommandBuffer = {
  setLabel: (
    commandBuffer: Deno.PointerValue,
    label: Deno.PointerValue,
  ): void => lib.symbols.wgpuCommandBufferSetLabel(commandBuffer, label),
  reference: (commandBuffer: Deno.PointerValue): void =>
    lib.symbols.wgpuCommandBufferReference(commandBuffer),
  release: (commandBuffer: Deno.PointerValue): void =>
    lib.symbols.wgpuCommandBufferRelease(commandBuffer),
};
export const CommandEncoder = {
  beginComputePass: (
    commandEncoder: Deno.PointerValue,
    descriptor: Deno.PointerValue,
  ): Deno.PointerValue =>
    lib.symbols.wgpuCommandEncoderBeginComputePass(commandEncoder, descriptor),
  beginRenderPass: (
    commandEncoder: Deno.PointerValue,
    descriptor: Deno.PointerValue,
  ): Deno.PointerValue =>
    lib.symbols.wgpuCommandEncoderBeginRenderPass(commandEncoder, descriptor),
  clearBuffer: (
    commandEncoder: Deno.PointerValue,
    buffer: Deno.PointerValue,
    offset: number | bigint,
    size: number | bigint,
  ): void =>
    lib.symbols.wgpuCommandEncoderClearBuffer(
      commandEncoder,
      buffer,
      offset,
      size,
    ),
  copyBufferToBuffer: (
    commandEncoder: Deno.PointerValue,
    source: Deno.PointerValue,
    sourceOffset: number | bigint,
    destination: Deno.PointerValue,
    destinationOffset: number | bigint,
    size: number | bigint,
  ): void =>
    lib.symbols.wgpuCommandEncoderCopyBufferToBuffer(
      commandEncoder,
      source,
      sourceOffset,
      destination,
      destinationOffset,
      size,
    ),
  copyBufferToTexture: (
    commandEncoder: Deno.PointerValue,
    source: Deno.PointerValue,
    destination: Deno.PointerValue,
    copySize: Deno.PointerValue,
  ): void =>
    lib.symbols.wgpuCommandEncoderCopyBufferToTexture(
      commandEncoder,
      source,
      destination,
      copySize,
    ),
  copyTextureToBuffer: (
    commandEncoder: Deno.PointerValue,
    source: Deno.PointerValue,
    destination: Deno.PointerValue,
    copySize: Deno.PointerValue,
  ): void =>
    lib.symbols.wgpuCommandEncoderCopyTextureToBuffer(
      commandEncoder,
      source,
      destination,
      copySize,
    ),
  copyTextureToTexture: (
    commandEncoder: Deno.PointerValue,
    source: Deno.PointerValue,
    destination: Deno.PointerValue,
    copySize: Deno.PointerValue,
  ): void =>
    lib.symbols.wgpuCommandEncoderCopyTextureToTexture(
      commandEncoder,
      source,
      destination,
      copySize,
    ),
  finish: (
    commandEncoder: Deno.PointerValue,
    descriptor: Deno.PointerValue,
  ): Deno.PointerValue =>
    lib.symbols.wgpuCommandEncoderFinish(commandEncoder, descriptor),
  insertDebugMarker: (
    commandEncoder: Deno.PointerValue,
    markerLabel: Deno.PointerValue,
  ): void =>
    lib.symbols.wgpuCommandEncoderInsertDebugMarker(
      commandEncoder,
      markerLabel,
    ),
  popDebugGroup: (commandEncoder: Deno.PointerValue): void =>
    lib.symbols.wgpuCommandEncoderPopDebugGroup(commandEncoder),
  pushDebugGroup: (
    commandEncoder: Deno.PointerValue,
    groupLabel: Deno.PointerValue,
  ): void =>
    lib.symbols.wgpuCommandEncoderPushDebugGroup(commandEncoder, groupLabel),
  resolveQuerySet: (
    commandEncoder: Deno.PointerValue,
    querySet: Deno.PointerValue,
    firstQuery: number,
    queryCount: number,
    destination: Deno.PointerValue,
    destinationOffset: number | bigint,
  ): void =>
    lib.symbols.wgpuCommandEncoderResolveQuerySet(
      commandEncoder,
      querySet,
      firstQuery,
      queryCount,
      destination,
      destinationOffset,
    ),
  setLabel: (
    commandEncoder: Deno.PointerValue,
    label: Deno.PointerValue,
  ): void => lib.symbols.wgpuCommandEncoderSetLabel(commandEncoder, label),
  writeTimestamp: (
    commandEncoder: Deno.PointerValue,
    querySet: Deno.PointerValue,
    queryIndex: number,
  ): void =>
    lib.symbols.wgpuCommandEncoderWriteTimestamp(
      commandEncoder,
      querySet,
      queryIndex,
    ),
  reference: (commandEncoder: Deno.PointerValue): void =>
    lib.symbols.wgpuCommandEncoderReference(commandEncoder),
  release: (commandEncoder: Deno.PointerValue): void =>
    lib.symbols.wgpuCommandEncoderRelease(commandEncoder),
};
export const ComputePassEncoder = {
  beginPipelineStatisticsQuery: (
    computePassEncoder: Deno.PointerValue,
    querySet: Deno.PointerValue,
    queryIndex: number,
  ): void =>
    lib.symbols.wgpuComputePassEncoderBeginPipelineStatisticsQuery(
      computePassEncoder,
      querySet,
      queryIndex,
    ),
  dispatchWorkgroups: (
    computePassEncoder: Deno.PointerValue,
    workgroupCountX: number,
    workgroupCountY: number,
    workgroupCountZ: number,
  ): void =>
    lib.symbols.wgpuComputePassEncoderDispatchWorkgroups(
      computePassEncoder,
      workgroupCountX,
      workgroupCountY,
      workgroupCountZ,
    ),
  dispatchWorkgroupsIndirect: (
    computePassEncoder: Deno.PointerValue,
    indirectBuffer: Deno.PointerValue,
    indirectOffset: number | bigint,
  ): void =>
    lib.symbols.wgpuComputePassEncoderDispatchWorkgroupsIndirect(
      computePassEncoder,
      indirectBuffer,
      indirectOffset,
    ),
  end: (computePassEncoder: Deno.PointerValue): void =>
    lib.symbols.wgpuComputePassEncoderEnd(computePassEncoder),
  endPipelineStatisticsQuery: (computePassEncoder: Deno.PointerValue): void =>
    lib.symbols.wgpuComputePassEncoderEndPipelineStatisticsQuery(
      computePassEncoder,
    ),
  insertDebugMarker: (
    computePassEncoder: Deno.PointerValue,
    markerLabel: Deno.PointerValue,
  ): void =>
    lib.symbols.wgpuComputePassEncoderInsertDebugMarker(
      computePassEncoder,
      markerLabel,
    ),
  popDebugGroup: (computePassEncoder: Deno.PointerValue): void =>
    lib.symbols.wgpuComputePassEncoderPopDebugGroup(computePassEncoder),
  pushDebugGroup: (
    computePassEncoder: Deno.PointerValue,
    groupLabel: Deno.PointerValue,
  ): void =>
    lib.symbols.wgpuComputePassEncoderPushDebugGroup(
      computePassEncoder,
      groupLabel,
    ),
  setBindGroup: (
    computePassEncoder: Deno.PointerValue,
    groupIndex: number,
    group: Deno.PointerValue,
    dynamicOffsetCount: number | bigint,
    dynamicOffsets: Deno.PointerValue,
  ): void =>
    lib.symbols.wgpuComputePassEncoderSetBindGroup(
      computePassEncoder,
      groupIndex,
      group,
      dynamicOffsetCount,
      dynamicOffsets,
    ),
  setLabel: (
    computePassEncoder: Deno.PointerValue,
    label: Deno.PointerValue,
  ): void =>
    lib.symbols.wgpuComputePassEncoderSetLabel(computePassEncoder, label),
  setPipeline: (
    computePassEncoder: Deno.PointerValue,
    pipeline: Deno.PointerValue,
  ): void =>
    lib.symbols.wgpuComputePassEncoderSetPipeline(computePassEncoder, pipeline),
  reference: (computePassEncoder: Deno.PointerValue): void =>
    lib.symbols.wgpuComputePassEncoderReference(computePassEncoder),
  release: (computePassEncoder: Deno.PointerValue): void =>
    lib.symbols.wgpuComputePassEncoderRelease(computePassEncoder),
};
export const ComputePipeline = {
  getBindGroupLayout: (
    computePipeline: Deno.PointerValue,
    groupIndex: number,
  ): Deno.PointerValue =>
    lib.symbols.wgpuComputePipelineGetBindGroupLayout(
      computePipeline,
      groupIndex,
    ),
  setLabel: (
    computePipeline: Deno.PointerValue,
    label: Deno.PointerValue,
  ): void => lib.symbols.wgpuComputePipelineSetLabel(computePipeline, label),
  reference: (computePipeline: Deno.PointerValue): void =>
    lib.symbols.wgpuComputePipelineReference(computePipeline),
  release: (computePipeline: Deno.PointerValue): void =>
    lib.symbols.wgpuComputePipelineRelease(computePipeline),
};
export const Device = {
  createBindGroup: (
    device: Deno.PointerValue,
    descriptor: Deno.PointerValue,
  ): Deno.PointerValue =>
    lib.symbols.wgpuDeviceCreateBindGroup(device, descriptor),
  createBindGroupLayout: (
    device: Deno.PointerValue,
    descriptor: Deno.PointerValue,
  ): Deno.PointerValue =>
    lib.symbols.wgpuDeviceCreateBindGroupLayout(device, descriptor),
  createBuffer: (
    device: Deno.PointerValue,
    descriptor: Deno.PointerValue,
  ): Deno.PointerValue =>
    lib.symbols.wgpuDeviceCreateBuffer(device, descriptor),
  createCommandEncoder: (
    device: Deno.PointerValue,
    descriptor: Deno.PointerValue,
  ): Deno.PointerValue =>
    lib.symbols.wgpuDeviceCreateCommandEncoder(device, descriptor),
  createComputePipeline: (
    device: Deno.PointerValue,
    descriptor: Deno.PointerValue,
  ): Deno.PointerValue =>
    lib.symbols.wgpuDeviceCreateComputePipeline(device, descriptor),
  createComputePipelineAsync: (
    device: Deno.PointerValue,
    descriptor: Deno.PointerValue,
    callback: Deno.PointerValue,
  ): void =>
    lib.symbols.wgpuDeviceCreateComputePipelineAsync(
      device,
      descriptor,
      callback,
      null,
    ),
  createPipelineLayout: (
    device: Deno.PointerValue,
    descriptor: Deno.PointerValue,
  ): Deno.PointerValue =>
    lib.symbols.wgpuDeviceCreatePipelineLayout(device, descriptor),
  createQuerySet: (
    device: Deno.PointerValue,
    descriptor: Deno.PointerValue,
  ): Deno.PointerValue =>
    lib.symbols.wgpuDeviceCreateQuerySet(device, descriptor),
  createRenderBundleEncoder: (
    device: Deno.PointerValue,
    descriptor: Deno.PointerValue,
  ): Deno.PointerValue =>
    lib.symbols.wgpuDeviceCreateRenderBundleEncoder(device, descriptor),
  createRenderPipeline: (
    device: Deno.PointerValue,
    descriptor: Deno.PointerValue,
  ): Deno.PointerValue =>
    lib.symbols.wgpuDeviceCreateRenderPipeline(device, descriptor),
  createRenderPipelineAsync: (
    device: Deno.PointerValue,
    descriptor: Deno.PointerValue,
    callback: Deno.PointerValue,
  ): void =>
    lib.symbols.wgpuDeviceCreateRenderPipelineAsync(
      device,
      descriptor,
      callback,
      null,
    ),
  createSampler: (
    device: Deno.PointerValue,
    descriptor: Deno.PointerValue,
  ): Deno.PointerValue =>
    lib.symbols.wgpuDeviceCreateSampler(device, descriptor),
  createShaderModule: (
    device: Deno.PointerValue,
    descriptor: Deno.PointerValue,
  ): Deno.PointerValue =>
    lib.symbols.wgpuDeviceCreateShaderModule(device, descriptor),
  createSwapChain: (
    device: Deno.PointerValue,
    surface: Deno.PointerValue,
    descriptor: Deno.PointerValue,
  ): Deno.PointerValue =>
    lib.symbols.wgpuDeviceCreateSwapChain(device, surface, descriptor),
  createTexture: (
    device: Deno.PointerValue,
    descriptor: Deno.PointerValue,
  ): Deno.PointerValue =>
    lib.symbols.wgpuDeviceCreateTexture(device, descriptor),
  destroy: (device: Deno.PointerValue): void =>
    lib.symbols.wgpuDeviceDestroy(device),
  enumerateFeatures: (
    device: Deno.PointerValue,
    features: Deno.PointerValue,
  ): number | bigint =>
    lib.symbols.wgpuDeviceEnumerateFeatures(device, features),
  getLimits: (device: Deno.PointerValue, limits: Deno.PointerValue): boolean =>
    C.toBool(lib.symbols.wgpuDeviceGetLimits(device, limits)),
  getQueue: (device: Deno.PointerValue): Deno.PointerValue =>
    lib.symbols.wgpuDeviceGetQueue(device),
  hasFeature: (device: Deno.PointerValue, feature: E.FeatureName): boolean =>
    C.toBool(lib.symbols.wgpuDeviceHasFeature(device, feature)),
  popErrorScope: (
    device: Deno.PointerValue,
    callback: Deno.PointerValue,
  ): void => lib.symbols.wgpuDevicePopErrorScope(device, callback, null),
  pushErrorScope: (device: Deno.PointerValue, filter: E.ErrorFilter): void =>
    lib.symbols.wgpuDevicePushErrorScope(device, filter),
  setLabel: (device: Deno.PointerValue, label: Deno.PointerValue): void =>
    lib.symbols.wgpuDeviceSetLabel(device, label),
  setUncapturedErrorCallback: (
    device: Deno.PointerValue,
    callback: Deno.PointerValue,
  ): void =>
    lib.symbols.wgpuDeviceSetUncapturedErrorCallback(device, callback, null),
  reference: (device: Deno.PointerValue): void =>
    lib.symbols.wgpuDeviceReference(device),
  release: (device: Deno.PointerValue): void =>
    lib.symbols.wgpuDeviceRelease(device),
  poll: (
    device: Deno.PointerValue,
    wait: boolean,
    wrappedSubmissionIndex: Deno.PointerValue,
  ): boolean =>
    C.toBool(
      lib.symbols.wgpuDevicePoll(device, C.toNum(wait), wrappedSubmissionIndex),
    ),
};
export const Instance = {
  createSurface: (
    instance: Deno.PointerValue,
    descriptor: Deno.PointerValue,
  ): Deno.PointerValue =>
    lib.symbols.wgpuInstanceCreateSurface(instance, descriptor),
  processEvents: (instance: Deno.PointerValue): void =>
    lib.symbols.wgpuInstanceProcessEvents(instance),
  requestAdapter: (
    instance: Deno.PointerValue,
    options: Deno.PointerValue,
    callback: Deno.PointerValue,
  ): void =>
    lib.symbols.wgpuInstanceRequestAdapter(instance, options, callback, null),
  reference: (instance: Deno.PointerValue): void =>
    lib.symbols.wgpuInstanceReference(instance),
  release: (instance: Deno.PointerValue): void =>
    lib.symbols.wgpuInstanceRelease(instance),
  enumerateAdapters: (
    instance: Deno.PointerValue,
    options: Deno.PointerValue,
    adapters: Deno.PointerValue,
  ): number | bigint =>
    lib.symbols.wgpuInstanceEnumerateAdapters(instance, options, adapters),
};
export const PipelineLayout = {
  setLabel: (
    pipelineLayout: Deno.PointerValue,
    label: Deno.PointerValue,
  ): void => lib.symbols.wgpuPipelineLayoutSetLabel(pipelineLayout, label),
  reference: (pipelineLayout: Deno.PointerValue): void =>
    lib.symbols.wgpuPipelineLayoutReference(pipelineLayout),
  release: (pipelineLayout: Deno.PointerValue): void =>
    lib.symbols.wgpuPipelineLayoutRelease(pipelineLayout),
};
export const QuerySet = {
  destroy: (querySet: Deno.PointerValue): void =>
    lib.symbols.wgpuQuerySetDestroy(querySet),
  getCount: (querySet: Deno.PointerValue): number =>
    lib.symbols.wgpuQuerySetGetCount(querySet),
  getType: (querySet: Deno.PointerValue): number =>
    C.toEnum<E.QueryType>(lib.symbols.wgpuQuerySetGetType(querySet)),
  setLabel: (querySet: Deno.PointerValue, label: Deno.PointerValue): void =>
    lib.symbols.wgpuQuerySetSetLabel(querySet, label),
  reference: (querySet: Deno.PointerValue): void =>
    lib.symbols.wgpuQuerySetReference(querySet),
  release: (querySet: Deno.PointerValue): void =>
    lib.symbols.wgpuQuerySetRelease(querySet),
};
export const Queue = {
  onSubmittedWorkDone: (
    queue: Deno.PointerValue,
    callback: Deno.PointerValue,
  ): void => lib.symbols.wgpuQueueOnSubmittedWorkDone(queue, callback, null),
  setLabel: (queue: Deno.PointerValue, label: Deno.PointerValue): void =>
    lib.symbols.wgpuQueueSetLabel(queue, label),
  submit: (
    queue: Deno.PointerValue,
    commandCount: number | bigint,
    commands: Deno.PointerValue,
  ): void => lib.symbols.wgpuQueueSubmit(queue, commandCount, commands),
  writeBuffer: (
    queue: Deno.PointerValue,
    buffer: Deno.PointerValue,
    bufferOffset: number | bigint,
    data: Deno.PointerValue,
    size: number | bigint,
  ): void =>
    lib.symbols.wgpuQueueWriteBuffer(queue, buffer, bufferOffset, data, size),
  writeTexture: (
    queue: Deno.PointerValue,
    destination: Deno.PointerValue,
    data: Deno.PointerValue,
    dataSize: number | bigint,
    dataLayout: Deno.PointerValue,
    writeSize: Deno.PointerValue,
  ): void =>
    lib.symbols.wgpuQueueWriteTexture(
      queue,
      destination,
      data,
      dataSize,
      dataLayout,
      writeSize,
    ),
  reference: (queue: Deno.PointerValue): void =>
    lib.symbols.wgpuQueueReference(queue),
  release: (queue: Deno.PointerValue): void =>
    lib.symbols.wgpuQueueRelease(queue),
  submitForIndex: (
    queue: Deno.PointerValue,
    commandCount: number | bigint,
    commands: Deno.PointerValue,
  ): number | bigint =>
    lib.symbols.wgpuQueueSubmitForIndex(queue, commandCount, commands),
};
export const RenderBundle = {
  setLabel: (renderBundle: Deno.PointerValue, label: Deno.PointerValue): void =>
    lib.symbols.wgpuRenderBundleSetLabel(renderBundle, label),
  reference: (renderBundle: Deno.PointerValue): void =>
    lib.symbols.wgpuRenderBundleReference(renderBundle),
  release: (renderBundle: Deno.PointerValue): void =>
    lib.symbols.wgpuRenderBundleRelease(renderBundle),
  encoderDraw: (
    renderBundleEncoder: Deno.PointerValue,
    vertexCount: number,
    instanceCount: number,
    firstVertex: number,
    firstInstance: number,
  ): void =>
    lib.symbols.wgpuRenderBundleEncoderDraw(
      renderBundleEncoder,
      vertexCount,
      instanceCount,
      firstVertex,
      firstInstance,
    ),
  encoderDrawIndexed: (
    renderBundleEncoder: Deno.PointerValue,
    indexCount: number,
    instanceCount: number,
    firstIndex: number,
    baseVertex: number,
    firstInstance: number,
  ): void =>
    lib.symbols.wgpuRenderBundleEncoderDrawIndexed(
      renderBundleEncoder,
      indexCount,
      instanceCount,
      firstIndex,
      baseVertex,
      firstInstance,
    ),
  encoderDrawIndexedIndirect: (
    renderBundleEncoder: Deno.PointerValue,
    indirectBuffer: Deno.PointerValue,
    indirectOffset: number | bigint,
  ): void =>
    lib.symbols.wgpuRenderBundleEncoderDrawIndexedIndirect(
      renderBundleEncoder,
      indirectBuffer,
      indirectOffset,
    ),
  encoderDrawIndirect: (
    renderBundleEncoder: Deno.PointerValue,
    indirectBuffer: Deno.PointerValue,
    indirectOffset: number | bigint,
  ): void =>
    lib.symbols.wgpuRenderBundleEncoderDrawIndirect(
      renderBundleEncoder,
      indirectBuffer,
      indirectOffset,
    ),
  encoderFinish: (
    renderBundleEncoder: Deno.PointerValue,
    descriptor: Deno.PointerValue,
  ): Deno.PointerValue =>
    lib.symbols.wgpuRenderBundleEncoderFinish(renderBundleEncoder, descriptor),
  encoderInsertDebugMarker: (
    renderBundleEncoder: Deno.PointerValue,
    markerLabel: Deno.PointerValue,
  ): void =>
    lib.symbols.wgpuRenderBundleEncoderInsertDebugMarker(
      renderBundleEncoder,
      markerLabel,
    ),
  encoderPopDebugGroup: (renderBundleEncoder: Deno.PointerValue): void =>
    lib.symbols.wgpuRenderBundleEncoderPopDebugGroup(renderBundleEncoder),
  encoderPushDebugGroup: (
    renderBundleEncoder: Deno.PointerValue,
    groupLabel: Deno.PointerValue,
  ): void =>
    lib.symbols.wgpuRenderBundleEncoderPushDebugGroup(
      renderBundleEncoder,
      groupLabel,
    ),
  encoderSetBindGroup: (
    renderBundleEncoder: Deno.PointerValue,
    groupIndex: number,
    group: Deno.PointerValue,
    dynamicOffsetCount: number | bigint,
    dynamicOffsets: Deno.PointerValue,
  ): void =>
    lib.symbols.wgpuRenderBundleEncoderSetBindGroup(
      renderBundleEncoder,
      groupIndex,
      group,
      dynamicOffsetCount,
      dynamicOffsets,
    ),
  encoderSetIndexBuffer: (
    renderBundleEncoder: Deno.PointerValue,
    buffer: Deno.PointerValue,
    format: E.IndexFormat,
    offset: number | bigint,
    size: number | bigint,
  ): void =>
    lib.symbols.wgpuRenderBundleEncoderSetIndexBuffer(
      renderBundleEncoder,
      buffer,
      format,
      offset,
      size,
    ),
  encoderSetLabel: (
    renderBundleEncoder: Deno.PointerValue,
    label: Deno.PointerValue,
  ): void =>
    lib.symbols.wgpuRenderBundleEncoderSetLabel(renderBundleEncoder, label),
  encoderSetPipeline: (
    renderBundleEncoder: Deno.PointerValue,
    pipeline: Deno.PointerValue,
  ): void =>
    lib.symbols.wgpuRenderBundleEncoderSetPipeline(
      renderBundleEncoder,
      pipeline,
    ),
  encoderSetVertexBuffer: (
    renderBundleEncoder: Deno.PointerValue,
    slot: number,
    buffer: Deno.PointerValue,
    offset: number | bigint,
    size: number | bigint,
  ): void =>
    lib.symbols.wgpuRenderBundleEncoderSetVertexBuffer(
      renderBundleEncoder,
      slot,
      buffer,
      offset,
      size,
    ),
  encoderReference: (renderBundleEncoder: Deno.PointerValue): void =>
    lib.symbols.wgpuRenderBundleEncoderReference(renderBundleEncoder),
  encoderRelease: (renderBundleEncoder: Deno.PointerValue): void =>
    lib.symbols.wgpuRenderBundleEncoderRelease(renderBundleEncoder),
};
export const RenderPassEncoder = {
  beginOcclusionQuery: (
    renderPassEncoder: Deno.PointerValue,
    queryIndex: number,
  ): void =>
    lib.symbols.wgpuRenderPassEncoderBeginOcclusionQuery(
      renderPassEncoder,
      queryIndex,
    ),
  beginPipelineStatisticsQuery: (
    renderPassEncoder: Deno.PointerValue,
    querySet: Deno.PointerValue,
    queryIndex: number,
  ): void =>
    lib.symbols.wgpuRenderPassEncoderBeginPipelineStatisticsQuery(
      renderPassEncoder,
      querySet,
      queryIndex,
    ),
  draw: (
    renderPassEncoder: Deno.PointerValue,
    vertexCount: number,
    instanceCount: number,
    firstVertex: number,
    firstInstance: number,
  ): void =>
    lib.symbols.wgpuRenderPassEncoderDraw(
      renderPassEncoder,
      vertexCount,
      instanceCount,
      firstVertex,
      firstInstance,
    ),
  drawIndexed: (
    renderPassEncoder: Deno.PointerValue,
    indexCount: number,
    instanceCount: number,
    firstIndex: number,
    baseVertex: number,
    firstInstance: number,
  ): void =>
    lib.symbols.wgpuRenderPassEncoderDrawIndexed(
      renderPassEncoder,
      indexCount,
      instanceCount,
      firstIndex,
      baseVertex,
      firstInstance,
    ),
  drawIndexedIndirect: (
    renderPassEncoder: Deno.PointerValue,
    indirectBuffer: Deno.PointerValue,
    indirectOffset: number | bigint,
  ): void =>
    lib.symbols.wgpuRenderPassEncoderDrawIndexedIndirect(
      renderPassEncoder,
      indirectBuffer,
      indirectOffset,
    ),
  drawIndirect: (
    renderPassEncoder: Deno.PointerValue,
    indirectBuffer: Deno.PointerValue,
    indirectOffset: number | bigint,
  ): void =>
    lib.symbols.wgpuRenderPassEncoderDrawIndirect(
      renderPassEncoder,
      indirectBuffer,
      indirectOffset,
    ),
  end: (renderPassEncoder: Deno.PointerValue): void =>
    lib.symbols.wgpuRenderPassEncoderEnd(renderPassEncoder),
  endOcclusionQuery: (renderPassEncoder: Deno.PointerValue): void =>
    lib.symbols.wgpuRenderPassEncoderEndOcclusionQuery(renderPassEncoder),
  endPipelineStatisticsQuery: (renderPassEncoder: Deno.PointerValue): void =>
    lib.symbols.wgpuRenderPassEncoderEndPipelineStatisticsQuery(
      renderPassEncoder,
    ),
  executeBundles: (
    renderPassEncoder: Deno.PointerValue,
    bundleCount: number | bigint,
    bundles: Deno.PointerValue,
  ): void =>
    lib.symbols.wgpuRenderPassEncoderExecuteBundles(
      renderPassEncoder,
      bundleCount,
      bundles,
    ),
  insertDebugMarker: (
    renderPassEncoder: Deno.PointerValue,
    markerLabel: Deno.PointerValue,
  ): void =>
    lib.symbols.wgpuRenderPassEncoderInsertDebugMarker(
      renderPassEncoder,
      markerLabel,
    ),
  popDebugGroup: (renderPassEncoder: Deno.PointerValue): void =>
    lib.symbols.wgpuRenderPassEncoderPopDebugGroup(renderPassEncoder),
  pushDebugGroup: (
    renderPassEncoder: Deno.PointerValue,
    groupLabel: Deno.PointerValue,
  ): void =>
    lib.symbols.wgpuRenderPassEncoderPushDebugGroup(
      renderPassEncoder,
      groupLabel,
    ),
  setBindGroup: (
    renderPassEncoder: Deno.PointerValue,
    groupIndex: number,
    group: Deno.PointerValue,
    dynamicOffsetCount: number | bigint,
    dynamicOffsets: Deno.PointerValue,
  ): void =>
    lib.symbols.wgpuRenderPassEncoderSetBindGroup(
      renderPassEncoder,
      groupIndex,
      group,
      dynamicOffsetCount,
      dynamicOffsets,
    ),
  setBlendConstant: (
    renderPassEncoder: Deno.PointerValue,
    color: Deno.PointerValue,
  ): void =>
    lib.symbols.wgpuRenderPassEncoderSetBlendConstant(renderPassEncoder, color),
  setIndexBuffer: (
    renderPassEncoder: Deno.PointerValue,
    buffer: Deno.PointerValue,
    format: E.IndexFormat,
    offset: number | bigint,
    size: number | bigint,
  ): void =>
    lib.symbols.wgpuRenderPassEncoderSetIndexBuffer(
      renderPassEncoder,
      buffer,
      format,
      offset,
      size,
    ),
  setLabel: (
    renderPassEncoder: Deno.PointerValue,
    label: Deno.PointerValue,
  ): void =>
    lib.symbols.wgpuRenderPassEncoderSetLabel(renderPassEncoder, label),
  setPipeline: (
    renderPassEncoder: Deno.PointerValue,
    pipeline: Deno.PointerValue,
  ): void =>
    lib.symbols.wgpuRenderPassEncoderSetPipeline(renderPassEncoder, pipeline),
  setScissorRect: (
    renderPassEncoder: Deno.PointerValue,
    x: number,
    y: number,
    width: number,
    height: number,
  ): void =>
    lib.symbols.wgpuRenderPassEncoderSetScissorRect(
      renderPassEncoder,
      x,
      y,
      width,
      height,
    ),
  setStencilReference: (
    renderPassEncoder: Deno.PointerValue,
    reference: number,
  ): void =>
    lib.symbols.wgpuRenderPassEncoderSetStencilReference(
      renderPassEncoder,
      reference,
    ),
  setVertexBuffer: (
    renderPassEncoder: Deno.PointerValue,
    slot: number,
    buffer: Deno.PointerValue,
    offset: number | bigint,
    size: number | bigint,
  ): void =>
    lib.symbols.wgpuRenderPassEncoderSetVertexBuffer(
      renderPassEncoder,
      slot,
      buffer,
      offset,
      size,
    ),
  setViewport: (
    renderPassEncoder: Deno.PointerValue,
    x: bigint,
    y: bigint,
    width: bigint,
    height: bigint,
    minDepth: bigint,
    maxDepth: bigint,
  ): void =>
    lib.symbols.wgpuRenderPassEncoderSetViewport(
      renderPassEncoder,
      x,
      y,
      width,
      height,
      minDepth,
      maxDepth,
    ),
  reference: (renderPassEncoder: Deno.PointerValue): void =>
    lib.symbols.wgpuRenderPassEncoderReference(renderPassEncoder),
  release: (renderPassEncoder: Deno.PointerValue): void =>
    lib.symbols.wgpuRenderPassEncoderRelease(renderPassEncoder),
  setPushConstants: (
    encoder: Deno.PointerValue,
    stages: number,
    offset: number,
    sizeBytes: number,
    data: Deno.PointerValue,
  ): void =>
    lib.symbols.wgpuRenderPassEncoderSetPushConstants(
      encoder,
      stages,
      offset,
      sizeBytes,
      data,
    ),
  multiDrawIndirect: (
    encoder: Deno.PointerValue,
    buffer: Deno.PointerValue,
    offset: number | bigint,
    count: number,
  ): void =>
    lib.symbols.wgpuRenderPassEncoderMultiDrawIndirect(
      encoder,
      buffer,
      offset,
      count,
    ),
  multiDrawIndexedIndirect: (
    encoder: Deno.PointerValue,
    buffer: Deno.PointerValue,
    offset: number | bigint,
    count: number,
  ): void =>
    lib.symbols.wgpuRenderPassEncoderMultiDrawIndexedIndirect(
      encoder,
      buffer,
      offset,
      count,
    ),
  multiDrawIndirectCount: (
    encoder: Deno.PointerValue,
    buffer: Deno.PointerValue,
    offset: number | bigint,
    count_buffer: Deno.PointerValue,
    count_buffer_offset: number | bigint,
    max_count: number,
  ): void =>
    lib.symbols.wgpuRenderPassEncoderMultiDrawIndirectCount(
      encoder,
      buffer,
      offset,
      count_buffer,
      count_buffer_offset,
      max_count,
    ),
  multiDrawIndexedIndirectCount: (
    encoder: Deno.PointerValue,
    buffer: Deno.PointerValue,
    offset: number | bigint,
    count_buffer: Deno.PointerValue,
    count_buffer_offset: number | bigint,
    max_count: number,
  ): void =>
    lib.symbols.wgpuRenderPassEncoderMultiDrawIndexedIndirectCount(
      encoder,
      buffer,
      offset,
      count_buffer,
      count_buffer_offset,
      max_count,
    ),
};
export const RenderPipeline = {
  getBindGroupLayout: (
    renderPipeline: Deno.PointerValue,
    groupIndex: number,
  ): Deno.PointerValue =>
    lib.symbols.wgpuRenderPipelineGetBindGroupLayout(
      renderPipeline,
      groupIndex,
    ),
  setLabel: (
    renderPipeline: Deno.PointerValue,
    label: Deno.PointerValue,
  ): void => lib.symbols.wgpuRenderPipelineSetLabel(renderPipeline, label),
  reference: (renderPipeline: Deno.PointerValue): void =>
    lib.symbols.wgpuRenderPipelineReference(renderPipeline),
  release: (renderPipeline: Deno.PointerValue): void =>
    lib.symbols.wgpuRenderPipelineRelease(renderPipeline),
};
export const Sampler = {
  setLabel: (sampler: Deno.PointerValue, label: Deno.PointerValue): void =>
    lib.symbols.wgpuSamplerSetLabel(sampler, label),
  reference: (sampler: Deno.PointerValue): void =>
    lib.symbols.wgpuSamplerReference(sampler),
  release: (sampler: Deno.PointerValue): void =>
    lib.symbols.wgpuSamplerRelease(sampler),
};
export const ShaderModule = {
  getCompilationInfo: (
    shaderModule: Deno.PointerValue,
    callback: Deno.PointerValue,
  ): void =>
    lib.symbols.wgpuShaderModuleGetCompilationInfo(
      shaderModule,
      callback,
      null,
    ),
  setLabel: (shaderModule: Deno.PointerValue, label: Deno.PointerValue): void =>
    lib.symbols.wgpuShaderModuleSetLabel(shaderModule, label),
  reference: (shaderModule: Deno.PointerValue): void =>
    lib.symbols.wgpuShaderModuleReference(shaderModule),
  release: (shaderModule: Deno.PointerValue): void =>
    lib.symbols.wgpuShaderModuleRelease(shaderModule),
};
export const Surface = {
  getPreferredFormat: (
    surface: Deno.PointerValue,
    adapter: Deno.PointerValue,
  ): number =>
    C.toEnum<E.TextureFormat>(
      lib.symbols.wgpuSurfaceGetPreferredFormat(surface, adapter),
    ),
  reference: (surface: Deno.PointerValue): void =>
    lib.symbols.wgpuSurfaceReference(surface),
  release: (surface: Deno.PointerValue): void =>
    lib.symbols.wgpuSurfaceRelease(surface),
  getCapabilities: (
    surface: Deno.PointerValue,
    adapter: Deno.PointerValue,
    capabilities: Deno.PointerValue,
  ): void =>
    lib.symbols.wgpuSurfaceGetCapabilities(surface, adapter, capabilities),
};
export const SwapChain = {
  getCurrentTextureView: (swapChain: Deno.PointerValue): Deno.PointerValue =>
    lib.symbols.wgpuSwapChainGetCurrentTextureView(swapChain),
  present: (swapChain: Deno.PointerValue): void =>
    lib.symbols.wgpuSwapChainPresent(swapChain),
  reference: (swapChain: Deno.PointerValue): void =>
    lib.symbols.wgpuSwapChainReference(swapChain),
  release: (swapChain: Deno.PointerValue): void =>
    lib.symbols.wgpuSwapChainRelease(swapChain),
};
export const Texture = {
  createView: (
    texture: Deno.PointerValue,
    descriptor: Deno.PointerValue,
  ): Deno.PointerValue =>
    lib.symbols.wgpuTextureCreateView(texture, descriptor),
  destroy: (texture: Deno.PointerValue): void =>
    lib.symbols.wgpuTextureDestroy(texture),
  getDepthOrArrayLayers: (texture: Deno.PointerValue): number =>
    lib.symbols.wgpuTextureGetDepthOrArrayLayers(texture),
  getDimension: (texture: Deno.PointerValue): number =>
    C.toEnum<E.TextureDimension>(lib.symbols.wgpuTextureGetDimension(texture)),
  getFormat: (texture: Deno.PointerValue): number =>
    C.toEnum<E.TextureFormat>(lib.symbols.wgpuTextureGetFormat(texture)),
  getHeight: (texture: Deno.PointerValue): number =>
    lib.symbols.wgpuTextureGetHeight(texture),
  getMipLevelCount: (texture: Deno.PointerValue): number =>
    lib.symbols.wgpuTextureGetMipLevelCount(texture),
  getSampleCount: (texture: Deno.PointerValue): number =>
    lib.symbols.wgpuTextureGetSampleCount(texture),
  getUsage: (texture: Deno.PointerValue): number =>
    lib.symbols.wgpuTextureGetUsage(texture),
  getWidth: (texture: Deno.PointerValue): number =>
    lib.symbols.wgpuTextureGetWidth(texture),
  setLabel: (texture: Deno.PointerValue, label: Deno.PointerValue): void =>
    lib.symbols.wgpuTextureSetLabel(texture, label),
  reference: (texture: Deno.PointerValue): void =>
    lib.symbols.wgpuTextureReference(texture),
  release: (texture: Deno.PointerValue): void =>
    lib.symbols.wgpuTextureRelease(texture),
  viewSetLabel: (
    textureView: Deno.PointerValue,
    label: Deno.PointerValue,
  ): void => lib.symbols.wgpuTextureViewSetLabel(textureView, label),
  viewReference: (textureView: Deno.PointerValue): void =>
    lib.symbols.wgpuTextureViewReference(textureView),
  viewRelease: (textureView: Deno.PointerValue): void =>
    lib.symbols.wgpuTextureViewRelease(textureView),
};
