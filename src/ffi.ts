import { prepare } from "./prepare.ts";

const libPath = await prepare();

export const WGPUAdapterType_DiscreteGPU = 0;
export const WGPUAdapterType_IntegratedGPU = 1;
export const WGPUAdapterType_CPU = 2;
export const WGPUAdapterType_Unknown = 3;
export const WGPUAdapterType_Force32 = 2147483647;
export const WGPUAddressMode_Repeat = 0;
export const WGPUAddressMode_MirrorRepeat = 1;
export const WGPUAddressMode_ClampToEdge = 2;
export const WGPUAddressMode_Force32 = 2147483647;
export const WGPUBackendType_Undefined = 0;
export const WGPUBackendType_Null = 1;
export const WGPUBackendType_WebGPU = 2;
export const WGPUBackendType_D3D11 = 3;
export const WGPUBackendType_D3D12 = 4;
export const WGPUBackendType_Metal = 5;
export const WGPUBackendType_Vulkan = 6;
export const WGPUBackendType_OpenGL = 7;
export const WGPUBackendType_OpenGLES = 8;
export const WGPUBackendType_Force32 = 2147483647;
export const WGPUBlendFactor_Zero = 0;
export const WGPUBlendFactor_One = 1;
export const WGPUBlendFactor_Src = 2;
export const WGPUBlendFactor_OneMinusSrc = 3;
export const WGPUBlendFactor_SrcAlpha = 4;
export const WGPUBlendFactor_OneMinusSrcAlpha = 5;
export const WGPUBlendFactor_Dst = 6;
export const WGPUBlendFactor_OneMinusDst = 7;
export const WGPUBlendFactor_DstAlpha = 8;
export const WGPUBlendFactor_OneMinusDstAlpha = 9;
export const WGPUBlendFactor_SrcAlphaSaturated = 10;
export const WGPUBlendFactor_Constant = 11;
export const WGPUBlendFactor_OneMinusConstant = 12;
export const WGPUBlendFactor_Force32 = 2147483647;
export const WGPUBlendOperation_Add = 0;
export const WGPUBlendOperation_Subtract = 1;
export const WGPUBlendOperation_ReverseSubtract = 2;
export const WGPUBlendOperation_Min = 3;
export const WGPUBlendOperation_Max = 4;
export const WGPUBlendOperation_Force32 = 2147483647;
export const WGPUBufferBindingType_Undefined = 0;
export const WGPUBufferBindingType_Uniform = 1;
export const WGPUBufferBindingType_Storage = 2;
export const WGPUBufferBindingType_ReadOnlyStorage = 3;
export const WGPUBufferBindingType_Force32 = 2147483647;
export const WGPUBufferMapAsyncStatus_Success = 0;
export const WGPUBufferMapAsyncStatus_ValidationError = 1;
export const WGPUBufferMapAsyncStatus_Unknown = 2;
export const WGPUBufferMapAsyncStatus_DeviceLost = 3;
export const WGPUBufferMapAsyncStatus_DestroyedBeforeCallback = 4;
export const WGPUBufferMapAsyncStatus_UnmappedBeforeCallback = 5;
export const WGPUBufferMapAsyncStatus_MappingAlreadyPending = 6;
export const WGPUBufferMapAsyncStatus_OffsetOutOfRange = 7;
export const WGPUBufferMapAsyncStatus_SizeOutOfRange = 8;
export const WGPUBufferMapAsyncStatus_Force32 = 2147483647;
export const WGPUBufferMapState_Unmapped = 0;
export const WGPUBufferMapState_Pending = 1;
export const WGPUBufferMapState_Mapped = 2;
export const WGPUBufferMapState_Force32 = 2147483647;
export const WGPUCompareFunction_Undefined = 0;
export const WGPUCompareFunction_Never = 1;
export const WGPUCompareFunction_Less = 2;
export const WGPUCompareFunction_LessEqual = 3;
export const WGPUCompareFunction_Greater = 4;
export const WGPUCompareFunction_GreaterEqual = 5;
export const WGPUCompareFunction_Equal = 6;
export const WGPUCompareFunction_NotEqual = 7;
export const WGPUCompareFunction_Always = 8;
export const WGPUCompareFunction_Force32 = 2147483647;
export const WGPUCompilationInfoRequestStatus_Success = 0;
export const WGPUCompilationInfoRequestStatus_Error = 1;
export const WGPUCompilationInfoRequestStatus_DeviceLost = 2;
export const WGPUCompilationInfoRequestStatus_Unknown = 3;
export const WGPUCompilationInfoRequestStatus_Force32 = 2147483647;
export const WGPUCompilationMessageType_Error = 0;
export const WGPUCompilationMessageType_Warning = 1;
export const WGPUCompilationMessageType_Info = 2;
export const WGPUCompilationMessageType_Force32 = 2147483647;
export const WGPUComputePassTimestampLocation_Beginning = 0;
export const WGPUComputePassTimestampLocation_End = 1;
export const WGPUComputePassTimestampLocation_Force32 = 2147483647;
export const WGPUCreatePipelineAsyncStatus_Success = 0;
export const WGPUCreatePipelineAsyncStatus_ValidationError = 1;
export const WGPUCreatePipelineAsyncStatus_InternalError = 2;
export const WGPUCreatePipelineAsyncStatus_DeviceLost = 3;
export const WGPUCreatePipelineAsyncStatus_DeviceDestroyed = 4;
export const WGPUCreatePipelineAsyncStatus_Unknown = 5;
export const WGPUCreatePipelineAsyncStatus_Force32 = 2147483647;
export const WGPUCullMode_None = 0;
export const WGPUCullMode_Front = 1;
export const WGPUCullMode_Back = 2;
export const WGPUCullMode_Force32 = 2147483647;
export const WGPUDeviceLostReason_Undefined = 0;
export const WGPUDeviceLostReason_Destroyed = 1;
export const WGPUDeviceLostReason_Force32 = 2147483647;
export const WGPUErrorFilter_Validation = 0;
export const WGPUErrorFilter_OutOfMemory = 1;
export const WGPUErrorFilter_Internal = 2;
export const WGPUErrorFilter_Force32 = 2147483647;
export const WGPUErrorType_NoError = 0;
export const WGPUErrorType_Validation = 1;
export const WGPUErrorType_OutOfMemory = 2;
export const WGPUErrorType_Internal = 3;
export const WGPUErrorType_Unknown = 4;
export const WGPUErrorType_DeviceLost = 5;
export const WGPUErrorType_Force32 = 2147483647;
export const WGPUFeatureName_Undefined = 0;
export const WGPUFeatureName_DepthClipControl = 1;
export const WGPUFeatureName_Depth32FloatStencil8 = 2;
export const WGPUFeatureName_TimestampQuery = 3;
export const WGPUFeatureName_PipelineStatisticsQuery = 4;
export const WGPUFeatureName_TextureCompressionBC = 5;
export const WGPUFeatureName_TextureCompressionETC2 = 6;
export const WGPUFeatureName_TextureCompressionASTC = 7;
export const WGPUFeatureName_IndirectFirstInstance = 8;
export const WGPUFeatureName_ShaderF16 = 9;
export const WGPUFeatureName_RG11B10UfloatRenderable = 10;
export const WGPUFeatureName_BGRA8UnormStorage = 11;
export const WGPUFeatureName_Float32Filterable = 12;
export const WGPUFeatureName_Force32 = 2147483647;
export const WGPUFilterMode_Nearest = 0;
export const WGPUFilterMode_Linear = 1;
export const WGPUFilterMode_Force32 = 2147483647;
export const WGPUFrontFace_CCW = 0;
export const WGPUFrontFace_CW = 1;
export const WGPUFrontFace_Force32 = 2147483647;
export const WGPUIndexFormat_Undefined = 0;
export const WGPUIndexFormat_Uint16 = 1;
export const WGPUIndexFormat_Uint32 = 2;
export const WGPUIndexFormat_Force32 = 2147483647;
export const WGPULoadOp_Undefined = 0;
export const WGPULoadOp_Clear = 1;
export const WGPULoadOp_Load = 2;
export const WGPULoadOp_Force32 = 2147483647;
export const WGPUMipmapFilterMode_Nearest = 0;
export const WGPUMipmapFilterMode_Linear = 1;
export const WGPUMipmapFilterMode_Force32 = 2147483647;
export const WGPUPipelineStatisticName_VertexShaderInvocations = 0;
export const WGPUPipelineStatisticName_ClipperInvocations = 1;
export const WGPUPipelineStatisticName_ClipperPrimitivesOut = 2;
export const WGPUPipelineStatisticName_FragmentShaderInvocations = 3;
export const WGPUPipelineStatisticName_ComputeShaderInvocations = 4;
export const WGPUPipelineStatisticName_Force32 = 2147483647;
export const WGPUPowerPreference_Undefined = 0;
export const WGPUPowerPreference_LowPower = 1;
export const WGPUPowerPreference_HighPerformance = 2;
export const WGPUPowerPreference_Force32 = 2147483647;
export const WGPUPresentMode_Immediate = 0;
export const WGPUPresentMode_Mailbox = 1;
export const WGPUPresentMode_Fifo = 2;
export const WGPUPresentMode_Force32 = 2147483647;
export const WGPUPrimitiveTopology_PointList = 0;
export const WGPUPrimitiveTopology_LineList = 1;
export const WGPUPrimitiveTopology_LineStrip = 2;
export const WGPUPrimitiveTopology_TriangleList = 3;
export const WGPUPrimitiveTopology_TriangleStrip = 4;
export const WGPUPrimitiveTopology_Force32 = 2147483647;
export const WGPUQueryType_Occlusion = 0;
export const WGPUQueryType_PipelineStatistics = 1;
export const WGPUQueryType_Timestamp = 2;
export const WGPUQueryType_Force32 = 2147483647;
export const WGPUQueueWorkDoneStatus_Success = 0;
export const WGPUQueueWorkDoneStatus_Error = 1;
export const WGPUQueueWorkDoneStatus_Unknown = 2;
export const WGPUQueueWorkDoneStatus_DeviceLost = 3;
export const WGPUQueueWorkDoneStatus_Force32 = 2147483647;
export const WGPURenderPassTimestampLocation_Beginning = 0;
export const WGPURenderPassTimestampLocation_End = 1;
export const WGPURenderPassTimestampLocation_Force32 = 2147483647;
export const WGPURequestAdapterStatus_Success = 0;
export const WGPURequestAdapterStatus_Unavailable = 1;
export const WGPURequestAdapterStatus_Error = 2;
export const WGPURequestAdapterStatus_Unknown = 3;
export const WGPURequestAdapterStatus_Force32 = 2147483647;
export const WGPURequestDeviceStatus_Success = 0;
export const WGPURequestDeviceStatus_Error = 1;
export const WGPURequestDeviceStatus_Unknown = 2;
export const WGPURequestDeviceStatus_Force32 = 2147483647;
export const WGPUSType_Invalid = 0;
export const WGPUSType_SurfaceDescriptorFromMetalLayer = 1;
export const WGPUSType_SurfaceDescriptorFromWindowsHWND = 2;
export const WGPUSType_SurfaceDescriptorFromXlibWindow = 3;
export const WGPUSType_SurfaceDescriptorFromCanvasHTMLSelector = 4;
export const WGPUSType_ShaderModuleSPIRVDescriptor = 5;
export const WGPUSType_ShaderModuleWGSLDescriptor = 6;
export const WGPUSType_PrimitiveDepthClipControl = 7;
export const WGPUSType_SurfaceDescriptorFromWaylandSurface = 8;
export const WGPUSType_SurfaceDescriptorFromAndroidNativeWindow = 9;
export const WGPUSType_SurfaceDescriptorFromXcbWindow = 10;
export const WGPUSType_RenderPassDescriptorMaxDrawCount = 15;
export const WGPUSType_Force32 = 2147483647;
export const WGPUSamplerBindingType_Undefined = 0;
export const WGPUSamplerBindingType_Filtering = 1;
export const WGPUSamplerBindingType_NonFiltering = 2;
export const WGPUSamplerBindingType_Comparison = 3;
export const WGPUSamplerBindingType_Force32 = 2147483647;
export const WGPUStencilOperation_Keep = 0;
export const WGPUStencilOperation_Zero = 1;
export const WGPUStencilOperation_Replace = 2;
export const WGPUStencilOperation_Invert = 3;
export const WGPUStencilOperation_IncrementClamp = 4;
export const WGPUStencilOperation_DecrementClamp = 5;
export const WGPUStencilOperation_IncrementWrap = 6;
export const WGPUStencilOperation_DecrementWrap = 7;
export const WGPUStencilOperation_Force32 = 2147483647;
export const WGPUStorageTextureAccess_Undefined = 0;
export const WGPUStorageTextureAccess_WriteOnly = 1;
export const WGPUStorageTextureAccess_Force32 = 2147483647;
export const WGPUStoreOp_Undefined = 0;
export const WGPUStoreOp_Store = 1;
export const WGPUStoreOp_Discard = 2;
export const WGPUStoreOp_Force32 = 2147483647;
export const WGPUTextureAspect_All = 0;
export const WGPUTextureAspect_StencilOnly = 1;
export const WGPUTextureAspect_DepthOnly = 2;
export const WGPUTextureAspect_Force32 = 2147483647;
export const WGPUTextureDimension_1D = 0;
export const WGPUTextureDimension_2D = 1;
export const WGPUTextureDimension_3D = 2;
export const WGPUTextureDimension_Force32 = 2147483647;
export const WGPUTextureFormat_Undefined = 0;
export const WGPUTextureFormat_R8Unorm = 1;
export const WGPUTextureFormat_R8Snorm = 2;
export const WGPUTextureFormat_R8Uint = 3;
export const WGPUTextureFormat_R8Sint = 4;
export const WGPUTextureFormat_R16Uint = 5;
export const WGPUTextureFormat_R16Sint = 6;
export const WGPUTextureFormat_R16Float = 7;
export const WGPUTextureFormat_RG8Unorm = 8;
export const WGPUTextureFormat_RG8Snorm = 9;
export const WGPUTextureFormat_RG8Uint = 10;
export const WGPUTextureFormat_RG8Sint = 11;
export const WGPUTextureFormat_R32Float = 12;
export const WGPUTextureFormat_R32Uint = 13;
export const WGPUTextureFormat_R32Sint = 14;
export const WGPUTextureFormat_RG16Uint = 15;
export const WGPUTextureFormat_RG16Sint = 16;
export const WGPUTextureFormat_RG16Float = 17;
export const WGPUTextureFormat_RGBA8Unorm = 18;
export const WGPUTextureFormat_RGBA8UnormSrgb = 19;
export const WGPUTextureFormat_RGBA8Snorm = 20;
export const WGPUTextureFormat_RGBA8Uint = 21;
export const WGPUTextureFormat_RGBA8Sint = 22;
export const WGPUTextureFormat_BGRA8Unorm = 23;
export const WGPUTextureFormat_BGRA8UnormSrgb = 24;
export const WGPUTextureFormat_RGB10A2Unorm = 25;
export const WGPUTextureFormat_RG11B10Ufloat = 26;
export const WGPUTextureFormat_RGB9E5Ufloat = 27;
export const WGPUTextureFormat_RG32Float = 28;
export const WGPUTextureFormat_RG32Uint = 29;
export const WGPUTextureFormat_RG32Sint = 30;
export const WGPUTextureFormat_RGBA16Uint = 31;
export const WGPUTextureFormat_RGBA16Sint = 32;
export const WGPUTextureFormat_RGBA16Float = 33;
export const WGPUTextureFormat_RGBA32Float = 34;
export const WGPUTextureFormat_RGBA32Uint = 35;
export const WGPUTextureFormat_RGBA32Sint = 36;
export const WGPUTextureFormat_Stencil8 = 37;
export const WGPUTextureFormat_Depth16Unorm = 38;
export const WGPUTextureFormat_Depth24Plus = 39;
export const WGPUTextureFormat_Depth24PlusStencil8 = 40;
export const WGPUTextureFormat_Depth32Float = 41;
export const WGPUTextureFormat_Depth32FloatStencil8 = 42;
export const WGPUTextureFormat_BC1RGBAUnorm = 43;
export const WGPUTextureFormat_BC1RGBAUnormSrgb = 44;
export const WGPUTextureFormat_BC2RGBAUnorm = 45;
export const WGPUTextureFormat_BC2RGBAUnormSrgb = 46;
export const WGPUTextureFormat_BC3RGBAUnorm = 47;
export const WGPUTextureFormat_BC3RGBAUnormSrgb = 48;
export const WGPUTextureFormat_BC4RUnorm = 49;
export const WGPUTextureFormat_BC4RSnorm = 50;
export const WGPUTextureFormat_BC5RGUnorm = 51;
export const WGPUTextureFormat_BC5RGSnorm = 52;
export const WGPUTextureFormat_BC6HRGBUfloat = 53;
export const WGPUTextureFormat_BC6HRGBFloat = 54;
export const WGPUTextureFormat_BC7RGBAUnorm = 55;
export const WGPUTextureFormat_BC7RGBAUnormSrgb = 56;
export const WGPUTextureFormat_ETC2RGB8Unorm = 57;
export const WGPUTextureFormat_ETC2RGB8UnormSrgb = 58;
export const WGPUTextureFormat_ETC2RGB8A1Unorm = 59;
export const WGPUTextureFormat_ETC2RGB8A1UnormSrgb = 60;
export const WGPUTextureFormat_ETC2RGBA8Unorm = 61;
export const WGPUTextureFormat_ETC2RGBA8UnormSrgb = 62;
export const WGPUTextureFormat_EACR11Unorm = 63;
export const WGPUTextureFormat_EACR11Snorm = 64;
export const WGPUTextureFormat_EACRG11Unorm = 65;
export const WGPUTextureFormat_EACRG11Snorm = 66;
export const WGPUTextureFormat_ASTC4x4Unorm = 67;
export const WGPUTextureFormat_ASTC4x4UnormSrgb = 68;
export const WGPUTextureFormat_ASTC5x4Unorm = 69;
export const WGPUTextureFormat_ASTC5x4UnormSrgb = 70;
export const WGPUTextureFormat_ASTC5x5Unorm = 71;
export const WGPUTextureFormat_ASTC5x5UnormSrgb = 72;
export const WGPUTextureFormat_ASTC6x5Unorm = 73;
export const WGPUTextureFormat_ASTC6x5UnormSrgb = 74;
export const WGPUTextureFormat_ASTC6x6Unorm = 75;
export const WGPUTextureFormat_ASTC6x6UnormSrgb = 76;
export const WGPUTextureFormat_ASTC8x5Unorm = 77;
export const WGPUTextureFormat_ASTC8x5UnormSrgb = 78;
export const WGPUTextureFormat_ASTC8x6Unorm = 79;
export const WGPUTextureFormat_ASTC8x6UnormSrgb = 80;
export const WGPUTextureFormat_ASTC8x8Unorm = 81;
export const WGPUTextureFormat_ASTC8x8UnormSrgb = 82;
export const WGPUTextureFormat_ASTC10x5Unorm = 83;
export const WGPUTextureFormat_ASTC10x5UnormSrgb = 84;
export const WGPUTextureFormat_ASTC10x6Unorm = 85;
export const WGPUTextureFormat_ASTC10x6UnormSrgb = 86;
export const WGPUTextureFormat_ASTC10x8Unorm = 87;
export const WGPUTextureFormat_ASTC10x8UnormSrgb = 88;
export const WGPUTextureFormat_ASTC10x10Unorm = 89;
export const WGPUTextureFormat_ASTC10x10UnormSrgb = 90;
export const WGPUTextureFormat_ASTC12x10Unorm = 91;
export const WGPUTextureFormat_ASTC12x10UnormSrgb = 92;
export const WGPUTextureFormat_ASTC12x12Unorm = 93;
export const WGPUTextureFormat_ASTC12x12UnormSrgb = 94;
export const WGPUTextureFormat_Force32 = 2147483647;
export const WGPUTextureSampleType_Undefined = 0;
export const WGPUTextureSampleType_Float = 1;
export const WGPUTextureSampleType_UnfilterableFloat = 2;
export const WGPUTextureSampleType_Depth = 3;
export const WGPUTextureSampleType_Sint = 4;
export const WGPUTextureSampleType_Uint = 5;
export const WGPUTextureSampleType_Force32 = 2147483647;
export const WGPUTextureViewDimension_Undefined = 0;
export const WGPUTextureViewDimension_1D = 1;
export const WGPUTextureViewDimension_2D = 2;
export const WGPUTextureViewDimension_2DArray = 3;
export const WGPUTextureViewDimension_Cube = 4;
export const WGPUTextureViewDimension_CubeArray = 5;
export const WGPUTextureViewDimension_3D = 6;
export const WGPUTextureViewDimension_Force32 = 2147483647;
export const WGPUVertexFormat_Undefined = 0;
export const WGPUVertexFormat_Uint8x2 = 1;
export const WGPUVertexFormat_Uint8x4 = 2;
export const WGPUVertexFormat_Sint8x2 = 3;
export const WGPUVertexFormat_Sint8x4 = 4;
export const WGPUVertexFormat_Unorm8x2 = 5;
export const WGPUVertexFormat_Unorm8x4 = 6;
export const WGPUVertexFormat_Snorm8x2 = 7;
export const WGPUVertexFormat_Snorm8x4 = 8;
export const WGPUVertexFormat_Uint16x2 = 9;
export const WGPUVertexFormat_Uint16x4 = 10;
export const WGPUVertexFormat_Sint16x2 = 11;
export const WGPUVertexFormat_Sint16x4 = 12;
export const WGPUVertexFormat_Unorm16x2 = 13;
export const WGPUVertexFormat_Unorm16x4 = 14;
export const WGPUVertexFormat_Snorm16x2 = 15;
export const WGPUVertexFormat_Snorm16x4 = 16;
export const WGPUVertexFormat_Float16x2 = 17;
export const WGPUVertexFormat_Float16x4 = 18;
export const WGPUVertexFormat_Float32 = 19;
export const WGPUVertexFormat_Float32x2 = 20;
export const WGPUVertexFormat_Float32x3 = 21;
export const WGPUVertexFormat_Float32x4 = 22;
export const WGPUVertexFormat_Uint32 = 23;
export const WGPUVertexFormat_Uint32x2 = 24;
export const WGPUVertexFormat_Uint32x3 = 25;
export const WGPUVertexFormat_Uint32x4 = 26;
export const WGPUVertexFormat_Sint32 = 27;
export const WGPUVertexFormat_Sint32x2 = 28;
export const WGPUVertexFormat_Sint32x3 = 29;
export const WGPUVertexFormat_Sint32x4 = 30;
export const WGPUVertexFormat_Force32 = 2147483647;
export const WGPUVertexStepMode_Vertex = 0;
export const WGPUVertexStepMode_Instance = 1;
export const WGPUVertexStepMode_VertexBufferNotUsed = 2;
export const WGPUVertexStepMode_Force32 = 2147483647;
export const WGPUBufferUsage_None = 0;
export const WGPUBufferUsage_MapRead = 1;
export const WGPUBufferUsage_MapWrite = 2;
export const WGPUBufferUsage_CopySrc = 4;
export const WGPUBufferUsage_CopyDst = 8;
export const WGPUBufferUsage_Index = 16;
export const WGPUBufferUsage_Vertex = 32;
export const WGPUBufferUsage_Uniform = 64;
export const WGPUBufferUsage_Storage = 128;
export const WGPUBufferUsage_Indirect = 256;
export const WGPUBufferUsage_QueryResolve = 512;
export const WGPUBufferUsage_Force32 = 2147483647;
export const WGPUColorWriteMask_None = 0;
export const WGPUColorWriteMask_Red = 1;
export const WGPUColorWriteMask_Green = 2;
export const WGPUColorWriteMask_Blue = 4;
export const WGPUColorWriteMask_Alpha = 8;
export const WGPUColorWriteMask_All = 15;
export const WGPUColorWriteMask_Force32 = 2147483647;
export const WGPUMapMode_None = 0;
export const WGPUMapMode_Read = 1;
export const WGPUMapMode_Write = 2;
export const WGPUMapMode_Force32 = 2147483647;
export const WGPUShaderStage_None = 0;
export const WGPUShaderStage_Vertex = 1;
export const WGPUShaderStage_Fragment = 2;
export const WGPUShaderStage_Compute = 4;
export const WGPUShaderStage_Force32 = 2147483647;
export const WGPUTextureUsage_None = 0;
export const WGPUTextureUsage_CopySrc = 1;
export const WGPUTextureUsage_CopyDst = 2;
export const WGPUTextureUsage_TextureBinding = 4;
export const WGPUTextureUsage_StorageBinding = 8;
export const WGPUTextureUsage_RenderAttachment = 16;
export const WGPUTextureUsage_Force32 = 2147483647;
export const WGPUSType_DeviceExtras = 1610612737;
export const WGPUSType_AdapterExtras = 1610612738;
export const WGPUSType_RequiredLimitsExtras = 1610612739;
export const WGPUSType_PipelineLayoutExtras = 1610612740;
export const WGPUSType_ShaderModuleGLSLDescriptor = 1610612741;
export const WGPUSType_SupportedLimitsExtras = 1610612739;
export const WGPUSType_InstanceExtras = 1610612742;
export const WGPUSType_SwapChainDescriptorExtras = 1610612743;
export const WGPUNativeSType_Force32 = 2147483647;
export const WGPUNativeFeature_PushConstants = 1610612737;
export const WGPUNativeFeature_TextureAdapterSpecificFormatFeatures = 1610612738;
export const WGPUNativeFeature_MultiDrawIndirect = 1610612739;
export const WGPUNativeFeature_MultiDrawIndirectCount = 1610612740;
export const WGPUNativeFeature_VertexWritableStorage = 1610612741;
export const WGPUNativeFeature_Force32 = 2147483647;
export const WGPULogLevel_Off = 0;
export const WGPULogLevel_Error = 1;
export const WGPULogLevel_Warn = 2;
export const WGPULogLevel_Info = 3;
export const WGPULogLevel_Debug = 4;
export const WGPULogLevel_Trace = 5;
export const WGPULogLevel_Force32 = 2147483647;
export const WGPUInstanceBackend_Vulkan = 2;
export const WGPUInstanceBackend_GL = 32;
export const WGPUInstanceBackend_Metal = 4;
export const WGPUInstanceBackend_DX12 = 8;
export const WGPUInstanceBackend_DX11 = 16;
export const WGPUInstanceBackend_BrowserWebGPU = 64;
export const WGPUInstanceBackend_Primary = 78;
export const WGPUInstanceBackend_Secondary = 48;
export const WGPUInstanceBackend_None = 0;
export const WGPUInstanceBackend_Force32 = 2147483647;
export const WGPUDx12Compiler_Undefined = 0;
export const WGPUDx12Compiler_Fxc = 1;
export const WGPUDx12Compiler_Dxc = 2;
export const WGPUDx12Compiler_Force32 = 2147483647;
export const WGPUCompositeAlphaMode_Auto = 0;
export const WGPUCompositeAlphaMode_Opaque = 1;
export const WGPUCompositeAlphaMode_PreMultiplied = 2;
export const WGPUCompositeAlphaMode_PostMultiplied = 3;
export const WGPUCompositeAlphaMode_Inherit = 4;
export const WGPUCompositeAlphaMode_Force32 = 2147483647;

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
