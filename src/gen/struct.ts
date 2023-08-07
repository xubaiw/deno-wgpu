export const WGPUAdapterProperties = {
  name: "WGPUAdapterProperties",
  size: 64,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    vendorID: {
      size: 4,
      offset: 8,
      kind: "UInt",
    },
    vendorName: {
      size: 8,
      offset: 16,
      kind: "Pointer",
    },
    architecture: {
      size: 8,
      offset: 24,
      kind: "Pointer",
    },
    deviceID: {
      size: 4,
      offset: 32,
      kind: "UInt",
    },
    name: {
      size: 8,
      offset: 40,
      kind: "Pointer",
    },
    driverDescription: {
      size: 8,
      offset: 48,
      kind: "Pointer",
    },
    adapterType: {
      size: 4,
      offset: 56,
      kind: "Enum",
    },
    backendType: {
      size: 4,
      offset: 60,
      kind: "Enum",
    },
  },} as const;

export type WGPUAdapterProperties = typeof WGPUAdapterProperties;

export const WGPUBindGroupEntry = {
  name: "WGPUBindGroupEntry",
  size: 56,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    binding: {
      size: 4,
      offset: 8,
      kind: "UInt",
    },
    buffer: {
      size: 8,
      offset: 16,
      kind: "Pointer",
    },
    offset: {
      size: 8,
      offset: 24,
      kind: "ULongLong",
    },
    size: {
      size: 8,
      offset: 32,
      kind: "ULongLong",
    },
    sampler: {
      size: 8,
      offset: 40,
      kind: "Pointer",
    },
    textureView: {
      size: 8,
      offset: 48,
      kind: "Pointer",
    },
  },} as const;

export type WGPUBindGroupEntry = typeof WGPUBindGroupEntry;

export const WGPUBlendComponent = {
  name: "WGPUBlendComponent",
  size: 12,
  fields: {
    operation: {
      size: 4,
      offset: 0,
      kind: "Enum",
    },
    srcFactor: {
      size: 4,
      offset: 4,
      kind: "Enum",
    },
    dstFactor: {
      size: 4,
      offset: 8,
      kind: "Enum",
    },
  },} as const;

export type WGPUBlendComponent = typeof WGPUBlendComponent;

export const WGPUBufferBindingLayout = {
  name: "WGPUBufferBindingLayout",
  size: 24,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    type: {
      size: 4,
      offset: 8,
      kind: "Enum",
    },
    hasDynamicOffset: {
      size: 1,
      offset: 12,
      kind: "Bool",
    },
    minBindingSize: {
      size: 8,
      offset: 16,
      kind: "ULongLong",
    },
  },} as const;

export type WGPUBufferBindingLayout = typeof WGPUBufferBindingLayout;

export const WGPUBufferDescriptor = {
  name: "WGPUBufferDescriptor",
  size: 40,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    label: {
      size: 8,
      offset: 8,
      kind: "Pointer",
    },
    usage: {
      size: 4,
      offset: 16,
      kind: "UInt",
    },
    size: {
      size: 8,
      offset: 24,
      kind: "ULongLong",
    },
    mappedAtCreation: {
      size: 1,
      offset: 32,
      kind: "Bool",
    },
  },} as const;

export type WGPUBufferDescriptor = typeof WGPUBufferDescriptor;

export const WGPUColor = {
  name: "WGPUColor",
  size: 32,
  fields: {
    r: {
      size: 8,
      offset: 0,
      kind: "Double",
    },
    g: {
      size: 8,
      offset: 8,
      kind: "Double",
    },
    b: {
      size: 8,
      offset: 16,
      kind: "Double",
    },
    a: {
      size: 8,
      offset: 24,
      kind: "Double",
    },
  },} as const;

export type WGPUColor = typeof WGPUColor;

export const WGPUCommandBufferDescriptor = {
  name: "WGPUCommandBufferDescriptor",
  size: 16,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    label: {
      size: 8,
      offset: 8,
      kind: "Pointer",
    },
  },} as const;

export type WGPUCommandBufferDescriptor = typeof WGPUCommandBufferDescriptor;

export const WGPUCommandEncoderDescriptor = {
  name: "WGPUCommandEncoderDescriptor",
  size: 16,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    label: {
      size: 8,
      offset: 8,
      kind: "Pointer",
    },
  },} as const;

export type WGPUCommandEncoderDescriptor = typeof WGPUCommandEncoderDescriptor;

export const WGPUCompilationMessage = {
  name: "WGPUCompilationMessage",
  size: 80,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    message: {
      size: 8,
      offset: 8,
      kind: "Pointer",
    },
    type: {
      size: 4,
      offset: 16,
      kind: "Enum",
    },
    lineNum: {
      size: 8,
      offset: 24,
      kind: "ULongLong",
    },
    linePos: {
      size: 8,
      offset: 32,
      kind: "ULongLong",
    },
    offset: {
      size: 8,
      offset: 40,
      kind: "ULongLong",
    },
    length: {
      size: 8,
      offset: 48,
      kind: "ULongLong",
    },
    utf16LinePos: {
      size: 8,
      offset: 56,
      kind: "ULongLong",
    },
    utf16Offset: {
      size: 8,
      offset: 64,
      kind: "ULongLong",
    },
    utf16Length: {
      size: 8,
      offset: 72,
      kind: "ULongLong",
    },
  },} as const;

export type WGPUCompilationMessage = typeof WGPUCompilationMessage;

export const WGPUComputePassTimestampWrite = {
  name: "WGPUComputePassTimestampWrite",
  size: 16,
  fields: {
    querySet: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    queryIndex: {
      size: 4,
      offset: 8,
      kind: "UInt",
    },
    location: {
      size: 4,
      offset: 12,
      kind: "Enum",
    },
  },} as const;

export type WGPUComputePassTimestampWrite = typeof WGPUComputePassTimestampWrite;

export const WGPUConstantEntry = {
  name: "WGPUConstantEntry",
  size: 24,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    key: {
      size: 8,
      offset: 8,
      kind: "Pointer",
    },
    value: {
      size: 8,
      offset: 16,
      kind: "Double",
    },
  },} as const;

export type WGPUConstantEntry = typeof WGPUConstantEntry;

export const WGPUExtent3D = {
  name: "WGPUExtent3D",
  size: 12,
  fields: {
    width: {
      size: 4,
      offset: 0,
      kind: "UInt",
    },
    height: {
      size: 4,
      offset: 4,
      kind: "UInt",
    },
    depthOrArrayLayers: {
      size: 4,
      offset: 8,
      kind: "UInt",
    },
  },} as const;

export type WGPUExtent3D = typeof WGPUExtent3D;

export const WGPUInstanceDescriptor = {
  name: "WGPUInstanceDescriptor",
  size: 8,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
  },} as const;

export type WGPUInstanceDescriptor = typeof WGPUInstanceDescriptor;

