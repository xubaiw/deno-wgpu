export const WGPUAdapterProperties = {
  name: "WGPUAdapterProperties",
  size: 64,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    vendorID: {
      offset: 8,
      kind: "UInt",
    },
    vendorName: {
      offset: 16,
      kind: "Pointer",
    },
    architecture: {
      offset: 24,
      kind: "Pointer",
    },
    deviceID: {
      offset: 32,
      kind: "UInt",
    },
    name: {
      offset: 40,
      kind: "Pointer",
    },
    driverDescription: {
      offset: 48,
      kind: "Pointer",
    },
    adapterType: {
      offset: 56,
      kind: "Enum",
    },
    backendType: {
      offset: 60,
      kind: "Enum",
    },
  },
} as const;

export const WGPUBindGroupEntry = {
  name: "WGPUBindGroupEntry",
  size: 56,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    binding: {
      offset: 8,
      kind: "UInt",
    },
    buffer: {
      offset: 16,
      kind: "Pointer",
    },
    offset: {
      offset: 24,
      kind: "ULongLong",
    },
    size: {
      offset: 32,
      kind: "ULongLong",
    },
    sampler: {
      offset: 40,
      kind: "Pointer",
    },
    textureView: {
      offset: 48,
      kind: "Pointer",
    },
  },
} as const;

export const WGPUBlendComponent = {
  name: "WGPUBlendComponent",
  size: 12,
  fields: {
    operation: {
      offset: 0,
      kind: "Enum",
    },
    srcFactor: {
      offset: 4,
      kind: "Enum",
    },
    dstFactor: {
      offset: 8,
      kind: "Enum",
    },
  },
} as const;

export const WGPUBufferBindingLayout = {
  name: "WGPUBufferBindingLayout",
  size: 24,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    type: {
      offset: 8,
      kind: "Enum",
    },
    hasDynamicOffset: {
      offset: 12,
      kind: "Bool",
    },
    minBindingSize: {
      offset: 16,
      kind: "ULongLong",
    },
  },
} as const;

export const WGPUBufferDescriptor = {
  name: "WGPUBufferDescriptor",
  size: 40,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    label: {
      offset: 8,
      kind: "Pointer",
    },
    usage: {
      offset: 16,
      kind: "UInt",
    },
    size: {
      offset: 24,
      kind: "ULongLong",
    },
    mappedAtCreation: {
      offset: 32,
      kind: "Bool",
    },
  },
} as const;

export const WGPUColor = {
  name: "WGPUColor",
  size: 32,
  fields: {
    r: {
      offset: 0,
      kind: "Double",
    },
    g: {
      offset: 8,
      kind: "Double",
    },
    b: {
      offset: 16,
      kind: "Double",
    },
    a: {
      offset: 24,
      kind: "Double",
    },
  },
} as const;

export const WGPUCommandBufferDescriptor = {
  name: "WGPUCommandBufferDescriptor",
  size: 16,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    label: {
      offset: 8,
      kind: "Pointer",
    },
  },
} as const;

export const WGPUCommandEncoderDescriptor = {
  name: "WGPUCommandEncoderDescriptor",
  size: 16,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    label: {
      offset: 8,
      kind: "Pointer",
    },
  },
} as const;

export const WGPUCompilationMessage = {
  name: "WGPUCompilationMessage",
  size: 80,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    message: {
      offset: 8,
      kind: "Pointer",
    },
    type: {
      offset: 16,
      kind: "Enum",
    },
    lineNum: {
      offset: 24,
      kind: "ULongLong",
    },
    linePos: {
      offset: 32,
      kind: "ULongLong",
    },
    offset: {
      offset: 40,
      kind: "ULongLong",
    },
    length: {
      offset: 48,
      kind: "ULongLong",
    },
    utf16LinePos: {
      offset: 56,
      kind: "ULongLong",
    },
    utf16Offset: {
      offset: 64,
      kind: "ULongLong",
    },
    utf16Length: {
      offset: 72,
      kind: "ULongLong",
    },
  },
} as const;

export const WGPUComputePassTimestampWrite = {
  name: "WGPUComputePassTimestampWrite",
  size: 16,
  fields: {
    querySet: {
      offset: 0,
      kind: "Pointer",
    },
    queryIndex: {
      offset: 8,
      kind: "UInt",
    },
    location: {
      offset: 12,
      kind: "Enum",
    },
  },
} as const;

export const WGPUConstantEntry = {
  name: "WGPUConstantEntry",
  size: 24,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    key: {
      offset: 8,
      kind: "Pointer",
    },
    value: {
      offset: 16,
      kind: "Double",
    },
  },
} as const;

export const WGPUExtent3D = {
  name: "WGPUExtent3D",
  size: 12,
  fields: {
    width: {
      offset: 0,
      kind: "UInt",
    },
    height: {
      offset: 4,
      kind: "UInt",
    },
    depthOrArrayLayers: {
      offset: 8,
      kind: "UInt",
    },
  },
} as const;

export const WGPUInstanceDescriptor = {
  name: "WGPUInstanceDescriptor",
  size: 8,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
  },
} as const;

