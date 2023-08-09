import lib from "./symbol.ts";

export const createInstance = (
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuCreateInstance(
    descriptor,
  );

export const getProcAddress = (
  device: Deno.PointerValue,
  procName: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuGetProcAddress(
    device,
    procName,
  );

export const adapterEnumerateFeatures = (
  adapter: Deno.PointerValue,
  features: Deno.PointerValue,
): number | bigint =>
  lib.symbols.wgpuAdapterEnumerateFeatures(
    adapter,
    features,
  );

export const adapterGetLimits = (
  adapter: Deno.PointerValue,
  limits: Deno.PointerValue,
): boolean =>
  lib.symbols.wgpuAdapterGetLimits(
    adapter,
    limits,
  ) == 1;

export const adapterGetProperties = (
  adapter: Deno.PointerValue,
  properties: Deno.PointerValue,
): void =>
  lib.symbols.wgpuAdapterGetProperties(
    adapter,
    properties,
  );

export const adapterHasFeature = (
  adapter: Deno.PointerValue,
  feature: number,
): boolean =>
  lib.symbols.wgpuAdapterHasFeature(
    adapter,
    feature,
  ) == 1;

export const adapterRequestDevice = (
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

export const adapterReference = (
  adapter: Deno.PointerValue,
): void =>
  lib.symbols.wgpuAdapterReference(
    adapter,
  );

export const adapterRelease = (
  adapter: Deno.PointerValue,
): void =>
  lib.symbols.wgpuAdapterRelease(
    adapter,
  );

export const bindGroupSetLabel = (
  bindGroup: Deno.PointerValue,
  label: Deno.PointerValue,
): void =>
  lib.symbols.wgpuBindGroupSetLabel(
    bindGroup,
    label,
  );

export const bindGroupReference = (
  bindGroup: Deno.PointerValue,
): void =>
  lib.symbols.wgpuBindGroupReference(
    bindGroup,
  );

export const bindGroupRelease = (
  bindGroup: Deno.PointerValue,
): void =>
  lib.symbols.wgpuBindGroupRelease(
    bindGroup,
  );

export const bindGroupLayoutSetLabel = (
  bindGroupLayout: Deno.PointerValue,
  label: Deno.PointerValue,
): void =>
  lib.symbols.wgpuBindGroupLayoutSetLabel(
    bindGroupLayout,
    label,
  );

export const bindGroupLayoutReference = (
  bindGroupLayout: Deno.PointerValue,
): void =>
  lib.symbols.wgpuBindGroupLayoutReference(
    bindGroupLayout,
  );

export const bindGroupLayoutRelease = (
  bindGroupLayout: Deno.PointerValue,
): void =>
  lib.symbols.wgpuBindGroupLayoutRelease(
    bindGroupLayout,
  );

export const bufferDestroy = (
  buffer: Deno.PointerValue,
): void =>
  lib.symbols.wgpuBufferDestroy(
    buffer,
  );

export const bufferGetConstMappedRange = (
  buffer: Deno.PointerValue,
  offset: number | bigint,
  size: number | bigint,
): Deno.PointerValue =>
  lib.symbols.wgpuBufferGetConstMappedRange(
    buffer,
    offset,
    size,
  );

export const bufferGetMapState = (
  buffer: Deno.PointerValue,
): number =>
  lib.symbols.wgpuBufferGetMapState(
    buffer,
  );

export const bufferGetMappedRange = (
  buffer: Deno.PointerValue,
  offset: number | bigint,
  size: number | bigint,
): Deno.PointerValue =>
  lib.symbols.wgpuBufferGetMappedRange(
    buffer,
    offset,
    size,
  );

export const bufferGetSize = (
  buffer: Deno.PointerValue,
): number | bigint =>
  lib.symbols.wgpuBufferGetSize(
    buffer,
  );

export const bufferGetUsage = (
  buffer: Deno.PointerValue,
): number =>
  lib.symbols.wgpuBufferGetUsage(
    buffer,
  );

export const bufferMapAsync = (
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

export const bufferSetLabel = (
  buffer: Deno.PointerValue,
  label: Deno.PointerValue,
): void =>
  lib.symbols.wgpuBufferSetLabel(
    buffer,
    label,
  );

export const bufferUnmap = (
  buffer: Deno.PointerValue,
): void =>
  lib.symbols.wgpuBufferUnmap(
    buffer,
  );

export const bufferReference = (
  buffer: Deno.PointerValue,
): void =>
  lib.symbols.wgpuBufferReference(
    buffer,
  );

export const bufferRelease = (
  buffer: Deno.PointerValue,
): void =>
  lib.symbols.wgpuBufferRelease(
    buffer,
  );

export const commandBufferSetLabel = (
  commandBuffer: Deno.PointerValue,
  label: Deno.PointerValue,
): void =>
  lib.symbols.wgpuCommandBufferSetLabel(
    commandBuffer,
    label,
  );

export const commandBufferReference = (
  commandBuffer: Deno.PointerValue,
): void =>
  lib.symbols.wgpuCommandBufferReference(
    commandBuffer,
  );

export const commandBufferRelease = (
  commandBuffer: Deno.PointerValue,
): void =>
  lib.symbols.wgpuCommandBufferRelease(
    commandBuffer,
  );

export const commandEncoderBeginComputePass = (
  commandEncoder: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuCommandEncoderBeginComputePass(
    commandEncoder,
    descriptor,
  );

export const commandEncoderBeginRenderPass = (
  commandEncoder: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuCommandEncoderBeginRenderPass(
    commandEncoder,
    descriptor,
  );

export const commandEncoderClearBuffer = (
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

export const commandEncoderCopyBufferToBuffer = (
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

export const commandEncoderCopyBufferToTexture = (
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

export const commandEncoderCopyTextureToBuffer = (
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

export const commandEncoderCopyTextureToTexture = (
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

export const commandEncoderFinish = (
  commandEncoder: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuCommandEncoderFinish(
    commandEncoder,
    descriptor,
  );

export const commandEncoderInsertDebugMarker = (
  commandEncoder: Deno.PointerValue,
  markerLabel: Deno.PointerValue,
): void =>
  lib.symbols.wgpuCommandEncoderInsertDebugMarker(
    commandEncoder,
    markerLabel,
  );

export const commandEncoderPopDebugGroup = (
  commandEncoder: Deno.PointerValue,
): void =>
  lib.symbols.wgpuCommandEncoderPopDebugGroup(
    commandEncoder,
  );

export const commandEncoderPushDebugGroup = (
  commandEncoder: Deno.PointerValue,
  groupLabel: Deno.PointerValue,
): void =>
  lib.symbols.wgpuCommandEncoderPushDebugGroup(
    commandEncoder,
    groupLabel,
  );

export const commandEncoderResolveQuerySet = (
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

export const commandEncoderSetLabel = (
  commandEncoder: Deno.PointerValue,
  label: Deno.PointerValue,
): void =>
  lib.symbols.wgpuCommandEncoderSetLabel(
    commandEncoder,
    label,
  );

export const commandEncoderWriteTimestamp = (
  commandEncoder: Deno.PointerValue,
  querySet: Deno.PointerValue,
  queryIndex: number,
): void =>
  lib.symbols.wgpuCommandEncoderWriteTimestamp(
    commandEncoder,
    querySet,
    queryIndex,
  );

export const commandEncoderReference = (
  commandEncoder: Deno.PointerValue,
): void =>
  lib.symbols.wgpuCommandEncoderReference(
    commandEncoder,
  );

export const commandEncoderRelease = (
  commandEncoder: Deno.PointerValue,
): void =>
  lib.symbols.wgpuCommandEncoderRelease(
    commandEncoder,
  );

export const computePassEncoderBeginPipelineStatisticsQuery = (
  computePassEncoder: Deno.PointerValue,
  querySet: Deno.PointerValue,
  queryIndex: number,
): void =>
  lib.symbols.wgpuComputePassEncoderBeginPipelineStatisticsQuery(
    computePassEncoder,
    querySet,
    queryIndex,
  );

export const computePassEncoderDispatchWorkgroups = (
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

export const computePassEncoderDispatchWorkgroupsIndirect = (
  computePassEncoder: Deno.PointerValue,
  indirectBuffer: Deno.PointerValue,
  indirectOffset: number | bigint,
): void =>
  lib.symbols.wgpuComputePassEncoderDispatchWorkgroupsIndirect(
    computePassEncoder,
    indirectBuffer,
    indirectOffset,
  );

export const computePassEncoderEnd = (
  computePassEncoder: Deno.PointerValue,
): void =>
  lib.symbols.wgpuComputePassEncoderEnd(
    computePassEncoder,
  );

export const computePassEncoderEndPipelineStatisticsQuery = (
  computePassEncoder: Deno.PointerValue,
): void =>
  lib.symbols.wgpuComputePassEncoderEndPipelineStatisticsQuery(
    computePassEncoder,
  );

export const computePassEncoderInsertDebugMarker = (
  computePassEncoder: Deno.PointerValue,
  markerLabel: Deno.PointerValue,
): void =>
  lib.symbols.wgpuComputePassEncoderInsertDebugMarker(
    computePassEncoder,
    markerLabel,
  );

export const computePassEncoderPopDebugGroup = (
  computePassEncoder: Deno.PointerValue,
): void =>
  lib.symbols.wgpuComputePassEncoderPopDebugGroup(
    computePassEncoder,
  );

export const computePassEncoderPushDebugGroup = (
  computePassEncoder: Deno.PointerValue,
  groupLabel: Deno.PointerValue,
): void =>
  lib.symbols.wgpuComputePassEncoderPushDebugGroup(
    computePassEncoder,
    groupLabel,
  );

export const computePassEncoderSetBindGroup = (
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

export const computePassEncoderSetLabel = (
  computePassEncoder: Deno.PointerValue,
  label: Deno.PointerValue,
): void =>
  lib.symbols.wgpuComputePassEncoderSetLabel(
    computePassEncoder,
    label,
  );

export const computePassEncoderSetPipeline = (
  computePassEncoder: Deno.PointerValue,
  pipeline: Deno.PointerValue,
): void =>
  lib.symbols.wgpuComputePassEncoderSetPipeline(
    computePassEncoder,
    pipeline,
  );

export const computePassEncoderReference = (
  computePassEncoder: Deno.PointerValue,
): void =>
  lib.symbols.wgpuComputePassEncoderReference(
    computePassEncoder,
  );

export const computePassEncoderRelease = (
  computePassEncoder: Deno.PointerValue,
): void =>
  lib.symbols.wgpuComputePassEncoderRelease(
    computePassEncoder,
  );

export const computePipelineGetBindGroupLayout = (
  computePipeline: Deno.PointerValue,
  groupIndex: number,
): Deno.PointerValue =>
  lib.symbols.wgpuComputePipelineGetBindGroupLayout(
    computePipeline,
    groupIndex,
  );

export const computePipelineSetLabel = (
  computePipeline: Deno.PointerValue,
  label: Deno.PointerValue,
): void =>
  lib.symbols.wgpuComputePipelineSetLabel(
    computePipeline,
    label,
  );

export const computePipelineReference = (
  computePipeline: Deno.PointerValue,
): void =>
  lib.symbols.wgpuComputePipelineReference(
    computePipeline,
  );

export const computePipelineRelease = (
  computePipeline: Deno.PointerValue,
): void =>
  lib.symbols.wgpuComputePipelineRelease(
    computePipeline,
  );

export const deviceCreateBindGroup = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuDeviceCreateBindGroup(
    device,
    descriptor,
  );

export const deviceCreateBindGroupLayout = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuDeviceCreateBindGroupLayout(
    device,
    descriptor,
  );

export const deviceCreateBuffer = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuDeviceCreateBuffer(
    device,
    descriptor,
  );

export const deviceCreateCommandEncoder = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuDeviceCreateCommandEncoder(
    device,
    descriptor,
  );

export const deviceCreateComputePipeline = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuDeviceCreateComputePipeline(
    device,
    descriptor,
  );

export const deviceCreateComputePipelineAsync = (
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

export const deviceCreatePipelineLayout = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuDeviceCreatePipelineLayout(
    device,
    descriptor,
  );

export const deviceCreateQuerySet = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuDeviceCreateQuerySet(
    device,
    descriptor,
  );

export const deviceCreateRenderBundleEncoder = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuDeviceCreateRenderBundleEncoder(
    device,
    descriptor,
  );

export const deviceCreateRenderPipeline = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuDeviceCreateRenderPipeline(
    device,
    descriptor,
  );

export const deviceCreateRenderPipelineAsync = (
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

export const deviceCreateSampler = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuDeviceCreateSampler(
    device,
    descriptor,
  );

export const deviceCreateShaderModule = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuDeviceCreateShaderModule(
    device,
    descriptor,
  );

export const deviceCreateSwapChain = (
  device: Deno.PointerValue,
  surface: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuDeviceCreateSwapChain(
    device,
    surface,
    descriptor,
  );

export const deviceCreateTexture = (
  device: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuDeviceCreateTexture(
    device,
    descriptor,
  );

export const deviceDestroy = (
  device: Deno.PointerValue,
): void =>
  lib.symbols.wgpuDeviceDestroy(
    device,
  );

export const deviceEnumerateFeatures = (
  device: Deno.PointerValue,
  features: Deno.PointerValue,
): number | bigint =>
  lib.symbols.wgpuDeviceEnumerateFeatures(
    device,
    features,
  );

export const deviceGetLimits = (
  device: Deno.PointerValue,
  limits: Deno.PointerValue,
): boolean =>
  lib.symbols.wgpuDeviceGetLimits(
    device,
    limits,
  ) == 1;

export const deviceGetQueue = (
  device: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuDeviceGetQueue(
    device,
  );

export const deviceHasFeature = (
  device: Deno.PointerValue,
  feature: number,
): boolean =>
  lib.symbols.wgpuDeviceHasFeature(
    device,
    feature,
  ) == 1;

export const devicePopErrorScope = (
  device: Deno.PointerValue,
  callback: Deno.PointerValue,
  userdata: Deno.PointerValue,
): void =>
  lib.symbols.wgpuDevicePopErrorScope(
    device,
    callback,
    userdata,
  );

export const devicePushErrorScope = (
  device: Deno.PointerValue,
  filter: number,
): void =>
  lib.symbols.wgpuDevicePushErrorScope(
    device,
    filter,
  );

export const deviceSetLabel = (
  device: Deno.PointerValue,
  label: Deno.PointerValue,
): void =>
  lib.symbols.wgpuDeviceSetLabel(
    device,
    label,
  );

export const deviceSetUncapturedErrorCallback = (
  device: Deno.PointerValue,
  callback: Deno.PointerValue,
  userdata: Deno.PointerValue,
): void =>
  lib.symbols.wgpuDeviceSetUncapturedErrorCallback(
    device,
    callback,
    userdata,
  );

export const deviceReference = (
  device: Deno.PointerValue,
): void =>
  lib.symbols.wgpuDeviceReference(
    device,
  );

export const deviceRelease = (
  device: Deno.PointerValue,
): void =>
  lib.symbols.wgpuDeviceRelease(
    device,
  );

export const instanceCreateSurface = (
  instance: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuInstanceCreateSurface(
    instance,
    descriptor,
  );

export const instanceProcessEvents = (
  instance: Deno.PointerValue,
): void =>
  lib.symbols.wgpuInstanceProcessEvents(
    instance,
  );

export const instanceRequestAdapter = (
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

export const instanceReference = (
  instance: Deno.PointerValue,
): void =>
  lib.symbols.wgpuInstanceReference(
    instance,
  );

export const instanceRelease = (
  instance: Deno.PointerValue,
): void =>
  lib.symbols.wgpuInstanceRelease(
    instance,
  );

export const pipelineLayoutSetLabel = (
  pipelineLayout: Deno.PointerValue,
  label: Deno.PointerValue,
): void =>
  lib.symbols.wgpuPipelineLayoutSetLabel(
    pipelineLayout,
    label,
  );

export const pipelineLayoutReference = (
  pipelineLayout: Deno.PointerValue,
): void =>
  lib.symbols.wgpuPipelineLayoutReference(
    pipelineLayout,
  );

export const pipelineLayoutRelease = (
  pipelineLayout: Deno.PointerValue,
): void =>
  lib.symbols.wgpuPipelineLayoutRelease(
    pipelineLayout,
  );

export const querySetDestroy = (
  querySet: Deno.PointerValue,
): void =>
  lib.symbols.wgpuQuerySetDestroy(
    querySet,
  );

export const querySetGetCount = (
  querySet: Deno.PointerValue,
): number =>
  lib.symbols.wgpuQuerySetGetCount(
    querySet,
  );

export const querySetGetType = (
  querySet: Deno.PointerValue,
): number =>
  lib.symbols.wgpuQuerySetGetType(
    querySet,
  );

export const querySetSetLabel = (
  querySet: Deno.PointerValue,
  label: Deno.PointerValue,
): void =>
  lib.symbols.wgpuQuerySetSetLabel(
    querySet,
    label,
  );

export const querySetReference = (
  querySet: Deno.PointerValue,
): void =>
  lib.symbols.wgpuQuerySetReference(
    querySet,
  );

export const querySetRelease = (
  querySet: Deno.PointerValue,
): void =>
  lib.symbols.wgpuQuerySetRelease(
    querySet,
  );

export const queueOnSubmittedWorkDone = (
  queue: Deno.PointerValue,
  callback: Deno.PointerValue,
  userdata: Deno.PointerValue,
): void =>
  lib.symbols.wgpuQueueOnSubmittedWorkDone(
    queue,
    callback,
    userdata,
  );

export const queueSetLabel = (
  queue: Deno.PointerValue,
  label: Deno.PointerValue,
): void =>
  lib.symbols.wgpuQueueSetLabel(
    queue,
    label,
  );

export const queueSubmit = (
  queue: Deno.PointerValue,
  commandCount: number | bigint,
  commands: Deno.PointerValue,
): void =>
  lib.symbols.wgpuQueueSubmit(
    queue,
    commandCount,
    commands,
  );

export const queueWriteBuffer = (
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

export const queueWriteTexture = (
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

export const queueReference = (
  queue: Deno.PointerValue,
): void =>
  lib.symbols.wgpuQueueReference(
    queue,
  );

export const queueRelease = (
  queue: Deno.PointerValue,
): void =>
  lib.symbols.wgpuQueueRelease(
    queue,
  );

export const renderBundleSetLabel = (
  renderBundle: Deno.PointerValue,
  label: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderBundleSetLabel(
    renderBundle,
    label,
  );

export const renderBundleReference = (
  renderBundle: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderBundleReference(
    renderBundle,
  );

export const renderBundleRelease = (
  renderBundle: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderBundleRelease(
    renderBundle,
  );

export const renderBundleEncoderDraw = (
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

export const renderBundleEncoderDrawIndexed = (
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

export const renderBundleEncoderDrawIndexedIndirect = (
  renderBundleEncoder: Deno.PointerValue,
  indirectBuffer: Deno.PointerValue,
  indirectOffset: number | bigint,
): void =>
  lib.symbols.wgpuRenderBundleEncoderDrawIndexedIndirect(
    renderBundleEncoder,
    indirectBuffer,
    indirectOffset,
  );

export const renderBundleEncoderDrawIndirect = (
  renderBundleEncoder: Deno.PointerValue,
  indirectBuffer: Deno.PointerValue,
  indirectOffset: number | bigint,
): void =>
  lib.symbols.wgpuRenderBundleEncoderDrawIndirect(
    renderBundleEncoder,
    indirectBuffer,
    indirectOffset,
  );

export const renderBundleEncoderFinish = (
  renderBundleEncoder: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuRenderBundleEncoderFinish(
    renderBundleEncoder,
    descriptor,
  );

export const renderBundleEncoderInsertDebugMarker = (
  renderBundleEncoder: Deno.PointerValue,
  markerLabel: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderBundleEncoderInsertDebugMarker(
    renderBundleEncoder,
    markerLabel,
  );

export const renderBundleEncoderPopDebugGroup = (
  renderBundleEncoder: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderBundleEncoderPopDebugGroup(
    renderBundleEncoder,
  );

export const renderBundleEncoderPushDebugGroup = (
  renderBundleEncoder: Deno.PointerValue,
  groupLabel: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderBundleEncoderPushDebugGroup(
    renderBundleEncoder,
    groupLabel,
  );

export const renderBundleEncoderSetBindGroup = (
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

export const renderBundleEncoderSetIndexBuffer = (
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

export const renderBundleEncoderSetLabel = (
  renderBundleEncoder: Deno.PointerValue,
  label: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderBundleEncoderSetLabel(
    renderBundleEncoder,
    label,
  );

export const renderBundleEncoderSetPipeline = (
  renderBundleEncoder: Deno.PointerValue,
  pipeline: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderBundleEncoderSetPipeline(
    renderBundleEncoder,
    pipeline,
  );

export const renderBundleEncoderSetVertexBuffer = (
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

export const renderBundleEncoderReference = (
  renderBundleEncoder: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderBundleEncoderReference(
    renderBundleEncoder,
  );

export const renderBundleEncoderRelease = (
  renderBundleEncoder: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderBundleEncoderRelease(
    renderBundleEncoder,
  );

export const renderPassEncoderBeginOcclusionQuery = (
  renderPassEncoder: Deno.PointerValue,
  queryIndex: number,
): void =>
  lib.symbols.wgpuRenderPassEncoderBeginOcclusionQuery(
    renderPassEncoder,
    queryIndex,
  );

export const renderPassEncoderBeginPipelineStatisticsQuery = (
  renderPassEncoder: Deno.PointerValue,
  querySet: Deno.PointerValue,
  queryIndex: number,
): void =>
  lib.symbols.wgpuRenderPassEncoderBeginPipelineStatisticsQuery(
    renderPassEncoder,
    querySet,
    queryIndex,
  );

export const renderPassEncoderDraw = (
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

export const renderPassEncoderDrawIndexed = (
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

export const renderPassEncoderDrawIndexedIndirect = (
  renderPassEncoder: Deno.PointerValue,
  indirectBuffer: Deno.PointerValue,
  indirectOffset: number | bigint,
): void =>
  lib.symbols.wgpuRenderPassEncoderDrawIndexedIndirect(
    renderPassEncoder,
    indirectBuffer,
    indirectOffset,
  );

export const renderPassEncoderDrawIndirect = (
  renderPassEncoder: Deno.PointerValue,
  indirectBuffer: Deno.PointerValue,
  indirectOffset: number | bigint,
): void =>
  lib.symbols.wgpuRenderPassEncoderDrawIndirect(
    renderPassEncoder,
    indirectBuffer,
    indirectOffset,
  );

export const renderPassEncoderEnd = (
  renderPassEncoder: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderPassEncoderEnd(
    renderPassEncoder,
  );

export const renderPassEncoderEndOcclusionQuery = (
  renderPassEncoder: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderPassEncoderEndOcclusionQuery(
    renderPassEncoder,
  );

export const renderPassEncoderEndPipelineStatisticsQuery = (
  renderPassEncoder: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderPassEncoderEndPipelineStatisticsQuery(
    renderPassEncoder,
  );

export const renderPassEncoderExecuteBundles = (
  renderPassEncoder: Deno.PointerValue,
  bundleCount: number | bigint,
  bundles: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderPassEncoderExecuteBundles(
    renderPassEncoder,
    bundleCount,
    bundles,
  );

export const renderPassEncoderInsertDebugMarker = (
  renderPassEncoder: Deno.PointerValue,
  markerLabel: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderPassEncoderInsertDebugMarker(
    renderPassEncoder,
    markerLabel,
  );

export const renderPassEncoderPopDebugGroup = (
  renderPassEncoder: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderPassEncoderPopDebugGroup(
    renderPassEncoder,
  );

export const renderPassEncoderPushDebugGroup = (
  renderPassEncoder: Deno.PointerValue,
  groupLabel: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderPassEncoderPushDebugGroup(
    renderPassEncoder,
    groupLabel,
  );

export const renderPassEncoderSetBindGroup = (
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

export const renderPassEncoderSetBlendConstant = (
  renderPassEncoder: Deno.PointerValue,
  color: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderPassEncoderSetBlendConstant(
    renderPassEncoder,
    color,
  );

export const renderPassEncoderSetIndexBuffer = (
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

export const renderPassEncoderSetLabel = (
  renderPassEncoder: Deno.PointerValue,
  label: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderPassEncoderSetLabel(
    renderPassEncoder,
    label,
  );

export const renderPassEncoderSetPipeline = (
  renderPassEncoder: Deno.PointerValue,
  pipeline: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderPassEncoderSetPipeline(
    renderPassEncoder,
    pipeline,
  );

export const renderPassEncoderSetScissorRect = (
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

export const renderPassEncoderSetStencilReference = (
  renderPassEncoder: Deno.PointerValue,
  reference: number,
): void =>
  lib.symbols.wgpuRenderPassEncoderSetStencilReference(
    renderPassEncoder,
    reference,
  );

export const renderPassEncoderSetVertexBuffer = (
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

export const renderPassEncoderSetViewport = (
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

export const renderPassEncoderReference = (
  renderPassEncoder: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderPassEncoderReference(
    renderPassEncoder,
  );

export const renderPassEncoderRelease = (
  renderPassEncoder: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderPassEncoderRelease(
    renderPassEncoder,
  );

export const renderPipelineGetBindGroupLayout = (
  renderPipeline: Deno.PointerValue,
  groupIndex: number,
): Deno.PointerValue =>
  lib.symbols.wgpuRenderPipelineGetBindGroupLayout(
    renderPipeline,
    groupIndex,
  );

export const renderPipelineSetLabel = (
  renderPipeline: Deno.PointerValue,
  label: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderPipelineSetLabel(
    renderPipeline,
    label,
  );

export const renderPipelineReference = (
  renderPipeline: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderPipelineReference(
    renderPipeline,
  );

export const renderPipelineRelease = (
  renderPipeline: Deno.PointerValue,
): void =>
  lib.symbols.wgpuRenderPipelineRelease(
    renderPipeline,
  );

export const samplerSetLabel = (
  sampler: Deno.PointerValue,
  label: Deno.PointerValue,
): void =>
  lib.symbols.wgpuSamplerSetLabel(
    sampler,
    label,
  );

export const samplerReference = (
  sampler: Deno.PointerValue,
): void =>
  lib.symbols.wgpuSamplerReference(
    sampler,
  );

export const samplerRelease = (
  sampler: Deno.PointerValue,
): void =>
  lib.symbols.wgpuSamplerRelease(
    sampler,
  );

export const shaderModuleGetCompilationInfo = (
  shaderModule: Deno.PointerValue,
  callback: Deno.PointerValue,
  userdata: Deno.PointerValue,
): void =>
  lib.symbols.wgpuShaderModuleGetCompilationInfo(
    shaderModule,
    callback,
    userdata,
  );

export const shaderModuleSetLabel = (
  shaderModule: Deno.PointerValue,
  label: Deno.PointerValue,
): void =>
  lib.symbols.wgpuShaderModuleSetLabel(
    shaderModule,
    label,
  );

export const shaderModuleReference = (
  shaderModule: Deno.PointerValue,
): void =>
  lib.symbols.wgpuShaderModuleReference(
    shaderModule,
  );

export const shaderModuleRelease = (
  shaderModule: Deno.PointerValue,
): void =>
  lib.symbols.wgpuShaderModuleRelease(
    shaderModule,
  );

export const surfaceGetPreferredFormat = (
  surface: Deno.PointerValue,
  adapter: Deno.PointerValue,
): number =>
  lib.symbols.wgpuSurfaceGetPreferredFormat(
    surface,
    adapter,
  );

export const surfaceReference = (
  surface: Deno.PointerValue,
): void =>
  lib.symbols.wgpuSurfaceReference(
    surface,
  );

export const surfaceRelease = (
  surface: Deno.PointerValue,
): void =>
  lib.symbols.wgpuSurfaceRelease(
    surface,
  );

export const swapChainGetCurrentTextureView = (
  swapChain: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuSwapChainGetCurrentTextureView(
    swapChain,
  );

export const swapChainPresent = (
  swapChain: Deno.PointerValue,
): void =>
  lib.symbols.wgpuSwapChainPresent(
    swapChain,
  );

export const swapChainReference = (
  swapChain: Deno.PointerValue,
): void =>
  lib.symbols.wgpuSwapChainReference(
    swapChain,
  );

export const swapChainRelease = (
  swapChain: Deno.PointerValue,
): void =>
  lib.symbols.wgpuSwapChainRelease(
    swapChain,
  );

export const textureCreateView = (
  texture: Deno.PointerValue,
  descriptor: Deno.PointerValue,
): Deno.PointerValue =>
  lib.symbols.wgpuTextureCreateView(
    texture,
    descriptor,
  );

export const textureDestroy = (
  texture: Deno.PointerValue,
): void =>
  lib.symbols.wgpuTextureDestroy(
    texture,
  );

export const textureGetDepthOrArrayLayers = (
  texture: Deno.PointerValue,
): number =>
  lib.symbols.wgpuTextureGetDepthOrArrayLayers(
    texture,
  );

export const textureGetDimension = (
  texture: Deno.PointerValue,
): number =>
  lib.symbols.wgpuTextureGetDimension(
    texture,
  );

export const textureGetFormat = (
  texture: Deno.PointerValue,
): number =>
  lib.symbols.wgpuTextureGetFormat(
    texture,
  );

export const textureGetHeight = (
  texture: Deno.PointerValue,
): number =>
  lib.symbols.wgpuTextureGetHeight(
    texture,
  );

export const textureGetMipLevelCount = (
  texture: Deno.PointerValue,
): number =>
  lib.symbols.wgpuTextureGetMipLevelCount(
    texture,
  );

export const textureGetSampleCount = (
  texture: Deno.PointerValue,
): number =>
  lib.symbols.wgpuTextureGetSampleCount(
    texture,
  );

export const textureGetUsage = (
  texture: Deno.PointerValue,
): number =>
  lib.symbols.wgpuTextureGetUsage(
    texture,
  );

export const textureGetWidth = (
  texture: Deno.PointerValue,
): number =>
  lib.symbols.wgpuTextureGetWidth(
    texture,
  );

export const textureSetLabel = (
  texture: Deno.PointerValue,
  label: Deno.PointerValue,
): void =>
  lib.symbols.wgpuTextureSetLabel(
    texture,
    label,
  );

export const textureReference = (
  texture: Deno.PointerValue,
): void =>
  lib.symbols.wgpuTextureReference(
    texture,
  );

export const textureRelease = (
  texture: Deno.PointerValue,
): void =>
  lib.symbols.wgpuTextureRelease(
    texture,
  );

export const textureViewSetLabel = (
  textureView: Deno.PointerValue,
  label: Deno.PointerValue,
): void =>
  lib.symbols.wgpuTextureViewSetLabel(
    textureView,
    label,
  );

export const textureViewReference = (
  textureView: Deno.PointerValue,
): void =>
  lib.symbols.wgpuTextureViewReference(
    textureView,
  );

export const textureViewRelease = (
  textureView: Deno.PointerValue,
): void =>
  lib.symbols.wgpuTextureViewRelease(
    textureView,
  );

export const generateReport = (
  instance: Deno.PointerValue,
  report: Deno.PointerValue,
): void =>
  lib.symbols.wgpuGenerateReport(
    instance,
    report,
  );

export const instanceEnumerateAdapters = (
  instance: Deno.PointerValue,
  options: Deno.PointerValue,
  adapters: Deno.PointerValue,
): number | bigint =>
  lib.symbols.wgpuInstanceEnumerateAdapters(
    instance,
    options,
    adapters,
  );

export const queueSubmitForIndex = (
  queue: Deno.PointerValue,
  commandCount: number | bigint,
  commands: Deno.PointerValue,
): number | bigint =>
  lib.symbols.wgpuQueueSubmitForIndex(
    queue,
    commandCount,
    commands,
  );

export const devicePoll = (
  device: Deno.PointerValue,
  wait: boolean,
  wrappedSubmissionIndex: Deno.PointerValue,
): boolean =>
  lib.symbols.wgpuDevicePoll(
    device,
    wait ? 1 : 0,
    wrappedSubmissionIndex,
  ) == 1;

export const setLogCallback = (
  callback: Deno.PointerValue,
  userdata: Deno.PointerValue,
): void =>
  lib.symbols.wgpuSetLogCallback(
    callback,
    userdata,
  );

export const setLogLevel = (
  level: number,
): void =>
  lib.symbols.wgpuSetLogLevel(
    level,
  );

export const getVersion = (
): number =>
  lib.symbols.wgpuGetVersion(
  );

export const surfaceGetCapabilities = (
  surface: Deno.PointerValue,
  adapter: Deno.PointerValue,
  capabilities: Deno.PointerValue,
): void =>
  lib.symbols.wgpuSurfaceGetCapabilities(
    surface,
    adapter,
    capabilities,
  );

export const renderPassEncoderSetPushConstants = (
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

export const renderPassEncoderMultiDrawIndirect = (
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

export const renderPassEncoderMultiDrawIndexedIndirect = (
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

export const renderPassEncoderMultiDrawIndirectCount = (
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

export const renderPassEncoderMultiDrawIndexedIndirectCount = (
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

