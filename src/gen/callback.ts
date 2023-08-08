export const WGPUBufferMapCallback = {
  "result": "void",
  "parameters": [
    "u32",
    "pointer"
  ]
} as const;

export const WGPUCompilationInfoCallback = {
  "result": "void",
  "parameters": [
    "u32",
    "pointer",
    "pointer"
  ]
} as const;

export const WGPUCreateComputePipelineAsyncCallback = {
  "result": "void",
  "parameters": [
    "u32",
    "pointer",
    "pointer",
    "pointer"
  ]
} as const;

export const WGPUCreateRenderPipelineAsyncCallback = {
  "result": "void",
  "parameters": [
    "u32",
    "pointer",
    "pointer",
    "pointer"
  ]
} as const;

export const WGPUDeviceLostCallback = {
  "result": "void",
  "parameters": [
    "u32",
    "pointer",
    "pointer"
  ]
} as const;

export const WGPUErrorCallback = {
  "result": "void",
  "parameters": [
    "u32",
    "pointer",
    "pointer"
  ]
} as const;

export const WGPUQueueWorkDoneCallback = {
  "result": "void",
  "parameters": [
    "u32",
    "pointer"
  ]
} as const;

export const WGPURequestAdapterCallback = {
  "result": "void",
  "parameters": [
    "u32",
    "pointer",
    "pointer",
    "pointer"
  ]
} as const;

export const WGPURequestDeviceCallback = {
  "result": "void",
  "parameters": [
    "u32",
    "pointer",
    "pointer",
    "pointer"
  ]
} as const;

export const WGPUProcDeviceSetUncapturedErrorCallback = {
  "result": "void",
  "parameters": [
    "pointer",
    "pointer",
    "pointer"
  ]
} as const;

export const WGPULogCallback = {
  "result": "void",
  "parameters": [
    "u32",
    "pointer",
    "pointer"
  ]
} as const;