export const WGPULimits = {
  name: "WGPULimits",
  size: 144,
  fields: {
    maxTextureDimension1D: {
      offset: 0,
      kind: "UInt",
    },
    maxTextureDimension2D: {
      offset: 4,
      kind: "UInt",
    },
    maxTextureDimension3D: {
      offset: 8,
      kind: "UInt",
    },
    maxTextureArrayLayers: {
      offset: 12,
      kind: "UInt",
    },
    maxBindGroups: {
      offset: 16,
      kind: "UInt",
    },
    maxBindingsPerBindGroup: {
      offset: 20,
      kind: "UInt",
    },
    maxDynamicUniformBuffersPerPipelineLayout: {
      offset: 24,
      kind: "UInt",
    },
    maxDynamicStorageBuffersPerPipelineLayout: {
      offset: 28,
      kind: "UInt",
    },
    maxSampledTexturesPerShaderStage: {
      offset: 32,
      kind: "UInt",
    },
    maxSamplersPerShaderStage: {
      offset: 36,
      kind: "UInt",
    },
    maxStorageBuffersPerShaderStage: {
      offset: 40,
      kind: "UInt",
    },
    maxStorageTexturesPerShaderStage: {
      offset: 44,
      kind: "UInt",
    },
    maxUniformBuffersPerShaderStage: {
      offset: 48,
      kind: "UInt",
    },
    maxUniformBufferBindingSize: {
      offset: 56,
      kind: "ULongLong",
    },
    maxStorageBufferBindingSize: {
      offset: 64,
      kind: "ULongLong",
    },
    minUniformBufferOffsetAlignment: {
      offset: 72,
      kind: "UInt",
    },
    minStorageBufferOffsetAlignment: {
      offset: 76,
      kind: "UInt",
    },
    maxVertexBuffers: {
      offset: 80,
      kind: "UInt",
    },
    maxBufferSize: {
      offset: 88,
      kind: "ULongLong",
    },
    maxVertexAttributes: {
      offset: 96,
      kind: "UInt",
    },
    maxVertexBufferArrayStride: {
      offset: 100,
      kind: "UInt",
    },
    maxInterStageShaderComponents: {
      offset: 104,
      kind: "UInt",
    },
    maxInterStageShaderVariables: {
      offset: 108,
      kind: "UInt",
    },
    maxColorAttachments: {
      offset: 112,
      kind: "UInt",
    },
    maxColorAttachmentBytesPerSample: {
      offset: 116,
      kind: "UInt",
    },
    maxComputeWorkgroupStorageSize: {
      offset: 120,
      kind: "UInt",
    },
    maxComputeInvocationsPerWorkgroup: {
      offset: 124,
      kind: "UInt",
    },
    maxComputeWorkgroupSizeX: {
      offset: 128,
      kind: "UInt",
    },
    maxComputeWorkgroupSizeY: {
      offset: 132,
      kind: "UInt",
    },
    maxComputeWorkgroupSizeZ: {
      offset: 136,
      kind: "UInt",
    },
    maxComputeWorkgroupsPerDimension: {
      offset: 140,
      kind: "UInt",
    },
  },
} as const;

export const WGPUMultisampleState = {
  name: "WGPUMultisampleState",
  size: 24,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    count: {
      offset: 8,
      kind: "UInt",
    },
    mask: {
      offset: 12,
      kind: "UInt",
    },
    alphaToCoverageEnabled: {
      offset: 16,
      kind: "Bool",
    },
  },
} as const;

export const WGPUOrigin3D = {
  name: "WGPUOrigin3D",
  size: 12,
  fields: {
    x: {
      offset: 0,
      kind: "UInt",
    },
    y: {
      offset: 4,
      kind: "UInt",
    },
    z: {
      offset: 8,
      kind: "UInt",
    },
  },
} as const;

export const WGPUPipelineLayoutDescriptor = {
  name: "WGPUPipelineLayoutDescriptor",
  size: 32,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    label: {
      offset: 8,
      kind: "Pointer",
    },
    bindGroupLayoutCount: {
      offset: 16,
      kind: "ULong",
    },
    bindGroupLayouts: {
      offset: 24,
      kind: "Pointer",
    },
  },
} as const;

export const WGPUPrimitiveDepthClipControl = {
  name: "WGPUPrimitiveDepthClipControl",
  size: 24,
  fields: {
    chain: {
      offset: 0,
      kind: "Record",
      size: 16,
      type: () => WGPUChainedStruct,
    },
    unclippedDepth: {
      offset: 16,
      kind: "Bool",
    },
  },
} as const;

export const WGPUPrimitiveState = {
  name: "WGPUPrimitiveState",
  size: 24,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    topology: {
      offset: 8,
      kind: "Enum",
    },
    stripIndexFormat: {
      offset: 12,
      kind: "Enum",
    },
    frontFace: {
      offset: 16,
      kind: "Enum",
    },
    cullMode: {
      offset: 20,
      kind: "Enum",
    },
  },
} as const;

export const WGPUQuerySetDescriptor = {
  name: "WGPUQuerySetDescriptor",
  size: 40,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    label: {
      offset: 8,
      kind: "Pointer",
    },
    type: {
      offset: 16,
      kind: "Enum",
    },
    count: {
      offset: 20,
      kind: "UInt",
    },
    pipelineStatistics: {
      offset: 24,
      kind: "Pointer",
    },
    pipelineStatisticsCount: {
      offset: 32,
      kind: "ULong",
    },
  },
} as const;

export const WGPUQueueDescriptor = {
  name: "WGPUQueueDescriptor",
  size: 16,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    label: {
      offset: 8,
      kind: "Pointer",
    },
  },
} as const;

