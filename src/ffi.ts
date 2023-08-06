import { prepare } from "./prepare.ts";

const libPath = await prepare();

export const lib = Deno.dlopen(libPath, {
  "wgpuCreateInstance": {
    "parameters": [
      "pointer"
    ],
    "result": "pointer"
  },
  "wgpuGetProcAddress": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "pointer"
  },
  "wgpuAdapterEnumerateFeatures": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "u64"
  },
  "wgpuAdapterGetLimits": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "i8"
  },
  "wgpuAdapterGetProperties": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuAdapterHasFeature": {
    "parameters": [
      "pointer",
      "u32"
    ],
    "result": "i8"
  },
  "wgpuAdapterRequestDevice": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuAdapterReference": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuAdapterRelease": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuBindGroupSetLabel": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuBindGroupReference": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuBindGroupRelease": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuBindGroupLayoutSetLabel": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuBindGroupLayoutReference": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuBindGroupLayoutRelease": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuBufferDestroy": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuBufferGetConstMappedRange": {
    "parameters": [
      "pointer",
      "u64",
      "u64"
    ],
    "result": "pointer"
  },
  "wgpuBufferGetMapState": {
    "parameters": [
      "pointer"
    ],
    "result": "u32"
  },
  "wgpuBufferGetMappedRange": {
    "parameters": [
      "pointer",
      "u64",
      "u64"
    ],
    "result": "pointer"
  },
  "wgpuBufferGetSize": {
    "parameters": [
      "pointer"
    ],
    "result": "u64"
  },
  "wgpuBufferGetUsage": {
    "parameters": [
      "pointer"
    ],
    "result": "u32"
  },
  "wgpuBufferMapAsync": {
    "parameters": [
      "pointer",
      "u32",
      "u64",
      "u64",
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuBufferSetLabel": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuBufferUnmap": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuBufferReference": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuBufferRelease": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuCommandBufferSetLabel": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuCommandBufferReference": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuCommandBufferRelease": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuCommandEncoderBeginComputePass": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "pointer"
  },
  "wgpuCommandEncoderBeginRenderPass": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "pointer"
  },
  "wgpuCommandEncoderClearBuffer": {
    "parameters": [
      "pointer",
      "pointer",
      "u64",
      "u64"
    ],
    "result": "void"
  },
  "wgpuCommandEncoderCopyBufferToBuffer": {
    "parameters": [
      "pointer",
      "pointer",
      "u64",
      "pointer",
      "u64",
      "u64"
    ],
    "result": "void"
  },
  "wgpuCommandEncoderCopyBufferToTexture": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuCommandEncoderCopyTextureToBuffer": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuCommandEncoderCopyTextureToTexture": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuCommandEncoderFinish": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "pointer"
  },
  "wgpuCommandEncoderInsertDebugMarker": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuCommandEncoderPopDebugGroup": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuCommandEncoderPushDebugGroup": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuCommandEncoderResolveQuerySet": {
    "parameters": [
      "pointer",
      "pointer",
      "u32",
      "u32",
      "pointer",
      "u64"
    ],
    "result": "void"
  },
  "wgpuCommandEncoderSetLabel": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuCommandEncoderWriteTimestamp": {
    "parameters": [
      "pointer",
      "pointer",
      "u32"
    ],
    "result": "void"
  },
  "wgpuCommandEncoderReference": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuCommandEncoderRelease": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuComputePassEncoderBeginPipelineStatisticsQuery": {
    "parameters": [
      "pointer",
      "pointer",
      "u32"
    ],
    "result": "void"
  },
  "wgpuComputePassEncoderDispatchWorkgroups": {
    "parameters": [
      "pointer",
      "u32",
      "u32",
      "u32"
    ],
    "result": "void"
  },
  "wgpuComputePassEncoderDispatchWorkgroupsIndirect": {
    "parameters": [
      "pointer",
      "pointer",
      "u64"
    ],
    "result": "void"
  },
  "wgpuComputePassEncoderEnd": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuComputePassEncoderEndPipelineStatisticsQuery": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuComputePassEncoderInsertDebugMarker": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuComputePassEncoderPopDebugGroup": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuComputePassEncoderPushDebugGroup": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuComputePassEncoderSetBindGroup": {
    "parameters": [
      "pointer",
      "u32",
      "pointer",
      "u64",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuComputePassEncoderSetLabel": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuComputePassEncoderSetPipeline": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuComputePassEncoderReference": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuComputePassEncoderRelease": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuComputePipelineGetBindGroupLayout": {
    "parameters": [
      "pointer",
      "u32"
    ],
    "result": "pointer"
  },
  "wgpuComputePipelineSetLabel": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuComputePipelineReference": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuComputePipelineRelease": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuDeviceCreateBindGroup": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "pointer"
  },
  "wgpuDeviceCreateBindGroupLayout": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "pointer"
  },
  "wgpuDeviceCreateBuffer": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "pointer"
  },
  "wgpuDeviceCreateCommandEncoder": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "pointer"
  },
  "wgpuDeviceCreateComputePipeline": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "pointer"
  },
  "wgpuDeviceCreateComputePipelineAsync": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuDeviceCreatePipelineLayout": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "pointer"
  },
  "wgpuDeviceCreateQuerySet": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "pointer"
  },
  "wgpuDeviceCreateRenderBundleEncoder": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "pointer"
  },
  "wgpuDeviceCreateRenderPipeline": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "pointer"
  },
  "wgpuDeviceCreateRenderPipelineAsync": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuDeviceCreateSampler": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "pointer"
  },
  "wgpuDeviceCreateShaderModule": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "pointer"
  },
  "wgpuDeviceCreateSwapChain": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer"
    ],
    "result": "pointer"
  },
  "wgpuDeviceCreateTexture": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "pointer"
  },
  "wgpuDeviceDestroy": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuDeviceEnumerateFeatures": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "u64"
  },
  "wgpuDeviceGetLimits": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "i8"
  },
  "wgpuDeviceGetQueue": {
    "parameters": [
      "pointer"
    ],
    "result": "pointer"
  },
  "wgpuDeviceHasFeature": {
    "parameters": [
      "pointer",
      "u32"
    ],
    "result": "i8"
  },
  "wgpuDevicePopErrorScope": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuDevicePushErrorScope": {
    "parameters": [
      "pointer",
      "u32"
    ],
    "result": "void"
  },
  "wgpuDeviceSetLabel": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuDeviceSetUncapturedErrorCallback": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuDeviceReference": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuDeviceRelease": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuInstanceCreateSurface": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "pointer"
  },
  "wgpuInstanceProcessEvents": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuInstanceRequestAdapter": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuInstanceReference": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuInstanceRelease": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuPipelineLayoutSetLabel": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuPipelineLayoutReference": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuPipelineLayoutRelease": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuQuerySetDestroy": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuQuerySetGetCount": {
    "parameters": [
      "pointer"
    ],
    "result": "u32"
  },
  "wgpuQuerySetGetType": {
    "parameters": [
      "pointer"
    ],
    "result": "u32"
  },
  "wgpuQuerySetSetLabel": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuQuerySetReference": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuQuerySetRelease": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuQueueOnSubmittedWorkDone": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuQueueSetLabel": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuQueueSubmit": {
    "parameters": [
      "pointer",
      "u64",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuQueueWriteBuffer": {
    "parameters": [
      "pointer",
      "pointer",
      "u64",
      "pointer",
      "u64"
    ],
    "result": "void"
  },
  "wgpuQueueWriteTexture": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer",
      "u64",
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuQueueReference": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuQueueRelease": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuRenderBundleSetLabel": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuRenderBundleReference": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuRenderBundleRelease": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuRenderBundleEncoderDraw": {
    "parameters": [
      "pointer",
      "u32",
      "u32",
      "u32",
      "u32"
    ],
    "result": "void"
  },
  "wgpuRenderBundleEncoderDrawIndexed": {
    "parameters": [
      "pointer",
      "u32",
      "u32",
      "u32",
      "u32",
      "u32"
    ],
    "result": "void"
  },
  "wgpuRenderBundleEncoderDrawIndexedIndirect": {
    "parameters": [
      "pointer",
      "pointer",
      "u64"
    ],
    "result": "void"
  },
  "wgpuRenderBundleEncoderDrawIndirect": {
    "parameters": [
      "pointer",
      "pointer",
      "u64"
    ],
    "result": "void"
  },
  "wgpuRenderBundleEncoderFinish": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "pointer"
  },
  "wgpuRenderBundleEncoderInsertDebugMarker": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuRenderBundleEncoderPopDebugGroup": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuRenderBundleEncoderPushDebugGroup": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuRenderBundleEncoderSetBindGroup": {
    "parameters": [
      "pointer",
      "u32",
      "pointer",
      "u64",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuRenderBundleEncoderSetIndexBuffer": {
    "parameters": [
      "pointer",
      "pointer",
      "u32",
      "u64",
      "u64"
    ],
    "result": "void"
  },
  "wgpuRenderBundleEncoderSetLabel": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuRenderBundleEncoderSetPipeline": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuRenderBundleEncoderSetVertexBuffer": {
    "parameters": [
      "pointer",
      "u32",
      "pointer",
      "u64",
      "u64"
    ],
    "result": "void"
  },
  "wgpuRenderBundleEncoderReference": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuRenderBundleEncoderRelease": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuRenderPassEncoderBeginOcclusionQuery": {
    "parameters": [
      "pointer",
      "u32"
    ],
    "result": "void"
  },
  "wgpuRenderPassEncoderBeginPipelineStatisticsQuery": {
    "parameters": [
      "pointer",
      "pointer",
      "u32"
    ],
    "result": "void"
  },
  "wgpuRenderPassEncoderDraw": {
    "parameters": [
      "pointer",
      "u32",
      "u32",
      "u32",
      "u32"
    ],
    "result": "void"
  },
  "wgpuRenderPassEncoderDrawIndexed": {
    "parameters": [
      "pointer",
      "u32",
      "u32",
      "u32",
      "u32",
      "u32"
    ],
    "result": "void"
  },
  "wgpuRenderPassEncoderDrawIndexedIndirect": {
    "parameters": [
      "pointer",
      "pointer",
      "u64"
    ],
    "result": "void"
  },
  "wgpuRenderPassEncoderDrawIndirect": {
    "parameters": [
      "pointer",
      "pointer",
      "u64"
    ],
    "result": "void"
  },
  "wgpuRenderPassEncoderEnd": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuRenderPassEncoderEndOcclusionQuery": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuRenderPassEncoderEndPipelineStatisticsQuery": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuRenderPassEncoderExecuteBundles": {
    "parameters": [
      "pointer",
      "u64",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuRenderPassEncoderInsertDebugMarker": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuRenderPassEncoderPopDebugGroup": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuRenderPassEncoderPushDebugGroup": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuRenderPassEncoderSetBindGroup": {
    "parameters": [
      "pointer",
      "u32",
      "pointer",
      "u64",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuRenderPassEncoderSetBlendConstant": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuRenderPassEncoderSetIndexBuffer": {
    "parameters": [
      "pointer",
      "pointer",
      "u32",
      "u64",
      "u64"
    ],
    "result": "void"
  },
  "wgpuRenderPassEncoderSetLabel": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuRenderPassEncoderSetPipeline": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuRenderPassEncoderSetScissorRect": {
    "parameters": [
      "pointer",
      "u32",
      "u32",
      "u32",
      "u32"
    ],
    "result": "void"
  },
  "wgpuRenderPassEncoderSetStencilReference": {
    "parameters": [
      "pointer",
      "u32"
    ],
    "result": "void"
  },
  "wgpuRenderPassEncoderSetVertexBuffer": {
    "parameters": [
      "pointer",
      "u32",
      "pointer",
      "u64",
      "u64"
    ],
    "result": "void"
  },
  "wgpuRenderPassEncoderSetViewport": {
    "parameters": [
      "pointer",
      "f32",
      "f32",
      "f32",
      "f32",
      "f32",
      "f32"
    ],
    "result": "void"
  },
  "wgpuRenderPassEncoderReference": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuRenderPassEncoderRelease": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuRenderPipelineGetBindGroupLayout": {
    "parameters": [
      "pointer",
      "u32"
    ],
    "result": "pointer"
  },
  "wgpuRenderPipelineSetLabel": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuRenderPipelineReference": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuRenderPipelineRelease": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuSamplerSetLabel": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuSamplerReference": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuSamplerRelease": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuShaderModuleGetCompilationInfo": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuShaderModuleSetLabel": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuShaderModuleReference": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuShaderModuleRelease": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuSurfaceGetPreferredFormat": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "u32"
  },
  "wgpuSurfaceReference": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuSurfaceRelease": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuSwapChainGetCurrentTextureView": {
    "parameters": [
      "pointer"
    ],
    "result": "pointer"
  },
  "wgpuSwapChainPresent": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuSwapChainReference": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuSwapChainRelease": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuTextureCreateView": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "pointer"
  },
  "wgpuTextureDestroy": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuTextureGetDepthOrArrayLayers": {
    "parameters": [
      "pointer"
    ],
    "result": "u32"
  },
  "wgpuTextureGetDimension": {
    "parameters": [
      "pointer"
    ],
    "result": "u32"
  },
  "wgpuTextureGetFormat": {
    "parameters": [
      "pointer"
    ],
    "result": "u32"
  },
  "wgpuTextureGetHeight": {
    "parameters": [
      "pointer"
    ],
    "result": "u32"
  },
  "wgpuTextureGetMipLevelCount": {
    "parameters": [
      "pointer"
    ],
    "result": "u32"
  },
  "wgpuTextureGetSampleCount": {
    "parameters": [
      "pointer"
    ],
    "result": "u32"
  },
  "wgpuTextureGetUsage": {
    "parameters": [
      "pointer"
    ],
    "result": "u32"
  },
  "wgpuTextureGetWidth": {
    "parameters": [
      "pointer"
    ],
    "result": "u32"
  },
  "wgpuTextureSetLabel": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuTextureReference": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuTextureRelease": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuTextureViewSetLabel": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuTextureViewReference": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuTextureViewRelease": {
    "parameters": [
      "pointer"
    ],
    "result": "void"
  },
  "wgpuGenerateReport": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuInstanceEnumerateAdapters": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer"
    ],
    "result": "u64"
  },
  "wgpuQueueSubmitForIndex": {
    "parameters": [
      "pointer",
      "u64",
      "pointer"
    ],
    "result": "u64"
  },
  "wgpuDevicePoll": {
    "parameters": [
      "pointer",
      "i8",
      "pointer"
    ],
    "result": "i8"
  },
  "wgpuSetLogCallback": {
    "parameters": [
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuSetLogLevel": {
    "parameters": [
      "u32"
    ],
    "result": "void"
  },
  "wgpuGetVersion": {
    "parameters": [],
    "result": "u32"
  },
  "wgpuSurfaceGetCapabilities": {
    "parameters": [
      "pointer",
      "pointer",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuRenderPassEncoderSetPushConstants": {
    "parameters": [
      "pointer",
      "u32",
      "u32",
      "u32",
      "pointer"
    ],
    "result": "void"
  },
  "wgpuRenderPassEncoderMultiDrawIndirect": {
    "parameters": [
      "pointer",
      "pointer",
      "u64",
      "u32"
    ],
    "result": "void"
  },
  "wgpuRenderPassEncoderMultiDrawIndexedIndirect": {
    "parameters": [
      "pointer",
      "pointer",
      "u64",
      "u32"
    ],
    "result": "void"
  },
  "wgpuRenderPassEncoderMultiDrawIndirectCount": {
    "parameters": [
      "pointer",
      "pointer",
      "u64",
      "pointer",
      "u64",
      "u32"
    ],
    "result": "void"
  },
  "wgpuRenderPassEncoderMultiDrawIndexedIndirectCount": {
    "parameters": [
      "pointer",
      "pointer",
      "u64",
      "pointer",
      "u64",
      "u32"
    ],
    "result": "void"
  }
} as const);
    