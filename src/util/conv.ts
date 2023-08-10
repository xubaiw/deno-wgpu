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

export type BaseConstructor<T> = { new (pointer: Deno.PointerValue, parent?: Base): T };

export class Base {
  pointer: Deno.PointerValue;
  parent?: Base;
  constructor(pointer: Deno.PointerValue, parent?: Base) {
    this.pointer = pointer;
    this.parent = parent;
  }
  findInFamily<T extends Base>(t: BaseConstructor<T>): T | null {
    if (this instanceof t) return this;
    if (this.parent == null) return null;
    return this.parent.findInFamily(t);
  }
}
