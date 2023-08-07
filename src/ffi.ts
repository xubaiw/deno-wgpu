import { endianness } from "node:os"
import { prepare } from "./prepare.ts";

const littleEndian = endianness() == "LE" ? true : false;
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
}); 

export enum WGPUAdapterType {
  DiscreteGPU = 0,
  IntegratedGPU = 1,
  CPU = 2,
  Unknown = 3,
  Force32 = 2147483647,
}

export enum WGPUAddressMode {
  Repeat = 0,
  MirrorRepeat = 1,
  ClampToEdge = 2,
  Force32 = 2147483647,
}

export enum WGPUBackendType {
  Undefined = 0,
  Null = 1,
  WebGPU = 2,
  D3D11 = 3,
  D3D12 = 4,
  Metal = 5,
  Vulkan = 6,
  OpenGL = 7,
  OpenGLES = 8,
  Force32 = 2147483647,
}

export enum WGPUBlendFactor {
  Zero = 0,
  One = 1,
  Src = 2,
  OneMinusSrc = 3,
  SrcAlpha = 4,
  OneMinusSrcAlpha = 5,
  Dst = 6,
  OneMinusDst = 7,
  DstAlpha = 8,
  OneMinusDstAlpha = 9,
  SrcAlphaSaturated = 10,
  Constant = 11,
  OneMinusConstant = 12,
  Force32 = 2147483647,
}

export enum WGPUBlendOperation {
  Add = 0,
  Subtract = 1,
  ReverseSubtract = 2,
  Min = 3,
  Max = 4,
  Force32 = 2147483647,
}

export enum WGPUBufferBindingType {
  Undefined = 0,
  Uniform = 1,
  Storage = 2,
  ReadOnlyStorage = 3,
  Force32 = 2147483647,
}

export enum WGPUBufferMapAsyncStatus {
  Success = 0,
  ValidationError = 1,
  Unknown = 2,
  DeviceLost = 3,
  DestroyedBeforeCallback = 4,
  UnmappedBeforeCallback = 5,
  MappingAlreadyPending = 6,
  OffsetOutOfRange = 7,
  SizeOutOfRange = 8,
  Force32 = 2147483647,
}

export enum WGPUBufferMapState {
  Unmapped = 0,
  Pending = 1,
  Mapped = 2,
  Force32 = 2147483647,
}

export enum WGPUCompareFunction {
  Undefined = 0,
  Never = 1,
  Less = 2,
  LessEqual = 3,
  Greater = 4,
  GreaterEqual = 5,
  Equal = 6,
  NotEqual = 7,
  Always = 8,
  Force32 = 2147483647,
}

export enum WGPUCompilationInfoRequestStatus {
  Success = 0,
  Error = 1,
  DeviceLost = 2,
  Unknown = 3,
  Force32 = 2147483647,
}

export enum WGPUCompilationMessageType {
  Error = 0,
  Warning = 1,
  Info = 2,
  Force32 = 2147483647,
}

export enum WGPUComputePassTimestampLocation {
  Beginning = 0,
  End = 1,
  Force32 = 2147483647,
}

export enum WGPUCreatePipelineAsyncStatus {
  Success = 0,
  ValidationError = 1,
  InternalError = 2,
  DeviceLost = 3,
  DeviceDestroyed = 4,
  Unknown = 5,
  Force32 = 2147483647,
}

export enum WGPUCullMode {
  None = 0,
  Front = 1,
  Back = 2,
  Force32 = 2147483647,
}

export enum WGPUDeviceLostReason {
  Undefined = 0,
  Destroyed = 1,
  Force32 = 2147483647,
}

export enum WGPUErrorFilter {
  Validation = 0,
  OutOfMemory = 1,
  Internal = 2,
  Force32 = 2147483647,
}

export enum WGPUErrorType {
  NoError = 0,
  Validation = 1,
  OutOfMemory = 2,
  Internal = 3,
  Unknown = 4,
  DeviceLost = 5,
  Force32 = 2147483647,
}

export enum WGPUFeatureName {
  Undefined = 0,
  DepthClipControl = 1,
  Depth32FloatStencil8 = 2,
  TimestampQuery = 3,
  PipelineStatisticsQuery = 4,
  TextureCompressionBC = 5,
  TextureCompressionETC2 = 6,
  TextureCompressionASTC = 7,
  IndirectFirstInstance = 8,
  ShaderF16 = 9,
  RG11B10UfloatRenderable = 10,
  BGRA8UnormStorage = 11,
  Float32Filterable = 12,
  Force32 = 2147483647,
}

export enum WGPUFilterMode {
  Nearest = 0,
  Linear = 1,
  Force32 = 2147483647,
}

export enum WGPUFrontFace {
  CCW = 0,
  CW = 1,
  Force32 = 2147483647,
}

export enum WGPUIndexFormat {
  Undefined = 0,
  Uint16 = 1,
  Uint32 = 2,
  Force32 = 2147483647,
}

export enum WGPULoadOp {
  Undefined = 0,
  Clear = 1,
  Load = 2,
  Force32 = 2147483647,
}

export enum WGPUMipmapFilterMode {
  Nearest = 0,
  Linear = 1,
  Force32 = 2147483647,
}

export enum WGPUPipelineStatisticName {
  VertexShaderInvocations = 0,
  ClipperInvocations = 1,
  ClipperPrimitivesOut = 2,
  FragmentShaderInvocations = 3,
  ComputeShaderInvocations = 4,
  Force32 = 2147483647,
}

export enum WGPUPowerPreference {
  Undefined = 0,
  LowPower = 1,
  HighPerformance = 2,
  Force32 = 2147483647,
}

export enum WGPUPresentMode {
  Immediate = 0,
  Mailbox = 1,
  Fifo = 2,
  Force32 = 2147483647,
}

export enum WGPUPrimitiveTopology {
  PointList = 0,
  LineList = 1,
  LineStrip = 2,
  TriangleList = 3,
  TriangleStrip = 4,
  Force32 = 2147483647,
}

export enum WGPUQueryType {
  Occlusion = 0,
  PipelineStatistics = 1,
  Timestamp = 2,
  Force32 = 2147483647,
}

export enum WGPUQueueWorkDoneStatus {
  Success = 0,
  Error = 1,
  Unknown = 2,
  DeviceLost = 3,
  Force32 = 2147483647,
}

export enum WGPURenderPassTimestampLocation {
  Beginning = 0,
  End = 1,
  Force32 = 2147483647,
}

export enum WGPURequestAdapterStatus {
  Success = 0,
  Unavailable = 1,
  Error = 2,
  Unknown = 3,
  Force32 = 2147483647,
}

export enum WGPURequestDeviceStatus {
  Success = 0,
  Error = 1,
  Unknown = 2,
  Force32 = 2147483647,
}

export enum WGPUSType {
  Invalid = 0,
  SurfaceDescriptorFromMetalLayer = 1,
  SurfaceDescriptorFromWindowsHWND = 2,
  SurfaceDescriptorFromXlibWindow = 3,
  SurfaceDescriptorFromCanvasHTMLSelector = 4,
  ShaderModuleSPIRVDescriptor = 5,
  ShaderModuleWGSLDescriptor = 6,
  PrimitiveDepthClipControl = 7,
  SurfaceDescriptorFromWaylandSurface = 8,
  SurfaceDescriptorFromAndroidNativeWindow = 9,
  SurfaceDescriptorFromXcbWindow = 10,
  RenderPassDescriptorMaxDrawCount = 15,
  Force32 = 2147483647,
  DeviceExtras = 1610612737,
  AdapterExtras = 1610612738,
  RequiredLimitsExtras = 1610612739,
  PipelineLayoutExtras = 1610612740,
  ShaderModuleGLSLDescriptor = 1610612741,
  SupportedLimitsExtras = 1610612739,
  InstanceExtras = 1610612742,
  SwapChainDescriptorExtras = 1610612743,
}

export enum WGPUSamplerBindingType {
  Undefined = 0,
  Filtering = 1,
  NonFiltering = 2,
  Comparison = 3,
  Force32 = 2147483647,
}

export enum WGPUStencilOperation {
  Keep = 0,
  Zero = 1,
  Replace = 2,
  Invert = 3,
  IncrementClamp = 4,
  DecrementClamp = 5,
  IncrementWrap = 6,
  DecrementWrap = 7,
  Force32 = 2147483647,
}

export enum WGPUStorageTextureAccess {
  Undefined = 0,
  WriteOnly = 1,
  Force32 = 2147483647,
}

export enum WGPUStoreOp {
  Undefined = 0,
  Store = 1,
  Discard = 2,
  Force32 = 2147483647,
}

export enum WGPUTextureAspect {
  All = 0,
  StencilOnly = 1,
  DepthOnly = 2,
  Force32 = 2147483647,
}

export enum WGPUTextureDimension {
  _1D = 0,
  _2D = 1,
  _3D = 2,
  Force32 = 2147483647,
}

export enum WGPUTextureFormat {
  Undefined = 0,
  R8Unorm = 1,
  R8Snorm = 2,
  R8Uint = 3,
  R8Sint = 4,
  R16Uint = 5,
  R16Sint = 6,
  R16Float = 7,
  RG8Unorm = 8,
  RG8Snorm = 9,
  RG8Uint = 10,
  RG8Sint = 11,
  R32Float = 12,
  R32Uint = 13,
  R32Sint = 14,
  RG16Uint = 15,
  RG16Sint = 16,
  RG16Float = 17,
  RGBA8Unorm = 18,
  RGBA8UnormSrgb = 19,
  RGBA8Snorm = 20,
  RGBA8Uint = 21,
  RGBA8Sint = 22,
  BGRA8Unorm = 23,
  BGRA8UnormSrgb = 24,
  RGB10A2Unorm = 25,
  RG11B10Ufloat = 26,
  RGB9E5Ufloat = 27,
  RG32Float = 28,
  RG32Uint = 29,
  RG32Sint = 30,
  RGBA16Uint = 31,
  RGBA16Sint = 32,
  RGBA16Float = 33,
  RGBA32Float = 34,
  RGBA32Uint = 35,
  RGBA32Sint = 36,
  Stencil8 = 37,
  Depth16Unorm = 38,
  Depth24Plus = 39,
  Depth24PlusStencil8 = 40,
  Depth32Float = 41,
  Depth32FloatStencil8 = 42,
  BC1RGBAUnorm = 43,
  BC1RGBAUnormSrgb = 44,
  BC2RGBAUnorm = 45,
  BC2RGBAUnormSrgb = 46,
  BC3RGBAUnorm = 47,
  BC3RGBAUnormSrgb = 48,
  BC4RUnorm = 49,
  BC4RSnorm = 50,
  BC5RGUnorm = 51,
  BC5RGSnorm = 52,
  BC6HRGBUfloat = 53,
  BC6HRGBFloat = 54,
  BC7RGBAUnorm = 55,
  BC7RGBAUnormSrgb = 56,
  ETC2RGB8Unorm = 57,
  ETC2RGB8UnormSrgb = 58,
  ETC2RGB8A1Unorm = 59,
  ETC2RGB8A1UnormSrgb = 60,
  ETC2RGBA8Unorm = 61,
  ETC2RGBA8UnormSrgb = 62,
  EACR11Unorm = 63,
  EACR11Snorm = 64,
  EACRG11Unorm = 65,
  EACRG11Snorm = 66,
  ASTC4x4Unorm = 67,
  ASTC4x4UnormSrgb = 68,
  ASTC5x4Unorm = 69,
  ASTC5x4UnormSrgb = 70,
  ASTC5x5Unorm = 71,
  ASTC5x5UnormSrgb = 72,
  ASTC6x5Unorm = 73,
  ASTC6x5UnormSrgb = 74,
  ASTC6x6Unorm = 75,
  ASTC6x6UnormSrgb = 76,
  ASTC8x5Unorm = 77,
  ASTC8x5UnormSrgb = 78,
  ASTC8x6Unorm = 79,
  ASTC8x6UnormSrgb = 80,
  ASTC8x8Unorm = 81,
  ASTC8x8UnormSrgb = 82,
  ASTC10x5Unorm = 83,
  ASTC10x5UnormSrgb = 84,
  ASTC10x6Unorm = 85,
  ASTC10x6UnormSrgb = 86,
  ASTC10x8Unorm = 87,
  ASTC10x8UnormSrgb = 88,
  ASTC10x10Unorm = 89,
  ASTC10x10UnormSrgb = 90,
  ASTC12x10Unorm = 91,
  ASTC12x10UnormSrgb = 92,
  ASTC12x12Unorm = 93,
  ASTC12x12UnormSrgb = 94,
  Force32 = 2147483647,
}

