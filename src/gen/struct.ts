import { endianness } from "node:os"

const littleEndian = endianness() == "LE" ? true : false;

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

  get adapterType(): Enum {
    return this.view.getUint32(56, littleEndian);
  }
  set adapterType(value: Enum) {
    this.view.setUint32(56, value, littleEndian);
  }

  get backendType(): Enum {
    return this.view.getUint32(60, littleEndian);
  }
  set backendType(value: Enum) {
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

  get operation(): Enum {
    return this.view.getUint32(0, littleEndian);
  }
  set operation(value: Enum) {
    this.view.setUint32(0, value, littleEndian);
  }

  get srcFactor(): Enum {
    return this.view.getUint32(4, littleEndian);
  }
  set srcFactor(value: Enum) {
    this.view.setUint32(4, value, littleEndian);
  }

  get dstFactor(): Enum {
    return this.view.getUint32(8, littleEndian);
  }
  set dstFactor(value: Enum) {
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

  get type(): Enum {
    return this.view.getUint32(8, littleEndian);
  }
  set type(value: Enum) {
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

  get type(): Enum {
    return this.view.getUint32(16, littleEndian);
  }
  set type(value: Enum) {
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

  get location(): Enum {
    return this.view.getUint32(12, littleEndian);
  }
  set location(value: Enum) {
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

  get chain(): Record {
    return new chain(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set chain(value: Record) {
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

  get topology(): Enum {
    return this.view.getUint32(8, littleEndian);
  }
  set topology(value: Enum) {
    this.view.setUint32(8, value, littleEndian);
  }

  get stripIndexFormat(): Enum {
    return this.view.getUint32(12, littleEndian);
  }
  set stripIndexFormat(value: Enum) {
    this.view.setUint32(12, value, littleEndian);
  }

  get frontFace(): Enum {
    return this.view.getUint32(16, littleEndian);
  }
  set frontFace(value: Enum) {
    this.view.setUint32(16, value, littleEndian);
  }

  get cullMode(): Enum {
    return this.view.getUint32(20, littleEndian);
  }
  set cullMode(value: Enum) {
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

  get type(): Enum {
    return this.view.getUint32(16, littleEndian);
  }
  set type(value: Enum) {
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

  get depthStencilFormat(): Enum {
    return this.view.getUint32(32, littleEndian);
  }
  set depthStencilFormat(value: Enum) {
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

  get depthLoadOp(): Enum {
    return this.view.getUint32(8, littleEndian);
  }
  set depthLoadOp(value: Enum) {
    this.view.setUint32(8, value, littleEndian);
  }

  get depthStoreOp(): Enum {
    return this.view.getUint32(12, littleEndian);
  }
  set depthStoreOp(value: Enum) {
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

  get stencilLoadOp(): Enum {
    return this.view.getUint32(24, littleEndian);
  }
  set stencilLoadOp(value: Enum) {
    this.view.setUint32(24, value, littleEndian);
  }

  get stencilStoreOp(): Enum {
    return this.view.getUint32(28, littleEndian);
  }
  set stencilStoreOp(value: Enum) {
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

  get chain(): Record {
    return new chain(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set chain(value: Record) {
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

  get location(): Enum {
    return this.view.getUint32(12, littleEndian);
  }
  set location(value: Enum) {
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

  get powerPreference(): Enum {
    return this.view.getUint32(16, littleEndian);
  }
  set powerPreference(value: Enum) {
    this.view.setUint32(16, value, littleEndian);
  }

  get backendType(): Enum {
    return this.view.getUint32(20, littleEndian);
  }
  set backendType(value: Enum) {
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

  get type(): Enum {
    return this.view.getUint32(8, littleEndian);
  }
  set type(value: Enum) {
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

  get addressModeU(): Enum {
    return this.view.getUint32(16, littleEndian);
  }
  set addressModeU(value: Enum) {
    this.view.setUint32(16, value, littleEndian);
  }

  get addressModeV(): Enum {
    return this.view.getUint32(20, littleEndian);
  }
  set addressModeV(value: Enum) {
    this.view.setUint32(20, value, littleEndian);
  }

  get addressModeW(): Enum {
    return this.view.getUint32(24, littleEndian);
  }
  set addressModeW(value: Enum) {
    this.view.setUint32(24, value, littleEndian);
  }

  get magFilter(): Enum {
    return this.view.getUint32(28, littleEndian);
  }
  set magFilter(value: Enum) {
    this.view.setUint32(28, value, littleEndian);
  }

  get minFilter(): Enum {
    return this.view.getUint32(32, littleEndian);
  }
  set minFilter(value: Enum) {
    this.view.setUint32(32, value, littleEndian);
  }

  get mipmapFilter(): Enum {
    return this.view.getUint32(36, littleEndian);
  }
  set mipmapFilter(value: Enum) {
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

  get compare(): Enum {
    return this.view.getUint32(48, littleEndian);
  }
  set compare(value: Enum) {
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

  get chain(): Record {
    return new chain(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set chain(value: Record) {
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

  get chain(): Record {
    return new chain(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set chain(value: Record) {
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

  get compare(): Enum {
    return this.view.getUint32(0, littleEndian);
  }
  set compare(value: Enum) {
    this.view.setUint32(0, value, littleEndian);
  }

  get failOp(): Enum {
    return this.view.getUint32(4, littleEndian);
  }
  set failOp(value: Enum) {
    this.view.setUint32(4, value, littleEndian);
  }

  get depthFailOp(): Enum {
    return this.view.getUint32(8, littleEndian);
  }
  set depthFailOp(value: Enum) {
    this.view.setUint32(8, value, littleEndian);
  }

  get passOp(): Enum {
    return this.view.getUint32(12, littleEndian);
  }
  set passOp(value: Enum) {
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

  get access(): Enum {
    return this.view.getUint32(8, littleEndian);
  }
  set access(value: Enum) {
    this.view.setUint32(8, value, littleEndian);
  }

  get format(): Enum {
    return this.view.getUint32(12, littleEndian);
  }
  set format(value: Enum) {
    this.view.setUint32(12, value, littleEndian);
  }

  get viewDimension(): Enum {
    return this.view.getUint32(16, littleEndian);
  }
  set viewDimension(value: Enum) {
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

  get chain(): Record {
    return new chain(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set chain(value: Record) {
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

  get chain(): Record {
    return new chain(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set chain(value: Record) {
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

  get chain(): Record {
    return new chain(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set chain(value: Record) {
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

  get chain(): Record {
    return new chain(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set chain(value: Record) {
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

  get chain(): Record {
    return new chain(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set chain(value: Record) {
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

  get chain(): Record {
    return new chain(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set chain(value: Record) {
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

  get chain(): Record {
    return new chain(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set chain(value: Record) {
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

  get format(): Enum {
    return this.view.getUint32(20, littleEndian);
  }
  set format(value: Enum) {
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

  get presentMode(): Enum {
    return this.view.getUint32(32, littleEndian);
  }
  set presentMode(value: Enum) {
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

  get sampleType(): Enum {
    return this.view.getUint32(8, littleEndian);
  }
  set sampleType(value: Enum) {
    this.view.setUint32(8, value, littleEndian);
  }

  get viewDimension(): Enum {
    return this.view.getUint32(12, littleEndian);
  }
  set viewDimension(value: Enum) {
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

  get format(): Enum {
    return this.view.getUint32(16, littleEndian);
  }
  set format(value: Enum) {
    this.view.setUint32(16, value, littleEndian);
  }

  get dimension(): Enum {
    return this.view.getUint32(20, littleEndian);
  }
  set dimension(value: Enum) {
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

  get aspect(): Enum {
    return this.view.getUint32(40, littleEndian);
  }
  set aspect(value: Enum) {
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

  get format(): Enum {
    return this.view.getUint32(0, littleEndian);
  }
  set format(value: Enum) {
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

  get buffer(): Record {
    return new buffer(new DataView(this.view.buffer, this.view.byteOffset + 16));
  }
  set buffer(value: Record) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 16, 24).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 24));
  }

  get sampler(): Record {
    return new sampler(new DataView(this.view.buffer, this.view.byteOffset + 40));
  }
  set sampler(value: Record) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 40, 16).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 16));
  }

  get texture(): Record {
    return new texture(new DataView(this.view.buffer, this.view.byteOffset + 56));
  }
  set texture(value: Record) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 56, 24).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 24));
  }

  get storageTexture(): Record {
    return new storageTexture(new DataView(this.view.buffer, this.view.byteOffset + 80));
  }
  set storageTexture(value: Record) {
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

  get color(): Record {
    return new color(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set color(value: Record) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 0, 12).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 12));
  }

  get alpha(): Record {
    return new alpha(new DataView(this.view.buffer, this.view.byteOffset + 12));
  }
  set alpha(value: Record) {
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

  get format(): Enum {
    return this.view.getUint32(8, littleEndian);
  }
  set format(value: Enum) {
    this.view.setUint32(8, value, littleEndian);
  }

  get depthWriteEnabled(): boolean {
    return this.view.getInt8(12);
  }
  set depthWriteEnabled(value: boolean) {
    this.view.setInt8(12, value);
  }

  get depthCompare(): Enum {
    return this.view.getUint32(16, littleEndian);
  }
  set depthCompare(value: Enum) {
    this.view.setUint32(16, value, littleEndian);
  }

  get stencilFront(): Record {
    return new stencilFront(new DataView(this.view.buffer, this.view.byteOffset + 20));
  }
  set stencilFront(value: Record) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 20, 16).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 16));
  }

  get stencilBack(): Record {
    return new stencilBack(new DataView(this.view.buffer, this.view.byteOffset + 36));
  }
  set stencilBack(value: Record) {
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

  get layout(): Record {
    return new layout(new DataView(this.view.buffer, this.view.byteOffset + 8));
  }
  set layout(value: Record) {
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

  get origin(): Record {
    return new origin(new DataView(this.view.buffer, this.view.byteOffset + 20));
  }
  set origin(value: Record) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 20, 12).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 12));
  }

  get aspect(): Enum {
    return this.view.getUint32(32, littleEndian);
  }
  set aspect(value: Enum) {
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

  get loadOp(): Enum {
    return this.view.getUint32(16, littleEndian);
  }
  set loadOp(value: Enum) {
    this.view.setUint32(16, value, littleEndian);
  }

  get storeOp(): Enum {
    return this.view.getUint32(20, littleEndian);
  }
  set storeOp(value: Enum) {
    this.view.setUint32(20, value, littleEndian);
  }

  get clearValue(): Record {
    return new clearValue(new DataView(this.view.buffer, this.view.byteOffset + 24));
  }
  set clearValue(value: Record) {
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

  get limits(): Record {
    return new limits(new DataView(this.view.buffer, this.view.byteOffset + 8));
  }
  set limits(value: Record) {
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

  get limits(): Record {
    return new limits(new DataView(this.view.buffer, this.view.byteOffset + 8));
  }
  set limits(value: Record) {
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

  get dimension(): Enum {
    return this.view.getUint32(20, littleEndian);
  }
  set dimension(value: Enum) {
    this.view.setUint32(20, value, littleEndian);
  }

  get size(): Record {
    return new size(new DataView(this.view.buffer, this.view.byteOffset + 24));
  }
  set size(value: Record) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 24, 12).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 12));
  }

  get format(): Enum {
    return this.view.getUint32(36, littleEndian);
  }
  set format(value: Enum) {
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

  get stepMode(): Enum {
    return this.view.getUint32(8, littleEndian);
  }
  set stepMode(value: Enum) {
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

  get format(): Enum {
    return this.view.getUint32(8, littleEndian);
  }
  set format(value: Enum) {
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

  get compute(): Record {
    return new compute(new DataView(this.view.buffer, this.view.byteOffset + 24));
  }
  set compute(value: Record) {
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

  get defaultQueue(): Record {
    return new defaultQueue(new DataView(this.view.buffer, this.view.byteOffset + 40));
  }
  set defaultQueue(value: Record) {
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

  get vertex(): Record {
    return new vertex(new DataView(this.view.buffer, this.view.byteOffset + 24));
  }
  set vertex(value: Record) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 24, 56).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 56));
  }

  get primitive(): Record {
    return new primitive(new DataView(this.view.buffer, this.view.byteOffset + 80));
  }
  set primitive(value: Record) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 80, 24).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 24));
  }

  get depthStencil(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.view.getBigUint64(104, littleEndian));
  }
  set depthStencil(value: Deno.PointerValue) {
    this.view.setBigUint64(104, BigInt(Deno.UnsafePointer.value(value)), littleEndian);
  }

  get multisample(): Record {
    return new multisample(new DataView(this.view.buffer, this.view.byteOffset + 112));
  }
  set multisample(value: Record) {
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

  get sType(): Enum {
    return this.view.getUint32(8, littleEndian);
  }
  set sType(value: Enum) {
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

  get sType(): Enum {
    return this.view.getUint32(8, littleEndian);
  }
  set sType(value: Enum) {
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

  get chain(): Record {
    return new chain(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set chain(value: Record) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 0, 16).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 16));
  }

  get backends(): number {
    return this.view.getUint32(16, littleEndian);
  }
  set backends(value: number) {
    this.view.setUint32(16, value, littleEndian);
  }

  get dx12ShaderCompiler(): Enum {
    return this.view.getUint32(20, littleEndian);
  }
  set dx12ShaderCompiler(value: Enum) {
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

  get chain(): Record {
    return new chain(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set chain(value: Record) {
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

  get chain(): Record {
    return new chain(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set chain(value: Record) {
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

  get chain(): Record {
    return new chain(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set chain(value: Record) {
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

  get chain(): Record {
    return new chain(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set chain(value: Record) {
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

  get chain(): Record {
    return new chain(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set chain(value: Record) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 0, 16).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 16));
  }

  get stage(): Enum {
    return this.view.getUint32(16, littleEndian);
  }
  set stage(value: Enum) {
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

  get adapters(): Record {
    return new adapters(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set adapters(value: Record) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 0, 32).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 32));
  }

  get devices(): Record {
    return new devices(new DataView(this.view.buffer, this.view.byteOffset + 32));
  }
  set devices(value: Record) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 32, 32).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 32));
  }

  get pipelineLayouts(): Record {
    return new pipelineLayouts(new DataView(this.view.buffer, this.view.byteOffset + 64));
  }
  set pipelineLayouts(value: Record) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 64, 32).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 32));
  }

  get shaderModules(): Record {
    return new shaderModules(new DataView(this.view.buffer, this.view.byteOffset + 96));
  }
  set shaderModules(value: Record) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 96, 32).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 32));
  }

  get bindGroupLayouts(): Record {
    return new bindGroupLayouts(new DataView(this.view.buffer, this.view.byteOffset + 128));
  }
  set bindGroupLayouts(value: Record) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 128, 32).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 32));
  }

  get bindGroups(): Record {
    return new bindGroups(new DataView(this.view.buffer, this.view.byteOffset + 160));
  }
  set bindGroups(value: Record) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 160, 32).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 32));
  }

  get commandBuffers(): Record {
    return new commandBuffers(new DataView(this.view.buffer, this.view.byteOffset + 192));
  }
  set commandBuffers(value: Record) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 192, 32).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 32));
  }

  get renderBundles(): Record {
    return new renderBundles(new DataView(this.view.buffer, this.view.byteOffset + 224));
  }
  set renderBundles(value: Record) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 224, 32).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 32));
  }

  get renderPipelines(): Record {
    return new renderPipelines(new DataView(this.view.buffer, this.view.byteOffset + 256));
  }
  set renderPipelines(value: Record) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 256, 32).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 32));
  }

  get computePipelines(): Record {
    return new computePipelines(new DataView(this.view.buffer, this.view.byteOffset + 288));
  }
  set computePipelines(value: Record) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 288, 32).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 32));
  }

  get querySets(): Record {
    return new querySets(new DataView(this.view.buffer, this.view.byteOffset + 320));
  }
  set querySets(value: Record) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 320, 32).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 32));
  }

  get buffers(): Record {
    return new buffers(new DataView(this.view.buffer, this.view.byteOffset + 352));
  }
  set buffers(value: Record) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 352, 32).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 32));
  }

  get textures(): Record {
    return new textures(new DataView(this.view.buffer, this.view.byteOffset + 384));
  }
  set textures(value: Record) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 384, 32).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 32));
  }

  get textureViews(): Record {
    return new textureViews(new DataView(this.view.buffer, this.view.byteOffset + 416));
  }
  set textureViews(value: Record) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 416, 32).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 32));
  }

  get samplers(): Record {
    return new samplers(new DataView(this.view.buffer, this.view.byteOffset + 448));
  }
  set samplers(value: Record) {
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

  get surfaces(): Record {
    return new surfaces(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set surfaces(value: Record) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 0, 32).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 32));
  }

  get backendType(): Enum {
    return this.view.getUint32(32, littleEndian);
  }
  set backendType(value: Enum) {
    this.view.setUint32(32, value, littleEndian);
  }

  get vulkan(): Record {
    return new vulkan(new DataView(this.view.buffer, this.view.byteOffset + 40));
  }
  set vulkan(value: Record) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 40, 480).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 480));
  }

  get metal(): Record {
    return new metal(new DataView(this.view.buffer, this.view.byteOffset + 520));
  }
  set metal(value: Record) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 520, 480).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 480));
  }

  get dx12(): Record {
    return new dx12(new DataView(this.view.buffer, this.view.byteOffset + 1000));
  }
  set dx12(value: Record) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 1000, 480).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 480));
  }

  get dx11(): Record {
    return new dx11(new DataView(this.view.buffer, this.view.byteOffset + 1480));
  }
  set dx11(value: Record) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 1480, 480).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 480));
  }

  get gl(): Record {
    return new gl(new DataView(this.view.buffer, this.view.byteOffset + 1960));
  }
  set gl(value: Record) {
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

  get chain(): Record {
    return new chain(new DataView(this.view.buffer, this.view.byteOffset + 0));
  }
  set chain(value: Record) {
    new Uint8Array(this.view.buffer, this.view.byteOffset + 0, 16).set(new Uint8Array(value.view.buffer, value.view.byteOffset, 16));
  }

  get alphaMode(): Enum {
    return this.view.getUint32(16, littleEndian);
  }
  set alphaMode(value: Enum) {
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

