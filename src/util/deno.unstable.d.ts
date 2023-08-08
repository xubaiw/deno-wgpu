/*
 * Claim: this file is copied and modified from Deno.
 *
 * As Deno does not export many FFI types, we have to "re-export" them.
 */

declare namespace Deno {
  export type NativeNumberType =
    | "u8"
    | "i8"
    | "u16"
    | "i16"
    | "u32"
    | "i32"
    | "f32"
    | "f64";

  /** **UNSTABLE**: New API, yet to be vetted.
   *
   * All BigInt number types for interfacing with foreign functions.
   *
   * @category FFI
   */
  export type NativeBigIntType =
    | "u64"
    | "i64"
    | "usize"
    | "isize";

  /** **UNSTABLE**: New API, yet to be vetted.
   *
   * The native boolean type for interfacing to foreign functions.
   *
   * @category FFI
   */
  export type NativeBooleanType = "bool";

  /** **UNSTABLE**: New API, yet to be vetted.
   *
   * The native pointer type for interfacing to foreign functions.
   *
   * @category FFI
   */
  export type NativePointerType = "pointer";

  /** **UNSTABLE**: New API, yet to be vetted.
   *
   * The native buffer type for interfacing to foreign functions.
   *
   * @category FFI
   */
  export type NativeBufferType = "buffer";

  /** **UNSTABLE**: New API, yet to be vetted.
   *
   * The native function type for interfacing with foreign functions.
   *
   * @category FFI
   */
  export type NativeFunctionType = "function";

  /** **UNSTABLE**: New API, yet to be vetted.
   *
   * The native void type for interfacing with foreign functions.
   *
   * @category FFI
   */
  export type NativeVoidType = "void";

  /** **UNSTABLE**: New API, yet to be vetted.
   *
   * The native struct type for interfacing with foreign functions.
   *
   * @category FFI
   */
  export type NativeStructType = { readonly struct: readonly NativeType[] };

  /** **UNSTABLE**: New API, yet to be vetted.
   *
   * A utility type conversion for foreign symbol parameters and unsafe callback
   * return types.
   *
   * @category FFI
   */
  export type ToNativeTypeMap =
    & Record<NativeNumberType, number>
    & Record<NativeBigIntType, number | bigint>
    & Record<NativeBooleanType, boolean>
    & Record<NativePointerType, PointerValue>
    & Record<NativeFunctionType, PointerValue>
    & Record<NativeBufferType, BufferSource | null>;

  /** **UNSTABLE**: New API, yet to be vetted.
   *
   * Type conversion for foreign symbol parameters and unsafe callback return
   * types.
   *
   * @category FFI
   */
  export type ToNativeType<T extends NativeType = NativeType> = T extends
    NativeStructType ? BufferSource
    : ToNativeTypeMap[Exclude<T, NativeStructType>];

  /** **UNSTABLE**: New API, yet to be vetted.
   *
   * A utility type for conversion for unsafe callback return types.
   *
   * @category FFI
   */
  export type ToNativeResultTypeMap = ToNativeTypeMap & Record<NativeVoidType, void>;

  /** **UNSTABLE**: New API, yet to be vetted.
   *
   * Type conversion for unsafe callback return types.
   *
   * @category FFI
   */
  export type ToNativeResultType<T extends NativeResultType = NativeResultType> =
    T extends NativeStructType ? BufferSource
      : ToNativeResultTypeMap[Exclude<T, NativeStructType>];

  /** **UNSTABLE**: New API, yet to be vetted.
   *
   * A utility type for conversion of parameter types of foreign functions.
   *
   * @category FFI
   */
  export type ToNativeParameterTypes<T extends readonly NativeType[]> =
    //
    [(T[number])[]] extends [T] ? ToNativeType<T[number]>[]
      : [readonly (T[number])[]] extends [T]
        ? readonly ToNativeType<T[number]>[]
      : T extends readonly [...NativeType[]] ? {
          [K in keyof T]: ToNativeType<T[K]>;
        }
      : never;

  /** **UNSTABLE**: New API, yet to be vetted.
   *
   * A utility type for conversion of foreign symbol return types and unsafe
   * callback parameters.
   *
   * @category FFI
   */
  export type FromNativeTypeMap =
    & Record<NativeNumberType, number>
    & Record<NativeBigIntType, number | bigint>
    & Record<NativeBooleanType, boolean>
    & Record<NativePointerType, PointerValue>
    & Record<NativeBufferType, PointerValue>
    & Record<NativeFunctionType, PointerValue>;