export enum WGPUTextureSampleType {
  Undefined = 0,
  Float = 1,
  UnfilterableFloat = 2,
  Depth = 3,
  Sint = 4,
  Uint = 5,
  Force32 = 2147483647,
}

export enum WGPUTextureViewDimension {
  Undefined = 0,
  _1D = 1,
  _2D = 2,
  _2DArray = 3,
  Cube = 4,
  CubeArray = 5,
  _3D = 6,
  Force32 = 2147483647,
}

export enum WGPUVertexFormat {
  Undefined = 0,
  Uint8x2 = 1,
  Uint8x4 = 2,
  Sint8x2 = 3,
  Sint8x4 = 4,
  Unorm8x2 = 5,
  Unorm8x4 = 6,
  Snorm8x2 = 7,
  Snorm8x4 = 8,
  Uint16x2 = 9,
  Uint16x4 = 10,
  Sint16x2 = 11,
  Sint16x4 = 12,
  Unorm16x2 = 13,
  Unorm16x4 = 14,
  Snorm16x2 = 15,
  Snorm16x4 = 16,
  Float16x2 = 17,
  Float16x4 = 18,
  Float32 = 19,
  Float32x2 = 20,
  Float32x3 = 21,
  Float32x4 = 22,
  Uint32 = 23,
  Uint32x2 = 24,
  Uint32x3 = 25,
  Uint32x4 = 26,
  Sint32 = 27,
  Sint32x2 = 28,
  Sint32x3 = 29,
  Sint32x4 = 30,
  Force32 = 2147483647,
}

export enum WGPUVertexStepMode {
  Vertex = 0,
  Instance = 1,
  VertexBufferNotUsed = 2,
  Force32 = 2147483647,
}

export enum WGPUBufferUsage {
  None = 0,
  MapRead = 1,
  MapWrite = 2,
  CopySrc = 4,
  CopyDst = 8,
  Index = 16,
  Vertex = 32,
  Uniform = 64,
  Storage = 128,
  Indirect = 256,
  QueryResolve = 512,
  Force32 = 2147483647,
}

export enum WGPUColorWriteMask {
  None = 0,
  Red = 1,
  Green = 2,
  Blue = 4,
  Alpha = 8,
  All = 15,
  Force32 = 2147483647,
}

export enum WGPUMapMode {
  None = 0,
  Read = 1,
  Write = 2,
  Force32 = 2147483647,
}

export enum WGPUShaderStage {
  None = 0,
  Vertex = 1,
  Fragment = 2,
  Compute = 4,
  Force32 = 2147483647,
}

export enum WGPUTextureUsage {
  None = 0,
  CopySrc = 1,
  CopyDst = 2,
  TextureBinding = 4,
  StorageBinding = 8,
  RenderAttachment = 16,
  Force32 = 2147483647,
}

export enum WGPUNativeSType {
  Force32 = 2147483647,
}

export enum WGPUNativeFeature {
  PushConstants = 1610612737,
  TextureAdapterSpecificFormatFeatures = 1610612738,
  MultiDrawIndirect = 1610612739,
  MultiDrawIndirectCount = 1610612740,
  VertexWritableStorage = 1610612741,
  Force32 = 2147483647,
}

export enum WGPULogLevel {
  Off = 0,
  Error = 1,
  Warn = 2,
  Info = 3,
  Debug = 4,
  Trace = 5,
  Force32 = 2147483647,
}

export enum WGPUInstanceBackend {
  Vulkan = 2,
  GL = 32,
  Metal = 4,
  DX12 = 8,
  DX11 = 16,
  BrowserWebGPU = 64,
  Primary = 78,
  Secondary = 48,
  None = 0,
  Force32 = 2147483647,
}

export enum WGPUDx12Compiler {
  Undefined = 0,
  Fxc = 1,
  Dxc = 2,
  Force32 = 2147483647,
}

export enum WGPUCompositeAlphaMode {
  Auto = 0,
  Opaque = 1,
  PreMultiplied = 2,
  PostMultiplied = 3,
  Inherit = 4,
  Force32 = 2147483647,
}


export class WGPUAdapterProperties {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(64))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(64));
    return new WGPUAdapterProperties(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get vendorID(): number {
    return this.view.getUint32(8, littleEndian);
  }
  set vendorID(value: number) {
    this.view.setUint32(8, value, littleEndian);
  }

  get vendorName(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(16, littleEndian));
  }
  set vendorName(value: Deno.PointerValue) {
    this.view.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get architecture(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(24, littleEndian));
  }
  set architecture(value: Deno.PointerValue) {
    this.view.setBigUint64(24, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get deviceID(): number {
    return this.view.getUint32(32, littleEndian);
  }
  set deviceID(value: number) {
    this.view.setUint32(32, value, littleEndian);
  }

  get name(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(40, littleEndian));
  }
  set name(value: Deno.PointerValue) {
    this.view.setBigUint64(40, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get driverDescription(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(48, littleEndian));
  }
  set driverDescription(value: Deno.PointerValue) {
    this.view.setBigUint64(48, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get adapterType(): WGPUAdapterType {
    return this.view.getUint32(56, littleEndian);
  }
  set adapterType(value: WGPUAdapterType) {
    this.view.setUint32(56, value, littleEndian);
  }

  get backendType(): WGPUBackendType {
    return this.view.getUint32(60, littleEndian);
  }
  set backendType(value: WGPUBackendType) {
    this.view.setUint32(60, value, littleEndian);
  }
}


export class WGPUBindGroupEntry {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(56))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(56));
    return new WGPUBindGroupEntry(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get binding(): number {
    return this.view.getUint32(8, littleEndian);
  }
  set binding(value: number) {
    this.view.setUint32(8, value, littleEndian);
  }

  get buffer(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(16, littleEndian));
  }
  set buffer(value: Deno.PointerValue) {
    this.view.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get offset(): bigint {
    return this.view.getBigUint64(24, littleEndian);
  }
  set offset(value: bigint) {
    this.view.setBigUint64(24, value, littleEndian);
  }

  get size(): bigint {
    return this.view.getBigUint64(32, littleEndian);
  }
  set size(value: bigint) {
    this.view.setBigUint64(32, value, littleEndian);
  }

  get sampler(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(40, littleEndian));
  }
  set sampler(value: Deno.PointerValue) {
    this.view.setBigUint64(40, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get textureView(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(48, littleEndian));
  }
  set textureView(value: Deno.PointerValue) {
    this.view.setBigUint64(48, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }
}


export class WGPUBlendComponent {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(12))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(12));
    return new WGPUBlendComponent(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get operation(): WGPUBlendOperation {
    return this.view.getUint32(0, littleEndian);
  }
  set operation(value: WGPUBlendOperation) {
    this.view.setUint32(0, value, littleEndian);
  }

  get srcFactor(): WGPUBlendFactor {
    return this.view.getUint32(4, littleEndian);
  }
  set srcFactor(value: WGPUBlendFactor) {
    this.view.setUint32(4, value, littleEndian);
  }

  get dstFactor(): WGPUBlendFactor {
    return this.view.getUint32(8, littleEndian);
  }
  set dstFactor(value: WGPUBlendFactor) {
    this.view.setUint32(8, value, littleEndian);
  }
}


export class WGPUBufferBindingLayout {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(24))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(24));
    return new WGPUBufferBindingLayout(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get type(): WGPUBufferBindingType {
    return this.view.getUint32(8, littleEndian);
  }
  set type(value: WGPUBufferBindingType) {
    this.view.setUint32(8, value, littleEndian);
  }

  get hasDynamicOffset(): boolean {
    return this.view.getInt8(12);
  }
  set hasDynamicOffset(value: boolean) {
    this.view.setInt8(12, value);
  }

  get minBindingSize(): bigint {
    return this.view.getBigUint64(16, littleEndian);
  }
  set minBindingSize(value: bigint) {
    this.view.setBigUint64(16, value, littleEndian);
  }
}


export class WGPUBufferDescriptor {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(40))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(40));
    return new WGPUBufferDescriptor(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(8, littleEndian));
  }
  set label(value: Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get usage(): number {
    return this.view.getUint32(16, littleEndian);
  }
  set usage(value: number) {
    this.view.setUint32(16, value, littleEndian);
  }

  get size(): bigint {
    return this.view.getBigUint64(24, littleEndian);
  }
  set size(value: bigint) {
    this.view.setBigUint64(24, value, littleEndian);
  }

  get mappedAtCreation(): boolean {
    return this.view.getInt8(32);
  }
  set mappedAtCreation(value: boolean) {
    this.view.setInt8(32, value);
  }
}


export class WGPUColor {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(32))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(32));
    return new WGPUColor(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get r(): bigint {
    return this.view.getFloat64(0, littleEndian);
  }
  set r(value: bigint) {
    this.view.setFloat64(0, value, littleEndian);
  }

  get g(): bigint {
    return this.view.getFloat64(8, littleEndian);
  }
  set g(value: bigint) {
    this.view.setFloat64(8, value, littleEndian);
  }

  get b(): bigint {
    return this.view.getFloat64(16, littleEndian);
  }
  set b(value: bigint) {
    this.view.setFloat64(16, value, littleEndian);
  }

  get a(): bigint {
    return this.view.getFloat64(24, littleEndian);
  }
  set a(value: bigint) {
    this.view.setFloat64(24, value, littleEndian);
  }
}


export class WGPUCommandBufferDescriptor {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(16))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(16));
    return new WGPUCommandBufferDescriptor(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(8, littleEndian));
  }
  set label(value: Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }
}


export class WGPUCommandEncoderDescriptor {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(16))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(16));
    return new WGPUCommandEncoderDescriptor(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(8, littleEndian));
  }
  set label(value: Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }
}