export const WGPURenderBundleDescriptor = {
  name: "WGPURenderBundleDescriptor",
  size: 16,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    label: {
      offset: 8,
      kind: "Pointer",
    },
  },
} as const;

export const WGPURenderBundleEncoderDescriptor = {
  name: "WGPURenderBundleEncoderDescriptor",
  size: 48,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    label: {
      offset: 8,
      kind: "Pointer",
    },
    colorFormatsCount: {
      offset: 16,
      kind: "ULong",
    },
    colorFormats: {
      offset: 24,
      kind: "Pointer",
    },
    depthStencilFormat: {
      offset: 32,
      kind: "Enum",
    },
    sampleCount: {
      offset: 36,
      kind: "UInt",
    },
    depthReadOnly: {
      offset: 40,
      kind: "Bool",
    },
    stencilReadOnly: {
      offset: 41,
      kind: "Bool",
    },
  },
} as const;

export const WGPURenderPassDepthStencilAttachment = {
  name: "WGPURenderPassDepthStencilAttachment",
  size: 40,
  fields: {
    view: {
      offset: 0,
      kind: "Pointer",
    },
    depthLoadOp: {
      offset: 8,
      kind: "Enum",
    },
    depthStoreOp: {
      offset: 12,
      kind: "Enum",
    },
    depthClearValue: {
      offset: 16,
      kind: "Float",
    },
    depthReadOnly: {
      offset: 20,
      kind: "Bool",
    },
    stencilLoadOp: {
      offset: 24,
      kind: "Enum",
    },
    stencilStoreOp: {
      offset: 28,
      kind: "Enum",
    },
    stencilClearValue: {
      offset: 32,
      kind: "UInt",
    },
    stencilReadOnly: {
      offset: 36,
      kind: "Bool",
    },
  },
} as const;

export const WGPURenderPassDescriptorMaxDrawCount = {
  name: "WGPURenderPassDescriptorMaxDrawCount",
  size: 24,
  fields: {
    chain: {
      offset: 0,
      kind: "Record",
      size: 16,
      type: () => WGPUChainedStruct,
    },
    maxDrawCount: {
      offset: 16,
      kind: "ULongLong",
    },
  },
} as const;

export const WGPURenderPassTimestampWrite = {
  name: "WGPURenderPassTimestampWrite",
  size: 16,
  fields: {
    querySet: {
      offset: 0,
      kind: "Pointer",
    },
    queryIndex: {
      offset: 8,
      kind: "UInt",
    },
    location: {
      offset: 12,
      kind: "Enum",
    },
  },
} as const;

export const WGPURequestAdapterOptions = {
  name: "WGPURequestAdapterOptions",
  size: 32,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    compatibleSurface: {
      offset: 8,
      kind: "Pointer",
    },
    powerPreference: {
      offset: 16,
      kind: "Enum",
    },
    backendType: {
      offset: 20,
      kind: "Enum",
    },
    forceFallbackAdapter: {
      offset: 24,
      kind: "Bool",
    },
  },
} as const;

export const WGPUSamplerBindingLayout = {
  name: "WGPUSamplerBindingLayout",
  size: 16,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    type: {
      offset: 8,
      kind: "Enum",
    },
  },
} as const;

export const WGPUSamplerDescriptor = {
  name: "WGPUSamplerDescriptor",
  size: 56,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    label: {
      offset: 8,
      kind: "Pointer",
    },
    addressModeU: {
      offset: 16,
      kind: "Enum",
    },
    addressModeV: {
      offset: 20,
      kind: "Enum",
    },
    addressModeW: {
      offset: 24,
      kind: "Enum",
    },
    magFilter: {
      offset: 28,
      kind: "Enum",
    },
    minFilter: {
      offset: 32,
      kind: "Enum",
    },
    mipmapFilter: {
      offset: 36,
      kind: "Enum",
    },
    lodMinClamp: {
      offset: 40,
      kind: "Float",
    },
    lodMaxClamp: {
      offset: 44,
      kind: "Float",
    },
    compare: {
      offset: 48,
      kind: "Enum",
    },
    maxAnisotropy: {
      offset: 52,
      kind: "UShort",
    },
  },
} as const;

export const WGPUShaderModuleCompilationHint = {
  name: "WGPUShaderModuleCompilationHint",
  size: 24,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    entryPoint: {
      offset: 8,
      kind: "Pointer",
    },
    layout: {
      offset: 16,
      kind: "Pointer",
    },
  },
} as const;

export const WGPUShaderModuleSPIRVDescriptor = {
  name: "WGPUShaderModuleSPIRVDescriptor",
  size: 32,
  fields: {
    chain: {
      offset: 0,
      kind: "Record",
      size: 16,
      type: () => WGPUChainedStruct,
    },
    codeSize: {
      offset: 16,
      kind: "UInt",
    },
    code: {
      offset: 24,
      kind: "Pointer",
    },
  },
} as const;

export const WGPUShaderModuleWGSLDescriptor = {
  name: "WGPUShaderModuleWGSLDescriptor",
  size: 24,
  fields: {
    chain: {
      offset: 0,
      kind: "Record",
      size: 16,
      type: () => WGPUChainedStruct,
    },
    code: {
      offset: 16,
      kind: "Pointer",
    },
  },
} as const;