export const WGPULimits = {
  name: "WGPULimits",
  size: 144,
  fields: {
    maxTextureDimension1D: {
      size: 4,
      offset: 0,
      kind: "UInt",
    },
    maxTextureDimension2D: {
      size: 4,
      offset: 4,
      kind: "UInt",
    },
    maxTextureDimension3D: {
      size: 4,
      offset: 8,
      kind: "UInt",
    },
    maxTextureArrayLayers: {
      size: 4,
      offset: 12,
      kind: "UInt",
    },
    maxBindGroups: {
      size: 4,
      offset: 16,
      kind: "UInt",
    },
    maxBindingsPerBindGroup: {
      size: 4,
      offset: 20,
      kind: "UInt",
    },
    maxDynamicUniformBuffersPerPipelineLayout: {
      size: 4,
      offset: 24,
      kind: "UInt",
    },
    maxDynamicStorageBuffersPerPipelineLayout: {
      size: 4,
      offset: 28,
      kind: "UInt",
    },
    maxSampledTexturesPerShaderStage: {
      size: 4,
      offset: 32,
      kind: "UInt",
    },
    maxSamplersPerShaderStage: {
      size: 4,
      offset: 36,
      kind: "UInt",
    },
    maxStorageBuffersPerShaderStage: {
      size: 4,
      offset: 40,
      kind: "UInt",
    },
    maxStorageTexturesPerShaderStage: {
      size: 4,
      offset: 44,
      kind: "UInt",
    },
    maxUniformBuffersPerShaderStage: {
      size: 4,
      offset: 48,
      kind: "UInt",
    },
    maxUniformBufferBindingSize: {
      size: 8,
      offset: 56,
      kind: "ULongLong",
    },
    maxStorageBufferBindingSize: {
      size: 8,
      offset: 64,
      kind: "ULongLong",
    },
    minUniformBufferOffsetAlignment: {
      size: 4,
      offset: 72,
      kind: "UInt",
    },
    minStorageBufferOffsetAlignment: {
      size: 4,
      offset: 76,
      kind: "UInt",
    },
    maxVertexBuffers: {
      size: 4,
      offset: 80,
      kind: "UInt",
    },
    maxBufferSize: {
      size: 8,
      offset: 88,
      kind: "ULongLong",
    },
    maxVertexAttributes: {
      size: 4,
      offset: 96,
      kind: "UInt",
    },
    maxVertexBufferArrayStride: {
      size: 4,
      offset: 100,
      kind: "UInt",
    },
    maxInterStageShaderComponents: {
      size: 4,
      offset: 104,
      kind: "UInt",
    },
    maxInterStageShaderVariables: {
      size: 4,
      offset: 108,
      kind: "UInt",
    },
    maxColorAttachments: {
      size: 4,
      offset: 112,
      kind: "UInt",
    },
    maxColorAttachmentBytesPerSample: {
      size: 4,
      offset: 116,
      kind: "UInt",
    },
    maxComputeWorkgroupStorageSize: {
      size: 4,
      offset: 120,
      kind: "UInt",
    },
    maxComputeInvocationsPerWorkgroup: {
      size: 4,
      offset: 124,
      kind: "UInt",
    },
    maxComputeWorkgroupSizeX: {
      size: 4,
      offset: 128,
      kind: "UInt",
    },
    maxComputeWorkgroupSizeY: {
      size: 4,
      offset: 132,
      kind: "UInt",
    },
    maxComputeWorkgroupSizeZ: {
      size: 4,
      offset: 136,
      kind: "UInt",
    },
    maxComputeWorkgroupsPerDimension: {
      size: 4,
      offset: 140,
      kind: "UInt",
    },
  },} as const;

export type WGPULimits = typeof WGPULimits;

export const WGPUMultisampleState = {
  name: "WGPUMultisampleState",
  size: 24,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    count: {
      size: 4,
      offset: 8,
      kind: "UInt",
    },
    mask: {
      size: 4,
      offset: 12,
      kind: "UInt",
    },
    alphaToCoverageEnabled: {
      size: 1,
      offset: 16,
      kind: "Bool",
    },
  },} as const;

export type WGPUMultisampleState = typeof WGPUMultisampleState;

export const WGPUOrigin3D = {
  name: "WGPUOrigin3D",
  size: 12,
  fields: {
    x: {
      size: 4,
      offset: 0,
      kind: "UInt",
    },
    y: {
      size: 4,
      offset: 4,
      kind: "UInt",
    },
    z: {
      size: 4,
      offset: 8,
      kind: "UInt",
    },
  },} as const;

export type WGPUOrigin3D = typeof WGPUOrigin3D;

export const WGPUPipelineLayoutDescriptor = {
  name: "WGPUPipelineLayoutDescriptor",
  size: 32,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    label: {
      size: 8,
      offset: 8,
      kind: "Pointer",
    },
    bindGroupLayoutCount: {
      size: 8,
      offset: 16,
      kind: "ULong",
    },
    bindGroupLayouts: {
      size: 8,
      offset: 24,
      kind: "Pointer",
    },
  },} as const;

export type WGPUPipelineLayoutDescriptor = typeof WGPUPipelineLayoutDescriptor;

export const WGPUPrimitiveDepthClipControl = {
  name: "WGPUPrimitiveDepthClipControl",
  size: 24,
  fields: {
    chain: {
      size: 16,
      offset: 0,
      kind: "Record",
      type: () => WGPUChainedStruct,
    },
    unclippedDepth: {
      size: 1,
      offset: 16,
      kind: "Bool",
    },
  },} as const;

export type WGPUPrimitiveDepthClipControl = typeof WGPUPrimitiveDepthClipControl;

export const WGPUPrimitiveState = {
  name: "WGPUPrimitiveState",
  size: 24,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    topology: {
      size: 4,
      offset: 8,
      kind: "Enum",
    },
    stripIndexFormat: {
      size: 4,
      offset: 12,
      kind: "Enum",
    },
    frontFace: {
      size: 4,
      offset: 16,
      kind: "Enum",
    },
    cullMode: {
      size: 4,
      offset: 20,
      kind: "Enum",
    },
  },} as const;

export type WGPUPrimitiveState = typeof WGPUPrimitiveState;

export const WGPUQuerySetDescriptor = {
  name: "WGPUQuerySetDescriptor",
  size: 40,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    label: {
      size: 8,
      offset: 8,
      kind: "Pointer",
    },
    type: {
      size: 4,
      offset: 16,
      kind: "Enum",
    },
    count: {
      size: 4,
      offset: 20,
      kind: "UInt",
    },
    pipelineStatistics: {
      size: 8,
      offset: 24,
      kind: "Pointer",
    },
    pipelineStatisticsCount: {
      size: 8,
      offset: 32,
      kind: "ULong",
    },
  },} as const;

export type WGPUQuerySetDescriptor = typeof WGPUQuerySetDescriptor;

