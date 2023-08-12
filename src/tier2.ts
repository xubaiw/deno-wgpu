import * as U from "./util.ts";
import lib from "./tier1.ts";

export enum AdapterType {
  DiscreteGPU = 0,
  IntegratedGPU = 1,
  CPU = 2,
  Unknown = 3,
}
export enum AddressMode {
  Repeat = 0,
  MirrorRepeat = 1,
  ClampToEdge = 2,
}
export enum BackendType {
  Undefined = 0,
  Null = 1,
  WebGPU = 2,
  D3D11 = 3,
  D3D12 = 4,
  Metal = 5,
  Vulkan = 6,
  OpenGL = 7,
  OpenGLES = 8,
}
export enum BlendFactor {
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
}
export enum BlendOperation {
  Add = 0,
  Subtract = 1,
  ReverseSubtract = 2,
  Min = 3,
  Max = 4,
}
export enum BufferBindingType {
  Undefined = 0,
  Uniform = 1,
  Storage = 2,
  ReadOnlyStorage = 3,
}
export enum BufferMapAsyncStatus {
  Success = 0,
  ValidationError = 1,
  Unknown = 2,
  DeviceLost = 3,
  DestroyedBeforeCallback = 4,
  UnmappedBeforeCallback = 5,
  MappingAlreadyPending = 6,
  OffsetOutOfRange = 7,
  SizeOutOfRange = 8,
}
export enum BufferMapState {
  Unmapped = 0,
  Pending = 1,
  Mapped = 2,
}
export enum CompareFunction {
  Undefined = 0,
  Never = 1,
  Less = 2,
  LessEqual = 3,
  Greater = 4,
  GreaterEqual = 5,
  Equal = 6,
  NotEqual = 7,
  Always = 8,
}
export enum CompilationInfoRequestStatus {
  Success = 0,
  Error = 1,
  DeviceLost = 2,
  Unknown = 3,
}
export enum CompilationMessageType {
  Error = 0,
  Warning = 1,
  Info = 2,
}
export enum ComputePassTimestampLocation {
  Beginning = 0,
  End = 1,
}
export enum CreatePipelineAsyncStatus {
  Success = 0,
  ValidationError = 1,
  InternalError = 2,
  DeviceLost = 3,
  DeviceDestroyed = 4,
  Unknown = 5,
}
export enum CullMode {
  None = 0,
  Front = 1,
  Back = 2,
}
export enum DeviceLostReason {
  Undefined = 0,
  Destroyed = 1,
}
export enum ErrorFilter {
  Validation = 0,
  OutOfMemory = 1,
  Internal = 2,
}
export enum ErrorType {
  NoError = 0,
  Validation = 1,
  OutOfMemory = 2,
  Internal = 3,
  Unknown = 4,
  DeviceLost = 5,
}
export enum FeatureName {
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
  PushConstants = 1610612737,
  TextureAdapterSpecificFormatFeatures = 1610612738,
  MultiDrawIndirect = 1610612739,
  MultiDrawIndirectCount = 1610612740,
  VertexWritableStorage = 1610612741,
}
export enum FilterMode {
  Nearest = 0,
  Linear = 1,
}
export enum FrontFace {
  CCW = 0,
  CW = 1,
}
export enum IndexFormat {
  Undefined = 0,
  Uint16 = 1,
  Uint32 = 2,
}
export enum LoadOp {
  Undefined = 0,
  Clear = 1,
  Load = 2,
}
export enum MipmapFilterMode {
  Nearest = 0,
  Linear = 1,
}
export enum PipelineStatisticName {
  VertexShaderInvocations = 0,
  ClipperInvocations = 1,
  ClipperPrimitivesOut = 2,
  FragmentShaderInvocations = 3,
  ComputeShaderInvocations = 4,
}
export enum PowerPreference {
  Undefined = 0,
  LowPower = 1,
  HighPerformance = 2,
}
export enum PresentMode {
  Immediate = 0,
  Mailbox = 1,
  Fifo = 2,
}
export enum PrimitiveTopology {
  PointList = 0,
  LineList = 1,
  LineStrip = 2,
  TriangleList = 3,
  TriangleStrip = 4,
}
export enum QueryType {
  Occlusion = 0,
  PipelineStatistics = 1,
  Timestamp = 2,
}
export enum QueueWorkDoneStatus {
  Success = 0,
  Error = 1,
  Unknown = 2,
  DeviceLost = 3,
}
export enum RenderPassTimestampLocation {
  Beginning = 0,
  End = 1,
}
export enum RequestAdapterStatus {
  Success = 0,
  Unavailable = 1,
  Error = 2,
  Unknown = 3,
}
export enum RequestDeviceStatus {
  Success = 0,
  Error = 1,
  Unknown = 2,
}
export enum SType {
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
  DeviceExtras = 1610612737,
  AdapterExtras = 1610612738,
  RequiredLimitsExtras = 1610612739,
  PipelineLayoutExtras = 1610612740,
  ShaderModuleGLSLDescriptor = 1610612741,
  SupportedLimitsExtras = 1610612739,
  InstanceExtras = 1610612742,
  SwapChainDescriptorExtras = 1610612743,
}
export enum SamplerBindingType {
  Undefined = 0,
  Filtering = 1,
  NonFiltering = 2,
  Comparison = 3,
}
export enum StencilOperation {
  Keep = 0,
  Zero = 1,
  Replace = 2,
  Invert = 3,
  IncrementClamp = 4,
  DecrementClamp = 5,
  IncrementWrap = 6,
  DecrementWrap = 7,
}
export enum StorageTextureAccess {
  Undefined = 0,
  WriteOnly = 1,
}
export enum StoreOp {
  Undefined = 0,
  Store = 1,
  Discard = 2,
}
export enum TextureAspect {
  All = 0,
  StencilOnly = 1,
  DepthOnly = 2,
}
export enum TextureDimension {
  _1D = 0,
  _2D = 1,
  _3D = 2,
}
export enum TextureFormat {
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
}
export enum TextureSampleType {
  Undefined = 0,
  Float = 1,
  UnfilterableFloat = 2,
  Depth = 3,
  Sint = 4,
  Uint = 5,
}
export enum TextureViewDimension {
  Undefined = 0,
  _1D = 1,
  _2D = 2,
  _2DArray = 3,
  Cube = 4,
  CubeArray = 5,
  _3D = 6,
}
export enum VertexFormat {
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
}
export enum VertexStepMode {
  Vertex = 0,
  Instance = 1,
  VertexBufferNotUsed = 2,
}
export enum BufferUsage {
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
}
export enum ColorWriteMask {
  None = 0,
  Red = 1,
  Green = 2,
  Blue = 4,
  Alpha = 8,
  All = 15,
}
export enum MapMode {
  None = 0,
  Read = 1,
  Write = 2,
}
export enum ShaderStage {
  None = 0,
  Vertex = 1,
  Fragment = 2,
  Compute = 4,
}
export enum TextureUsage {
  None = 0,
  CopySrc = 1,
  CopyDst = 2,
  TextureBinding = 4,
  StorageBinding = 8,
  RenderAttachment = 16,
}
export enum LogLevel {
  Off = 0,
  Error = 1,
  Warn = 2,
  Info = 3,
  Debug = 4,
  Trace = 5,
}
export enum InstanceBackend {
  Vulkan = 2,
  GL = 32,
  Metal = 4,
  DX12 = 8,
  DX11 = 16,
  BrowserWebGPU = 64,
  Primary = 78,
  Secondary = 48,
  None = 0,
}
export enum Dx12Compiler {
  Undefined = 0,
  Fxc = 1,
  Dxc = 2,
}
export enum CompositeAlphaMode {
  Auto = 0,
  Opaque = 1,
  PreMultiplied = 2,
  PostMultiplied = 3,
  Inherit = 4,
}

export class AdapterProperties extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(64));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(64),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get vendorID(): number {
    return this.dataview.getUint32(8, U.LE);
  }

  set vendorID(value: number) {
    this.dataview.setUint32(8, value, U.LE);
  }

  get vendorName(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, U.LE));
  }

  set vendorName(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      16,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get architecture(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(24, U.LE));
  }

  set architecture(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      24,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get deviceID(): number {
    return this.dataview.getUint32(32, U.LE);
  }

  set deviceID(value: number) {
    this.dataview.setUint32(32, value, U.LE);
  }

  get name(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(40, U.LE));
  }

  set name(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      40,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get driverDescription(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(48, U.LE));
  }

  set driverDescription(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      48,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get adapterType(): AdapterType {
    return this.dataview.getUint32(56, U.LE) as AdapterType;
  }

  set adapterType(value: AdapterType | number) {
    this.dataview.setUint32(56, value, U.LE);
  }

  get backendType(): BackendType {
    return this.dataview.getUint32(60, U.LE) as BackendType;
  }

  set backendType(value: BackendType | number) {
    this.dataview.setUint32(60, value, U.LE);
  }

  static from() {
    // not implemented
  }
}

export class BindGroupEntry extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(56));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(56),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get binding(): number {
    return this.dataview.getUint32(8, U.LE);
  }

  set binding(value: number) {
    this.dataview.setUint32(8, value, U.LE);
  }

  get buffer(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, U.LE));
  }

  set buffer(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      16,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get offset(): bigint {
    return this.dataview.getBigUint64(24, U.LE);
  }

  set offset(value: bigint | number) {
    this.dataview.setBigUint64(24, BigInt(value), U.LE);
  }

  get size(): bigint {
    return this.dataview.getBigUint64(32, U.LE);
  }

  set size(value: bigint | number) {
    this.dataview.setBigUint64(32, BigInt(value), U.LE);
  }

  get sampler(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(40, U.LE));
  }

  set sampler(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      40,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get textureView(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(48, U.LE));
  }

  set textureView(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      48,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  static from() {
    // not implemented
  }
}

export class BlendComponent extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(12));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(12),
        );
      }
    }
  }

  get operation(): BlendOperation {
    return this.dataview.getUint32(0, U.LE) as BlendOperation;
  }

  set operation(value: BlendOperation | number) {
    this.dataview.setUint32(0, value, U.LE);
  }

  get srcFactor(): BlendFactor {
    return this.dataview.getUint32(4, U.LE) as BlendFactor;
  }

  set srcFactor(value: BlendFactor | number) {
    this.dataview.setUint32(4, value, U.LE);
  }

  get dstFactor(): BlendFactor {
    return this.dataview.getUint32(8, U.LE) as BlendFactor;
  }

  set dstFactor(value: BlendFactor | number) {
    this.dataview.setUint32(8, value, U.LE);
  }

  static from() {
    // not implemented
  }
}

export class BufferBindingLayout extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(24));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(24),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get type(): BufferBindingType {
    return this.dataview.getUint32(8, U.LE) as BufferBindingType;
  }

  set type(value: BufferBindingType | number) {
    this.dataview.setUint32(8, value, U.LE);
  }

  get hasDynamicOffset(): boolean {
    return this.dataview.getUint8(12) == 1;
  }

  set hasDynamicOffset(value: boolean | number | bigint) {
    this.dataview.setUint8(12, value ? 1 : 0);
  }

  get minBindingSize(): bigint {
    return this.dataview.getBigUint64(16, U.LE);
  }

  set minBindingSize(value: bigint | number) {
    this.dataview.setBigUint64(16, BigInt(value), U.LE);
  }

  static from() {
    // not implemented
  }
}

export class BufferDescriptor extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(40));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(40),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, U.LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      8,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get usage(): number {
    return this.dataview.getUint32(16, U.LE);
  }

  set usage(value: number) {
    this.dataview.setUint32(16, value, U.LE);
  }

  get size(): bigint {
    return this.dataview.getBigUint64(24, U.LE);
  }

  set size(value: bigint | number) {
    this.dataview.setBigUint64(24, BigInt(value), U.LE);
  }

  get mappedAtCreation(): boolean {
    return this.dataview.getUint8(32) == 1;
  }

  set mappedAtCreation(value: boolean | number | bigint) {
    this.dataview.setUint8(32, value ? 1 : 0);
  }

  static from() {
    // not implemented
  }
}

export class Color extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(32));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(32),
        );
      }
    }
  }

  get r(): number {
    return this.dataview.getFloat64(0, U.LE);
  }

  set r(value: number) {
    this.dataview.setFloat64(0, value, U.LE);
  }

  get g(): number {
    return this.dataview.getFloat64(8, U.LE);
  }

  set g(value: number) {
    this.dataview.setFloat64(8, value, U.LE);
  }

  get b(): number {
    return this.dataview.getFloat64(16, U.LE);
  }

  set b(value: number) {
    this.dataview.setFloat64(16, value, U.LE);
  }

  get a(): number {
    return this.dataview.getFloat64(24, U.LE);
  }

  set a(value: number) {
    this.dataview.setFloat64(24, value, U.LE);
  }

  static from() {
    // not implemented
  }
}

export class CommandBufferDescriptor extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(16));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(16),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, U.LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      8,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  static from() {
    // not implemented
  }
}

export class CommandEncoderDescriptor extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(16));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(16),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, U.LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      8,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  static from() {
    // not implemented
  }
}

export class CompilationMessage extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(80));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(80),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get message(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, U.LE));
  }

  set message(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      8,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get type(): CompilationMessageType {
    return this.dataview.getUint32(16, U.LE) as CompilationMessageType;
  }

  set type(value: CompilationMessageType | number) {
    this.dataview.setUint32(16, value, U.LE);
  }

  get lineNum(): bigint {
    return this.dataview.getBigUint64(24, U.LE);
  }

  set lineNum(value: bigint | number) {
    this.dataview.setBigUint64(24, BigInt(value), U.LE);
  }

  get linePos(): bigint {
    return this.dataview.getBigUint64(32, U.LE);
  }

  set linePos(value: bigint | number) {
    this.dataview.setBigUint64(32, BigInt(value), U.LE);
  }

  get offset(): bigint {
    return this.dataview.getBigUint64(40, U.LE);
  }

  set offset(value: bigint | number) {
    this.dataview.setBigUint64(40, BigInt(value), U.LE);
  }

  get length(): bigint {
    return this.dataview.getBigUint64(48, U.LE);
  }

  set length(value: bigint | number) {
    this.dataview.setBigUint64(48, BigInt(value), U.LE);
  }

  get utf16LinePos(): bigint {
    return this.dataview.getBigUint64(56, U.LE);
  }

  set utf16LinePos(value: bigint | number) {
    this.dataview.setBigUint64(56, BigInt(value), U.LE);
  }

  get utf16Offset(): bigint {
    return this.dataview.getBigUint64(64, U.LE);
  }

  set utf16Offset(value: bigint | number) {
    this.dataview.setBigUint64(64, BigInt(value), U.LE);
  }

  get utf16Length(): bigint {
    return this.dataview.getBigUint64(72, U.LE);
  }

  set utf16Length(value: bigint | number) {
    this.dataview.setBigUint64(72, BigInt(value), U.LE);
  }

  static from() {
    // not implemented
  }
}

export class ComputePassTimestampWrite extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(16));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(16),
        );
      }
    }
  }

  get querySet(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set querySet(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get queryIndex(): number {
    return this.dataview.getUint32(8, U.LE);
  }

  set queryIndex(value: number) {
    this.dataview.setUint32(8, value, U.LE);
  }

  get location(): ComputePassTimestampLocation {
    return this.dataview.getUint32(12, U.LE) as ComputePassTimestampLocation;
  }

  set location(value: ComputePassTimestampLocation | number) {
    this.dataview.setUint32(12, value, U.LE);
  }

  static from() {
    // not implemented
  }
}

export class ConstantEntry extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(24));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(24),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get key(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, U.LE));
  }

  set key(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      8,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get value(): number {
    return this.dataview.getFloat64(16, U.LE);
  }

  set value(value: number) {
    this.dataview.setFloat64(16, value, U.LE);
  }

  static from() {
    // not implemented
  }
}

export class Extent3D extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(12));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(12),
        );
      }
    }
  }

  get width(): number {
    return this.dataview.getUint32(0, U.LE);
  }

  set width(value: number) {
    this.dataview.setUint32(0, value, U.LE);
  }

  get height(): number {
    return this.dataview.getUint32(4, U.LE);
  }

  set height(value: number) {
    this.dataview.setUint32(4, value, U.LE);
  }

  get depthOrArrayLayers(): number {
    return this.dataview.getUint32(8, U.LE);
  }

  set depthOrArrayLayers(value: number) {
    this.dataview.setUint32(8, value, U.LE);
  }

  static from() {
    // not implemented
  }
}

export class InstanceDescriptor extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(8));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(8),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  static from() {
    // not implemented
  }
}

