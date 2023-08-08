/// <reference types="./deno.unstable.d.ts" />

import { Subtract } from "npm:ts-arithmetic";

type Fn<T extends unknown[], S> = (...args: T) => S;
type Dec<T extends number> = Subtract<T, 1>;

/** Remove the nth element of tuple */
type Remove<TS extends unknown[], U extends number> = TS extends
  [infer Head, ...infer Tail]
  ? (U extends 0 ? Tail : [Head, ...Remove<Tail, Dec<U>>])
  : never;

export const wrap = <
  T extends unknown[],
  S,
  N extends number,
  D extends Deno.UnsafeCallbackDefinition = Deno.UnsafeCallbackDefinition,
>(
  spec: Deno.Const<D>,
  fn: Fn<T, S>,
  n: N,
) =>
(...args: Remove<T, N>) => {
  type CallbackFunction = Deno.UnsafeCallbackFunction<
    D["parameters"],
    D["result"]
  >;
  return new Promise<Parameters<CallbackFunction>>((res) => {
    const callback = new Deno.UnsafeCallback<D>(
      // deno-lint-ignore no-explicit-any
      spec as any,
      // deno-lint-ignore no-explicit-any
      ((...ret) => res(ret as any)) as CallbackFunction,
    );
    const shallow = [...args];
    shallow.splice(n, 0, callback.pointer);
    fn(...(shallow as T));
  });
};
