import { endianness } from "node:os";
import * as UC from "../util/conv.ts";
import * as E from "./enum.ts";

const LE = endianness() == "LE" ? true : false;

export class AdapterProperties extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get vendorID(): number {
    return this.dataview.getUint32(8, LE);
  }

  set vendorID(value: number) {
    this.dataview.setUint32(8, value, LE);
  }

  get vendorName(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, LE));
  }

  set vendorName(value: Deno.PointerValue) {
    this.dataview.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get architecture(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(24, LE));
  }

  set architecture(value: Deno.PointerValue) {
    this.dataview.setBigUint64(24, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get deviceID(): number {
    return this.dataview.getUint32(32, LE);
  }

  set deviceID(value: number) {
    this.dataview.setUint32(32, value, LE);
  }

  get name(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(40, LE));
  }

  set name(value: Deno.PointerValue) {
    this.dataview.setBigUint64(40, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get driverDescription(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(48, LE));
  }

  set driverDescription(value: Deno.PointerValue) {
    this.dataview.setBigUint64(48, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get adapterType(): E.AdapterType {
    return this.dataview.getUint32(56, LE) as E.AdapterType;
  }

  set adapterType(value: E.AdapterType | number) {
    this.dataview.setUint32(56, value, LE);
  }

  get backendType(): E.BackendType {
    return this.dataview.getUint32(60, LE) as E.BackendType;
  }

  set backendType(value: E.BackendType | number) {
    this.dataview.setUint32(60, value, LE);
  }

  static from() {
    // not implemented
  }
}

export class BindGroupEntry extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get binding(): number {
    return this.dataview.getUint32(8, LE);
  }

  set binding(value: number) {
    this.dataview.setUint32(8, value, LE);
  }

  get buffer(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, LE));
  }

  set buffer(value: Deno.PointerValue) {
    this.dataview.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get offset(): bigint {
    return this.dataview.getBigUint64(24, LE);
  }

  set offset(value: bigint | number) {
    this.dataview.setBigUint64(24, BigInt(value), LE);
  }

  get size(): bigint {
    return this.dataview.getBigUint64(32, LE);
  }

  set size(value: bigint | number) {
    this.dataview.setBigUint64(32, BigInt(value), LE);
  }

  get sampler(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(40, LE));
  }

  set sampler(value: Deno.PointerValue) {
    this.dataview.setBigUint64(40, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get textureView(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(48, LE));
  }

  set textureView(value: Deno.PointerValue) {
    this.dataview.setBigUint64(48, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  static from() {
    // not implemented
  }
}

export class BlendComponent extends UC.StructBase {
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

  get operation(): E.BlendOperation {
    return this.dataview.getUint32(0, LE) as E.BlendOperation;
  }

  set operation(value: E.BlendOperation | number) {
    this.dataview.setUint32(0, value, LE);
  }

  get srcFactor(): E.BlendFactor {
    return this.dataview.getUint32(4, LE) as E.BlendFactor;
  }

  set srcFactor(value: E.BlendFactor | number) {
    this.dataview.setUint32(4, value, LE);
  }

  get dstFactor(): E.BlendFactor {
    return this.dataview.getUint32(8, LE) as E.BlendFactor;
  }

  set dstFactor(value: E.BlendFactor | number) {
    this.dataview.setUint32(8, value, LE);
  }

  static from() {
    // not implemented
  }
}

export class BufferBindingLayout extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get type(): E.BufferBindingType {
    return this.dataview.getUint32(8, LE) as E.BufferBindingType;
  }

  set type(value: E.BufferBindingType | number) {
    this.dataview.setUint32(8, value, LE);
  }

  get hasDynamicOffset(): boolean {
    return this.dataview.getUint8(12) == 1;
  }

  set hasDynamicOffset(value: boolean | number | bigint) {
    this.dataview.setUint8(12, value ? 1 : 0);
  }

  get minBindingSize(): bigint {
    return this.dataview.getBigUint64(16, LE);
  }

  set minBindingSize(value: bigint | number) {
    this.dataview.setBigUint64(16, BigInt(value), LE);
  }

  static from() {
    // not implemented
  }
}

export class BufferDescriptor extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get usage(): number {
    return this.dataview.getUint32(16, LE);
  }

  set usage(value: number) {
    this.dataview.setUint32(16, value, LE);
  }

  get size(): bigint {
    return this.dataview.getBigUint64(24, LE);
  }

  set size(value: bigint | number) {
    this.dataview.setBigUint64(24, BigInt(value), LE);
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

export class Color extends UC.StructBase {
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
    return this.dataview.getFloat64(0, LE);
  }

  set r(value: number) {
    this.dataview.setFloat64(0, value, LE);
  }

  get g(): number {
    return this.dataview.getFloat64(8, LE);
  }

  set g(value: number) {
    this.dataview.setFloat64(8, value, LE);
  }

  get b(): number {
    return this.dataview.getFloat64(16, LE);
  }

  set b(value: number) {
    this.dataview.setFloat64(16, value, LE);
  }

  get a(): number {
    return this.dataview.getFloat64(24, LE);
  }

  set a(value: number) {
    this.dataview.setFloat64(24, value, LE);
  }

  static from() {
    // not implemented
  }
}

export class CommandBufferDescriptor extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  static from() {
    // not implemented
  }
}

export class CommandEncoderDescriptor extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  static from() {
    // not implemented
  }
}

export class CompilationMessage extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get message(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, LE));
  }

  set message(value: Deno.PointerValue) {
    this.dataview.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get type(): E.CompilationMessageType {
    return this.dataview.getUint32(16, LE) as E.CompilationMessageType;
  }

  set type(value: E.CompilationMessageType | number) {
    this.dataview.setUint32(16, value, LE);
  }

  get lineNum(): bigint {
    return this.dataview.getBigUint64(24, LE);
  }

  set lineNum(value: bigint | number) {
    this.dataview.setBigUint64(24, BigInt(value), LE);
  }

  get linePos(): bigint {
    return this.dataview.getBigUint64(32, LE);
  }

  set linePos(value: bigint | number) {
    this.dataview.setBigUint64(32, BigInt(value), LE);
  }

  get offset(): bigint {
    return this.dataview.getBigUint64(40, LE);
  }

  set offset(value: bigint | number) {
    this.dataview.setBigUint64(40, BigInt(value), LE);
  }

  get length(): bigint {
    return this.dataview.getBigUint64(48, LE);
  }

  set length(value: bigint | number) {
    this.dataview.setBigUint64(48, BigInt(value), LE);
  }

  get utf16LinePos(): bigint {
    return this.dataview.getBigUint64(56, LE);
  }

  set utf16LinePos(value: bigint | number) {
    this.dataview.setBigUint64(56, BigInt(value), LE);
  }

  get utf16Offset(): bigint {
    return this.dataview.getBigUint64(64, LE);
  }

  set utf16Offset(value: bigint | number) {
    this.dataview.setBigUint64(64, BigInt(value), LE);
  }

  get utf16Length(): bigint {
    return this.dataview.getBigUint64(72, LE);
  }

  set utf16Length(value: bigint | number) {
    this.dataview.setBigUint64(72, BigInt(value), LE);
  }

  static from() {
    // not implemented
  }
}