export class Limits extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(144));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(144),
        );
      }
    }
  }

  get maxTextureDimension1D(): number {
    return this.dataview.getUint32(0, U.LE);
  }

  set maxTextureDimension1D(value: number) {
    this.dataview.setUint32(0, value, U.LE);
  }

  get maxTextureDimension2D(): number {
    return this.dataview.getUint32(4, U.LE);
  }

  set maxTextureDimension2D(value: number) {
    this.dataview.setUint32(4, value, U.LE);
  }

  get maxTextureDimension3D(): number {
    return this.dataview.getUint32(8, U.LE);
  }

  set maxTextureDimension3D(value: number) {
    this.dataview.setUint32(8, value, U.LE);
  }

  get maxTextureArrayLayers(): number {
    return this.dataview.getUint32(12, U.LE);
  }

  set maxTextureArrayLayers(value: number) {
    this.dataview.setUint32(12, value, U.LE);
  }

  get maxBindGroups(): number {
    return this.dataview.getUint32(16, U.LE);
  }

  set maxBindGroups(value: number) {
    this.dataview.setUint32(16, value, U.LE);
  }

  get maxBindingsPerBindGroup(): number {
    return this.dataview.getUint32(20, U.LE);
  }

  set maxBindingsPerBindGroup(value: number) {
    this.dataview.setUint32(20, value, U.LE);
  }

  get maxDynamicUniformBuffersPerPipelineLayout(): number {
    return this.dataview.getUint32(24, U.LE);
  }

  set maxDynamicUniformBuffersPerPipelineLayout(value: number) {
    this.dataview.setUint32(24, value, U.LE);
  }

  get maxDynamicStorageBuffersPerPipelineLayout(): number {
    return this.dataview.getUint32(28, U.LE);
  }

  set maxDynamicStorageBuffersPerPipelineLayout(value: number) {
    this.dataview.setUint32(28, value, U.LE);
  }

  get maxSampledTexturesPerShaderStage(): number {
    return this.dataview.getUint32(32, U.LE);
  }

  set maxSampledTexturesPerShaderStage(value: number) {
    this.dataview.setUint32(32, value, U.LE);
  }

  get maxSamplersPerShaderStage(): number {
    return this.dataview.getUint32(36, U.LE);
  }

  set maxSamplersPerShaderStage(value: number) {
    this.dataview.setUint32(36, value, U.LE);
  }

  get maxStorageBuffersPerShaderStage(): number {
    return this.dataview.getUint32(40, U.LE);
  }

  set maxStorageBuffersPerShaderStage(value: number) {
    this.dataview.setUint32(40, value, U.LE);
  }

  get maxStorageTexturesPerShaderStage(): number {
    return this.dataview.getUint32(44, U.LE);
  }

  set maxStorageTexturesPerShaderStage(value: number) {
    this.dataview.setUint32(44, value, U.LE);
  }

  get maxUniformBuffersPerShaderStage(): number {
    return this.dataview.getUint32(48, U.LE);
  }

  set maxUniformBuffersPerShaderStage(value: number) {
    this.dataview.setUint32(48, value, U.LE);
  }

  get maxUniformBufferBindingSize(): bigint {
    return this.dataview.getBigUint64(56, U.LE);
  }

  set maxUniformBufferBindingSize(value: bigint | number) {
    this.dataview.setBigUint64(56, BigInt(value), U.LE);
  }

  get maxStorageBufferBindingSize(): bigint {
    return this.dataview.getBigUint64(64, U.LE);
  }

  set maxStorageBufferBindingSize(value: bigint | number) {
    this.dataview.setBigUint64(64, BigInt(value), U.LE);
  }

  get minUniformBufferOffsetAlignment(): number {
    return this.dataview.getUint32(72, U.LE);
  }

  set minUniformBufferOffsetAlignment(value: number) {
    this.dataview.setUint32(72, value, U.LE);
  }

  get minStorageBufferOffsetAlignment(): number {
    return this.dataview.getUint32(76, U.LE);
  }

  set minStorageBufferOffsetAlignment(value: number) {
    this.dataview.setUint32(76, value, U.LE);
  }

  get maxVertexBuffers(): number {
    return this.dataview.getUint32(80, U.LE);
  }

  set maxVertexBuffers(value: number) {
    this.dataview.setUint32(80, value, U.LE);
  }

  get maxBufferSize(): bigint {
    return this.dataview.getBigUint64(88, U.LE);
  }

  set maxBufferSize(value: bigint | number) {
    this.dataview.setBigUint64(88, BigInt(value), U.LE);
  }

  get maxVertexAttributes(): number {
    return this.dataview.getUint32(96, U.LE);
  }

  set maxVertexAttributes(value: number) {
    this.dataview.setUint32(96, value, U.LE);
  }

  get maxVertexBufferArrayStride(): number {
    return this.dataview.getUint32(100, U.LE);
  }

  set maxVertexBufferArrayStride(value: number) {
    this.dataview.setUint32(100, value, U.LE);
  }

  get maxInterStageShaderComponents(): number {
    return this.dataview.getUint32(104, U.LE);
  }

  set maxInterStageShaderComponents(value: number) {
    this.dataview.setUint32(104, value, U.LE);
  }

  get maxInterStageShaderVariables(): number {
    return this.dataview.getUint32(108, U.LE);
  }

  set maxInterStageShaderVariables(value: number) {
    this.dataview.setUint32(108, value, U.LE);
  }

  get maxColorAttachments(): number {
    return this.dataview.getUint32(112, U.LE);
  }

  set maxColorAttachments(value: number) {
    this.dataview.setUint32(112, value, U.LE);
  }

  get maxColorAttachmentBytesPerSample(): number {
    return this.dataview.getUint32(116, U.LE);
  }

  set maxColorAttachmentBytesPerSample(value: number) {
    this.dataview.setUint32(116, value, U.LE);
  }

  get maxComputeWorkgroupStorageSize(): number {
    return this.dataview.getUint32(120, U.LE);
  }

  set maxComputeWorkgroupStorageSize(value: number) {
    this.dataview.setUint32(120, value, U.LE);
  }

  get maxComputeInvocationsPerWorkgroup(): number {
    return this.dataview.getUint32(124, U.LE);
  }

  set maxComputeInvocationsPerWorkgroup(value: number) {
    this.dataview.setUint32(124, value, U.LE);
  }

  get maxComputeWorkgroupSizeX(): number {
    return this.dataview.getUint32(128, U.LE);
  }

  set maxComputeWorkgroupSizeX(value: number) {
    this.dataview.setUint32(128, value, U.LE);
  }

  get maxComputeWorkgroupSizeY(): number {
    return this.dataview.getUint32(132, U.LE);
  }

  set maxComputeWorkgroupSizeY(value: number) {
    this.dataview.setUint32(132, value, U.LE);
  }

  get maxComputeWorkgroupSizeZ(): number {
    return this.dataview.getUint32(136, U.LE);
  }

  set maxComputeWorkgroupSizeZ(value: number) {
    this.dataview.setUint32(136, value, U.LE);
  }

  get maxComputeWorkgroupsPerDimension(): number {
    return this.dataview.getUint32(140, U.LE);
  }

  set maxComputeWorkgroupsPerDimension(value: number) {
    this.dataview.setUint32(140, value, U.LE);
  }

  static from() {
    // not implemented
  }
}

export class MultisampleState extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(24));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(24),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get count(): number {
    return this.dataview.getUint32(8, U.LE);
  }

  set count(value: number) {
    this.dataview.setUint32(8, value, U.LE);
  }

  get mask(): number {
    return this.dataview.getUint32(12, U.LE);
  }

  set mask(value: number) {
    this.dataview.setUint32(12, value, U.LE);
  }

  get alphaToCoverageEnabled(): boolean {
    return this.dataview.getUint8(16) == 1;
  }

  set alphaToCoverageEnabled(value: boolean | number | bigint) {
    this.dataview.setUint8(16, value ? 1 : 0);
  }

  static from() {
    // not implemented
  }
}

export class Origin3D extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(12));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(12),
        );
      }
    }
  }

  get x(): number {
    return this.dataview.getUint32(0, U.LE);
  }

  set x(value: number) {
    this.dataview.setUint32(0, value, U.LE);
  }

  get y(): number {
    return this.dataview.getUint32(4, U.LE);
  }

  set y(value: number) {
    this.dataview.setUint32(4, value, U.LE);
  }

  get z(): number {
    return this.dataview.getUint32(8, U.LE);
  }

  set z(value: number) {
    this.dataview.setUint32(8, value, U.LE);
  }

  static from() {
    // not implemented
  }
}

export class PipelineLayoutDescriptor extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(32));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(32),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, U.LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      8,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get bindGroupLayoutCount(): bigint {
    return this.dataview.getBigUint64(16, U.LE);
  }

  set bindGroupLayoutCount(value: bigint | number) {
    this.dataview.setBigUint64(16, BigInt(value), U.LE);
  }

  get bindGroupLayouts(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(24, U.LE));
  }

  set bindGroupLayouts(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      24,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  static from() {
    // not implemented
  }
}

export class PrimitiveDepthClipControl extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(24));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(24),
        );
      }
    }
  }

  get chain(): ChainedStruct {
    return new ChainedStruct(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 0, 16),
    );
  }

  set chain(value: ChainedStruct) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 16).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get unclippedDepth(): boolean {
    return this.dataview.getUint8(16) == 1;
  }

  set unclippedDepth(value: boolean | number | bigint) {
    this.dataview.setUint8(16, value ? 1 : 0);
  }

  static from() {
    // not implemented
  }
}

export class PrimitiveState extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(24));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(24),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get topology(): PrimitiveTopology {
    return this.dataview.getUint32(8, U.LE) as PrimitiveTopology;
  }

  set topology(value: PrimitiveTopology | number) {
    this.dataview.setUint32(8, value, U.LE);
  }

  get stripIndexFormat(): IndexFormat {
    return this.dataview.getUint32(12, U.LE) as IndexFormat;
  }

  set stripIndexFormat(value: IndexFormat | number) {
    this.dataview.setUint32(12, value, U.LE);
  }

  get frontFace(): FrontFace {
    return this.dataview.getUint32(16, U.LE) as FrontFace;
  }

  set frontFace(value: FrontFace | number) {
    this.dataview.setUint32(16, value, U.LE);
  }

  get cullMode(): CullMode {
    return this.dataview.getUint32(20, U.LE) as CullMode;
  }

  set cullMode(value: CullMode | number) {
    this.dataview.setUint32(20, value, U.LE);
  }

  static from() {
    // not implemented
  }
}

export class QuerySetDescriptor extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(40));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(40),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, U.LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      8,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get type(): QueryType {
    return this.dataview.getUint32(16, U.LE) as QueryType;
  }

  set type(value: QueryType | number) {
    this.dataview.setUint32(16, value, U.LE);
  }

  get count(): number {
    return this.dataview.getUint32(20, U.LE);
  }

  set count(value: number) {
    this.dataview.setUint32(20, value, U.LE);
  }

  get pipelineStatistics(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(24, U.LE));
  }

  set pipelineStatistics(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      24,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get pipelineStatisticsCount(): bigint {
    return this.dataview.getBigUint64(32, U.LE);
  }

  set pipelineStatisticsCount(value: bigint | number) {
    this.dataview.setBigUint64(32, BigInt(value), U.LE);
  }

  static from() {
    // not implemented
  }
}

export class QueueDescriptor extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(16));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(16),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, U.LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      8,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  static from() {
    // not implemented
  }
}

export class RenderBundleDescriptor extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(16));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(16),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, U.LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      8,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  static from() {
    // not implemented
  }
}

export class RenderBundleEncoderDescriptor extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(48));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(48),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, U.LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      8,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get colorFormatsCount(): bigint {
    return this.dataview.getBigUint64(16, U.LE);
  }

  set colorFormatsCount(value: bigint | number) {
    this.dataview.setBigUint64(16, BigInt(value), U.LE);
  }

  get colorFormats(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(24, U.LE));
  }

  set colorFormats(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      24,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get depthStencilFormat(): TextureFormat {
    return this.dataview.getUint32(32, U.LE) as TextureFormat;
  }

  set depthStencilFormat(value: TextureFormat | number) {
    this.dataview.setUint32(32, value, U.LE);
  }

  get sampleCount(): number {
    return this.dataview.getUint32(36, U.LE);
  }

  set sampleCount(value: number) {
    this.dataview.setUint32(36, value, U.LE);
  }

  get depthReadOnly(): boolean {
    return this.dataview.getUint8(40) == 1;
  }

  set depthReadOnly(value: boolean | number | bigint) {
    this.dataview.setUint8(40, value ? 1 : 0);
  }

  get stencilReadOnly(): boolean {
    return this.dataview.getUint8(41) == 1;
  }

  set stencilReadOnly(value: boolean | number | bigint) {
    this.dataview.setUint8(41, value ? 1 : 0);
  }

  static from() {
    // not implemented
  }
}

export class RenderPassDepthStencilAttachment extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(40));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(40),
        );
      }
    }
  }

  get view(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set view(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get depthLoadOp(): LoadOp {
    return this.dataview.getUint32(8, U.LE) as LoadOp;
  }

  set depthLoadOp(value: LoadOp | number) {
    this.dataview.setUint32(8, value, U.LE);
  }

  get depthStoreOp(): StoreOp {
    return this.dataview.getUint32(12, U.LE) as StoreOp;
  }

  set depthStoreOp(value: StoreOp | number) {
    this.dataview.setUint32(12, value, U.LE);
  }

  get depthClearValue(): number {
    return this.dataview.getFloat32(16, U.LE);
  }

  set depthClearValue(value: number) {
    this.dataview.setFloat32(16, value, U.LE);
  }

  get depthReadOnly(): boolean {
    return this.dataview.getUint8(20) == 1;
  }

  set depthReadOnly(value: boolean | number | bigint) {
    this.dataview.setUint8(20, value ? 1 : 0);
  }

  get stencilLoadOp(): LoadOp {
    return this.dataview.getUint32(24, U.LE) as LoadOp;
  }

  set stencilLoadOp(value: LoadOp | number) {
    this.dataview.setUint32(24, value, U.LE);
  }

  get stencilStoreOp(): StoreOp {
    return this.dataview.getUint32(28, U.LE) as StoreOp;
  }

  set stencilStoreOp(value: StoreOp | number) {
    this.dataview.setUint32(28, value, U.LE);
  }

  get stencilClearValue(): number {
    return this.dataview.getUint32(32, U.LE);
  }

  set stencilClearValue(value: number) {
    this.dataview.setUint32(32, value, U.LE);
  }

  get stencilReadOnly(): boolean {
    return this.dataview.getUint8(36) == 1;
  }

  set stencilReadOnly(value: boolean | number | bigint) {
    this.dataview.setUint8(36, value ? 1 : 0);
  }

  static from() {
    // not implemented
  }
}

export class RenderPassDescriptorMaxDrawCount extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(24));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(24),
        );
      }
    }
  }

  get chain(): ChainedStruct {
    return new ChainedStruct(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 0, 16),
    );
  }

  set chain(value: ChainedStruct) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 16).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get maxDrawCount(): bigint {
    return this.dataview.getBigUint64(16, U.LE);
  }

  set maxDrawCount(value: bigint | number) {
    this.dataview.setBigUint64(16, BigInt(value), U.LE);
  }

  static from() {
    // not implemented
  }
}

export class RenderPassTimestampWrite extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(16));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(16),
        );
      }
    }
  }

  get querySet(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set querySet(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get queryIndex(): number {
    return this.dataview.getUint32(8, U.LE);
  }

  set queryIndex(value: number) {
    this.dataview.setUint32(8, value, U.LE);
  }

  get location(): RenderPassTimestampLocation {
    return this.dataview.getUint32(12, U.LE) as RenderPassTimestampLocation;
  }

  set location(value: RenderPassTimestampLocation | number) {
    this.dataview.setUint32(12, value, U.LE);
  }

  static from() {
    // not implemented
  }
}

export class RequestAdapterOptions extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(32));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(32),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get compatibleSurface(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, U.LE));
  }

  set compatibleSurface(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      8,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get powerPreference(): PowerPreference {
    return this.dataview.getUint32(16, U.LE) as PowerPreference;
  }

  set powerPreference(value: PowerPreference | number) {
    this.dataview.setUint32(16, value, U.LE);
  }

  get backendType(): BackendType {
    return this.dataview.getUint32(20, U.LE) as BackendType;
  }

  set backendType(value: BackendType | number) {
    this.dataview.setUint32(20, value, U.LE);
  }

  get forceFallbackAdapter(): boolean {
    return this.dataview.getUint8(24) == 1;
  }

  set forceFallbackAdapter(value: boolean | number | bigint) {
    this.dataview.setUint8(24, value ? 1 : 0);
  }

  static from() {
    // not implemented
  }
}

export class SamplerBindingLayout extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(16));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(16),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get type(): SamplerBindingType {
    return this.dataview.getUint32(8, U.LE) as SamplerBindingType;
  }

  set type(value: SamplerBindingType | number) {
    this.dataview.setUint32(8, value, U.LE);
  }

  static from() {
    // not implemented
  }
}

export class SamplerDescriptor extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(56));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(56),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, U.LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      8,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get addressModeU(): AddressMode {
    return this.dataview.getUint32(16, U.LE) as AddressMode;
  }

  set addressModeU(value: AddressMode | number) {
    this.dataview.setUint32(16, value, U.LE);
  }

  get addressModeV(): AddressMode {
    return this.dataview.getUint32(20, U.LE) as AddressMode;
  }

  set addressModeV(value: AddressMode | number) {
    this.dataview.setUint32(20, value, U.LE);
  }

  get addressModeW(): AddressMode {
    return this.dataview.getUint32(24, U.LE) as AddressMode;
  }

  set addressModeW(value: AddressMode | number) {
    this.dataview.setUint32(24, value, U.LE);
  }

  get magFilter(): FilterMode {
    return this.dataview.getUint32(28, U.LE) as FilterMode;
  }

  set magFilter(value: FilterMode | number) {
    this.dataview.setUint32(28, value, U.LE);
  }

  get minFilter(): FilterMode {
    return this.dataview.getUint32(32, U.LE) as FilterMode;
  }

  set minFilter(value: FilterMode | number) {
    this.dataview.setUint32(32, value, U.LE);
  }

  get mipmapFilter(): MipmapFilterMode {
    return this.dataview.getUint32(36, U.LE) as MipmapFilterMode;
  }

  set mipmapFilter(value: MipmapFilterMode | number) {
    this.dataview.setUint32(36, value, U.LE);
  }

  get lodMinClamp(): number {
    return this.dataview.getFloat32(40, U.LE);
  }

  set lodMinClamp(value: number) {
    this.dataview.setFloat32(40, value, U.LE);
  }

  get lodMaxClamp(): number {
    return this.dataview.getFloat32(44, U.LE);
  }

  set lodMaxClamp(value: number) {
    this.dataview.setFloat32(44, value, U.LE);
  }

  get compare(): CompareFunction {
    return this.dataview.getUint32(48, U.LE) as CompareFunction;
  }

  set compare(value: CompareFunction | number) {
    this.dataview.setUint32(48, value, U.LE);
  }

  get maxAnisotropy(): number {
    return this.dataview.getUint16(52, U.LE);
  }

  set maxAnisotropy(value: number) {
    this.dataview.setUint16(52, value, U.LE);
  }

  static from() {
    // not implemented
  }
}

