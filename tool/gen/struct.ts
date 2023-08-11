// deno-lint-ignore-file no-explicit-any
import {
  CXChildVisitResult,
  CXCursorKind,
} from "https://deno.land/x/libclang@1.0.0-beta.8/mod.ts";
import { Ctx, join, km, nofix, sep } from "./util.ts";
import { dedent } from "npm:@qnighy/dedent";

type StructSpec = {
  size: number;
  fields: Record<string, FieldSpec>;
};

type FieldSpec = {
  offset: number;
  size: number;
  kind: string;
  type?: string;
};

type SCtx = {
  structs: Record<string, StructSpec>;
};

export const genStructs = async (ctx: Ctx) => {
  const { tu, dir } = ctx;
  const structs: Record<string, any> = {};
  // visit
  tu.getCursor().visitChildren((cursor) => {
    // only handle struct decl
    if (cursor.kind == CXCursorKind.CXCursor_StructDecl) {
      const name = nofix(cursor.getSpelling());
      const size = cursor.getType()!.getSizeOf();
      const fields: Record<string, any> = {};
      cursor.visitChildren((cursor) => {
        if (cursor.kind == CXCursorKind.CXCursor_FieldDecl) {
          const name = cursor.getSpelling();
          const offset = cursor.getOffsetOfField() / 8;
          const kind = cursor.getType()!.getCanonicalType().getKindSpelling();
          fields[name] = { offset, kind };
          if (kind == "Record") {
            fields[name]["type"] = cursor.getType()!.getSpelling();
            fields[name]["size"] = cursor.getType()!.getSizeOf();
          }
          if (kind == "Enum") {
            fields[name].type = cursor.getType()?.getSpelling();
          }
        }
        return CXChildVisitResult.CXChildVisit_Continue;
      });
      structs[name] = { name, size, fields };
    }
    return CXChildVisitResult.CXChildVisit_Recurse;
  });
  const sctx = { structs };
  // generate file content
  const header = genHeader();
  const structdecl = sep("\n")(
    km(sctx.structs, (sname) => genStruct(sctx, sname)),
  );
  const text = dedent`
    ${header}
    ${structdecl}
  `;
  // actual write
  await Deno.writeTextFile(join(dir, "struct.ts"), text);
};

function genHeader() {
  return dedent`\
    import { endianness } from "node:os";
    import * as UC from "../util/conv.ts";
    import * as E from "./enum.ts";

    const LE = endianness() == "LE" ? true : false;
  `;
}

function genStruct(ctx: SCtx, structName: string) {
  const spec = ctx.structs[structName];
  const size = spec.size;
  if (size < 0) return "";
  const properties = sep("\n\n")(
    km(spec.fields, (fname) => genProperty(ctx, structName, fname)),
  );
  const encoder = genEncoder(structName);
  return dedent`
    export class ${structName} extends UC.StructBase {
      dataview: DataView;
      constructor(dataviewOrPtr?: DataView | NonNullable<Deno.PointerValue>) {
        super();
        if (dataviewOrPtr == null) {
          this.dataview = new DataView(new ArrayBuffer(${size}));
        } else {
          if (dataviewOrPtr instanceof DataView) {
            this.dataview = dataviewOrPtr;
          } else {
            this.dataview = new DataView(new Deno.UnsafePointerView(dataviewOrPtr).getArrayBuffer(${size}))
          }
        }
      }
      ${properties}
      ${encoder}
    }
  `;
}

function genProperty(...args: [SCtx, string, string]) {
  // FIXME: use property field
  const getter = genGetter(...args);
  const setter = genSetter(...args);
  return dedent`
    ${getter}
    ${setter}
  `;
}

function genGetter(ctx: SCtx, sname: string, fname: string) {
  const type = genGetterType(ctx, sname, fname);
  const result = genGetterResult(ctx, sname, fname);
  return dedent`
    get ${fname}(): ${type} {
      return ${result};
    }
  `;
}

function genSetter(ctx: SCtx, sname: string, fname: string) {
  const type = genSetterType(ctx, sname, fname);
  const result = genSetterResult(ctx, sname, fname);
  return `
    set ${fname}(value: ${type}) {
      ${result};
    }
  `;
}

function genEncoder(name: string): string {
  return dedent`
    static from() {
      // not implemented
    }
  `;
}