  /** **UNSTABLE**: New API, yet to be vetted.
   *
   * Type conversion for foreign symbol return types and unsafe callback
   * parameters.
   *
   * @category FFI
   */
  export type FromNativeType<T extends NativeType = NativeType> = T extends
    NativeStructType ? Uint8Array
    : FromNativeTypeMap[Exclude<T, NativeStructType>];

  /** **UNSTABLE**: New API, yet to be vetted.
   *
   * A utility type for conversion for foreign symbol return types.
   *
   * @category FFI
   */
  export type FromNativeResultTypeMap =
    & FromNativeTypeMap
    & Record<NativeVoidType, void>;

  /** **UNSTABLE**: New API, yet to be vetted.
   *
   * Type conversion for foreign symbol return types.
   *
   * @category FFI
   */
  export type FromNativeResultType<T extends NativeResultType = NativeResultType> =
    T extends NativeStructType ? Uint8Array
      : FromNativeResultTypeMap[Exclude<T, NativeStructType>];

  /** **UNSTABLE**: New API, yet to be vetted.
   *
   * @category FFI
   */
  export type FromNativeParameterTypes<
    T extends readonly NativeType[],
  > =
    //
    [(T[number])[]] extends [T] ? FromNativeType<T[number]>[]
      : [readonly (T[number])[]] extends [T]
        ? readonly FromNativeType<T[number]>[]
      : T extends readonly [...NativeType[]] ? {
          [K in keyof T]: FromNativeType<T[K]>;
        }
      : never;

  /** **UNSTABLE**: New API, yet to be vetted.
   *
   * A utility type that infers a foreign symbol.
   *
   * @category FFI
   */
  export type StaticForeignSymbol<T extends ForeignFunction | ForeignStatic> =
    T extends ForeignFunction ? FromForeignFunction<T>
      : T extends ForeignStatic ? FromNativeType<T["type"]>
      : never;

  /** **UNSTABLE**: New API, yet to be vetted.
   *
   *  @category FFI
   */
  export type FromForeignFunction<T extends ForeignFunction> = T["parameters"] extends
    readonly [] ? () => StaticForeignSymbolReturnType<T>
    : (
      ...args: ToNativeParameterTypes<T["parameters"]>
    ) => StaticForeignSymbolReturnType<T>;

  /** **UNSTABLE**: New API, yet to be vetted.
   *
   * @category FFI
   */
  export type StaticForeignSymbolReturnType<T extends ForeignFunction> =
    ConditionalAsync<T["nonblocking"], FromNativeResultType<T["result"]>>;

  /** **UNSTABLE**: New API, yet to be vetted.
   *
   * @category FFI
   */
  export type ConditionalAsync<IsAsync extends boolean | undefined, T> =
    IsAsync extends true ? Promise<T> : T;

  /** **UNSTABLE**: New API, yet to be vetted.
   *
   * A utility type that infers a foreign library interface.
   *
   * @category FFI
   */
  export type StaticForeignLibraryInterface<T extends ForeignLibraryInterface> = {
    [K in keyof T]: T[K]["optional"] extends true
      ? StaticForeignSymbol<T[K]> | null
      : StaticForeignSymbol<T[K]>;
  };

  /** @category FFI */
  const brand: unique symbol;
  /** @category FFI */
  export type PointerObject = { [brand]: unknown };

  /** **UNSTABLE**: New API, yet to be vetted.
   *
   * An unsafe callback function.
   *
   * @category FFI
   */
  export type UnsafeCallbackFunction<
    Parameters extends readonly NativeType[] = readonly NativeType[],
    Result extends NativeResultType = NativeResultType,
  > = Parameters extends readonly [] ? () => ToNativeResultType<Result> : (
    ...args: FromNativeParameterTypes<Parameters>
  ) => ToNativeResultType<Result>;

  /**
   *  This magic code used to implement better type hints for {@linkcode Deno.dlopen}
   *
   *  @category FFI
   */
  export type Cast<A, B> = A extends B ? A : B;
  /** @category FFI */
  export type Const<T> = Cast<
    T,
    | (T extends string | number | bigint | boolean ? T : never)
    | { [K in keyof T]: Const<T[K]> }
    | []
  >;
} 
