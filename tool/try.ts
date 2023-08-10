#!/usr/bin/env -S deno run -A --unstable

// deno-lint-ignore-file

import { fromFileUrl, join } from "https://deno.land/std@0.197.0/path/mod.ts";
import {
  CXChildVisitResult,
  CXCursorKind,
  CXIndex,
  CXType,
} from "https://deno.land/x/libclang@1.0.0-beta.8/mod.ts";

type OpCXType = CXType | null | undefined;
const extractType = (t?: CXType | null) => ({
  spelling: t?.getSpelling(),
  kindSpelling: t?.getKindSpelling(),
});

const logType = (t: Record<string, string | OpCXType | OpCXType[]>) => {
  const res: Record<string, any> = {};
  for (const [k, v] of Object.entries(t)) {
    res[k] = typeof v == "string"
      ? v
      : Array.isArray(v)
      ? v.map(extractType)
      : extractType(v);
  }
  console.log(res);
};

const vendor = fromFileUrl(import.meta.resolve("../vendor"));
const wgpu = join(vendor, "wgpu.h");

const index = new CXIndex();
const tu = index.parseTranslationUnit(wgpu);

if (Deno.args[0] == "kind") {
  const record: Record<string, string> = {};
  tu.getCursor().visitChildren((cursor) => {
    record[cursor.getKindSpelling()] = cursor.getSpelling();
    return CXChildVisitResult.CXChildVisit_Recurse;
  });
  console.log(record);
}
// Set(11) {
//   "TypedefDecl",
//   "TypeRef",
//   "StructDecl",
//   "EnumDecl",
//   "EnumConstantDecl",
//   "IntegerLiteral",
//   "ParmDecl",
//   "FieldDecl",
//   "FunctionDecl",
//   "BinaryOperator",
//   "DeclRefExpr"
// }
if (Deno.args[0] == "enum") {
  tu.getCursor().visitChildren((cursor) => {
    if (cursor.kind == CXCursorKind.CXCursor_EnumDecl) {
      const name = cursor.getSpelling();
      const type = cursor.getEnumDeclarationIntegerType()?.kind;
      const constants: { name: string; value: number | bigint }[] = [];
      cursor.visitChildren((cursor) => {
        if (cursor.kind == CXCursorKind.CXCursor_EnumConstantDecl) {
          const name = cursor.getSpelling();
          const value = cursor.getEnumConstantDeclarationUnsignedValue();
          constants.push({ name, value });
        }
        return CXChildVisitResult.CXChildVisit_Continue;
      });
      console.log({ name, type, constants });
    }
    return CXChildVisitResult.CXChildVisit_Continue;
  });
}
if (Deno.args[0] == "group") {
  tu.getCursor().visitChildren((cursor) => {
    if (cursor.kind == CXCursorKind.CXCursor_TypedefDecl) {
      const name = cursor.getSpelling();
      const type = cursor.getTypedefDeclarationOfUnderlyingType()
        ?.getPointeeType()?.getSpelling();
      if (type && type.includes("Impl")) {
        console.log({ name, type });
      }
    }
    return CXChildVisitResult.CXChildVisit_Recurse;
  });
}
// Enum is only CXType_UInt = 9
// Enum name and constant prefix may mismatch, e.g. WGPUNativeSType
if (Deno.args[0] == "callback") {
  tu.getCursor().visitChildren((cursor) => {
    if (cursor.kind == CXCursorKind.CXCursor_TypedefDecl) {
      const name = cursor.getSpelling();
      if (name.match(/[cC]allback/)) {
        const under = cursor.getTypedefDeclarationOfUnderlyingType();
        const pointee = under?.getPointeeType();
        const res = pointee?.getResultType()?.getSpelling();
        const resK = pointee?.getResultType()?.getKindSpelling();
        const args = [];
        let i = 0;
        while (true) {
          const arg = pointee?.getArgumentType(i)?.getSpelling();
          const argk = pointee?.getArgumentType(i)?.getKindSpelling();
          const a2 = pointee?.getArgumentType(i)?.getCanonicalType()
            .getSpelling();
          const a2k = pointee?.getArgumentType(i)?.getCanonicalType()
            .getKindSpelling();
          if (!arg) break;
          args.push([arg, argk, a2, a2k]);
          i += 1;
        }
        console.log({ name, under, pointee, res, resK, args });
      }
    }
    return CXChildVisitResult.CXChildVisit_Recurse;
  });
}
if (Deno.args[0] == "function") {
  const set = new Set();
  tu.getCursor().visitChildren((cursor) => {
    if (cursor.kind == CXCursorKind.CXCursor_FunctionDecl) {
      const name = cursor.getSpelling();
      set.add(cursor.getResultType()?.getCanonicalType().getKindSpelling());
      const params: unknown[] = [];
      const narg = cursor.getNumberOfArguments();
      for (let i = 0; i < narg; i++) {
        const ac = cursor.getArgument(i);
        const t = ac?.getType();
        set.add(ac?.getType()?.getCanonicalType().getKindSpelling());
        params.push([
          t?.getSpelling(),
          t?.getKindSpelling(),
          t?.getCanonicalType().getSpelling(),
          t?.getCanonicalType().getKindSpelling(),
        ]);
      }
    }
    return CXChildVisitResult.CXChildVisit_Continue;
  });
  console.log(set);
}
if (Deno.args[0] == "struct") {
  const rec = {};
  tu.getCursor().visitChildren((cursor) => {
    if (cursor.kind == CXCursorKind.CXCursor_StructDecl) {
      const name = cursor.getSpelling();
      const size = cursor.getType()?.getSizeOf();
      const fields = [];
      cursor.visitChildren((cursor) => {
        if (cursor.kind == CXCursorKind.CXCursor_FieldDecl) {
          const name = cursor.getSpelling();
          const size = cursor.getType()?.getSizeOf();
          const offset = cursor.getOffsetOfField();
          fields.push({ name, size, offset });
          rec[cursor.getType()!.getCanonicalType().getKindSpelling()] = cursor
            .getType()?.getSizeOf();
        }
        return CXChildVisitResult.CXChildVisit_Continue;
      });
    }
    return CXChildVisitResult.CXChildVisit_Recurse;
  });
  console.log(rec);
}