export class ComputePassTimestampWrite extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set querySet(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get queryIndex(): number {
    return this.dataview.getUint32(8, LE);
  }

  set queryIndex(value: number) {
    this.dataview.setUint32(8, value, LE);
  }

  get location(): E.ComputePassTimestampLocation {
    return this.dataview.getUint32(12, LE) as E.ComputePassTimestampLocation;
  }

  set location(value: E.ComputePassTimestampLocation | number) {
    this.dataview.setUint32(12, value, LE);
  }

  static from() {
    // not implemented
  }
}

export class ConstantEntry extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get key(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, LE));
  }

  set key(value: Deno.PointerValue) {
    this.dataview.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get value(): number {
    return this.dataview.getFloat64(16, LE);
  }

  set value(value: number) {
    this.dataview.setFloat64(16, value, LE);
  }

  static from() {
    // not implemented
  }
}

export class Extent3D extends UC.StructBase {
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
    return this.dataview.getUint32(0, LE);
  }

  set width(value: number) {
    this.dataview.setUint32(0, value, LE);
  }

  get height(): number {
    return this.dataview.getUint32(4, LE);
  }

  set height(value: number) {
    this.dataview.setUint32(4, value, LE);
  }

  get depthOrArrayLayers(): number {
    return this.dataview.getUint32(8, LE);
  }

  set depthOrArrayLayers(value: number) {
    this.dataview.setUint32(8, value, LE);
  }

  static from() {
    // not implemented
  }
}

export class InstanceDescriptor extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  static from() {
    // not implemented
  }
}

export class Limits extends UC.StructBase {
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
    return this.dataview.getUint32(0, LE);
  }

  set maxTextureDimension1D(value: number) {
    this.dataview.setUint32(0, value, LE);
  }

  get maxTextureDimension2D(): number {
    return this.dataview.getUint32(4, LE);
  }

  set maxTextureDimension2D(value: number) {
    this.dataview.setUint32(4, value, LE);
  }

  get maxTextureDimension3D(): number {
    return this.dataview.getUint32(8, LE);
  }

  set maxTextureDimension3D(value: number) {
    this.dataview.setUint32(8, value, LE);
  }

  get maxTextureArrayLayers(): number {
    return this.dataview.getUint32(12, LE);
  }

  set maxTextureArrayLayers(value: number) {
    this.dataview.setUint32(12, value, LE);
  }

  get maxBindGroups(): number {
    return this.dataview.getUint32(16, LE);
  }

  set maxBindGroups(value: number) {
    this.dataview.setUint32(16, value, LE);
  }

  get maxBindingsPerBindGroup(): number {
    return this.dataview.getUint32(20, LE);
  }

  set maxBindingsPerBindGroup(value: number) {
    this.dataview.setUint32(20, value, LE);
  }

  get maxDynamicUniformBuffersPerPipelineLayout(): number {
    return this.dataview.getUint32(24, LE);
  }

  set maxDynamicUniformBuffersPerPipelineLayout(value: number) {
    this.dataview.setUint32(24, value, LE);
  }

  get maxDynamicStorageBuffersPerPipelineLayout(): number {
    return this.dataview.getUint32(28, LE);
  }

  set maxDynamicStorageBuffersPerPipelineLayout(value: number) {
    this.dataview.setUint32(28, value, LE);
  }

  get maxSampledTexturesPerShaderStage(): number {
    return this.dataview.getUint32(32, LE);
  }

  set maxSampledTexturesPerShaderStage(value: number) {
    this.dataview.setUint32(32, value, LE);
  }

  get maxSamplersPerShaderStage(): number {
    return this.dataview.getUint32(36, LE);
  }

  set maxSamplersPerShaderStage(value: number) {
    this.dataview.setUint32(36, value, LE);
  }

  get maxStorageBuffersPerShaderStage(): number {
    return this.dataview.getUint32(40, LE);
  }

  set maxStorageBuffersPerShaderStage(value: number) {
    this.dataview.setUint32(40, value, LE);
  }

  get maxStorageTexturesPerShaderStage(): number {
    return this.dataview.getUint32(44, LE);
  }

  set maxStorageTexturesPerShaderStage(value: number) {
    this.dataview.setUint32(44, value, LE);
  }

  get maxUniformBuffersPerShaderStage(): number {
    return this.dataview.getUint32(48, LE);
  }

  set maxUniformBuffersPerShaderStage(value: number) {
    this.dataview.setUint32(48, value, LE);
  }

  get maxUniformBufferBindingSize(): bigint {
    return this.dataview.getBigUint64(56, LE);
  }

  set maxUniformBufferBindingSize(value: bigint | number) {
    this.dataview.setBigUint64(56, BigInt(value), LE);
  }

  get maxStorageBufferBindingSize(): bigint {
    return this.dataview.getBigUint64(64, LE);
  }

  set maxStorageBufferBindingSize(value: bigint | number) {
    this.dataview.setBigUint64(64, BigInt(value), LE);
  }

  get minUniformBufferOffsetAlignment(): number {
    return this.dataview.getUint32(72, LE);
  }

  set minUniformBufferOffsetAlignment(value: number) {
    this.dataview.setUint32(72, value, LE);
  }

  get minStorageBufferOffsetAlignment(): number {
    return this.dataview.getUint32(76, LE);
  }

  set minStorageBufferOffsetAlignment(value: number) {
    this.dataview.setUint32(76, value, LE);
  }

  get maxVertexBuffers(): number {
    return this.dataview.getUint32(80, LE);
  }

  set maxVertexBuffers(value: number) {
    this.dataview.setUint32(80, value, LE);
  }

  get maxBufferSize(): bigint {
    return this.dataview.getBigUint64(88, LE);
  }

  set maxBufferSize(value: bigint | number) {
    this.dataview.setBigUint64(88, BigInt(value), LE);
  }

  get maxVertexAttributes(): number {
    return this.dataview.getUint32(96, LE);
  }

  set maxVertexAttributes(value: number) {
    this.dataview.setUint32(96, value, LE);
  }

  get maxVertexBufferArrayStride(): number {
    return this.dataview.getUint32(100, LE);
  }

  set maxVertexBufferArrayStride(value: number) {
    this.dataview.setUint32(100, value, LE);
  }

  get maxInterStageShaderComponents(): number {
    return this.dataview.getUint32(104, LE);
  }

  set maxInterStageShaderComponents(value: number) {
    this.dataview.setUint32(104, value, LE);
  }

  get maxInterStageShaderVariables(): number {
    return this.dataview.getUint32(108, LE);
  }

  set maxInterStageShaderVariables(value: number) {
    this.dataview.setUint32(108, value, LE);
  }

  get maxColorAttachments(): number {
    return this.dataview.getUint32(112, LE);
  }

  set maxColorAttachments(value: number) {
    this.dataview.setUint32(112, value, LE);
  }

  get maxColorAttachmentBytesPerSample(): number {
    return this.dataview.getUint32(116, LE);
  }

  set maxColorAttachmentBytesPerSample(value: number) {
    this.dataview.setUint32(116, value, LE);
  }

  get maxComputeWorkgroupStorageSize(): number {
    return this.dataview.getUint32(120, LE);
  }

  set maxComputeWorkgroupStorageSize(value: number) {
    this.dataview.setUint32(120, value, LE);
  }

  get maxComputeInvocationsPerWorkgroup(): number {
    return this.dataview.getUint32(124, LE);
  }

  set maxComputeInvocationsPerWorkgroup(value: number) {
    this.dataview.setUint32(124, value, LE);
  }

  get maxComputeWorkgroupSizeX(): number {
    return this.dataview.getUint32(128, LE);
  }

  set maxComputeWorkgroupSizeX(value: number) {
    this.dataview.setUint32(128, value, LE);
  }

  get maxComputeWorkgroupSizeY(): number {
    return this.dataview.getUint32(132, LE);
  }

  set maxComputeWorkgroupSizeY(value: number) {
    this.dataview.setUint32(132, value, LE);
  }

  get maxComputeWorkgroupSizeZ(): number {
    return this.dataview.getUint32(136, LE);
  }

  set maxComputeWorkgroupSizeZ(value: number) {
    this.dataview.setUint32(136, value, LE);
  }

  get maxComputeWorkgroupsPerDimension(): number {
    return this.dataview.getUint32(140, LE);
  }

  set maxComputeWorkgroupsPerDimension(value: number) {
    this.dataview.setUint32(140, value, LE);
  }

  static from() {
    // not implemented
  }
}

