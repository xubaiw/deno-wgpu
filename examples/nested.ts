import { alloc, ref, WGPUChainedStruct, WGPUNativeSType } from "../mod.ts";

const s1 = alloc(WGPUChainedStruct);
s1.sType = WGPUNativeSType.WGPUSType_AdapterExtras;

const s2 = alloc(WGPUChainedStruct);
s1.next = ref(s2);