export const WGPUQueueDescriptor = {
  name: "WGPUQueueDescriptor",
  size: 16,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    label: {
      size: 8,
      offset: 8,
      kind: "Pointer",
    },
  },} as const;

export type WGPUQueueDescriptor = typeof WGPUQueueDescriptor;

export const WGPURenderBundleDescriptor = {
  name: "WGPURenderBundleDescriptor",
  size: 16,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    label: {
      size: 8,
      offset: 8,
      kind: "Pointer",
    },
  },} as const;

export type WGPURenderBundleDescriptor = typeof WGPURenderBundleDescriptor;

export const WGPURenderBundleEncoderDescriptor = {
  name: "WGPURenderBundleEncoderDescriptor",
  size: 48,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    label: {
      size: 8,
      offset: 8,
      kind: "Pointer",
    },
    colorFormatsCount: {
      size: 8,
      offset: 16,
      kind: "ULong",
    },
    colorFormats: {
      size: 8,
      offset: 24,
      kind: "Pointer",
    },
    depthStencilFormat: {
      size: 4,
      offset: 32,
      kind: "Enum",
    },
    sampleCount: {
      size: 4,
      offset: 36,
      kind: "UInt",
    },
    depthReadOnly: {
      size: 1,
      offset: 40,
      kind: "Bool",
    },
    stencilReadOnly: {
      size: 1,
      offset: 41,
      kind: "Bool",
    },
  },} as const;

export type WGPURenderBundleEncoderDescriptor = typeof WGPURenderBundleEncoderDescriptor;

export const WGPURenderPassDepthStencilAttachment = {
  name: "WGPURenderPassDepthStencilAttachment",
  size: 40,
  fields: {
    view: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    depthLoadOp: {
      size: 4,
      offset: 8,
      kind: "Enum",
    },
    depthStoreOp: {
      size: 4,
      offset: 12,
      kind: "Enum",
    },
    depthClearValue: {
      size: 4,
      offset: 16,
      kind: "Float",
    },
    depthReadOnly: {
      size: 1,
      offset: 20,
      kind: "Bool",
    },
    stencilLoadOp: {
      size: 4,
      offset: 24,
      kind: "Enum",
    },
    stencilStoreOp: {
      size: 4,
      offset: 28,
      kind: "Enum",
    },
    stencilClearValue: {
      size: 4,
      offset: 32,
      kind: "UInt",
    },
    stencilReadOnly: {
      size: 1,
      offset: 36,
      kind: "Bool",
    },
  },} as const;

export type WGPURenderPassDepthStencilAttachment = typeof WGPURenderPassDepthStencilAttachment;

export const WGPURenderPassDescriptorMaxDrawCount = {
  name: "WGPURenderPassDescriptorMaxDrawCount",
  size: 24,
  fields: {
    chain: {
      size: 16,
      offset: 0,
      kind: "Record",
      type: () => WGPUChainedStruct,
    },
    maxDrawCount: {
      size: 8,
      offset: 16,
      kind: "ULongLong",
    },
  },} as const;

export type WGPURenderPassDescriptorMaxDrawCount = typeof WGPURenderPassDescriptorMaxDrawCount;

export const WGPURenderPassTimestampWrite = {
  name: "WGPURenderPassTimestampWrite",
  size: 16,
  fields: {
    querySet: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    queryIndex: {
      size: 4,
      offset: 8,
      kind: "UInt",
    },
    location: {
      size: 4,
      offset: 12,
      kind: "Enum",
    },
  },} as const;

export type WGPURenderPassTimestampWrite = typeof WGPURenderPassTimestampWrite;

export const WGPURequestAdapterOptions = {
  name: "WGPURequestAdapterOptions",
  size: 32,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    compatibleSurface: {
      size: 8,
      offset: 8,
      kind: "Pointer",
    },
    powerPreference: {
      size: 4,
      offset: 16,
      kind: "Enum",
    },
    backendType: {
      size: 4,
      offset: 20,
      kind: "Enum",
    },
    forceFallbackAdapter: {
      size: 1,
      offset: 24,
      kind: "Bool",
    },
  },} as const;

export type WGPURequestAdapterOptions = typeof WGPURequestAdapterOptions;

export const WGPUSamplerBindingLayout = {
  name: "WGPUSamplerBindingLayout",
  size: 16,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    type: {
      size: 4,
      offset: 8,
      kind: "Enum",
    },
  },} as const;

export type WGPUSamplerBindingLayout = typeof WGPUSamplerBindingLayout;

export const WGPUSamplerDescriptor = {
  name: "WGPUSamplerDescriptor",
  size: 56,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    label: {
      size: 8,
      offset: 8,
      kind: "Pointer",
    },
    addressModeU: {
      size: 4,
      offset: 16,
      kind: "Enum",
    },
    addressModeV: {
      size: 4,
      offset: 20,
      kind: "Enum",
    },
    addressModeW: {
      size: 4,
      offset: 24,
      kind: "Enum",
    },
    magFilter: {
      size: 4,
      offset: 28,
      kind: "Enum",
    },
    minFilter: {
      size: 4,
      offset: 32,
      kind: "Enum",
    },
    mipmapFilter: {
      size: 4,
      offset: 36,
      kind: "Enum",
    },
    lodMinClamp: {
      size: 4,
      offset: 40,
      kind: "Float",
    },
    lodMaxClamp: {
      size: 4,
      offset: 44,
      kind: "Float",
    },
    compare: {
      size: 4,
      offset: 48,
      kind: "Enum",
    },
    maxAnisotropy: {
      size: 2,
      offset: 52,
      kind: "UShort",
    },
  },} as const;

export type WGPUSamplerDescriptor = typeof WGPUSamplerDescriptor;

export const WGPUShaderModuleCompilationHint = {
  name: "WGPUShaderModuleCompilationHint",
  size: 24,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    entryPoint: {
      size: 8,
      offset: 8,
      kind: "Pointer",
    },
    layout: {
      size: 8,
      offset: 16,
      kind: "Pointer",
    },
  },} as const;

export type WGPUShaderModuleCompilationHint = typeof WGPUShaderModuleCompilationHint;

export const WGPUShaderModuleSPIRVDescriptor = {
  name: "WGPUShaderModuleSPIRVDescriptor",
  size: 32,
  fields: {
    chain: {
      size: 16,
      offset: 0,
      kind: "Record",
      type: () => WGPUChainedStruct,
    },
    codeSize: {
      size: 4,
      offset: 16,
      kind: "UInt",
    },
    code: {
      size: 8,
      offset: 24,
      kind: "Pointer",
    },
  },} as const;

export type WGPUShaderModuleSPIRVDescriptor = typeof WGPUShaderModuleSPIRVDescriptor;

export const WGPUShaderModuleWGSLDescriptor = {
  name: "WGPUShaderModuleWGSLDescriptor",
  size: 24,
  fields: {
    chain: {
      size: 16,
      offset: 0,
      kind: "Record",
      type: () => WGPUChainedStruct,
    },
    code: {
      size: 8,
      offset: 16,
      kind: "Pointer",
    },
  },} as const;

