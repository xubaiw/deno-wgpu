import { CXCursorKind } from "https://deno.land/x/libclang@1.0.0-beta.8/include/typeDefinitions.ts";
import {
  CXChildVisitResult,
  CXCursor,
  CXType,
} from "https://deno.land/x/libclang@1.0.0-beta.8/mod.ts";
import { Ctx, join, removePrefix } from "./util.ts";
import { dedent } from "npm:@qnighy/dedent";

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

type Fn = {
  parameters: Param[];
  result: Res;
};
type Res = {
  kind: keyof typeof TYPE_MAP;
  type?: string;
};
type Param = Res & { name: string };

export const genErgos = async (ctx: Ctx) => {
  const { tu, dir } = ctx;
  const symbols: Record<string, Fn> = {};

  tu.getCursor().visitChildren((cursor) => {
    // handle function decl
    if (cursor.kind == CXCursorKind.CXCursor_FunctionDecl) {
      const name = cursor.getSpelling();
      const result = extractResSpec(cursor.getResultType()!);
      const parameters = [];
      for (let i = 0; i < cursor.getNumberOfArguments(); i++) {
        const pCursor = cursor.getArgument(i)!;
        parameters.push(extractParamSpec(pCursor));
      }
      symbols[name] = { result, parameters };
    }
    return CXChildVisitResult.CXChildVisit_Continue;
  });

  let text = `import lib from "./symbol.ts";` +
    `import * as C from "../util/conv.ts";` +
    `import * as E from "./enum.ts";` +
    `import * as CB from "./callback.ts";`;
  for (const [sname, sspec] of Object.entries(symbols)) {
    text += genFn(sname, sspec);
  }
  // actual write
  await Deno.writeTextFile(join(dir, "ergo.ts"), text);
};

const genFn = (name: string, spec: Fn): string => {
  // def and name
  let text = `export const ${removePrefix(name)} = `;
  // parameters
  text += `(`;
  for (const p of spec.parameters) {
    if (p.name == "userdata") continue;
    text += `${genParamSig(p)},`;
  }
  text += `)`;
  // result
  text += `: ${genResSig(spec.result)}`;
  // body
  text += ` => { `;
  text += `const result = lib.symbols.${name}(`;
  for (const p of spec.parameters) {
    text += `${genParam(p)},\n`;
  }
  text += `);\n`;
  text += `return ${genRes(spec.result)}`;
  text += `; };`;
  return text;
};

const genResSig = (spec: Res): string => {
  return TYPE_MAP[spec.kind];
};

const genParamSig = (
  spec: Param,
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

const genRes = (spec: Res): string => {
  switch (spec.kind) {
    case "Bool":
      return "C.toBool(result)";
    case "Enum":
      return `C.toEnum<E.${spec.type!}>(result)`;
    default:
      return "result";
  }
};

const genParam = (spec: Param): string => {
  if (spec.name == "userdata") return "null";
  switch (spec.kind) {
    case "Bool":
      return `C.toNum(${spec.name})`;
    default:
      return spec.name;
  }
};

const extractResSpec = (type: CXType): Res => {
  const kind = type.getCanonicalType()
    .getKindSpelling() as keyof typeof TYPE_MAP;
  const res: Res = { kind };
  if (kind == "Enum") res.type = removePrefix(type.getSpelling());
  return res;
};

const extractParamSpec = (cursor: CXCursor): Param => {
  const param = extractResSpec(cursor.getType()!) as Param;
  param.name = cursor.getSpelling();
  return param;
};
