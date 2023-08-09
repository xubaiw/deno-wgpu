export enum AdapterType {
  AdapterType_DiscreteGPU = 0,
  AdapterType_IntegratedGPU = 1,
  AdapterType_CPU = 2,
  AdapterType_Unknown = 3,
  AdapterType_Force32 = 2147483647,
}

export enum AddressMode {
  AddressMode_Repeat = 0,
  AddressMode_MirrorRepeat = 1,
  AddressMode_ClampToEdge = 2,
  AddressMode_Force32 = 2147483647,
}

export enum BackendType {
  BackendType_Undefined = 0,
  BackendType_Null = 1,
  BackendType_WebGPU = 2,
  BackendType_D3D11 = 3,
  BackendType_D3D12 = 4,
  BackendType_Metal = 5,
  BackendType_Vulkan = 6,
  BackendType_OpenGL = 7,
  BackendType_OpenGLES = 8,
  BackendType_Force32 = 2147483647,
}

export enum BlendFactor {
  BlendFactor_Zero = 0,
  BlendFactor_One = 1,
  BlendFactor_Src = 2,
  BlendFactor_OneMinusSrc = 3,
  BlendFactor_SrcAlpha = 4,
  BlendFactor_OneMinusSrcAlpha = 5,
  BlendFactor_Dst = 6,
  BlendFactor_OneMinusDst = 7,
  BlendFactor_DstAlpha = 8,
  BlendFactor_OneMinusDstAlpha = 9,
  BlendFactor_SrcAlphaSaturated = 10,
  BlendFactor_Constant = 11,
  BlendFactor_OneMinusConstant = 12,
  BlendFactor_Force32 = 2147483647,
}

export enum BlendOperation {
  BlendOperation_Add = 0,
  BlendOperation_Subtract = 1,
  BlendOperation_ReverseSubtract = 2,
  BlendOperation_Min = 3,
  BlendOperation_Max = 4,
  BlendOperation_Force32 = 2147483647,
}

export enum BufferBindingType {
  BufferBindingType_Undefined = 0,
  BufferBindingType_Uniform = 1,
  BufferBindingType_Storage = 2,
  BufferBindingType_ReadOnlyStorage = 3,
  BufferBindingType_Force32 = 2147483647,
}

export enum BufferMapAsyncStatus {
  BufferMapAsyncStatus_Success = 0,
  BufferMapAsyncStatus_ValidationError = 1,
  BufferMapAsyncStatus_Unknown = 2,
  BufferMapAsyncStatus_DeviceLost = 3,
  BufferMapAsyncStatus_DestroyedBeforeCallback = 4,
  BufferMapAsyncStatus_UnmappedBeforeCallback = 5,
  BufferMapAsyncStatus_MappingAlreadyPending = 6,
  BufferMapAsyncStatus_OffsetOutOfRange = 7,
  BufferMapAsyncStatus_SizeOutOfRange = 8,
  BufferMapAsyncStatus_Force32 = 2147483647,
}

export enum BufferMapState {
  BufferMapState_Unmapped = 0,
  BufferMapState_Pending = 1,
  BufferMapState_Mapped = 2,
  BufferMapState_Force32 = 2147483647,
}

export enum CompareFunction {
  CompareFunction_Undefined = 0,
  CompareFunction_Never = 1,
  CompareFunction_Less = 2,
  CompareFunction_LessEqual = 3,
  CompareFunction_Greater = 4,
  CompareFunction_GreaterEqual = 5,
  CompareFunction_Equal = 6,
  CompareFunction_NotEqual = 7,
  CompareFunction_Always = 8,
  CompareFunction_Force32 = 2147483647,
}

export enum CompilationInfoRequestStatus {
  CompilationInfoRequestStatus_Success = 0,
  CompilationInfoRequestStatus_Error = 1,
  CompilationInfoRequestStatus_DeviceLost = 2,
  CompilationInfoRequestStatus_Unknown = 3,
  CompilationInfoRequestStatus_Force32 = 2147483647,
}

export enum CompilationMessageType {
  CompilationMessageType_Error = 0,
  CompilationMessageType_Warning = 1,
  CompilationMessageType_Info = 2,
  CompilationMessageType_Force32 = 2147483647,
}

