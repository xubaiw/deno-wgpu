export const BufferMapCallbackDefinition = {
  "result": "void",
  "parameters": ["u32", "pointer"],
} as const;

export type BufferMapCallbackDefinition = typeof BufferMapCallbackDefinition;

export const CompilationInfoCallbackDefinition = {
  "result": "void",
  "parameters": ["u32", "pointer", "pointer"],
} as const;

export type CompilationInfoCallbackDefinition =
  typeof CompilationInfoCallbackDefinition;

export const CreateComputePipelineAsyncCallbackDefinition = {
  "result": "void",
  "parameters": ["u32", "pointer", "pointer", "pointer"],
} as const;

export type CreateComputePipelineAsyncCallbackDefinition =
  typeof CreateComputePipelineAsyncCallbackDefinition;

export const CreateRenderPipelineAsyncCallbackDefinition = {
  "result": "void",
  "parameters": ["u32", "pointer", "pointer", "pointer"],
} as const;

export type CreateRenderPipelineAsyncCallbackDefinition =
  typeof CreateRenderPipelineAsyncCallbackDefinition;

export const DeviceLostCallbackDefinition = {
  "result": "void",
  "parameters": ["u32", "pointer", "pointer"],
} as const;

export type DeviceLostCallbackDefinition = typeof DeviceLostCallbackDefinition;

export const ErrorCallbackDefinition = {
  "result": "void",
  "parameters": ["u32", "pointer", "pointer"],
} as const;

export type ErrorCallbackDefinition = typeof ErrorCallbackDefinition;

export const QueueWorkDoneCallbackDefinition = {
  "result": "void",
  "parameters": ["u32", "pointer"],
} as const;

export type QueueWorkDoneCallbackDefinition =
  typeof QueueWorkDoneCallbackDefinition;

export const RequestAdapterCallbackDefinition = {
  "result": "void",
  "parameters": ["u32", "pointer", "pointer", "pointer"],
} as const;

export type RequestAdapterCallbackDefinition =
  typeof RequestAdapterCallbackDefinition;

export const RequestDeviceCallbackDefinition = {
  "result": "void",
  "parameters": ["u32", "pointer", "pointer", "pointer"],
} as const;

export type RequestDeviceCallbackDefinition =
  typeof RequestDeviceCallbackDefinition;

export const ProcDeviceSetUncapturedErrorCallbackDefinition = {
  "result": "void",
  "parameters": ["pointer", "pointer", "pointer"],
} as const;

export type ProcDeviceSetUncapturedErrorCallbackDefinition =
  typeof ProcDeviceSetUncapturedErrorCallbackDefinition;

export const LogCallbackDefinition = {
  "result": "void",
  "parameters": ["u32", "pointer", "pointer"],
} as const;

export type LogCallbackDefinition = typeof LogCallbackDefinition;
