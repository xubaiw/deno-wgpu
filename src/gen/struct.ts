export const AdapterProperties = {
  name: "AdapterProperties",
  size: 64,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    vendorID: { offset: 8, kind: "UInt" },
    vendorName: { offset: 16, kind: "Pointer" },
    architecture: { offset: 24, kind: "Pointer" },
    deviceID: { offset: 32, kind: "UInt" },
    name: { offset: 40, kind: "Pointer" },
    driverDescription: { offset: 48, kind: "Pointer" },
    adapterType: { offset: 56, kind: "Enum" },
    backendType: { offset: 60, kind: "Enum" },
  },
} as const;
export const BindGroupEntry = {
  name: "BindGroupEntry",
  size: 56,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    binding: { offset: 8, kind: "UInt" },
    buffer: { offset: 16, kind: "Pointer" },
    offset: { offset: 24, kind: "ULongLong" },
    size: { offset: 32, kind: "ULongLong" },
    sampler: { offset: 40, kind: "Pointer" },
    textureView: { offset: 48, kind: "Pointer" },
  },
} as const;
export const BlendComponent = {
  name: "BlendComponent",
  size: 12,
  fields: {
    operation: { offset: 0, kind: "Enum" },
    srcFactor: { offset: 4, kind: "Enum" },
    dstFactor: { offset: 8, kind: "Enum" },
  },
} as const;
export const BufferBindingLayout = {
  name: "BufferBindingLayout",
  size: 24,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    type: { offset: 8, kind: "Enum" },
    hasDynamicOffset: { offset: 12, kind: "Bool" },
    minBindingSize: { offset: 16, kind: "ULongLong" },
  },
} as const;
export const BufferDescriptor = {
  name: "BufferDescriptor",
  size: 40,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    label: { offset: 8, kind: "Pointer" },
    usage: { offset: 16, kind: "UInt" },
    size: { offset: 24, kind: "ULongLong" },
    mappedAtCreation: { offset: 32, kind: "Bool" },
  },
} as const;
export const Color = {
  name: "Color",
  size: 32,
  fields: {
    r: { offset: 0, kind: "Double" },
    g: { offset: 8, kind: "Double" },
    b: { offset: 16, kind: "Double" },
    a: { offset: 24, kind: "Double" },
  },
} as const;
export const CommandBufferDescriptor = {
  name: "CommandBufferDescriptor",
  size: 16,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    label: { offset: 8, kind: "Pointer" },
  },
} as const;
export const CommandEncoderDescriptor = {
  name: "CommandEncoderDescriptor",
  size: 16,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    label: { offset: 8, kind: "Pointer" },
  },
} as const;
export const CompilationMessage = {
  name: "CompilationMessage",
  size: 80,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    message: { offset: 8, kind: "Pointer" },
    type: { offset: 16, kind: "Enum" },
    lineNum: { offset: 24, kind: "ULongLong" },
    linePos: { offset: 32, kind: "ULongLong" },
    offset: { offset: 40, kind: "ULongLong" },
    length: { offset: 48, kind: "ULongLong" },
    utf16LinePos: { offset: 56, kind: "ULongLong" },
    utf16Offset: { offset: 64, kind: "ULongLong" },
    utf16Length: { offset: 72, kind: "ULongLong" },
  },
} as const;
export const ComputePassTimestampWrite = {
  name: "ComputePassTimestampWrite",
  size: 16,
  fields: {
    querySet: { offset: 0, kind: "Pointer" },
    queryIndex: { offset: 8, kind: "UInt" },
    location: { offset: 12, kind: "Enum" },
  },
} as const;
export const ConstantEntry = {
  name: "ConstantEntry",
  size: 24,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    key: { offset: 8, kind: "Pointer" },
    value: { offset: 16, kind: "Double" },
  },
} as const;
export const Extent3D = {
  name: "Extent3D",
  size: 12,
  fields: {
    width: { offset: 0, kind: "UInt" },
    height: { offset: 4, kind: "UInt" },
    depthOrArrayLayers: { offset: 8, kind: "UInt" },
  },
} as const;
export const InstanceDescriptor = {
  name: "InstanceDescriptor",
  size: 8,
  fields: { nextInChain: { offset: 0, kind: "Pointer" } },
} as const;
export const Limits = {
  name: "Limits",
  size: 144,
  fields: {
    maxTextureDimension1D: { offset: 0, kind: "UInt" },
    maxTextureDimension2D: { offset: 4, kind: "UInt" },
    maxTextureDimension3D: { offset: 8, kind: "UInt" },
    maxTextureArrayLayers: { offset: 12, kind: "UInt" },
    maxBindGroups: { offset: 16, kind: "UInt" },
    maxBindingsPerBindGroup: { offset: 20, kind: "UInt" },
    maxDynamicUniformBuffersPerPipelineLayout: { offset: 24, kind: "UInt" },
    maxDynamicStorageBuffersPerPipelineLayout: { offset: 28, kind: "UInt" },
    maxSampledTexturesPerShaderStage: { offset: 32, kind: "UInt" },
    maxSamplersPerShaderStage: { offset: 36, kind: "UInt" },
    maxStorageBuffersPerShaderStage: { offset: 40, kind: "UInt" },
    maxStorageTexturesPerShaderStage: { offset: 44, kind: "UInt" },
    maxUniformBuffersPerShaderStage: { offset: 48, kind: "UInt" },
    maxUniformBufferBindingSize: { offset: 56, kind: "ULongLong" },
    maxStorageBufferBindingSize: { offset: 64, kind: "ULongLong" },
    minUniformBufferOffsetAlignment: { offset: 72, kind: "UInt" },
    minStorageBufferOffsetAlignment: { offset: 76, kind: "UInt" },
    maxVertexBuffers: { offset: 80, kind: "UInt" },
    maxBufferSize: { offset: 88, kind: "ULongLong" },
    maxVertexAttributes: { offset: 96, kind: "UInt" },
    maxVertexBufferArrayStride: { offset: 100, kind: "UInt" },
    maxInterStageShaderComponents: { offset: 104, kind: "UInt" },
    maxInterStageShaderVariables: { offset: 108, kind: "UInt" },
    maxColorAttachments: { offset: 112, kind: "UInt" },
    maxColorAttachmentBytesPerSample: { offset: 116, kind: "UInt" },
    maxComputeWorkgroupStorageSize: { offset: 120, kind: "UInt" },
    maxComputeInvocationsPerWorkgroup: { offset: 124, kind: "UInt" },
    maxComputeWorkgroupSizeX: { offset: 128, kind: "UInt" },
    maxComputeWorkgroupSizeY: { offset: 132, kind: "UInt" },
    maxComputeWorkgroupSizeZ: { offset: 136, kind: "UInt" },
    maxComputeWorkgroupsPerDimension: { offset: 140, kind: "UInt" },
  },
} as const;
export const MultisampleState = {
  name: "MultisampleState",
  size: 24,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    count: { offset: 8, kind: "UInt" },
    mask: { offset: 12, kind: "UInt" },
    alphaToCoverageEnabled: { offset: 16, kind: "Bool" },
  },
} as const;
export const Origin3D = {
  name: "Origin3D",
  size: 12,
  fields: {
    x: { offset: 0, kind: "UInt" },
    y: { offset: 4, kind: "UInt" },
    z: { offset: 8, kind: "UInt" },
  },
} as const;
export const PipelineLayoutDescriptor = {
  name: "PipelineLayoutDescriptor",
  size: 32,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    label: { offset: 8, kind: "Pointer" },
    bindGroupLayoutCount: { offset: 16, kind: "ULong" },
    bindGroupLayouts: { offset: 24, kind: "Pointer" },
  },
} as const;
export const PrimitiveDepthClipControl = {
  name: "PrimitiveDepthClipControl",
  size: 24,
  fields: {
    chain: { offset: 0, kind: "Record", size: 16, type: () => ChainedStruct },
    unclippedDepth: { offset: 16, kind: "Bool" },
  },
} as const;
export const PrimitiveState = {
  name: "PrimitiveState",
  size: 24,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    topology: { offset: 8, kind: "Enum" },
    stripIndexFormat: { offset: 12, kind: "Enum" },
    frontFace: { offset: 16, kind: "Enum" },
    cullMode: { offset: 20, kind: "Enum" },
  },
} as const;
export const QuerySetDescriptor = {
  name: "QuerySetDescriptor",
  size: 40,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    label: { offset: 8, kind: "Pointer" },
    type: { offset: 16, kind: "Enum" },
    count: { offset: 20, kind: "UInt" },
    pipelineStatistics: { offset: 24, kind: "Pointer" },
    pipelineStatisticsCount: { offset: 32, kind: "ULong" },
  },
} as const;
export const QueueDescriptor = {
  name: "QueueDescriptor",
  size: 16,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    label: { offset: 8, kind: "Pointer" },
  },
} as const;
export const RenderBundleDescriptor = {
  name: "RenderBundleDescriptor",
  size: 16,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    label: { offset: 8, kind: "Pointer" },
  },
} as const;
export const RenderBundleEncoderDescriptor = {
  name: "RenderBundleEncoderDescriptor",
  size: 48,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    label: { offset: 8, kind: "Pointer" },
    colorFormatsCount: { offset: 16, kind: "ULong" },
    colorFormats: { offset: 24, kind: "Pointer" },
    depthStencilFormat: { offset: 32, kind: "Enum" },
    sampleCount: { offset: 36, kind: "UInt" },
    depthReadOnly: { offset: 40, kind: "Bool" },
    stencilReadOnly: { offset: 41, kind: "Bool" },
  },
} as const;
export const RenderPassDepthStencilAttachment = {
  name: "RenderPassDepthStencilAttachment",
  size: 40,
  fields: {
    view: { offset: 0, kind: "Pointer" },
    depthLoadOp: { offset: 8, kind: "Enum" },
    depthStoreOp: { offset: 12, kind: "Enum" },
    depthClearValue: { offset: 16, kind: "Float" },
    depthReadOnly: { offset: 20, kind: "Bool" },
    stencilLoadOp: { offset: 24, kind: "Enum" },
    stencilStoreOp: { offset: 28, kind: "Enum" },
    stencilClearValue: { offset: 32, kind: "UInt" },
    stencilReadOnly: { offset: 36, kind: "Bool" },
  },
} as const;
export const RenderPassDescriptorMaxDrawCount = {
  name: "RenderPassDescriptorMaxDrawCount",
  size: 24,
  fields: {
    chain: { offset: 0, kind: "Record", size: 16, type: () => ChainedStruct },
    maxDrawCount: { offset: 16, kind: "ULongLong" },
  },
} as const;
export const RenderPassTimestampWrite = {
  name: "RenderPassTimestampWrite",
  size: 16,
  fields: {
    querySet: { offset: 0, kind: "Pointer" },
    queryIndex: { offset: 8, kind: "UInt" },
    location: { offset: 12, kind: "Enum" },
  },
} as const;
export const RequestAdapterOptions = {
  name: "RequestAdapterOptions",
  size: 32,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    compatibleSurface: { offset: 8, kind: "Pointer" },
    powerPreference: { offset: 16, kind: "Enum" },
    backendType: { offset: 20, kind: "Enum" },
    forceFallbackAdapter: { offset: 24, kind: "Bool" },
  },
} as const;
export const SamplerBindingLayout = {
  name: "SamplerBindingLayout",
  size: 16,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    type: { offset: 8, kind: "Enum" },
  },
} as const;
export const SamplerDescriptor = {
  name: "SamplerDescriptor",
  size: 56,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    label: { offset: 8, kind: "Pointer" },
    addressModeU: { offset: 16, kind: "Enum" },
    addressModeV: { offset: 20, kind: "Enum" },
    addressModeW: { offset: 24, kind: "Enum" },
    magFilter: { offset: 28, kind: "Enum" },
    minFilter: { offset: 32, kind: "Enum" },
    mipmapFilter: { offset: 36, kind: "Enum" },
    lodMinClamp: { offset: 40, kind: "Float" },
    lodMaxClamp: { offset: 44, kind: "Float" },
    compare: { offset: 48, kind: "Enum" },
    maxAnisotropy: { offset: 52, kind: "UShort" },
  },
} as const;
export const ShaderModuleCompilationHint = {
  name: "ShaderModuleCompilationHint",
  size: 24,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    entryPoint: { offset: 8, kind: "Pointer" },
    layout: { offset: 16, kind: "Pointer" },
  },
} as const;
export const ShaderModuleSPIRVDescriptor = {
  name: "ShaderModuleSPIRVDescriptor",
  size: 32,
  fields: {
    chain: { offset: 0, kind: "Record", size: 16, type: () => ChainedStruct },
    codeSize: { offset: 16, kind: "UInt" },
    code: { offset: 24, kind: "Pointer" },
  },
} as const;
export const ShaderModuleWGSLDescriptor = {
  name: "ShaderModuleWGSLDescriptor",
  size: 24,
  fields: {
    chain: { offset: 0, kind: "Record", size: 16, type: () => ChainedStruct },
    code: { offset: 16, kind: "Pointer" },
  },
} as const;
export const StencilFaceState = {
  name: "StencilFaceState",
  size: 16,
  fields: {
    compare: { offset: 0, kind: "Enum" },
    failOp: { offset: 4, kind: "Enum" },
    depthFailOp: { offset: 8, kind: "Enum" },
    passOp: { offset: 12, kind: "Enum" },
  },
} as const;
export const StorageTextureBindingLayout = {
  name: "StorageTextureBindingLayout",
  size: 24,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    access: { offset: 8, kind: "Enum" },
    format: { offset: 12, kind: "Enum" },
    viewDimension: { offset: 16, kind: "Enum" },
  },
} as const;
export const SurfaceDescriptor = {
  name: "SurfaceDescriptor",
  size: 16,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    label: { offset: 8, kind: "Pointer" },
  },
} as const;
export const SurfaceDescriptorFromAndroidNativeWindow = {
  name: "SurfaceDescriptorFromAndroidNativeWindow",
  size: 24,
  fields: {
    chain: { offset: 0, kind: "Record", size: 16, type: () => ChainedStruct },
    window: { offset: 16, kind: "Pointer" },
  },
} as const;
export const SurfaceDescriptorFromCanvasHTMLSelector = {
  name: "SurfaceDescriptorFromCanvasHTMLSelector",
  size: 24,
  fields: {
    chain: { offset: 0, kind: "Record", size: 16, type: () => ChainedStruct },
    selector: { offset: 16, kind: "Pointer" },
  },
} as const;
export const SurfaceDescriptorFromMetalLayer = {
  name: "SurfaceDescriptorFromMetalLayer",
  size: 24,
  fields: {
    chain: { offset: 0, kind: "Record", size: 16, type: () => ChainedStruct },
    layer: { offset: 16, kind: "Pointer" },
  },
} as const;
export const SurfaceDescriptorFromWaylandSurface = {
  name: "SurfaceDescriptorFromWaylandSurface",
  size: 32,
  fields: {
    chain: { offset: 0, kind: "Record", size: 16, type: () => ChainedStruct },
    display: { offset: 16, kind: "Pointer" },
    surface: { offset: 24, kind: "Pointer" },
  },
} as const;
export const SurfaceDescriptorFromWindowsHWND = {
  name: "SurfaceDescriptorFromWindowsHWND",
  size: 32,
  fields: {
    chain: { offset: 0, kind: "Record", size: 16, type: () => ChainedStruct },
    hinstance: { offset: 16, kind: "Pointer" },
    hwnd: { offset: 24, kind: "Pointer" },
  },
} as const;
export const SurfaceDescriptorFromXcbWindow = {
  name: "SurfaceDescriptorFromXcbWindow",
  size: 32,
  fields: {
    chain: { offset: 0, kind: "Record", size: 16, type: () => ChainedStruct },
    connection: { offset: 16, kind: "Pointer" },
    window: { offset: 24, kind: "UInt" },
  },
} as const;
export const SurfaceDescriptorFromXlibWindow = {
  name: "SurfaceDescriptorFromXlibWindow",
  size: 32,
  fields: {
    chain: { offset: 0, kind: "Record", size: 16, type: () => ChainedStruct },
    display: { offset: 16, kind: "Pointer" },
    window: { offset: 24, kind: "UInt" },
  },
} as const;
export const SwapChainDescriptor = {
  name: "SwapChainDescriptor",
  size: 40,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    label: { offset: 8, kind: "Pointer" },
    usage: { offset: 16, kind: "UInt" },
    format: { offset: 20, kind: "Enum" },
    width: { offset: 24, kind: "UInt" },
    height: { offset: 28, kind: "UInt" },
    presentMode: { offset: 32, kind: "Enum" },
  },
} as const;
export const TextureBindingLayout = {
  name: "TextureBindingLayout",
  size: 24,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    sampleType: { offset: 8, kind: "Enum" },
    viewDimension: { offset: 12, kind: "Enum" },
    multisampled: { offset: 16, kind: "Bool" },
  },
} as const;
export const TextureDataLayout = {
  name: "TextureDataLayout",
  size: 24,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    offset: { offset: 8, kind: "ULongLong" },
    bytesPerRow: { offset: 16, kind: "UInt" },
    rowsPerImage: { offset: 20, kind: "UInt" },
  },
} as const;
export const TextureViewDescriptor = {
  name: "TextureViewDescriptor",
  size: 48,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    label: { offset: 8, kind: "Pointer" },
    format: { offset: 16, kind: "Enum" },
    dimension: { offset: 20, kind: "Enum" },
    baseMipLevel: { offset: 24, kind: "UInt" },
    mipLevelCount: { offset: 28, kind: "UInt" },
    baseArrayLayer: { offset: 32, kind: "UInt" },
    arrayLayerCount: { offset: 36, kind: "UInt" },
    aspect: { offset: 40, kind: "Enum" },
  },
} as const;
export const VertexAttribute = {
  name: "VertexAttribute",
  size: 24,
  fields: {
    format: { offset: 0, kind: "Enum" },
    offset: { offset: 8, kind: "ULongLong" },
    shaderLocation: { offset: 16, kind: "UInt" },
  },
} as const;
export const BindGroupDescriptor = {
  name: "BindGroupDescriptor",
  size: 40,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    label: { offset: 8, kind: "Pointer" },
    layout: { offset: 16, kind: "Pointer" },
    entryCount: { offset: 24, kind: "ULong" },
    entries: { offset: 32, kind: "Pointer" },
  },
} as const;
export const BindGroupLayoutEntry = {
  name: "BindGroupLayoutEntry",
  size: 104,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    binding: { offset: 8, kind: "UInt" },
    visibility: { offset: 12, kind: "UInt" },
    buffer: {
      offset: 16,
      kind: "Record",
      size: 24,
      type: () => BufferBindingLayout,
    },
    sampler: {
      offset: 40,
      kind: "Record",
      size: 16,
      type: () => SamplerBindingLayout,
    },
    texture: {
      offset: 56,
      kind: "Record",
      size: 24,
      type: () => TextureBindingLayout,
    },
    storageTexture: {
      offset: 80,
      kind: "Record",
      size: 24,
      type: () => StorageTextureBindingLayout,
    },
  },
} as const;
export const BlendState = {
  name: "BlendState",
  size: 24,
  fields: {
    color: { offset: 0, kind: "Record", size: 12, type: () => BlendComponent },
    alpha: { offset: 12, kind: "Record", size: 12, type: () => BlendComponent },
  },
} as const;
export const CompilationInfo = {
  name: "CompilationInfo",
  size: 24,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    messageCount: { offset: 8, kind: "ULong" },
    messages: { offset: 16, kind: "Pointer" },
  },
} as const;
export const ComputePassDescriptor = {
  name: "ComputePassDescriptor",
  size: 32,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    label: { offset: 8, kind: "Pointer" },
    timestampWriteCount: { offset: 16, kind: "ULong" },
    timestampWrites: { offset: 24, kind: "Pointer" },
  },
} as const;
export const DepthStencilState = {
  name: "DepthStencilState",
  size: 72,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    format: { offset: 8, kind: "Enum" },
    depthWriteEnabled: { offset: 12, kind: "Bool" },
    depthCompare: { offset: 16, kind: "Enum" },
    stencilFront: {
      offset: 20,
      kind: "Record",
      size: 16,
      type: () => StencilFaceState,
    },
    stencilBack: {
      offset: 36,
      kind: "Record",
      size: 16,
      type: () => StencilFaceState,
    },
    stencilReadMask: { offset: 52, kind: "UInt" },
    stencilWriteMask: { offset: 56, kind: "UInt" },
    depthBias: { offset: 60, kind: "Int" },
    depthBiasSlopeScale: { offset: 64, kind: "Float" },
    depthBiasClamp: { offset: 68, kind: "Float" },
  },
} as const;
export const ImageCopyBuffer = {
  name: "ImageCopyBuffer",
  size: 40,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    layout: {
      offset: 8,
      kind: "Record",
      size: 24,
      type: () => TextureDataLayout,
    },
    buffer: { offset: 32, kind: "Pointer" },
  },
} as const;
export const ImageCopyTexture = {
  name: "ImageCopyTexture",
  size: 40,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    texture: { offset: 8, kind: "Pointer" },
    mipLevel: { offset: 16, kind: "UInt" },
    origin: { offset: 20, kind: "Record", size: 12, type: () => Origin3D },
    aspect: { offset: 32, kind: "Enum" },
  },
} as const;
export const ProgrammableStageDescriptor = {
  name: "ProgrammableStageDescriptor",
  size: 40,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    module: { offset: 8, kind: "Pointer" },
    entryPoint: { offset: 16, kind: "Pointer" },
    constantCount: { offset: 24, kind: "ULong" },
    constants: { offset: 32, kind: "Pointer" },
  },
} as const;
export const RenderPassColorAttachment = {
  name: "RenderPassColorAttachment",
  size: 56,
  fields: {
    view: { offset: 0, kind: "Pointer" },
    resolveTarget: { offset: 8, kind: "Pointer" },
    loadOp: { offset: 16, kind: "Enum" },
    storeOp: { offset: 20, kind: "Enum" },
    clearValue: { offset: 24, kind: "Record", size: 32, type: () => Color },
  },
} as const;
export const RequiredLimits = {
  name: "RequiredLimits",
  size: 152,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    limits: { offset: 8, kind: "Record", size: 144, type: () => Limits },
  },
} as const;
export const ShaderModuleDescriptor = {
  name: "ShaderModuleDescriptor",
  size: 32,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    label: { offset: 8, kind: "Pointer" },
    hintCount: { offset: 16, kind: "ULong" },
    hints: { offset: 24, kind: "Pointer" },
  },
} as const;
export const SupportedLimits = {
  name: "SupportedLimits",
  size: 152,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    limits: { offset: 8, kind: "Record", size: 144, type: () => Limits },
  },
} as const;
export const TextureDescriptor = {
  name: "TextureDescriptor",
  size: 64,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    label: { offset: 8, kind: "Pointer" },
    usage: { offset: 16, kind: "UInt" },
    dimension: { offset: 20, kind: "Enum" },
    size: { offset: 24, kind: "Record", size: 12, type: () => Extent3D },
    format: { offset: 36, kind: "Enum" },
    mipLevelCount: { offset: 40, kind: "UInt" },
    sampleCount: { offset: 44, kind: "UInt" },
    viewFormatCount: { offset: 48, kind: "ULong" },
    viewFormats: { offset: 56, kind: "Pointer" },
  },
} as const;
export const VertexBufferLayout = {
  name: "VertexBufferLayout",
  size: 32,
  fields: {
    arrayStride: { offset: 0, kind: "ULongLong" },
    stepMode: { offset: 8, kind: "Enum" },
    attributeCount: { offset: 16, kind: "ULong" },
    attributes: { offset: 24, kind: "Pointer" },
  },
} as const;
export const BindGroupLayoutDescriptor = {
  name: "BindGroupLayoutDescriptor",
  size: 32,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    label: { offset: 8, kind: "Pointer" },
    entryCount: { offset: 16, kind: "ULong" },
    entries: { offset: 24, kind: "Pointer" },
  },
} as const;
export const ColorTargetState = {
  name: "ColorTargetState",
  size: 32,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    format: { offset: 8, kind: "Enum" },
    blend: { offset: 16, kind: "Pointer" },
    writeMask: { offset: 24, kind: "UInt" },
  },
} as const;
export const ComputePipelineDescriptor = {
  name: "ComputePipelineDescriptor",
  size: 64,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    label: { offset: 8, kind: "Pointer" },
    layout: { offset: 16, kind: "Pointer" },
    compute: {
      offset: 24,
      kind: "Record",
      size: 40,
      type: () => ProgrammableStageDescriptor,
    },
  },
} as const;
export const DeviceDescriptor = {
  name: "DeviceDescriptor",
  size: 72,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    label: { offset: 8, kind: "Pointer" },
    requiredFeaturesCount: { offset: 16, kind: "ULong" },
    requiredFeatures: { offset: 24, kind: "Pointer" },
    requiredLimits: { offset: 32, kind: "Pointer" },
    defaultQueue: {
      offset: 40,
      kind: "Record",
      size: 16,
      type: () => QueueDescriptor,
    },
    deviceLostCallback: { offset: 56, kind: "Pointer" },
    deviceLostUserdata: { offset: 64, kind: "Pointer" },
  },
} as const;
export const RenderPassDescriptor = {
  name: "RenderPassDescriptor",
  size: 64,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    label: { offset: 8, kind: "Pointer" },
    colorAttachmentCount: { offset: 16, kind: "ULong" },
    colorAttachments: { offset: 24, kind: "Pointer" },
    depthStencilAttachment: { offset: 32, kind: "Pointer" },
    occlusionQuerySet: { offset: 40, kind: "Pointer" },
    timestampWriteCount: { offset: 48, kind: "ULong" },
    timestampWrites: { offset: 56, kind: "Pointer" },
  },
} as const;
export const VertexState = {
  name: "VertexState",
  size: 56,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    module: { offset: 8, kind: "Pointer" },
    entryPoint: { offset: 16, kind: "Pointer" },
    constantCount: { offset: 24, kind: "ULong" },
    constants: { offset: 32, kind: "Pointer" },
    bufferCount: { offset: 40, kind: "ULong" },
    buffers: { offset: 48, kind: "Pointer" },
  },
} as const;
export const FragmentState = {
  name: "FragmentState",
  size: 56,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    module: { offset: 8, kind: "Pointer" },
    entryPoint: { offset: 16, kind: "Pointer" },
    constantCount: { offset: 24, kind: "ULong" },
    constants: { offset: 32, kind: "Pointer" },
    targetCount: { offset: 40, kind: "ULong" },
    targets: { offset: 48, kind: "Pointer" },
  },
} as const;
export const RenderPipelineDescriptor = {
  name: "RenderPipelineDescriptor",
  size: 144,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    label: { offset: 8, kind: "Pointer" },
    layout: { offset: 16, kind: "Pointer" },
    vertex: { offset: 24, kind: "Record", size: 56, type: () => VertexState },
    primitive: {
      offset: 80,
      kind: "Record",
      size: 24,
      type: () => PrimitiveState,
    },
    depthStencil: { offset: 104, kind: "Pointer" },
    multisample: {
      offset: 112,
      kind: "Record",
      size: 24,
      type: () => MultisampleState,
    },
    fragment: { offset: 136, kind: "Pointer" },
  },
} as const;
export const ChainedStruct = {
  name: "ChainedStruct",
  size: 16,
  fields: {
    next: { offset: 0, kind: "Pointer" },
    sType: { offset: 8, kind: "Enum" },
  },
} as const;
export const ChainedStructOut = {
  name: "ChainedStructOut",
  size: 16,
  fields: {
    next: { offset: 0, kind: "Pointer" },
    sType: { offset: 8, kind: "Enum" },
  },
} as const;
export const InstanceExtras = {
  name: "InstanceExtras",
  size: 40,
  fields: {
    chain: { offset: 0, kind: "Record", size: 16, type: () => ChainedStruct },
    backends: { offset: 16, kind: "UInt" },
    dx12ShaderCompiler: { offset: 20, kind: "Enum" },
    dxilPath: { offset: 24, kind: "Pointer" },
    dxcPath: { offset: 32, kind: "Pointer" },
  },
} as const;
export const DeviceExtras = {
  name: "DeviceExtras",
  size: 24,
  fields: {
    chain: { offset: 0, kind: "Record", size: 16, type: () => ChainedStruct },
    tracePath: { offset: 16, kind: "Pointer" },
  },
} as const;
export const RequiredLimitsExtras = {
  name: "RequiredLimitsExtras",
  size: 24,
  fields: {
    chain: { offset: 0, kind: "Record", size: 16, type: () => ChainedStruct },
    maxPushConstantSize: { offset: 16, kind: "UInt" },
  },
} as const;
export const SupportedLimitsExtras = {
  name: "SupportedLimitsExtras",
  size: 24,
  fields: {
    chain: {
      offset: 0,
      kind: "Record",
      size: 16,
      type: () => ChainedStructOut,
    },
    maxPushConstantSize: { offset: 16, kind: "UInt" },
  },
} as const;
export const PushConstantRange = {
  name: "PushConstantRange",
  size: 12,
  fields: {
    stages: { offset: 0, kind: "UInt" },
    start: { offset: 4, kind: "UInt" },
    end: { offset: 8, kind: "UInt" },
  },
} as const;
export const PipelineLayoutExtras = {
  name: "PipelineLayoutExtras",
  size: 32,
  fields: {
    chain: { offset: 0, kind: "Record", size: 16, type: () => ChainedStruct },
    pushConstantRangeCount: { offset: 16, kind: "UInt" },
    pushConstantRanges: { offset: 24, kind: "Pointer" },
  },
} as const;
export const WrappedSubmissionIndex = {
  name: "WrappedSubmissionIndex",
  size: 16,
  fields: {
    queue: { offset: 0, kind: "Pointer" },
    submissionIndex: { offset: 8, kind: "ULongLong" },
  },
} as const;
export const ShaderDefine = {
  name: "ShaderDefine",
  size: 16,
  fields: {
    name: { offset: 0, kind: "Pointer" },
    value: { offset: 8, kind: "Pointer" },
  },
} as const;
export const ShaderModuleGLSLDescriptor = {
  name: "ShaderModuleGLSLDescriptor",
  size: 48,
  fields: {
    chain: { offset: 0, kind: "Record", size: 16, type: () => ChainedStruct },
    stage: { offset: 16, kind: "Enum" },
    code: { offset: 24, kind: "Pointer" },
    defineCount: { offset: 32, kind: "UInt" },
    defines: { offset: 40, kind: "Pointer" },
  },
} as const;
export const StorageReport = {
  name: "StorageReport",
  size: 32,
  fields: {
    numOccupied: { offset: 0, kind: "ULong" },
    numVacant: { offset: 8, kind: "ULong" },
    numError: { offset: 16, kind: "ULong" },
    elementSize: { offset: 24, kind: "ULong" },
  },
} as const;
export const HubReport = {
  name: "HubReport",
  size: 480,
  fields: {
    adapters: {
      offset: 0,
      kind: "Record",
      size: 32,
      type: () => StorageReport,
    },
    devices: {
      offset: 32,
      kind: "Record",
      size: 32,
      type: () => StorageReport,
    },
    pipelineLayouts: {
      offset: 64,
      kind: "Record",
      size: 32,
      type: () => StorageReport,
    },
    shaderModules: {
      offset: 96,
      kind: "Record",
      size: 32,
      type: () => StorageReport,
    },
    bindGroupLayouts: {
      offset: 128,
      kind: "Record",
      size: 32,
      type: () => StorageReport,
    },
    bindGroups: {
      offset: 160,
      kind: "Record",
      size: 32,
      type: () => StorageReport,
    },
    commandBuffers: {
      offset: 192,
      kind: "Record",
      size: 32,
      type: () => StorageReport,
    },
    renderBundles: {
      offset: 224,
      kind: "Record",
      size: 32,
      type: () => StorageReport,
    },
    renderPipelines: {
      offset: 256,
      kind: "Record",
      size: 32,
      type: () => StorageReport,
    },
    computePipelines: {
      offset: 288,
      kind: "Record",
      size: 32,
      type: () => StorageReport,
    },
    querySets: {
      offset: 320,
      kind: "Record",
      size: 32,
      type: () => StorageReport,
    },
    buffers: {
      offset: 352,
      kind: "Record",
      size: 32,
      type: () => StorageReport,
    },
    textures: {
      offset: 384,
      kind: "Record",
      size: 32,
      type: () => StorageReport,
    },
    textureViews: {
      offset: 416,
      kind: "Record",
      size: 32,
      type: () => StorageReport,
    },
    samplers: {
      offset: 448,
      kind: "Record",
      size: 32,
      type: () => StorageReport,
    },
  },
} as const;
export const GlobalReport = {
  name: "GlobalReport",
  size: 2440,
  fields: {
    surfaces: {
      offset: 0,
      kind: "Record",
      size: 32,
      type: () => StorageReport,
    },
    backendType: { offset: 32, kind: "Enum" },
    vulkan: { offset: 40, kind: "Record", size: 480, type: () => HubReport },
    metal: { offset: 520, kind: "Record", size: 480, type: () => HubReport },
    dx12: { offset: 1000, kind: "Record", size: 480, type: () => HubReport },
    dx11: { offset: 1480, kind: "Record", size: 480, type: () => HubReport },
    gl: { offset: 1960, kind: "Record", size: 480, type: () => HubReport },
  },
} as const;
export const SurfaceCapabilities = {
  name: "SurfaceCapabilities",
  size: 48,
  fields: {
    formatCount: { offset: 0, kind: "ULong" },
    formats: { offset: 8, kind: "Pointer" },
    presentModeCount: { offset: 16, kind: "ULong" },
    presentModes: { offset: 24, kind: "Pointer" },
    alphaModeCount: { offset: 32, kind: "ULong" },
    alphaModes: { offset: 40, kind: "Pointer" },
  },
} as const;
export const SwapChainDescriptorExtras = {
  name: "SwapChainDescriptorExtras",
  size: 40,
  fields: {
    chain: { offset: 0, kind: "Record", size: 16, type: () => ChainedStruct },
    alphaMode: { offset: 16, kind: "Enum" },
    viewFormatCount: { offset: 24, kind: "ULong" },
    viewFormats: { offset: 32, kind: "Pointer" },
  },
} as const;
export const InstanceEnumerateAdapterOptions = {
  name: "InstanceEnumerateAdapterOptions",
  size: 16,
  fields: {
    nextInChain: { offset: 0, kind: "Pointer" },
    backends: { offset: 8, kind: "UInt" },
  },
} as const;