export class MultisampleState extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get count(): number {
    return this.dataview.getUint32(8, LE);
  }

  set count(value: number) {
    this.dataview.setUint32(8, value, LE);
  }

  get mask(): number {
    return this.dataview.getUint32(12, LE);
  }

  set mask(value: number) {
    this.dataview.setUint32(12, value, LE);
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

export class Origin3D extends UC.StructBase {
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
    return this.dataview.getUint32(0, LE);
  }

  set x(value: number) {
    this.dataview.setUint32(0, value, LE);
  }

  get y(): number {
    return this.dataview.getUint32(4, LE);
  }

  set y(value: number) {
    this.dataview.setUint32(4, value, LE);
  }

  get z(): number {
    return this.dataview.getUint32(8, LE);
  }

  set z(value: number) {
    this.dataview.setUint32(8, value, LE);
  }

  static from() {
    // not implemented
  }
}

export class PipelineLayoutDescriptor extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get bindGroupLayoutCount(): bigint {
    return this.dataview.getBigUint64(16, LE);
  }

  set bindGroupLayoutCount(value: bigint | number) {
    this.dataview.setBigUint64(16, BigInt(value), LE);
  }

  get bindGroupLayouts(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(24, LE));
  }

  set bindGroupLayouts(value: Deno.PointerValue) {
    this.dataview.setBigUint64(24, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  static from() {
    // not implemented
  }
}

export class PrimitiveDepthClipControl extends UC.StructBase {
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

export class PrimitiveState extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get topology(): E.PrimitiveTopology {
    return this.dataview.getUint32(8, LE) as E.PrimitiveTopology;
  }

  set topology(value: E.PrimitiveTopology | number) {
    this.dataview.setUint32(8, value, LE);
  }

  get stripIndexFormat(): E.IndexFormat {
    return this.dataview.getUint32(12, LE) as E.IndexFormat;
  }

  set stripIndexFormat(value: E.IndexFormat | number) {
    this.dataview.setUint32(12, value, LE);
  }

  get frontFace(): E.FrontFace {
    return this.dataview.getUint32(16, LE) as E.FrontFace;
  }

  set frontFace(value: E.FrontFace | number) {
    this.dataview.setUint32(16, value, LE);
  }

  get cullMode(): E.CullMode {
    return this.dataview.getUint32(20, LE) as E.CullMode;
  }

  set cullMode(value: E.CullMode | number) {
    this.dataview.setUint32(20, value, LE);
  }

  static from() {
    // not implemented
  }
}

export class QuerySetDescriptor extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get type(): E.QueryType {
    return this.dataview.getUint32(16, LE) as E.QueryType;
  }

  set type(value: E.QueryType | number) {
    this.dataview.setUint32(16, value, LE);
  }

  get count(): number {
    return this.dataview.getUint32(20, LE);
  }

  set count(value: number) {
    this.dataview.setUint32(20, value, LE);
  }

  get pipelineStatistics(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(24, LE));
  }

  set pipelineStatistics(value: Deno.PointerValue) {
    this.dataview.setBigUint64(24, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get pipelineStatisticsCount(): bigint {
    return this.dataview.getBigUint64(32, LE);
  }

  set pipelineStatisticsCount(value: bigint | number) {
    this.dataview.setBigUint64(32, BigInt(value), LE);
  }

  static from() {
    // not implemented
  }
}

export class QueueDescriptor extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  static from() {
    // not implemented
  }
}

export class RenderBundleDescriptor extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  static from() {
    // not implemented
  }
}

