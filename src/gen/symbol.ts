import { prepare } from "../util/prepare.ts";
const libPath = await prepare();
export default Deno.dlopen(libPath, {
  "wgpuCreateInstance": { "result": "pointer", "parameters": ["pointer"] },
  "wgpuGetProcAddress": {
    "result": "pointer",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuAdapterEnumerateFeatures": {
    "result": "u64",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuAdapterGetLimits": {
    "result": "u8",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuAdapterGetProperties": {
    "result": "void",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuAdapterHasFeature": { "result": "u8", "parameters": ["pointer", "u32"] },
  "wgpuAdapterRequestDevice": {
    "result": "void",
    "parameters": ["pointer", "pointer", "pointer", "pointer"],
  },
  "wgpuAdapterReference": { "result": "void", "parameters": ["pointer"] },
  "wgpuAdapterRelease": { "result": "void", "parameters": ["pointer"] },
  "wgpuBindGroupSetLabel": {
    "result": "void",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuBindGroupReference": { "result": "void", "parameters": ["pointer"] },
  "wgpuBindGroupRelease": { "result": "void", "parameters": ["pointer"] },
  "wgpuBindGroupLayoutSetLabel": {
    "result": "void",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuBindGroupLayoutReference": {
    "result": "void",
    "parameters": ["pointer"],
  },
  "wgpuBindGroupLayoutRelease": { "result": "void", "parameters": ["pointer"] },
  "wgpuBufferDestroy": { "result": "void", "parameters": ["pointer"] },
  "wgpuBufferGetConstMappedRange": {
    "result": "pointer",
    "parameters": ["pointer", "u64", "u64"],
  },
  "wgpuBufferGetMapState": { "result": "u32", "parameters": ["pointer"] },
  "wgpuBufferGetMappedRange": {
    "result": "pointer",
    "parameters": ["pointer", "u64", "u64"],
  },
  "wgpuBufferGetSize": { "result": "u64", "parameters": ["pointer"] },
  "wgpuBufferGetUsage": { "result": "u32", "parameters": ["pointer"] },
  "wgpuBufferMapAsync": {
    "result": "void",
    "parameters": ["pointer", "u32", "u64", "u64", "pointer", "pointer"],
  },
  "wgpuBufferSetLabel": {
    "result": "void",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuBufferUnmap": { "result": "void", "parameters": ["pointer"] },
  "wgpuBufferReference": { "result": "void", "parameters": ["pointer"] },
  "wgpuBufferRelease": { "result": "void", "parameters": ["pointer"] },
  "wgpuCommandBufferSetLabel": {
    "result": "void",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuCommandBufferReference": { "result": "void", "parameters": ["pointer"] },
  "wgpuCommandBufferRelease": { "result": "void", "parameters": ["pointer"] },
  "wgpuCommandEncoderBeginComputePass": {
    "result": "pointer",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuCommandEncoderBeginRenderPass": {
    "result": "pointer",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuCommandEncoderClearBuffer": {
    "result": "void",
    "parameters": ["pointer", "pointer", "u64", "u64"],
  },
  "wgpuCommandEncoderCopyBufferToBuffer": {
    "result": "void",
    "parameters": ["pointer", "pointer", "u64", "pointer", "u64", "u64"],
  },
  "wgpuCommandEncoderCopyBufferToTexture": {
    "result": "void",
    "parameters": ["pointer", "pointer", "pointer", "pointer"],
  },
  "wgpuCommandEncoderCopyTextureToBuffer": {
    "result": "void",
    "parameters": ["pointer", "pointer", "pointer", "pointer"],
  },
  "wgpuCommandEncoderCopyTextureToTexture": {
    "result": "void",
    "parameters": ["pointer", "pointer", "pointer", "pointer"],
  },
  "wgpuCommandEncoderFinish": {
    "result": "pointer",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuCommandEncoderInsertDebugMarker": {
    "result": "void",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuCommandEncoderPopDebugGroup": {
    "result": "void",
    "parameters": ["pointer"],
  },
  "wgpuCommandEncoderPushDebugGroup": {
    "result": "void",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuCommandEncoderResolveQuerySet": {
    "result": "void",
    "parameters": ["pointer", "pointer", "u32", "u32", "pointer", "u64"],
  },
  "wgpuCommandEncoderSetLabel": {
    "result": "void",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuCommandEncoderWriteTimestamp": {
    "result": "void",
    "parameters": ["pointer", "pointer", "u32"],
  },
  "wgpuCommandEncoderReference": {
    "result": "void",
    "parameters": ["pointer"],
  },
  "wgpuCommandEncoderRelease": { "result": "void", "parameters": ["pointer"] },
  "wgpuComputePassEncoderBeginPipelineStatisticsQuery": {
    "result": "void",
    "parameters": ["pointer", "pointer", "u32"],
  },
  "wgpuComputePassEncoderDispatchWorkgroups": {
    "result": "void",
    "parameters": ["pointer", "u32", "u32", "u32"],
  },
  "wgpuComputePassEncoderDispatchWorkgroupsIndirect": {
    "result": "void",
    "parameters": ["pointer", "pointer", "u64"],
  },
  "wgpuComputePassEncoderEnd": { "result": "void", "parameters": ["pointer"] },
  "wgpuComputePassEncoderEndPipelineStatisticsQuery": {
    "result": "void",
    "parameters": ["pointer"],
  },
  "wgpuComputePassEncoderInsertDebugMarker": {
    "result": "void",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuComputePassEncoderPopDebugGroup": {
    "result": "void",
    "parameters": ["pointer"],
  },
  "wgpuComputePassEncoderPushDebugGroup": {
    "result": "void",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuComputePassEncoderSetBindGroup": {
    "result": "void",
    "parameters": ["pointer", "u32", "pointer", "u64", "pointer"],
  },
  "wgpuComputePassEncoderSetLabel": {
    "result": "void",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuComputePassEncoderSetPipeline": {
    "result": "void",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuComputePassEncoderReference": {
    "result": "void",
    "parameters": ["pointer"],
  },
  "wgpuComputePassEncoderRelease": {
    "result": "void",
    "parameters": ["pointer"],
  },
  "wgpuComputePipelineGetBindGroupLayout": {
    "result": "pointer",
    "parameters": ["pointer", "u32"],
  },
  "wgpuComputePipelineSetLabel": {
    "result": "void",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuComputePipelineReference": {
    "result": "void",
    "parameters": ["pointer"],
  },
  "wgpuComputePipelineRelease": { "result": "void", "parameters": ["pointer"] },
  "wgpuDeviceCreateBindGroup": {
    "result": "pointer",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuDeviceCreateBindGroupLayout": {
    "result": "pointer",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuDeviceCreateBuffer": {
    "result": "pointer",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuDeviceCreateCommandEncoder": {
    "result": "pointer",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuDeviceCreateComputePipeline": {
    "result": "pointer",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuDeviceCreateComputePipelineAsync": {
    "result": "void",
    "parameters": ["pointer", "pointer", "pointer", "pointer"],
  },
  "wgpuDeviceCreatePipelineLayout": {
    "result": "pointer",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuDeviceCreateQuerySet": {
    "result": "pointer",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuDeviceCreateRenderBundleEncoder": {
    "result": "pointer",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuDeviceCreateRenderPipeline": {
    "result": "pointer",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuDeviceCreateRenderPipelineAsync": {
    "result": "void",
    "parameters": ["pointer", "pointer", "pointer", "pointer"],
  },
  "wgpuDeviceCreateSampler": {
    "result": "pointer",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuDeviceCreateShaderModule": {
    "result": "pointer",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuDeviceCreateSwapChain": {
    "result": "pointer",
    "parameters": ["pointer", "pointer", "pointer"],
  },
  "wgpuDeviceCreateTexture": {
    "result": "pointer",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuDeviceDestroy": { "result": "void", "parameters": ["pointer"] },
  "wgpuDeviceEnumerateFeatures": {
    "result": "u64",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuDeviceGetLimits": {
    "result": "u8",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuDeviceGetQueue": { "result": "pointer", "parameters": ["pointer"] },
  "wgpuDeviceHasFeature": { "result": "u8", "parameters": ["pointer", "u32"] },
  "wgpuDevicePopErrorScope": {
    "result": "void",
    "parameters": ["pointer", "pointer", "pointer"],
  },
  "wgpuDevicePushErrorScope": {
    "result": "void",
    "parameters": ["pointer", "u32"],
  },
  "wgpuDeviceSetLabel": {
    "result": "void",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuDeviceSetUncapturedErrorCallback": {
    "result": "void",
    "parameters": ["pointer", "pointer", "pointer"],
  },
  "wgpuDeviceReference": { "result": "void", "parameters": ["pointer"] },
  "wgpuDeviceRelease": { "result": "void", "parameters": ["pointer"] },
  "wgpuInstanceCreateSurface": {
    "result": "pointer",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuInstanceProcessEvents": { "result": "void", "parameters": ["pointer"] },
  "wgpuInstanceRequestAdapter": {
    "result": "void",
    "parameters": ["pointer", "pointer", "pointer", "pointer"],
  },
  "wgpuInstanceReference": { "result": "void", "parameters": ["pointer"] },
  "wgpuInstanceRelease": { "result": "void", "parameters": ["pointer"] },
  "wgpuPipelineLayoutSetLabel": {
    "result": "void",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuPipelineLayoutReference": {
    "result": "void",
    "parameters": ["pointer"],
  },
  "wgpuPipelineLayoutRelease": { "result": "void", "parameters": ["pointer"] },
  "wgpuQuerySetDestroy": { "result": "void", "parameters": ["pointer"] },
  "wgpuQuerySetGetCount": { "result": "u32", "parameters": ["pointer"] },
  "wgpuQuerySetGetType": { "result": "u32", "parameters": ["pointer"] },
  "wgpuQuerySetSetLabel": {
    "result": "void",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuQuerySetReference": { "result": "void", "parameters": ["pointer"] },
  "wgpuQuerySetRelease": { "result": "void", "parameters": ["pointer"] },
  "wgpuQueueOnSubmittedWorkDone": {
    "result": "void",
    "parameters": ["pointer", "pointer", "pointer"],
  },
  "wgpuQueueSetLabel": {
    "result": "void",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuQueueSubmit": {
    "result": "void",
    "parameters": ["pointer", "u64", "pointer"],
  },
  "wgpuQueueWriteBuffer": {
    "result": "void",
    "parameters": ["pointer", "pointer", "u64", "pointer", "u64"],
  },
  "wgpuQueueWriteTexture": {
    "result": "void",
    "parameters": [
      "pointer",
      "pointer",
      "pointer",
      "u64",
      "pointer",
      "pointer",
    ],
  },
  "wgpuQueueReference": { "result": "void", "parameters": ["pointer"] },
  "wgpuQueueRelease": { "result": "void", "parameters": ["pointer"] },
  "wgpuRenderBundleSetLabel": {
    "result": "void",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuRenderBundleReference": { "result": "void", "parameters": ["pointer"] },
  "wgpuRenderBundleRelease": { "result": "void", "parameters": ["pointer"] },
  "wgpuRenderBundleEncoderDraw": {
    "result": "void",
    "parameters": ["pointer", "u32", "u32", "u32", "u32"],
  },
  "wgpuRenderBundleEncoderDrawIndexed": {
    "result": "void",
    "parameters": ["pointer", "u32", "u32", "u32", "i32", "u32"],
  },
  "wgpuRenderBundleEncoderDrawIndexedIndirect": {
    "result": "void",
    "parameters": ["pointer", "pointer", "u64"],
  },
  "wgpuRenderBundleEncoderDrawIndirect": {
    "result": "void",
    "parameters": ["pointer", "pointer", "u64"],
  },
  "wgpuRenderBundleEncoderFinish": {
    "result": "pointer",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuRenderBundleEncoderInsertDebugMarker": {
    "result": "void",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuRenderBundleEncoderPopDebugGroup": {
    "result": "void",
    "parameters": ["pointer"],
  },
  "wgpuRenderBundleEncoderPushDebugGroup": {
    "result": "void",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuRenderBundleEncoderSetBindGroup": {
    "result": "void",
    "parameters": ["pointer", "u32", "pointer", "u64", "pointer"],
  },
  "wgpuRenderBundleEncoderSetIndexBuffer": {
    "result": "void",
    "parameters": ["pointer", "pointer", "u32", "u64", "u64"],
  },
  "wgpuRenderBundleEncoderSetLabel": {
    "result": "void",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuRenderBundleEncoderSetPipeline": {
    "result": "void",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuRenderBundleEncoderSetVertexBuffer": {
    "result": "void",
    "parameters": ["pointer", "u32", "pointer", "u64", "u64"],
  },
  "wgpuRenderBundleEncoderReference": {
    "result": "void",
    "parameters": ["pointer"],
  },
  "wgpuRenderBundleEncoderRelease": {
    "result": "void",
    "parameters": ["pointer"],
  },
  "wgpuRenderPassEncoderBeginOcclusionQuery": {
    "result": "void",
    "parameters": ["pointer", "u32"],
  },
  "wgpuRenderPassEncoderBeginPipelineStatisticsQuery": {
    "result": "void",
    "parameters": ["pointer", "pointer", "u32"],
  },
  "wgpuRenderPassEncoderDraw": {
    "result": "void",
    "parameters": ["pointer", "u32", "u32", "u32", "u32"],
  },
  "wgpuRenderPassEncoderDrawIndexed": {
    "result": "void",
    "parameters": ["pointer", "u32", "u32", "u32", "i32", "u32"],
  },
  "wgpuRenderPassEncoderDrawIndexedIndirect": {
    "result": "void",
    "parameters": ["pointer", "pointer", "u64"],
  },
  "wgpuRenderPassEncoderDrawIndirect": {
    "result": "void",
    "parameters": ["pointer", "pointer", "u64"],
  },
  "wgpuRenderPassEncoderEnd": { "result": "void", "parameters": ["pointer"] },
  "wgpuRenderPassEncoderEndOcclusionQuery": {
    "result": "void",
    "parameters": ["pointer"],
  },
  "wgpuRenderPassEncoderEndPipelineStatisticsQuery": {
    "result": "void",
    "parameters": ["pointer"],
  },
  "wgpuRenderPassEncoderExecuteBundles": {
    "result": "void",
    "parameters": ["pointer", "u64", "pointer"],
  },
  "wgpuRenderPassEncoderInsertDebugMarker": {
    "result": "void",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuRenderPassEncoderPopDebugGroup": {
    "result": "void",
    "parameters": ["pointer"],
  },
  "wgpuRenderPassEncoderPushDebugGroup": {
    "result": "void",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuRenderPassEncoderSetBindGroup": {
    "result": "void",
    "parameters": ["pointer", "u32", "pointer", "u64", "pointer"],
  },
  "wgpuRenderPassEncoderSetBlendConstant": {
    "result": "void",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuRenderPassEncoderSetIndexBuffer": {
    "result": "void",
    "parameters": ["pointer", "pointer", "u32", "u64", "u64"],
  },
  "wgpuRenderPassEncoderSetLabel": {
    "result": "void",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuRenderPassEncoderSetPipeline": {
    "result": "void",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuRenderPassEncoderSetScissorRect": {
    "result": "void",
    "parameters": ["pointer", "u32", "u32", "u32", "u32"],
  },
  "wgpuRenderPassEncoderSetStencilReference": {
    "result": "void",
    "parameters": ["pointer", "u32"],
  },
  "wgpuRenderPassEncoderSetVertexBuffer": {
    "result": "void",
    "parameters": ["pointer", "u32", "pointer", "u64", "u64"],
  },
  "wgpuRenderPassEncoderSetViewport": {
    "result": "void",
    "parameters": ["pointer", "f32", "f32", "f32", "f32", "f32", "f32"],
  },
  "wgpuRenderPassEncoderReference": {
    "result": "void",
    "parameters": ["pointer"],
  },
  "wgpuRenderPassEncoderRelease": {
    "result": "void",
    "parameters": ["pointer"],
  },
  "wgpuRenderPipelineGetBindGroupLayout": {
    "result": "pointer",
    "parameters": ["pointer", "u32"],
  },
  "wgpuRenderPipelineSetLabel": {
    "result": "void",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuRenderPipelineReference": {
    "result": "void",
    "parameters": ["pointer"],
  },
  "wgpuRenderPipelineRelease": { "result": "void", "parameters": ["pointer"] },
  "wgpuSamplerSetLabel": {
    "result": "void",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuSamplerReference": { "result": "void", "parameters": ["pointer"] },
  "wgpuSamplerRelease": { "result": "void", "parameters": ["pointer"] },
  "wgpuShaderModuleGetCompilationInfo": {
    "result": "void",
    "parameters": ["pointer", "pointer", "pointer"],
  },
  "wgpuShaderModuleSetLabel": {
    "result": "void",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuShaderModuleReference": { "result": "void", "parameters": ["pointer"] },
  "wgpuShaderModuleRelease": { "result": "void", "parameters": ["pointer"] },
  "wgpuSurfaceGetPreferredFormat": {
    "result": "u32",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuSurfaceReference": { "result": "void", "parameters": ["pointer"] },
  "wgpuSurfaceRelease": { "result": "void", "parameters": ["pointer"] },
  "wgpuSwapChainGetCurrentTextureView": {
    "result": "pointer",
    "parameters": ["pointer"],
  },
  "wgpuSwapChainPresent": { "result": "void", "parameters": ["pointer"] },
  "wgpuSwapChainReference": { "result": "void", "parameters": ["pointer"] },
  "wgpuSwapChainRelease": { "result": "void", "parameters": ["pointer"] },
  "wgpuTextureCreateView": {
    "result": "pointer",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuTextureDestroy": { "result": "void", "parameters": ["pointer"] },
  "wgpuTextureGetDepthOrArrayLayers": {
    "result": "u32",
    "parameters": ["pointer"],
  },
  "wgpuTextureGetDimension": { "result": "u32", "parameters": ["pointer"] },
  "wgpuTextureGetFormat": { "result": "u32", "parameters": ["pointer"] },
  "wgpuTextureGetHeight": { "result": "u32", "parameters": ["pointer"] },
  "wgpuTextureGetMipLevelCount": { "result": "u32", "parameters": ["pointer"] },
  "wgpuTextureGetSampleCount": { "result": "u32", "parameters": ["pointer"] },
  "wgpuTextureGetUsage": { "result": "u32", "parameters": ["pointer"] },
  "wgpuTextureGetWidth": { "result": "u32", "parameters": ["pointer"] },
  "wgpuTextureSetLabel": {
    "result": "void",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuTextureReference": { "result": "void", "parameters": ["pointer"] },
  "wgpuTextureRelease": { "result": "void", "parameters": ["pointer"] },
  "wgpuTextureViewSetLabel": {
    "result": "void",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuTextureViewReference": { "result": "void", "parameters": ["pointer"] },
  "wgpuTextureViewRelease": { "result": "void", "parameters": ["pointer"] },
  "wgpuGenerateReport": {
    "result": "void",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuInstanceEnumerateAdapters": {
    "result": "u64",
    "parameters": ["pointer", "pointer", "pointer"],
  },
  "wgpuQueueSubmitForIndex": {
    "result": "u64",
    "parameters": ["pointer", "u64", "pointer"],
  },
  "wgpuDevicePoll": {
    "result": "u8",
    "parameters": ["pointer", "u8", "pointer"],
  },
  "wgpuSetLogCallback": {
    "result": "void",
    "parameters": ["pointer", "pointer"],
  },
  "wgpuSetLogLevel": { "result": "void", "parameters": ["u32"] },
  "wgpuGetVersion": { "result": "u32", "parameters": [] },
  "wgpuSurfaceGetCapabilities": {
    "result": "void",
    "parameters": ["pointer", "pointer", "pointer"],
  },
  "wgpuRenderPassEncoderSetPushConstants": {
    "result": "void",
    "parameters": ["pointer", "u32", "u32", "u32", "pointer"],
  },
  "wgpuRenderPassEncoderMultiDrawIndirect": {
    "result": "void",
    "parameters": ["pointer", "pointer", "u64", "u32"],
  },
  "wgpuRenderPassEncoderMultiDrawIndexedIndirect": {
    "result": "void",
    "parameters": ["pointer", "pointer", "u64", "u32"],
  },
  "wgpuRenderPassEncoderMultiDrawIndirectCount": {
    "result": "void",
    "parameters": ["pointer", "pointer", "u64", "pointer", "u64", "u32"],
  },
  "wgpuRenderPassEncoderMultiDrawIndexedIndirectCount": {
    "result": "void",
    "parameters": ["pointer", "pointer", "u64", "pointer", "u64", "u32"],
  },
});
