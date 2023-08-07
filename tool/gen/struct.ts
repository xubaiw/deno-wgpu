import {
  CXChildVisitResult,
  CXCursorKind,
  CXTranslationUnit,
} from "https://deno.land/x/libclang@1.0.0-beta.8/mod.ts";
import { dedent } from "npm:@qnighy/dedent";

type StructDecl = {
  name: string;
  size: number;
  fields: Record<string, FieldDecl>;
};

type FieldDecl = {
  name: string;
  size: number;
  offset: number;
  type: string;
};

export const genStructs = async (tu: CXTranslationUnit, path: string) => {
  const structs: Record<string, StructDecl> = {};
  tu.getCursor().visitChildren((cursor) => {
    if (cursor.kind == CXCursorKind.CXCursor_StructDecl) {
      const name = cursor.getSpelling();
      const size = cursor.getType()!.getSizeOf();
      const fields: Record<string, FieldDecl> = {};
      cursor.visitChildren((cursor) => {
        if (cursor.kind == CXCursorKind.CXCursor_FieldDecl) {
          const name = cursor.getSpelling();
          const size = cursor.getType()!.getSizeOf();
          const offset = cursor.getOffsetOfField();
          const type = cursor.getType()!.getCanonicalType().getKindSpelling();
          fields[name] = { name, size, offset, type };
        }
        return CXChildVisitResult.CXChildVisit_Continue;
      });
      structs[name] = { name, size, fields };
    }
    return CXChildVisitResult.CXChildVisit_Recurse;
  });
  let text = dedent`\
    import { endianness } from "node:os"

    const littleEndian = endianness() == "LE" ? true : false;
  ` + "\n";
  for (const [sname, sd] of Object.entries(structs)) {
    if (sd.size > 0) {
      text += dedent`\
        export class ${sname} {
          view: DataView;
          constructor(view?: DataView) {
            if (view) this.view = view;
            else this.view = new DataView(new ArrayBuffer(${sd.size}))
          }
          static fromPointer(ptr: NonNullable<Deno.PointerValue>) {
            const view = new DataView(new Deno.UnsafePointerView(ptr).getArrayBuffer(${sd.size}));
            return new ${sname}(view);
          }

          get pointer(): Deno.PointerValue {
            const bufPtr = Deno.UnsafePointer.of(this.view.buffer);
            if (bufPtr == null) return null;
            return Deno.UnsafePointer.offset(bufPtr, this.view.byteOffset);
          }
      `;
      for (const [fname, fd] of Object.entries(sd.fields)) {
        text += dedent`
          \
            get ${fname}(): ${getType(fd)} {
              return ${getGetter(fd)};
            }
            set ${fname}(value: ${getType(fd)}) {
              ${getSetter(fd)};
            }
        `;
      }
      text += `}\n\n`;
    }
  }
  await Deno.writeTextFile(path, text);
};

const getGetter = (field: FieldDecl): string => {
  const { name, type, size } = field;
  const fieldOffset = field.offset / 8;
  switch (type) {
    case "Pointer":
      return `Deno.UnsafePointer.create(this.view.getBigUint64(${fieldOffset}, littleEndian))`;
    case "Float":
      return `this.view.getFloat32(${fieldOffset}, littleEndian)`;
    case "Double":
      return `this.view.getFloat64(${fieldOffset}, littleEndian)`;
    case "Record":
      return `new ${name}(new DataView(this.view.buffer, this.view.byteOffset + ${fieldOffset}))`;
    // handle primitive type
    default: {
      const unsigned = type == "Enum" ||
        type.startsWith("U");
      let getter = "this.view.get";
      switch (size) {
        case 1:
          getter += unsigned ? "Uint8" : "Int8";
          break;
        case 2:
          getter += unsigned ? "Uint16" : "Int16";
          break;
        case 4:
          getter += unsigned ? "Uint32" : "Int32";
          break;
        case 8:
          getter += unsigned ? "BigUint64" : "BigInt64";
          break;
        default:
          throw new Error(
            `type ${name} of size ${size} is not implemented`,
          );
      }
      getter += `(` + fieldOffset;
      if (size != 1) getter += `, littleEndian`;
      getter += `)`;
      return getter;
    }
  }
};

const getSetter = (field: FieldDecl): string => {
  const { name, type, size } = field;
  const fieldOffset = field.offset / 8;
  switch (type) {
    case "Pointer":
      return `this.view.setBigUint64(${fieldOffset}, BigInt(Deno.UnsafePointer.value(value)), littleEndian)`;
    case "Float":
      return `this.view.setFloat32(${fieldOffset}, value, littleEndian)`;
    case "Double":
      return `this.view.setFloat64(${fieldOffset}, value, littleEndian)`;
    case "Record":
      return `new Uint8Array(this.view.buffer, this.view.byteOffset + ${fieldOffset}, ${size}).set(new Uint8Array(value.view.buffer, value.view.byteOffset, ${size}))`;
    // handle primitive type
    default: {
      const unsigned = type == "Enum" ||
        type.startsWith("U");
      let setter = "this.view.set";
      switch (size) {
        case 1:
          setter += unsigned ? "Uint8" : "Int8";
          break;
        case 2:
          setter += unsigned ? "Uint16" : "Int16";
          break;
        case 4:
          setter += unsigned ? "Uint32" : "Int32";
          break;
        case 8:
          setter += unsigned ? "BigUint64" : "BigInt64";
          break;
        default:
          throw new Error(
            `type ${name} of size ${size} is not implemented`,
          );
      }
      setter += `(` + fieldOffset + `, value`;
      if (size != 1) setter += `, littleEndian`;
      setter += `)`;
      return setter;
    }
  }
};

const getType = (field: FieldDecl): string => {
  switch (field.type) {
    case "Pointer":
      return "Deno.PointerValue";
    case "Bool":
      return "boolean";
    case "Enum":
      return field.type;
    case "Record":
      return field.type;
    default:
      return field.size > 4 ? "bigint" : "number";
  }
};