export const WGPUStencilFaceState = {
  name: "WGPUStencilFaceState",
  size: 16,
  fields: {
    compare: {
      offset: 0,
      kind: "Enum",
    },
    failOp: {
      offset: 4,
      kind: "Enum",
    },
    depthFailOp: {
      offset: 8,
      kind: "Enum",
    },
    passOp: {
      offset: 12,
      kind: "Enum",
    },
  },
} as const;

export const WGPUStorageTextureBindingLayout = {
  name: "WGPUStorageTextureBindingLayout",
  size: 24,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    access: {
      offset: 8,
      kind: "Enum",
    },
    format: {
      offset: 12,
      kind: "Enum",
    },
    viewDimension: {
      offset: 16,
      kind: "Enum",
    },
  },
} as const;

export const WGPUSurfaceDescriptor = {
  name: "WGPUSurfaceDescriptor",
  size: 16,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    label: {
      offset: 8,
      kind: "Pointer",
    },
  },
} as const;

export const WGPUSurfaceDescriptorFromAndroidNativeWindow = {
  name: "WGPUSurfaceDescriptorFromAndroidNativeWindow",
  size: 24,
  fields: {
    chain: {
      offset: 0,
      kind: "Record",
      size: 16,
      type: () => WGPUChainedStruct,
    },
    window: {
      offset: 16,
      kind: "Pointer",
    },
  },
} as const;

export const WGPUSurfaceDescriptorFromCanvasHTMLSelector = {
  name: "WGPUSurfaceDescriptorFromCanvasHTMLSelector",
  size: 24,
  fields: {
    chain: {
      offset: 0,
      kind: "Record",
      size: 16,
      type: () => WGPUChainedStruct,
    },
    selector: {
      offset: 16,
      kind: "Pointer",
    },
  },
} as const;

export const WGPUSurfaceDescriptorFromMetalLayer = {
  name: "WGPUSurfaceDescriptorFromMetalLayer",
  size: 24,
  fields: {
    chain: {
      offset: 0,
      kind: "Record",
      size: 16,
      type: () => WGPUChainedStruct,
    },
    layer: {
      offset: 16,
      kind: "Pointer",
    },
  },
} as const;

export const WGPUSurfaceDescriptorFromWaylandSurface = {
  name: "WGPUSurfaceDescriptorFromWaylandSurface",
  size: 32,
  fields: {
    chain: {
      offset: 0,
      kind: "Record",
      size: 16,
      type: () => WGPUChainedStruct,
    },
    display: {
      offset: 16,
      kind: "Pointer",
    },
    surface: {
      offset: 24,
      kind: "Pointer",
    },
  },
} as const;

export const WGPUSurfaceDescriptorFromWindowsHWND = {
  name: "WGPUSurfaceDescriptorFromWindowsHWND",
  size: 32,
  fields: {
    chain: {
      offset: 0,
      kind: "Record",
      size: 16,
      type: () => WGPUChainedStruct,
    },
    hinstance: {
      offset: 16,
      kind: "Pointer",
    },
    hwnd: {
      offset: 24,
      kind: "Pointer",
    },
  },
} as const;

export const WGPUSurfaceDescriptorFromXcbWindow = {
  name: "WGPUSurfaceDescriptorFromXcbWindow",
  size: 32,
  fields: {
    chain: {
      offset: 0,
      kind: "Record",
      size: 16,
      type: () => WGPUChainedStruct,
    },
    connection: {
      offset: 16,
      kind: "Pointer",
    },
    window: {
      offset: 24,
      kind: "UInt",
    },
  },
} as const;

export const WGPUSurfaceDescriptorFromXlibWindow = {
  name: "WGPUSurfaceDescriptorFromXlibWindow",
  size: 32,
  fields: {
    chain: {
      offset: 0,
      kind: "Record",
      size: 16,
      type: () => WGPUChainedStruct,
    },
    display: {
      offset: 16,
      kind: "Pointer",
    },
    window: {
      offset: 24,
      kind: "UInt",
    },
  },
} as const;

export const WGPUSwapChainDescriptor = {
  name: "WGPUSwapChainDescriptor",
  size: 40,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    label: {
      offset: 8,
      kind: "Pointer",
    },
    usage: {
      offset: 16,
      kind: "UInt",
    },
    format: {
      offset: 20,
      kind: "Enum",
    },
    width: {
      offset: 24,
      kind: "UInt",
    },
    height: {
      offset: 28,
      kind: "UInt",
    },
    presentMode: {
      offset: 32,
      kind: "Enum",
    },
  },
} as const;

export const WGPUTextureBindingLayout = {
  name: "WGPUTextureBindingLayout",
  size: 24,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    sampleType: {
      offset: 8,
      kind: "Enum",
    },
    viewDimension: {
      offset: 12,
      kind: "Enum",
    },
    multisampled: {
      offset: 16,
      kind: "Bool",
    },
  },
} as const;

export const WGPUTextureDataLayout = {
  name: "WGPUTextureDataLayout",
  size: 24,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    offset: {
      offset: 8,
      kind: "ULongLong",
    },
    bytesPerRow: {
      offset: 16,
      kind: "UInt",
    },
    rowsPerImage: {
      offset: 20,
      kind: "UInt",
    },
  },
} as const;