export class WGPUCompilationMessage {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(80))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(80));
    return new WGPUCompilationMessage(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get message(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(8, littleEndian));
  }
  set message(value: Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get type(): WGPUCompilationMessageType {
    return this.view.getUint32(16, littleEndian);
  }
  set type(value: WGPUCompilationMessageType) {
    this.view.setUint32(16, value, littleEndian);
  }

  get lineNum(): bigint {
    return this.view.getBigUint64(24, littleEndian);
  }
  set lineNum(value: bigint) {
    this.view.setBigUint64(24, value, littleEndian);
  }

  get linePos(): bigint {
    return this.view.getBigUint64(32, littleEndian);
  }
  set linePos(value: bigint) {
    this.view.setBigUint64(32, value, littleEndian);
  }

  get offset(): bigint {
    return this.view.getBigUint64(40, littleEndian);
  }
  set offset(value: bigint) {
    this.view.setBigUint64(40, value, littleEndian);
  }

  get length(): bigint {
    return this.view.getBigUint64(48, littleEndian);
  }
  set length(value: bigint) {
    this.view.setBigUint64(48, value, littleEndian);
  }

  get utf16LinePos(): bigint {
    return this.view.getBigUint64(56, littleEndian);
  }
  set utf16LinePos(value: bigint) {
    this.view.setBigUint64(56, value, littleEndian);
  }

  get utf16Offset(): bigint {
    return this.view.getBigUint64(64, littleEndian);
  }
  set utf16Offset(value: bigint) {
    this.view.setBigUint64(64, value, littleEndian);
  }

  get utf16Length(): bigint {
    return this.view.getBigUint64(72, littleEndian);
  }
  set utf16Length(value: bigint) {
    this.view.setBigUint64(72, value, littleEndian);
  }
}


export class WGPUComputePassTimestampWrite {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(16))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(16));
    return new WGPUComputePassTimestampWrite(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get querySet(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set querySet(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get queryIndex(): number {
    return this.view.getUint32(8, littleEndian);
  }
  set queryIndex(value: number) {
    this.view.setUint32(8, value, littleEndian);
  }

  get location(): WGPUComputePassTimestampLocation {
    return this.view.getUint32(12, littleEndian);
  }
  set location(value: WGPUComputePassTimestampLocation) {
    this.view.setUint32(12, value, littleEndian);
  }
}


export class WGPUConstantEntry {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(24))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(24));
    return new WGPUConstantEntry(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get key(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(8, littleEndian));
  }
  set key(value: Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get value(): bigint {
    return this.view.getFloat64(16, littleEndian);
  }
  set value(value: bigint) {
    this.view.setFloat64(16, value, littleEndian);
  }
}


export class WGPUExtent3D {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(12))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(12));
    return new WGPUExtent3D(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get width(): number {
    return this.view.getUint32(0, littleEndian);
  }
  set width(value: number) {
    this.view.setUint32(0, value, littleEndian);
  }

  get height(): number {
    return this.view.getUint32(4, littleEndian);
  }
  set height(value: number) {
    this.view.setUint32(4, value, littleEndian);
  }

  get depthOrArrayLayers(): number {
    return this.view.getUint32(8, littleEndian);
  }
  set depthOrArrayLayers(value: number) {
    this.view.setUint32(8, value, littleEndian);
  }
}


export class WGPUInstanceDescriptor {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(8))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(8));
    return new WGPUInstanceDescriptor(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }
}


export class WGPULimits {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(144))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(144));
    return new WGPULimits(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get maxTextureDimension1D(): number {
    return this.view.getUint32(0, littleEndian);
  }
  set maxTextureDimension1D(value: number) {
    this.view.setUint32(0, value, littleEndian);
  }

  get maxTextureDimension2D(): number {
    return this.view.getUint32(4, littleEndian);
  }
  set maxTextureDimension2D(value: number) {
    this.view.setUint32(4, value, littleEndian);
  }

  get maxTextureDimension3D(): number {
    return this.view.getUint32(8, littleEndian);
  }
  set maxTextureDimension3D(value: number) {
    this.view.setUint32(8, value, littleEndian);
  }

  get maxTextureArrayLayers(): number {
    return this.view.getUint32(12, littleEndian);
  }
  set maxTextureArrayLayers(value: number) {
    this.view.setUint32(12, value, littleEndian);
  }

  get maxBindGroups(): number {
    return this.view.getUint32(16, littleEndian);
  }
  set maxBindGroups(value: number) {
    this.view.setUint32(16, value, littleEndian);
  }

  get maxBindingsPerBindGroup(): number {
    return this.view.getUint32(20, littleEndian);
  }
  set maxBindingsPerBindGroup(value: number) {
    this.view.setUint32(20, value, littleEndian);
  }

  get maxDynamicUniformBuffersPerPipelineLayout(): number {
    return this.view.getUint32(24, littleEndian);
  }
  set maxDynamicUniformBuffersPerPipelineLayout(value: number) {
    this.view.setUint32(24, value, littleEndian);
  }

  get maxDynamicStorageBuffersPerPipelineLayout(): number {
    return this.view.getUint32(28, littleEndian);
  }
  set maxDynamicStorageBuffersPerPipelineLayout(value: number) {
    this.view.setUint32(28, value, littleEndian);
  }

  get maxSampledTexturesPerShaderStage(): number {
    return this.view.getUint32(32, littleEndian);
  }
  set maxSampledTexturesPerShaderStage(value: number) {
    this.view.setUint32(32, value, littleEndian);
  }

  get maxSamplersPerShaderStage(): number {
    return this.view.getUint32(36, littleEndian);
  }
  set maxSamplersPerShaderStage(value: number) {
    this.view.setUint32(36, value, littleEndian);
  }

  get maxStorageBuffersPerShaderStage(): number {
    return this.view.getUint32(40, littleEndian);
  }
  set maxStorageBuffersPerShaderStage(value: number) {
    this.view.setUint32(40, value, littleEndian);
  }

  get maxStorageTexturesPerShaderStage(): number {
    return this.view.getUint32(44, littleEndian);
  }
  set maxStorageTexturesPerShaderStage(value: number) {
    this.view.setUint32(44, value, littleEndian);
  }

  get maxUniformBuffersPerShaderStage(): number {
    return this.view.getUint32(48, littleEndian);
  }
  set maxUniformBuffersPerShaderStage(value: number) {
    this.view.setUint32(48, value, littleEndian);
  }

  get maxUniformBufferBindingSize(): bigint {
    return this.view.getBigUint64(56, littleEndian);
  }
  set maxUniformBufferBindingSize(value: bigint) {
    this.view.setBigUint64(56, value, littleEndian);
  }

  get maxStorageBufferBindingSize(): bigint {
    return this.view.getBigUint64(64, littleEndian);
  }
  set maxStorageBufferBindingSize(value: bigint) {
    this.view.setBigUint64(64, value, littleEndian);
  }

  get minUniformBufferOffsetAlignment(): number {
    return this.view.getUint32(72, littleEndian);
  }
  set minUniformBufferOffsetAlignment(value: number) {
    this.view.setUint32(72, value, littleEndian);
  }

  get minStorageBufferOffsetAlignment(): number {
    return this.view.getUint32(76, littleEndian);
  }
  set minStorageBufferOffsetAlignment(value: number) {
    this.view.setUint32(76, value, littleEndian);
  }

  get maxVertexBuffers(): number {
    return this.view.getUint32(80, littleEndian);
  }
  set maxVertexBuffers(value: number) {
    this.view.setUint32(80, value, littleEndian);
  }

  get maxBufferSize(): bigint {
    return this.view.getBigUint64(88, littleEndian);
  }
  set maxBufferSize(value: bigint) {
    this.view.setBigUint64(88, value, littleEndian);
  }

  get maxVertexAttributes(): number {
    return this.view.getUint32(96, littleEndian);
  }
  set maxVertexAttributes(value: number) {
    this.view.setUint32(96, value, littleEndian);
  }

  get maxVertexBufferArrayStride(): number {
    return this.view.getUint32(100, littleEndian);
  }
  set maxVertexBufferArrayStride(value: number) {
    this.view.setUint32(100, value, littleEndian);
  }

  get maxInterStageShaderComponents(): number {
    return this.view.getUint32(104, littleEndian);
  }
  set maxInterStageShaderComponents(value: number) {
    this.view.setUint32(104, value, littleEndian);
  }

  get maxInterStageShaderVariables(): number {
    return this.view.getUint32(108, littleEndian);
  }
  set maxInterStageShaderVariables(value: number) {
    this.view.setUint32(108, value, littleEndian);
  }

  get maxColorAttachments(): number {
    return this.view.getUint32(112, littleEndian);
  }
  set maxColorAttachments(value: number) {
    this.view.setUint32(112, value, littleEndian);
  }

  get maxColorAttachmentBytesPerSample(): number {
    return this.view.getUint32(116, littleEndian);
  }
  set maxColorAttachmentBytesPerSample(value: number) {
    this.view.setUint32(116, value, littleEndian);
  }

  get maxComputeWorkgroupStorageSize(): number {
    return this.view.getUint32(120, littleEndian);
  }
  set maxComputeWorkgroupStorageSize(value: number) {
    this.view.setUint32(120, value, littleEndian);
  }

  get maxComputeInvocationsPerWorkgroup(): number {
    return this.view.getUint32(124, littleEndian);
  }
  set maxComputeInvocationsPerWorkgroup(value: number) {
    this.view.setUint32(124, value, littleEndian);
  }

  get maxComputeWorkgroupSizeX(): number {
    return this.view.getUint32(128, littleEndian);
  }
  set maxComputeWorkgroupSizeX(value: number) {
    this.view.setUint32(128, value, littleEndian);
  }

  get maxComputeWorkgroupSizeY(): number {
    return this.view.getUint32(132, littleEndian);
  }
  set maxComputeWorkgroupSizeY(value: number) {
    this.view.setUint32(132, value, littleEndian);
  }

  get maxComputeWorkgroupSizeZ(): number {
    return this.view.getUint32(136, littleEndian);
  }
  set maxComputeWorkgroupSizeZ(value: number) {
    this.view.setUint32(136, value, littleEndian);
  }

  get maxComputeWorkgroupsPerDimension(): number {
    return this.view.getUint32(140, littleEndian);
  }
  set maxComputeWorkgroupsPerDimension(value: number) {
    this.view.setUint32(140, value, littleEndian);
  }
}


export class WGPUMultisampleState {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(24))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(24));
    return new WGPUMultisampleState(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get count(): number {
    return this.view.getUint32(8, littleEndian);
  }
  set count(value: number) {
    this.view.setUint32(8, value, littleEndian);
  }

  get mask(): number {
    return this.view.getUint32(12, littleEndian);
  }
  set mask(value: number) {
    this.view.setUint32(12, value, littleEndian);
  }

  get alphaToCoverageEnabled(): boolean {
    return this.view.getInt8(16);
  }
  set alphaToCoverageEnabled(value: boolean) {
    this.view.setInt8(16, value);
  }
}


export class WGPUOrigin3D {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(12))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(12));
    return new WGPUOrigin3D(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get x(): number {
    return this.view.getUint32(0, littleEndian);
  }
  set x(value: number) {
    this.view.setUint32(0, value, littleEndian);
  }

  get y(): number {
    return this.view.getUint32(4, littleEndian);
  }
  set y(value: number) {
    this.view.setUint32(4, value, littleEndian);
  }

  get z(): number {
    return this.view.getUint32(8, littleEndian);
  }
  set z(value: number) {
    this.view.setUint32(8, value, littleEndian);
  }
}