export enum ComputePassTimestampLocation {
  ComputePassTimestampLocation_Beginning = 0,
  ComputePassTimestampLocation_End = 1,
  ComputePassTimestampLocation_Force32 = 2147483647,
}

export enum CreatePipelineAsyncStatus {
  CreatePipelineAsyncStatus_Success = 0,
  CreatePipelineAsyncStatus_ValidationError = 1,
  CreatePipelineAsyncStatus_InternalError = 2,
  CreatePipelineAsyncStatus_DeviceLost = 3,
  CreatePipelineAsyncStatus_DeviceDestroyed = 4,
  CreatePipelineAsyncStatus_Unknown = 5,
  CreatePipelineAsyncStatus_Force32 = 2147483647,
}

export enum CullMode {
  CullMode_None = 0,
  CullMode_Front = 1,
  CullMode_Back = 2,
  CullMode_Force32 = 2147483647,
}

export enum DeviceLostReason {
  DeviceLostReason_Undefined = 0,
  DeviceLostReason_Destroyed = 1,
  DeviceLostReason_Force32 = 2147483647,
}

export enum ErrorFilter {
  ErrorFilter_Validation = 0,
  ErrorFilter_OutOfMemory = 1,
  ErrorFilter_Internal = 2,
  ErrorFilter_Force32 = 2147483647,
}

export enum ErrorType {
  ErrorType_NoError = 0,
  ErrorType_Validation = 1,
  ErrorType_OutOfMemory = 2,
  ErrorType_Internal = 3,
  ErrorType_Unknown = 4,
  ErrorType_DeviceLost = 5,
  ErrorType_Force32 = 2147483647,
}

export enum FeatureName {
  FeatureName_Undefined = 0,
  FeatureName_DepthClipControl = 1,
  FeatureName_Depth32FloatStencil8 = 2,
  FeatureName_TimestampQuery = 3,
  FeatureName_PipelineStatisticsQuery = 4,
  FeatureName_TextureCompressionBC = 5,
  FeatureName_TextureCompressionETC2 = 6,
  FeatureName_TextureCompressionASTC = 7,
  FeatureName_IndirectFirstInstance = 8,
  FeatureName_ShaderF16 = 9,
  FeatureName_RG11B10UfloatRenderable = 10,
  FeatureName_BGRA8UnormStorage = 11,
  FeatureName_Float32Filterable = 12,
  FeatureName_Force32 = 2147483647,
}

export enum FilterMode {
  FilterMode_Nearest = 0,
  FilterMode_Linear = 1,
  FilterMode_Force32 = 2147483647,
}

export enum FrontFace {
  FrontFace_CCW = 0,
  FrontFace_CW = 1,
  FrontFace_Force32 = 2147483647,
}

export enum IndexFormat {
  IndexFormat_Undefined = 0,
  IndexFormat_Uint16 = 1,
  IndexFormat_Uint32 = 2,
  IndexFormat_Force32 = 2147483647,
}

export enum LoadOp {
  LoadOp_Undefined = 0,
  LoadOp_Clear = 1,
  LoadOp_Load = 2,
  LoadOp_Force32 = 2147483647,
}

export enum MipmapFilterMode {
  MipmapFilterMode_Nearest = 0,
  MipmapFilterMode_Linear = 1,
  MipmapFilterMode_Force32 = 2147483647,
}

export enum PipelineStatisticName {
  PipelineStatisticName_VertexShaderInvocations = 0,
  PipelineStatisticName_ClipperInvocations = 1,
  PipelineStatisticName_ClipperPrimitivesOut = 2,
  PipelineStatisticName_FragmentShaderInvocations = 3,
  PipelineStatisticName_ComputeShaderInvocations = 4,
  PipelineStatisticName_Force32 = 2147483647,
}

export enum PowerPreference {
  PowerPreference_Undefined = 0,
  PowerPreference_LowPower = 1,
  PowerPreference_HighPerformance = 2,
  PowerPreference_Force32 = 2147483647,
}