export class ShaderModuleCompilationHint extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(24));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(24),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get entryPoint(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, U.LE));
  }

  set entryPoint(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      8,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get layout(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, U.LE));
  }

  set layout(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      16,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  static from() {
    // not implemented
  }
}

export class ShaderModuleSPIRVDescriptor extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(32));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(32),
        );
      }
    }
  }

  get chain(): ChainedStruct {
    return new ChainedStruct(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 0, 16),
    );
  }

  set chain(value: ChainedStruct) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 16).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get codeSize(): number {
    return this.dataview.getUint32(16, U.LE);
  }

  set codeSize(value: number) {
    this.dataview.setUint32(16, value, U.LE);
  }

  get code(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(24, U.LE));
  }

  set code(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      24,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  static from() {
    // not implemented
  }
}

export class ShaderModuleWGSLDescriptor extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(24));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(24),
        );
      }
    }
  }

  get chain(): ChainedStruct {
    return new ChainedStruct(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 0, 16),
    );
  }

  set chain(value: ChainedStruct) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 16).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get code(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, U.LE));
  }

  set code(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      16,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  static from() {
    // not implemented
  }
}

export class StencilFaceState extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(16));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(16),
        );
      }
    }
  }

  get compare(): CompareFunction {
    return this.dataview.getUint32(0, U.LE) as CompareFunction;
  }

  set compare(value: CompareFunction | number) {
    this.dataview.setUint32(0, value, U.LE);
  }

  get failOp(): StencilOperation {
    return this.dataview.getUint32(4, U.LE) as StencilOperation;
  }

  set failOp(value: StencilOperation | number) {
    this.dataview.setUint32(4, value, U.LE);
  }

  get depthFailOp(): StencilOperation {
    return this.dataview.getUint32(8, U.LE) as StencilOperation;
  }

  set depthFailOp(value: StencilOperation | number) {
    this.dataview.setUint32(8, value, U.LE);
  }

  get passOp(): StencilOperation {
    return this.dataview.getUint32(12, U.LE) as StencilOperation;
  }

  set passOp(value: StencilOperation | number) {
    this.dataview.setUint32(12, value, U.LE);
  }

  static from() {
    // not implemented
  }
}

export class StorageTextureBindingLayout extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(24));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(24),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get access(): StorageTextureAccess {
    return this.dataview.getUint32(8, U.LE) as StorageTextureAccess;
  }

  set access(value: StorageTextureAccess | number) {
    this.dataview.setUint32(8, value, U.LE);
  }

  get format(): TextureFormat {
    return this.dataview.getUint32(12, U.LE) as TextureFormat;
  }

  set format(value: TextureFormat | number) {
    this.dataview.setUint32(12, value, U.LE);
  }

  get viewDimension(): TextureViewDimension {
    return this.dataview.getUint32(16, U.LE) as TextureViewDimension;
  }

  set viewDimension(value: TextureViewDimension | number) {
    this.dataview.setUint32(16, value, U.LE);
  }

  static from() {
    // not implemented
  }
}

export class SurfaceDescriptor extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(16));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(16),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, U.LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      8,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  static from() {
    // not implemented
  }
}

export class SurfaceDescriptorFromAndroidNativeWindow extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(24));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(24),
        );
      }
    }
  }

  get chain(): ChainedStruct {
    return new ChainedStruct(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 0, 16),
    );
  }

  set chain(value: ChainedStruct) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 16).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get window(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, U.LE));
  }

  set window(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      16,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  static from() {
    // not implemented
  }
}

export class SurfaceDescriptorFromCanvasHTMLSelector extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(24));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(24),
        );
      }
    }
  }

  get chain(): ChainedStruct {
    return new ChainedStruct(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 0, 16),
    );
  }

  set chain(value: ChainedStruct) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 16).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get selector(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, U.LE));
  }

  set selector(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      16,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  static from() {
    // not implemented
  }
}

export class SurfaceDescriptorFromMetalLayer extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(24));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(24),
        );
      }
    }
  }

  get chain(): ChainedStruct {
    return new ChainedStruct(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 0, 16),
    );
  }

  set chain(value: ChainedStruct) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 16).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get layer(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, U.LE));
  }

  set layer(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      16,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  static from() {
    // not implemented
  }
}

export class SurfaceDescriptorFromWaylandSurface extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(32));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(32),
        );
      }
    }
  }

  get chain(): ChainedStruct {
    return new ChainedStruct(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 0, 16),
    );
  }

  set chain(value: ChainedStruct) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 16).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get display(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, U.LE));
  }

  set display(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      16,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get surface(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(24, U.LE));
  }

  set surface(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      24,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  static from() {
    // not implemented
  }
}

export class SurfaceDescriptorFromWindowsHWND extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(32));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(32),
        );
      }
    }
  }

  get chain(): ChainedStruct {
    return new ChainedStruct(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 0, 16),
    );
  }

  set chain(value: ChainedStruct) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 16).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get hinstance(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, U.LE));
  }

  set hinstance(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      16,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get hwnd(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(24, U.LE));
  }

  set hwnd(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      24,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  static from() {
    // not implemented
  }
}

export class SurfaceDescriptorFromXcbWindow extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(32));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(32),
        );
      }
    }
  }

  get chain(): ChainedStruct {
    return new ChainedStruct(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 0, 16),
    );
  }

  set chain(value: ChainedStruct) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 16).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get connection(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, U.LE));
  }

  set connection(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      16,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get window(): number {
    return this.dataview.getUint32(24, U.LE);
  }

  set window(value: number) {
    this.dataview.setUint32(24, value, U.LE);
  }

  static from() {
    // not implemented
  }
}

export class SurfaceDescriptorFromXlibWindow extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(32));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(32),
        );
      }
    }
  }

  get chain(): ChainedStruct {
    return new ChainedStruct(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 0, 16),
    );
  }

  set chain(value: ChainedStruct) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 16).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get display(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, U.LE));
  }

  set display(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      16,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get window(): number {
    return this.dataview.getUint32(24, U.LE);
  }

  set window(value: number) {
    this.dataview.setUint32(24, value, U.LE);
  }

  static from() {
    // not implemented
  }
}

export class SwapChainDescriptor extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(40));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(40),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, U.LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      8,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get usage(): number {
    return this.dataview.getUint32(16, U.LE);
  }

  set usage(value: number) {
    this.dataview.setUint32(16, value, U.LE);
  }

  get format(): TextureFormat {
    return this.dataview.getUint32(20, U.LE) as TextureFormat;
  }

  set format(value: TextureFormat | number) {
    this.dataview.setUint32(20, value, U.LE);
  }

  get width(): number {
    return this.dataview.getUint32(24, U.LE);
  }

  set width(value: number) {
    this.dataview.setUint32(24, value, U.LE);
  }

  get height(): number {
    return this.dataview.getUint32(28, U.LE);
  }

  set height(value: number) {
    this.dataview.setUint32(28, value, U.LE);
  }

  get presentMode(): PresentMode {
    return this.dataview.getUint32(32, U.LE) as PresentMode;
  }

  set presentMode(value: PresentMode | number) {
    this.dataview.setUint32(32, value, U.LE);
  }

  static from() {
    // not implemented
  }
}

export class TextureBindingLayout extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(24));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(24),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get sampleType(): TextureSampleType {
    return this.dataview.getUint32(8, U.LE) as TextureSampleType;
  }

  set sampleType(value: TextureSampleType | number) {
    this.dataview.setUint32(8, value, U.LE);
  }

  get viewDimension(): TextureViewDimension {
    return this.dataview.getUint32(12, U.LE) as TextureViewDimension;
  }

  set viewDimension(value: TextureViewDimension | number) {
    this.dataview.setUint32(12, value, U.LE);
  }

  get multisampled(): boolean {
    return this.dataview.getUint8(16) == 1;
  }

  set multisampled(value: boolean | number | bigint) {
    this.dataview.setUint8(16, value ? 1 : 0);
  }

  static from() {
    // not implemented
  }
}

export class TextureDataLayout extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(24));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(24),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get offset(): bigint {
    return this.dataview.getBigUint64(8, U.LE);
  }

  set offset(value: bigint | number) {
    this.dataview.setBigUint64(8, BigInt(value), U.LE);
  }

  get bytesPerRow(): number {
    return this.dataview.getUint32(16, U.LE);
  }

  set bytesPerRow(value: number) {
    this.dataview.setUint32(16, value, U.LE);
  }

  get rowsPerImage(): number {
    return this.dataview.getUint32(20, U.LE);
  }

  set rowsPerImage(value: number) {
    this.dataview.setUint32(20, value, U.LE);
  }

  static from() {
    // not implemented
  }
}

export class TextureViewDescriptor extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(48));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(48),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, U.LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      8,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get format(): TextureFormat {
    return this.dataview.getUint32(16, U.LE) as TextureFormat;
  }

  set format(value: TextureFormat | number) {
    this.dataview.setUint32(16, value, U.LE);
  }

  get dimension(): TextureViewDimension {
    return this.dataview.getUint32(20, U.LE) as TextureViewDimension;
  }

  set dimension(value: TextureViewDimension | number) {
    this.dataview.setUint32(20, value, U.LE);
  }

  get baseMipLevel(): number {
    return this.dataview.getUint32(24, U.LE);
  }

  set baseMipLevel(value: number) {
    this.dataview.setUint32(24, value, U.LE);
  }

  get mipLevelCount(): number {
    return this.dataview.getUint32(28, U.LE);
  }

  set mipLevelCount(value: number) {
    this.dataview.setUint32(28, value, U.LE);
  }

  get baseArrayLayer(): number {
    return this.dataview.getUint32(32, U.LE);
  }

  set baseArrayLayer(value: number) {
    this.dataview.setUint32(32, value, U.LE);
  }

  get arrayLayerCount(): number {
    return this.dataview.getUint32(36, U.LE);
  }

  set arrayLayerCount(value: number) {
    this.dataview.setUint32(36, value, U.LE);
  }

  get aspect(): TextureAspect {
    return this.dataview.getUint32(40, U.LE) as TextureAspect;
  }

  set aspect(value: TextureAspect | number) {
    this.dataview.setUint32(40, value, U.LE);
  }

  static from() {
    // not implemented
  }
}

export class VertexAttribute extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(24));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(24),
        );
      }
    }
  }

  get format(): VertexFormat {
    return this.dataview.getUint32(0, U.LE) as VertexFormat;
  }

  set format(value: VertexFormat | number) {
    this.dataview.setUint32(0, value, U.LE);
  }

  get offset(): bigint {
    return this.dataview.getBigUint64(8, U.LE);
  }

  set offset(value: bigint | number) {
    this.dataview.setBigUint64(8, BigInt(value), U.LE);
  }

  get shaderLocation(): number {
    return this.dataview.getUint32(16, U.LE);
  }

  set shaderLocation(value: number) {
    this.dataview.setUint32(16, value, U.LE);
  }

  static from() {
    // not implemented
  }
}

export class BindGroupDescriptor extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(40));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(40),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, U.LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      8,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get layout(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, U.LE));
  }

  set layout(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      16,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get entryCount(): bigint {
    return this.dataview.getBigUint64(24, U.LE);
  }

  set entryCount(value: bigint | number) {
    this.dataview.setBigUint64(24, BigInt(value), U.LE);
  }

  get entries(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(32, U.LE));
  }

  set entries(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      32,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  static from() {
    // not implemented
  }
}

export class BindGroupLayoutEntry extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(104));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(104),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get binding(): number {
    return this.dataview.getUint32(8, U.LE);
  }

  set binding(value: number) {
    this.dataview.setUint32(8, value, U.LE);
  }

  get visibility(): number {
    return this.dataview.getUint32(12, U.LE);
  }

  set visibility(value: number) {
    this.dataview.setUint32(12, value, U.LE);
  }

  get buffer(): BufferBindingLayout {
    return new BufferBindingLayout(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 16, 24),
    );
  }

  set buffer(value: BufferBindingLayout) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 24).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get sampler(): SamplerBindingLayout {
    return new SamplerBindingLayout(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 40, 16),
    );
  }

  set sampler(value: SamplerBindingLayout) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 16).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get texture(): TextureBindingLayout {
    return new TextureBindingLayout(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 56, 24),
    );
  }

  set texture(value: TextureBindingLayout) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 24).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get storageTexture(): StorageTextureBindingLayout {
    return new StorageTextureBindingLayout(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 80, 24),
    );
  }

  set storageTexture(value: StorageTextureBindingLayout) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 24).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  static from() {
    // not implemented
  }
}

export class BlendState extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(24));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(24),
        );
      }
    }
  }

  get color(): BlendComponent {
    return new BlendComponent(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 0, 12),
    );
  }

  set color(value: BlendComponent) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 12).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get alpha(): BlendComponent {
    return new BlendComponent(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 12, 12),
    );
  }

  set alpha(value: BlendComponent) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 12).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  static from() {
    // not implemented
  }
}

export class CompilationInfo extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(24));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(24),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get messageCount(): bigint {
    return this.dataview.getBigUint64(8, U.LE);
  }

  set messageCount(value: bigint | number) {
    this.dataview.setBigUint64(8, BigInt(value), U.LE);
  }

  get messages(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, U.LE));
  }

  set messages(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      16,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  static from() {
    // not implemented
  }
}

export class ComputePassDescriptor extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(32));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(32),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, U.LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      8,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get timestampWriteCount(): bigint {
    return this.dataview.getBigUint64(16, U.LE);
  }

  set timestampWriteCount(value: bigint | number) {
    this.dataview.setBigUint64(16, BigInt(value), U.LE);
  }

  get timestampWrites(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(24, U.LE));
  }

  set timestampWrites(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      24,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  static from() {
    // not implemented
  }
}

export class DepthStencilState extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(72));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(72),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get format(): TextureFormat {
    return this.dataview.getUint32(8, U.LE) as TextureFormat;
  }

  set format(value: TextureFormat | number) {
    this.dataview.setUint32(8, value, U.LE);
  }

  get depthWriteEnabled(): boolean {
    return this.dataview.getUint8(12) == 1;
  }

  set depthWriteEnabled(value: boolean | number | bigint) {
    this.dataview.setUint8(12, value ? 1 : 0);
  }

  get depthCompare(): CompareFunction {
    return this.dataview.getUint32(16, U.LE) as CompareFunction;
  }

  set depthCompare(value: CompareFunction | number) {
    this.dataview.setUint32(16, value, U.LE);
  }

  get stencilFront(): StencilFaceState {
    return new StencilFaceState(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 20, 16),
    );
  }

  set stencilFront(value: StencilFaceState) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 16).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get stencilBack(): StencilFaceState {
    return new StencilFaceState(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 36, 16),
    );
  }

  set stencilBack(value: StencilFaceState) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 16).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get stencilReadMask(): number {
    return this.dataview.getUint32(52, U.LE);
  }

  set stencilReadMask(value: number) {
    this.dataview.setUint32(52, value, U.LE);
  }

  get stencilWriteMask(): number {
    return this.dataview.getUint32(56, U.LE);
  }

  set stencilWriteMask(value: number) {
    this.dataview.setUint32(56, value, U.LE);
  }

  get depthBias(): number {
    return this.dataview.getInt32(60, U.LE);
  }

  set depthBias(value: number) {
    this.dataview.setInt32(60, value, U.LE);
  }

  get depthBiasSlopeScale(): number {
    return this.dataview.getFloat32(64, U.LE);
  }

  set depthBiasSlopeScale(value: number) {
    this.dataview.setFloat32(64, value, U.LE);
  }

  get depthBiasClamp(): number {
    return this.dataview.getFloat32(68, U.LE);
  }

  set depthBiasClamp(value: number) {
    this.dataview.setFloat32(68, value, U.LE);
  }

  static from() {
    // not implemented
  }
}

export class ImageCopyBuffer extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(40));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(40),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get layout(): TextureDataLayout {
    return new TextureDataLayout(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 8, 24),
    );
  }

  set layout(value: TextureDataLayout) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 24).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get buffer(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(32, U.LE));
  }

  set buffer(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      32,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  static from() {
    // not implemented
  }
}

export class ImageCopyTexture extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(40));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(40),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get texture(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, U.LE));
  }

  set texture(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      8,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get mipLevel(): number {
    return this.dataview.getUint32(16, U.LE);
  }

  set mipLevel(value: number) {
    this.dataview.setUint32(16, value, U.LE);
  }

  get origin(): Origin3D {
    return new Origin3D(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 20, 12),
    );
  }

  set origin(value: Origin3D) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 12).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get aspect(): TextureAspect {
    return this.dataview.getUint32(32, U.LE) as TextureAspect;
  }

  set aspect(value: TextureAspect | number) {
    this.dataview.setUint32(32, value, U.LE);
  }

  static from() {
    // not implemented
  }
}