export type WGPUShaderModuleWGSLDescriptor = typeof WGPUShaderModuleWGSLDescriptor;

export const WGPUStencilFaceState = {
  name: "WGPUStencilFaceState",
  size: 16,
  fields: {
    compare: {
      size: 4,
      offset: 0,
      kind: "Enum",
    },
    failOp: {
      size: 4,
      offset: 4,
      kind: "Enum",
    },
    depthFailOp: {
      size: 4,
      offset: 8,
      kind: "Enum",
    },
    passOp: {
      size: 4,
      offset: 12,
      kind: "Enum",
    },
  },} as const;

export type WGPUStencilFaceState = typeof WGPUStencilFaceState;

export const WGPUStorageTextureBindingLayout = {
  name: "WGPUStorageTextureBindingLayout",
  size: 24,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    access: {
      size: 4,
      offset: 8,
      kind: "Enum",
    },
    format: {
      size: 4,
      offset: 12,
      kind: "Enum",
    },
    viewDimension: {
      size: 4,
      offset: 16,
      kind: "Enum",
    },
  },} as const;

export type WGPUStorageTextureBindingLayout = typeof WGPUStorageTextureBindingLayout;

export const WGPUSurfaceDescriptor = {
  name: "WGPUSurfaceDescriptor",
  size: 16,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    label: {
      size: 8,
      offset: 8,
      kind: "Pointer",
    },
  },} as const;

export type WGPUSurfaceDescriptor = typeof WGPUSurfaceDescriptor;

export const WGPUSurfaceDescriptorFromAndroidNativeWindow = {
  name: "WGPUSurfaceDescriptorFromAndroidNativeWindow",
  size: 24,
  fields: {
    chain: {
      size: 16,
      offset: 0,
      kind: "Record",
      type: () => WGPUChainedStruct,
    },
    window: {
      size: 8,
      offset: 16,
      kind: "Pointer",
    },
  },} as const;

export type WGPUSurfaceDescriptorFromAndroidNativeWindow = typeof WGPUSurfaceDescriptorFromAndroidNativeWindow;

export const WGPUSurfaceDescriptorFromCanvasHTMLSelector = {
  name: "WGPUSurfaceDescriptorFromCanvasHTMLSelector",
  size: 24,
  fields: {
    chain: {
      size: 16,
      offset: 0,
      kind: "Record",
      type: () => WGPUChainedStruct,
    },
    selector: {
      size: 8,
      offset: 16,
      kind: "Pointer",
    },
  },} as const;

export type WGPUSurfaceDescriptorFromCanvasHTMLSelector = typeof WGPUSurfaceDescriptorFromCanvasHTMLSelector;

export const WGPUSurfaceDescriptorFromMetalLayer = {
  name: "WGPUSurfaceDescriptorFromMetalLayer",
  size: 24,
  fields: {
    chain: {
      size: 16,
      offset: 0,
      kind: "Record",
      type: () => WGPUChainedStruct,
    },
    layer: {
      size: 8,
      offset: 16,
      kind: "Pointer",
    },
  },} as const;

export type WGPUSurfaceDescriptorFromMetalLayer = typeof WGPUSurfaceDescriptorFromMetalLayer;

export const WGPUSurfaceDescriptorFromWaylandSurface = {
  name: "WGPUSurfaceDescriptorFromWaylandSurface",
  size: 32,
  fields: {
    chain: {
      size: 16,
      offset: 0,
      kind: "Record",
      type: () => WGPUChainedStruct,
    },
    display: {
      size: 8,
      offset: 16,
      kind: "Pointer",
    },
    surface: {
      size: 8,
      offset: 24,
      kind: "Pointer",
    },
  },} as const;

export type WGPUSurfaceDescriptorFromWaylandSurface = typeof WGPUSurfaceDescriptorFromWaylandSurface;

export const WGPUSurfaceDescriptorFromWindowsHWND = {
  name: "WGPUSurfaceDescriptorFromWindowsHWND",
  size: 32,
  fields: {
    chain: {
      size: 16,
      offset: 0,
      kind: "Record",
      type: () => WGPUChainedStruct,
    },
    hinstance: {
      size: 8,
      offset: 16,
      kind: "Pointer",
    },
    hwnd: {
      size: 8,
      offset: 24,
      kind: "Pointer",
    },
  },} as const;

export type WGPUSurfaceDescriptorFromWindowsHWND = typeof WGPUSurfaceDescriptorFromWindowsHWND;

export const WGPUSurfaceDescriptorFromXcbWindow = {
  name: "WGPUSurfaceDescriptorFromXcbWindow",
  size: 32,
  fields: {
    chain: {
      size: 16,
      offset: 0,
      kind: "Record",
      type: () => WGPUChainedStruct,
    },
    connection: {
      size: 8,
      offset: 16,
      kind: "Pointer",
    },
    window: {
      size: 4,
      offset: 24,
      kind: "UInt",
    },
  },} as const;

export type WGPUSurfaceDescriptorFromXcbWindow = typeof WGPUSurfaceDescriptorFromXcbWindow;

export const WGPUSurfaceDescriptorFromXlibWindow = {
  name: "WGPUSurfaceDescriptorFromXlibWindow",
  size: 32,
  fields: {
    chain: {
      size: 16,
      offset: 0,
      kind: "Record",
      type: () => WGPUChainedStruct,
    },
    display: {
      size: 8,
      offset: 16,
      kind: "Pointer",
    },
    window: {
      size: 4,
      offset: 24,
      kind: "UInt",
    },
  },} as const;

export type WGPUSurfaceDescriptorFromXlibWindow = typeof WGPUSurfaceDescriptorFromXlibWindow;

export const WGPUSwapChainDescriptor = {
  name: "WGPUSwapChainDescriptor",
  size: 40,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    label: {
      size: 8,
      offset: 8,
      kind: "Pointer",
    },
    usage: {
      size: 4,
      offset: 16,
      kind: "UInt",
    },
    format: {
      size: 4,
      offset: 20,
      kind: "Enum",
    },
    width: {
      size: 4,
      offset: 24,
      kind: "UInt",
    },
    height: {
      size: 4,
      offset: 28,
      kind: "UInt",
    },
    presentMode: {
      size: 4,
      offset: 32,
      kind: "Enum",
    },
  },} as const;

export type WGPUSwapChainDescriptor = typeof WGPUSwapChainDescriptor;

export const WGPUTextureBindingLayout = {
  name: "WGPUTextureBindingLayout",
  size: 24,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    sampleType: {
      size: 4,
      offset: 8,
      kind: "Enum",
    },
    viewDimension: {
      size: 4,
      offset: 12,
      kind: "Enum",
    },
    multisampled: {
      size: 1,
      offset: 16,
      kind: "Bool",
    },
  },} as const;

