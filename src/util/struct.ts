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
export type FieldTypeMap = {
  Pointer: Deno.PointerValue;
  Record: DataView;
  Enum: number;
  UInt: 4;
  ULongLong: bigint;
  Bool: boolean;
  Double: number;
  ULong: bigint;
  Float: bigint;
  UShort: number;
  Int: number;
};

export type FieldSpec = {
  offset: number;
  kind: keyof FieldTypeMap;
  size: number;
};

export type StructSpec = {
  name: string;
  /** The overall size of a struct */
  size: number;
  /** Fields of the struct */
  fields: Record<string, FieldSpec>;
};

export type StructBase = { readonly view: DataView };

export type Struct<S extends StructSpec> =
  & StructBase
  & {
    -readonly [K in keyof S["fields"]]: FieldTypeMap[S["fields"][K]["kind"]];
  };

export const alloc = <S extends StructSpec>(spec: S): Struct<S> => {
  const view = new DataView(new ArrayBuffer(spec.size));
  return defineSpecProperties(spec, { view });
};

export const deref = <S extends StructSpec>(
  spec: S,
  viewOrPtr: DataView | NonNullable<Deno.PointerValue>,
): Struct<S> => {
  let view: DataView;
  if (viewOrPtr instanceof DataView) view = viewOrPtr;
  else {
    view = new DataView(
      new Deno.UnsafePointerView(viewOrPtr).getArrayBuffer(spec.size),
    );
  }
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
      case "Record":
        get = (): DataView =>
          new DataView(view.buffer, view.byteOffset + fd.offset, fd.size);
        set = (v: DataView) =>
          new Uint8Array(view.buffer, view.byteOffset, fd.size).set(
            new Uint8Array(v.buffer, v.byteOffset, v.byteLength),
          );
    }
    Object.defineProperty(base, fname, { get, set });
  }
  Object.defineProperty(base, Symbol.for("Deno.customInspect"), {
    value: () => {
      let ins = `${spec.name} {\n`;
      for (const [fname, fd] of Object.entries(spec.fields)) {
        const depth = fd.kind == "Record" ? 0 : 4;
        ins += `  ${fname}: ` +
          Deno.inspect((base as Struct<S>)[fname], {
            compact: true,
            colors: true,
            depth,
          }) + ",\n";
      }
      ins += `}`;
      return ins;
    },
  });
  return base as Struct<S>;
};