export class ProgrammableStageDescriptor extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(40));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(40),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get module(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, U.LE));
  }

  set module(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      8,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get entryPoint(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, U.LE));
  }

  set entryPoint(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      16,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get constantCount(): bigint {
    return this.dataview.getBigUint64(24, U.LE);
  }

  set constantCount(value: bigint | number) {
    this.dataview.setBigUint64(24, BigInt(value), U.LE);
  }

  get constants(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(32, U.LE));
  }

  set constants(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      32,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  static from() {
    // not implemented
  }
}

export class RenderPassColorAttachment extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(56));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(56),
        );
      }
    }
  }

  get view(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set view(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get resolveTarget(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, U.LE));
  }

  set resolveTarget(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      8,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get loadOp(): LoadOp {
    return this.dataview.getUint32(16, U.LE) as LoadOp;
  }

  set loadOp(value: LoadOp | number) {
    this.dataview.setUint32(16, value, U.LE);
  }

  get storeOp(): StoreOp {
    return this.dataview.getUint32(20, U.LE) as StoreOp;
  }

  set storeOp(value: StoreOp | number) {
    this.dataview.setUint32(20, value, U.LE);
  }

  get clearValue(): Color {
    return new Color(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 24, 32),
    );
  }

  set clearValue(value: Color) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 32).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  static from() {
    // not implemented
  }
}

export class RequiredLimits extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(152));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(152),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get limits(): Limits {
    return new Limits(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 8, 144),
    );
  }

  set limits(value: Limits) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 144).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  static from() {
    // not implemented
  }
}

export class ShaderModuleDescriptor extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(32));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(32),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, U.LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      8,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get hintCount(): bigint {
    return this.dataview.getBigUint64(16, U.LE);
  }

  set hintCount(value: bigint | number) {
    this.dataview.setBigUint64(16, BigInt(value), U.LE);
  }

  get hints(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(24, U.LE));
  }

  set hints(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      24,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  static from() {
    // not implemented
  }
}

export class SupportedLimits extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(152));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(152),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get limits(): Limits {
    return new Limits(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 8, 144),
    );
  }

  set limits(value: Limits) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 144).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  static from() {
    // not implemented
  }
}

export class TextureDescriptor extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(64));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(64),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, U.LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      8,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get usage(): number {
    return this.dataview.getUint32(16, U.LE);
  }

  set usage(value: number) {
    this.dataview.setUint32(16, value, U.LE);
  }

  get dimension(): TextureDimension {
    return this.dataview.getUint32(20, U.LE) as TextureDimension;
  }

  set dimension(value: TextureDimension | number) {
    this.dataview.setUint32(20, value, U.LE);
  }

  get size(): Extent3D {
    return new Extent3D(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 24, 12),
    );
  }

  set size(value: Extent3D) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 12).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get format(): TextureFormat {
    return this.dataview.getUint32(36, U.LE) as TextureFormat;
  }

  set format(value: TextureFormat | number) {
    this.dataview.setUint32(36, value, U.LE);
  }

  get mipLevelCount(): number {
    return this.dataview.getUint32(40, U.LE);
  }

  set mipLevelCount(value: number) {
    this.dataview.setUint32(40, value, U.LE);
  }

  get sampleCount(): number {
    return this.dataview.getUint32(44, U.LE);
  }

  set sampleCount(value: number) {
    this.dataview.setUint32(44, value, U.LE);
  }

  get viewFormatCount(): bigint {
    return this.dataview.getBigUint64(48, U.LE);
  }

  set viewFormatCount(value: bigint | number) {
    this.dataview.setBigUint64(48, BigInt(value), U.LE);
  }

  get viewFormats(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(56, U.LE));
  }

  set viewFormats(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      56,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  static from() {
    // not implemented
  }
}

export class VertexBufferLayout extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(32));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(32),
        );
      }
    }
  }

  get arrayStride(): bigint {
    return this.dataview.getBigUint64(0, U.LE);
  }

  set arrayStride(value: bigint | number) {
    this.dataview.setBigUint64(0, BigInt(value), U.LE);
  }

  get stepMode(): VertexStepMode {
    return this.dataview.getUint32(8, U.LE) as VertexStepMode;
  }

  set stepMode(value: VertexStepMode | number) {
    this.dataview.setUint32(8, value, U.LE);
  }

  get attributeCount(): bigint {
    return this.dataview.getBigUint64(16, U.LE);
  }

  set attributeCount(value: bigint | number) {
    this.dataview.setBigUint64(16, BigInt(value), U.LE);
  }

  get attributes(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(24, U.LE));
  }

  set attributes(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      24,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  static from() {
    // not implemented
  }
}

export class BindGroupLayoutDescriptor extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(32));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(32),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, U.LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      8,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get entryCount(): bigint {
    return this.dataview.getBigUint64(16, U.LE);
  }

  set entryCount(value: bigint | number) {
    this.dataview.setBigUint64(16, BigInt(value), U.LE);
  }

  get entries(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(24, U.LE));
  }

  set entries(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      24,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  static from() {
    // not implemented
  }
}

export class ColorTargetState extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(32));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(32),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get format(): TextureFormat {
    return this.dataview.getUint32(8, U.LE) as TextureFormat;
  }

  set format(value: TextureFormat | number) {
    this.dataview.setUint32(8, value, U.LE);
  }

  get blend(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, U.LE));
  }

  set blend(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      16,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get writeMask(): number {
    return this.dataview.getUint32(24, U.LE);
  }

  set writeMask(value: number) {
    this.dataview.setUint32(24, value, U.LE);
  }

  static from() {
    // not implemented
  }
}

export class ComputePipelineDescriptor extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(64));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(64),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, U.LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      8,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get layout(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, U.LE));
  }

  set layout(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      16,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get compute(): ProgrammableStageDescriptor {
    return new ProgrammableStageDescriptor(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 24, 40),
    );
  }

  set compute(value: ProgrammableStageDescriptor) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 40).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  static from() {
    // not implemented
  }
}

export class DeviceDescriptor extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(72));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(72),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, U.LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      8,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get requiredFeaturesCount(): bigint {
    return this.dataview.getBigUint64(16, U.LE);
  }

  set requiredFeaturesCount(value: bigint | number) {
    this.dataview.setBigUint64(16, BigInt(value), U.LE);
  }

  get requiredFeatures(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(24, U.LE));
  }

  set requiredFeatures(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      24,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get requiredLimits(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(32, U.LE));
  }

  set requiredLimits(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      32,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get defaultQueue(): QueueDescriptor {
    return new QueueDescriptor(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 40, 16),
    );
  }

  set defaultQueue(value: QueueDescriptor) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 16).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get deviceLostCallback(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(56, U.LE));
  }

  set deviceLostCallback(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      56,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get deviceLostUserdata(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(64, U.LE));
  }

  set deviceLostUserdata(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      64,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  static from() {
    // not implemented
  }
}

export class RenderPassDescriptor extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(64));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(64),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, U.LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      8,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get colorAttachmentCount(): bigint {
    return this.dataview.getBigUint64(16, U.LE);
  }

  set colorAttachmentCount(value: bigint | number) {
    this.dataview.setBigUint64(16, BigInt(value), U.LE);
  }

  get colorAttachments(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(24, U.LE));
  }

  set colorAttachments(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      24,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get depthStencilAttachment(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(32, U.LE));
  }

  set depthStencilAttachment(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      32,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get occlusionQuerySet(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(40, U.LE));
  }

  set occlusionQuerySet(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      40,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get timestampWriteCount(): bigint {
    return this.dataview.getBigUint64(48, U.LE);
  }

  set timestampWriteCount(value: bigint | number) {
    this.dataview.setBigUint64(48, BigInt(value), U.LE);
  }

  get timestampWrites(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(56, U.LE));
  }

  set timestampWrites(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      56,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  static from() {
    // not implemented
  }
}

export class VertexState extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(56));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(56),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get module(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, U.LE));
  }

  set module(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      8,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get entryPoint(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, U.LE));
  }

  set entryPoint(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      16,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get constantCount(): bigint {
    return this.dataview.getBigUint64(24, U.LE);
  }

  set constantCount(value: bigint | number) {
    this.dataview.setBigUint64(24, BigInt(value), U.LE);
  }

  get constants(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(32, U.LE));
  }

  set constants(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      32,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get bufferCount(): bigint {
    return this.dataview.getBigUint64(40, U.LE);
  }

  set bufferCount(value: bigint | number) {
    this.dataview.setBigUint64(40, BigInt(value), U.LE);
  }

  get buffers(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(48, U.LE));
  }

  set buffers(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      48,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  static from() {
    // not implemented
  }
}

export class FragmentState extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(56));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(56),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get module(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, U.LE));
  }

  set module(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      8,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get entryPoint(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, U.LE));
  }

  set entryPoint(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      16,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get constantCount(): bigint {
    return this.dataview.getBigUint64(24, U.LE);
  }

  set constantCount(value: bigint | number) {
    this.dataview.setBigUint64(24, BigInt(value), U.LE);
  }

  get constants(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(32, U.LE));
  }

  set constants(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      32,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get targetCount(): bigint {
    return this.dataview.getBigUint64(40, U.LE);
  }

  set targetCount(value: bigint | number) {
    this.dataview.setBigUint64(40, BigInt(value), U.LE);
  }

  get targets(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(48, U.LE));
  }

  set targets(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      48,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  static from() {
    // not implemented
  }
}

export class RenderPipelineDescriptor extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(144));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(144),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, U.LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      8,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get layout(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, U.LE));
  }

  set layout(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      16,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get vertex(): VertexState {
    return new VertexState(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 24, 56),
    );
  }

  set vertex(value: VertexState) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 56).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get primitive(): PrimitiveState {
    return new PrimitiveState(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 80, 24),
    );
  }

  set primitive(value: PrimitiveState) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 24).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get depthStencil(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(104, U.LE));
  }

  set depthStencil(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      104,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get multisample(): MultisampleState {
    return new MultisampleState(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 112, 24),
    );
  }

  set multisample(value: MultisampleState) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 24).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get fragment(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(136, U.LE));
  }

  set fragment(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      136,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  static from() {
    // not implemented
  }
}

export class ChainedStruct extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(16));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(16),
        );
      }
    }
  }

  get next(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set next(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get sType(): SType {
    return this.dataview.getUint32(8, U.LE) as SType;
  }

  set sType(value: SType | number) {
    this.dataview.setUint32(8, value, U.LE);
  }

  static from() {
    // not implemented
  }
}

export class ChainedStructOut extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(16));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(16),
        );
      }
    }
  }

  get next(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set next(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get sType(): SType {
    return this.dataview.getUint32(8, U.LE) as SType;
  }

  set sType(value: SType | number) {
    this.dataview.setUint32(8, value, U.LE);
  }

  static from() {
    // not implemented
  }
}

export class InstanceExtras extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(40));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(40),
        );
      }
    }
  }

  get chain(): ChainedStruct {
    return new ChainedStruct(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 0, 16),
    );
  }

  set chain(value: ChainedStruct) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 16).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get backends(): number {
    return this.dataview.getUint32(16, U.LE);
  }

  set backends(value: number) {
    this.dataview.setUint32(16, value, U.LE);
  }

  get dx12ShaderCompiler(): Dx12Compiler {
    return this.dataview.getUint32(20, U.LE) as Dx12Compiler;
  }

  set dx12ShaderCompiler(value: Dx12Compiler | number) {
    this.dataview.setUint32(20, value, U.LE);
  }

  get dxilPath(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(24, U.LE));
  }

  set dxilPath(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      24,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get dxcPath(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(32, U.LE));
  }

  set dxcPath(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      32,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  static from() {
    // not implemented
  }
}

export class DeviceExtras extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(24));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(24),
        );
      }
    }
  }

  get chain(): ChainedStruct {
    return new ChainedStruct(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 0, 16),
    );
  }

  set chain(value: ChainedStruct) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 16).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get tracePath(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, U.LE));
  }

  set tracePath(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      16,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  static from() {
    // not implemented
  }
}

export class RequiredLimitsExtras extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(24));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(24),
        );
      }
    }
  }

  get chain(): ChainedStruct {
    return new ChainedStruct(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 0, 16),
    );
  }

  set chain(value: ChainedStruct) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 16).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get maxPushConstantSize(): number {
    return this.dataview.getUint32(16, U.LE);
  }

  set maxPushConstantSize(value: number) {
    this.dataview.setUint32(16, value, U.LE);
  }

  static from() {
    // not implemented
  }
}

export class SupportedLimitsExtras extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(24));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(24),
        );
      }
    }
  }

  get chain(): ChainedStructOut {
    return new ChainedStructOut(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 0, 16),
    );
  }

  set chain(value: ChainedStructOut) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 16).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get maxPushConstantSize(): number {
    return this.dataview.getUint32(16, U.LE);
  }

  set maxPushConstantSize(value: number) {
    this.dataview.setUint32(16, value, U.LE);
  }

  static from() {
    // not implemented
  }
}

export class PushConstantRange extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(12));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(12),
        );
      }
    }
  }

  get stages(): number {
    return this.dataview.getUint32(0, U.LE);
  }

  set stages(value: number) {
    this.dataview.setUint32(0, value, U.LE);
  }

  get start(): number {
    return this.dataview.getUint32(4, U.LE);
  }

  set start(value: number) {
    this.dataview.setUint32(4, value, U.LE);
  }

  get end(): number {
    return this.dataview.getUint32(8, U.LE);
  }

  set end(value: number) {
    this.dataview.setUint32(8, value, U.LE);
  }

  static from() {
    // not implemented
  }
}

export class PipelineLayoutExtras extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(32));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(32),
        );
      }
    }
  }

  get chain(): ChainedStruct {
    return new ChainedStruct(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 0, 16),
    );
  }

  set chain(value: ChainedStruct) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 16).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get pushConstantRangeCount(): number {
    return this.dataview.getUint32(16, U.LE);
  }

  set pushConstantRangeCount(value: number) {
    this.dataview.setUint32(16, value, U.LE);
  }

  get pushConstantRanges(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(24, U.LE));
  }

  set pushConstantRanges(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      24,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  static from() {
    // not implemented
  }
}

export class WrappedSubmissionIndex extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(16));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(16),
        );
      }
    }
  }

  get queue(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set queue(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get submissionIndex(): bigint {
    return this.dataview.getBigUint64(8, U.LE);
  }

  set submissionIndex(value: bigint | number) {
    this.dataview.setBigUint64(8, BigInt(value), U.LE);
  }

  static from() {
    // not implemented
  }
}

export class ShaderDefine extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(16));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(16),
        );
      }
    }
  }

  get name(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set name(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get value(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, U.LE));
  }

  set value(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      8,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  static from() {
    // not implemented
  }
}

export class ShaderModuleGLSLDescriptor extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(48));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(48),
        );
      }
    }
  }

  get chain(): ChainedStruct {
    return new ChainedStruct(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 0, 16),
    );
  }

  set chain(value: ChainedStruct) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 16).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get stage(): ShaderStage {
    return this.dataview.getUint32(16, U.LE) as ShaderStage;
  }

  set stage(value: ShaderStage | number) {
    this.dataview.setUint32(16, value, U.LE);
  }

  get code(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(24, U.LE));
  }

  set code(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      24,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get defineCount(): number {
    return this.dataview.getUint32(32, U.LE);
  }

  set defineCount(value: number) {
    this.dataview.setUint32(32, value, U.LE);
  }

  get defines(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(40, U.LE));
  }

  set defines(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      40,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  static from() {
    // not implemented
  }
}

export class StorageReport extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(32));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(32),
        );
      }
    }
  }

  get numOccupied(): bigint {
    return this.dataview.getBigUint64(0, U.LE);
  }

  set numOccupied(value: bigint | number) {
    this.dataview.setBigUint64(0, BigInt(value), U.LE);
  }

  get numVacant(): bigint {
    return this.dataview.getBigUint64(8, U.LE);
  }

  set numVacant(value: bigint | number) {
    this.dataview.setBigUint64(8, BigInt(value), U.LE);
  }

  get numError(): bigint {
    return this.dataview.getBigUint64(16, U.LE);
  }

  set numError(value: bigint | number) {
    this.dataview.setBigUint64(16, BigInt(value), U.LE);
  }

  get elementSize(): bigint {
    return this.dataview.getBigUint64(24, U.LE);
  }

  set elementSize(value: bigint | number) {
    this.dataview.setBigUint64(24, BigInt(value), U.LE);
  }

  static from() {
    // not implemented
  }
}

export class HubReport extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(480));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(480),
        );
      }
    }
  }

  get adapters(): StorageReport {
    return new StorageReport(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 0, 32),
    );
  }

  set adapters(value: StorageReport) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 32).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get devices(): StorageReport {
    return new StorageReport(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 32, 32),
    );
  }

  set devices(value: StorageReport) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 32).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get pipelineLayouts(): StorageReport {
    return new StorageReport(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 64, 32),
    );
  }

  set pipelineLayouts(value: StorageReport) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 32).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get shaderModules(): StorageReport {
    return new StorageReport(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 96, 32),
    );
  }

  set shaderModules(value: StorageReport) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 32).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get bindGroupLayouts(): StorageReport {
    return new StorageReport(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 128, 32),
    );
  }

  set bindGroupLayouts(value: StorageReport) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 32).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get bindGroups(): StorageReport {
    return new StorageReport(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 160, 32),
    );
  }

  set bindGroups(value: StorageReport) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 32).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get commandBuffers(): StorageReport {
    return new StorageReport(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 192, 32),
    );
  }

  set commandBuffers(value: StorageReport) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 32).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get renderBundles(): StorageReport {
    return new StorageReport(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 224, 32),
    );
  }

  set renderBundles(value: StorageReport) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 32).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get renderPipelines(): StorageReport {
    return new StorageReport(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 256, 32),
    );
  }

  set renderPipelines(value: StorageReport) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 32).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get computePipelines(): StorageReport {
    return new StorageReport(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 288, 32),
    );
  }

  set computePipelines(value: StorageReport) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 32).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get querySets(): StorageReport {
    return new StorageReport(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 320, 32),
    );
  }

  set querySets(value: StorageReport) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 32).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get buffers(): StorageReport {
    return new StorageReport(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 352, 32),
    );
  }

  set buffers(value: StorageReport) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 32).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get textures(): StorageReport {
    return new StorageReport(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 384, 32),
    );
  }

  set textures(value: StorageReport) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 32).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get textureViews(): StorageReport {
    return new StorageReport(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 416, 32),
    );
  }

  set textureViews(value: StorageReport) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 32).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get samplers(): StorageReport {
    return new StorageReport(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 448, 32),
    );
  }

  set samplers(value: StorageReport) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 32).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  static from() {
    // not implemented
  }
}