export enum PresentMode {
  PresentMode_Immediate = 0,
  PresentMode_Mailbox = 1,
  PresentMode_Fifo = 2,
  PresentMode_Force32 = 2147483647,
}

export enum PrimitiveTopology {
  PrimitiveTopology_PointList = 0,
  PrimitiveTopology_LineList = 1,
  PrimitiveTopology_LineStrip = 2,
  PrimitiveTopology_TriangleList = 3,
  PrimitiveTopology_TriangleStrip = 4,
  PrimitiveTopology_Force32 = 2147483647,
}

export enum QueryType {
  QueryType_Occlusion = 0,
  QueryType_PipelineStatistics = 1,
  QueryType_Timestamp = 2,
  QueryType_Force32 = 2147483647,
}

export enum QueueWorkDoneStatus {
  QueueWorkDoneStatus_Success = 0,
  QueueWorkDoneStatus_Error = 1,
  QueueWorkDoneStatus_Unknown = 2,
  QueueWorkDoneStatus_DeviceLost = 3,
  QueueWorkDoneStatus_Force32 = 2147483647,
}

export enum RenderPassTimestampLocation {
  RenderPassTimestampLocation_Beginning = 0,
  RenderPassTimestampLocation_End = 1,
  RenderPassTimestampLocation_Force32 = 2147483647,
}

export enum RequestAdapterStatus {
  RequestAdapterStatus_Success = 0,
  RequestAdapterStatus_Unavailable = 1,
  RequestAdapterStatus_Error = 2,
  RequestAdapterStatus_Unknown = 3,
  RequestAdapterStatus_Force32 = 2147483647,
}

export enum RequestDeviceStatus {
  RequestDeviceStatus_Success = 0,
  RequestDeviceStatus_Error = 1,
  RequestDeviceStatus_Unknown = 2,
  RequestDeviceStatus_Force32 = 2147483647,
}

export enum SType {
  SType_Invalid = 0,
  SType_SurfaceDescriptorFromMetalLayer = 1,
  SType_SurfaceDescriptorFromWindowsHWND = 2,
  SType_SurfaceDescriptorFromXlibWindow = 3,
  SType_SurfaceDescriptorFromCanvasHTMLSelector = 4,
  SType_ShaderModuleSPIRVDescriptor = 5,
  SType_ShaderModuleWGSLDescriptor = 6,
  SType_PrimitiveDepthClipControl = 7,
  SType_SurfaceDescriptorFromWaylandSurface = 8,
  SType_SurfaceDescriptorFromAndroidNativeWindow = 9,
  SType_SurfaceDescriptorFromXcbWindow = 10,
  SType_RenderPassDescriptorMaxDrawCount = 15,
  SType_Force32 = 2147483647,
}

export enum SamplerBindingType {
  SamplerBindingType_Undefined = 0,
  SamplerBindingType_Filtering = 1,
  SamplerBindingType_NonFiltering = 2,
  SamplerBindingType_Comparison = 3,
  SamplerBindingType_Force32 = 2147483647,
}

export enum StencilOperation {
  StencilOperation_Keep = 0,
  StencilOperation_Zero = 1,
  StencilOperation_Replace = 2,
  StencilOperation_Invert = 3,
  StencilOperation_IncrementClamp = 4,
  StencilOperation_DecrementClamp = 5,
  StencilOperation_IncrementWrap = 6,
  StencilOperation_DecrementWrap = 7,
  StencilOperation_Force32 = 2147483647,
}

export enum StorageTextureAccess {
  StorageTextureAccess_Undefined = 0,
  StorageTextureAccess_WriteOnly = 1,
  StorageTextureAccess_Force32 = 2147483647,
}

export enum StoreOp {
  StoreOp_Undefined = 0,
  StoreOp_Store = 1,
  StoreOp_Discard = 2,
  StoreOp_Force32 = 2147483647,
}

export enum TextureAspect {
  TextureAspect_All = 0,
  TextureAspect_StencilOnly = 1,
  TextureAspect_DepthOnly = 2,
  TextureAspect_Force32 = 2147483647,
}