export type WGPUTextureBindingLayout = typeof WGPUTextureBindingLayout;

export const WGPUTextureDataLayout = {
  name: "WGPUTextureDataLayout",
  size: 24,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    offset: {
      size: 8,
      offset: 8,
      kind: "ULongLong",
    },
    bytesPerRow: {
      size: 4,
      offset: 16,
      kind: "UInt",
    },
    rowsPerImage: {
      size: 4,
      offset: 20,
      kind: "UInt",
    },
  },} as const;

export type WGPUTextureDataLayout = typeof WGPUTextureDataLayout;

export const WGPUTextureViewDescriptor = {
  name: "WGPUTextureViewDescriptor",
  size: 48,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    label: {
      size: 8,
      offset: 8,
      kind: "Pointer",
    },
    format: {
      size: 4,
      offset: 16,
      kind: "Enum",
    },
    dimension: {
      size: 4,
      offset: 20,
      kind: "Enum",
    },
    baseMipLevel: {
      size: 4,
      offset: 24,
      kind: "UInt",
    },
    mipLevelCount: {
      size: 4,
      offset: 28,
      kind: "UInt",
    },
    baseArrayLayer: {
      size: 4,
      offset: 32,
      kind: "UInt",
    },
    arrayLayerCount: {
      size: 4,
      offset: 36,
      kind: "UInt",
    },
    aspect: {
      size: 4,
      offset: 40,
      kind: "Enum",
    },
  },} as const;

export type WGPUTextureViewDescriptor = typeof WGPUTextureViewDescriptor;

export const WGPUVertexAttribute = {
  name: "WGPUVertexAttribute",
  size: 24,
  fields: {
    format: {
      size: 4,
      offset: 0,
      kind: "Enum",
    },
    offset: {
      size: 8,
      offset: 8,
      kind: "ULongLong",
    },
    shaderLocation: {
      size: 4,
      offset: 16,
      kind: "UInt",
    },
  },} as const;

export type WGPUVertexAttribute = typeof WGPUVertexAttribute;

export const WGPUBindGroupDescriptor = {
  name: "WGPUBindGroupDescriptor",
  size: 40,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    label: {
      size: 8,
      offset: 8,
      kind: "Pointer",
    },
    layout: {
      size: 8,
      offset: 16,
      kind: "Pointer",
    },
    entryCount: {
      size: 8,
      offset: 24,
      kind: "ULong",
    },
    entries: {
      size: 8,
      offset: 32,
      kind: "Pointer",
    },
  },} as const;

export type WGPUBindGroupDescriptor = typeof WGPUBindGroupDescriptor;

export const WGPUBindGroupLayoutEntry = {
  name: "WGPUBindGroupLayoutEntry",
  size: 104,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    binding: {
      size: 4,
      offset: 8,
      kind: "UInt",
    },
    visibility: {
      size: 4,
      offset: 12,
      kind: "UInt",
    },
    buffer: {
      size: 24,
      offset: 16,
      kind: "Record",
      type: () => WGPUBufferBindingLayout,
    },
    sampler: {
      size: 16,
      offset: 40,
      kind: "Record",
      type: () => WGPUSamplerBindingLayout,
    },
    texture: {
      size: 24,
      offset: 56,
      kind: "Record",
      type: () => WGPUTextureBindingLayout,
    },
    storageTexture: {
      size: 24,
      offset: 80,
      kind: "Record",
      type: () => WGPUStorageTextureBindingLayout,
    },
  },} as const;

export type WGPUBindGroupLayoutEntry = typeof WGPUBindGroupLayoutEntry;

export const WGPUBlendState = {
  name: "WGPUBlendState",
  size: 24,
  fields: {
    color: {
      size: 12,
      offset: 0,
      kind: "Record",
      type: () => WGPUBlendComponent,
    },
    alpha: {
      size: 12,
      offset: 12,
      kind: "Record",
      type: () => WGPUBlendComponent,
    },
  },} as const;

export type WGPUBlendState = typeof WGPUBlendState;

export const WGPUCompilationInfo = {
  name: "WGPUCompilationInfo",
  size: 24,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    messageCount: {
      size: 8,
      offset: 8,
      kind: "ULong",
    },
    messages: {
      size: 8,
      offset: 16,
      kind: "Pointer",
    },
  },} as const;

export type WGPUCompilationInfo = typeof WGPUCompilationInfo;

export const WGPUComputePassDescriptor = {
  name: "WGPUComputePassDescriptor",
  size: 32,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    label: {
      size: 8,
      offset: 8,
      kind: "Pointer",
    },
    timestampWriteCount: {
      size: 8,
      offset: 16,
      kind: "ULong",
    },
    timestampWrites: {
      size: 8,
      offset: 24,
      kind: "Pointer",
    },
  },} as const;

export type WGPUComputePassDescriptor = typeof WGPUComputePassDescriptor;

export const WGPUDepthStencilState = {
  name: "WGPUDepthStencilState",
  size: 72,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    format: {
      size: 4,
      offset: 8,
      kind: "Enum",
    },
    depthWriteEnabled: {
      size: 1,
      offset: 12,
      kind: "Bool",
    },
    depthCompare: {
      size: 4,
      offset: 16,
      kind: "Enum",
    },
    stencilFront: {
      size: 16,
      offset: 20,
      kind: "Record",
      type: () => WGPUStencilFaceState,
    },
    stencilBack: {
      size: 16,
      offset: 36,
      kind: "Record",
      type: () => WGPUStencilFaceState,
    },
    stencilReadMask: {
      size: 4,
      offset: 52,
      kind: "UInt",
    },
    stencilWriteMask: {
      size: 4,
      offset: 56,
      kind: "UInt",
    },
    depthBias: {
      size: 4,
      offset: 60,
      kind: "Int",
    },
    depthBiasSlopeScale: {
      size: 4,
      offset: 64,
      kind: "Float",
    },
    depthBiasClamp: {
      size: 4,
      offset: 68,
      kind: "Float",
    },
  },} as const;

export type WGPUDepthStencilState = typeof WGPUDepthStencilState;

export const WGPUImageCopyBuffer = {
  name: "WGPUImageCopyBuffer",
  size: 40,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    layout: {
      size: 24,
      offset: 8,
      kind: "Record",
      type: () => WGPUTextureDataLayout,
    },
    buffer: {
      size: 8,
      offset: 32,
      kind: "Pointer",
    },
  },} as const;

export type WGPUImageCopyBuffer = typeof WGPUImageCopyBuffer;

export const WGPUImageCopyTexture = {
  name: "WGPUImageCopyTexture",
  size: 40,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    texture: {
      size: 8,
      offset: 8,
      kind: "Pointer",
    },
    mipLevel: {
      size: 4,
      offset: 16,
      kind: "UInt",
    },
    origin: {
      size: 12,
      offset: 20,
      kind: "Record",
      type: () => WGPUOrigin3D,
    },
    aspect: {
      size: 4,
      offset: 32,
      kind: "Enum",
    },
  },} as const;