export class GlobalReport extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(2440));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(2440),
        );
      }
    }
  }

  get surfaces(): StorageReport {
    return new StorageReport(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 0, 32),
    );
  }

  set surfaces(value: StorageReport) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 32).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get backendType(): BackendType {
    return this.dataview.getUint32(32, U.LE) as BackendType;
  }

  set backendType(value: BackendType | number) {
    this.dataview.setUint32(32, value, U.LE);
  }

  get vulkan(): HubReport {
    return new HubReport(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 40, 480),
    );
  }

  set vulkan(value: HubReport) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 480).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get metal(): HubReport {
    return new HubReport(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 520, 480),
    );
  }

  set metal(value: HubReport) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 480).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get dx12(): HubReport {
    return new HubReport(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 1000, 480),
    );
  }

  set dx12(value: HubReport) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 480).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get dx11(): HubReport {
    return new HubReport(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 1480, 480),
    );
  }

  set dx11(value: HubReport) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 480).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get gl(): HubReport {
    return new HubReport(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 1960, 480),
    );
  }

  set gl(value: HubReport) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 480).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  static from() {
    // not implemented
  }
}

export class SurfaceCapabilities extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(48));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(48),
        );
      }
    }
  }

  get formatCount(): bigint {
    return this.dataview.getBigUint64(0, U.LE);
  }

  set formatCount(value: bigint | number) {
    this.dataview.setBigUint64(0, BigInt(value), U.LE);
  }

  get formats(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, U.LE));
  }

  set formats(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      8,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get presentModeCount(): bigint {
    return this.dataview.getBigUint64(16, U.LE);
  }

  set presentModeCount(value: bigint | number) {
    this.dataview.setBigUint64(16, BigInt(value), U.LE);
  }

  get presentModes(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(24, U.LE));
  }

  set presentModes(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      24,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get alphaModeCount(): bigint {
    return this.dataview.getBigUint64(32, U.LE);
  }

  set alphaModeCount(value: bigint | number) {
    this.dataview.setBigUint64(32, BigInt(value), U.LE);
  }

  get alphaModes(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(40, U.LE));
  }

  set alphaModes(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      40,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  static from() {
    // not implemented
  }
}

export class SwapChainDescriptorExtras extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(40));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(40),
        );
      }
    }
  }

  get chain(): ChainedStruct {
    return new ChainedStruct(
      new DataView(this.dataview.buffer, this.dataview.byteOffset + 0, 16),
    );
  }

  set chain(value: ChainedStruct) {
    new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, 16).set(
      new Uint8Array(
        value.dataview.buffer,
        value.dataview.byteOffset,
        value.dataview.byteLength,
      ),
    );
  }

  get alphaMode(): CompositeAlphaMode {
    return this.dataview.getUint32(16, U.LE) as CompositeAlphaMode;
  }

  set alphaMode(value: CompositeAlphaMode | number) {
    this.dataview.setUint32(16, value, U.LE);
  }

  get viewFormatCount(): bigint {
    return this.dataview.getBigUint64(24, U.LE);
  }

  set viewFormatCount(value: bigint | number) {
    this.dataview.setBigUint64(24, BigInt(value), U.LE);
  }

  get viewFormats(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(32, U.LE));
  }

  set viewFormats(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      32,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  static from() {
    // not implemented
  }
}

export class InstanceEnumerateAdapterOptions extends U.StructBase {
  dataview: DataView;
  constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
    super();
    if (dataviewOrPtr == null) {
      this.dataview = new DataView(new ArrayBuffer(16));
    } else {
      if (dataviewOrPtr instanceof DataView) {
        this.dataview = dataviewOrPtr;
      } else {
        this.dataview = new DataView(
          new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(16),
        );
      }
    }
  }

  get nextInChain(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, U.LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      0,
      BigInt(Deno.UnsafePointer.value(value)),
      U.LE,
    );
  }

  get backends(): number {
    return this.dataview.getUint32(8, U.LE);
  }

  set backends(value: number) {
    this.dataview.setUint32(8, value, U.LE);
  }

  static from() {
    // not implemented
  }
}

export const BufferMapCallbackDefinition = {
  "result": "void",
  "parameters": ["u32", "pointer"],
} as const;
export type BufferMapCallbackDefinition = typeof BufferMapCallbackDefinition;

export const CompilationInfoCallbackDefinition = {
  "result": "void",
  "parameters": ["u32", "pointer", "pointer"],
} as const;
export type CompilationInfoCallbackDefinition =
  typeof CompilationInfoCallbackDefinition;

export const CreateComputePipelineAsyncCallbackDefinition = {
  "result": "void",
  "parameters": ["u32", "pointer", "pointer", "pointer"],
} as const;
export type CreateComputePipelineAsyncCallbackDefinition =
  typeof CreateComputePipelineAsyncCallbackDefinition;

export const CreateRenderPipelineAsyncCallbackDefinition = {
  "result": "void",
  "parameters": ["u32", "pointer", "pointer", "pointer"],
} as const;
export type CreateRenderPipelineAsyncCallbackDefinition =
  typeof CreateRenderPipelineAsyncCallbackDefinition;

export const DeviceLostCallbackDefinition = {
  "result": "void",
  "parameters": ["u32", "pointer", "pointer"],
} as const;
export type DeviceLostCallbackDefinition = typeof DeviceLostCallbackDefinition;

export const ErrorCallbackDefinition = {
  "result": "void",
  "parameters": ["u32", "pointer", "pointer"],
} as const;
export type ErrorCallbackDefinition = typeof ErrorCallbackDefinition;

export const QueueWorkDoneCallbackDefinition = {
  "result": "void",
  "parameters": ["u32", "pointer"],
} as const;
export type QueueWorkDoneCallbackDefinition =
  typeof QueueWorkDoneCallbackDefinition;

export const RequestAdapterCallbackDefinition = {
  "result": "void",
  "parameters": ["u32", "pointer", "pointer", "pointer"],
} as const;
export type RequestAdapterCallbackDefinition =
  typeof RequestAdapterCallbackDefinition;

export const RequestDeviceCallbackDefinition = {
  "result": "void",
  "parameters": ["u32", "pointer", "pointer", "pointer"],
} as const;
export type RequestDeviceCallbackDefinition =
  typeof RequestDeviceCallbackDefinition;

export const ProcDeviceSetUncapturedErrorCallbackDefinition = {
  "result": "void",
  "parameters": ["pointer", "pointer", "pointer"],
} as const;
export type ProcDeviceSetUncapturedErrorCallbackDefinition =
  typeof ProcDeviceSetUncapturedErrorCallbackDefinition;

export const LogCallbackDefinition = {
  "result": "void",
  "parameters": ["u32", "pointer", "pointer"],
} as const;
export type LogCallbackDefinition = typeof LogCallbackDefinition;

export function createInstance(descriptor: Deno.PointerValue): Instance {
  const result = lib.symbols.wgpuCreateInstance(descriptor);
  return new Instance(result);
}

export function getProcAddress(
  device: Device,
  procName: Deno.PointerValue,
): Deno.PointerValue {
  const result = lib.symbols.wgpuGetProcAddress(device.pointer, procName);
  return result;
}

export function generateReport(
  instance: Instance,
  report: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuGenerateReport(instance.pointer, report);
  return result;
}

export function setLogCallback(): Promise<
  [LogLevel, Deno.PointerValue, Deno.PointerValue]
>;
export function setLogCallback(
  callback: (...args: [LogLevel, Deno.PointerValue, Deno.PointerValue]) => void,
): Deno.UnsafeCallback<LogCallbackDefinition>;
export function setLogCallback(
  callback: Deno.UnsafeCallback<LogCallbackDefinition>,
): void;
export function setLogCallback(callback: Deno.PointerValue): void;
export function setLogCallback(
  callback?:
    | ((...args: [LogLevel, Deno.PointerValue, Deno.PointerValue]) => void)
    | Deno.UnsafeCallback<LogCallbackDefinition>
    | Deno.PointerValue,
):
  | void
  | Promise<[LogLevel, Deno.PointerValue, Deno.PointerValue]>
  | Deno.UnsafeCallback<LogCallbackDefinition> {
  if (callback == null) {
    return new Promise((res) => {
      const cb = new Deno.UnsafeCallback(
        LogCallbackDefinition,
        (...args: U.CbParam<LogCallbackDefinition>) => {
          res(
            [args[0] as LogLevel, args[1], args[2]] as [
              LogLevel,
              Deno.PointerValue,
              Deno.PointerValue,
            ],
          );
        },
      );
      lib.symbols.wgpuSetLogCallback(cb.pointer, null);
    });
  } else if (callback instanceof Deno.UnsafeCallback) {
    lib.symbols.wgpuSetLogCallback(callback.pointer, null);
  } else if (callback instanceof Function) {
    const cb = new Deno.UnsafeCallback(
      LogCallbackDefinition,
      (...args: U.CbParam<LogCallbackDefinition>) => {
        callback(...[args[0] as LogLevel, args[1], args[2]]);
      },
    );
    lib.symbols.wgpuSetLogCallback(cb.pointer, null);
    return cb;
  } else {
    lib.symbols.wgpuSetLogCallback(callback, null);
  }
}

export function setLogLevel(level: LogLevel): void {
  const result = lib.symbols.wgpuSetLogLevel(level);
  return result;
}

export function getVersion(): number {
  const result = lib.symbols.wgpuGetVersion();
  return result;
}

export class Adapter extends U.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: U.ClassBase) {
    super(pointer, parent);
    U.registry.register(this, [pointer, lib.symbols.wgpuAdapterRelease]);
  }

  enumerateFeatures(features: Deno.PointerValue): number | bigint {
    const result = lib.symbols.wgpuAdapterEnumerateFeatures(
      this.pointer,
      features,
    );
    return result;
  }

  getLimits(limits: Deno.PointerValue): boolean {
    const result = lib.symbols.wgpuAdapterGetLimits(this.pointer, limits);
    return result == 1;
  }

  getProperties(properties: Deno.PointerValue): void {
    const result = lib.symbols.wgpuAdapterGetProperties(
      this.pointer,
      properties,
    );
    return result;
  }

  hasFeature(feature: FeatureName): boolean {
    const result = lib.symbols.wgpuAdapterHasFeature(this.pointer, feature);
    return result == 1;
  }

  requestDevice(
    descriptor: Deno.PointerValue,
  ): Promise<
    [RequestDeviceStatus, Device, Deno.PointerValue, Deno.PointerValue]
  >;
  requestDevice(
    descriptor: Deno.PointerValue,
    callback: (
      ...args: [
        RequestDeviceStatus,
        Device,
        Deno.PointerValue,
        Deno.PointerValue,
      ]
    ) => void,
  ): Deno.UnsafeCallback<RequestDeviceCallbackDefinition>;
  requestDevice(
    descriptor: Deno.PointerValue,
    callback: Deno.UnsafeCallback<RequestDeviceCallbackDefinition>,
  ): void;
  requestDevice(
    descriptor: Deno.PointerValue,
    callback: Deno.PointerValue,
  ): void;
  requestDevice(
    descriptor: Deno.PointerValue,
    callback?:
      | ((
        ...args: [
          RequestDeviceStatus,
          Device,
          Deno.PointerValue,
          Deno.PointerValue,
        ]
      ) => void)
      | Deno.UnsafeCallback<RequestDeviceCallbackDefinition>
      | Deno.PointerValue,
  ):
    | void
    | Promise<
      [RequestDeviceStatus, Device, Deno.PointerValue, Deno.PointerValue]
    >
    | Deno.UnsafeCallback<RequestDeviceCallbackDefinition> {
    if (callback == null) {
      return new Promise((res) => {
        const cb = new Deno.UnsafeCallback(
          RequestDeviceCallbackDefinition,
          (...args: U.CbParam<RequestDeviceCallbackDefinition>) => {
            res(
              [
                args[0] as RequestDeviceStatus,
                new Device(args[1], this),
                args[2],
                args[3],
              ] as [
                RequestDeviceStatus,
                Device,
                Deno.PointerValue,
                Deno.PointerValue,
              ],
            );
          },
        );
        lib.symbols.wgpuAdapterRequestDevice(
          this.pointer,
          descriptor,
          cb.pointer,
          null,
        );
      });
    } else if (callback instanceof Deno.UnsafeCallback) {
      lib.symbols.wgpuAdapterRequestDevice(
        this.pointer,
        descriptor,
        callback.pointer,
        null,
      );
    } else if (callback instanceof Function) {
      const cb = new Deno.UnsafeCallback(
        RequestDeviceCallbackDefinition,
        (...args: U.CbParam<RequestDeviceCallbackDefinition>) => {
          callback(...[
            args[0] as RequestDeviceStatus,
            new Device(args[1], this),
            args[2],
            args[3],
          ]);
        },
      );
      lib.symbols.wgpuAdapterRequestDevice(
        this.pointer,
        descriptor,
        cb.pointer,
        null,
      );
      return cb;
    } else {
      lib.symbols.wgpuAdapterRequestDevice(
        this.pointer,
        descriptor,
        callback,
        null,
      );
    }
  }
}

export class BindGroup extends U.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: U.ClassBase) {
    super(pointer, parent);
    U.registry.register(this, [pointer, lib.symbols.wgpuBindGroupRelease]);
  }

  setLabel(label: Deno.PointerValue): void {
    const result = lib.symbols.wgpuBindGroupSetLabel(this.pointer, label);
    return result;
  }
}

export class BindGroupLayout extends U.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: U.ClassBase) {
    super(pointer, parent);
    U.registry.register(this, [
      pointer,
      lib.symbols.wgpuBindGroupLayoutRelease,
    ]);
  }

  setLabel(label: Deno.PointerValue): void {
    const result = lib.symbols.wgpuBindGroupLayoutSetLabel(this.pointer, label);
    return result;
  }
}

export class Buffer extends U.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: U.ClassBase) {
    super(pointer, parent);
    U.registry.register(this, [pointer, lib.symbols.wgpuBufferRelease]);
  }

  destroy(): void {
    const result = lib.symbols.wgpuBufferDestroy(this.pointer);
    return result;
  }

  getConstMappedRange(
    offset: number | bigint,
    size: number | bigint,
  ): Deno.PointerValue {
    const result = lib.symbols.wgpuBufferGetConstMappedRange(
      this.pointer,
      offset,
      size,
    );
    return result;
  }

  getMapState(): BufferMapState {
    const result = lib.symbols.wgpuBufferGetMapState(this.pointer);
    return result as BufferMapState;
  }

  getMappedRange(
    offset: number | bigint,
    size: number | bigint,
  ): Deno.PointerValue {
    const result = lib.symbols.wgpuBufferGetMappedRange(
      this.pointer,
      offset,
      size,
    );
    return result;
  }

  getSize(): number | bigint {
    const result = lib.symbols.wgpuBufferGetSize(this.pointer);
    return result;
  }

  getUsage(): number {
    const result = lib.symbols.wgpuBufferGetUsage(this.pointer);
    return result;
  }

  mapAsync(
    mode: number,
    offset: number | bigint,
    size: number | bigint,
  ): Promise<[BufferMapAsyncStatus, Deno.PointerValue]>;
  mapAsync(
    mode: number,
    offset: number | bigint,
    size: number | bigint,
    callback: (...args: [BufferMapAsyncStatus, Deno.PointerValue]) => void,
  ): Deno.UnsafeCallback<BufferMapCallbackDefinition>;
  mapAsync(
    mode: number,
    offset: number | bigint,
    size: number | bigint,
    callback: Deno.UnsafeCallback<BufferMapCallbackDefinition>,
  ): void;
  mapAsync(
    mode: number,
    offset: number | bigint,
    size: number | bigint,
    callback: Deno.PointerValue,
  ): void;
  mapAsync(
    mode: number,
    offset: number | bigint,
    size: number | bigint,
    callback?:
      | ((...args: [BufferMapAsyncStatus, Deno.PointerValue]) => void)
      | Deno.UnsafeCallback<BufferMapCallbackDefinition>
      | Deno.PointerValue,
  ):
    | void
    | Promise<[BufferMapAsyncStatus, Deno.PointerValue]>
    | Deno.UnsafeCallback<BufferMapCallbackDefinition> {
    if (callback == null) {
      return new Promise((res) => {
        let data: [BufferMapAsyncStatus, Deno.PointerValue];
        const device = this.findInFamily(Device);
        if (!device) {
          throw new Error(
            "WGPU Object must be associated to Device to call async method.",
          );
        }
        const cb = new Deno.UnsafeCallback(
          BufferMapCallbackDefinition,
          (...args: U.CbParam<BufferMapCallbackDefinition>) => {
            data = [args[0] as BufferMapAsyncStatus, args[1]];
          },
        );
        lib.symbols.wgpuBufferMapAsync(
          this.pointer,
          mode,
          offset,
          size,
          cb.pointer,
          null,
        );
        const id = setInterval(() => {
          if (lib.symbols.wgpuDevicePoll(device.pointer, 0, null)) {
            clearInterval(id);
            res(data!);
          }
        }, 10);
      });
    } else if (callback instanceof Deno.UnsafeCallback) {
      lib.symbols.wgpuBufferMapAsync(
        this.pointer,
        mode,
        offset,
        size,
        callback.pointer,
        null,
      );
    } else if (callback instanceof Function) {
      const cb = new Deno.UnsafeCallback(
        BufferMapCallbackDefinition,
        (...args: U.CbParam<BufferMapCallbackDefinition>) => {
          callback(...[args[0] as BufferMapAsyncStatus, args[1]]);
        },
      );
      lib.symbols.wgpuBufferMapAsync(
        this.pointer,
        mode,
        offset,
        size,
        cb.pointer,
        null,
      );
      return cb;
    } else {
      lib.symbols.wgpuBufferMapAsync(
        this.pointer,
        mode,
        offset,
        size,
        callback,
        null,
      );
    }
  }

  setLabel(label: Deno.PointerValue): void {
    const result = lib.symbols.wgpuBufferSetLabel(this.pointer, label);
    return result;
  }

  unmap(): void {
    const result = lib.symbols.wgpuBufferUnmap(this.pointer);
    return result;
  }
}

