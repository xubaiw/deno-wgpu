import { lib } from "./lib.js";

export const wgpuCreateInstance = (
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuCreateInstance(
    descriptor,
  );

export const wgpuGetProcAddress = (
  device: Deno.PointerValue,
  procName: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuGetProcAddress(
    device,
    procName,
  );

export const wgpuAdapterEnumerateFeatures = (
  adapter: Deno.PointerValue,
  features: Deno.PointerValue,
): number | bigint =>
  lib.symbols.wgpuAdapterEnumerateFeatures(
    adapter,
    features,
  );

export const wgpuAdapterGetLimits = (
  adapter: Deno.PointerValue,
  limits: Deno.PointerValue,
): boolean =>
  lib.symbols.wgpuAdapterGetLimits(
    adapter,
    limits,
  ) == 1;

export const wgpuAdapterGetProperties = (
  adapter: Deno.PointerValue,
  properties: Deno.PointerValue,
): void =>
  lib.symbols.wgpuAdapterGetProperties(
    adapter,
    properties,
  );

export const wgpuAdapterHasFeature = (
  adapter: Deno.PointerValue,
  feature: number,
): boolean =>
  lib.symbols.wgpuAdapterHasFeature(
    adapter,
    feature,
  ) == 1;

export const wgpuAdapterRequestDevice = (
  adapter: Deno.PointerValue,
  descriptor: Deno.PointerValue,
  callback: Deno.PointerValue,
  userdata: Deno.PointerValue,
): void =>
  lib.symbols.wgpuAdapterRequestDevice(
    adapter,
    descriptor,
    callback,
    userdata,
  );

export const wgpuAdapterReference = (
  adapter: Deno.PointerValue,
): void =>
  lib.symbols.wgpuAdapterReference(
    adapter,
  );

export const wgpuAdapterRelease = (
  adapter: Deno.PointerValue,
): void =>
  lib.symbols.wgpuAdapterRelease(
    adapter,
  );

export const wgpuBindGroupSetLabel = (
  bindGroup: Deno.PointerValue,
  label: Deno.PointerValue,
): void =>
  lib.symbols.wgpuBindGroupSetLabel(
    bindGroup,
    label,
  );

export const wgpuBindGroupReference = (
  bindGroup: Deno.PointerValue,
): void =>
  lib.symbols.wgpuBindGroupReference(
    bindGroup,
  );

export const wgpuBindGroupRelease = (
  bindGroup: Deno.PointerValue,
): void =>
  lib.symbols.wgpuBindGroupRelease(
    bindGroup,
  );

export const wgpuBindGroupLayoutSetLabel = (
  bindGroupLayout: Deno.PointerValue,
  label: Deno.PointerValue,
): void =>
  lib.symbols.wgpuBindGroupLayoutSetLabel(
    bindGroupLayout,
    label,
  );

export const wgpuBindGroupLayoutReference = (
  bindGroupLayout: Deno.PointerValue,
): void =>
  lib.symbols.wgpuBindGroupLayoutReference(
    bindGroupLayout,
  );

export const wgpuBindGroupLayoutRelease = (
  bindGroupLayout: Deno.PointerValue,
): void =>
  lib.symbols.wgpuBindGroupLayoutRelease(
    bindGroupLayout,
  );

export const wgpuBufferDestroy = (
  buffer: Deno.PointerValue,
): void =>
  lib.symbols.wgpuBufferDestroy(
    buffer,
  );

export const wgpuBufferGetConstMappedRange = (
  buffer: Deno.PointerValue,
  offset: number | bigint,
  size: number | bigint,
): Deno.PointerValue =>
  lib.symbols.wgpuBufferGetConstMappedRange(
    buffer,
    offset,
    size,
  );

export const wgpuBufferGetMapState = (
  buffer: Deno.PointerValue,
): number =>
  lib.symbols.wgpuBufferGetMapState(
    buffer,
  );

export const wgpuBufferGetMappedRange = (
  buffer: Deno.PointerValue,
  offset: number | bigint,
  size: number | bigint,
): Deno.PointerValue =>
  lib.symbols.wgpuBufferGetMappedRange(
    buffer,
    offset,
    size,
  );

export const wgpuBufferGetSize = (
  buffer: Deno.PointerValue,
): number | bigint =>
  lib.symbols.wgpuBufferGetSize(
    buffer,
  );

export const wgpuBufferGetUsage = (
  buffer: Deno.PointerValue,
): number =>
  lib.symbols.wgpuBufferGetUsage(
    buffer,
  );

export const wgpuBufferMapAsync = (
  buffer: Deno.PointerValue,
  mode: number,
  offset: number | bigint,
  size: number | bigint,
  callback: Deno.PointerValue,
  userdata: Deno.PointerValue,
): void =>
  lib.symbols.wgpuBufferMapAsync(
    buffer,
    mode,
    offset,
    size,
    callback,
    userdata,
  );

export const wgpuBufferSetLabel = (
  buffer: Deno.PointerValue,
  label: Deno.PointerValue,
): void =>
  lib.symbols.wgpuBufferSetLabel(
    buffer,
    label,
  );

export const wgpuBufferUnmap = (
  buffer: Deno.PointerValue,
): void =>
  lib.symbols.wgpuBufferUnmap(
    buffer,
  );

export const wgpuBufferReference = (
  buffer: Deno.PointerValue,
): void =>
  lib.symbols.wgpuBufferReference(
    buffer,
  );

export const wgpuBufferRelease = (
  buffer: Deno.PointerValue,
): void =>
  lib.symbols.wgpuBufferRelease(
    buffer,
  );

export const wgpuCommandBufferSetLabel = (
  commandBuffer: Deno.PointerValue,
  label: Deno.PointerValue,
): void =>
  lib.symbols.wgpuCommandBufferSetLabel(
    commandBuffer,
    label,
  );

export const wgpuCommandBufferReference = (
  commandBuffer: Deno.PointerValue,
): void =>
  lib.symbols.wgpuCommandBufferReference(
    commandBuffer,
  );

export const wgpuCommandBufferRelease = (
  commandBuffer: Deno.PointerValue,
): void =>
  lib.symbols.wgpuCommandBufferRelease(
    commandBuffer,
  );

export const wgpuCommandEncoderBeginComputePass = (
  commandEncoder: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuCommandEncoderBeginComputePass(
    commandEncoder,
    descriptor,
  );

export const wgpuCommandEncoderBeginRenderPass = (
  commandEncoder: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuCommandEncoderBeginRenderPass(
    commandEncoder,
    descriptor,
  );

export const wgpuCommandEncoderClearBuffer = (
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
  );

export const wgpuCommandEncoderCopyBufferToBuffer = (
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
  );

export const wgpuCommandEncoderCopyBufferToTexture = (
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
  );

export const wgpuCommandEncoderCopyTextureToBuffer = (
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
  );

export const wgpuCommandEncoderCopyTextureToTexture = (
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
  );

export const wgpuCommandEncoderFinish = (
  commandEncoder: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuCommandEncoderFinish(
    commandEncoder,
    descriptor,
  );

export const wgpuCommandEncoderInsertDebugMarker = (
  commandEncoder: Deno.PointerValue,
  markerLabel: Deno.PointerValue,
): void =>
  lib.symbols.wgpuCommandEncoderInsertDebugMarker(
    commandEncoder,
    markerLabel,
  );

export const wgpuCommandEncoderPopDebugGroup = (
  commandEncoder: Deno.PointerValue,
): void =>
  lib.symbols.wgpuCommandEncoderPopDebugGroup(
    commandEncoder,
  );

export const wgpuCommandEncoderPushDebugGroup = (
  commandEncoder: Deno.PointerValue,
  groupLabel: Deno.PointerValue,
): void =>
  lib.symbols.wgpuCommandEncoderPushDebugGroup(
    commandEncoder,
    groupLabel,
  );

export const wgpuCommandEncoderResolveQuerySet = (
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
  );

export const wgpuCommandEncoderSetLabel = (
  commandEncoder: Deno.PointerValue,
  label: Deno.PointerValue,
): void =>
  lib.symbols.wgpuCommandEncoderSetLabel(
    commandEncoder,
    label,
  );

export const wgpuCommandEncoderWriteTimestamp = (
  commandEncoder: Deno.PointerValue,
  querySet: Deno.PointerValue,
  queryIndex: number,
): void =>
  lib.symbols.wgpuCommandEncoderWriteTimestamp(
    commandEncoder,
    querySet,
    queryIndex,
  );

export const wgpuCommandEncoderReference = (
  commandEncoder: Deno.PointerValue,
): void =>
  lib.symbols.wgpuCommandEncoderReference(
    commandEncoder,
  );

export const wgpuCommandEncoderRelease = (
  commandEncoder: Deno.PointerValue,
): void =>
  lib.symbols.wgpuCommandEncoderRelease(
    commandEncoder,
  );

export const wgpuComputePassEncoderBeginPipelineStatisticsQuery = (
  computePassEncoder: Deno.PointerValue,
  querySet: Deno.PointerValue,
  queryIndex: number,
): void =>
  lib.symbols.wgpuComputePassEncoderBeginPipelineStatisticsQuery(
    computePassEncoder,
    querySet,
    queryIndex,
  );

export const wgpuComputePassEncoderDispatchWorkgroups = (
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
  );

export const wgpuComputePassEncoderDispatchWorkgroupsIndirect = (
  computePassEncoder: Deno.PointerValue,
  indirectBuffer: Deno.PointerValue,
  indirectOffset: number | bigint,
): void =>
  lib.symbols.wgpuComputePassEncoderDispatchWorkgroupsIndirect(
    computePassEncoder,
    indirectBuffer,
    indirectOffset,
  );

export const wgpuComputePassEncoderEnd = (
  computePassEncoder: Deno.PointerValue,
): void =>
  lib.symbols.wgpuComputePassEncoderEnd(
    computePassEncoder,
  );

export const wgpuComputePassEncoderEndPipelineStatisticsQuery = (
  computePassEncoder: Deno.PointerValue,
): void =>
  lib.symbols.wgpuComputePassEncoderEndPipelineStatisticsQuery(
    computePassEncoder,
  );

export const wgpuComputePassEncoderInsertDebugMarker = (
  computePassEncoder: Deno.PointerValue,
  markerLabel: Deno.PointerValue,
): void =>
  lib.symbols.wgpuComputePassEncoderInsertDebugMarker(
    computePassEncoder,
    markerLabel,
  );

export const wgpuComputePassEncoderPopDebugGroup = (
  computePassEncoder: Deno.PointerValue,
): void =>
  lib.symbols.wgpuComputePassEncoderPopDebugGroup(
    computePassEncoder,
  );

export const wgpuComputePassEncoderPushDebugGroup = (
  computePassEncoder: Deno.PointerValue,
  groupLabel: Deno.PointerValue,
): void =>
  lib.symbols.wgpuComputePassEncoderPushDebugGroup(
    computePassEncoder,
    groupLabel,
  );

export const wgpuComputePassEncoderSetBindGroup = (
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
  );

export const wgpuComputePassEncoderSetLabel = (
  computePassEncoder: Deno.PointerValue,
  label: Deno.PointerValue,
): void =>
  lib.symbols.wgpuComputePassEncoderSetLabel(
    computePassEncoder,
    label,
  );

export const wgpuComputePassEncoderSetPipeline = (
  computePassEncoder: Deno.PointerValue,
  pipeline: Deno.PointerValue,
): void =>
  lib.symbols.wgpuComputePassEncoderSetPipeline(
    computePassEncoder,
    pipeline,
  );

export const wgpuComputePassEncoderReference = (
  computePassEncoder: Deno.PointerValue,
): void =>
  lib.symbols.wgpuComputePassEncoderReference(
    computePassEncoder,
  );

export const wgpuComputePassEncoderRelease = (
  computePassEncoder: Deno.PointerValue,
): void =>
  lib.symbols.wgpuComputePassEncoderRelease(
    computePassEncoder,
  );

export const wgpuComputePipelineGetBindGroupLayout = (
  computePipeline: Deno.PointerValue,
  groupIndex: number,
): Deno.PointerValue =>
  lib.symbols.wgpuComputePipelineGetBindGroupLayout(
    computePipeline,
    groupIndex,
  );

export const wgpuComputePipelineSetLabel = (
  computePipeline: Deno.PointerValue,
  label: Deno.PointerValue,
): void =>
  lib.symbols.wgpuComputePipelineSetLabel(
    computePipeline,
    label,
  );

export const wgpuComputePipelineReference = (
  computePipeline: Deno.PointerValue,
): void =>
  lib.symbols.wgpuComputePipelineReference(
    computePipeline,
  );

export const wgpuComputePipelineRelease = (
  computePipeline: Deno.PointerValue,
): void =>
  lib.symbols.wgpuComputePipelineRelease(
    computePipeline,
  );

export const wgpuDeviceCreateBindGroup = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuDeviceCreateBindGroup(
    device,
    descriptor,
  );

export const wgpuDeviceCreateBindGroupLayout = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuDeviceCreateBindGroupLayout(
    device,
    descriptor,
  );

export const wgpuDeviceCreateBuffer = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuDeviceCreateBuffer(
    device,
    descriptor,
  );

export const wgpuDeviceCreateCommandEncoder = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuDeviceCreateCommandEncoder(
    device,
    descriptor,
  );

export const wgpuDeviceCreateComputePipeline = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuDeviceCreateComputePipeline(
    device,
    descriptor,
  );

export const wgpuDeviceCreateComputePipelineAsync = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
  callback: Deno.PointerValue,
  userdata: Deno.PointerValue,
): void =>
  lib.symbols.wgpuDeviceCreateComputePipelineAsync(
    device,
    descriptor,
    callback,
    userdata,
  );

export const wgpuDeviceCreatePipelineLayout = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuDeviceCreatePipelineLayout(
    device,
    descriptor,
  );

export const wgpuDeviceCreateQuerySet = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuDeviceCreateQuerySet(
    device,
    descriptor,
  );

export const wgpuDeviceCreateRenderBundleEncoder = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuDeviceCreateRenderBundleEncoder(
    device,
    descriptor,
  );

export const wgpuDeviceCreateRenderPipeline = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuDeviceCreateRenderPipeline(
    device,
    descriptor,
  );

export const wgpuDeviceCreateRenderPipelineAsync = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
  callback: Deno.PointerValue,
  userdata: Deno.PointerValue,
): void =>
  lib.symbols.wgpuDeviceCreateRenderPipelineAsync(
    device,
    descriptor,
    callback,
    userdata,
  );

export const wgpuDeviceCreateSampler = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuDeviceCreateSampler(
    device,
    descriptor,
  );

export const wgpuDeviceCreateShaderModule = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuDeviceCreateShaderModule(
    device,
    descriptor,
  );

export const wgpuDeviceCreateSwapChain = (
  device: Deno.PointerValue,
  surface: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuDeviceCreateSwapChain(
    device,
    surface,
    descriptor,
  );

export const wgpuDeviceCreateTexture = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuDeviceCreateTexture(
    device,
    descriptor,
  );

export const wgpuDeviceDestroy = (
  device: Deno.PointerValue,
): void =>
  lib.symbols.wgpuDeviceDestroy(
    device,
  );

export const wgpuDeviceEnumerateFeatures = (
  device: Deno.PointerValue,
  features: Deno.PointerValue,
): number | bigint =>
  lib.symbols.wgpuDeviceEnumerateFeatures(
    device,
    features,
  );

export const wgpuDeviceGetLimits = (
  device: Deno.PointerValue,
  limits: Deno.PointerValue,
): boolean =>
  lib.symbols.wgpuDeviceGetLimits(
    device,
    limits,
  ) == 1;

export const wgpuDeviceGetQueue = (
  device: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuDeviceGetQueue(
    device,
  );

export const wgpuDeviceHasFeature = (
  device: Deno.PointerValue,
  feature: number,
): boolean =>
  lib.symbols.wgpuDeviceHasFeature(
    device,
    feature,
  ) == 1;

export const wgpuDevicePopErrorScope = (
  device: Deno.PointerValue,
  callback: Deno.PointerValue,
  userdata: Deno.PointerValue,
): void =>
  lib.symbols.wgpuDevicePopErrorScope(
    device,
    callback,
    userdata,
  );

export const wgpuDevicePushErrorScope = (
  device: Deno.PointerValue,
  filter: number,
): void =>
  lib.symbols.wgpuDevicePushErrorScope(
    device,
    filter,
  );

export const wgpuDeviceSetLabel = (
  device: Deno.PointerValue,
  label: Deno.PointerValue,
): void =>
  lib.symbols.wgpuDeviceSetLabel(
    device,
    label,
  );

export const wgpuDeviceSetUncapturedErrorCallback = (
  device: Deno.PointerValue,
  callback: Deno.PointerValue,
  userdata: Deno.PointerValue,
): void =>
  lib.symbols.wgpuDeviceSetUncapturedErrorCallback(
    device,
    callback,
    userdata,
  );

export const wgpuDeviceReference = (
  device: Deno.PointerValue,
): void =>
  lib.symbols.wgpuDeviceReference(
    device,
  );

export const wgpuDeviceRelease = (
  device: Deno.PointerValue,
): void =>
  lib.symbols.wgpuDeviceRelease(
    device,
  );

export const wgpuInstanceCreateSurface = (
  instance: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuInstanceCreateSurface(
    instance,
    descriptor,
  );

export const wgpuInstanceProcessEvents = (
  instance: Deno.PointerValue,
): void =>
  lib.symbols.wgpuInstanceProcessEvents(
    instance,
  );

export const wgpuInstanceRequestAdapter = (
  instance: Deno.PointerValue,
  options: Deno.PointerValue,
  callback: Deno.PointerValue,
  userdata: Deno.PointerValue,
): void =>
  lib.symbols.wgpuInstanceRequestAdapter(
    instance,
    options,
    callback,
    userdata,
  );

export const wgpuInstanceReference = (
  instance: Deno.PointerValue,
): void =>
  lib.symbols.wgpuInstanceReference(
    instance,
  );

export const wgpuInstanceRelease = (
  instance: Deno.PointerValue,
): void =>
  lib.symbols.wgpuInstanceRelease(
    instance,
  );

export const wgpuPipelineLayoutSetLabel = (
  pipelineLayout: Deno.PointerValue,
  label: Deno.PointerValue,
): void =>
  lib.symbols.wgpuPipelineLayoutSetLabel(
    pipelineLayout,
    label,
  );

export const wgpuPipelineLayoutReference = (
  pipelineLayout: Deno.PointerValue,
): void =>
  lib.symbols.wgpuPipelineLayoutReference(
    pipelineLayout,
  );

export const wgpuPipelineLayoutRelease = (
  pipelineLayout: Deno.PointerValue,
): void =>
  lib.symbols.wgpuPipelineLayoutRelease(
    pipelineLayout,
  );

export const wgpuQuerySetDestroy = (
  querySet: Deno.PointerValue,
): void =>
  lib.symbols.wgpuQuerySetDestroy(
    querySet,
  );

export const wgpuQuerySetGetCount = (
  querySet: Deno.PointerValue,
): number =>
  lib.symbols.wgpuQuerySetGetCount(
    querySet,
  );

export const wgpuQuerySetGetType = (
  querySet: Deno.PointerValue,
): number =>
  lib.symbols.wgpuQuerySetGetType(
    querySet,
  );

export const wgpuQuerySetSetLabel = (
  querySet: Deno.PointerValue,
  label: Deno.PointerValue,
): void =>
  lib.symbols.wgpuQuerySetSetLabel(
    querySet,
    label,
  );

export const wgpuQuerySetReference = (
  querySet: Deno.PointerValue,
): void =>
  lib.symbols.wgpuQuerySetReference(
    querySet,
  );

export const wgpuQuerySetRelease = (
  querySet: Deno.PointerValue,
): void =>
  lib.symbols.wgpuQuerySetRelease(
    querySet,
  );

export const wgpuQueueOnSubmittedWorkDone = (
  queue: Deno.PointerValue,
  callback: Deno.PointerValue,
  userdata: Deno.PointerValue,
): void =>
  lib.symbols.wgpuQueueOnSubmittedWorkDone(
    queue,
    callback,
    userdata,
  );

export const wgpuQueueSetLabel = (
  queue: Deno.PointerValue,
  label: Deno.PointerValue,
): void =>
  lib.symbols.wgpuQueueSetLabel(
    queue,
    label,
  );

export const wgpuQueueSubmit = (
  queue: Deno.PointerValue,
  commandCount: number | bigint,
  commands: Deno.PointerValue,
): void =>
  lib.symbols.wgpuQueueSubmit(
    queue,
    commandCount,
    commands,
  );

export const wgpuQueueWriteBuffer = (
  queue: Deno.PointerValue,
  buffer: Deno.PointerValue,
  bufferOffset: number | bigint,
  data: Deno.PointerValue,
  size: number | bigint,
): void =>
  lib.symbols.wgpuQueueWriteBuffer(
    queue,
    buffer,
    bufferOffset,
    data,
    size,
  );

export const wgpuQueueWriteTexture = (
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
  );

export const wgpuQueueReference = (
  queue: Deno.PointerValue,
): void =>
  lib.symbols.wgpuQueueReference(
    queue,
  );

export const wgpuQueueRelease = (
  queue: Deno.PointerValue,
): void =>
  lib.symbols.wgpuQueueRelease(
    queue,
  );

export const wgpuRenderBundleSetLabel = (
  renderBundle: Deno.PointerValue,
  label: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderBundleSetLabel(
    renderBundle,
    label,
  );

export const wgpuRenderBundleReference = (
  renderBundle: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderBundleReference(
    renderBundle,
  );

export const wgpuRenderBundleRelease = (
  renderBundle: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderBundleRelease(
    renderBundle,
  );

export const wgpuRenderBundleEncoderDraw = (
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
  );

export const wgpuRenderBundleEncoderDrawIndexed = (
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
  );

export const wgpuRenderBundleEncoderDrawIndexedIndirect = (
  renderBundleEncoder: Deno.PointerValue,
  indirectBuffer: Deno.PointerValue,
  indirectOffset: number | bigint,
): void =>
  lib.symbols.wgpuRenderBundleEncoderDrawIndexedIndirect(
    renderBundleEncoder,
    indirectBuffer,
    indirectOffset,
  );

export const wgpuRenderBundleEncoderDrawIndirect = (
  renderBundleEncoder: Deno.PointerValue,
  indirectBuffer: Deno.PointerValue,
  indirectOffset: number | bigint,
): void =>
  lib.symbols.wgpuRenderBundleEncoderDrawIndirect(
    renderBundleEncoder,
    indirectBuffer,
    indirectOffset,
  );

export const wgpuRenderBundleEncoderFinish = (
  renderBundleEncoder: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuRenderBundleEncoderFinish(
    renderBundleEncoder,
    descriptor,
  );

export const wgpuRenderBundleEncoderInsertDebugMarker = (
  renderBundleEncoder: Deno.PointerValue,
  markerLabel: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderBundleEncoderInsertDebugMarker(
    renderBundleEncoder,
    markerLabel,
  );

export const wgpuRenderBundleEncoderPopDebugGroup = (
  renderBundleEncoder: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderBundleEncoderPopDebugGroup(
    renderBundleEncoder,
  );

export const wgpuRenderBundleEncoderPushDebugGroup = (
  renderBundleEncoder: Deno.PointerValue,
  groupLabel: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderBundleEncoderPushDebugGroup(
    renderBundleEncoder,
    groupLabel,
  );

export const wgpuRenderBundleEncoderSetBindGroup = (
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
  );

export const wgpuRenderBundleEncoderSetIndexBuffer = (
  renderBundleEncoder: Deno.PointerValue,
  buffer: Deno.PointerValue,
  format: number,
  offset: number | bigint,
  size: number | bigint,
): void =>
  lib.symbols.wgpuRenderBundleEncoderSetIndexBuffer(
    renderBundleEncoder,
    buffer,
    format,
    offset,
    size,
  );

export const wgpuRenderBundleEncoderSetLabel = (
  renderBundleEncoder: Deno.PointerValue,
  label: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderBundleEncoderSetLabel(
    renderBundleEncoder,
    label,
  );

export const wgpuRenderBundleEncoderSetPipeline = (
  renderBundleEncoder: Deno.PointerValue,
  pipeline: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderBundleEncoderSetPipeline(
    renderBundleEncoder,
    pipeline,
  );

export const wgpuRenderBundleEncoderSetVertexBuffer = (
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
  );

export const wgpuRenderBundleEncoderReference = (
  renderBundleEncoder: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderBundleEncoderReference(
    renderBundleEncoder,
  );

export const wgpuRenderBundleEncoderRelease = (
  renderBundleEncoder: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderBundleEncoderRelease(
    renderBundleEncoder,
  );

export const wgpuRenderPassEncoderBeginOcclusionQuery = (
  renderPassEncoder: Deno.PointerValue,
  queryIndex: number,
): void =>
  lib.symbols.wgpuRenderPassEncoderBeginOcclusionQuery(
    renderPassEncoder,
    queryIndex,
  );

export const wgpuRenderPassEncoderBeginPipelineStatisticsQuery = (
  renderPassEncoder: Deno.PointerValue,
  querySet: Deno.PointerValue,
  queryIndex: number,
): void =>
  lib.symbols.wgpuRenderPassEncoderBeginPipelineStatisticsQuery(
    renderPassEncoder,
    querySet,
    queryIndex,
  );

export const wgpuRenderPassEncoderDraw = (
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
  );

export const wgpuRenderPassEncoderDrawIndexed = (
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
  );

export const wgpuRenderPassEncoderDrawIndexedIndirect = (
  renderPassEncoder: Deno.PointerValue,
  indirectBuffer: Deno.PointerValue,
  indirectOffset: number | bigint,
): void =>
  lib.symbols.wgpuRenderPassEncoderDrawIndexedIndirect(
    renderPassEncoder,
    indirectBuffer,
    indirectOffset,
  );

export const wgpuRenderPassEncoderDrawIndirect = (
  renderPassEncoder: Deno.PointerValue,
  indirectBuffer: Deno.PointerValue,
  indirectOffset: number | bigint,
): void =>
  lib.symbols.wgpuRenderPassEncoderDrawIndirect(
    renderPassEncoder,
    indirectBuffer,
    indirectOffset,
  );

export const wgpuRenderPassEncoderEnd = (
  renderPassEncoder: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderPassEncoderEnd(
    renderPassEncoder,
  );

export const wgpuRenderPassEncoderEndOcclusionQuery = (
  renderPassEncoder: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderPassEncoderEndOcclusionQuery(
    renderPassEncoder,
  );

export const wgpuRenderPassEncoderEndPipelineStatisticsQuery = (
  renderPassEncoder: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderPassEncoderEndPipelineStatisticsQuery(
    renderPassEncoder,
  );

export const wgpuRenderPassEncoderExecuteBundles = (
  renderPassEncoder: Deno.PointerValue,
  bundleCount: number | bigint,
  bundles: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderPassEncoderExecuteBundles(
    renderPassEncoder,
    bundleCount,
    bundles,
  );

export const wgpuRenderPassEncoderInsertDebugMarker = (
  renderPassEncoder: Deno.PointerValue,
  markerLabel: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderPassEncoderInsertDebugMarker(
    renderPassEncoder,
    markerLabel,
  );

export const wgpuRenderPassEncoderPopDebugGroup = (
  renderPassEncoder: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderPassEncoderPopDebugGroup(
    renderPassEncoder,
  );

export const wgpuRenderPassEncoderPushDebugGroup = (
  renderPassEncoder: Deno.PointerValue,
  groupLabel: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderPassEncoderPushDebugGroup(
    renderPassEncoder,
    groupLabel,
  );

export const wgpuRenderPassEncoderSetBindGroup = (
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
  );

export const wgpuRenderPassEncoderSetBlendConstant = (
  renderPassEncoder: Deno.PointerValue,
  color: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderPassEncoderSetBlendConstant(
    renderPassEncoder,
    color,
  );

export const wgpuRenderPassEncoderSetIndexBuffer = (
  renderPassEncoder: Deno.PointerValue,
  buffer: Deno.PointerValue,
  format: number,
  offset: number | bigint,
  size: number | bigint,
): void =>
  lib.symbols.wgpuRenderPassEncoderSetIndexBuffer(
    renderPassEncoder,
    buffer,
    format,
    offset,
    size,
  );

export const wgpuRenderPassEncoderSetLabel = (
  renderPassEncoder: Deno.PointerValue,
  label: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderPassEncoderSetLabel(
    renderPassEncoder,
    label,
  );

export const wgpuRenderPassEncoderSetPipeline = (
  renderPassEncoder: Deno.PointerValue,
  pipeline: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderPassEncoderSetPipeline(
    renderPassEncoder,
    pipeline,
  );

export const wgpuRenderPassEncoderSetScissorRect = (
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
  );

export const wgpuRenderPassEncoderSetStencilReference = (
  renderPassEncoder: Deno.PointerValue,
  reference: number,
): void =>
  lib.symbols.wgpuRenderPassEncoderSetStencilReference(
    renderPassEncoder,
    reference,
  );

export const wgpuRenderPassEncoderSetVertexBuffer = (
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
  );

export const wgpuRenderPassEncoderSetViewport = (
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
  );

export const wgpuRenderPassEncoderReference = (
  renderPassEncoder: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderPassEncoderReference(
    renderPassEncoder,
  );

export const wgpuRenderPassEncoderRelease = (
  renderPassEncoder: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderPassEncoderRelease(
    renderPassEncoder,
  );

export const wgpuRenderPipelineGetBindGroupLayout = (
  renderPipeline: Deno.PointerValue,
  groupIndex: number,
): Deno.PointerValue =>
  lib.symbols.wgpuRenderPipelineGetBindGroupLayout(
    renderPipeline,
    groupIndex,
  );

export const wgpuRenderPipelineSetLabel = (
  renderPipeline: Deno.PointerValue,
  label: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderPipelineSetLabel(
    renderPipeline,
    label,
  );

export const wgpuRenderPipelineReference = (
  renderPipeline: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderPipelineReference(
    renderPipeline,
  );

export const wgpuRenderPipelineRelease = (
  renderPipeline: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderPipelineRelease(
    renderPipeline,
  );

export const wgpuSamplerSetLabel = (
  sampler: Deno.PointerValue,
  label: Deno.PointerValue,
): void =>
  lib.symbols.wgpuSamplerSetLabel(
    sampler,
    label,
  );

export const wgpuSamplerReference = (
  sampler: Deno.PointerValue,
): void =>
  lib.symbols.wgpuSamplerReference(
    sampler,
  );

export const wgpuSamplerRelease = (
  sampler: Deno.PointerValue,
): void =>
  lib.symbols.wgpuSamplerRelease(
    sampler,
  );

export const wgpuShaderModuleGetCompilationInfo = (
  shaderModule: Deno.PointerValue,
  callback: Deno.PointerValue,
  userdata: Deno.PointerValue,
): void =>
  lib.symbols.wgpuShaderModuleGetCompilationInfo(
    shaderModule,
    callback,
    userdata,
  );

export const wgpuShaderModuleSetLabel = (
  shaderModule: Deno.PointerValue,
  label: Deno.PointerValue,
): void =>
  lib.symbols.wgpuShaderModuleSetLabel(
    shaderModule,
    label,
  );

export const wgpuShaderModuleReference = (
  shaderModule: Deno.PointerValue,
): void =>
  lib.symbols.wgpuShaderModuleReference(
    shaderModule,
  );

export const wgpuShaderModuleRelease = (
  shaderModule: Deno.PointerValue,
): void =>
  lib.symbols.wgpuShaderModuleRelease(
    shaderModule,
  );

export const wgpuSurfaceGetPreferredFormat = (
  surface: Deno.PointerValue,
  adapter: Deno.PointerValue,
): number =>
  lib.symbols.wgpuSurfaceGetPreferredFormat(
    surface,
    adapter,
  );

export const wgpuSurfaceReference = (
  surface: Deno.PointerValue,
): void =>
  lib.symbols.wgpuSurfaceReference(
    surface,
  );

export const wgpuSurfaceRelease = (
  surface: Deno.PointerValue,
): void =>
  lib.symbols.wgpuSurfaceRelease(
    surface,
  );

export const wgpuSwapChainGetCurrentTextureView = (
  swapChain: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuSwapChainGetCurrentTextureView(
    swapChain,
  );

export const wgpuSwapChainPresent = (
  swapChain: Deno.PointerValue,
): void =>
  lib.symbols.wgpuSwapChainPresent(
    swapChain,
  );

export const wgpuSwapChainReference = (
  swapChain: Deno.PointerValue,
): void =>
  lib.symbols.wgpuSwapChainReference(
    swapChain,
  );

export const wgpuSwapChainRelease = (
  swapChain: Deno.PointerValue,
): void =>
  lib.symbols.wgpuSwapChainRelease(
    swapChain,
  );

export const wgpuTextureCreateView = (
  texture: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuTextureCreateView(
    texture,
    descriptor,
  );

export const wgpuTextureDestroy = (
  texture: Deno.PointerValue,
): void =>
  lib.symbols.wgpuTextureDestroy(
    texture,
  );

export const wgpuTextureGetDepthOrArrayLayers = (
  texture: Deno.PointerValue,
): number =>
  lib.symbols.wgpuTextureGetDepthOrArrayLayers(
    texture,
  );

export const wgpuTextureGetDimension = (
  texture: Deno.PointerValue,
): number =>
  lib.symbols.wgpuTextureGetDimension(
    texture,
  );

export const wgpuTextureGetFormat = (
  texture: Deno.PointerValue,
): number =>
  lib.symbols.wgpuTextureGetFormat(
    texture,
  );

export const wgpuTextureGetHeight = (
  texture: Deno.PointerValue,
): number =>
  lib.symbols.wgpuTextureGetHeight(
    texture,
  );

export const wgpuTextureGetMipLevelCount = (
  texture: Deno.PointerValue,
): number =>
  lib.symbols.wgpuTextureGetMipLevelCount(
    texture,
  );

export const wgpuTextureGetSampleCount = (
  texture: Deno.PointerValue,
): number =>
  lib.symbols.wgpuTextureGetSampleCount(
    texture,
  );

export const wgpuTextureGetUsage = (
  texture: Deno.PointerValue,
): number =>
  lib.symbols.wgpuTextureGetUsage(
    texture,
  );

export const wgpuTextureGetWidth = (
  texture: Deno.PointerValue,
): number =>
  lib.symbols.wgpuTextureGetWidth(
    texture,
  );

export const wgpuTextureSetLabel = (
  texture: Deno.PointerValue,
  label: Deno.PointerValue,
): void =>
  lib.symbols.wgpuTextureSetLabel(
    texture,
    label,
  );

export const wgpuTextureReference = (
  texture: Deno.PointerValue,
): void =>
  lib.symbols.wgpuTextureReference(
    texture,
  );

export const wgpuTextureRelease = (
  texture: Deno.PointerValue,
): void =>
  lib.symbols.wgpuTextureRelease(
    texture,
  );

export const wgpuTextureViewSetLabel = (
  textureView: Deno.PointerValue,
  label: Deno.PointerValue,
): void =>
  lib.symbols.wgpuTextureViewSetLabel(
    textureView,
    label,
  );

export const wgpuTextureViewReference = (
  textureView: Deno.PointerValue,
): void =>
  lib.symbols.wgpuTextureViewReference(
    textureView,
  );

export const wgpuTextureViewRelease = (
  textureView: Deno.PointerValue,
): void =>
  lib.symbols.wgpuTextureViewRelease(
    textureView,
  );

export const wgpuGenerateReport = (
  instance: Deno.PointerValue,
  report: Deno.PointerValue,
): void =>
  lib.symbols.wgpuGenerateReport(
    instance,
    report,
  );

export const wgpuInstanceEnumerateAdapters = (
  instance: Deno.PointerValue,
  options: Deno.PointerValue,
  adapters: Deno.PointerValue,
): number | bigint =>
  lib.symbols.wgpuInstanceEnumerateAdapters(
    instance,
    options,
    adapters,
  );

export const wgpuQueueSubmitForIndex = (
  queue: Deno.PointerValue,
  commandCount: number | bigint,
  commands: Deno.PointerValue,
): number | bigint =>
  lib.symbols.wgpuQueueSubmitForIndex(
    queue,
    commandCount,
    commands,
  );

export const wgpuDevicePoll = (
  device: Deno.PointerValue,
  wait: boolean,
  wrappedSubmissionIndex: Deno.PointerValue,
): boolean =>
  lib.symbols.wgpuDevicePoll(
    device,
    wait ? 1 : 0,
    wrappedSubmissionIndex,
  ) == 1;

export const wgpuSetLogCallback = (
  callback: Deno.PointerValue,
  userdata: Deno.PointerValue,
): void =>
  lib.symbols.wgpuSetLogCallback(
    callback,
    userdata,
  );

export const wgpuSetLogLevel = (
  level: number,
): void =>
  lib.symbols.wgpuSetLogLevel(
    level,
  );

export const wgpuGetVersion = (): number => lib.symbols.wgpuGetVersion();

export const wgpuSurfaceGetCapabilities = (
  surface: Deno.PointerValue,
  adapter: Deno.PointerValue,
  capabilities: Deno.PointerValue,
): void =>
  lib.symbols.wgpuSurfaceGetCapabilities(
    surface,
    adapter,
    capabilities,
  );

export const wgpuRenderPassEncoderSetPushConstants = (
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
  );

export const wgpuRenderPassEncoderMultiDrawIndirect = (
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
  );

export const wgpuRenderPassEncoderMultiDrawIndexedIndirect = (
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
  );

export const wgpuRenderPassEncoderMultiDrawIndirectCount = (
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
  );

export const wgpuRenderPassEncoderMultiDrawIndexedIndirectCount = (
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
  );