export const WGPUTextureViewDescriptor = {
  name: "WGPUTextureViewDescriptor",
  size: 48,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    label: {
      offset: 8,
      kind: "Pointer",
    },
    format: {
      offset: 16,
      kind: "Enum",
    },
    dimension: {
      offset: 20,
      kind: "Enum",
    },
    baseMipLevel: {
      offset: 24,
      kind: "UInt",
    },
    mipLevelCount: {
      offset: 28,
      kind: "UInt",
    },
    baseArrayLayer: {
      offset: 32,
      kind: "UInt",
    },
    arrayLayerCount: {
      offset: 36,
      kind: "UInt",
    },
    aspect: {
      offset: 40,
      kind: "Enum",
    },
  },
} as const;

export const WGPUVertexAttribute = {
  name: "WGPUVertexAttribute",
  size: 24,
  fields: {
    format: {
      offset: 0,
      kind: "Enum",
    },
    offset: {
      offset: 8,
      kind: "ULongLong",
    },
    shaderLocation: {
      offset: 16,
      kind: "UInt",
    },
  },
} as const;

export const WGPUBindGroupDescriptor = {
  name: "WGPUBindGroupDescriptor",
  size: 40,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    label: {
      offset: 8,
      kind: "Pointer",
    },
    layout: {
      offset: 16,
      kind: "Pointer",
    },
    entryCount: {
      offset: 24,
      kind: "ULong",
    },
    entries: {
      offset: 32,
      kind: "Pointer",
    },
  },
} as const;

export const WGPUBindGroupLayoutEntry = {
  name: "WGPUBindGroupLayoutEntry",
  size: 104,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    binding: {
      offset: 8,
      kind: "UInt",
    },
    visibility: {
      offset: 12,
      kind: "UInt",
    },
    buffer: {
      offset: 16,
      kind: "Record",
      size: 24,
      type: () => WGPUBufferBindingLayout,
    },
    sampler: {
      offset: 40,
      kind: "Record",
      size: 16,
      type: () => WGPUSamplerBindingLayout,
    },
    texture: {
      offset: 56,
      kind: "Record",
      size: 24,
      type: () => WGPUTextureBindingLayout,
    },
    storageTexture: {
      offset: 80,
      kind: "Record",
      size: 24,
      type: () => WGPUStorageTextureBindingLayout,
    },
  },
} as const;

export const WGPUBlendState = {
  name: "WGPUBlendState",
  size: 24,
  fields: {
    color: {
      offset: 0,
      kind: "Record",
      size: 12,
      type: () => WGPUBlendComponent,
    },
    alpha: {
      offset: 12,
      kind: "Record",
      size: 12,
      type: () => WGPUBlendComponent,
    },
  },
} as const;

export const WGPUCompilationInfo = {
  name: "WGPUCompilationInfo",
  size: 24,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    messageCount: {
      offset: 8,
      kind: "ULong",
    },
    messages: {
      offset: 16,
      kind: "Pointer",
    },
  },
} as const;

export const WGPUComputePassDescriptor = {
  name: "WGPUComputePassDescriptor",
  size: 32,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    label: {
      offset: 8,
      kind: "Pointer",
    },
    timestampWriteCount: {
      offset: 16,
      kind: "ULong",
    },
    timestampWrites: {
      offset: 24,
      kind: "Pointer",
    },
  },
} as const;

export const WGPUDepthStencilState = {
  name: "WGPUDepthStencilState",
  size: 72,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    format: {
      offset: 8,
      kind: "Enum",
    },
    depthWriteEnabled: {
      offset: 12,
      kind: "Bool",
    },
    depthCompare: {
      offset: 16,
      kind: "Enum",
    },
    stencilFront: {
      offset: 20,
      kind: "Record",
      size: 16,
      type: () => WGPUStencilFaceState,
    },
    stencilBack: {
      offset: 36,
      kind: "Record",
      size: 16,
      type: () => WGPUStencilFaceState,
    },
    stencilReadMask: {
      offset: 52,
      kind: "UInt",
    },
    stencilWriteMask: {
      offset: 56,
      kind: "UInt",
    },
    depthBias: {
      offset: 60,
      kind: "Int",
    },
    depthBiasSlopeScale: {
      offset: 64,
      kind: "Float",
    },
    depthBiasClamp: {
      offset: 68,
      kind: "Float",
    },
  },
} as const;

export const WGPUImageCopyBuffer = {
  name: "WGPUImageCopyBuffer",
  size: 40,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    layout: {
      offset: 8,
      kind: "Record",
      size: 24,
      type: () => WGPUTextureDataLayout,
    },
    buffer: {
      offset: 32,
      kind: "Pointer",
    },
  },
} as const;

export const WGPUImageCopyTexture = {
  name: "WGPUImageCopyTexture",
  size: 40,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    texture: {
      offset: 8,
      kind: "Pointer",
    },
    mipLevel: {
      offset: 16,
      kind: "UInt",
    },
    origin: {
      offset: 20,
      kind: "Record",
      size: 12,
      type: () => WGPUOrigin3D,
    },
    aspect: {
      offset: 32,
      kind: "Enum",
    },
  },
} as const;

export const WGPUProgrammableStageDescriptor = {
  name: "WGPUProgrammableStageDescriptor",
  size: 40,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    module: {
      offset: 8,
      kind: "Pointer",
    },
    entryPoint: {
      offset: 16,
      kind: "Pointer",
    },
    constantCount: {
      offset: 24,
      kind: "ULong",
    },
    constants: {
      offset: 32,
      kind: "Pointer",
    },
  },
} as const;