export class CommandBuffer extends U.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: U.ClassBase) {
    super(pointer, parent);
    U.registry.register(this, [pointer, lib.symbols.wgpuCommandBufferRelease]);
  }

  setLabel(label: Deno.PointerValue): void {
    const result = lib.symbols.wgpuCommandBufferSetLabel(this.pointer, label);
    return result;
  }
}

export class CommandEncoder extends U.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: U.ClassBase) {
    super(pointer, parent);
    U.registry.register(this, [pointer, lib.symbols.wgpuCommandEncoderRelease]);
  }

  beginComputePass(descriptor: Deno.PointerValue): ComputePassEncoder {
    const result = lib.symbols.wgpuCommandEncoderBeginComputePass(
      this.pointer,
      descriptor,
    );
    return new ComputePassEncoder(result, this);
  }

  beginRenderPass(descriptor: Deno.PointerValue): RenderPassEncoder {
    const result = lib.symbols.wgpuCommandEncoderBeginRenderPass(
      this.pointer,
      descriptor,
    );
    return new RenderPassEncoder(result, this);
  }

  clearBuffer(
    buffer: Buffer,
    offset: number | bigint,
    size: number | bigint,
  ): void {
    const result = lib.symbols.wgpuCommandEncoderClearBuffer(
      this.pointer,
      buffer.pointer,
      offset,
      size,
    );
    return result;
  }

  copyBufferToBuffer(
    source: Buffer,
    sourceOffset: number | bigint,
    destination: Buffer,
    destinationOffset: number | bigint,
    size: number | bigint,
  ): void {
    const result = lib.symbols.wgpuCommandEncoderCopyBufferToBuffer(
      this.pointer,
      source.pointer,
      sourceOffset,
      destination.pointer,
      destinationOffset,
      size,
    );
    return result;
  }

  copyBufferToTexture(
    source: Deno.PointerValue,
    destination: Deno.PointerValue,
    copySize: Deno.PointerValue,
  ): void {
    const result = lib.symbols.wgpuCommandEncoderCopyBufferToTexture(
      this.pointer,
      source,
      destination,
      copySize,
    );
    return result;
  }

  copyTextureToBuffer(
    source: Deno.PointerValue,
    destination: Deno.PointerValue,
    copySize: Deno.PointerValue,
  ): void {
    const result = lib.symbols.wgpuCommandEncoderCopyTextureToBuffer(
      this.pointer,
      source,
      destination,
      copySize,
    );
    return result;
  }

  copyTextureToTexture(
    source: Deno.PointerValue,
    destination: Deno.PointerValue,
    copySize: Deno.PointerValue,
  ): void {
    const result = lib.symbols.wgpuCommandEncoderCopyTextureToTexture(
      this.pointer,
      source,
      destination,
      copySize,
    );
    return result;
  }

  finish(descriptor: Deno.PointerValue): CommandBuffer {
    const result = lib.symbols.wgpuCommandEncoderFinish(
      this.pointer,
      descriptor,
    );
    return new CommandBuffer(result, this);
  }

  insertDebugMarker(markerLabel: Deno.PointerValue): void {
    const result = lib.symbols.wgpuCommandEncoderInsertDebugMarker(
      this.pointer,
      markerLabel,
    );
    return result;
  }

  popDebugGroup(): void {
    const result = lib.symbols.wgpuCommandEncoderPopDebugGroup(this.pointer);
    return result;
  }

  pushDebugGroup(groupLabel: Deno.PointerValue): void {
    const result = lib.symbols.wgpuCommandEncoderPushDebugGroup(
      this.pointer,
      groupLabel,
    );
    return result;
  }

  resolveQuerySet(
    querySet: QuerySet,
    firstQuery: number,
    queryCount: number,
    destination: Buffer,
    destinationOffset: number | bigint,
  ): void {
    const result = lib.symbols.wgpuCommandEncoderResolveQuerySet(
      this.pointer,
      querySet.pointer,
      firstQuery,
      queryCount,
      destination.pointer,
      destinationOffset,
    );
    return result;
  }

  setLabel(label: Deno.PointerValue): void {
    const result = lib.symbols.wgpuCommandEncoderSetLabel(this.pointer, label);
    return result;
  }

  writeTimestamp(querySet: QuerySet, queryIndex: number): void {
    const result = lib.symbols.wgpuCommandEncoderWriteTimestamp(
      this.pointer,
      querySet.pointer,
      queryIndex,
    );
    return result;
  }
}

export class ComputePassEncoder extends U.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: U.ClassBase) {
    super(pointer, parent);
    U.registry.register(this, [
      pointer,
      lib.symbols.wgpuComputePassEncoderRelease,
    ]);
  }

  beginPipelineStatisticsQuery(querySet: QuerySet, queryIndex: number): void {
    const result = lib.symbols
      .wgpuComputePassEncoderBeginPipelineStatisticsQuery(
        this.pointer,
        querySet.pointer,
        queryIndex,
      );
    return result;
  }

  dispatchWorkgroups(
    workgroupCountX: number,
    workgroupCountY: number,
    workgroupCountZ: number,
  ): void {
    const result = lib.symbols.wgpuComputePassEncoderDispatchWorkgroups(
      this.pointer,
      workgroupCountX,
      workgroupCountY,
      workgroupCountZ,
    );
    return result;
  }

  dispatchWorkgroupsIndirect(
    indirectBuffer: Buffer,
    indirectOffset: number | bigint,
  ): void {
    const result = lib.symbols.wgpuComputePassEncoderDispatchWorkgroupsIndirect(
      this.pointer,
      indirectBuffer.pointer,
      indirectOffset,
    );
    return result;
  }

  end(): void {
    const result = lib.symbols.wgpuComputePassEncoderEnd(this.pointer);
    return result;
  }

  endPipelineStatisticsQuery(): void {
    const result = lib.symbols.wgpuComputePassEncoderEndPipelineStatisticsQuery(
      this.pointer,
    );
    return result;
  }

  insertDebugMarker(markerLabel: Deno.PointerValue): void {
    const result = lib.symbols.wgpuComputePassEncoderInsertDebugMarker(
      this.pointer,
      markerLabel,
    );
    return result;
  }

  popDebugGroup(): void {
    const result = lib.symbols.wgpuComputePassEncoderPopDebugGroup(
      this.pointer,
    );
    return result;
  }

  pushDebugGroup(groupLabel: Deno.PointerValue): void {
    const result = lib.symbols.wgpuComputePassEncoderPushDebugGroup(
      this.pointer,
      groupLabel,
    );
    return result;
  }

  setBindGroup(
    groupIndex: number,
    group: BindGroup,
    dynamicOffsetCount: number | bigint,
    dynamicOffsets: Deno.PointerValue,
  ): void {
    const result = lib.symbols.wgpuComputePassEncoderSetBindGroup(
      this.pointer,
      groupIndex,
      group.pointer,
      dynamicOffsetCount,
      dynamicOffsets,
    );
    return result;
  }

  setLabel(label: Deno.PointerValue): void {
    const result = lib.symbols.wgpuComputePassEncoderSetLabel(
      this.pointer,
      label,
    );
    return result;
  }

  setPipeline(pipeline: ComputePipeline): void {
    const result = lib.symbols.wgpuComputePassEncoderSetPipeline(
      this.pointer,
      pipeline.pointer,
    );
    return result;
  }
}

export class ComputePipeline extends U.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: U.ClassBase) {
    super(pointer, parent);
    U.registry.register(this, [
      pointer,
      lib.symbols.wgpuComputePipelineRelease,
    ]);
  }

  getBindGroupLayout(groupIndex: number): BindGroupLayout {
    const result = lib.symbols.wgpuComputePipelineGetBindGroupLayout(
      this.pointer,
      groupIndex,
    );
    return new BindGroupLayout(result, this);
  }

  setLabel(label: Deno.PointerValue): void {
    const result = lib.symbols.wgpuComputePipelineSetLabel(this.pointer, label);
    return result;
  }
}

export class Device extends U.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: U.ClassBase) {
    super(pointer, parent);
    U.registry.register(this, [pointer, lib.symbols.wgpuDeviceRelease]);
  }

  createBindGroup(descriptor: Deno.PointerValue): BindGroup {
    const result = lib.symbols.wgpuDeviceCreateBindGroup(
      this.pointer,
      descriptor,
    );
    return new BindGroup(result, this);
  }

  createBindGroupLayout(descriptor: Deno.PointerValue): BindGroupLayout {
    const result = lib.symbols.wgpuDeviceCreateBindGroupLayout(
      this.pointer,
      descriptor,
    );
    return new BindGroupLayout(result, this);
  }

  createBuffer(descriptor: Deno.PointerValue): Buffer {
    const result = lib.symbols.wgpuDeviceCreateBuffer(this.pointer, descriptor);
    return new Buffer(result, this);
  }

  createCommandEncoder(descriptor: Deno.PointerValue): CommandEncoder {
    const result = lib.symbols.wgpuDeviceCreateCommandEncoder(
      this.pointer,
      descriptor,
    );
    return new CommandEncoder(result, this);
  }

  createComputePipeline(descriptor: Deno.PointerValue): ComputePipeline {
    const result = lib.symbols.wgpuDeviceCreateComputePipeline(
      this.pointer,
      descriptor,
    );
    return new ComputePipeline(result, this);
  }

  createComputePipelineAsync(
    descriptor: Deno.PointerValue,
  ): Promise<
    [
      CreatePipelineAsyncStatus,
      ComputePipeline,
      Deno.PointerValue,
      Deno.PointerValue,
    ]
  >;
  createComputePipelineAsync(
    descriptor: Deno.PointerValue,
    callback: (
      ...args: [
        CreatePipelineAsyncStatus,
        ComputePipeline,
        Deno.PointerValue,
        Deno.PointerValue,
      ]
    ) => void,
  ): Deno.UnsafeCallback<CreateComputePipelineAsyncCallbackDefinition>;
  createComputePipelineAsync(
    descriptor: Deno.PointerValue,
    callback: Deno.UnsafeCallback<CreateComputePipelineAsyncCallbackDefinition>,
  ): void;
  createComputePipelineAsync(
    descriptor: Deno.PointerValue,
    callback: Deno.PointerValue,
  ): void;
  createComputePipelineAsync(
    descriptor: Deno.PointerValue,
    callback?:
      | ((
        ...args: [
          CreatePipelineAsyncStatus,
          ComputePipeline,
          Deno.PointerValue,
          Deno.PointerValue,
        ]
      ) => void)
      | Deno.UnsafeCallback<CreateComputePipelineAsyncCallbackDefinition>
      | Deno.PointerValue,
  ):
    | void
    | Promise<
      [
        CreatePipelineAsyncStatus,
        ComputePipeline,
        Deno.PointerValue,
        Deno.PointerValue,
      ]
    >
    | Deno.UnsafeCallback<CreateComputePipelineAsyncCallbackDefinition> {
    if (callback == null) {
      return new Promise((res) => {
        let data: [
          CreatePipelineAsyncStatus,
          ComputePipeline,
          Deno.PointerValue,
          Deno.PointerValue,
        ];
        const device = this.findInFamily(Device);
        if (!device) {
          throw new Error(
            "WGPU Object must be associated to Device to call async method.",
          );
        }
        const cb = new Deno.UnsafeCallback(
          CreateComputePipelineAsyncCallbackDefinition,
          (
            ...args: U.CbParam<CreateComputePipelineAsyncCallbackDefinition>
          ) => {
            data = [
              args[0] as CreatePipelineAsyncStatus,
              new ComputePipeline(args[1], this),
              args[2],
              args[3],
            ];
          },
        );
        lib.symbols.wgpuDeviceCreateComputePipelineAsync(
          this.pointer,
          descriptor,
          cb.pointer,
          null,
        );
        const id = setInterval(() => {
          if (lib.symbols.wgpuDevicePoll(device.pointer, 0, null)) {
            clearInterval(id);
            res(data!);
          }
        }, 10);
      });
    } else if (callback instanceof Deno.UnsafeCallback) {
      lib.symbols.wgpuDeviceCreateComputePipelineAsync(
        this.pointer,
        descriptor,
        callback.pointer,
        null,
      );
    } else if (callback instanceof Function) {
      const cb = new Deno.UnsafeCallback(
        CreateComputePipelineAsyncCallbackDefinition,
        (...args: U.CbParam<CreateComputePipelineAsyncCallbackDefinition>) => {
          callback(...[
            args[0] as CreatePipelineAsyncStatus,
            new ComputePipeline(args[1], this),
            args[2],
            args[3],
          ]);
        },
      );
      lib.symbols.wgpuDeviceCreateComputePipelineAsync(
        this.pointer,
        descriptor,
        cb.pointer,
        null,
      );
      return cb;
    } else {
      lib.symbols.wgpuDeviceCreateComputePipelineAsync(
        this.pointer,
        descriptor,
        callback,
        null,
      );
    }
  }

  createPipelineLayout(descriptor: Deno.PointerValue): PipelineLayout {
    const result = lib.symbols.wgpuDeviceCreatePipelineLayout(
      this.pointer,
      descriptor,
    );
    return new PipelineLayout(result, this);
  }

  createQuerySet(descriptor: Deno.PointerValue): QuerySet {
    const result = lib.symbols.wgpuDeviceCreateQuerySet(
      this.pointer,
      descriptor,
    );
    return new QuerySet(result, this);
  }

  createRenderBundleEncoder(
    descriptor: Deno.PointerValue,
  ): RenderBundleEncoder {
    const result = lib.symbols.wgpuDeviceCreateRenderBundleEncoder(
      this.pointer,
      descriptor,
    );
    return new RenderBundleEncoder(result, this);
  }

  createRenderPipeline(descriptor: Deno.PointerValue): RenderPipeline {
    const result = lib.symbols.wgpuDeviceCreateRenderPipeline(
      this.pointer,
      descriptor,
    );
    return new RenderPipeline(result, this);
  }

  createRenderPipelineAsync(
    descriptor: Deno.PointerValue,
  ): Promise<
    [
      CreatePipelineAsyncStatus,
      RenderPipeline,
      Deno.PointerValue,
      Deno.PointerValue,
    ]
  >;
  createRenderPipelineAsync(
    descriptor: Deno.PointerValue,
    callback: (
      ...args: [
        CreatePipelineAsyncStatus,
        RenderPipeline,
        Deno.PointerValue,
        Deno.PointerValue,
      ]
    ) => void,
  ): Deno.UnsafeCallback<CreateRenderPipelineAsyncCallbackDefinition>;
  createRenderPipelineAsync(
    descriptor: Deno.PointerValue,
    callback: Deno.UnsafeCallback<CreateRenderPipelineAsyncCallbackDefinition>,
  ): void;
  createRenderPipelineAsync(
    descriptor: Deno.PointerValue,
    callback: Deno.PointerValue,
  ): void;
  createRenderPipelineAsync(
    descriptor: Deno.PointerValue,
    callback?:
      | ((
        ...args: [
          CreatePipelineAsyncStatus,
          RenderPipeline,
          Deno.PointerValue,
          Deno.PointerValue,
        ]
      ) => void)
      | Deno.UnsafeCallback<CreateRenderPipelineAsyncCallbackDefinition>
      | Deno.PointerValue,
  ):
    | void
    | Promise<
      [
        CreatePipelineAsyncStatus,
        RenderPipeline,
        Deno.PointerValue,
        Deno.PointerValue,
      ]
    >
    | Deno.UnsafeCallback<CreateRenderPipelineAsyncCallbackDefinition> {
    if (callback == null) {
      return new Promise((res) => {
        let data: [
          CreatePipelineAsyncStatus,
          RenderPipeline,
          Deno.PointerValue,
          Deno.PointerValue,
        ];
        const device = this.findInFamily(Device);
        if (!device) {
          throw new Error(
            "WGPU Object must be associated to Device to call async method.",
          );
        }
        const cb = new Deno.UnsafeCallback(
          CreateRenderPipelineAsyncCallbackDefinition,
          (...args: U.CbParam<CreateRenderPipelineAsyncCallbackDefinition>) => {
            data = [
              args[0] as CreatePipelineAsyncStatus,
              new RenderPipeline(args[1], this),
              args[2],
              args[3],
            ];
          },
        );
        lib.symbols.wgpuDeviceCreateRenderPipelineAsync(
          this.pointer,
          descriptor,
          cb.pointer,
          null,
        );
        const id = setInterval(() => {
          if (lib.symbols.wgpuDevicePoll(device.pointer, 0, null)) {
            clearInterval(id);
            res(data!);
          }
        }, 10);
      });
    } else if (callback instanceof Deno.UnsafeCallback) {
      lib.symbols.wgpuDeviceCreateRenderPipelineAsync(
        this.pointer,
        descriptor,
        callback.pointer,
        null,
      );
    } else if (callback instanceof Function) {
      const cb = new Deno.UnsafeCallback(
        CreateRenderPipelineAsyncCallbackDefinition,
        (...args: U.CbParam<CreateRenderPipelineAsyncCallbackDefinition>) => {
          callback(...[
            args[0] as CreatePipelineAsyncStatus,
            new RenderPipeline(args[1], this),
            args[2],
            args[3],
          ]);
        },
      );
      lib.symbols.wgpuDeviceCreateRenderPipelineAsync(
        this.pointer,
        descriptor,
        cb.pointer,
        null,
      );
      return cb;
    } else {
      lib.symbols.wgpuDeviceCreateRenderPipelineAsync(
        this.pointer,
        descriptor,
        callback,
        null,
      );
    }
  }

  createSampler(descriptor: Deno.PointerValue): Sampler {
    const result = lib.symbols.wgpuDeviceCreateSampler(
      this.pointer,
      descriptor,
    );
    return new Sampler(result, this);
  }

  createShaderModule(descriptor: Deno.PointerValue): ShaderModule {
    const result = lib.symbols.wgpuDeviceCreateShaderModule(
      this.pointer,
      descriptor,
    );
    return new ShaderModule(result, this);
  }

  createSwapChain(surface: Surface, descriptor: Deno.PointerValue): SwapChain {
    const result = lib.symbols.wgpuDeviceCreateSwapChain(
      this.pointer,
      surface.pointer,
      descriptor,
    );
    return new SwapChain(result, this);
  }

  createTexture(descriptor: Deno.PointerValue): Texture {
    const result = lib.symbols.wgpuDeviceCreateTexture(
      this.pointer,
      descriptor,
    );
    return new Texture(result, this);
  }

  destroy(): void {
    const result = lib.symbols.wgpuDeviceDestroy(this.pointer);
    return result;
  }

  enumerateFeatures(features: Deno.PointerValue): number | bigint {
    const result = lib.symbols.wgpuDeviceEnumerateFeatures(
      this.pointer,
      features,
    );
    return result;
  }

  getLimits(limits: Deno.PointerValue): boolean {
    const result = lib.symbols.wgpuDeviceGetLimits(this.pointer, limits);
    return result == 1;
  }

  getQueue(): Queue {
    const result = lib.symbols.wgpuDeviceGetQueue(this.pointer);
    return new Queue(result, this);
  }

  hasFeature(feature: FeatureName): boolean {
    const result = lib.symbols.wgpuDeviceHasFeature(this.pointer, feature);
    return result == 1;
  }

  popErrorScope(): Promise<[ErrorType, Deno.PointerValue, Deno.PointerValue]>;
  popErrorScope(
    callback: (
      ...args: [ErrorType, Deno.PointerValue, Deno.PointerValue]
    ) => void,
  ): Deno.UnsafeCallback<ErrorCallbackDefinition>;
  popErrorScope(callback: Deno.UnsafeCallback<ErrorCallbackDefinition>): void;
  popErrorScope(callback: Deno.PointerValue): void;
  popErrorScope(
    callback?:
      | ((...args: [ErrorType, Deno.PointerValue, Deno.PointerValue]) => void)
      | Deno.UnsafeCallback<ErrorCallbackDefinition>
      | Deno.PointerValue,
  ):
    | void
    | Promise<[ErrorType, Deno.PointerValue, Deno.PointerValue]>
    | Deno.UnsafeCallback<ErrorCallbackDefinition> {
    if (callback == null) {
      return new Promise((res) => {
        const cb = new Deno.UnsafeCallback(
          ErrorCallbackDefinition,
          (...args: U.CbParam<ErrorCallbackDefinition>) => {
            res(
              [args[0] as ErrorType, args[1], args[2]] as [
                ErrorType,
                Deno.PointerValue,
                Deno.PointerValue,
              ],
            );
          },
        );
        lib.symbols.wgpuDevicePopErrorScope(this.pointer, cb.pointer, null);
      });
    } else if (callback instanceof Deno.UnsafeCallback) {
      lib.symbols.wgpuDevicePopErrorScope(this.pointer, callback.pointer, null);
    } else if (callback instanceof Function) {
      const cb = new Deno.UnsafeCallback(
        ErrorCallbackDefinition,
        (...args: U.CbParam<ErrorCallbackDefinition>) => {
          callback(...[args[0] as ErrorType, args[1], args[2]]);
        },
      );
      lib.symbols.wgpuDevicePopErrorScope(this.pointer, cb.pointer, null);
      return cb;
    } else {
      lib.symbols.wgpuDevicePopErrorScope(this.pointer, callback, null);
    }
  }

  pushErrorScope(filter: ErrorFilter): void {
    const result = lib.symbols.wgpuDevicePushErrorScope(this.pointer, filter);
    return result;
  }

  setLabel(label: Deno.PointerValue): void {
    const result = lib.symbols.wgpuDeviceSetLabel(this.pointer, label);
    return result;
  }

  setUncapturedErrorCallback(): Promise<
    [ErrorType, Deno.PointerValue, Deno.PointerValue]
  >;
  setUncapturedErrorCallback(
    callback: (
      ...args: [ErrorType, Deno.PointerValue, Deno.PointerValue]
    ) => void,
  ): Deno.UnsafeCallback<ErrorCallbackDefinition>;
  setUncapturedErrorCallback(
    callback: Deno.UnsafeCallback<ErrorCallbackDefinition>,
  ): void;
  setUncapturedErrorCallback(callback: Deno.PointerValue): void;
  setUncapturedErrorCallback(
    callback?:
      | ((...args: [ErrorType, Deno.PointerValue, Deno.PointerValue]) => void)
      | Deno.UnsafeCallback<ErrorCallbackDefinition>
      | Deno.PointerValue,
  ):
    | void
    | Promise<[ErrorType, Deno.PointerValue, Deno.PointerValue]>
    | Deno.UnsafeCallback<ErrorCallbackDefinition> {
    if (callback == null) {
      return new Promise((res) => {
        const cb = new Deno.UnsafeCallback(
          ErrorCallbackDefinition,
          (...args: U.CbParam<ErrorCallbackDefinition>) => {
            res(
              [args[0] as ErrorType, args[1], args[2]] as [
                ErrorType,
                Deno.PointerValue,
                Deno.PointerValue,
              ],
            );
          },
        );
        lib.symbols.wgpuDeviceSetUncapturedErrorCallback(
          this.pointer,
          cb.pointer,
          null,
        );
      });
    } else if (callback instanceof Deno.UnsafeCallback) {
      lib.symbols.wgpuDeviceSetUncapturedErrorCallback(
        this.pointer,
        callback.pointer,
        null,
      );
    } else if (callback instanceof Function) {
      const cb = new Deno.UnsafeCallback(
        ErrorCallbackDefinition,
        (...args: U.CbParam<ErrorCallbackDefinition>) => {
          callback(...[args[0] as ErrorType, args[1], args[2]]);
        },
      );
      lib.symbols.wgpuDeviceSetUncapturedErrorCallback(
        this.pointer,
        cb.pointer,
        null,
      );
      return cb;
    } else {
      lib.symbols.wgpuDeviceSetUncapturedErrorCallback(
        this.pointer,
        callback,
        null,
      );
    }
  }

  poll(wait: boolean, wrappedSubmissionIndex: Deno.PointerValue): boolean {
    const result = lib.symbols.wgpuDevicePoll(
      this.pointer,
      wait ? 1 : 0,
      wrappedSubmissionIndex,
    );
    return result == 1;
  }
}

