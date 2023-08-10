export const BufferMapCallback = {
  "result": "void",
  "parameters": ["u32", "pointer"],
} as const;
export const CompilationInfoCallback = {
  "result": "void",
  "parameters": ["u32", "pointer", "pointer"],
} as const;
export const CreateComputePipelineAsyncCallback = {
  "result": "void",
  "parameters": ["u32", "pointer", "pointer", "pointer"],
} as const;
export const CreateRenderPipelineAsyncCallback = {
  "result": "void",
  "parameters": ["u32", "pointer", "pointer", "pointer"],
} as const;
export const DeviceLostCallback = {
  "result": "void",
  "parameters": ["u32", "pointer", "pointer"],
} as const;
export const ErrorCallback = {
  "result": "void",
  "parameters": ["u32", "pointer", "pointer"],
} as const;
export const QueueWorkDoneCallback = {
  "result": "void",
  "parameters": ["u32", "pointer"],
} as const;
export const RequestAdapterCallback = {
  "result": "void",
  "parameters": ["u32", "pointer", "pointer", "pointer"],
} as const;
export const RequestDeviceCallback = {
  "result": "void",
  "parameters": ["u32", "pointer", "pointer", "pointer"],
} as const;
export const ProcDeviceSetUncapturedErrorCallback = {
  "result": "void",
  "parameters": ["pointer", "pointer", "pointer"],
} as const;
export const LogCallback = {
  "result": "void",
  "parameters": ["u32", "pointer", "pointer"],
} as const;
