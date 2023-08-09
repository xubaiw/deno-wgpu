// deno-lint-ignore-file no-explicit-any
import { CXCursorKind } from "https://deno.land/x/libclang@1.0.0-beta.8/include/typeDefinitions.ts";
import {
  CXChildVisitResult,
} from "https://deno.land/x/libclang@1.0.0-beta.8/mod.ts";
import { camelCase } from "https://deno.land/x/case@2.1.1/mod.ts";
import { Ctx, join } from "./util.ts";

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

export const genErgos = async (ctx: Ctx) => {
  const { tu, dir } = ctx;
  const symbols: Record<string, any> = {};

  tu.getCursor().visitChildren((cursor) => {
    // handle function decl
    if (cursor.kind == CXCursorKind.CXCursor_FunctionDecl) {
      const name = cursor.getSpelling();
      const r2 = TYPE_MAP[
        cursor.getResultType()!.getCanonicalType()
          .getKindSpelling() as keyof typeof TYPE_MAP
      ];
      const parameters = [];
      const nArgs = cursor.getNumberOfArguments();
      for (let i = 0; i < nArgs; i++) {
        const argCursor = cursor.getArgument(i)!;
        parameters.push([
          argCursor.getSpelling(),
          TYPE_MAP[
            argCursor.getType()!.getCanonicalType()
              .getKindSpelling() as keyof typeof TYPE_MAP
          ],
        ]);
      }
      symbols[name] = {
        r2,
        parameters,
      };
    }
    return CXChildVisitResult.CXChildVisit_Continue;
  });

  let ftext = `import lib from "./symbol.ts";\n\n`;
  for (const [sn, sd] of Object.entries(symbols)) {
    ftext += `export const ${camelCase(sn.replace(/^wgpu/, ""))} = (\n`;
    for (const p of sd.parameters) {
      ftext += `  ${p[0]}: ${p[1]},\n`;
    }
    ftext += `): ${sd.r2} =>\n  lib.symbols.${sn}(\n`;
    for (const p of sd.parameters) {
      ftext += `    ${p[0]}`;
      if (p[1] == "boolean") {
        ftext += ` ? 1 : 0`;
      }
      ftext += `,\n`;
    }
    ftext += `  )`;
    if (sd.r2 == "boolean") ftext += " == 1";
    ftext += `;\n\n`;
  }
  // actual write
  await Deno.writeTextFile(join(dir, "ergo.ts"), ftext);
};
