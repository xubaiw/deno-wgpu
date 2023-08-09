/// <reference types="./deno.unstable.d.ts" />

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

export const toCb = <
  D extends CbDef = CbDef,
>(spec: D, cb: ToCb<D>): Cb => {
  if (cb instanceof Function) {
    // deno-lint-ignore no-explicit-any
    return new Deno.UnsafeCallback(spec as any, cb);
  } else return cb;
};
export const toCbPtr = <D extends CbDef = CbDef>(
  spec: D,
  cbp: ToCbPtr<D>,
): Ptr => {
  if (cbp instanceof Function || cbp instanceof Deno.UnsafeCallback) {
    return toCb(spec, cbp).pointer;
  }
  return cbp;
};

export const toBig = (value: bigint | boolean | number): bigint => {
  if (typeof value == "bigint") return value;
  if (typeof value == "number") return BigInt(value);
  else return value ? 1n : 0n;
};
export const toNum = (value: boolean | number): number => {
  if (typeof value == "number") return value;
  else return value ? 1 : 0;
};
export const toBool = (value: bigint | number | boolean): boolean => {
  if (typeof value == "boolean") return value;
  else return value == 1;
};
export const toEnum = <T>(x: unknown): T => x as T;