export type WGPUImageCopyTexture = typeof WGPUImageCopyTexture;

export const WGPUProgrammableStageDescriptor = {
  name: "WGPUProgrammableStageDescriptor",
  size: 40,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    module: {
      size: 8,
      offset: 8,
      kind: "Pointer",
    },
    entryPoint: {
      size: 8,
      offset: 16,
      kind: "Pointer",
    },
    constantCount: {
      size: 8,
      offset: 24,
      kind: "ULong",
    },
    constants: {
      size: 8,
      offset: 32,
      kind: "Pointer",
    },
  },} as const;

export type WGPUProgrammableStageDescriptor = typeof WGPUProgrammableStageDescriptor;

export const WGPURenderPassColorAttachment = {
  name: "WGPURenderPassColorAttachment",
  size: 56,
  fields: {
    view: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    resolveTarget: {
      size: 8,
      offset: 8,
      kind: "Pointer",
    },
    loadOp: {
      size: 4,
      offset: 16,
      kind: "Enum",
    },
    storeOp: {
      size: 4,
      offset: 20,
      kind: "Enum",
    },
    clearValue: {
      size: 32,
      offset: 24,
      kind: "Record",
      type: () => WGPUColor,
    },
  },} as const;

export type WGPURenderPassColorAttachment = typeof WGPURenderPassColorAttachment;

export const WGPURequiredLimits = {
  name: "WGPURequiredLimits",
  size: 152,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    limits: {
      size: 144,
      offset: 8,
      kind: "Record",
      type: () => WGPULimits,
    },
  },} as const;

export type WGPURequiredLimits = typeof WGPURequiredLimits;

export const WGPUShaderModuleDescriptor = {
  name: "WGPUShaderModuleDescriptor",
  size: 32,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    label: {
      size: 8,
      offset: 8,
      kind: "Pointer",
    },
    hintCount: {
      size: 8,
      offset: 16,
      kind: "ULong",
    },
    hints: {
      size: 8,
      offset: 24,
      kind: "Pointer",
    },
  },} as const;

export type WGPUShaderModuleDescriptor = typeof WGPUShaderModuleDescriptor;

export const WGPUSupportedLimits = {
  name: "WGPUSupportedLimits",
  size: 152,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    limits: {
      size: 144,
      offset: 8,
      kind: "Record",
      type: () => WGPULimits,
    },
  },} as const;

export type WGPUSupportedLimits = typeof WGPUSupportedLimits;

export const WGPUTextureDescriptor = {
  name: "WGPUTextureDescriptor",
  size: 64,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    label: {
      size: 8,
      offset: 8,
      kind: "Pointer",
    },
    usage: {
      size: 4,
      offset: 16,
      kind: "UInt",
    },
    dimension: {
      size: 4,
      offset: 20,
      kind: "Enum",
    },
    size: {
      size: 12,
      offset: 24,
      kind: "Record",
      type: () => WGPUExtent3D,
    },
    format: {
      size: 4,
      offset: 36,
      kind: "Enum",
    },
    mipLevelCount: {
      size: 4,
      offset: 40,
      kind: "UInt",
    },
    sampleCount: {
      size: 4,
      offset: 44,
      kind: "UInt",
    },
    viewFormatCount: {
      size: 8,
      offset: 48,
      kind: "ULong",
    },
    viewFormats: {
      size: 8,
      offset: 56,
      kind: "Pointer",
    },
  },} as const;

export type WGPUTextureDescriptor = typeof WGPUTextureDescriptor;

export const WGPUVertexBufferLayout = {
  name: "WGPUVertexBufferLayout",
  size: 32,
  fields: {
    arrayStride: {
      size: 8,
      offset: 0,
      kind: "ULongLong",
    },
    stepMode: {
      size: 4,
      offset: 8,
      kind: "Enum",
    },
    attributeCount: {
      size: 8,
      offset: 16,
      kind: "ULong",
    },
    attributes: {
      size: 8,
      offset: 24,
      kind: "Pointer",
    },
  },} as const;

export type WGPUVertexBufferLayout = typeof WGPUVertexBufferLayout;

export const WGPUBindGroupLayoutDescriptor = {
  name: "WGPUBindGroupLayoutDescriptor",
  size: 32,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    label: {
      size: 8,
      offset: 8,
      kind: "Pointer",
    },
    entryCount: {
      size: 8,
      offset: 16,
      kind: "ULong",
    },
    entries: {
      size: 8,
      offset: 24,
      kind: "Pointer",
    },
  },} as const;

export type WGPUBindGroupLayoutDescriptor = typeof WGPUBindGroupLayoutDescriptor;

export const WGPUColorTargetState = {
  name: "WGPUColorTargetState",
  size: 32,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    format: {
      size: 4,
      offset: 8,
      kind: "Enum",
    },
    blend: {
      size: 8,
      offset: 16,
      kind: "Pointer",
    },
    writeMask: {
      size: 4,
      offset: 24,
      kind: "UInt",
    },
  },} as const;

export type WGPUColorTargetState = typeof WGPUColorTargetState;

export const WGPUComputePipelineDescriptor = {
  name: "WGPUComputePipelineDescriptor",
  size: 64,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    label: {
      size: 8,
      offset: 8,
      kind: "Pointer",
    },
    layout: {
      size: 8,
      offset: 16,
      kind: "Pointer",
    },
    compute: {
      size: 40,
      offset: 24,
      kind: "Record",
      type: () => WGPUProgrammableStageDescriptor,
    },
  },} as const;

export type WGPUComputePipelineDescriptor = typeof WGPUComputePipelineDescriptor;

export const WGPUDeviceDescriptor = {
  name: "WGPUDeviceDescriptor",
  size: 72,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    label: {
      size: 8,
      offset: 8,
      kind: "Pointer",
    },
    requiredFeaturesCount: {
      size: 8,
      offset: 16,
      kind: "ULong",
    },
    requiredFeatures: {
      size: 8,
      offset: 24,
      kind: "Pointer",
    },
    requiredLimits: {
      size: 8,
      offset: 32,
      kind: "Pointer",
    },
    defaultQueue: {
      size: 16,
      offset: 40,
      kind: "Record",
      type: () => WGPUQueueDescriptor,
    },
    deviceLostCallback: {
      size: 8,
      offset: 56,
      kind: "Pointer",
    },
    deviceLostUserdata: {
      size: 8,
      offset: 64,
      kind: "Pointer",
    },
  },} as const;

export type WGPUDeviceDescriptor = typeof WGPUDeviceDescriptor;

