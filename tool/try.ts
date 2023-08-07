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
// Enum is only CXType_UInt = 9
// Enum name and constant prefix may mismatch, e.g. WGPUNativeSType
if (Deno.args[0] == "callback") {
  tu.getCursor().visitChildren((cursor) => {
    if (cursor.kind == CXCursorKind.CXCursor_TypedefDecl) {
      const name = cursor.getSpelling();
      if (name.match(/[cC]allback/)) {
        const under = cursor.getTypedefDeclarationOfUnderlyingType();
        const pointee = under?.getPointeeType();
        const res = pointee?.getResultType();
        const args = [];
        let i = 0;
        while (true) {
          const arg = pointee?.getArgumentType(i);
          if (!arg) break;
          args.push(arg);
          i += 1;
        }
        logType({ name, under, pointee, res, args });
      }
    }
    return CXChildVisitResult.CXChildVisit_Recurse;
  });
}
if (Deno.args[0] == "function") {
  tu.getCursor().visitChildren((cursor) => {
    if (cursor.kind == CXCursorKind.CXCursor_FunctionDecl) {
      const name = cursor.getSpelling();
      const params: unknown[] = [];
      cursor.visitChildren((cursor) => {
        if (cursor.kind == CXCursorKind.CXCursor_ParmDecl) {
          const name = cursor.getSpelling();
          const type = extractType(cursor.getType());
          const t2 = extractType(cursor.getType()?.getCanonicalType());
          params.push({ name, type, t2 });
        }
        return CXChildVisitResult.CXChildVisit_Continue;
      });
      console.log({ name, params });
    }
    return CXChildVisitResult.CXChildVisit_Continue;
  });
}
