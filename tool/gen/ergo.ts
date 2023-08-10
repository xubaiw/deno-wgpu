import { CXCursorKind } from "https://deno.land/x/libclang@1.0.0-beta.8/include/typeDefinitions.ts";
import {
  CXChildVisitResult,
  CXCursor,
  CXType,
} from "https://deno.land/x/libclang@1.0.0-beta.8/mod.ts";
import { camelCase, Ctx, join, removePrefix } from "./util.ts";

const TYPE_MAP = {
  Pointer: "Deno.PointerValue",
  Void: "void",
  Enum: "number",
  UInt: "number",
  Record: "Uint8Array",
  ULongLong: "number | bigint",
  Bool: "boolean",
  Double: "number",
  ULong: "number | bigint",
  Float: "bigint",
  UShort: "number",
  Int: "number",
};

type FnSpec = {
  parameters: ParamSpec[];
  result: ResSpec;
};
type ResSpec = {
  kind: keyof typeof TYPE_MAP;
  type?: string;
};
type ParamSpec = ResSpec & { name: string };

export const genErgos = async (ctx: Ctx) => {
  const { tu, dir } = ctx;
  const groups: Record<string, Record<string, FnSpec>> = {};
  const symbols: Record<string, FnSpec> = {};
  tu.getCursor().visitChildren((cursor) => {
    if (cursor.kind == CXCursorKind.CXCursor_TypedefDecl) {
      const name = cursor.getSpelling();
      const type = cursor.getTypedefDeclarationOfUnderlyingType()
        ?.getPointeeType()?.getSpelling();
      if (type && type.includes("Impl")) {
        groups[removePrefix(name)] = {};
      }
    }
    return CXChildVisitResult.CXChildVisit_Recurse;
  });
  tu.getCursor().visitChildren((cursor) => {
    // handle function decl
    if (cursor.kind == CXCursorKind.CXCursor_FunctionDecl) {
      const name = cursor.getSpelling();
      let group = undefined;
      for (const g of Object.keys(groups)) {
        if (removePrefix(name).startsWith(g)) {
          group = g;
          break;
        }
      }
      const result = extractResSpec(cursor.getResultType()!);
      const parameters = [];
      for (let i = 0; i < cursor.getNumberOfArguments(); i++) {
        const pCursor = cursor.getArgument(i)!;
        parameters.push(extractParamSpec(pCursor));
      }
      if (group) {
        groups[group][name] = { result, parameters };
      } else {
        symbols[name] = { result, parameters };
      }
    }
    return CXChildVisitResult.CXChildVisit_Continue;
  });

  let text = `import lib from "./symbol.ts";` +
    `import * as C from "../util/conv.ts";` +
    `import * as E from "./enum.ts";` +
    `import * as CB from "./callback.ts";`;
  for (const [sname, sspec] of Object.entries(symbols)) {
    text += genConstFn(sname, sspec);
  }
  for (const [gname, gspec] of Object.entries(groups)) {
    text += genGroup(gname, gspec);
  }
  // actual write
  await Deno.writeTextFile(join(dir, "ergo.ts"), text);
};

const genGroup = (gname: string, specs: Record<string, FnSpec>) => {
  let text = ``;
  if (Object.keys(specs).length == 0) return text;
  text += `export const ${gname} = {`;
  for (const [sname, sspec] of Object.entries(specs)) {
    text += camelCase(removePrefix(sname).replace(gname, ""));
    text += `:`;
    text += genFn(sname, sspec);
    text += `,`;
  }
  text += `};`;
  return text;
};

const genConstFn = (name: string, spec: FnSpec): string => {
  let text = ``;
  // def and name
  text += `export const ${camelCase(removePrefix(name))} = `;
  text += genFn(name, spec);
  // parameters
  text += `;`;
  return text;
};

const genFn = (name: string, spec: FnSpec) => {
  let text = ``;
  text += `(`;
  for (const p of spec.parameters) {
    if (p.name == "userdata") continue;
    text += `${genParamSig(p)},`;
  }
  text += `)`;
  // result
  text += `: ${genResSig(spec.result)}`;
  // body
  text += ` => `;
  let inner = `lib.symbols.${name}(`;
  for (const p of spec.parameters) {
    inner += `${genParam(p)},`;
  }
  inner += `)`;
  text += genRes(spec.result, inner);
  return text;
};

const genResSig = (spec: ResSpec): string => {
  return TYPE_MAP[spec.kind];
};

const genParamSig = (
  spec: ParamSpec,
): string => {
  let type;
  switch (spec.kind) {
    case "Enum":
      type = `E.${spec.type!}`;
      break;
    default:
      type = TYPE_MAP[spec.kind];
  }
  return `${spec.name}: ${type}`;
};

const genRes = (spec: ResSpec, inner: string): string => {
  switch (spec.kind) {
    case "Bool":
      return `C.toBool(${inner})`;
    case "Enum":
      return `C.toEnum<E.${spec.type!}>(${inner})`;
    default:
      return inner;
  }
};

const genParam = (spec: ParamSpec): string => {
  if (spec.name == "userdata") return "null";
  switch (spec.kind) {
    case "Bool":
      return `C.toNum(${spec.name})`;
    default:
      return spec.name;
  }
};

const extractResSpec = (type: CXType): ResSpec => {
  const kind = type.getCanonicalType()
    .getKindSpelling() as keyof typeof TYPE_MAP;
  const res: ResSpec = { kind };
  if (kind == "Enum") res.type = removePrefix(type.getSpelling());
  return res;
};

const extractParamSpec = (cursor: CXCursor): ParamSpec => {
  const param = extractResSpec(cursor.getType()!) as ParamSpec;
  param.name = cursor.getSpelling();
  return param;
};