export const WGPURenderPassDescriptor = {
  name: "WGPURenderPassDescriptor",
  size: 64,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    label: {
      size: 8,
      offset: 8,
      kind: "Pointer",
    },
    colorAttachmentCount: {
      size: 8,
      offset: 16,
      kind: "ULong",
    },
    colorAttachments: {
      size: 8,
      offset: 24,
      kind: "Pointer",
    },
    depthStencilAttachment: {
      size: 8,
      offset: 32,
      kind: "Pointer",
    },
    occlusionQuerySet: {
      size: 8,
      offset: 40,
      kind: "Pointer",
    },
    timestampWriteCount: {
      size: 8,
      offset: 48,
      kind: "ULong",
    },
    timestampWrites: {
      size: 8,
      offset: 56,
      kind: "Pointer",
    },
  },} as const;

export type WGPURenderPassDescriptor = typeof WGPURenderPassDescriptor;

export const WGPUVertexState = {
  name: "WGPUVertexState",
  size: 56,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    module: {
      size: 8,
      offset: 8,
      kind: "Pointer",
    },
    entryPoint: {
      size: 8,
      offset: 16,
      kind: "Pointer",
    },
    constantCount: {
      size: 8,
      offset: 24,
      kind: "ULong",
    },
    constants: {
      size: 8,
      offset: 32,
      kind: "Pointer",
    },
    bufferCount: {
      size: 8,
      offset: 40,
      kind: "ULong",
    },
    buffers: {
      size: 8,
      offset: 48,
      kind: "Pointer",
    },
  },} as const;

export type WGPUVertexState = typeof WGPUVertexState;

export const WGPUFragmentState = {
  name: "WGPUFragmentState",
  size: 56,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    module: {
      size: 8,
      offset: 8,
      kind: "Pointer",
    },
    entryPoint: {
      size: 8,
      offset: 16,
      kind: "Pointer",
    },
    constantCount: {
      size: 8,
      offset: 24,
      kind: "ULong",
    },
    constants: {
      size: 8,
      offset: 32,
      kind: "Pointer",
    },
    targetCount: {
      size: 8,
      offset: 40,
      kind: "ULong",
    },
    targets: {
      size: 8,
      offset: 48,
      kind: "Pointer",
    },
  },} as const;

export type WGPUFragmentState = typeof WGPUFragmentState;

export const WGPURenderPipelineDescriptor = {
  name: "WGPURenderPipelineDescriptor",
  size: 144,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    label: {
      size: 8,
      offset: 8,
      kind: "Pointer",
    },
    layout: {
      size: 8,
      offset: 16,
      kind: "Pointer",
    },
    vertex: {
      size: 56,
      offset: 24,
      kind: "Record",
      type: () => WGPUVertexState,
    },
    primitive: {
      size: 24,
      offset: 80,
      kind: "Record",
      type: () => WGPUPrimitiveState,
    },
    depthStencil: {
      size: 8,
      offset: 104,
      kind: "Pointer",
    },
    multisample: {
      size: 24,
      offset: 112,
      kind: "Record",
      type: () => WGPUMultisampleState,
    },
    fragment: {
      size: 8,
      offset: 136,
      kind: "Pointer",
    },
  },} as const;

export type WGPURenderPipelineDescriptor = typeof WGPURenderPipelineDescriptor;

export const WGPUChainedStruct = {
  name: "WGPUChainedStruct",
  size: 16,
  fields: {
    next: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    sType: {
      size: 4,
      offset: 8,
      kind: "Enum",
    },
  },} as const;

export type WGPUChainedStruct = typeof WGPUChainedStruct;

export const WGPUChainedStructOut = {
  name: "WGPUChainedStructOut",
  size: 16,
  fields: {
    next: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    sType: {
      size: 4,
      offset: 8,
      kind: "Enum",
    },
  },} as const;

export type WGPUChainedStructOut = typeof WGPUChainedStructOut;

export const WGPUInstanceExtras = {
  name: "WGPUInstanceExtras",
  size: 40,
  fields: {
    chain: {
      size: 16,
      offset: 0,
      kind: "Record",
      type: () => WGPUChainedStruct,
    },
    backends: {
      size: 4,
      offset: 16,
      kind: "UInt",
    },
    dx12ShaderCompiler: {
      size: 4,
      offset: 20,
      kind: "Enum",
    },
    dxilPath: {
      size: 8,
      offset: 24,
      kind: "Pointer",
    },
    dxcPath: {
      size: 8,
      offset: 32,
      kind: "Pointer",
    },
  },} as const;

export type WGPUInstanceExtras = typeof WGPUInstanceExtras;

export const WGPUDeviceExtras = {
  name: "WGPUDeviceExtras",
  size: 24,
  fields: {
    chain: {
      size: 16,
      offset: 0,
      kind: "Record",
      type: () => WGPUChainedStruct,
    },
    tracePath: {
      size: 8,
      offset: 16,
      kind: "Pointer",
    },
  },} as const;

export type WGPUDeviceExtras = typeof WGPUDeviceExtras;

export const WGPURequiredLimitsExtras = {
  name: "WGPURequiredLimitsExtras",
  size: 24,
  fields: {
    chain: {
      size: 16,
      offset: 0,
      kind: "Record",
      type: () => WGPUChainedStruct,
    },
    maxPushConstantSize: {
      size: 4,
      offset: 16,
      kind: "UInt",
    },
  },} as const;

export type WGPURequiredLimitsExtras = typeof WGPURequiredLimitsExtras;

export const WGPUSupportedLimitsExtras = {
  name: "WGPUSupportedLimitsExtras",
  size: 24,
  fields: {
    chain: {
      size: 16,
      offset: 0,
      kind: "Record",
      type: () => WGPUChainedStructOut,
    },
    maxPushConstantSize: {
      size: 4,
      offset: 16,
      kind: "UInt",
    },
  },} as const;

export type WGPUSupportedLimitsExtras = typeof WGPUSupportedLimitsExtras;

export const WGPUPushConstantRange = {
  name: "WGPUPushConstantRange",
  size: 12,
  fields: {
    stages: {
      size: 4,
      offset: 0,
      kind: "UInt",
    },
    start: {
      size: 4,
      offset: 4,
      kind: "UInt",
    },
    end: {
      size: 4,
      offset: 8,
      kind: "UInt",
    },
  },} as const;

export type WGPUPushConstantRange = typeof WGPUPushConstantRange;

export const WGPUPipelineLayoutExtras = {
  name: "WGPUPipelineLayoutExtras",
  size: 32,
  fields: {
    chain: {
      size: 16,
      offset: 0,
      kind: "Record",
      type: () => WGPUChainedStruct,
    },
    pushConstantRangeCount: {
      size: 4,
      offset: 16,
      kind: "UInt",
    },
    pushConstantRanges: {
      size: 8,
      offset: 24,
      kind: "Pointer",
    },
  },} as const;

export type WGPUPipelineLayoutExtras = typeof WGPUPipelineLayoutExtras;

export const WGPUWrappedSubmissionIndex = {
  name: "WGPUWrappedSubmissionIndex",
  size: 16,
  fields: {
    queue: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    submissionIndex: {
      size: 8,
      offset: 8,
      kind: "ULongLong",
    },
  },} as const;

