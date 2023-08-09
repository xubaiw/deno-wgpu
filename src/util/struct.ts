/**
 * # How to handle type:
 *
 * ## Types in wgpu
 *
 * - Pointer: 8  // turn to Deno.PointerValue
 * - Enum: 4    // actually, equal to UInt
 * - UInt: 4
 * - ULongLong: 8
 * - Bool: 1
 * - Double: 8
 * - ULong: 8
 * - Record: ?  // need special handle
 * - Float: 4
 * - UShort: 2
 * - Int: 4
 *
 * The handle ints with:
 * - prefix U or not
 * - size
 *
 * Do not model pointer and record
 */

import { endianness } from "node:os";

const LE = endianness() == "LE" ? true : false;

/** Map field type to Deno types. */
export type FieldKindMap = {
  Pointer: Deno.PointerValue;
  Enum: number;
  UInt: number;
  ULongLong: bigint;
  Bool: boolean;
  Double: number;
  ULong: bigint;
  Float: bigint;
  UShort: number;
  Int: number;
};

export type FieldSpecBase = { offset: number };
export type FixedFieldExtra = { kind: keyof FieldKindMap };
export type RecordFieldExtra<T> = {
  kind: "Record";
  type: () => T;
  size: number;
};

export type FieldSpec<T> =
  & FieldSpecBase
  & (FixedFieldExtra | RecordFieldExtra<T>);

export type StructSpec = {
  name: string;
  /** The overall size of a struct */
  size: number;
  /** Fields of the struct */
  fields: Record<string, FieldSpec<unknown>>;
};

export type StructBase = { readonly view: DataView };

type Fields<T extends StructSpec> = T["fields"];
type FieldKeys<T extends StructSpec> = keyof Fields<T>;
type Field<T extends StructSpec, K extends FieldKeys<T>> = Fields<T>[K];
type FieldKind<T extends StructSpec, K extends FieldKeys<T>> = Field<
  T,
  K
>["kind"];

export type Struct<S extends StructSpec> =
  & StructBase
  & {
    -readonly [
      // XXX: need clearer type arith
      FN in FieldKeys<S>
    ]: Field<S, FN> extends RecordFieldExtra<infer T>
      ? (T extends StructSpec ? Struct<T> : never)
      : FieldKind<S, FN> extends keyof FieldKindMap
        ? FieldKindMap[FieldKind<S, FN>]
      : never;
  };

export const alloc = <S extends StructSpec>(spec: S): Struct<S> => {
  const view = new DataView(new ArrayBuffer(spec.size));
  return defineSpecProperties(spec, { view });
};

export const deref = <S extends StructSpec>(
  spec: S,
  ptr: NonNullable<Deno.PointerValue>,
): Struct<S> => {
  const view = new DataView(
    new Deno.UnsafePointerView(ptr).getArrayBuffer(spec.size),
  );
  return defineSpecProperties(spec, { view });
};

export const ref = <S extends StructSpec>(s: Struct<S>): Deno.PointerValue => {
  const bufPtr = Deno.UnsafePointer.of(s.view.buffer);
  if (bufPtr == null) return null;
  return Deno.UnsafePointer.offset(bufPtr, s.view.byteOffset);
};

const defineSpecProperties = <S extends StructSpec>(
  spec: S,
  base: StructBase,
): Struct<S> => {
  const { view } = base;
  for (const [fname, fd] of Object.entries(spec.fields)) {
    // deno-lint-ignore no-explicit-any
    let get: () => any;
    // deno-lint-ignore no-explicit-any
    let set: (value: any) => void;
    switch (fd.kind) {
      case "Pointer":
        get = (): Deno.PointerValue =>
          Deno.UnsafePointer.create(view.getBigInt64(fd.offset, LE));
        set = (v: Deno.PointerValue) => {
          view.setBigUint64(
            fd.offset,
            BigInt(Deno.UnsafePointer.value(v)),
            LE,
          );
        };
        break;
      case "Enum":
        get = (): number => view.getUint32(fd.offset, LE);
        set = (v: number) => view.setUint32(fd.offset, v, LE);
        break;
      case "UInt":
        get = (): number => view.getUint32(fd.offset, LE);
        set = (v: number) => view.setUint32(fd.offset, v, LE);
        break;
      case "ULongLong":
        get = (): bigint => view.getBigUint64(fd.offset, LE);
        set = (v: bigint) => view.setBigUint64(fd.offset, v, LE);
        break;
      case "Bool":
        get = (): boolean => view.getUint8(fd.offset) == 1;
        set = (v: boolean) => view.setUint8(fd.offset, v ? 1 : 0);
        break;
      case "Double":
        get = (): number => view.getFloat64(fd.offset, LE);
        set = (v: number) => view.setFloat64(fd.offset, v, LE);
        break;
      case "ULong":
        get = (): bigint => view.getBigUint64(fd.offset, LE);
        set = (v: bigint) => view.setBigUint64(fd.offset, v, LE);
        break;
      case "Float":
        get = (): number => view.getFloat32(fd.offset, LE);
        set = (v: number) => view.setFloat32(fd.offset, v, LE);
        break;
      case "UShort":
        get = (): number => view.getUint16(fd.offset, LE);
        set = (v: number) => view.setUint16(fd.offset, v, LE);
        break;
      case "Int":
        get = (): number => view.getInt32(fd.offset, LE);
        set = (v: number) => view.setInt32(fd.offset, v, LE);
        break;
      case "Record": {
        // XXX: better typing
        const fspec = fd.type() as StructSpec;
        get = () => {
          const fview = new DataView(
            view.buffer,
            view.byteOffset + fd.offset,
            fd.size,
          );
          return defineSpecProperties(fspec, { view: fview });
        };
        // FXIME: this setter does not work
        set = (v) => {
          const fview = v.view;
          new Uint8Array(view.buffer, view.byteOffset, fd.size).set(
            new Uint8Array(fview.buffer, fview.byteOffset, fview.byteLength),
          );
        };
      }
    }
    Object.defineProperty(base, fname, { get, set });
  }
  Object.defineProperty(base, Symbol.for("Deno.customInspect"), {
    value: (
      inspect: typeof Deno.inspect,
      options: Deno.InspectOptions,
    ) => {
      const ins: Record<string, unknown> = {};
      for (const fname of Object.keys(spec.fields)) {
        ins[fname] = (base as Struct<S>)[fname];
      }
      return spec.name + " " + inspect(ins, options);
    },
  });
  return base as Struct<S>;
};