export class RenderBundleEncoderDescriptor extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get colorFormatsCount(): bigint {
    return this.dataview.getBigUint64(16, LE);
  }

  set colorFormatsCount(value: bigint | number) {
    this.dataview.setBigUint64(16, BigInt(value), LE);
  }

  get colorFormats(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(24, LE));
  }

  set colorFormats(value: Deno.PointerValue) {
    this.dataview.setBigUint64(24, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get depthStencilFormat(): E.TextureFormat {
    return this.dataview.getUint32(32, LE) as E.TextureFormat;
  }

  set depthStencilFormat(value: E.TextureFormat | number) {
    this.dataview.setUint32(32, value, LE);
  }

  get sampleCount(): number {
    return this.dataview.getUint32(36, LE);
  }

  set sampleCount(value: number) {
    this.dataview.setUint32(36, value, LE);
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

export class RenderPassDepthStencilAttachment extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set view(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get depthLoadOp(): E.LoadOp {
    return this.dataview.getUint32(8, LE) as E.LoadOp;
  }

  set depthLoadOp(value: E.LoadOp | number) {
    this.dataview.setUint32(8, value, LE);
  }

  get depthStoreOp(): E.StoreOp {
    return this.dataview.getUint32(12, LE) as E.StoreOp;
  }

  set depthStoreOp(value: E.StoreOp | number) {
    this.dataview.setUint32(12, value, LE);
  }

  get depthClearValue(): number {
    return this.dataview.getFloat32(16, LE);
  }

  set depthClearValue(value: number) {
    this.dataview.setFloat32(16, value, LE);
  }

  get depthReadOnly(): boolean {
    return this.dataview.getUint8(20) == 1;
  }

  set depthReadOnly(value: boolean | number | bigint) {
    this.dataview.setUint8(20, value ? 1 : 0);
  }

  get stencilLoadOp(): E.LoadOp {
    return this.dataview.getUint32(24, LE) as E.LoadOp;
  }

  set stencilLoadOp(value: E.LoadOp | number) {
    this.dataview.setUint32(24, value, LE);
  }

  get stencilStoreOp(): E.StoreOp {
    return this.dataview.getUint32(28, LE) as E.StoreOp;
  }

  set stencilStoreOp(value: E.StoreOp | number) {
    this.dataview.setUint32(28, value, LE);
  }

  get stencilClearValue(): number {
    return this.dataview.getUint32(32, LE);
  }

  set stencilClearValue(value: number) {
    this.dataview.setUint32(32, value, LE);
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

export class RenderPassDescriptorMaxDrawCount extends UC.StructBase {
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
    return this.dataview.getBigUint64(16, LE);
  }

  set maxDrawCount(value: bigint | number) {
    this.dataview.setBigUint64(16, BigInt(value), LE);
  }

  static from() {
    // not implemented
  }
}

export class RenderPassTimestampWrite extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set querySet(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get queryIndex(): number {
    return this.dataview.getUint32(8, LE);
  }

  set queryIndex(value: number) {
    this.dataview.setUint32(8, value, LE);
  }

  get location(): E.RenderPassTimestampLocation {
    return this.dataview.getUint32(12, LE) as E.RenderPassTimestampLocation;
  }

  set location(value: E.RenderPassTimestampLocation | number) {
    this.dataview.setUint32(12, value, LE);
  }

  static from() {
    // not implemented
  }
}

export class RequestAdapterOptions extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get compatibleSurface(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, LE));
  }

  set compatibleSurface(value: Deno.PointerValue) {
    this.dataview.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get powerPreference(): E.PowerPreference {
    return this.dataview.getUint32(16, LE) as E.PowerPreference;
  }

  set powerPreference(value: E.PowerPreference | number) {
    this.dataview.setUint32(16, value, LE);
  }

  get backendType(): E.BackendType {
    return this.dataview.getUint32(20, LE) as E.BackendType;
  }

  set backendType(value: E.BackendType | number) {
    this.dataview.setUint32(20, value, LE);
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

export class SamplerBindingLayout extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get type(): E.SamplerBindingType {
    return this.dataview.getUint32(8, LE) as E.SamplerBindingType;
  }

  set type(value: E.SamplerBindingType | number) {
    this.dataview.setUint32(8, value, LE);
  }

  static from() {
    // not implemented
  }
}

export class SamplerDescriptor extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get addressModeU(): E.AddressMode {
    return this.dataview.getUint32(16, LE) as E.AddressMode;
  }

  set addressModeU(value: E.AddressMode | number) {
    this.dataview.setUint32(16, value, LE);
  }

  get addressModeV(): E.AddressMode {
    return this.dataview.getUint32(20, LE) as E.AddressMode;
  }

  set addressModeV(value: E.AddressMode | number) {
    this.dataview.setUint32(20, value, LE);
  }

  get addressModeW(): E.AddressMode {
    return this.dataview.getUint32(24, LE) as E.AddressMode;
  }

  set addressModeW(value: E.AddressMode | number) {
    this.dataview.setUint32(24, value, LE);
  }

  get magFilter(): E.FilterMode {
    return this.dataview.getUint32(28, LE) as E.FilterMode;
  }

  set magFilter(value: E.FilterMode | number) {
    this.dataview.setUint32(28, value, LE);
  }

  get minFilter(): E.FilterMode {
    return this.dataview.getUint32(32, LE) as E.FilterMode;
  }

  set minFilter(value: E.FilterMode | number) {
    this.dataview.setUint32(32, value, LE);
  }

  get mipmapFilter(): E.MipmapFilterMode {
    return this.dataview.getUint32(36, LE) as E.MipmapFilterMode;
  }

  set mipmapFilter(value: E.MipmapFilterMode | number) {
    this.dataview.setUint32(36, value, LE);
  }

  get lodMinClamp(): number {
    return this.dataview.getFloat32(40, LE);
  }

  set lodMinClamp(value: number) {
    this.dataview.setFloat32(40, value, LE);
  }

  get lodMaxClamp(): number {
    return this.dataview.getFloat32(44, LE);
  }

  set lodMaxClamp(value: number) {
    this.dataview.setFloat32(44, value, LE);
  }

  get compare(): E.CompareFunction {
    return this.dataview.getUint32(48, LE) as E.CompareFunction;
  }

  set compare(value: E.CompareFunction | number) {
    this.dataview.setUint32(48, value, LE);
  }

  get maxAnisotropy(): number {
    return this.dataview.getUint16(52, LE);
  }

  set maxAnisotropy(value: number) {
    this.dataview.setUint16(52, value, LE);
  }

  static from() {
    // not implemented
  }
}

export class ShaderModuleCompilationHint extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get entryPoint(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, LE));
  }

  set entryPoint(value: Deno.PointerValue) {
    this.dataview.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get layout(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, LE));
  }

  set layout(value: Deno.PointerValue) {
    this.dataview.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  static from() {
    // not implemented
  }
}

export class ShaderModuleSPIRVDescriptor extends UC.StructBase {
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
    return this.dataview.getUint32(16, LE);
  }

  set codeSize(value: number) {
    this.dataview.setUint32(16, value, LE);
  }

  get code(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(24, LE));
  }

  set code(value: Deno.PointerValue) {
    this.dataview.setBigUint64(24, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  static from() {
    // not implemented
  }
}

export class ShaderModuleWGSLDescriptor extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, LE));
  }

  set code(value: Deno.PointerValue) {
    this.dataview.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  static from() {
    // not implemented
  }
}

export class StencilFaceState extends UC.StructBase {
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

  get compare(): E.CompareFunction {
    return this.dataview.getUint32(0, LE) as E.CompareFunction;
  }

  set compare(value: E.CompareFunction | number) {
    this.dataview.setUint32(0, value, LE);
  }

  get failOp(): E.StencilOperation {
    return this.dataview.getUint32(4, LE) as E.StencilOperation;
  }

  set failOp(value: E.StencilOperation | number) {
    this.dataview.setUint32(4, value, LE);
  }

  get depthFailOp(): E.StencilOperation {
    return this.dataview.getUint32(8, LE) as E.StencilOperation;
  }

  set depthFailOp(value: E.StencilOperation | number) {
    this.dataview.setUint32(8, value, LE);
  }

  get passOp(): E.StencilOperation {
    return this.dataview.getUint32(12, LE) as E.StencilOperation;
  }

  set passOp(value: E.StencilOperation | number) {
    this.dataview.setUint32(12, value, LE);
  }

  static from() {
    // not implemented
  }
}

export class StorageTextureBindingLayout extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get access(): E.StorageTextureAccess {
    return this.dataview.getUint32(8, LE) as E.StorageTextureAccess;
  }

  set access(value: E.StorageTextureAccess | number) {
    this.dataview.setUint32(8, value, LE);
  }

  get format(): E.TextureFormat {
    return this.dataview.getUint32(12, LE) as E.TextureFormat;
  }

  set format(value: E.TextureFormat | number) {
    this.dataview.setUint32(12, value, LE);
  }

  get viewDimension(): E.TextureViewDimension {
    return this.dataview.getUint32(16, LE) as E.TextureViewDimension;
  }

  set viewDimension(value: E.TextureViewDimension | number) {
    this.dataview.setUint32(16, value, LE);
  }

  static from() {
    // not implemented
  }
}