export class WGPUPipelineLayoutDescriptor {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(32))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(32));
    return new WGPUPipelineLayoutDescriptor(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(8, littleEndian));
  }
  set label(value: Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get bindGroupLayoutCount(): bigint {
    return this.view.getBigUint64(16, littleEndian);
  }
  set bindGroupLayoutCount(value: bigint) {
    this.view.setBigUint64(16, value, littleEndian);
  }

  get bindGroupLayouts(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(24, littleEndian));
  }
  set bindGroupLayouts(value: Deno.PointerValue) {
    this.view.setBigUint64(24, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }
}


export class WGPUPrimitiveDepthClipControl {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(24))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(24));
    return new WGPUPrimitiveDepthClipControl(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get chain(): WGPUChainedStruct {
    return new WGPUChainedStruct(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set chain(value: WGPUChainedStruct) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 0, 16).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 16));
  }

  get unclippedDepth(): boolean {
    return this.view.getInt8(16);
  }
  set unclippedDepth(value: boolean) {
    this.view.setInt8(16, value);
  }
}


export class WGPUPrimitiveState {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(24))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(24));
    return new WGPUPrimitiveState(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get topology(): WGPUPrimitiveTopology {
    return this.view.getUint32(8, littleEndian);
  }
  set topology(value: WGPUPrimitiveTopology) {
    this.view.setUint32(8, value, littleEndian);
  }

  get stripIndexFormat(): WGPUIndexFormat {
    return this.view.getUint32(12, littleEndian);
  }
  set stripIndexFormat(value: WGPUIndexFormat) {
    this.view.setUint32(12, value, littleEndian);
  }

  get frontFace(): WGPUFrontFace {
    return this.view.getUint32(16, littleEndian);
  }
  set frontFace(value: WGPUFrontFace) {
    this.view.setUint32(16, value, littleEndian);
  }

  get cullMode(): WGPUCullMode {
    return this.view.getUint32(20, littleEndian);
  }
  set cullMode(value: WGPUCullMode) {
    this.view.setUint32(20, value, littleEndian);
  }
}


export class WGPUQuerySetDescriptor {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(40))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(40));
    return new WGPUQuerySetDescriptor(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(8, littleEndian));
  }
  set label(value: Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get type(): WGPUQueryType {
    return this.view.getUint32(16, littleEndian);
  }
  set type(value: WGPUQueryType) {
    this.view.setUint32(16, value, littleEndian);
  }

  get count(): number {
    return this.view.getUint32(20, littleEndian);
  }
  set count(value: number) {
    this.view.setUint32(20, value, littleEndian);
  }

  get pipelineStatistics(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(24, littleEndian));
  }
  set pipelineStatistics(value: Deno.PointerValue) {
    this.view.setBigUint64(24, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get pipelineStatisticsCount(): bigint {
    return this.view.getBigUint64(32, littleEndian);
  }
  set pipelineStatisticsCount(value: bigint) {
    this.view.setBigUint64(32, value, littleEndian);
  }
}


export class WGPUQueueDescriptor {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(16))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(16));
    return new WGPUQueueDescriptor(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(8, littleEndian));
  }
  set label(value: Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }
}


export class WGPURenderBundleDescriptor {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(16))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(16));
    return new WGPURenderBundleDescriptor(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(8, littleEndian));
  }
  set label(value: Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }
}


export class WGPURenderBundleEncoderDescriptor {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(48))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(48));
    return new WGPURenderBundleEncoderDescriptor(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(8, littleEndian));
  }
  set label(value: Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get colorFormatsCount(): bigint {
    return this.view.getBigUint64(16, littleEndian);
  }
  set colorFormatsCount(value: bigint) {
    this.view.setBigUint64(16, value, littleEndian);
  }

  get colorFormats(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(24, littleEndian));
  }
  set colorFormats(value: Deno.PointerValue) {
    this.view.setBigUint64(24, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get depthStencilFormat(): WGPUTextureFormat {
    return this.view.getUint32(32, littleEndian);
  }
  set depthStencilFormat(value: WGPUTextureFormat) {
    this.view.setUint32(32, value, littleEndian);
  }

  get sampleCount(): number {
    return this.view.getUint32(36, littleEndian);
  }
  set sampleCount(value: number) {
    this.view.setUint32(36, value, littleEndian);
  }

  get depthReadOnly(): boolean {
    return this.view.getInt8(40);
  }
  set depthReadOnly(value: boolean) {
    this.view.setInt8(40, value);
  }

  get stencilReadOnly(): boolean {
    return this.view.getInt8(41);
  }
  set stencilReadOnly(value: boolean) {
    this.view.setInt8(41, value);
  }
}


export class WGPURenderPassDepthStencilAttachment {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(40))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(40));
    return new WGPURenderPassDepthStencilAttachment(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get view(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set view(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get depthLoadOp(): WGPULoadOp {
    return this.view.getUint32(8, littleEndian);
  }
  set depthLoadOp(value: WGPULoadOp) {
    this.view.setUint32(8, value, littleEndian);
  }

  get depthStoreOp(): WGPUStoreOp {
    return this.view.getUint32(12, littleEndian);
  }
  set depthStoreOp(value: WGPUStoreOp) {
    this.view.setUint32(12, value, littleEndian);
  }

  get depthClearValue(): number {
    return this.view.getFloat32(16, littleEndian);
  }
  set depthClearValue(value: number) {
    this.view.setFloat32(16, value, littleEndian);
  }

  get depthReadOnly(): boolean {
    return this.view.getInt8(20);
  }
  set depthReadOnly(value: boolean) {
    this.view.setInt8(20, value);
  }

  get stencilLoadOp(): WGPULoadOp {
    return this.view.getUint32(24, littleEndian);
  }
  set stencilLoadOp(value: WGPULoadOp) {
    this.view.setUint32(24, value, littleEndian);
  }

  get stencilStoreOp(): WGPUStoreOp {
    return this.view.getUint32(28, littleEndian);
  }
  set stencilStoreOp(value: WGPUStoreOp) {
    this.view.setUint32(28, value, littleEndian);
  }

  get stencilClearValue(): number {
    return this.view.getUint32(32, littleEndian);
  }
  set stencilClearValue(value: number) {
    this.view.setUint32(32, value, littleEndian);
  }

  get stencilReadOnly(): boolean {
    return this.view.getInt8(36);
  }
  set stencilReadOnly(value: boolean) {
    this.view.setInt8(36, value);
  }
}


export class WGPURenderPassDescriptorMaxDrawCount {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(24))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(24));
    return new WGPURenderPassDescriptorMaxDrawCount(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get chain(): WGPUChainedStruct {
    return new WGPUChainedStruct(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set chain(value: WGPUChainedStruct) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 0, 16).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 16));
  }

  get maxDrawCount(): bigint {
    return this.view.getBigUint64(16, littleEndian);
  }
  set maxDrawCount(value: bigint) {
    this.view.setBigUint64(16, value, littleEndian);
  }
}


export class WGPURenderPassTimestampWrite {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(16))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(16));
    return new WGPURenderPassTimestampWrite(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get querySet(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set querySet(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get queryIndex(): number {
    return this.view.getUint32(8, littleEndian);
  }
  set queryIndex(value: number) {
    this.view.setUint32(8, value, littleEndian);
  }

  get location(): WGPURenderPassTimestampLocation {
    return this.view.getUint32(12, littleEndian);
  }
  set location(value: WGPURenderPassTimestampLocation) {
    this.view.setUint32(12, value, littleEndian);
  }
}


export class WGPURequestAdapterOptions {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(32))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(32));
    return new WGPURequestAdapterOptions(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get compatibleSurface(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(8, littleEndian));
  }
  set compatibleSurface(value: Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get powerPreference(): WGPUPowerPreference {
    return this.view.getUint32(16, littleEndian);
  }
  set powerPreference(value: WGPUPowerPreference) {
    this.view.setUint32(16, value, littleEndian);
  }

  get backendType(): WGPUBackendType {
    return this.view.getUint32(20, littleEndian);
  }
  set backendType(value: WGPUBackendType) {
    this.view.setUint32(20, value, littleEndian);
  }

  get forceFallbackAdapter(): boolean {
    return this.view.getInt8(24);
  }
  set forceFallbackAdapter(value: boolean) {
    this.view.setInt8(24, value);
  }
}


export class WGPUSamplerBindingLayout {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(16))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(16));
    return new WGPUSamplerBindingLayout(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get type(): WGPUSamplerBindingType {
    return this.view.getUint32(8, littleEndian);
  }
  set type(value: WGPUSamplerBindingType) {
    this.view.setUint32(8, value, littleEndian);
  }
}


export class WGPUSamplerDescriptor {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(56))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(56));
    return new WGPUSamplerDescriptor(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(8, littleEndian));
  }
  set label(value: Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get addressModeU(): WGPUAddressMode {
    return this.view.getUint32(16, littleEndian);
  }
  set addressModeU(value: WGPUAddressMode) {
    this.view.setUint32(16, value, littleEndian);
  }

  get addressModeV(): WGPUAddressMode {
    return this.view.getUint32(20, littleEndian);
  }
  set addressModeV(value: WGPUAddressMode) {
    this.view.setUint32(20, value, littleEndian);
  }

  get addressModeW(): WGPUAddressMode {
    return this.view.getUint32(24, littleEndian);
  }
  set addressModeW(value: WGPUAddressMode) {
    this.view.setUint32(24, value, littleEndian);
  }

  get magFilter(): WGPUFilterMode {
    return this.view.getUint32(28, littleEndian);
  }
  set magFilter(value: WGPUFilterMode) {
    this.view.setUint32(28, value, littleEndian);
  }

  get minFilter(): WGPUFilterMode {
    return this.view.getUint32(32, littleEndian);
  }
  set minFilter(value: WGPUFilterMode) {
    this.view.setUint32(32, value, littleEndian);
  }

  get mipmapFilter(): WGPUMipmapFilterMode {
    return this.view.getUint32(36, littleEndian);
  }
  set mipmapFilter(value: WGPUMipmapFilterMode) {
    this.view.setUint32(36, value, littleEndian);
  }

  get lodMinClamp(): number {
    return this.view.getFloat32(40, littleEndian);
  }
  set lodMinClamp(value: number) {
    this.view.setFloat32(40, value, littleEndian);
  }

  get lodMaxClamp(): number {
    return this.view.getFloat32(44, littleEndian);
  }
  set lodMaxClamp(value: number) {
    this.view.setFloat32(44, value, littleEndian);
  }

  get compare(): WGPUCompareFunction {
    return this.view.getUint32(48, littleEndian);
  }
  set compare(value: WGPUCompareFunction) {
    this.view.setUint32(48, value, littleEndian);
  }

  get maxAnisotropy(): number {
    return this.view.getUint16(52, littleEndian);
  }
  set maxAnisotropy(value: number) {
    this.view.setUint16(52, value, littleEndian);
  }
}


export class WGPUShaderModuleCompilationHint {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(24))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(24));
    return new WGPUShaderModuleCompilationHint(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get entryPoint(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(8, littleEndian));
  }
  set entryPoint(value: Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get layout(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(16, littleEndian));
  }
  set layout(value: Deno.PointerValue) {
    this.view.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }
}


