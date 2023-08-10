// deno-lint-ignore-file no-explicit-any

import { delay } from "https://deno.land/std@0.197.0/async/delay.ts";

export const wrapcallback = (
  spec: any,
  fn: any,
  idxCb: number,
  args: any[],
  poll?: (...pargs: any[]) => boolean,
) => {
  if (args.length == idxCb) {
    if (poll) {
      // promise polled
      return wrappoll(spec, fn, args, poll);
    } else {
      // promise not polled
      return new Promise((res) => {
        // deno-lint-ignore prefer-const
        let ncb: Deno.UnsafeCallback;
        const cb = (...cbargs: any[]) => {
          ncb.unref();
          res(cbargs);
        };
        ncb = new Deno.UnsafeCallback(spec, cb);
        ncb.ref();
        fn(...args, ncb);
      });
    }
  } else {
    const cb = args[idxCb];
    // js function callback
    if (cb instanceof Function) {
      const ncb = new Deno.UnsafeCallback(spec, cb);
      fn(...args, ncb.pointer);
      return cb;
    }
    // NCB callback
    if (cb instanceof Deno.UnsafeCallback) {
      fn(...args, cb.pointer);
    }
    // DPV callback
    fn(...args, cb);
  }
};

const wrappoll = async (
  spec: any,
  fn: any,
  args: any[],
  poll: (...pargs: any[]) => boolean,
) => {
  let userdata: any[];
  const callback = new Deno.UnsafeCallback(
    spec,
    (...cbargs: any[]) => userdata = cbargs,
  );
  fn(
    ...args,
    callback.pointer,
  );
  while (!poll(args[0].device, false, null)) {
    await delay(10);
  }
  return userdata!;
};
