import { lib } from "./src/ffi.ts";
import { struct } from "https://denopkg.com/xubaiw/struct@master/mod.ts";

const NULL = Deno.UnsafePointer.create(0);

// Create Instance
const descripter = struct({ nextInChain: "ptr" });
descripter.nextInChain = 0;
const instance = lib.symbols.wgpuCreateInstance(
  Deno.UnsafePointer.of(descripter._buffer),
);

const adapter = await requestAdapter(instance);

const limits = new Uint8Array(152);
lib.symbols.wgpuAdapterGetLimits(adapter, Deno.UnsafePointer.of(limits));

// print limits
// TODO: generate record from metadata
for (let off = 8; off < 152; off += 4) {
  console.log(off, new DataView(limits.buffer).getUint32(off, true));
}

// Release instance
lib.symbols.wgpuInstanceRelease(instance);

function requestAdapter(
  instance: Deno.PointerValue,
): Promise<Deno.PointerValue> {
  return new Promise((res) => {
    // TODO: auto generate callback
    const callback = new Deno.UnsafeCallback({
      parameters: ["u32", "pointer", "pointer", "pointer"],
      result: "void",
    }, (_status, adapter, _message, _userdata) => {
      // TODO: also generate enum
      res(adapter);
    });
    lib.symbols.wgpuInstanceRequestAdapter(
      instance,
      NULL,
      callback.pointer,
      NULL,
    );
  });
}