export class SurfaceDescriptor extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  static from() {
    // not implemented
  }
}

export class SurfaceDescriptorFromAndroidNativeWindow extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, LE));
  }

  set window(value: Deno.PointerValue) {
    this.dataview.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  static from() {
    // not implemented
  }
}

export class SurfaceDescriptorFromCanvasHTMLSelector extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, LE));
  }

  set selector(value: Deno.PointerValue) {
    this.dataview.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  static from() {
    // not implemented
  }
}

export class SurfaceDescriptorFromMetalLayer extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, LE));
  }

  set layer(value: Deno.PointerValue) {
    this.dataview.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  static from() {
    // not implemented
  }
}

export class SurfaceDescriptorFromWaylandSurface extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, LE));
  }

  set display(value: Deno.PointerValue) {
    this.dataview.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get surface(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(24, LE));
  }

  set surface(value: Deno.PointerValue) {
    this.dataview.setBigUint64(24, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  static from() {
    // not implemented
  }
}

export class SurfaceDescriptorFromWindowsHWND extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, LE));
  }

  set hinstance(value: Deno.PointerValue) {
    this.dataview.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get hwnd(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(24, LE));
  }

  set hwnd(value: Deno.PointerValue) {
    this.dataview.setBigUint64(24, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  static from() {
    // not implemented
  }
}

export class SurfaceDescriptorFromXcbWindow extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, LE));
  }

  set connection(value: Deno.PointerValue) {
    this.dataview.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get window(): number {
    return this.dataview.getUint32(24, LE);
  }

  set window(value: number) {
    this.dataview.setUint32(24, value, LE);
  }

  static from() {
    // not implemented
  }
}

export class SurfaceDescriptorFromXlibWindow extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, LE));
  }

  set display(value: Deno.PointerValue) {
    this.dataview.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get window(): number {
    return this.dataview.getUint32(24, LE);
  }

  set window(value: number) {
    this.dataview.setUint32(24, value, LE);
  }

  static from() {
    // not implemented
  }
}

export class SwapChainDescriptor extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get usage(): number {
    return this.dataview.getUint32(16, LE);
  }

  set usage(value: number) {
    this.dataview.setUint32(16, value, LE);
  }

  get format(): E.TextureFormat {
    return this.dataview.getUint32(20, LE) as E.TextureFormat;
  }

  set format(value: E.TextureFormat | number) {
    this.dataview.setUint32(20, value, LE);
  }

  get width(): number {
    return this.dataview.getUint32(24, LE);
  }

  set width(value: number) {
    this.dataview.setUint32(24, value, LE);
  }

  get height(): number {
    return this.dataview.getUint32(28, LE);
  }

  set height(value: number) {
    this.dataview.setUint32(28, value, LE);
  }

  get presentMode(): E.PresentMode {
    return this.dataview.getUint32(32, LE) as E.PresentMode;
  }

  set presentMode(value: E.PresentMode | number) {
    this.dataview.setUint32(32, value, LE);
  }

  static from() {
    // not implemented
  }
}

export class TextureBindingLayout extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get sampleType(): E.TextureSampleType {
    return this.dataview.getUint32(8, LE) as E.TextureSampleType;
  }

  set sampleType(value: E.TextureSampleType | number) {
    this.dataview.setUint32(8, value, LE);
  }

  get viewDimension(): E.TextureViewDimension {
    return this.dataview.getUint32(12, LE) as E.TextureViewDimension;
  }

  set viewDimension(value: E.TextureViewDimension | number) {
    this.dataview.setUint32(12, value, LE);
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

export class TextureDataLayout extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get offset(): bigint {
    return this.dataview.getBigUint64(8, LE);
  }

  set offset(value: bigint | number) {
    this.dataview.setBigUint64(8, BigInt(value), LE);
  }

  get bytesPerRow(): number {
    return this.dataview.getUint32(16, LE);
  }

  set bytesPerRow(value: number) {
    this.dataview.setUint32(16, value, LE);
  }

  get rowsPerImage(): number {
    return this.dataview.getUint32(20, LE);
  }

  set rowsPerImage(value: number) {
    this.dataview.setUint32(20, value, LE);
  }

  static from() {
    // not implemented
  }
}

export class TextureViewDescriptor extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get format(): E.TextureFormat {
    return this.dataview.getUint32(16, LE) as E.TextureFormat;
  }

  set format(value: E.TextureFormat | number) {
    this.dataview.setUint32(16, value, LE);
  }

  get dimension(): E.TextureViewDimension {
    return this.dataview.getUint32(20, LE) as E.TextureViewDimension;
  }

  set dimension(value: E.TextureViewDimension | number) {
    this.dataview.setUint32(20, value, LE);
  }

  get baseMipLevel(): number {
    return this.dataview.getUint32(24, LE);
  }

  set baseMipLevel(value: number) {
    this.dataview.setUint32(24, value, LE);
  }

  get mipLevelCount(): number {
    return this.dataview.getUint32(28, LE);
  }

  set mipLevelCount(value: number) {
    this.dataview.setUint32(28, value, LE);
  }

  get baseArrayLayer(): number {
    return this.dataview.getUint32(32, LE);
  }

  set baseArrayLayer(value: number) {
    this.dataview.setUint32(32, value, LE);
  }

  get arrayLayerCount(): number {
    return this.dataview.getUint32(36, LE);
  }

  set arrayLayerCount(value: number) {
    this.dataview.setUint32(36, value, LE);
  }

  get aspect(): E.TextureAspect {
    return this.dataview.getUint32(40, LE) as E.TextureAspect;
  }

  set aspect(value: E.TextureAspect | number) {
    this.dataview.setUint32(40, value, LE);
  }

  static from() {
    // not implemented
  }
}

export class VertexAttribute extends UC.StructBase {
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

  get format(): E.VertexFormat {
    return this.dataview.getUint32(0, LE) as E.VertexFormat;
  }

  set format(value: E.VertexFormat | number) {
    this.dataview.setUint32(0, value, LE);
  }

  get offset(): bigint {
    return this.dataview.getBigUint64(8, LE);
  }

  set offset(value: bigint | number) {
    this.dataview.setBigUint64(8, BigInt(value), LE);
  }

  get shaderLocation(): number {
    return this.dataview.getUint32(16, LE);
  }

  set shaderLocation(value: number) {
    this.dataview.setUint32(16, value, LE);
  }

  static from() {
    // not implemented
  }
}