export enum TextureDimension {
  TextureDimension_1D = 0,
  TextureDimension_2D = 1,
  TextureDimension_3D = 2,
  TextureDimension_Force32 = 2147483647,
}

export enum TextureFormat {
  TextureFormat_Undefined = 0,
  TextureFormat_R8Unorm = 1,
  TextureFormat_R8Snorm = 2,
  TextureFormat_R8Uint = 3,
  TextureFormat_R8Sint = 4,
  TextureFormat_R16Uint = 5,
  TextureFormat_R16Sint = 6,
  TextureFormat_R16Float = 7,
  TextureFormat_RG8Unorm = 8,
  TextureFormat_RG8Snorm = 9,
  TextureFormat_RG8Uint = 10,
  TextureFormat_RG8Sint = 11,
  TextureFormat_R32Float = 12,
  TextureFormat_R32Uint = 13,
  TextureFormat_R32Sint = 14,
  TextureFormat_RG16Uint = 15,
  TextureFormat_RG16Sint = 16,
  TextureFormat_RG16Float = 17,
  TextureFormat_RGBA8Unorm = 18,
  TextureFormat_RGBA8UnormSrgb = 19,
  TextureFormat_RGBA8Snorm = 20,
  TextureFormat_RGBA8Uint = 21,
  TextureFormat_RGBA8Sint = 22,
  TextureFormat_BGRA8Unorm = 23,
  TextureFormat_BGRA8UnormSrgb = 24,
  TextureFormat_RGB10A2Unorm = 25,
  TextureFormat_RG11B10Ufloat = 26,
  TextureFormat_RGB9E5Ufloat = 27,
  TextureFormat_RG32Float = 28,
  TextureFormat_RG32Uint = 29,
  TextureFormat_RG32Sint = 30,
  TextureFormat_RGBA16Uint = 31,
  TextureFormat_RGBA16Sint = 32,
  TextureFormat_RGBA16Float = 33,
  TextureFormat_RGBA32Float = 34,
  TextureFormat_RGBA32Uint = 35,
  TextureFormat_RGBA32Sint = 36,
  TextureFormat_Stencil8 = 37,
  TextureFormat_Depth16Unorm = 38,
  TextureFormat_Depth24Plus = 39,
  TextureFormat_Depth24PlusStencil8 = 40,
  TextureFormat_Depth32Float = 41,
  TextureFormat_Depth32FloatStencil8 = 42,
  TextureFormat_BC1RGBAUnorm = 43,
  TextureFormat_BC1RGBAUnormSrgb = 44,
  TextureFormat_BC2RGBAUnorm = 45,
  TextureFormat_BC2RGBAUnormSrgb = 46,
  TextureFormat_BC3RGBAUnorm = 47,
  TextureFormat_BC3RGBAUnormSrgb = 48,
  TextureFormat_BC4RUnorm = 49,
  TextureFormat_BC4RSnorm = 50,
  TextureFormat_BC5RGUnorm = 51,
  TextureFormat_BC5RGSnorm = 52,
  TextureFormat_BC6HRGBUfloat = 53,
  TextureFormat_BC6HRGBFloat = 54,
  TextureFormat_BC7RGBAUnorm = 55,
  TextureFormat_BC7RGBAUnormSrgb = 56,
  TextureFormat_ETC2RGB8Unorm = 57,
  TextureFormat_ETC2RGB8UnormSrgb = 58,
  TextureFormat_ETC2RGB8A1Unorm = 59,
  TextureFormat_ETC2RGB8A1UnormSrgb = 60,
  TextureFormat_ETC2RGBA8Unorm = 61,
  TextureFormat_ETC2RGBA8UnormSrgb = 62,
  TextureFormat_EACR11Unorm = 63,
  TextureFormat_EACR11Snorm = 64,
  TextureFormat_EACRG11Unorm = 65,
  TextureFormat_EACRG11Snorm = 66,
  TextureFormat_ASTC4x4Unorm = 67,
  TextureFormat_ASTC4x4UnormSrgb = 68,
  TextureFormat_ASTC5x4Unorm = 69,
  TextureFormat_ASTC5x4UnormSrgb = 70,
  TextureFormat_ASTC5x5Unorm = 71,
  TextureFormat_ASTC5x5UnormSrgb = 72,
  TextureFormat_ASTC6x5Unorm = 73,
  TextureFormat_ASTC6x5UnormSrgb = 74,
  TextureFormat_ASTC6x6Unorm = 75,
  TextureFormat_ASTC6x6UnormSrgb = 76,
  TextureFormat_ASTC8x5Unorm = 77,
  TextureFormat_ASTC8x5UnormSrgb = 78,
  TextureFormat_ASTC8x6Unorm = 79,
  TextureFormat_ASTC8x6UnormSrgb = 80,
  TextureFormat_ASTC8x8Unorm = 81,
  TextureFormat_ASTC8x8UnormSrgb = 82,
  TextureFormat_ASTC10x5Unorm = 83,
  TextureFormat_ASTC10x5UnormSrgb = 84,
  TextureFormat_ASTC10x6Unorm = 85,
  TextureFormat_ASTC10x6UnormSrgb = 86,
  TextureFormat_ASTC10x8Unorm = 87,
  TextureFormat_ASTC10x8UnormSrgb = 88,
  TextureFormat_ASTC10x10Unorm = 89,
  TextureFormat_ASTC10x10UnormSrgb = 90,
  TextureFormat_ASTC12x10Unorm = 91,
  TextureFormat_ASTC12x10UnormSrgb = 92,
  TextureFormat_ASTC12x12Unorm = 93,
  TextureFormat_ASTC12x12UnormSrgb = 94,
  TextureFormat_Force32 = 2147483647,
}

