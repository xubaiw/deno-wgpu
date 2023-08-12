/**
 * @file This file works as util for src/tier2.ts
 */
/// <reference types="../vendor/deno.unstable.d.ts" />

import { endianness } from "https://deno.land/std@0.177.0/node/os.ts";

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

export const LE = endianness() == "LE" ? true : false;

class ReleaseRegistry {
  private map = new Map<
    WeakRef<object>,
    [Deno.PointerValue, (ptr: Deno.PointerValue) => void]
  >();
  private registry: FinalizationRegistry<
    [Deno.PointerValue, (ptr: Deno.PointerValue) => void]
  >;
  constructor() {
    // on gc, FR functions
    this.registry = new FinalizationRegistry(([ptr, release]) => release(ptr));
    // on Deno "unload", release all objects that have not been gc.
    addEventListener("unload", () => {
      for (const [ref, [ptr, release]] of this.map.entries()) {
        if (ref.deref()) release(ptr);
      }
    });
  }
  register(
    obj: object,
    ptrRelease: [Deno.PointerValue, (ptr: Deno.PointerValue) => void],
  ) {
    this.map.set(new WeakRef(obj), ptrRelease);
    this.registry.register(obj, ptrRelease);
  }
}

export const registry = new ReleaseRegistry();