export class BindGroupDescriptor extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get layout(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, LE));
  }

  set layout(value: Deno.PointerValue) {
    this.dataview.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get entryCount(): bigint {
    return this.dataview.getBigUint64(24, LE);
  }

  set entryCount(value: bigint | number) {
    this.dataview.setBigUint64(24, BigInt(value), LE);
  }

  get entries(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(32, LE));
  }

  set entries(value: Deno.PointerValue) {
    this.dataview.setBigUint64(32, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  static from() {
    // not implemented
  }
}

export class BindGroupLayoutEntry extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get binding(): number {
    return this.dataview.getUint32(8, LE);
  }

  set binding(value: number) {
    this.dataview.setUint32(8, value, LE);
  }

  get visibility(): number {
    return this.dataview.getUint32(12, LE);
  }

  set visibility(value: number) {
    this.dataview.setUint32(12, value, LE);
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

export class BlendState extends UC.StructBase {
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

export class CompilationInfo extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get messageCount(): bigint {
    return this.dataview.getBigUint64(8, LE);
  }

  set messageCount(value: bigint | number) {
    this.dataview.setBigUint64(8, BigInt(value), LE);
  }

  get messages(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, LE));
  }

  set messages(value: Deno.PointerValue) {
    this.dataview.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  static from() {
    // not implemented
  }
}

export class ComputePassDescriptor extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get timestampWriteCount(): bigint {
    return this.dataview.getBigUint64(16, LE);
  }

  set timestampWriteCount(value: bigint | number) {
    this.dataview.setBigUint64(16, BigInt(value), LE);
  }

  get timestampWrites(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(24, LE));
  }

  set timestampWrites(value: Deno.PointerValue) {
    this.dataview.setBigUint64(24, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  static from() {
    // not implemented
  }
}

export class DepthStencilState extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get format(): E.TextureFormat {
    return this.dataview.getUint32(8, LE) as E.TextureFormat;
  }

  set format(value: E.TextureFormat | number) {
    this.dataview.setUint32(8, value, LE);
  }

  get depthWriteEnabled(): boolean {
    return this.dataview.getUint8(12) == 1;
  }

  set depthWriteEnabled(value: boolean | number | bigint) {
    this.dataview.setUint8(12, value ? 1 : 0);
  }

  get depthCompare(): E.CompareFunction {
    return this.dataview.getUint32(16, LE) as E.CompareFunction;
  }

  set depthCompare(value: E.CompareFunction | number) {
    this.dataview.setUint32(16, value, LE);
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
    return this.dataview.getUint32(52, LE);
  }

  set stencilReadMask(value: number) {
    this.dataview.setUint32(52, value, LE);
  }

  get stencilWriteMask(): number {
    return this.dataview.getUint32(56, LE);
  }

  set stencilWriteMask(value: number) {
    this.dataview.setUint32(56, value, LE);
  }

  get depthBias(): number {
    return this.dataview.getInt32(60, LE);
  }

  set depthBias(value: number) {
    this.dataview.setInt32(60, value, LE);
  }

  get depthBiasSlopeScale(): number {
    return this.dataview.getFloat32(64, LE);
  }

  set depthBiasSlopeScale(value: number) {
    this.dataview.setFloat32(64, value, LE);
  }

  get depthBiasClamp(): number {
    return this.dataview.getFloat32(68, LE);
  }

  set depthBiasClamp(value: number) {
    this.dataview.setFloat32(68, value, LE);
  }

  static from() {
    // not implemented
  }
}

export class ImageCopyBuffer extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(32, LE));
  }

  set buffer(value: Deno.PointerValue) {
    this.dataview.setBigUint64(32, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  static from() {
    // not implemented
  }
}

export class ImageCopyTexture extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get texture(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, LE));
  }

  set texture(value: Deno.PointerValue) {
    this.dataview.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get mipLevel(): number {
    return this.dataview.getUint32(16, LE);
  }

  set mipLevel(value: number) {
    this.dataview.setUint32(16, value, LE);
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

  get aspect(): E.TextureAspect {
    return this.dataview.getUint32(32, LE) as E.TextureAspect;
  }

  set aspect(value: E.TextureAspect | number) {
    this.dataview.setUint32(32, value, LE);
  }

  static from() {
    // not implemented
  }
}

export class ProgrammableStageDescriptor extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get module(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, LE));
  }

  set module(value: Deno.PointerValue) {
    this.dataview.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get entryPoint(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, LE));
  }

  set entryPoint(value: Deno.PointerValue) {
    this.dataview.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get constantCount(): bigint {
    return this.dataview.getBigUint64(24, LE);
  }

  set constantCount(value: bigint | number) {
    this.dataview.setBigUint64(24, BigInt(value), LE);
  }

  get constants(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(32, LE));
  }

  set constants(value: Deno.PointerValue) {
    this.dataview.setBigUint64(32, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  static from() {
    // not implemented
  }
}

export class RenderPassColorAttachment extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set view(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get resolveTarget(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, LE));
  }

  set resolveTarget(value: Deno.PointerValue) {
    this.dataview.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get loadOp(): E.LoadOp {
    return this.dataview.getUint32(16, LE) as E.LoadOp;
  }

  set loadOp(value: E.LoadOp | number) {
    this.dataview.setUint32(16, value, LE);
  }

  get storeOp(): E.StoreOp {
    return this.dataview.getUint32(20, LE) as E.StoreOp;
  }

  set storeOp(value: E.StoreOp | number) {
    this.dataview.setUint32(20, value, LE);
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

export class RequiredLimits extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
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

export class ShaderModuleDescriptor extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get hintCount(): bigint {
    return this.dataview.getBigUint64(16, LE);
  }

  set hintCount(value: bigint | number) {
    this.dataview.setBigUint64(16, BigInt(value), LE);
  }

  get hints(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(24, LE));
  }

  set hints(value: Deno.PointerValue) {
    this.dataview.setBigUint64(24, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  static from() {
    // not implemented
  }
}

export class SupportedLimits extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
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

export class TextureDescriptor extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get usage(): number {
    return this.dataview.getUint32(16, LE);
  }

  set usage(value: number) {
    this.dataview.setUint32(16, value, LE);
  }

  get dimension(): E.TextureDimension {
    return this.dataview.getUint32(20, LE) as E.TextureDimension;
  }

  set dimension(value: E.TextureDimension | number) {
    this.dataview.setUint32(20, value, LE);
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

  get format(): E.TextureFormat {
    return this.dataview.getUint32(36, LE) as E.TextureFormat;
  }

  set format(value: E.TextureFormat | number) {
    this.dataview.setUint32(36, value, LE);
  }

  get mipLevelCount(): number {
    return this.dataview.getUint32(40, LE);
  }

  set mipLevelCount(value: number) {
    this.dataview.setUint32(40, value, LE);
  }

  get sampleCount(): number {
    return this.dataview.getUint32(44, LE);
  }

  set sampleCount(value: number) {
    this.dataview.setUint32(44, value, LE);
  }

  get viewFormatCount(): bigint {
    return this.dataview.getBigUint64(48, LE);
  }

  set viewFormatCount(value: bigint | number) {
    this.dataview.setBigUint64(48, BigInt(value), LE);
  }

  get viewFormats(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(56, LE));
  }

  set viewFormats(value: Deno.PointerValue) {
    this.dataview.setBigUint64(56, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  static from() {
    // not implemented
  }
}

export class VertexBufferLayout extends UC.StructBase {
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
    return this.dataview.getBigUint64(0, LE);
  }

  set arrayStride(value: bigint | number) {
    this.dataview.setBigUint64(0, BigInt(value), LE);
  }

  get stepMode(): E.VertexStepMode {
    return this.dataview.getUint32(8, LE) as E.VertexStepMode;
  }

  set stepMode(value: E.VertexStepMode | number) {
    this.dataview.setUint32(8, value, LE);
  }

  get attributeCount(): bigint {
    return this.dataview.getBigUint64(16, LE);
  }

  set attributeCount(value: bigint | number) {
    this.dataview.setBigUint64(16, BigInt(value), LE);
  }

  get attributes(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(24, LE));
  }

  set attributes(value: Deno.PointerValue) {
    this.dataview.setBigUint64(24, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  static from() {
    // not implemented
  }
}

export class BindGroupLayoutDescriptor extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get entryCount(): bigint {
    return this.dataview.getBigUint64(16, LE);
  }

  set entryCount(value: bigint | number) {
    this.dataview.setBigUint64(16, BigInt(value), LE);
  }

  get entries(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(24, LE));
  }

  set entries(value: Deno.PointerValue) {
    this.dataview.setBigUint64(24, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  static from() {
    // not implemented
  }
}

export class ColorTargetState extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get format(): E.TextureFormat {
    return this.dataview.getUint32(8, LE) as E.TextureFormat;
  }

  set format(value: E.TextureFormat | number) {
    this.dataview.setUint32(8, value, LE);
  }

  get blend(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, LE));
  }

  set blend(value: Deno.PointerValue) {
    this.dataview.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get writeMask(): number {
    return this.dataview.getUint32(24, LE);
  }

  set writeMask(value: number) {
    this.dataview.setUint32(24, value, LE);
  }

  static from() {
    // not implemented
  }
}

export class ComputePipelineDescriptor extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get layout(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, LE));
  }

  set layout(value: Deno.PointerValue) {
    this.dataview.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), LE);
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