export enum TextureSampleType {
  TextureSampleType_Undefined = 0,
  TextureSampleType_Float = 1,
  TextureSampleType_UnfilterableFloat = 2,
  TextureSampleType_Depth = 3,
  TextureSampleType_Sint = 4,
  TextureSampleType_Uint = 5,
  TextureSampleType_Force32 = 2147483647,
}

export enum TextureViewDimension {
  TextureViewDimension_Undefined = 0,
  TextureViewDimension_1D = 1,
  TextureViewDimension_2D = 2,
  TextureViewDimension_2DArray = 3,
  TextureViewDimension_Cube = 4,
  TextureViewDimension_CubeArray = 5,
  TextureViewDimension_3D = 6,
  TextureViewDimension_Force32 = 2147483647,
}

export enum VertexFormat {
  VertexFormat_Undefined = 0,
  VertexFormat_Uint8x2 = 1,
  VertexFormat_Uint8x4 = 2,
  VertexFormat_Sint8x2 = 3,
  VertexFormat_Sint8x4 = 4,
  VertexFormat_Unorm8x2 = 5,
  VertexFormat_Unorm8x4 = 6,
  VertexFormat_Snorm8x2 = 7,
  VertexFormat_Snorm8x4 = 8,
  VertexFormat_Uint16x2 = 9,
  VertexFormat_Uint16x4 = 10,
  VertexFormat_Sint16x2 = 11,
  VertexFormat_Sint16x4 = 12,
  VertexFormat_Unorm16x2 = 13,
  VertexFormat_Unorm16x4 = 14,
  VertexFormat_Snorm16x2 = 15,
  VertexFormat_Snorm16x4 = 16,
  VertexFormat_Float16x2 = 17,
  VertexFormat_Float16x4 = 18,
  VertexFormat_Float32 = 19,
  VertexFormat_Float32x2 = 20,
  VertexFormat_Float32x3 = 21,
  VertexFormat_Float32x4 = 22,
  VertexFormat_Uint32 = 23,
  VertexFormat_Uint32x2 = 24,
  VertexFormat_Uint32x3 = 25,
  VertexFormat_Uint32x4 = 26,
  VertexFormat_Sint32 = 27,
  VertexFormat_Sint32x2 = 28,
  VertexFormat_Sint32x3 = 29,
  VertexFormat_Sint32x4 = 30,
  VertexFormat_Force32 = 2147483647,
}

export enum VertexStepMode {
  VertexStepMode_Vertex = 0,
  VertexStepMode_Instance = 1,
  VertexStepMode_VertexBufferNotUsed = 2,
  VertexStepMode_Force32 = 2147483647,
}