export class WGPUShaderModuleSPIRVDescriptor {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(32))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(32));
    return new WGPUShaderModuleSPIRVDescriptor(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get chain(): WGPUChainedStruct {
    return new WGPUChainedStruct(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set chain(value: WGPUChainedStruct) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 0, 16).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 16));
  }

  get codeSize(): number {
    return this.view.getUint32(16, littleEndian);
  }
  set codeSize(value: number) {
    this.view.setUint32(16, value, littleEndian);
  }

  get code(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(24, littleEndian));
  }
  set code(value: Deno.PointerValue) {
    this.view.setBigUint64(24, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }
}


export class WGPUShaderModuleWGSLDescriptor {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(24))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(24));
    return new WGPUShaderModuleWGSLDescriptor(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get chain(): WGPUChainedStruct {
    return new WGPUChainedStruct(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set chain(value: WGPUChainedStruct) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 0, 16).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 16));
  }

  get code(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(16, littleEndian));
  }
  set code(value: Deno.PointerValue) {
    this.view.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }
}


export class WGPUStencilFaceState {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(16))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(16));
    return new WGPUStencilFaceState(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get compare(): WGPUCompareFunction {
    return this.view.getUint32(0, littleEndian);
  }
  set compare(value: WGPUCompareFunction) {
    this.view.setUint32(0, value, littleEndian);
  }

  get failOp(): WGPUStencilOperation {
    return this.view.getUint32(4, littleEndian);
  }
  set failOp(value: WGPUStencilOperation) {
    this.view.setUint32(4, value, littleEndian);
  }

  get depthFailOp(): WGPUStencilOperation {
    return this.view.getUint32(8, littleEndian);
  }
  set depthFailOp(value: WGPUStencilOperation) {
    this.view.setUint32(8, value, littleEndian);
  }

  get passOp(): WGPUStencilOperation {
    return this.view.getUint32(12, littleEndian);
  }
  set passOp(value: WGPUStencilOperation) {
    this.view.setUint32(12, value, littleEndian);
  }
}


export class WGPUStorageTextureBindingLayout {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(24))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(24));
    return new WGPUStorageTextureBindingLayout(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get access(): WGPUStorageTextureAccess {
    return this.view.getUint32(8, littleEndian);
  }
  set access(value: WGPUStorageTextureAccess) {
    this.view.setUint32(8, value, littleEndian);
  }

  get format(): WGPUTextureFormat {
    return this.view.getUint32(12, littleEndian);
  }
  set format(value: WGPUTextureFormat) {
    this.view.setUint32(12, value, littleEndian);
  }

  get viewDimension(): WGPUTextureViewDimension {
    return this.view.getUint32(16, littleEndian);
  }
  set viewDimension(value: WGPUTextureViewDimension) {
    this.view.setUint32(16, value, littleEndian);
  }
}


export class WGPUSurfaceDescriptor {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(16))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(16));
    return new WGPUSurfaceDescriptor(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(8, littleEndian));
  }
  set label(value: Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }
}


export class WGPUSurfaceDescriptorFromAndroidNativeWindow {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(24))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(24));
    return new WGPUSurfaceDescriptorFromAndroidNativeWindow(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get chain(): WGPUChainedStruct {
    return new WGPUChainedStruct(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set chain(value: WGPUChainedStruct) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 0, 16).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 16));
  }

  get window(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(16, littleEndian));
  }
  set window(value: Deno.PointerValue) {
    this.view.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }
}


export class WGPUSurfaceDescriptorFromCanvasHTMLSelector {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(24))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(24));
    return new WGPUSurfaceDescriptorFromCanvasHTMLSelector(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get chain(): WGPUChainedStruct {
    return new WGPUChainedStruct(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set chain(value: WGPUChainedStruct) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 0, 16).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 16));
  }

  get selector(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(16, littleEndian));
  }
  set selector(value: Deno.PointerValue) {
    this.view.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }
}


export class WGPUSurfaceDescriptorFromMetalLayer {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(24))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(24));
    return new WGPUSurfaceDescriptorFromMetalLayer(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get chain(): WGPUChainedStruct {
    return new WGPUChainedStruct(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set chain(value: WGPUChainedStruct) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 0, 16).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 16));
  }

  get layer(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(16, littleEndian));
  }
  set layer(value: Deno.PointerValue) {
    this.view.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }
}


export class WGPUSurfaceDescriptorFromWaylandSurface {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(32))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(32));
    return new WGPUSurfaceDescriptorFromWaylandSurface(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get chain(): WGPUChainedStruct {
    return new WGPUChainedStruct(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set chain(value: WGPUChainedStruct) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 0, 16).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 16));
  }

  get display(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(16, littleEndian));
  }
  set display(value: Deno.PointerValue) {
    this.view.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get surface(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(24, littleEndian));
  }
  set surface(value: Deno.PointerValue) {
    this.view.setBigUint64(24, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }
}


export class WGPUSurfaceDescriptorFromWindowsHWND {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(32))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(32));
    return new WGPUSurfaceDescriptorFromWindowsHWND(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get chain(): WGPUChainedStruct {
    return new WGPUChainedStruct(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set chain(value: WGPUChainedStruct) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 0, 16).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 16));
  }

  get hinstance(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(16, littleEndian));
  }
  set hinstance(value: Deno.PointerValue) {
    this.view.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get hwnd(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(24, littleEndian));
  }
  set hwnd(value: Deno.PointerValue) {
    this.view.setBigUint64(24, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }
}


export class WGPUSurfaceDescriptorFromXcbWindow {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(32))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(32));
    return new WGPUSurfaceDescriptorFromXcbWindow(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get chain(): WGPUChainedStruct {
    return new WGPUChainedStruct(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set chain(value: WGPUChainedStruct) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 0, 16).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 16));
  }

  get connection(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(16, littleEndian));
  }
  set connection(value: Deno.PointerValue) {
    this.view.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get window(): number {
    return this.view.getUint32(24, littleEndian);
  }
  set window(value: number) {
    this.view.setUint32(24, value, littleEndian);
  }
}


export class WGPUSurfaceDescriptorFromXlibWindow {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(32))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(32));
    return new WGPUSurfaceDescriptorFromXlibWindow(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get chain(): WGPUChainedStruct {
    return new WGPUChainedStruct(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set chain(value: WGPUChainedStruct) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 0, 16).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 16));
  }

  get display(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(16, littleEndian));
  }
  set display(value: Deno.PointerValue) {
    this.view.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get window(): number {
    return this.view.getUint32(24, littleEndian);
  }
  set window(value: number) {
    this.view.setUint32(24, value, littleEndian);
  }
}


export class WGPUSwapChainDescriptor {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(40))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(40));
    return new WGPUSwapChainDescriptor(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(8, littleEndian));
  }
  set label(value: Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get usage(): number {
    return this.view.getUint32(16, littleEndian);
  }
  set usage(value: number) {
    this.view.setUint32(16, value, littleEndian);
  }

  get format(): WGPUTextureFormat {
    return this.view.getUint32(20, littleEndian);
  }
  set format(value: WGPUTextureFormat) {
    this.view.setUint32(20, value, littleEndian);
  }

  get width(): number {
    return this.view.getUint32(24, littleEndian);
  }
  set width(value: number) {
    this.view.setUint32(24, value, littleEndian);
  }

  get height(): number {
    return this.view.getUint32(28, littleEndian);
  }
  set height(value: number) {
    this.view.setUint32(28, value, littleEndian);
  }

  get presentMode(): WGPUPresentMode {
    return this.view.getUint32(32, littleEndian);
  }
  set presentMode(value: WGPUPresentMode) {
    this.view.setUint32(32, value, littleEndian);
  }
}


export class WGPUTextureBindingLayout {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(24))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(24));
    return new WGPUTextureBindingLayout(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get sampleType(): WGPUTextureSampleType {
    return this.view.getUint32(8, littleEndian);
  }
  set sampleType(value: WGPUTextureSampleType) {
    this.view.setUint32(8, value, littleEndian);
  }

  get viewDimension(): WGPUTextureViewDimension {
    return this.view.getUint32(12, littleEndian);
  }
  set viewDimension(value: WGPUTextureViewDimension) {
    this.view.setUint32(12, value, littleEndian);
  }

  get multisampled(): boolean {
    return this.view.getInt8(16);
  }
  set multisampled(value: boolean) {
    this.view.setInt8(16, value);
  }
}


export class WGPUTextureDataLayout {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(24))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(24));
    return new WGPUTextureDataLayout(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get offset(): bigint {
    return this.view.getBigUint64(8, littleEndian);
  }
  set offset(value: bigint) {
    this.view.setBigUint64(8, value, littleEndian);
  }

  get bytesPerRow(): number {
    return this.view.getUint32(16, littleEndian);
  }
  set bytesPerRow(value: number) {
    this.view.setUint32(16, value, littleEndian);
  }

  get rowsPerImage(): number {
    return this.view.getUint32(20, littleEndian);
  }
  set rowsPerImage(value: number) {
    this.view.setUint32(20, value, littleEndian);
  }
}


export class WGPUTextureViewDescriptor {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(48))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(48));
    return new WGPUTextureViewDescriptor(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(8, littleEndian));
  }
  set label(value: Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get format(): WGPUTextureFormat {
    return this.view.getUint32(16, littleEndian);
  }
  set format(value: WGPUTextureFormat) {
    this.view.setUint32(16, value, littleEndian);
  }

  get dimension(): WGPUTextureViewDimension {
    return this.view.getUint32(20, littleEndian);
  }
  set dimension(value: WGPUTextureViewDimension) {
    this.view.setUint32(20, value, littleEndian);
  }

  get baseMipLevel(): number {
    return this.view.getUint32(24, littleEndian);
  }
  set baseMipLevel(value: number) {
    this.view.setUint32(24, value, littleEndian);
  }

  get mipLevelCount(): number {
    return this.view.getUint32(28, littleEndian);
  }
  set mipLevelCount(value: number) {
    this.view.setUint32(28, value, littleEndian);
  }

  get baseArrayLayer(): number {
    return this.view.getUint32(32, littleEndian);
  }
  set baseArrayLayer(value: number) {
    this.view.setUint32(32, value, littleEndian);
  }

  get arrayLayerCount(): number {
    return this.view.getUint32(36, littleEndian);
  }
  set arrayLayerCount(value: number) {
    this.view.setUint32(36, value, littleEndian);
  }

  get aspect(): WGPUTextureAspect {
    return this.view.getUint32(40, littleEndian);
  }
  set aspect(value: WGPUTextureAspect) {
    this.view.setUint32(40, value, littleEndian);
  }
}


export class WGPUVertexAttribute {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(24))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(24));
    return new WGPUVertexAttribute(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get format(): WGPUVertexFormat {
    return this.view.getUint32(0, littleEndian);
  }
  set format(value: WGPUVertexFormat) {
    this.view.setUint32(0, value, littleEndian);
  }

  get offset(): bigint {
    return this.view.getBigUint64(8, littleEndian);
  }
  set offset(value: bigint) {
    this.view.setBigUint64(8, value, littleEndian);
  }

  get shaderLocation(): number {
    return this.view.getUint32(16, littleEndian);
  }
  set shaderLocation(value: number) {
    this.view.setUint32(16, value, littleEndian);
  }
}