export class DeviceDescriptor extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get requiredFeaturesCount(): bigint {
    return this.dataview.getBigUint64(16, LE);
  }

  set requiredFeaturesCount(value: bigint | number) {
    this.dataview.setBigUint64(16, BigInt(value), LE);
  }

  get requiredFeatures(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(24, LE));
  }

  set requiredFeatures(value: Deno.PointerValue) {
    this.dataview.setBigUint64(24, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get requiredLimits(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(32, LE));
  }

  set requiredLimits(value: Deno.PointerValue) {
    this.dataview.setBigUint64(32, BigInt(Deno.UnsafePointer.value(value)), LE);
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(56, LE));
  }

  set deviceLostCallback(value: Deno.PointerValue) {
    this.dataview.setBigUint64(56, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get deviceLostUserdata(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(64, LE));
  }

  set deviceLostUserdata(value: Deno.PointerValue) {
    this.dataview.setBigUint64(64, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  static from() {
    // not implemented
  }
}

export class RenderPassDescriptor extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get colorAttachmentCount(): bigint {
    return this.dataview.getBigUint64(16, LE);
  }

  set colorAttachmentCount(value: bigint | number) {
    this.dataview.setBigUint64(16, BigInt(value), LE);
  }

  get colorAttachments(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(24, LE));
  }

  set colorAttachments(value: Deno.PointerValue) {
    this.dataview.setBigUint64(24, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get depthStencilAttachment(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(32, LE));
  }

  set depthStencilAttachment(value: Deno.PointerValue) {
    this.dataview.setBigUint64(32, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get occlusionQuerySet(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(40, LE));
  }

  set occlusionQuerySet(value: Deno.PointerValue) {
    this.dataview.setBigUint64(40, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get timestampWriteCount(): bigint {
    return this.dataview.getBigUint64(48, LE);
  }

  set timestampWriteCount(value: bigint | number) {
    this.dataview.setBigUint64(48, BigInt(value), LE);
  }

  get timestampWrites(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(56, LE));
  }

  set timestampWrites(value: Deno.PointerValue) {
    this.dataview.setBigUint64(56, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  static from() {
    // not implemented
  }
}

export class VertexState extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get module(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, LE));
  }

  set module(value: Deno.PointerValue) {
    this.dataview.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get entryPoint(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, LE));
  }

  set entryPoint(value: Deno.PointerValue) {
    this.dataview.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get constantCount(): bigint {
    return this.dataview.getBigUint64(24, LE);
  }

  set constantCount(value: bigint | number) {
    this.dataview.setBigUint64(24, BigInt(value), LE);
  }

  get constants(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(32, LE));
  }

  set constants(value: Deno.PointerValue) {
    this.dataview.setBigUint64(32, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get bufferCount(): bigint {
    return this.dataview.getBigUint64(40, LE);
  }

  set bufferCount(value: bigint | number) {
    this.dataview.setBigUint64(40, BigInt(value), LE);
  }

  get buffers(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(48, LE));
  }

  set buffers(value: Deno.PointerValue) {
    this.dataview.setBigUint64(48, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  static from() {
    // not implemented
  }
}

export class FragmentState extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get module(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, LE));
  }

  set module(value: Deno.PointerValue) {
    this.dataview.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get entryPoint(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, LE));
  }

  set entryPoint(value: Deno.PointerValue) {
    this.dataview.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get constantCount(): bigint {
    return this.dataview.getBigUint64(24, LE);
  }

  set constantCount(value: bigint | number) {
    this.dataview.setBigUint64(24, BigInt(value), LE);
  }

  get constants(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(32, LE));
  }

  set constants(value: Deno.PointerValue) {
    this.dataview.setBigUint64(32, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get targetCount(): bigint {
    return this.dataview.getBigUint64(40, LE);
  }

  set targetCount(value: bigint | number) {
    this.dataview.setBigUint64(40, BigInt(value), LE);
  }

  get targets(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(48, LE));
  }

  set targets(value: Deno.PointerValue) {
    this.dataview.setBigUint64(48, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  static from() {
    // not implemented
  }
}

export class RenderPipelineDescriptor extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get label(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, LE));
  }

  set label(value: Deno.PointerValue) {
    this.dataview.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get layout(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, LE));
  }

  set layout(value: Deno.PointerValue) {
    this.dataview.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), LE);
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(104, LE));
  }

  set depthStencil(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      104,
      BigInt(Deno.UnsafePointer.value(value)),
      LE,
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(136, LE));
  }

  set fragment(value: Deno.PointerValue) {
    this.dataview.setBigUint64(
      136,
      BigInt(Deno.UnsafePointer.value(value)),
      LE,
    );
  }

  static from() {
    // not implemented
  }
}

export class ChainedStruct extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set next(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get sType(): E.SType {
    return this.dataview.getUint32(8, LE) as E.SType;
  }

  set sType(value: E.SType | number) {
    this.dataview.setUint32(8, value, LE);
  }

  static from() {
    // not implemented
  }
}

export class ChainedStructOut extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set next(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get sType(): E.SType {
    return this.dataview.getUint32(8, LE) as E.SType;
  }

  set sType(value: E.SType | number) {
    this.dataview.setUint32(8, value, LE);
  }

  static from() {
    // not implemented
  }
}