export const WGPURenderPassColorAttachment = {
  name: "WGPURenderPassColorAttachment",
  size: 56,
  fields: {
    view: {
      offset: 0,
      kind: "Pointer",
    },
    resolveTarget: {
      offset: 8,
      kind: "Pointer",
    },
    loadOp: {
      offset: 16,
      kind: "Enum",
    },
    storeOp: {
      offset: 20,
      kind: "Enum",
    },
    clearValue: {
      offset: 24,
      kind: "Record",
      size: 32,
      type: () => WGPUColor,
    },
  },
} as const;

export const WGPURequiredLimits = {
  name: "WGPURequiredLimits",
  size: 152,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    limits: {
      offset: 8,
      kind: "Record",
      size: 144,
      type: () => WGPULimits,
    },
  },
} as const;

export const WGPUShaderModuleDescriptor = {
  name: "WGPUShaderModuleDescriptor",
  size: 32,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    label: {
      offset: 8,
      kind: "Pointer",
    },
    hintCount: {
      offset: 16,
      kind: "ULong",
    },
    hints: {
      offset: 24,
      kind: "Pointer",
    },
  },
} as const;

export const WGPUSupportedLimits = {
  name: "WGPUSupportedLimits",
  size: 152,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    limits: {
      offset: 8,
      kind: "Record",
      size: 144,
      type: () => WGPULimits,
    },
  },
} as const;

export const WGPUTextureDescriptor = {
  name: "WGPUTextureDescriptor",
  size: 64,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    label: {
      offset: 8,
      kind: "Pointer",
    },
    usage: {
      offset: 16,
      kind: "UInt",
    },
    dimension: {
      offset: 20,
      kind: "Enum",
    },
    size: {
      offset: 24,
      kind: "Record",
      size: 12,
      type: () => WGPUExtent3D,
    },
    format: {
      offset: 36,
      kind: "Enum",
    },
    mipLevelCount: {
      offset: 40,
      kind: "UInt",
    },
    sampleCount: {
      offset: 44,
      kind: "UInt",
    },
    viewFormatCount: {
      offset: 48,
      kind: "ULong",
    },
    viewFormats: {
      offset: 56,
      kind: "Pointer",
    },
  },
} as const;

export const WGPUVertexBufferLayout = {
  name: "WGPUVertexBufferLayout",
  size: 32,
  fields: {
    arrayStride: {
      offset: 0,
      kind: "ULongLong",
    },
    stepMode: {
      offset: 8,
      kind: "Enum",
    },
    attributeCount: {
      offset: 16,
      kind: "ULong",
    },
    attributes: {
      offset: 24,
      kind: "Pointer",
    },
  },
} as const;

export const WGPUBindGroupLayoutDescriptor = {
  name: "WGPUBindGroupLayoutDescriptor",
  size: 32,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    label: {
      offset: 8,
      kind: "Pointer",
    },
    entryCount: {
      offset: 16,
      kind: "ULong",
    },
    entries: {
      offset: 24,
      kind: "Pointer",
    },
  },
} as const;

export const WGPUColorTargetState = {
  name: "WGPUColorTargetState",
  size: 32,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    format: {
      offset: 8,
      kind: "Enum",
    },
    blend: {
      offset: 16,
      kind: "Pointer",
    },
    writeMask: {
      offset: 24,
      kind: "UInt",
    },
  },
} as const;

export const WGPUComputePipelineDescriptor = {
  name: "WGPUComputePipelineDescriptor",
  size: 64,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    label: {
      offset: 8,
      kind: "Pointer",
    },
    layout: {
      offset: 16,
      kind: "Pointer",
    },
    compute: {
      offset: 24,
      kind: "Record",
      size: 40,
      type: () => WGPUProgrammableStageDescriptor,
    },
  },
} as const;

export const WGPUDeviceDescriptor = {
  name: "WGPUDeviceDescriptor",
  size: 72,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    label: {
      offset: 8,
      kind: "Pointer",
    },
    requiredFeaturesCount: {
      offset: 16,
      kind: "ULong",
    },
    requiredFeatures: {
      offset: 24,
      kind: "Pointer",
    },
    requiredLimits: {
      offset: 32,
      kind: "Pointer",
    },
    defaultQueue: {
      offset: 40,
      kind: "Record",
      size: 16,
      type: () => WGPUQueueDescriptor,
    },
    deviceLostCallback: {
      offset: 56,
      kind: "Pointer",
    },
    deviceLostUserdata: {
      offset: 64,
      kind: "Pointer",
    },
  },
} as const;

export const WGPURenderPassDescriptor = {
  name: "WGPURenderPassDescriptor",
  size: 64,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    label: {
      offset: 8,
      kind: "Pointer",
    },
    colorAttachmentCount: {
      offset: 16,
      kind: "ULong",
    },
    colorAttachments: {
      offset: 24,
      kind: "Pointer",
    },
    depthStencilAttachment: {
      offset: 32,
      kind: "Pointer",
    },
    occlusionQuerySet: {
      offset: 40,
      kind: "Pointer",
    },
    timestampWriteCount: {
      offset: 48,
      kind: "ULong",
    },
    timestampWrites: {
      offset: 56,
      kind: "Pointer",
    },
  },
} as const;

