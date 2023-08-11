/// <reference types="../../vendor/deno.unstable.d.ts" />

export type CbDef = Deno.UnsafeCallbackDefinition;
export type CbFn<D extends CbDef> = Deno.UnsafeCallbackFunction<
  D["parameters"],
  D["result"]
>;
export type CbParam<D extends CbDef> = Parameters<CbFn<D>>;
export type Ptr = Deno.PointerValue;
export type Cb = Deno.UnsafeCallback;

// type conversion
export type ToCb<D extends CbDef = CbDef> = CbFn<D> | Cb;
export type ToCbPtr<D extends CbDef = CbDef> = ToCb<D> | Ptr;

export type ClassBaseConstructor<T> = {
  new (pointer: Deno.PointerValue, parent?: ClassBase): T;
};

export class ClassBase {
  pointer: Deno.PointerValue;
  parent?: ClassBase;
  constructor(pointer: Deno.PointerValue, parent?: ClassBase) {
    this.pointer = pointer;
    this.parent = parent;
  }
  findInFamily<T extends ClassBase>(t: ClassBaseConstructor<T>): T | null {
    if (this instanceof t) return this;
    if (this.parent == null) return null;
    return this.parent.findInFamily(t);
  }
}

export abstract class StructBase {
  abstract dataview: DataView;
  get pointer(): Deno.PointerValue {
    const buffer = this.dataview.buffer;
    const offset = this.dataview.byteOffset;
    const pBuf = Deno.UnsafePointer.of(buffer);
    if (!pBuf) return pBuf;
    const pView = Deno.UnsafePointer.offset(pBuf, offset);
    return pView;
  }
}