export type WGPUWrappedSubmissionIndex = typeof WGPUWrappedSubmissionIndex;

export const WGPUShaderDefine = {
  name: "WGPUShaderDefine",
  size: 16,
  fields: {
    name: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    value: {
      size: 8,
      offset: 8,
      kind: "Pointer",
    },
  },} as const;

export type WGPUShaderDefine = typeof WGPUShaderDefine;

export const WGPUShaderModuleGLSLDescriptor = {
  name: "WGPUShaderModuleGLSLDescriptor",
  size: 48,
  fields: {
    chain: {
      size: 16,
      offset: 0,
      kind: "Record",
      type: () => WGPUChainedStruct,
    },
    stage: {
      size: 4,
      offset: 16,
      kind: "Enum",
    },
    code: {
      size: 8,
      offset: 24,
      kind: "Pointer",
    },
    defineCount: {
      size: 4,
      offset: 32,
      kind: "UInt",
    },
    defines: {
      size: 8,
      offset: 40,
      kind: "Pointer",
    },
  },} as const;

export type WGPUShaderModuleGLSLDescriptor = typeof WGPUShaderModuleGLSLDescriptor;

export const WGPUStorageReport = {
  name: "WGPUStorageReport",
  size: 32,
  fields: {
    numOccupied: {
      size: 8,
      offset: 0,
      kind: "ULong",
    },
    numVacant: {
      size: 8,
      offset: 8,
      kind: "ULong",
    },
    numError: {
      size: 8,
      offset: 16,
      kind: "ULong",
    },
    elementSize: {
      size: 8,
      offset: 24,
      kind: "ULong",
    },
  },} as const;

export type WGPUStorageReport = typeof WGPUStorageReport;

export const WGPUHubReport = {
  name: "WGPUHubReport",
  size: 480,
  fields: {
    adapters: {
      size: 32,
      offset: 0,
      kind: "Record",
      type: () => WGPUStorageReport,
    },
    devices: {
      size: 32,
      offset: 32,
      kind: "Record",
      type: () => WGPUStorageReport,
    },
    pipelineLayouts: {
      size: 32,
      offset: 64,
      kind: "Record",
      type: () => WGPUStorageReport,
    },
    shaderModules: {
      size: 32,
      offset: 96,
      kind: "Record",
      type: () => WGPUStorageReport,
    },
    bindGroupLayouts: {
      size: 32,
      offset: 128,
      kind: "Record",
      type: () => WGPUStorageReport,
    },
    bindGroups: {
      size: 32,
      offset: 160,
      kind: "Record",
      type: () => WGPUStorageReport,
    },
    commandBuffers: {
      size: 32,
      offset: 192,
      kind: "Record",
      type: () => WGPUStorageReport,
    },
    renderBundles: {
      size: 32,
      offset: 224,
      kind: "Record",
      type: () => WGPUStorageReport,
    },
    renderPipelines: {
      size: 32,
      offset: 256,
      kind: "Record",
      type: () => WGPUStorageReport,
    },
    computePipelines: {
      size: 32,
      offset: 288,
      kind: "Record",
      type: () => WGPUStorageReport,
    },
    querySets: {
      size: 32,
      offset: 320,
      kind: "Record",
      type: () => WGPUStorageReport,
    },
    buffers: {
      size: 32,
      offset: 352,
      kind: "Record",
      type: () => WGPUStorageReport,
    },
    textures: {
      size: 32,
      offset: 384,
      kind: "Record",
      type: () => WGPUStorageReport,
    },
    textureViews: {
      size: 32,
      offset: 416,
      kind: "Record",
      type: () => WGPUStorageReport,
    },
    samplers: {
      size: 32,
      offset: 448,
      kind: "Record",
      type: () => WGPUStorageReport,
    },
  },} as const;

export type WGPUHubReport = typeof WGPUHubReport;

export const WGPUGlobalReport = {
  name: "WGPUGlobalReport",
  size: 2440,
  fields: {
    surfaces: {
      size: 32,
      offset: 0,
      kind: "Record",
      type: () => WGPUStorageReport,
    },
    backendType: {
      size: 4,
      offset: 32,
      kind: "Enum",
    },
    vulkan: {
      size: 480,
      offset: 40,
      kind: "Record",
      type: () => WGPUHubReport,
    },
    metal: {
      size: 480,
      offset: 520,
      kind: "Record",
      type: () => WGPUHubReport,
    },
    dx12: {
      size: 480,
      offset: 1000,
      kind: "Record",
      type: () => WGPUHubReport,
    },
    dx11: {
      size: 480,
      offset: 1480,
      kind: "Record",
      type: () => WGPUHubReport,
    },
    gl: {
      size: 480,
      offset: 1960,
      kind: "Record",
      type: () => WGPUHubReport,
    },
  },} as const;

export type WGPUGlobalReport = typeof WGPUGlobalReport;

export const WGPUSurfaceCapabilities = {
  name: "WGPUSurfaceCapabilities",
  size: 48,
  fields: {
    formatCount: {
      size: 8,
      offset: 0,
      kind: "ULong",
    },
    formats: {
      size: 8,
      offset: 8,
      kind: "Pointer",
    },
    presentModeCount: {
      size: 8,
      offset: 16,
      kind: "ULong",
    },
    presentModes: {
      size: 8,
      offset: 24,
      kind: "Pointer",
    },
    alphaModeCount: {
      size: 8,
      offset: 32,
      kind: "ULong",
    },
    alphaModes: {
      size: 8,
      offset: 40,
      kind: "Pointer",
    },
  },} as const;

export type WGPUSurfaceCapabilities = typeof WGPUSurfaceCapabilities;

export const WGPUSwapChainDescriptorExtras = {
  name: "WGPUSwapChainDescriptorExtras",
  size: 40,
  fields: {
    chain: {
      size: 16,
      offset: 0,
      kind: "Record",
      type: () => WGPUChainedStruct,
    },
    alphaMode: {
      size: 4,
      offset: 16,
      kind: "Enum",
    },
    viewFormatCount: {
      size: 8,
      offset: 24,
      kind: "ULong",
    },
    viewFormats: {
      size: 8,
      offset: 32,
      kind: "Pointer",
    },
  },} as const;

export type WGPUSwapChainDescriptorExtras = typeof WGPUSwapChainDescriptorExtras;

export const WGPUInstanceEnumerateAdapterOptions = {
  name: "WGPUInstanceEnumerateAdapterOptions",
  size: 16,
  fields: {
    nextInChain: {
      size: 8,
      offset: 0,
      kind: "Pointer",
    },
    backends: {
      size: 4,
      offset: 8,
      kind: "UInt",
    },
  },} as const;

export type WGPUInstanceEnumerateAdapterOptions = typeof WGPUInstanceEnumerateAdapterOptions;