export const WGPUVertexState = {
  name: "WGPUVertexState",
  size: 56,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    module: {
      offset: 8,
      kind: "Pointer",
    },
    entryPoint: {
      offset: 16,
      kind: "Pointer",
    },
    constantCount: {
      offset: 24,
      kind: "ULong",
    },
    constants: {
      offset: 32,
      kind: "Pointer",
    },
    bufferCount: {
      offset: 40,
      kind: "ULong",
    },
    buffers: {
      offset: 48,
      kind: "Pointer",
    },
  },
} as const;

export const WGPUFragmentState = {
  name: "WGPUFragmentState",
  size: 56,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    module: {
      offset: 8,
      kind: "Pointer",
    },
    entryPoint: {
      offset: 16,
      kind: "Pointer",
    },
    constantCount: {
      offset: 24,
      kind: "ULong",
    },
    constants: {
      offset: 32,
      kind: "Pointer",
    },
    targetCount: {
      offset: 40,
      kind: "ULong",
    },
    targets: {
      offset: 48,
      kind: "Pointer",
    },
  },
} as const;

export const WGPURenderPipelineDescriptor = {
  name: "WGPURenderPipelineDescriptor",
  size: 144,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    label: {
      offset: 8,
      kind: "Pointer",
    },
    layout: {
      offset: 16,
      kind: "Pointer",
    },
    vertex: {
      offset: 24,
      kind: "Record",
      size: 56,
      type: () => WGPUVertexState,
    },
    primitive: {
      offset: 80,
      kind: "Record",
      size: 24,
      type: () => WGPUPrimitiveState,
    },
    depthStencil: {
      offset: 104,
      kind: "Pointer",
    },
    multisample: {
      offset: 112,
      kind: "Record",
      size: 24,
      type: () => WGPUMultisampleState,
    },
    fragment: {
      offset: 136,
      kind: "Pointer",
    },
  },
} as const;

export const WGPUChainedStruct = {
  name: "WGPUChainedStruct",
  size: 16,
  fields: {
    next: {
      offset: 0,
      kind: "Pointer",
    },
    sType: {
      offset: 8,
      kind: "Enum",
    },
  },
} as const;

export const WGPUChainedStructOut = {
  name: "WGPUChainedStructOut",
  size: 16,
  fields: {
    next: {
      offset: 0,
      kind: "Pointer",
    },
    sType: {
      offset: 8,
      kind: "Enum",
    },
  },
} as const;

export const WGPUInstanceExtras = {
  name: "WGPUInstanceExtras",
  size: 40,
  fields: {
    chain: {
      offset: 0,
      kind: "Record",
      size: 16,
      type: () => WGPUChainedStruct,
    },
    backends: {
      offset: 16,
      kind: "UInt",
    },
    dx12ShaderCompiler: {
      offset: 20,
      kind: "Enum",
    },
    dxilPath: {
      offset: 24,
      kind: "Pointer",
    },
    dxcPath: {
      offset: 32,
      kind: "Pointer",
    },
  },
} as const;

export const WGPUDeviceExtras = {
  name: "WGPUDeviceExtras",
  size: 24,
  fields: {
    chain: {
      offset: 0,
      kind: "Record",
      size: 16,
      type: () => WGPUChainedStruct,
    },
    tracePath: {
      offset: 16,
      kind: "Pointer",
    },
  },
} as const;

export const WGPURequiredLimitsExtras = {
  name: "WGPURequiredLimitsExtras",
  size: 24,
  fields: {
    chain: {
      offset: 0,
      kind: "Record",
      size: 16,
      type: () => WGPUChainedStruct,
    },
    maxPushConstantSize: {
      offset: 16,
      kind: "UInt",
    },
  },
} as const;

export const WGPUSupportedLimitsExtras = {
  name: "WGPUSupportedLimitsExtras",
  size: 24,
  fields: {
    chain: {
      offset: 0,
      kind: "Record",
      size: 16,
      type: () => WGPUChainedStructOut,
    },
    maxPushConstantSize: {
      offset: 16,
      kind: "UInt",
    },
  },
} as const;

export const WGPUPushConstantRange = {
  name: "WGPUPushConstantRange",
  size: 12,
  fields: {
    stages: {
      offset: 0,
      kind: "UInt",
    },
    start: {
      offset: 4,
      kind: "UInt",
    },
    end: {
      offset: 8,
      kind: "UInt",
    },
  },
} as const;

export const WGPUPipelineLayoutExtras = {
  name: "WGPUPipelineLayoutExtras",
  size: 32,
  fields: {
    chain: {
      offset: 0,
      kind: "Record",
      size: 16,
      type: () => WGPUChainedStruct,
    },
    pushConstantRangeCount: {
      offset: 16,
      kind: "UInt",
    },
    pushConstantRanges: {
      offset: 24,
      kind: "Pointer",
    },
  },
} as const;

export const WGPUWrappedSubmissionIndex = {
  name: "WGPUWrappedSubmissionIndex",
  size: 16,
  fields: {
    queue: {
      offset: 0,
      kind: "Pointer",
    },
    submissionIndex: {
      offset: 8,
      kind: "ULongLong",
    },
  },
} as const;

export const WGPUShaderDefine = {
  name: "WGPUShaderDefine",
  size: 16,
  fields: {
    name: {
      offset: 0,
      kind: "Pointer",
    },
    value: {
      offset: 8,
      kind: "Pointer",
    },
  },
} as const;