export class InstanceExtras extends UC.StructBase {
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
    return this.dataview.getUint32(16, LE);
  }

  set backends(value: number) {
    this.dataview.setUint32(16, value, LE);
  }

  get dx12ShaderCompiler(): E.Dx12Compiler {
    return this.dataview.getUint32(20, LE) as E.Dx12Compiler;
  }

  set dx12ShaderCompiler(value: E.Dx12Compiler | number) {
    this.dataview.setUint32(20, value, LE);
  }

  get dxilPath(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(24, LE));
  }

  set dxilPath(value: Deno.PointerValue) {
    this.dataview.setBigUint64(24, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get dxcPath(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(32, LE));
  }

  set dxcPath(value: Deno.PointerValue) {
    this.dataview.setBigUint64(32, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  static from() {
    // not implemented
  }
}

export class DeviceExtras extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(16, LE));
  }

  set tracePath(value: Deno.PointerValue) {
    this.dataview.setBigUint64(16, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  static from() {
    // not implemented
  }
}

export class RequiredLimitsExtras extends UC.StructBase {
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
    return this.dataview.getUint32(16, LE);
  }

  set maxPushConstantSize(value: number) {
    this.dataview.setUint32(16, value, LE);
  }

  static from() {
    // not implemented
  }
}

export class SupportedLimitsExtras extends UC.StructBase {
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
    return this.dataview.getUint32(16, LE);
  }

  set maxPushConstantSize(value: number) {
    this.dataview.setUint32(16, value, LE);
  }

  static from() {
    // not implemented
  }
}

export class PushConstantRange extends UC.StructBase {
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
    return this.dataview.getUint32(0, LE);
  }

  set stages(value: number) {
    this.dataview.setUint32(0, value, LE);
  }

  get start(): number {
    return this.dataview.getUint32(4, LE);
  }

  set start(value: number) {
    this.dataview.setUint32(4, value, LE);
  }

  get end(): number {
    return this.dataview.getUint32(8, LE);
  }

  set end(value: number) {
    this.dataview.setUint32(8, value, LE);
  }

  static from() {
    // not implemented
  }
}

export class PipelineLayoutExtras extends UC.StructBase {
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
    return this.dataview.getUint32(16, LE);
  }

  set pushConstantRangeCount(value: number) {
    this.dataview.setUint32(16, value, LE);
  }

  get pushConstantRanges(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(24, LE));
  }

  set pushConstantRanges(value: Deno.PointerValue) {
    this.dataview.setBigUint64(24, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  static from() {
    // not implemented
  }
}

export class WrappedSubmissionIndex extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set queue(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get submissionIndex(): bigint {
    return this.dataview.getBigUint64(8, LE);
  }

  set submissionIndex(value: bigint | number) {
    this.dataview.setBigUint64(8, BigInt(value), LE);
  }

  static from() {
    // not implemented
  }
}

export class ShaderDefine extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set name(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get value(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, LE));
  }

  set value(value: Deno.PointerValue) {
    this.dataview.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  static from() {
    // not implemented
  }
}

export class ShaderModuleGLSLDescriptor extends UC.StructBase {
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

  get stage(): E.ShaderStage {
    return this.dataview.getUint32(16, LE) as E.ShaderStage;
  }

  set stage(value: E.ShaderStage | number) {
    this.dataview.setUint32(16, value, LE);
  }

  get code(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(24, LE));
  }

  set code(value: Deno.PointerValue) {
    this.dataview.setBigUint64(24, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get defineCount(): number {
    return this.dataview.getUint32(32, LE);
  }

  set defineCount(value: number) {
    this.dataview.setUint32(32, value, LE);
  }

  get defines(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(40, LE));
  }

  set defines(value: Deno.PointerValue) {
    this.dataview.setBigUint64(40, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  static from() {
    // not implemented
  }
}

export class StorageReport extends UC.StructBase {
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
    return this.dataview.getBigUint64(0, LE);
  }

  set numOccupied(value: bigint | number) {
    this.dataview.setBigUint64(0, BigInt(value), LE);
  }

  get numVacant(): bigint {
    return this.dataview.getBigUint64(8, LE);
  }

  set numVacant(value: bigint | number) {
    this.dataview.setBigUint64(8, BigInt(value), LE);
  }

  get numError(): bigint {
    return this.dataview.getBigUint64(16, LE);
  }

  set numError(value: bigint | number) {
    this.dataview.setBigUint64(16, BigInt(value), LE);
  }

  get elementSize(): bigint {
    return this.dataview.getBigUint64(24, LE);
  }

  set elementSize(value: bigint | number) {
    this.dataview.setBigUint64(24, BigInt(value), LE);
  }

  static from() {
    // not implemented
  }
}

export class HubReport extends UC.StructBase {
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

export class GlobalReport extends UC.StructBase {
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

  get backendType(): E.BackendType {
    return this.dataview.getUint32(32, LE) as E.BackendType;
  }

  set backendType(value: E.BackendType | number) {
    this.dataview.setUint32(32, value, LE);
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

export class SurfaceCapabilities extends UC.StructBase {
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
    return this.dataview.getBigUint64(0, LE);
  }

  set formatCount(value: bigint | number) {
    this.dataview.setBigUint64(0, BigInt(value), LE);
  }

  get formats(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(8, LE));
  }

  set formats(value: Deno.PointerValue) {
    this.dataview.setBigUint64(8, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get presentModeCount(): bigint {
    return this.dataview.getBigUint64(16, LE);
  }

  set presentModeCount(value: bigint | number) {
    this.dataview.setBigUint64(16, BigInt(value), LE);
  }

  get presentModes(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(24, LE));
  }

  set presentModes(value: Deno.PointerValue) {
    this.dataview.setBigUint64(24, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get alphaModeCount(): bigint {
    return this.dataview.getBigUint64(32, LE);
  }

  set alphaModeCount(value: bigint | number) {
    this.dataview.setBigUint64(32, BigInt(value), LE);
  }

  get alphaModes(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(40, LE));
  }

  set alphaModes(value: Deno.PointerValue) {
    this.dataview.setBigUint64(40, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  static from() {
    // not implemented
  }
}

export class SwapChainDescriptorExtras extends UC.StructBase {
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

  get alphaMode(): E.CompositeAlphaMode {
    return this.dataview.getUint32(16, LE) as E.CompositeAlphaMode;
  }

  set alphaMode(value: E.CompositeAlphaMode | number) {
    this.dataview.setUint32(16, value, LE);
  }

  get viewFormatCount(): bigint {
    return this.dataview.getBigUint64(24, LE);
  }

  set viewFormatCount(value: bigint | number) {
    this.dataview.setBigUint64(24, BigInt(value), LE);
  }

  get viewFormats(): Deno.PointerValue {
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(32, LE));
  }

  set viewFormats(value: Deno.PointerValue) {
    this.dataview.setBigUint64(32, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  static from() {
    // not implemented
  }
}

export class InstanceEnumerateAdapterOptions extends UC.StructBase {
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
    return Deno.UnsafePointer.create(this.dataview.getBigUint64(0, LE));
  }

  set nextInChain(value: Deno.PointerValue) {
    this.dataview.setBigUint64(0, BigInt(Deno.UnsafePointer.value(value)), LE);
  }

  get backends(): number {
    return this.dataview.getUint32(8, LE);
  }

  set backends(value: number) {
    this.dataview.setUint32(8, value, LE);
  }

  static from() {
    // not implemented
  }
}