export class WGPUBindGroupDescriptor {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(40))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(40));
    return new WGPUBindGroupDescriptor(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(8, littleEndian));
  }
  set label(value: Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get layout(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(16, littleEndian));
  }
  set layout(value: Deno.PointerValue) {
    this.view.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get entryCount(): bigint {
    return this.view.getBigUint64(24, littleEndian);
  }
  set entryCount(value: bigint) {
    this.view.setBigUint64(24, value, littleEndian);
  }

  get entries(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(32, littleEndian));
  }
  set entries(value: Deno.PointerValue) {
    this.view.setBigUint64(32, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }
}


export class WGPUBindGroupLayoutEntry {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(104))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(104));
    return new WGPUBindGroupLayoutEntry(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get binding(): number {
    return this.view.getUint32(8, littleEndian);
  }
  set binding(value: number) {
    this.view.setUint32(8, value, littleEndian);
  }

  get visibility(): number {
    return this.view.getUint32(12, littleEndian);
  }
  set visibility(value: number) {
    this.view.setUint32(12, value, littleEndian);
  }

  get buffer(): WGPUBufferBindingLayout {
    return new WGPUBufferBindingLayout(new DataView(this.view.buffer, this.view.byteOffset + 16));
  }
  set buffer(value: WGPUBufferBindingLayout) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 16, 24).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 24));
  }

  get sampler(): WGPUSamplerBindingLayout {
    return new WGPUSamplerBindingLayout(new DataView(this.view.buffer, this.view.byteOffset + 40));
  }
  set sampler(value: WGPUSamplerBindingLayout) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 40, 16).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 16));
  }

  get texture(): WGPUTextureBindingLayout {
    return new WGPUTextureBindingLayout(new DataView(this.view.buffer, this.view.byteOffset + 56));
  }
  set texture(value: WGPUTextureBindingLayout) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 56, 24).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 24));
  }

  get storageTexture(): WGPUStorageTextureBindingLayout {
    return new WGPUStorageTextureBindingLayout(new DataView(this.view.buffer, this.view.byteOffset + 80));
  }
  set storageTexture(value: WGPUStorageTextureBindingLayout) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 80, 24).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 24));
  }
}


export class WGPUBlendState {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(24))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(24));
    return new WGPUBlendState(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get color(): WGPUBlendComponent {
    return new WGPUBlendComponent(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set color(value: WGPUBlendComponent) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 0, 12).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 12));
  }

  get alpha(): WGPUBlendComponent {
    return new WGPUBlendComponent(new DataView(this.view.buffer, this.view.byteOffset + 12));
  }
  set alpha(value: WGPUBlendComponent) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 12, 12).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 12));
  }
}


export class WGPUCompilationInfo {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(24))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(24));
    return new WGPUCompilationInfo(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get messageCount(): bigint {
    return this.view.getBigUint64(8, littleEndian);
  }
  set messageCount(value: bigint) {
    this.view.setBigUint64(8, value, littleEndian);
  }

  get messages(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(16, littleEndian));
  }
  set messages(value: Deno.PointerValue) {
    this.view.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }
}


export class WGPUComputePassDescriptor {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(32))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(32));
    return new WGPUComputePassDescriptor(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(8, littleEndian));
  }
  set label(value: Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get timestampWriteCount(): bigint {
    return this.view.getBigUint64(16, littleEndian);
  }
  set timestampWriteCount(value: bigint) {
    this.view.setBigUint64(16, value, littleEndian);
  }

  get timestampWrites(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(24, littleEndian));
  }
  set timestampWrites(value: Deno.PointerValue) {
    this.view.setBigUint64(24, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }
}


export class WGPUDepthStencilState {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(72))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(72));
    return new WGPUDepthStencilState(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get format(): WGPUTextureFormat {
    return this.view.getUint32(8, littleEndian);
  }
  set format(value: WGPUTextureFormat) {
    this.view.setUint32(8, value, littleEndian);
  }

  get depthWriteEnabled(): boolean {
    return this.view.getInt8(12);
  }
  set depthWriteEnabled(value: boolean) {
    this.view.setInt8(12, value);
  }

  get depthCompare(): WGPUCompareFunction {
    return this.view.getUint32(16, littleEndian);
  }
  set depthCompare(value: WGPUCompareFunction) {
    this.view.setUint32(16, value, littleEndian);
  }

  get stencilFront(): WGPUStencilFaceState {
    return new WGPUStencilFaceState(new DataView(this.view.buffer, this.view.byteOffset + 20));
  }
  set stencilFront(value: WGPUStencilFaceState) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 20, 16).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 16));
  }

  get stencilBack(): WGPUStencilFaceState {
    return new WGPUStencilFaceState(new DataView(this.view.buffer, this.view.byteOffset + 36));
  }
  set stencilBack(value: WGPUStencilFaceState) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 36, 16).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 16));
  }

  get stencilReadMask(): number {
    return this.view.getUint32(52, littleEndian);
  }
  set stencilReadMask(value: number) {
    this.view.setUint32(52, value, littleEndian);
  }

  get stencilWriteMask(): number {
    return this.view.getUint32(56, littleEndian);
  }
  set stencilWriteMask(value: number) {
    this.view.setUint32(56, value, littleEndian);
  }

  get depthBias(): number {
    return this.view.getInt32(60, littleEndian);
  }
  set depthBias(value: number) {
    this.view.setInt32(60, value, littleEndian);
  }

  get depthBiasSlopeScale(): number {
    return this.view.getFloat32(64, littleEndian);
  }
  set depthBiasSlopeScale(value: number) {
    this.view.setFloat32(64, value, littleEndian);
  }

  get depthBiasClamp(): number {
    return this.view.getFloat32(68, littleEndian);
  }
  set depthBiasClamp(value: number) {
    this.view.setFloat32(68, value, littleEndian);
  }
}


export class WGPUImageCopyBuffer {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(40))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(40));
    return new WGPUImageCopyBuffer(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get layout(): WGPUTextureDataLayout {
    return new WGPUTextureDataLayout(new DataView(this.view.buffer, this.view.byteOffset + 8));
  }
  set layout(value: WGPUTextureDataLayout) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 8, 24).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 24));
  }

  get buffer(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(32, littleEndian));
  }
  set buffer(value: Deno.PointerValue) {
    this.view.setBigUint64(32, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }
}


export class WGPUImageCopyTexture {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(40))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(40));
    return new WGPUImageCopyTexture(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get texture(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(8, littleEndian));
  }
  set texture(value: Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get mipLevel(): number {
    return this.view.getUint32(16, littleEndian);
  }
  set mipLevel(value: number) {
    this.view.setUint32(16, value, littleEndian);
  }

  get origin(): WGPUOrigin3D {
    return new WGPUOrigin3D(new DataView(this.view.buffer, this.view.byteOffset + 20));
  }
  set origin(value: WGPUOrigin3D) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 20, 12).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 12));
  }

  get aspect(): WGPUTextureAspect {
    return this.view.getUint32(32, littleEndian);
  }
  set aspect(value: WGPUTextureAspect) {
    this.view.setUint32(32, value, littleEndian);
  }
}


export class WGPUProgrammableStageDescriptor {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(40))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(40));
    return new WGPUProgrammableStageDescriptor(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get module(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(8, littleEndian));
  }
  set module(value: Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get entryPoint(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(16, littleEndian));
  }
  set entryPoint(value: Deno.PointerValue) {
    this.view.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get constantCount(): bigint {
    return this.view.getBigUint64(24, littleEndian);
  }
  set constantCount(value: bigint) {
    this.view.setBigUint64(24, value, littleEndian);
  }

  get constants(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(32, littleEndian));
  }
  set constants(value: Deno.PointerValue) {
    this.view.setBigUint64(32, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }
}


export class WGPURenderPassColorAttachment {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(56))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(56));
    return new WGPURenderPassColorAttachment(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get view(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set view(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get resolveTarget(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(8, littleEndian));
  }
  set resolveTarget(value: Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get loadOp(): WGPULoadOp {
    return this.view.getUint32(16, littleEndian);
  }
  set loadOp(value: WGPULoadOp) {
    this.view.setUint32(16, value, littleEndian);
  }

  get storeOp(): WGPUStoreOp {
    return this.view.getUint32(20, littleEndian);
  }
  set storeOp(value: WGPUStoreOp) {
    this.view.setUint32(20, value, littleEndian);
  }

  get clearValue(): WGPUColor {
    return new WGPUColor(new DataView(this.view.buffer, this.view.byteOffset + 24));
  }
  set clearValue(value: WGPUColor) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 24, 32).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 32));
  }
}


export class WGPURequiredLimits {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(152))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(152));
    return new WGPURequiredLimits(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get limits(): WGPULimits {
    return new WGPULimits(new DataView(this.view.buffer, this.view.byteOffset + 8));
  }
  set limits(value: WGPULimits) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 8, 144).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 144));
  }
}


export class WGPUShaderModuleDescriptor {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(32))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(32));
    return new WGPUShaderModuleDescriptor(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(8, littleEndian));
  }
  set label(value: Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get hintCount(): bigint {
    return this.view.getBigUint64(16, littleEndian);
  }
  set hintCount(value: bigint) {
    this.view.setBigUint64(16, value, littleEndian);
  }

  get hints(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(24, littleEndian));
  }
  set hints(value: Deno.PointerValue) {
    this.view.setBigUint64(24, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }
}


export class WGPUSupportedLimits {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(152))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(152));
    return new WGPUSupportedLimits(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get limits(): WGPULimits {
    return new WGPULimits(new DataView(this.view.buffer, this.view.byteOffset + 8));
  }
  set limits(value: WGPULimits) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 8, 144).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 144));
  }
}


export class WGPUTextureDescriptor {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(64))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(64));
    return new WGPUTextureDescriptor(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(8, littleEndian));
  }
  set label(value: Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get usage(): number {
    return this.view.getUint32(16, littleEndian);
  }
  set usage(value: number) {
    this.view.setUint32(16, value, littleEndian);
  }

  get dimension(): WGPUTextureDimension {
    return this.view.getUint32(20, littleEndian);
  }
  set dimension(value: WGPUTextureDimension) {
    this.view.setUint32(20, value, littleEndian);
  }

  get size(): WGPUExtent3D {
    return new WGPUExtent3D(new DataView(this.view.buffer, this.view.byteOffset + 24));
  }
  set size(value: WGPUExtent3D) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 24, 12).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 12));
  }

  get format(): WGPUTextureFormat {
    return this.view.getUint32(36, littleEndian);
  }
  set format(value: WGPUTextureFormat) {
    this.view.setUint32(36, value, littleEndian);
  }

  get mipLevelCount(): number {
    return this.view.getUint32(40, littleEndian);
  }
  set mipLevelCount(value: number) {
    this.view.setUint32(40, value, littleEndian);
  }

  get sampleCount(): number {
    return this.view.getUint32(44, littleEndian);
  }
  set sampleCount(value: number) {
    this.view.setUint32(44, value, littleEndian);
  }

  get viewFormatCount(): bigint {
    return this.view.getBigUint64(48, littleEndian);
  }
  set viewFormatCount(value: bigint) {
    this.view.setBigUint64(48, value, littleEndian);
  }

  get viewFormats(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(56, littleEndian));
  }
  set viewFormats(value: Deno.PointerValue) {
    this.view.setBigUint64(56, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }
}