export const WGPUShaderModuleGLSLDescriptor = {
  name: "WGPUShaderModuleGLSLDescriptor",
  size: 48,
  fields: {
    chain: {
      offset: 0,
      kind: "Record",
      size: 16,
      type: () => WGPUChainedStruct,
    },
    stage: {
      offset: 16,
      kind: "Enum",
    },
    code: {
      offset: 24,
      kind: "Pointer",
    },
    defineCount: {
      offset: 32,
      kind: "UInt",
    },
    defines: {
      offset: 40,
      kind: "Pointer",
    },
  },
} as const;

export const WGPUStorageReport = {
  name: "WGPUStorageReport",
  size: 32,
  fields: {
    numOccupied: {
      offset: 0,
      kind: "ULong",
    },
    numVacant: {
      offset: 8,
      kind: "ULong",
    },
    numError: {
      offset: 16,
      kind: "ULong",
    },
    elementSize: {
      offset: 24,
      kind: "ULong",
    },
  },
} as const;

export const WGPUHubReport = {
  name: "WGPUHubReport",
  size: 480,
  fields: {
    adapters: {
      offset: 0,
      kind: "Record",
      size: 32,
      type: () => WGPUStorageReport,
    },
    devices: {
      offset: 32,
      kind: "Record",
      size: 32,
      type: () => WGPUStorageReport,
    },
    pipelineLayouts: {
      offset: 64,
      kind: "Record",
      size: 32,
      type: () => WGPUStorageReport,
    },
    shaderModules: {
      offset: 96,
      kind: "Record",
      size: 32,
      type: () => WGPUStorageReport,
    },
    bindGroupLayouts: {
      offset: 128,
      kind: "Record",
      size: 32,
      type: () => WGPUStorageReport,
    },
    bindGroups: {
      offset: 160,
      kind: "Record",
      size: 32,
      type: () => WGPUStorageReport,
    },
    commandBuffers: {
      offset: 192,
      kind: "Record",
      size: 32,
      type: () => WGPUStorageReport,
    },
    renderBundles: {
      offset: 224,
      kind: "Record",
      size: 32,
      type: () => WGPUStorageReport,
    },
    renderPipelines: {
      offset: 256,
      kind: "Record",
      size: 32,
      type: () => WGPUStorageReport,
    },
    computePipelines: {
      offset: 288,
      kind: "Record",
      size: 32,
      type: () => WGPUStorageReport,
    },
    querySets: {
      offset: 320,
      kind: "Record",
      size: 32,
      type: () => WGPUStorageReport,
    },
    buffers: {
      offset: 352,
      kind: "Record",
      size: 32,
      type: () => WGPUStorageReport,
    },
    textures: {
      offset: 384,
      kind: "Record",
      size: 32,
      type: () => WGPUStorageReport,
    },
    textureViews: {
      offset: 416,
      kind: "Record",
      size: 32,
      type: () => WGPUStorageReport,
    },
    samplers: {
      offset: 448,
      kind: "Record",
      size: 32,
      type: () => WGPUStorageReport,
    },
  },
} as const;

export const WGPUGlobalReport = {
  name: "WGPUGlobalReport",
  size: 2440,
  fields: {
    surfaces: {
      offset: 0,
      kind: "Record",
      size: 32,
      type: () => WGPUStorageReport,
    },
    backendType: {
      offset: 32,
      kind: "Enum",
    },
    vulkan: {
      offset: 40,
      kind: "Record",
      size: 480,
      type: () => WGPUHubReport,
    },
    metal: {
      offset: 520,
      kind: "Record",
      size: 480,
      type: () => WGPUHubReport,
    },
    dx12: {
      offset: 1000,
      kind: "Record",
      size: 480,
      type: () => WGPUHubReport,
    },
    dx11: {
      offset: 1480,
      kind: "Record",
      size: 480,
      type: () => WGPUHubReport,
    },
    gl: {
      offset: 1960,
      kind: "Record",
      size: 480,
      type: () => WGPUHubReport,
    },
  },
} as const;

export const WGPUSurfaceCapabilities = {
  name: "WGPUSurfaceCapabilities",
  size: 48,
  fields: {
    formatCount: {
      offset: 0,
      kind: "ULong",
    },
    formats: {
      offset: 8,
      kind: "Pointer",
    },
    presentModeCount: {
      offset: 16,
      kind: "ULong",
    },
    presentModes: {
      offset: 24,
      kind: "Pointer",
    },
    alphaModeCount: {
      offset: 32,
      kind: "ULong",
    },
    alphaModes: {
      offset: 40,
      kind: "Pointer",
    },
  },
} as const;

export const WGPUSwapChainDescriptorExtras = {
  name: "WGPUSwapChainDescriptorExtras",
  size: 40,
  fields: {
    chain: {
      offset: 0,
      kind: "Record",
      size: 16,
      type: () => WGPUChainedStruct,
    },
    alphaMode: {
      offset: 16,
      kind: "Enum",
    },
    viewFormatCount: {
      offset: 24,
      kind: "ULong",
    },
    viewFormats: {
      offset: 32,
      kind: "Pointer",
    },
  },
} as const;

export const WGPUInstanceEnumerateAdapterOptions = {
  name: "WGPUInstanceEnumerateAdapterOptions",
  size: 16,
  fields: {
    nextInChain: {
      offset: 0,
      kind: "Pointer",
    },
    backends: {
      offset: 8,
      kind: "UInt",
    },
  },
} as const;