export class Instance extends U.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: U.ClassBase) {
    super(pointer, parent);
    U.registry.register(this, [pointer, lib.symbols.wgpuInstanceRelease]);
  }

  createSurface(descriptor: Deno.PointerValue): Surface {
    const result = lib.symbols.wgpuInstanceCreateSurface(
      this.pointer,
      descriptor,
    );
    return new Surface(result, this);
  }

  processEvents(): void {
    const result = lib.symbols.wgpuInstanceProcessEvents(this.pointer);
    return result;
  }

  requestAdapter(
    options: Deno.PointerValue,
  ): Promise<
    [RequestAdapterStatus, Adapter, Deno.PointerValue, Deno.PointerValue]
  >;
  requestAdapter(
    options: Deno.PointerValue,
    callback: (
      ...args: [
        RequestAdapterStatus,
        Adapter,
        Deno.PointerValue,
        Deno.PointerValue,
      ]
    ) => void,
  ): Deno.UnsafeCallback<RequestAdapterCallbackDefinition>;
  requestAdapter(
    options: Deno.PointerValue,
    callback: Deno.UnsafeCallback<RequestAdapterCallbackDefinition>,
  ): void;
  requestAdapter(options: Deno.PointerValue, callback: Deno.PointerValue): void;
  requestAdapter(
    options: Deno.PointerValue,
    callback?:
      | ((
        ...args: [
          RequestAdapterStatus,
          Adapter,
          Deno.PointerValue,
          Deno.PointerValue,
        ]
      ) => void)
      | Deno.UnsafeCallback<RequestAdapterCallbackDefinition>
      | Deno.PointerValue,
  ):
    | void
    | Promise<
      [RequestAdapterStatus, Adapter, Deno.PointerValue, Deno.PointerValue]
    >
    | Deno.UnsafeCallback<RequestAdapterCallbackDefinition> {
    if (callback == null) {
      return new Promise((res) => {
        const cb = new Deno.UnsafeCallback(
          RequestAdapterCallbackDefinition,
          (...args: U.CbParam<RequestAdapterCallbackDefinition>) => {
            res(
              [
                args[0] as RequestAdapterStatus,
                new Adapter(args[1], this),
                args[2],
                args[3],
              ] as [
                RequestAdapterStatus,
                Adapter,
                Deno.PointerValue,
                Deno.PointerValue,
              ],
            );
          },
        );
        lib.symbols.wgpuInstanceRequestAdapter(
          this.pointer,
          options,
          cb.pointer,
          null,
        );
      });
    } else if (callback instanceof Deno.UnsafeCallback) {
      lib.symbols.wgpuInstanceRequestAdapter(
        this.pointer,
        options,
        callback.pointer,
        null,
      );
    } else if (callback instanceof Function) {
      const cb = new Deno.UnsafeCallback(
        RequestAdapterCallbackDefinition,
        (...args: U.CbParam<RequestAdapterCallbackDefinition>) => {
          callback(...[
            args[0] as RequestAdapterStatus,
            new Adapter(args[1], this),
            args[2],
            args[3],
          ]);
        },
      );
      lib.symbols.wgpuInstanceRequestAdapter(
        this.pointer,
        options,
        cb.pointer,
        null,
      );
      return cb;
    } else {
      lib.symbols.wgpuInstanceRequestAdapter(
        this.pointer,
        options,
        callback,
        null,
      );
    }
  }

  enumerateAdapters(
    options: Deno.PointerValue,
    adapters: Deno.PointerValue,
  ): number | bigint {
    const result = lib.symbols.wgpuInstanceEnumerateAdapters(
      this.pointer,
      options,
      adapters,
    );
    return result;
  }
}

export class PipelineLayout extends U.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: U.ClassBase) {
    super(pointer, parent);
    U.registry.register(this, [pointer, lib.symbols.wgpuPipelineLayoutRelease]);
  }

  setLabel(label: Deno.PointerValue): void {
    const result = lib.symbols.wgpuPipelineLayoutSetLabel(this.pointer, label);
    return result;
  }
}

export class QuerySet extends U.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: U.ClassBase) {
    super(pointer, parent);
    U.registry.register(this, [pointer, lib.symbols.wgpuQuerySetRelease]);
  }

  destroy(): void {
    const result = lib.symbols.wgpuQuerySetDestroy(this.pointer);
    return result;
  }

  getCount(): number {
    const result = lib.symbols.wgpuQuerySetGetCount(this.pointer);
    return result;
  }

  getType(): QueryType {
    const result = lib.symbols.wgpuQuerySetGetType(this.pointer);
    return result as QueryType;
  }

  setLabel(label: Deno.PointerValue): void {
    const result = lib.symbols.wgpuQuerySetSetLabel(this.pointer, label);
    return result;
  }
}

export class Queue extends U.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: U.ClassBase) {
    super(pointer, parent);
    U.registry.register(this, [pointer, lib.symbols.wgpuQueueRelease]);
  }
  onSubmittedWorkDone(): Promise<[QueueWorkDoneStatus, Deno.PointerValue]>;
  onSubmittedWorkDone(
    callback: (...args: [QueueWorkDoneStatus, Deno.PointerValue]) => void,
  ): Deno.UnsafeCallback<QueueWorkDoneCallbackDefinition>;
  onSubmittedWorkDone(
    callback: Deno.UnsafeCallback<QueueWorkDoneCallbackDefinition>,
  ): void;
  onSubmittedWorkDone(callback: Deno.PointerValue): void;
  onSubmittedWorkDone(
    callback?:
      | ((...args: [QueueWorkDoneStatus, Deno.PointerValue]) => void)
      | Deno.UnsafeCallback<QueueWorkDoneCallbackDefinition>
      | Deno.PointerValue,
  ):
    | void
    | Promise<[QueueWorkDoneStatus, Deno.PointerValue]>
    | Deno.UnsafeCallback<QueueWorkDoneCallbackDefinition> {
    if (callback == null) {
      return new Promise((res) => {
        const cb = new Deno.UnsafeCallback(
          QueueWorkDoneCallbackDefinition,
          (...args: U.CbParam<QueueWorkDoneCallbackDefinition>) => {
            res(
              [args[0] as QueueWorkDoneStatus, args[1]] as [
                QueueWorkDoneStatus,
                Deno.PointerValue,
              ],
            );
          },
        );
        lib.symbols.wgpuQueueOnSubmittedWorkDone(
          this.pointer,
          cb.pointer,
          null,
        );
      });
    } else if (callback instanceof Deno.UnsafeCallback) {
      lib.symbols.wgpuQueueOnSubmittedWorkDone(
        this.pointer,
        callback.pointer,
        null,
      );
    } else if (callback instanceof Function) {
      const cb = new Deno.UnsafeCallback(
        QueueWorkDoneCallbackDefinition,
        (...args: U.CbParam<QueueWorkDoneCallbackDefinition>) => {
          callback(...[args[0] as QueueWorkDoneStatus, args[1]]);
        },
      );
      lib.symbols.wgpuQueueOnSubmittedWorkDone(this.pointer, cb.pointer, null);
      return cb;
    } else {
      lib.symbols.wgpuQueueOnSubmittedWorkDone(this.pointer, callback, null);
    }
  }

  setLabel(label: Deno.PointerValue): void {
    const result = lib.symbols.wgpuQueueSetLabel(this.pointer, label);
    return result;
  }

  submit(commandCount: number | bigint, commands: Deno.PointerValue): void {
    const result = lib.symbols.wgpuQueueSubmit(
      this.pointer,
      commandCount,
      commands,
    );
    return result;
  }

  writeBuffer(
    buffer: Buffer,
    bufferOffset: number | bigint,
    data: Deno.PointerValue,
    size: number | bigint,
  ): void {
    const result = lib.symbols.wgpuQueueWriteBuffer(
      this.pointer,
      buffer.pointer,
      bufferOffset,
      data,
      size,
    );
    return result;
  }

  writeTexture(
    destination: Deno.PointerValue,
    data: Deno.PointerValue,
    dataSize: number | bigint,
    dataLayout: Deno.PointerValue,
    writeSize: Deno.PointerValue,
  ): void {
    const result = lib.symbols.wgpuQueueWriteTexture(
      this.pointer,
      destination,
      data,
      dataSize,
      dataLayout,
      writeSize,
    );
    return result;
  }

  submitForIndex(
    commandCount: number | bigint,
    commands: Deno.PointerValue,
  ): number | bigint {
    const result = lib.symbols.wgpuQueueSubmitForIndex(
      this.pointer,
      commandCount,
      commands,
    );
    return result;
  }
}

export class RenderBundle extends U.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: U.ClassBase) {
    super(pointer, parent);
    U.registry.register(this, [pointer, lib.symbols.wgpuRenderBundleRelease]);
  }

  setLabel(label: Deno.PointerValue): void {
    const result = lib.symbols.wgpuRenderBundleSetLabel(this.pointer, label);
    return result;
  }
}