export class WGPUVertexBufferLayout {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(32))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(32));
    return new WGPUVertexBufferLayout(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get arrayStride(): bigint {
    return this.view.getBigUint64(0, littleEndian);
  }
  set arrayStride(value: bigint) {
    this.view.setBigUint64(0, value, littleEndian);
  }

  get stepMode(): WGPUVertexStepMode {
    return this.view.getUint32(8, littleEndian);
  }
  set stepMode(value: WGPUVertexStepMode) {
    this.view.setUint32(8, value, littleEndian);
  }

  get attributeCount(): bigint {
    return this.view.getBigUint64(16, littleEndian);
  }
  set attributeCount(value: bigint) {
    this.view.setBigUint64(16, value, littleEndian);
  }

  get attributes(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(24, littleEndian));
  }
  set attributes(value: Deno.PointerValue) {
    this.view.setBigUint64(24, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }
}


export class WGPUBindGroupLayoutDescriptor {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(32))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(32));
    return new WGPUBindGroupLayoutDescriptor(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(8, littleEndian));
  }
  set label(value: Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get entryCount(): bigint {
    return this.view.getBigUint64(16, littleEndian);
  }
  set entryCount(value: bigint) {
    this.view.setBigUint64(16, value, littleEndian);
  }

  get entries(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(24, littleEndian));
  }
  set entries(value: Deno.PointerValue) {
    this.view.setBigUint64(24, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }
}


export class WGPUColorTargetState {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(32))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(32));
    return new WGPUColorTargetState(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get format(): WGPUTextureFormat {
    return this.view.getUint32(8, littleEndian);
  }
  set format(value: WGPUTextureFormat) {
    this.view.setUint32(8, value, littleEndian);
  }

  get blend(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(16, littleEndian));
  }
  set blend(value: Deno.PointerValue) {
    this.view.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get writeMask(): number {
    return this.view.getUint32(24, littleEndian);
  }
  set writeMask(value: number) {
    this.view.setUint32(24, value, littleEndian);
  }
}


export class WGPUComputePipelineDescriptor {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(64))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(64));
    return new WGPUComputePipelineDescriptor(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(8, littleEndian));
  }
  set label(value: Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get layout(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(16, littleEndian));
  }
  set layout(value: Deno.PointerValue) {
    this.view.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get compute(): WGPUProgrammableStageDescriptor {
    return new WGPUProgrammableStageDescriptor(new DataView(this.view.buffer, this.view.byteOffset + 24));
  }
  set compute(value: WGPUProgrammableStageDescriptor) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 24, 40).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 40));
  }
}


export class WGPUDeviceDescriptor {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(72))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(72));
    return new WGPUDeviceDescriptor(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(8, littleEndian));
  }
  set label(value: Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get requiredFeaturesCount(): bigint {
    return this.view.getBigUint64(16, littleEndian);
  }
  set requiredFeaturesCount(value: bigint) {
    this.view.setBigUint64(16, value, littleEndian);
  }

  get requiredFeatures(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(24, littleEndian));
  }
  set requiredFeatures(value: Deno.PointerValue) {
    this.view.setBigUint64(24, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get requiredLimits(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(32, littleEndian));
  }
  set requiredLimits(value: Deno.PointerValue) {
    this.view.setBigUint64(32, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get defaultQueue(): WGPUQueueDescriptor {
    return new WGPUQueueDescriptor(new DataView(this.view.buffer, this.view.byteOffset + 40));
  }
  set defaultQueue(value: WGPUQueueDescriptor) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 40, 16).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 16));
  }

  get deviceLostCallback(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(56, littleEndian));
  }
  set deviceLostCallback(value: Deno.PointerValue) {
    this.view.setBigUint64(56, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get deviceLostUserdata(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(64, littleEndian));
  }
  set deviceLostUserdata(value: Deno.PointerValue) {
    this.view.setBigUint64(64, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }
}


export class WGPURenderPassDescriptor {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(64))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(64));
    return new WGPURenderPassDescriptor(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(8, littleEndian));
  }
  set label(value: Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get colorAttachmentCount(): bigint {
    return this.view.getBigUint64(16, littleEndian);
  }
  set colorAttachmentCount(value: bigint) {
    this.view.setBigUint64(16, value, littleEndian);
  }

  get colorAttachments(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(24, littleEndian));
  }
  set colorAttachments(value: Deno.PointerValue) {
    this.view.setBigUint64(24, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get depthStencilAttachment(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(32, littleEndian));
  }
  set depthStencilAttachment(value: Deno.PointerValue) {
    this.view.setBigUint64(32, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get occlusionQuerySet(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(40, littleEndian));
  }
  set occlusionQuerySet(value: Deno.PointerValue) {
    this.view.setBigUint64(40, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get timestampWriteCount(): bigint {
    return this.view.getBigUint64(48, littleEndian);
  }
  set timestampWriteCount(value: bigint) {
    this.view.setBigUint64(48, value, littleEndian);
  }

  get timestampWrites(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(56, littleEndian));
  }
  set timestampWrites(value: Deno.PointerValue) {
    this.view.setBigUint64(56, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }
}


export class WGPUVertexState {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(56))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(56));
    return new WGPUVertexState(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get module(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(8, littleEndian));
  }
  set module(value: Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get entryPoint(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(16, littleEndian));
  }
  set entryPoint(value: Deno.PointerValue) {
    this.view.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get constantCount(): bigint {
    return this.view.getBigUint64(24, littleEndian);
  }
  set constantCount(value: bigint) {
    this.view.setBigUint64(24, value, littleEndian);
  }

  get constants(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(32, littleEndian));
  }
  set constants(value: Deno.PointerValue) {
    this.view.setBigUint64(32, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get bufferCount(): bigint {
    return this.view.getBigUint64(40, littleEndian);
  }
  set bufferCount(value: bigint) {
    this.view.setBigUint64(40, value, littleEndian);
  }

  get buffers(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(48, littleEndian));
  }
  set buffers(value: Deno.PointerValue) {
    this.view.setBigUint64(48, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }
}


export class WGPUFragmentState {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(56))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(56));
    return new WGPUFragmentState(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get module(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(8, littleEndian));
  }
  set module(value: Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get entryPoint(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(16, littleEndian));
  }
  set entryPoint(value: Deno.PointerValue) {
    this.view.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get constantCount(): bigint {
    return this.view.getBigUint64(24, littleEndian);
  }
  set constantCount(value: bigint) {
    this.view.setBigUint64(24, value, littleEndian);
  }

  get constants(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(32, littleEndian));
  }
  set constants(value: Deno.PointerValue) {
    this.view.setBigUint64(32, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get targetCount(): bigint {
    return this.view.getBigUint64(40, littleEndian);
  }
  set targetCount(value: bigint) {
    this.view.setBigUint64(40, value, littleEndian);
  }

  get targets(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(48, littleEndian));
  }
  set targets(value: Deno.PointerValue) {
    this.view.setBigUint64(48, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }
}


export class WGPURenderPipelineDescriptor {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(144))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(144));
    return new WGPURenderPipelineDescriptor(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(8, littleEndian));
  }
  set label(value: Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get layout(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(16, littleEndian));
  }
  set layout(value: Deno.PointerValue) {
    this.view.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get vertex(): WGPUVertexState {
    return new WGPUVertexState(new DataView(this.view.buffer, this.view.byteOffset + 24));
  }
  set vertex(value: WGPUVertexState) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 24, 56).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 56));
  }

  get primitive(): WGPUPrimitiveState {
    return new WGPUPrimitiveState(new DataView(this.view.buffer, this.view.byteOffset + 80));
  }
  set primitive(value: WGPUPrimitiveState) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 80, 24).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 24));
  }

  get depthStencil(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(104, littleEndian));
  }
  set depthStencil(value: Deno.PointerValue) {
    this.view.setBigUint64(104, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get multisample(): WGPUMultisampleState {
    return new WGPUMultisampleState(new DataView(this.view.buffer, this.view.byteOffset + 112));
  }
  set multisample(value: WGPUMultisampleState) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 112, 24).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 24));
  }

  get fragment(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(136, littleEndian));
  }
  set fragment(value: Deno.PointerValue) {
    this.view.setBigUint64(136, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }
}


export class WGPUChainedStruct {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(16))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(16));
    return new WGPUChainedStruct(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get next(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set next(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get sType(): WGPUSType {
    return this.view.getUint32(8, littleEndian);
  }
  set sType(value: WGPUSType) {
    this.view.setUint32(8, value, littleEndian);
  }
}


export class WGPUChainedStructOut {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(16))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(16));
    return new WGPUChainedStructOut(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get next(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set next(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get sType(): WGPUSType {
    return this.view.getUint32(8, littleEndian);
  }
  set sType(value: WGPUSType) {
    this.view.setUint32(8, value, littleEndian);
  }
}


export class WGPUInstanceExtras {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(40))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(40));
    return new WGPUInstanceExtras(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get chain(): WGPUChainedStruct {
    return new WGPUChainedStruct(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set chain(value: WGPUChainedStruct) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 0, 16).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 16));
  }

  get backends(): number {
    return this.view.getUint32(16, littleEndian);
  }
  set backends(value: number) {
    this.view.setUint32(16, value, littleEndian);
  }

  get dx12ShaderCompiler(): WGPUDx12Compiler {
    return this.view.getUint32(20, littleEndian);
  }
  set dx12ShaderCompiler(value: WGPUDx12Compiler) {
    this.view.setUint32(20, value, littleEndian);
  }

  get dxilPath(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(24, littleEndian));
  }
  set dxilPath(value: Deno.PointerValue) {
    this.view.setBigUint64(24, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get dxcPath(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(32, littleEndian));
  }
  set dxcPath(value: Deno.PointerValue) {
    this.view.setBigUint64(32, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }
}


export class WGPUDeviceExtras {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(24))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(24));
    return new WGPUDeviceExtras(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get chain(): WGPUChainedStruct {
    return new WGPUChainedStruct(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set chain(value: WGPUChainedStruct) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 0, 16).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 16));
  }

  get tracePath(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(16, littleEndian));
  }
  set tracePath(value: Deno.PointerValue) {
    this.view.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }
}


export class WGPURequiredLimitsExtras {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(24))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(24));
    return new WGPURequiredLimitsExtras(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get chain(): WGPUChainedStruct {
    return new WGPUChainedStruct(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set chain(value: WGPUChainedStruct) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 0, 16).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 16));
  }

  get maxPushConstantSize(): number {
    return this.view.getUint32(16, littleEndian);
  }
  set maxPushConstantSize(value: number) {
    this.view.setUint32(16, value, littleEndian);
  }
}


export class WGPUSupportedLimitsExtras {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(24))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(24));
    return new WGPUSupportedLimitsExtras(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get chain(): WGPUChainedStructOut {
    return new WGPUChainedStructOut(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set chain(value: WGPUChainedStructOut) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 0, 16).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 16));
  }

  get maxPushConstantSize(): number {
    return this.view.getUint32(16, littleEndian);
  }
  set maxPushConstantSize(value: number) {
    this.view.setUint32(16, value, littleEndian);
  }
}