export enum BufferUsage {
  BufferUsage_None = 0,
  BufferUsage_MapRead = 1,
  BufferUsage_MapWrite = 2,
  BufferUsage_CopySrc = 4,
  BufferUsage_CopyDst = 8,
  BufferUsage_Index = 16,
  BufferUsage_Vertex = 32,
  BufferUsage_Uniform = 64,
  BufferUsage_Storage = 128,
  BufferUsage_Indirect = 256,
  BufferUsage_QueryResolve = 512,
  BufferUsage_Force32 = 2147483647,
}

export enum ColorWriteMask {
  ColorWriteMask_None = 0,
  ColorWriteMask_Red = 1,
  ColorWriteMask_Green = 2,
  ColorWriteMask_Blue = 4,
  ColorWriteMask_Alpha = 8,
  ColorWriteMask_All = 15,
  ColorWriteMask_Force32 = 2147483647,
}

export enum MapMode {
  MapMode_None = 0,
  MapMode_Read = 1,
  MapMode_Write = 2,
  MapMode_Force32 = 2147483647,
}

export enum ShaderStage {
  ShaderStage_None = 0,
  ShaderStage_Vertex = 1,
  ShaderStage_Fragment = 2,
  ShaderStage_Compute = 4,
  ShaderStage_Force32 = 2147483647,
}

export enum TextureUsage {
  TextureUsage_None = 0,
  TextureUsage_CopySrc = 1,
  TextureUsage_CopyDst = 2,
  TextureUsage_TextureBinding = 4,
  TextureUsage_StorageBinding = 8,
  TextureUsage_RenderAttachment = 16,
  TextureUsage_Force32 = 2147483647,
}

export enum NativeSType {
  SType_DeviceExtras = 1610612737,
  SType_AdapterExtras = 1610612738,
  SType_RequiredLimitsExtras = 1610612739,
  SType_PipelineLayoutExtras = 1610612740,
  SType_ShaderModuleGLSLDescriptor = 1610612741,
  SType_SupportedLimitsExtras = 1610612739,
  SType_InstanceExtras = 1610612742,
  SType_SwapChainDescriptorExtras = 1610612743,
  NativeSType_Force32 = 2147483647,
}

export enum NativeFeature {
  NativeFeature_PushConstants = 1610612737,
  NativeFeature_TextureAdapterSpecificFormatFeatures = 1610612738,
  NativeFeature_MultiDrawIndirect = 1610612739,
  NativeFeature_MultiDrawIndirectCount = 1610612740,
  NativeFeature_VertexWritableStorage = 1610612741,
  NativeFeature_Force32 = 2147483647,
}

export enum LogLevel {
  LogLevel_Off = 0,
  LogLevel_Error = 1,
  LogLevel_Warn = 2,
  LogLevel_Info = 3,
  LogLevel_Debug = 4,
  LogLevel_Trace = 5,
  LogLevel_Force32 = 2147483647,
}

export enum InstanceBackend {
  InstanceBackend_Vulkan = 2,
  InstanceBackend_GL = 32,
  InstanceBackend_Metal = 4,
  InstanceBackend_DX12 = 8,
  InstanceBackend_DX11 = 16,
  InstanceBackend_BrowserWebGPU = 64,
  InstanceBackend_Primary = 78,
  InstanceBackend_Secondary = 48,
  InstanceBackend_None = 0,
  InstanceBackend_Force32 = 2147483647,
}

export enum Dx12Compiler {
  Dx12Compiler_Undefined = 0,
  Dx12Compiler_Fxc = 1,
  Dx12Compiler_Dxc = 2,
  Dx12Compiler_Force32 = 2147483647,
}

export enum CompositeAlphaMode {
  CompositeAlphaMode_Auto = 0,
  CompositeAlphaMode_Opaque = 1,
  CompositeAlphaMode_PreMultiplied = 2,
  CompositeAlphaMode_PostMultiplied = 3,
  CompositeAlphaMode_Inherit = 4,
  CompositeAlphaMode_Force32 = 2147483647,
}