export class RenderBundleEncoder extends U.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: U.ClassBase) {
    super(pointer, parent);
    U.registry.register(this, [
      pointer,
      lib.symbols.wgpuRenderBundleEncoderRelease,
    ]);
  }

  draw(
    vertexCount: number,
    instanceCount: number,
    firstVertex: number,
    firstInstance: number,
  ): void {
    const result = lib.symbols.wgpuRenderBundleEncoderDraw(
      this.pointer,
      vertexCount,
      instanceCount,
      firstVertex,
      firstInstance,
    );
    return result;
  }

  drawIndexed(
    indexCount: number,
    instanceCount: number,
    firstIndex: number,
    baseVertex: number,
    firstInstance: number,
  ): void {
    const result = lib.symbols.wgpuRenderBundleEncoderDrawIndexed(
      this.pointer,
      indexCount,
      instanceCount,
      firstIndex,
      baseVertex,
      firstInstance,
    );
    return result;
  }

  drawIndexedIndirect(
    indirectBuffer: Buffer,
    indirectOffset: number | bigint,
  ): void {
    const result = lib.symbols.wgpuRenderBundleEncoderDrawIndexedIndirect(
      this.pointer,
      indirectBuffer.pointer,
      indirectOffset,
    );
    return result;
  }

  drawIndirect(indirectBuffer: Buffer, indirectOffset: number | bigint): void {
    const result = lib.symbols.wgpuRenderBundleEncoderDrawIndirect(
      this.pointer,
      indirectBuffer.pointer,
      indirectOffset,
    );
    return result;
  }

  finish(descriptor: Deno.PointerValue): RenderBundle {
    const result = lib.symbols.wgpuRenderBundleEncoderFinish(
      this.pointer,
      descriptor,
    );
    return new RenderBundle(result, this);
  }

  insertDebugMarker(markerLabel: Deno.PointerValue): void {
    const result = lib.symbols.wgpuRenderBundleEncoderInsertDebugMarker(
      this.pointer,
      markerLabel,
    );
    return result;
  }

  popDebugGroup(): void {
    const result = lib.symbols.wgpuRenderBundleEncoderPopDebugGroup(
      this.pointer,
    );
    return result;
  }

  pushDebugGroup(groupLabel: Deno.PointerValue): void {
    const result = lib.symbols.wgpuRenderBundleEncoderPushDebugGroup(
      this.pointer,
      groupLabel,
    );
    return result;
  }

  setBindGroup(
    groupIndex: number,
    group: BindGroup,
    dynamicOffsetCount: number | bigint,
    dynamicOffsets: Deno.PointerValue,
  ): void {
    const result = lib.symbols.wgpuRenderBundleEncoderSetBindGroup(
      this.pointer,
      groupIndex,
      group.pointer,
      dynamicOffsetCount,
      dynamicOffsets,
    );
    return result;
  }

  setIndexBuffer(
    buffer: Buffer,
    format: IndexFormat,
    offset: number | bigint,
    size: number | bigint,
  ): void {
    const result = lib.symbols.wgpuRenderBundleEncoderSetIndexBuffer(
      this.pointer,
      buffer.pointer,
      format,
      offset,
      size,
    );
    return result;
  }

  setLabel(label: Deno.PointerValue): void {
    const result = lib.symbols.wgpuRenderBundleEncoderSetLabel(
      this.pointer,
      label,
    );
    return result;
  }

  setPipeline(pipeline: RenderPipeline): void {
    const result = lib.symbols.wgpuRenderBundleEncoderSetPipeline(
      this.pointer,
      pipeline.pointer,
    );
    return result;
  }

  setVertexBuffer(
    slot: number,
    buffer: Buffer,
    offset: number | bigint,
    size: number | bigint,
  ): void {
    const result = lib.symbols.wgpuRenderBundleEncoderSetVertexBuffer(
      this.pointer,
      slot,
      buffer.pointer,
      offset,
      size,
    );
    return result;
  }
}

export class RenderPassEncoder extends U.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: U.ClassBase) {
    super(pointer, parent);
    U.registry.register(this, [
      pointer,
      lib.symbols.wgpuRenderPassEncoderRelease,
    ]);
  }

  beginOcclusionQuery(queryIndex: number): void {
    const result = lib.symbols.wgpuRenderPassEncoderBeginOcclusionQuery(
      this.pointer,
      queryIndex,
    );
    return result;
  }

  beginPipelineStatisticsQuery(querySet: QuerySet, queryIndex: number): void {
    const result = lib.symbols
      .wgpuRenderPassEncoderBeginPipelineStatisticsQuery(
        this.pointer,
        querySet.pointer,
        queryIndex,
      );
    return result;
  }

  draw(
    vertexCount: number,
    instanceCount: number,
    firstVertex: number,
    firstInstance: number,
  ): void {
    const result = lib.symbols.wgpuRenderPassEncoderDraw(
      this.pointer,
      vertexCount,
      instanceCount,
      firstVertex,
      firstInstance,
    );
    return result;
  }

  drawIndexed(
    indexCount: number,
    instanceCount: number,
    firstIndex: number,
    baseVertex: number,
    firstInstance: number,
  ): void {
    const result = lib.symbols.wgpuRenderPassEncoderDrawIndexed(
      this.pointer,
      indexCount,
      instanceCount,
      firstIndex,
      baseVertex,
      firstInstance,
    );
    return result;
  }

  drawIndexedIndirect(
    indirectBuffer: Buffer,
    indirectOffset: number | bigint,
  ): void {
    const result = lib.symbols.wgpuRenderPassEncoderDrawIndexedIndirect(
      this.pointer,
      indirectBuffer.pointer,
      indirectOffset,
    );
    return result;
  }

  drawIndirect(indirectBuffer: Buffer, indirectOffset: number | bigint): void {
    const result = lib.symbols.wgpuRenderPassEncoderDrawIndirect(
      this.pointer,
      indirectBuffer.pointer,
      indirectOffset,
    );
    return result;
  }

  end(): void {
    const result = lib.symbols.wgpuRenderPassEncoderEnd(this.pointer);
    return result;
  }

  endOcclusionQuery(): void {
    const result = lib.symbols.wgpuRenderPassEncoderEndOcclusionQuery(
      this.pointer,
    );
    return result;
  }

  endPipelineStatisticsQuery(): void {
    const result = lib.symbols.wgpuRenderPassEncoderEndPipelineStatisticsQuery(
      this.pointer,
    );
    return result;
  }

  executeBundles(
    bundleCount: number | bigint,
    bundles: Deno.PointerValue,
  ): void {
    const result = lib.symbols.wgpuRenderPassEncoderExecuteBundles(
      this.pointer,
      bundleCount,
      bundles,
    );
    return result;
  }

  insertDebugMarker(markerLabel: Deno.PointerValue): void {
    const result = lib.symbols.wgpuRenderPassEncoderInsertDebugMarker(
      this.pointer,
      markerLabel,
    );
    return result;
  }

  popDebugGroup(): void {
    const result = lib.symbols.wgpuRenderPassEncoderPopDebugGroup(this.pointer);
    return result;
  }

  pushDebugGroup(groupLabel: Deno.PointerValue): void {
    const result = lib.symbols.wgpuRenderPassEncoderPushDebugGroup(
      this.pointer,
      groupLabel,
    );
    return result;
  }

  setBindGroup(
    groupIndex: number,
    group: BindGroup,
    dynamicOffsetCount: number | bigint,
    dynamicOffsets: Deno.PointerValue,
  ): void {
    const result = lib.symbols.wgpuRenderPassEncoderSetBindGroup(
      this.pointer,
      groupIndex,
      group.pointer,
      dynamicOffsetCount,
      dynamicOffsets,
    );
    return result;
  }

  setBlendConstant(color: Deno.PointerValue): void {
    const result = lib.symbols.wgpuRenderPassEncoderSetBlendConstant(
      this.pointer,
      color,
    );
    return result;
  }

  setIndexBuffer(
    buffer: Buffer,
    format: IndexFormat,
    offset: number | bigint,
    size: number | bigint,
  ): void {
    const result = lib.symbols.wgpuRenderPassEncoderSetIndexBuffer(
      this.pointer,
      buffer.pointer,
      format,
      offset,
      size,
    );
    return result;
  }

  setLabel(label: Deno.PointerValue): void {
    const result = lib.symbols.wgpuRenderPassEncoderSetLabel(
      this.pointer,
      label,
    );
    return result;
  }

  setPipeline(pipeline: RenderPipeline): void {
    const result = lib.symbols.wgpuRenderPassEncoderSetPipeline(
      this.pointer,
      pipeline.pointer,
    );
    return result;
  }

  setScissorRect(x: number, y: number, width: number, height: number): void {
    const result = lib.symbols.wgpuRenderPassEncoderSetScissorRect(
      this.pointer,
      x,
      y,
      width,
      height,
    );
    return result;
  }

  setStencilReference(reference: number): void {
    const result = lib.symbols.wgpuRenderPassEncoderSetStencilReference(
      this.pointer,
      reference,
    );
    return result;
  }

  setVertexBuffer(
    slot: number,
    buffer: Buffer,
    offset: number | bigint,
    size: number | bigint,
  ): void {
    const result = lib.symbols.wgpuRenderPassEncoderSetVertexBuffer(
      this.pointer,
      slot,
      buffer.pointer,
      offset,
      size,
    );
    return result;
  }

  setViewport(
    x: number,
    y: number,
    width: number,
    height: number,
    minDepth: number,
    maxDepth: number,
  ): void {
    const result = lib.symbols.wgpuRenderPassEncoderSetViewport(
      this.pointer,
      x,
      y,
      width,
      height,
      minDepth,
      maxDepth,
    );
    return result;
  }

  setPushConstants(
    stages: number,
    offset: number,
    sizeBytes: number,
    data: Deno.PointerValue,
  ): void {
    const result = lib.symbols.wgpuRenderPassEncoderSetPushConstants(
      this.pointer,
      stages,
      offset,
      sizeBytes,
      data,
    );
    return result;
  }

  multiDrawIndirect(
    buffer: Buffer,
    offset: number | bigint,
    count: number,
  ): void {
    const result = lib.symbols.wgpuRenderPassEncoderMultiDrawIndirect(
      this.pointer,
      buffer.pointer,
      offset,
      count,
    );
    return result;
  }

  multiDrawIndexedIndirect(
    buffer: Buffer,
    offset: number | bigint,
    count: number,
  ): void {
    const result = lib.symbols.wgpuRenderPassEncoderMultiDrawIndexedIndirect(
      this.pointer,
      buffer.pointer,
      offset,
      count,
    );
    return result;
  }

  multiDrawIndirectCount(
    buffer: Buffer,
    offset: number | bigint,
    count_buffer: Buffer,
    count_buffer_offset: number | bigint,
    max_count: number,
  ): void {
    const result = lib.symbols.wgpuRenderPassEncoderMultiDrawIndirectCount(
      this.pointer,
      buffer.pointer,
      offset,
      count_buffer.pointer,
      count_buffer_offset,
      max_count,
    );
    return result;
  }

  multiDrawIndexedIndirectCount(
    buffer: Buffer,
    offset: number | bigint,
    count_buffer: Buffer,
    count_buffer_offset: number | bigint,
    max_count: number,
  ): void {
    const result = lib.symbols
      .wgpuRenderPassEncoderMultiDrawIndexedIndirectCount(
        this.pointer,
        buffer.pointer,
        offset,
        count_buffer.pointer,
        count_buffer_offset,
        max_count,
      );
    return result;
  }
}

export class RenderPipeline extends U.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: U.ClassBase) {
    super(pointer, parent);
    U.registry.register(this, [pointer, lib.symbols.wgpuRenderPipelineRelease]);
  }

  getBindGroupLayout(groupIndex: number): BindGroupLayout {
    const result = lib.symbols.wgpuRenderPipelineGetBindGroupLayout(
      this.pointer,
      groupIndex,
    );
    return new BindGroupLayout(result, this);
  }

  setLabel(label: Deno.PointerValue): void {
    const result = lib.symbols.wgpuRenderPipelineSetLabel(this.pointer, label);
    return result;
  }
}

export class Sampler extends U.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: U.ClassBase) {
    super(pointer, parent);
    U.registry.register(this, [pointer, lib.symbols.wgpuSamplerRelease]);
  }

  setLabel(label: Deno.PointerValue): void {
    const result = lib.symbols.wgpuSamplerSetLabel(this.pointer, label);
    return result;
  }
}

export class ShaderModule extends U.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: U.ClassBase) {
    super(pointer, parent);
    U.registry.register(this, [pointer, lib.symbols.wgpuShaderModuleRelease]);
  }
  getCompilationInfo(): Promise<
    [CompilationInfoRequestStatus, Deno.PointerValue, Deno.PointerValue]
  >;
  getCompilationInfo(
    callback: (
      ...args: [
        CompilationInfoRequestStatus,
        Deno.PointerValue,
        Deno.PointerValue,
      ]
    ) => void,
  ): Deno.UnsafeCallback<CompilationInfoCallbackDefinition>;
  getCompilationInfo(
    callback: Deno.UnsafeCallback<CompilationInfoCallbackDefinition>,
  ): void;
  getCompilationInfo(callback: Deno.PointerValue): void;
  getCompilationInfo(
    callback?:
      | ((
        ...args: [
          CompilationInfoRequestStatus,
          Deno.PointerValue,
          Deno.PointerValue,
        ]
      ) => void)
      | Deno.UnsafeCallback<CompilationInfoCallbackDefinition>
      | Deno.PointerValue,
  ):
    | void
    | Promise<
      [CompilationInfoRequestStatus, Deno.PointerValue, Deno.PointerValue]
    >
    | Deno.UnsafeCallback<CompilationInfoCallbackDefinition> {
    if (callback == null) {
      return new Promise((res) => {
        const cb = new Deno.UnsafeCallback(
          CompilationInfoCallbackDefinition,
          (...args: U.CbParam<CompilationInfoCallbackDefinition>) => {
            res(
              [args[0] as CompilationInfoRequestStatus, args[1], args[2]] as [
                CompilationInfoRequestStatus,
                Deno.PointerValue,
                Deno.PointerValue,
              ],
            );
          },
        );
        lib.symbols.wgpuShaderModuleGetCompilationInfo(
          this.pointer,
          cb.pointer,
          null,
        );
      });
    } else if (callback instanceof Deno.UnsafeCallback) {
      lib.symbols.wgpuShaderModuleGetCompilationInfo(
        this.pointer,
        callback.pointer,
        null,
      );
    } else if (callback instanceof Function) {
      const cb = new Deno.UnsafeCallback(
        CompilationInfoCallbackDefinition,
        (...args: U.CbParam<CompilationInfoCallbackDefinition>) => {
          callback(...[
            args[0] as CompilationInfoRequestStatus,
            args[1],
            args[2],
          ]);
        },
      );
      lib.symbols.wgpuShaderModuleGetCompilationInfo(
        this.pointer,
        cb.pointer,
        null,
      );
      return cb;
    } else {
      lib.symbols.wgpuShaderModuleGetCompilationInfo(
        this.pointer,
        callback,
        null,
      );
    }
  }

  setLabel(label: Deno.PointerValue): void {
    const result = lib.symbols.wgpuShaderModuleSetLabel(this.pointer, label);
    return result;
  }
}

export class Surface extends U.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: U.ClassBase) {
    super(pointer, parent);
    U.registry.register(this, [pointer, lib.symbols.wgpuSurfaceRelease]);
  }

  getPreferredFormat(adapter: Adapter): TextureFormat {
    const result = lib.symbols.wgpuSurfaceGetPreferredFormat(
      this.pointer,
      adapter.pointer,
    );
    return result as TextureFormat;
  }

  getCapabilities(adapter: Adapter, capabilities: Deno.PointerValue): void {
    const result = lib.symbols.wgpuSurfaceGetCapabilities(
      this.pointer,
      adapter.pointer,
      capabilities,
    );
    return result;
  }
}

export class SwapChain extends U.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: U.ClassBase) {
    super(pointer, parent);
    U.registry.register(this, [pointer, lib.symbols.wgpuSwapChainRelease]);
  }

  getCurrentTextureView(): TextureView {
    const result = lib.symbols.wgpuSwapChainGetCurrentTextureView(this.pointer);
    return new TextureView(result, this);
  }

  present(): void {
    const result = lib.symbols.wgpuSwapChainPresent(this.pointer);
    return result;
  }
}

export class Texture extends U.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: U.ClassBase) {
    super(pointer, parent);
    U.registry.register(this, [pointer, lib.symbols.wgpuTextureRelease]);
  }

  createView(descriptor: Deno.PointerValue): TextureView {
    const result = lib.symbols.wgpuTextureCreateView(this.pointer, descriptor);
    return new TextureView(result, this);
  }

  destroy(): void {
    const result = lib.symbols.wgpuTextureDestroy(this.pointer);
    return result;
  }

  getDepthOrArrayLayers(): number {
    const result = lib.symbols.wgpuTextureGetDepthOrArrayLayers(this.pointer);
    return result;
  }

  getDimension(): TextureDimension {
    const result = lib.symbols.wgpuTextureGetDimension(this.pointer);
    return result as TextureDimension;
  }

  getFormat(): TextureFormat {
    const result = lib.symbols.wgpuTextureGetFormat(this.pointer);
    return result as TextureFormat;
  }

  getHeight(): number {
    const result = lib.symbols.wgpuTextureGetHeight(this.pointer);
    return result;
  }

  getMipLevelCount(): number {
    const result = lib.symbols.wgpuTextureGetMipLevelCount(this.pointer);
    return result;
  }

  getSampleCount(): number {
    const result = lib.symbols.wgpuTextureGetSampleCount(this.pointer);
    return result;
  }

  getUsage(): number {
    const result = lib.symbols.wgpuTextureGetUsage(this.pointer);
    return result;
  }

  getWidth(): number {
    const result = lib.symbols.wgpuTextureGetWidth(this.pointer);
    return result;
  }

  setLabel(label: Deno.PointerValue): void {
    const result = lib.symbols.wgpuTextureSetLabel(this.pointer, label);
    return result;
  }
}

export class TextureView extends U.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: U.ClassBase) {
    super(pointer, parent);
    U.registry.register(this, [pointer, lib.symbols.wgpuTextureViewRelease]);
  }

  setLabel(label: Deno.PointerValue): void {
    const result = lib.symbols.wgpuTextureViewSetLabel(this.pointer, label);
    return result;
  }
}