function genGetterType(ctx: SCtx, name: string, fname: string) {
  const { kind, type } = ctx.structs[name].fields[fname];
  if (kind == "Record") return nofix(type!);
  if (kind == "Pointer") return "Deno.PointerValue";
  if (kind == "Enum") return `E.${nofix(type!)}`;
  if (kind == "UInt") return "number";
  if (kind == "ULongLong") return "bigint";
  if (kind == "Bool") return "boolean";
  if (kind == "Double") return "number";
  if (kind == "ULong") return "bigint";
  if (kind == "Float") return "number";
  if (kind == "UShort") return "number";
  if (kind == "Int") return "number";
  throw new Error(
    `getter type: kind ${kind} in ${name}.${fname} not implemented`,
  );
}

function genGetterResult(ctx: SCtx, name: string, fname: string) {
  const { offset, kind, type, size } = ctx.structs[name].fields[fname];
  if (kind == "Record") {
    return `new ${
      nofix(type!)
    }(new DataView(this.dataview.buffer, this.dataview.byteOffset + ${offset}, ${size}))`;
  }
  if (kind == "Pointer") {
    return `Deno.UnsafePointer.create(this.dataview.getBigUint64(${offset}, LE))`;
  }
  if (kind == "Enum") {
    return `this.dataview.getUint32(${offset}, LE) as E.${nofix(type!)}`;
  }
  if (kind == "UInt") return `this.dataview.getUint32(${offset}, LE)`;
  if (kind == "ULongLong") return `this.dataview.getBigUint64(${offset}, LE)`;
  if (kind == "Bool") return `this.dataview.getUint8(${offset}) == 1`;
  if (kind == "Double") return `this.dataview.getFloat64(${offset}, LE)`;
  if (kind == "ULong") return `this.dataview.getBigUint64(${offset}, LE)`;
  if (kind == "Float") return `this.dataview.getFloat32(${offset}, LE)`;
  if (kind == "UShort") return `this.dataview.getUint16(${offset}, LE)`;
  if (kind == "Int") return `this.dataview.getInt32(${offset}, LE)`;
  throw new Error(
    `getter result: kind ${kind} in ${name}.${fname} not implemented`,
  );
}

function genSetterResult(ctx: SCtx, name: string, fname: string) {
  const { offset, kind, size } = ctx.structs[name].fields[fname];
  if (kind == "Record") {
    return `new Uint8Array(this.dataview.buffer, this.dataview.byteOffset, ${size}).set(new Uint8Array(value.dataview.buffer, value.dataview.byteOffset, value.dataview.byteLength))`;
  }
  if (kind == "Pointer") {
    return `this.dataview.setBigUint64(${offset}, BigInt(Deno.UnsafePointer.value(value)), LE);`;
  }
  if (kind == "Enum") {
    return `this.dataview.setUint32(${offset}, value, LE)`;
  }
  if (kind == "UInt") return `this.dataview.setUint32(${offset}, value, LE)`;
  if (kind == "ULongLong") {
    return `this.dataview.setBigUint64(${offset}, BigInt(value), LE)`;
  }
  if (kind == "Bool") return `this.dataview.setUint8(${offset}, value ? 1 : 0)`;
  if (kind == "Double") return `this.dataview.setFloat64(${offset}, value, LE)`;
  if (kind == "ULong") return `this.dataview.setBigUint64(${offset}, BigInt(value), LE)`;
  if (kind == "Float") return `this.dataview.setFloat32(${offset}, value, LE)`;
  if (kind == "UShort") return `this.dataview.setUint16(${offset}, value, LE)`;
  if (kind == "Int") return `this.dataview.setInt32(${offset}, value, LE)`;
  throw new Error(
    `setter result: kind ${kind} in ${name}.${fname} not implemented`,
  );
}

function genSetterType(ctx: SCtx, name: string, fname: string) {
  const { kind, type } = ctx.structs[name].fields[fname];
  if (kind == "Record") return nofix(type!);
  if (kind == "Pointer") return "Deno.PointerValue";
  if (kind == "Enum") return `E.${nofix(type!)} | number`;
  if (kind == "UInt") return "number";
  if (kind == "ULongLong") return "bigint | number";
  if (kind == "Bool") return "boolean | number | bigint";
  if (kind == "Double") return "number";
  if (kind == "ULong") return "bigint | number";
  if (kind == "Float") return "number";
  if (kind == "UShort") return "number";
  if (kind == "Int") return "number";
  throw new Error(
    `setter type: kind ${kind} in ${name}.${fname} not implemented`,
  );
}