export class WGPUPushConstantRange {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(12))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(12));
    return new WGPUPushConstantRange(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get stages(): number {
    return this.view.getUint32(0, littleEndian);
  }
  set stages(value: number) {
    this.view.setUint32(0, value, littleEndian);
  }

  get start(): number {
    return this.view.getUint32(4, littleEndian);
  }
  set start(value: number) {
    this.view.setUint32(4, value, littleEndian);
  }

  get end(): number {
    return this.view.getUint32(8, littleEndian);
  }
  set end(value: number) {
    this.view.setUint32(8, value, littleEndian);
  }
}


export class WGPUPipelineLayoutExtras {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(32))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(32));
    return new WGPUPipelineLayoutExtras(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get chain(): WGPUChainedStruct {
    return new WGPUChainedStruct(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set chain(value: WGPUChainedStruct) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 0, 16).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 16));
  }

  get pushConstantRangeCount(): number {
    return this.view.getUint32(16, littleEndian);
  }
  set pushConstantRangeCount(value: number) {
    this.view.setUint32(16, value, littleEndian);
  }

  get pushConstantRanges(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(24, littleEndian));
  }
  set pushConstantRanges(value: Deno.PointerValue) {
    this.view.setBigUint64(24, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }
}


export class WGPUWrappedSubmissionIndex {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(16))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(16));
    return new WGPUWrappedSubmissionIndex(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get queue(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set queue(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get submissionIndex(): bigint {
    return this.view.getBigUint64(8, littleEndian);
  }
  set submissionIndex(value: bigint) {
    this.view.setBigUint64(8, value, littleEndian);
  }
}


export class WGPUShaderDefine {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(16))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(16));
    return new WGPUShaderDefine(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get name(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set name(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get value(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(8, littleEndian));
  }
  set value(value: Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }
}


export class WGPUShaderModuleGLSLDescriptor {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(48))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(48));
    return new WGPUShaderModuleGLSLDescriptor(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get chain(): WGPUChainedStruct {
    return new WGPUChainedStruct(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set chain(value: WGPUChainedStruct) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 0, 16).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 16));
  }

  get stage(): WGPUShaderStage {
    return this.view.getUint32(16, littleEndian);
  }
  set stage(value: WGPUShaderStage) {
    this.view.setUint32(16, value, littleEndian);
  }

  get code(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(24, littleEndian));
  }
  set code(value: Deno.PointerValue) {
    this.view.setBigUint64(24, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get defineCount(): number {
    return this.view.getUint32(32, littleEndian);
  }
  set defineCount(value: number) {
    this.view.setUint32(32, value, littleEndian);
  }

  get defines(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(40, littleEndian));
  }
  set defines(value: Deno.PointerValue) {
    this.view.setBigUint64(40, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }
}


export class WGPUStorageReport {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(32))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(32));
    return new WGPUStorageReport(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get numOccupied(): bigint {
    return this.view.getBigUint64(0, littleEndian);
  }
  set numOccupied(value: bigint) {
    this.view.setBigUint64(0, value, littleEndian);
  }

  get numVacant(): bigint {
    return this.view.getBigUint64(8, littleEndian);
  }
  set numVacant(value: bigint) {
    this.view.setBigUint64(8, value, littleEndian);
  }

  get numError(): bigint {
    return this.view.getBigUint64(16, littleEndian);
  }
  set numError(value: bigint) {
    this.view.setBigUint64(16, value, littleEndian);
  }

  get elementSize(): bigint {
    return this.view.getBigUint64(24, littleEndian);
  }
  set elementSize(value: bigint) {
    this.view.setBigUint64(24, value, littleEndian);
  }
}


export class WGPUHubReport {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(480))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(480));
    return new WGPUHubReport(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get adapters(): WGPUStorageReport {
    return new WGPUStorageReport(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set adapters(value: WGPUStorageReport) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 0, 32).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 32));
  }

  get devices(): WGPUStorageReport {
    return new WGPUStorageReport(new DataView(this.view.buffer, this.view.byteOffset + 32));
  }
  set devices(value: WGPUStorageReport) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 32, 32).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 32));
  }

  get pipelineLayouts(): WGPUStorageReport {
    return new WGPUStorageReport(new DataView(this.view.buffer, this.view.byteOffset + 64));
  }
  set pipelineLayouts(value: WGPUStorageReport) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 64, 32).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 32));
  }

  get shaderModules(): WGPUStorageReport {
    return new WGPUStorageReport(new DataView(this.view.buffer, this.view.byteOffset + 96));
  }
  set shaderModules(value: WGPUStorageReport) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 96, 32).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 32));
  }

  get bindGroupLayouts(): WGPUStorageReport {
    return new WGPUStorageReport(new DataView(this.view.buffer, this.view.byteOffset + 128));
  }
  set bindGroupLayouts(value: WGPUStorageReport) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 128, 32).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 32));
  }

  get bindGroups(): WGPUStorageReport {
    return new WGPUStorageReport(new DataView(this.view.buffer, this.view.byteOffset + 160));
  }
  set bindGroups(value: WGPUStorageReport) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 160, 32).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 32));
  }

  get commandBuffers(): WGPUStorageReport {
    return new WGPUStorageReport(new DataView(this.view.buffer, this.view.byteOffset + 192));
  }
  set commandBuffers(value: WGPUStorageReport) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 192, 32).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 32));
  }

  get renderBundles(): WGPUStorageReport {
    return new WGPUStorageReport(new DataView(this.view.buffer, this.view.byteOffset + 224));
  }
  set renderBundles(value: WGPUStorageReport) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 224, 32).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 32));
  }

  get renderPipelines(): WGPUStorageReport {
    return new WGPUStorageReport(new DataView(this.view.buffer, this.view.byteOffset + 256));
  }
  set renderPipelines(value: WGPUStorageReport) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 256, 32).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 32));
  }

  get computePipelines(): WGPUStorageReport {
    return new WGPUStorageReport(new DataView(this.view.buffer, this.view.byteOffset + 288));
  }
  set computePipelines(value: WGPUStorageReport) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 288, 32).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 32));
  }

  get querySets(): WGPUStorageReport {
    return new WGPUStorageReport(new DataView(this.view.buffer, this.view.byteOffset + 320));
  }
  set querySets(value: WGPUStorageReport) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 320, 32).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 32));
  }

  get buffers(): WGPUStorageReport {
    return new WGPUStorageReport(new DataView(this.view.buffer, this.view.byteOffset + 352));
  }
  set buffers(value: WGPUStorageReport) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 352, 32).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 32));
  }

  get textures(): WGPUStorageReport {
    return new WGPUStorageReport(new DataView(this.view.buffer, this.view.byteOffset + 384));
  }
  set textures(value: WGPUStorageReport) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 384, 32).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 32));
  }

  get textureViews(): WGPUStorageReport {
    return new WGPUStorageReport(new DataView(this.view.buffer, this.view.byteOffset + 416));
  }
  set textureViews(value: WGPUStorageReport) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 416, 32).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 32));
  }

  get samplers(): WGPUStorageReport {
    return new WGPUStorageReport(new DataView(this.view.buffer, this.view.byteOffset + 448));
  }
  set samplers(value: WGPUStorageReport) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 448, 32).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 32));
  }
}


export class WGPUGlobalReport {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(2440))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(2440));
    return new WGPUGlobalReport(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get surfaces(): WGPUStorageReport {
    return new WGPUStorageReport(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set surfaces(value: WGPUStorageReport) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 0, 32).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 32));
  }

  get backendType(): WGPUBackendType {
    return this.view.getUint32(32, littleEndian);
  }
  set backendType(value: WGPUBackendType) {
    this.view.setUint32(32, value, littleEndian);
  }

  get vulkan(): WGPUHubReport {
    return new WGPUHubReport(new DataView(this.view.buffer, this.view.byteOffset + 40));
  }
  set vulkan(value: WGPUHubReport) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 40, 480).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 480));
  }

  get metal(): WGPUHubReport {
    return new WGPUHubReport(new DataView(this.view.buffer, this.view.byteOffset + 520));
  }
  set metal(value: WGPUHubReport) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 520, 480).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 480));
  }

  get dx12(): WGPUHubReport {
    return new WGPUHubReport(new DataView(this.view.buffer, this.view.byteOffset + 1000));
  }
  set dx12(value: WGPUHubReport) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 1000, 480).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 480));
  }

  get dx11(): WGPUHubReport {
    return new WGPUHubReport(new DataView(this.view.buffer, this.view.byteOffset + 1480));
  }
  set dx11(value: WGPUHubReport) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 1480, 480).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 480));
  }

  get gl(): WGPUHubReport {
    return new WGPUHubReport(new DataView(this.view.buffer, this.view.byteOffset + 1960));
  }
  set gl(value: WGPUHubReport) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 1960, 480).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 480));
  }
}


export class WGPUSurfaceCapabilities {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(48))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(48));
    return new WGPUSurfaceCapabilities(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get formatCount(): bigint {
    return this.view.getBigUint64(0, littleEndian);
  }
  set formatCount(value: bigint) {
    this.view.setBigUint64(0, value, littleEndian);
  }

  get formats(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(8, littleEndian));
  }
  set formats(value: Deno.PointerValue) {
    this.view.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get presentModeCount(): bigint {
    return this.view.getBigUint64(16, littleEndian);
  }
  set presentModeCount(value: bigint) {
    this.view.setBigUint64(16, value, littleEndian);
  }

  get presentModes(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(24, littleEndian));
  }
  set presentModes(value: Deno.PointerValue) {
    this.view.setBigUint64(24, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get alphaModeCount(): bigint {
    return this.view.getBigUint64(32, littleEndian);
  }
  set alphaModeCount(value: bigint) {
    this.view.setBigUint64(32, value, littleEndian);
  }

  get alphaModes(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(40, littleEndian));
  }
  set alphaModes(value: Deno.PointerValue) {
    this.view.setBigUint64(40, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }
}


export class WGPUSwapChainDescriptorExtras {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(40))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(40));
    return new WGPUSwapChainDescriptorExtras(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get chain(): WGPUChainedStruct {
    return new WGPUChainedStruct(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set chain(value: WGPUChainedStruct) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 0, 16).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 16));
  }

  get alphaMode(): WGPUCompositeAlphaMode {
    return this.view.getUint32(16, littleEndian);
  }
  set alphaMode(value: WGPUCompositeAlphaMode) {
    this.view.setUint32(16, value, littleEndian);
  }

  get viewFormatCount(): bigint {
    return this.view.getBigUint64(24, littleEndian);
  }
  set viewFormatCount(value: bigint) {
    this.view.setBigUint64(24, value, littleEndian);
  }

  get viewFormats(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(32, littleEndian));
  }
  set viewFormats(value: Deno.PointerValue) {
    this.view.setBigUint64(32, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }
}


export class WGPUInstanceEnumerateAdapterOptions {
  view: DataView;
  constructor(view?: DataView) {
    if (view) this.view = view;
    else this.view = new DataView(new ArrayBuffer(16))
  }
  static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
    const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(16));
    return new WGPUInstanceEnumerateAdapterOptions(view);
  }

  get pointer(): Deno.PointerValue {
    const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
    if (bufPtr == null) return null;
    return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(0, littleEndian));
  }
  set nextInChain(value: Deno.PointerValue) {
    this.view.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get backends(): number {
    return this.view.getUint32(8, littleEndian);
  }
  set backends(value: number) {
    this.view.setUint32(8, value, littleEndian);
  }
}

