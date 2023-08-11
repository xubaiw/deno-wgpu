/// <reference types="../../vendor/deno.unstable.d.ts" />

import lib from "./symbol.ts";
import * as E from "./enum.ts";
import * as C from "./callback.ts";
import * as UC from "../util/conv.ts";

export function createInstance(descriptor: Deno.PointerValue): Instance {
  const result = lib.symbols.wgpuCreateInstance(descriptor);
  return new Instance(result);
}

export function getProcAddress(
  device: Device,
  procName: Deno.PointerValue,
): Deno.PointerValue {
  const result = lib.symbols.wgpuGetProcAddress(device.pointer, procName);
  return result;
}

export function generateReport(
  instance: Instance,
  report: Deno.PointerValue,
): void {
  const result = lib.symbols.wgpuGenerateReport(instance.pointer, report);
  return result;
}

export function setLogCallback(): Promise<
  [E.LogLevel, Deno.PointerValue, Deno.PointerValue]
>;
export function setLogCallback(
  callback: (
    ...args: [E.LogLevel, Deno.PointerValue, Deno.PointerValue]
  ) => void,
): Deno.UnsafeCallback<C.LogCallbackDefinition>;
export function setLogCallback(
  callback: Deno.UnsafeCallback<C.LogCallbackDefinition>,
): void;
export function setLogCallback(callback: Deno.PointerValue): void;
export function setLogCallback(
  callback?:
    | ((...args: [E.LogLevel, Deno.PointerValue, Deno.PointerValue]) => void)
    | Deno.UnsafeCallback<C.LogCallbackDefinition>
    | Deno.PointerValue,
):
  | void
  | Promise<[E.LogLevel, Deno.PointerValue, Deno.PointerValue]>
  | Deno.UnsafeCallback<C.LogCallbackDefinition> {
  if (callback == null) {
    return new Promise((res) => {
      const cb = new Deno.UnsafeCallback(
        C.LogCallbackDefinition,
        (...args: UC.CbParam<C.LogCallbackDefinition>) => {
          res(
            [args[0] as E.LogLevel, args[1], args[2]] as [
              E.LogLevel,
              Deno.PointerValue,
              Deno.PointerValue,
            ],
          );
        },
      );
      lib.symbols.wgpuSetLogCallback(cb.pointer, null);
    });
  } else if (callback instanceof Deno.UnsafeCallback) {
    lib.symbols.wgpuSetLogCallback(callback.pointer, null);
  } else if (callback instanceof Function) {
    const cb = new Deno.UnsafeCallback(
      C.LogCallbackDefinition,
      (...args: UC.CbParam<C.LogCallbackDefinition>) => {
        callback(...[args[0] as E.LogLevel, args[1], args[2]]);
      },
    );
    lib.symbols.wgpuSetLogCallback(cb.pointer, null);
    return cb;
  } else {
    lib.symbols.wgpuSetLogCallback(callback, null);
  }
}

export function setLogLevel(level: E.LogLevel): void {
  const result = lib.symbols.wgpuSetLogLevel(level);
  return result;
}

export function getVersion(): number {
  const result = lib.symbols.wgpuGetVersion();
  return result;
}

export class Adapter extends UC.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: UC.ClassBase) {
    super(pointer, parent);
  }

  enumerateFeatures(features: Deno.PointerValue): number | bigint {
    const result = lib.symbols.wgpuAdapterEnumerateFeatures(
      this.pointer,
      features,
    );
    return result;
  }

  getLimits(limits: Deno.PointerValue): boolean {
    const result = lib.symbols.wgpuAdapterGetLimits(this.pointer, limits);
    return result == 1;
  }

  getProperties(properties: Deno.PointerValue): void {
    const result = lib.symbols.wgpuAdapterGetProperties(
      this.pointer,
      properties,
    );
    return result;
  }

  hasFeature(feature: E.FeatureName): boolean {
    const result = lib.symbols.wgpuAdapterHasFeature(this.pointer, feature);
    return result == 1;
  }

  requestDevice(
    descriptor: Deno.PointerValue,
  ): Promise<
    [E.RequestDeviceStatus, Device, Deno.PointerValue, Deno.PointerValue]
  >;
  requestDevice(
    descriptor: Deno.PointerValue,
    callback: (
      ...args: [
        E.RequestDeviceStatus,
        Device,
        Deno.PointerValue,
        Deno.PointerValue,
      ]
    ) => void,
  ): Deno.UnsafeCallback<C.RequestDeviceCallbackDefinition>;
  requestDevice(
    descriptor: Deno.PointerValue,
    callback: Deno.UnsafeCallback<C.RequestDeviceCallbackDefinition>,
  ): void;
  requestDevice(
    descriptor: Deno.PointerValue,
    callback: Deno.PointerValue,
  ): void;
  requestDevice(
    descriptor: Deno.PointerValue,
    callback?:
      | ((
        ...args: [
          E.RequestDeviceStatus,
          Device,
          Deno.PointerValue,
          Deno.PointerValue,
        ]
      ) => void)
      | Deno.UnsafeCallback<C.RequestDeviceCallbackDefinition>
      | Deno.PointerValue,
  ):
    | void
    | Promise<
      [E.RequestDeviceStatus, Device, Deno.PointerValue, Deno.PointerValue]
    >
    | Deno.UnsafeCallback<C.RequestDeviceCallbackDefinition> {
    if (callback == null) {
      return new Promise((res) => {
        const cb = new Deno.UnsafeCallback(
          C.RequestDeviceCallbackDefinition,
          (...args: UC.CbParam<C.RequestDeviceCallbackDefinition>) => {
            res(
              [
                args[0] as E.RequestDeviceStatus,
                new Device(args[1], this),
                args[2],
                args[3],
              ] as [
                E.RequestDeviceStatus,
                Device,
                Deno.PointerValue,
                Deno.PointerValue,
              ],
            );
          },
        );
        lib.symbols.wgpuAdapterRequestDevice(
          this.pointer,
          descriptor,
          cb.pointer,
          null,
        );
      });
    } else if (callback instanceof Deno.UnsafeCallback) {
      lib.symbols.wgpuAdapterRequestDevice(
        this.pointer,
        descriptor,
        callback.pointer,
        null,
      );
    } else if (callback instanceof Function) {
      const cb = new Deno.UnsafeCallback(
        C.RequestDeviceCallbackDefinition,
        (...args: UC.CbParam<C.RequestDeviceCallbackDefinition>) => {
          callback(...[
            args[0] as E.RequestDeviceStatus,
            new Device(args[1], this),
            args[2],
            args[3],
          ]);
        },
      );
      lib.symbols.wgpuAdapterRequestDevice(
        this.pointer,
        descriptor,
        cb.pointer,
        null,
      );
      return cb;
    } else {
      lib.symbols.wgpuAdapterRequestDevice(
        this.pointer,
        descriptor,
        callback,
        null,
      );
    }
  }

  reference(): void {
    const result = lib.symbols.wgpuAdapterReference(this.pointer);
    return result;
  }

  release(): void {
    const result = lib.symbols.wgpuAdapterRelease(this.pointer);
    return result;
  }
}

export class BindGroup extends UC.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: UC.ClassBase) {
    super(pointer, parent);
  }

  setLabel(label: Deno.PointerValue): void {
    const result = lib.symbols.wgpuBindGroupSetLabel(this.pointer, label);
    return result;
  }

  reference(): void {
    const result = lib.symbols.wgpuBindGroupReference(this.pointer);
    return result;
  }

  release(): void {
    const result = lib.symbols.wgpuBindGroupRelease(this.pointer);
    return result;
  }
}

export class BindGroupLayout extends UC.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: UC.ClassBase) {
    super(pointer, parent);
  }

  setLabel(label: Deno.PointerValue): void {
    const result = lib.symbols.wgpuBindGroupLayoutSetLabel(this.pointer, label);
    return result;
  }

  reference(): void {
    const result = lib.symbols.wgpuBindGroupLayoutReference(this.pointer);
    return result;
  }

  release(): void {
    const result = lib.symbols.wgpuBindGroupLayoutRelease(this.pointer);
    return result;
  }
}

export class Buffer extends UC.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: UC.ClassBase) {
    super(pointer, parent);
  }

  destroy(): void {
    const result = lib.symbols.wgpuBufferDestroy(this.pointer);
    return result;
  }

  getConstMappedRange(
    offset: number | bigint,
    size: number | bigint,
  ): Deno.PointerValue {
    const result = lib.symbols.wgpuBufferGetConstMappedRange(
      this.pointer,
      offset,
      size,
    );
    return result;
  }

  getMapState(): E.BufferMapState {
    const result = lib.symbols.wgpuBufferGetMapState(this.pointer);
    return result as E.BufferMapState;
  }

  getMappedRange(
    offset: number | bigint,
    size: number | bigint,
  ): Deno.PointerValue {
    const result = lib.symbols.wgpuBufferGetMappedRange(
      this.pointer,
      offset,
      size,
    );
    return result;
  }

  getSize(): number | bigint {
    const result = lib.symbols.wgpuBufferGetSize(this.pointer);
    return result;
  }

  getUsage(): number {
    const result = lib.symbols.wgpuBufferGetUsage(this.pointer);
    return result;
  }

  mapAsync(
    mode: number,
    offset: number | bigint,
    size: number | bigint,
  ): Promise<[E.BufferMapAsyncStatus, Deno.PointerValue]>;
  mapAsync(
    mode: number,
    offset: number | bigint,
    size: number | bigint,
    callback: (...args: [E.BufferMapAsyncStatus, Deno.PointerValue]) => void,
  ): Deno.UnsafeCallback<C.BufferMapCallbackDefinition>;
  mapAsync(
    mode: number,
    offset: number | bigint,
    size: number | bigint,
    callback: Deno.UnsafeCallback<C.BufferMapCallbackDefinition>,
  ): void;
  mapAsync(
    mode: number,
    offset: number | bigint,
    size: number | bigint,
    callback: Deno.PointerValue,
  ): void;
  mapAsync(
    mode: number,
    offset: number | bigint,
    size: number | bigint,
    callback?:
      | ((...args: [E.BufferMapAsyncStatus, Deno.PointerValue]) => void)
      | Deno.UnsafeCallback<C.BufferMapCallbackDefinition>
      | Deno.PointerValue,
  ):
    | void
    | Promise<[E.BufferMapAsyncStatus, Deno.PointerValue]>
    | Deno.UnsafeCallback<C.BufferMapCallbackDefinition> {
    if (callback == null) {
      return new Promise((res) => {
        let data: [E.BufferMapAsyncStatus, Deno.PointerValue];
        const device = this.findInFamily(Device);
        if (!device) {
          throw new Error(
            "WGPU Object must be associated to Device to call async method.",
          );
        }
        const cb = new Deno.UnsafeCallback(
          C.BufferMapCallbackDefinition,
          (...args: UC.CbParam<C.BufferMapCallbackDefinition>) => {
            data = [args[0] as E.BufferMapAsyncStatus, args[1]];
          },
        );
        lib.symbols.wgpuBufferMapAsync(
          this.pointer,
          mode,
          offset,
          size,
          cb.pointer,
          null,
        );
        const id = setInterval(() => {
          if (lib.symbols.wgpuDevicePoll(device.pointer, 0, null)) {
            clearInterval(id);
            res(data!);
          }
        }, 10);
      });
    } else if (callback instanceof Deno.UnsafeCallback) {
      lib.symbols.wgpuBufferMapAsync(
        this.pointer,
        mode,
        offset,
        size,
        callback.pointer,
        null,
      );
    } else if (callback instanceof Function) {
      const cb = new Deno.UnsafeCallback(
        C.BufferMapCallbackDefinition,
        (...args: UC.CbParam<C.BufferMapCallbackDefinition>) => {
          callback(...[args[0] as E.BufferMapAsyncStatus, args[1]]);
        },
      );
      lib.symbols.wgpuBufferMapAsync(
        this.pointer,
        mode,
        offset,
        size,
        cb.pointer,
        null,
      );
      return cb;
    } else {
      lib.symbols.wgpuBufferMapAsync(
        this.pointer,
        mode,
        offset,
        size,
        callback,
        null,
      );
    }
  }

  setLabel(label: Deno.PointerValue): void {
    const result = lib.symbols.wgpuBufferSetLabel(this.pointer, label);
    return result;
  }

  unmap(): void {
    const result = lib.symbols.wgpuBufferUnmap(this.pointer);
    return result;
  }

  reference(): void {
    const result = lib.symbols.wgpuBufferReference(this.pointer);
    return result;
  }

  release(): void {
    const result = lib.symbols.wgpuBufferRelease(this.pointer);
    return result;
  }
}

export class CommandBuffer extends UC.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: UC.ClassBase) {
    super(pointer, parent);
  }

  setLabel(label: Deno.PointerValue): void {
    const result = lib.symbols.wgpuCommandBufferSetLabel(this.pointer, label);
    return result;
  }

  reference(): void {
    const result = lib.symbols.wgpuCommandBufferReference(this.pointer);
    return result;
  }

  release(): void {
    const result = lib.symbols.wgpuCommandBufferRelease(this.pointer);
    return result;
  }
}

export class CommandEncoder extends UC.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: UC.ClassBase) {
    super(pointer, parent);
  }

  beginComputePass(descriptor: Deno.PointerValue): ComputePassEncoder {
    const result = lib.symbols.wgpuCommandEncoderBeginComputePass(
      this.pointer,
      descriptor,
    );
    return new ComputePassEncoder(result, this);
  }

  beginRenderPass(descriptor: Deno.PointerValue): RenderPassEncoder {
    const result = lib.symbols.wgpuCommandEncoderBeginRenderPass(
      this.pointer,
      descriptor,
    );
    return new RenderPassEncoder(result, this);
  }

  clearBuffer(
    buffer: Buffer,
    offset: number | bigint,
    size: number | bigint,
  ): void {
    const result = lib.symbols.wgpuCommandEncoderClearBuffer(
      this.pointer,
      buffer.pointer,
      offset,
      size,
    );
    return result;
  }

  copyBufferToBuffer(
    source: Buffer,
    sourceOffset: number | bigint,
    destination: Buffer,
    destinationOffset: number | bigint,
    size: number | bigint,
  ): void {
    const result = lib.symbols.wgpuCommandEncoderCopyBufferToBuffer(
      this.pointer,
      source.pointer,
      sourceOffset,
      destination.pointer,
      destinationOffset,
      size,
    );
    return result;
  }

  copyBufferToTexture(
    source: Deno.PointerValue,
    destination: Deno.PointerValue,
    copySize: Deno.PointerValue,
  ): void {
    const result = lib.symbols.wgpuCommandEncoderCopyBufferToTexture(
      this.pointer,
      source,
      destination,
      copySize,
    );
    return result;
  }

  copyTextureToBuffer(
    source: Deno.PointerValue,
    destination: Deno.PointerValue,
    copySize: Deno.PointerValue,
  ): void {
    const result = lib.symbols.wgpuCommandEncoderCopyTextureToBuffer(
      this.pointer,
      source,
      destination,
      copySize,
    );
    return result;
  }

  copyTextureToTexture(
    source: Deno.PointerValue,
    destination: Deno.PointerValue,
    copySize: Deno.PointerValue,
  ): void {
    const result = lib.symbols.wgpuCommandEncoderCopyTextureToTexture(
      this.pointer,
      source,
      destination,
      copySize,
    );
    return result;
  }

  finish(descriptor: Deno.PointerValue): CommandBuffer {
    const result = lib.symbols.wgpuCommandEncoderFinish(
      this.pointer,
      descriptor,
    );
    return new CommandBuffer(result, this);
  }

  insertDebugMarker(markerLabel: Deno.PointerValue): void {
    const result = lib.symbols.wgpuCommandEncoderInsertDebugMarker(
      this.pointer,
      markerLabel,
    );
    return result;
  }

  popDebugGroup(): void {
    const result = lib.symbols.wgpuCommandEncoderPopDebugGroup(this.pointer);
    return result;
  }

  pushDebugGroup(groupLabel: Deno.PointerValue): void {
    const result = lib.symbols.wgpuCommandEncoderPushDebugGroup(
      this.pointer,
      groupLabel,
    );
    return result;
  }

  resolveQuerySet(
    querySet: QuerySet,
    firstQuery: number,
    queryCount: number,
    destination: Buffer,
    destinationOffset: number | bigint,
  ): void {
    const result = lib.symbols.wgpuCommandEncoderResolveQuerySet(
      this.pointer,
      querySet.pointer,
      firstQuery,
      queryCount,
      destination.pointer,
      destinationOffset,
    );
    return result;
  }

  setLabel(label: Deno.PointerValue): void {
    const result = lib.symbols.wgpuCommandEncoderSetLabel(this.pointer, label);
    return result;
  }

  writeTimestamp(querySet: QuerySet, queryIndex: number): void {
    const result = lib.symbols.wgpuCommandEncoderWriteTimestamp(
      this.pointer,
      querySet.pointer,
      queryIndex,
    );
    return result;
  }

  reference(): void {
    const result = lib.symbols.wgpuCommandEncoderReference(this.pointer);
    return result;
  }

  release(): void {
    const result = lib.symbols.wgpuCommandEncoderRelease(this.pointer);
    return result;
  }
}

export class ComputePassEncoder extends UC.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: UC.ClassBase) {
    super(pointer, parent);
  }

  beginPipelineStatisticsQuery(querySet: QuerySet, queryIndex: number): void {
    const result = lib.symbols
      .wgpuComputePassEncoderBeginPipelineStatisticsQuery(
        this.pointer,
        querySet.pointer,
        queryIndex,
      );
    return result;
  }

  dispatchWorkgroups(
    workgroupCountX: number,
    workgroupCountY: number,
    workgroupCountZ: number,
  ): void {
    const result = lib.symbols.wgpuComputePassEncoderDispatchWorkgroups(
      this.pointer,
      workgroupCountX,
      workgroupCountY,
      workgroupCountZ,
    );
    return result;
  }

  dispatchWorkgroupsIndirect(
    indirectBuffer: Buffer,
    indirectOffset: number | bigint,
  ): void {
    const result = lib.symbols.wgpuComputePassEncoderDispatchWorkgroupsIndirect(
      this.pointer,
      indirectBuffer.pointer,
      indirectOffset,
    );
    return result;
  }

  end(): void {
    const result = lib.symbols.wgpuComputePassEncoderEnd(this.pointer);
    return result;
  }

  endPipelineStatisticsQuery(): void {
    const result = lib.symbols.wgpuComputePassEncoderEndPipelineStatisticsQuery(
      this.pointer,
    );
    return result;
  }

  insertDebugMarker(markerLabel: Deno.PointerValue): void {
    const result = lib.symbols.wgpuComputePassEncoderInsertDebugMarker(
      this.pointer,
      markerLabel,
    );
    return result;
  }

  popDebugGroup(): void {
    const result = lib.symbols.wgpuComputePassEncoderPopDebugGroup(
      this.pointer,
    );
    return result;
  }

  pushDebugGroup(groupLabel: Deno.PointerValue): void {
    const result = lib.symbols.wgpuComputePassEncoderPushDebugGroup(
      this.pointer,
      groupLabel,
    );
    return result;
  }

  setBindGroup(
    groupIndex: number,
    group: BindGroup,
    dynamicOffsetCount: number | bigint,
    dynamicOffsets: Deno.PointerValue,
  ): void {
    const result = lib.symbols.wgpuComputePassEncoderSetBindGroup(
      this.pointer,
      groupIndex,
      group.pointer,
      dynamicOffsetCount,
      dynamicOffsets,
    );
    return result;
  }

  setLabel(label: Deno.PointerValue): void {
    const result = lib.symbols.wgpuComputePassEncoderSetLabel(
      this.pointer,
      label,
    );
    return result;
  }

  setPipeline(pipeline: ComputePipeline): void {
    const result = lib.symbols.wgpuComputePassEncoderSetPipeline(
      this.pointer,
      pipeline.pointer,
    );
    return result;
  }

  reference(): void {
    const result = lib.symbols.wgpuComputePassEncoderReference(this.pointer);
    return result;
  }

  release(): void {
    const result = lib.symbols.wgpuComputePassEncoderRelease(this.pointer);
    return result;
  }
}

export class ComputePipeline extends UC.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: UC.ClassBase) {
    super(pointer, parent);
  }

  getBindGroupLayout(groupIndex: number): BindGroupLayout {
    const result = lib.symbols.wgpuComputePipelineGetBindGroupLayout(
      this.pointer,
      groupIndex,
    );
    return new BindGroupLayout(result, this);
  }

  setLabel(label: Deno.PointerValue): void {
    const result = lib.symbols.wgpuComputePipelineSetLabel(this.pointer, label);
    return result;
  }

  reference(): void {
    const result = lib.symbols.wgpuComputePipelineReference(this.pointer);
    return result;
  }

  release(): void {
    const result = lib.symbols.wgpuComputePipelineRelease(this.pointer);
    return result;
  }
}

export class Device extends UC.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: UC.ClassBase) {
    super(pointer, parent);
  }

  createBindGroup(descriptor: Deno.PointerValue): BindGroup {
    const result = lib.symbols.wgpuDeviceCreateBindGroup(
      this.pointer,
      descriptor,
    );
    return new BindGroup(result, this);
  }

  createBindGroupLayout(descriptor: Deno.PointerValue): BindGroupLayout {
    const result = lib.symbols.wgpuDeviceCreateBindGroupLayout(
      this.pointer,
      descriptor,
    );
    return new BindGroupLayout(result, this);
  }

  createBuffer(descriptor: Deno.PointerValue): Buffer {
    const result = lib.symbols.wgpuDeviceCreateBuffer(this.pointer, descriptor);
    return new Buffer(result, this);
  }

  createCommandEncoder(descriptor: Deno.PointerValue): CommandEncoder {
    const result = lib.symbols.wgpuDeviceCreateCommandEncoder(
      this.pointer,
      descriptor,
    );
    return new CommandEncoder(result, this);
  }

  createComputePipeline(descriptor: Deno.PointerValue): ComputePipeline {
    const result = lib.symbols.wgpuDeviceCreateComputePipeline(
      this.pointer,
      descriptor,
    );
    return new ComputePipeline(result, this);
  }

  createComputePipelineAsync(
    descriptor: Deno.PointerValue,
  ): Promise<
    [
      E.CreatePipelineAsyncStatus,
      ComputePipeline,
      Deno.PointerValue,
      Deno.PointerValue,
    ]
  >;
  createComputePipelineAsync(
    descriptor: Deno.PointerValue,
    callback: (
      ...args: [
        E.CreatePipelineAsyncStatus,
        ComputePipeline,
        Deno.PointerValue,
        Deno.PointerValue,
      ]
    ) => void,
  ): Deno.UnsafeCallback<C.CreateComputePipelineAsyncCallbackDefinition>;
  createComputePipelineAsync(
    descriptor: Deno.PointerValue,
    callback: Deno.UnsafeCallback<
      C.CreateComputePipelineAsyncCallbackDefinition
    >,
  ): void;
  createComputePipelineAsync(
    descriptor: Deno.PointerValue,
    callback: Deno.PointerValue,
  ): void;
  createComputePipelineAsync(
    descriptor: Deno.PointerValue,
    callback?:
      | ((
        ...args: [
          E.CreatePipelineAsyncStatus,
          ComputePipeline,
          Deno.PointerValue,
          Deno.PointerValue,
        ]
      ) => void)
      | Deno.UnsafeCallback<C.CreateComputePipelineAsyncCallbackDefinition>
      | Deno.PointerValue,
  ):
    | void
    | Promise<
      [
        E.CreatePipelineAsyncStatus,
        ComputePipeline,
        Deno.PointerValue,
        Deno.PointerValue,
      ]
    >
    | Deno.UnsafeCallback<C.CreateComputePipelineAsyncCallbackDefinition> {
    if (callback == null) {
      return new Promise((res) => {
        let data: [
          E.CreatePipelineAsyncStatus,
          ComputePipeline,
          Deno.PointerValue,
          Deno.PointerValue,
        ];
        const device = this.findInFamily(Device);
        if (!device) {
          throw new Error(
            "WGPU Object must be associated to Device to call async method.",
          );
        }
        const cb = new Deno.UnsafeCallback(
          C.CreateComputePipelineAsyncCallbackDefinition,
          (
            ...args: UC.CbParam<C.CreateComputePipelineAsyncCallbackDefinition>
          ) => {
            data = [
              args[0] as E.CreatePipelineAsyncStatus,
              new ComputePipeline(args[1], this),
              args[2],
              args[3],
            ];
          },
        );
        lib.symbols.wgpuDeviceCreateComputePipelineAsync(
          this.pointer,
          descriptor,
          cb.pointer,
          null,
        );
        const id = setInterval(() => {
          if (lib.symbols.wgpuDevicePoll(device.pointer, 0, null)) {
            clearInterval(id);
            res(data!);
          }
        }, 10);
      });
    } else if (callback instanceof Deno.UnsafeCallback) {
      lib.symbols.wgpuDeviceCreateComputePipelineAsync(
        this.pointer,
        descriptor,
        callback.pointer,
        null,
      );
    } else if (callback instanceof Function) {
      const cb = new Deno.UnsafeCallback(
        C.CreateComputePipelineAsyncCallbackDefinition,
        (
          ...args: UC.CbParam<C.CreateComputePipelineAsyncCallbackDefinition>
        ) => {
          callback(...[
            args[0] as E.CreatePipelineAsyncStatus,
            new ComputePipeline(args[1], this),
            args[2],
            args[3],
          ]);
        },
      );
      lib.symbols.wgpuDeviceCreateComputePipelineAsync(
        this.pointer,
        descriptor,
        cb.pointer,
        null,
      );
      return cb;
    } else {
      lib.symbols.wgpuDeviceCreateComputePipelineAsync(
        this.pointer,
        descriptor,
        callback,
        null,
      );
    }
  }

  createPipelineLayout(descriptor: Deno.PointerValue): PipelineLayout {
    const result = lib.symbols.wgpuDeviceCreatePipelineLayout(
      this.pointer,
      descriptor,
    );
    return new PipelineLayout(result, this);
  }

  createQuerySet(descriptor: Deno.PointerValue): QuerySet {
    const result = lib.symbols.wgpuDeviceCreateQuerySet(
      this.pointer,
      descriptor,
    );
    return new QuerySet(result, this);
  }

  createRenderBundleEncoder(
    descriptor: Deno.PointerValue,
  ): RenderBundleEncoder {
    const result = lib.symbols.wgpuDeviceCreateRenderBundleEncoder(
      this.pointer,
      descriptor,
    );
    return new RenderBundleEncoder(result, this);
  }

  createRenderPipeline(descriptor: Deno.PointerValue): RenderPipeline {
    const result = lib.symbols.wgpuDeviceCreateRenderPipeline(
      this.pointer,
      descriptor,
    );
    return new RenderPipeline(result, this);
  }

  createRenderPipelineAsync(
    descriptor: Deno.PointerValue,
  ): Promise<
    [
      E.CreatePipelineAsyncStatus,
      RenderPipeline,
      Deno.PointerValue,
      Deno.PointerValue,
    ]
  >;
  createRenderPipelineAsync(
    descriptor: Deno.PointerValue,
    callback: (
      ...args: [
        E.CreatePipelineAsyncStatus,
        RenderPipeline,
        Deno.PointerValue,
        Deno.PointerValue,
      ]
    ) => void,
  ): Deno.UnsafeCallback<C.CreateRenderPipelineAsyncCallbackDefinition>;
  createRenderPipelineAsync(
    descriptor: Deno.PointerValue,
    callback: Deno.UnsafeCallback<
      C.CreateRenderPipelineAsyncCallbackDefinition
    >,
  ): void;
  createRenderPipelineAsync(
    descriptor: Deno.PointerValue,
    callback: Deno.PointerValue,
  ): void;
  createRenderPipelineAsync(
    descriptor: Deno.PointerValue,
    callback?:
      | ((
        ...args: [
          E.CreatePipelineAsyncStatus,
          RenderPipeline,
          Deno.PointerValue,
          Deno.PointerValue,
        ]
      ) => void)
      | Deno.UnsafeCallback<C.CreateRenderPipelineAsyncCallbackDefinition>
      | Deno.PointerValue,
  ):
    | void
    | Promise<
      [
        E.CreatePipelineAsyncStatus,
        RenderPipeline,
        Deno.PointerValue,
        Deno.PointerValue,
      ]
    >
    | Deno.UnsafeCallback<C.CreateRenderPipelineAsyncCallbackDefinition> {
    if (callback == null) {
      return new Promise((res) => {
        let data: [
          E.CreatePipelineAsyncStatus,
          RenderPipeline,
          Deno.PointerValue,
          Deno.PointerValue,
        ];
        const device = this.findInFamily(Device);
        if (!device) {
          throw new Error(
            "WGPU Object must be associated to Device to call async method.",
          );
        }
        const cb = new Deno.UnsafeCallback(
          C.CreateRenderPipelineAsyncCallbackDefinition,
          (
            ...args: UC.CbParam<C.CreateRenderPipelineAsyncCallbackDefinition>
          ) => {
            data = [
              args[0] as E.CreatePipelineAsyncStatus,
              new RenderPipeline(args[1], this),
              args[2],
              args[3],
            ];
          },
        );
        lib.symbols.wgpuDeviceCreateRenderPipelineAsync(
          this.pointer,
          descriptor,
          cb.pointer,
          null,
        );
        const id = setInterval(() => {
          if (lib.symbols.wgpuDevicePoll(device.pointer, 0, null)) {
            clearInterval(id);
            res(data!);
          }
        }, 10);
      });
    } else if (callback instanceof Deno.UnsafeCallback) {
      lib.symbols.wgpuDeviceCreateRenderPipelineAsync(
        this.pointer,
        descriptor,
        callback.pointer,
        null,
      );
    } else if (callback instanceof Function) {
      const cb = new Deno.UnsafeCallback(
        C.CreateRenderPipelineAsyncCallbackDefinition,
        (
          ...args: UC.CbParam<C.CreateRenderPipelineAsyncCallbackDefinition>
        ) => {
          callback(...[
            args[0] as E.CreatePipelineAsyncStatus,
            new RenderPipeline(args[1], this),
            args[2],
            args[3],
          ]);
        },
      );
      lib.symbols.wgpuDeviceCreateRenderPipelineAsync(
        this.pointer,
        descriptor,
        cb.pointer,
        null,
      );
      return cb;
    } else {
      lib.symbols.wgpuDeviceCreateRenderPipelineAsync(
        this.pointer,
        descriptor,
        callback,
        null,
      );
    }
  }

  createSampler(descriptor: Deno.PointerValue): Sampler {
    const result = lib.symbols.wgpuDeviceCreateSampler(
      this.pointer,
      descriptor,
    );
    return new Sampler(result, this);
  }

  createShaderModule(descriptor: Deno.PointerValue): ShaderModule {
    const result = lib.symbols.wgpuDeviceCreateShaderModule(
      this.pointer,
      descriptor,
    );
    return new ShaderModule(result, this);
  }

  createSwapChain(surface: Surface, descriptor: Deno.PointerValue): SwapChain {
    const result = lib.symbols.wgpuDeviceCreateSwapChain(
      this.pointer,
      surface.pointer,
      descriptor,
    );
    return new SwapChain(result, this);
  }

  createTexture(descriptor: Deno.PointerValue): Texture {
    const result = lib.symbols.wgpuDeviceCreateTexture(
      this.pointer,
      descriptor,
    );
    return new Texture(result, this);
  }

  destroy(): void {
    const result = lib.symbols.wgpuDeviceDestroy(this.pointer);
    return result;
  }

  enumerateFeatures(features: Deno.PointerValue): number | bigint {
    const result = lib.symbols.wgpuDeviceEnumerateFeatures(
      this.pointer,
      features,
    );
    return result;
  }

  getLimits(limits: Deno.PointerValue): boolean {
    const result = lib.symbols.wgpuDeviceGetLimits(this.pointer, limits);
    return result == 1;
  }

  getQueue(): Queue {
    const result = lib.symbols.wgpuDeviceGetQueue(this.pointer);
    return new Queue(result, this);
  }

  hasFeature(feature: E.FeatureName): boolean {
    const result = lib.symbols.wgpuDeviceHasFeature(this.pointer, feature);
    return result == 1;
  }

  popErrorScope(): Promise<[E.ErrorType, Deno.PointerValue, Deno.PointerValue]>;
  popErrorScope(
    callback: (
      ...args: [E.ErrorType, Deno.PointerValue, Deno.PointerValue]
    ) => void,
  ): Deno.UnsafeCallback<C.ErrorCallbackDefinition>;
  popErrorScope(callback: Deno.UnsafeCallback<C.ErrorCallbackDefinition>): void;
  popErrorScope(callback: Deno.PointerValue): void;
  popErrorScope(
    callback?:
      | ((...args: [E.ErrorType, Deno.PointerValue, Deno.PointerValue]) => void)
      | Deno.UnsafeCallback<C.ErrorCallbackDefinition>
      | Deno.PointerValue,
  ):
    | void
    | Promise<[E.ErrorType, Deno.PointerValue, Deno.PointerValue]>
    | Deno.UnsafeCallback<C.ErrorCallbackDefinition> {
    if (callback == null) {
      return new Promise((res) => {
        const cb = new Deno.UnsafeCallback(
          C.ErrorCallbackDefinition,
          (...args: UC.CbParam<C.ErrorCallbackDefinition>) => {
            res(
              [args[0] as E.ErrorType, args[1], args[2]] as [
                E.ErrorType,
                Deno.PointerValue,
                Deno.PointerValue,
              ],
            );
          },
        );
        lib.symbols.wgpuDevicePopErrorScope(this.pointer, cb.pointer, null);
      });
    } else if (callback instanceof Deno.UnsafeCallback) {
      lib.symbols.wgpuDevicePopErrorScope(this.pointer, callback.pointer, null);
    } else if (callback instanceof Function) {
      const cb = new Deno.UnsafeCallback(
        C.ErrorCallbackDefinition,
        (...args: UC.CbParam<C.ErrorCallbackDefinition>) => {
          callback(...[args[0] as E.ErrorType, args[1], args[2]]);
        },
      );
      lib.symbols.wgpuDevicePopErrorScope(this.pointer, cb.pointer, null);
      return cb;
    } else {
      lib.symbols.wgpuDevicePopErrorScope(this.pointer, callback, null);
    }
  }

  pushErrorScope(filter: E.ErrorFilter): void {
    const result = lib.symbols.wgpuDevicePushErrorScope(this.pointer, filter);
    return result;
  }

  setLabel(label: Deno.PointerValue): void {
    const result = lib.symbols.wgpuDeviceSetLabel(this.pointer, label);
    return result;
  }

  setUncapturedErrorCallback(): Promise<
    [E.ErrorType, Deno.PointerValue, Deno.PointerValue]
  >;
  setUncapturedErrorCallback(
    callback: (
      ...args: [E.ErrorType, Deno.PointerValue, Deno.PointerValue]
    ) => void,
  ): Deno.UnsafeCallback<C.ErrorCallbackDefinition>;
  setUncapturedErrorCallback(
    callback: Deno.UnsafeCallback<C.ErrorCallbackDefinition>,
  ): void;
  setUncapturedErrorCallback(callback: Deno.PointerValue): void;
  setUncapturedErrorCallback(
    callback?:
      | ((...args: [E.ErrorType, Deno.PointerValue, Deno.PointerValue]) => void)
      | Deno.UnsafeCallback<C.ErrorCallbackDefinition>
      | Deno.PointerValue,
  ):
    | void
    | Promise<[E.ErrorType, Deno.PointerValue, Deno.PointerValue]>
    | Deno.UnsafeCallback<C.ErrorCallbackDefinition> {
    if (callback == null) {
      return new Promise((res) => {
        const cb = new Deno.UnsafeCallback(
          C.ErrorCallbackDefinition,
          (...args: UC.CbParam<C.ErrorCallbackDefinition>) => {
            res(
              [args[0] as E.ErrorType, args[1], args[2]] as [
                E.ErrorType,
                Deno.PointerValue,
                Deno.PointerValue,
              ],
            );
          },
        );
        lib.symbols.wgpuDeviceSetUncapturedErrorCallback(
          this.pointer,
          cb.pointer,
          null,
        );
      });
    } else if (callback instanceof Deno.UnsafeCallback) {
      lib.symbols.wgpuDeviceSetUncapturedErrorCallback(
        this.pointer,
        callback.pointer,
        null,
      );
    } else if (callback instanceof Function) {
      const cb = new Deno.UnsafeCallback(
        C.ErrorCallbackDefinition,
        (...args: UC.CbParam<C.ErrorCallbackDefinition>) => {
          callback(...[args[0] as E.ErrorType, args[1], args[2]]);
        },
      );
      lib.symbols.wgpuDeviceSetUncapturedErrorCallback(
        this.pointer,
        cb.pointer,
        null,
      );
      return cb;
    } else {
      lib.symbols.wgpuDeviceSetUncapturedErrorCallback(
        this.pointer,
        callback,
        null,
      );
    }
  }

  reference(): void {
    const result = lib.symbols.wgpuDeviceReference(this.pointer);
    return result;
  }

  release(): void {
    const result = lib.symbols.wgpuDeviceRelease(this.pointer);
    return result;
  }

  poll(wait: boolean, wrappedSubmissionIndex: Deno.PointerValue): boolean {
    const result = lib.symbols.wgpuDevicePoll(
      this.pointer,
      wait ? 1 : 0,
      wrappedSubmissionIndex,
    );
    return result == 1;
  }
}

export class Instance extends UC.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: UC.ClassBase) {
    super(pointer, parent);
  }

  createSurface(descriptor: Deno.PointerValue): Surface {
    const result = lib.symbols.wgpuInstanceCreateSurface(
      this.pointer,
      descriptor,
    );
    return new Surface(result, this);
  }

  processEvents(): void {
    const result = lib.symbols.wgpuInstanceProcessEvents(this.pointer);
    return result;
  }

  requestAdapter(
    options: Deno.PointerValue,
  ): Promise<
    [E.RequestAdapterStatus, Adapter, Deno.PointerValue, Deno.PointerValue]
  >;
  requestAdapter(
    options: Deno.PointerValue,
    callback: (
      ...args: [
        E.RequestAdapterStatus,
        Adapter,
        Deno.PointerValue,
        Deno.PointerValue,
      ]
    ) => void,
  ): Deno.UnsafeCallback<C.RequestAdapterCallbackDefinition>;
  requestAdapter(
    options: Deno.PointerValue,
    callback: Deno.UnsafeCallback<C.RequestAdapterCallbackDefinition>,
  ): void;
  requestAdapter(options: Deno.PointerValue, callback: Deno.PointerValue): void;
  requestAdapter(
    options: Deno.PointerValue,
    callback?:
      | ((
        ...args: [
          E.RequestAdapterStatus,
          Adapter,
          Deno.PointerValue,
          Deno.PointerValue,
        ]
      ) => void)
      | Deno.UnsafeCallback<C.RequestAdapterCallbackDefinition>
      | Deno.PointerValue,
  ):
    | void
    | Promise<
      [E.RequestAdapterStatus, Adapter, Deno.PointerValue, Deno.PointerValue]
    >
    | Deno.UnsafeCallback<C.RequestAdapterCallbackDefinition> {
    if (callback == null) {
      return new Promise((res) => {
        const cb = new Deno.UnsafeCallback(
          C.RequestAdapterCallbackDefinition,
          (...args: UC.CbParam<C.RequestAdapterCallbackDefinition>) => {
            res(
              [
                args[0] as E.RequestAdapterStatus,
                new Adapter(args[1], this),
                args[2],
                args[3],
              ] as [
                E.RequestAdapterStatus,
                Adapter,
                Deno.PointerValue,
                Deno.PointerValue,
              ],
            );
          },
        );
        lib.symbols.wgpuInstanceRequestAdapter(
          this.pointer,
          options,
          cb.pointer,
          null,
        );
      });
    } else if (callback instanceof Deno.UnsafeCallback) {
      lib.symbols.wgpuInstanceRequestAdapter(
        this.pointer,
        options,
        callback.pointer,
        null,
      );
    } else if (callback instanceof Function) {
      const cb = new Deno.UnsafeCallback(
        C.RequestAdapterCallbackDefinition,
        (...args: UC.CbParam<C.RequestAdapterCallbackDefinition>) => {
          callback(...[
            args[0] as E.RequestAdapterStatus,
            new Adapter(args[1], this),
            args[2],
            args[3],
          ]);
        },
      );
      lib.symbols.wgpuInstanceRequestAdapter(
        this.pointer,
        options,
        cb.pointer,
        null,
      );
      return cb;
    } else {
      lib.symbols.wgpuInstanceRequestAdapter(
        this.pointer,
        options,
        callback,
        null,
      );
    }
  }

  reference(): void {
    const result = lib.symbols.wgpuInstanceReference(this.pointer);
    return result;
  }

  release(): void {
    const result = lib.symbols.wgpuInstanceRelease(this.pointer);
    return result;
  }

  enumerateAdapters(
    options: Deno.PointerValue,
    adapters: Deno.PointerValue,
  ): number | bigint {
    const result = lib.symbols.wgpuInstanceEnumerateAdapters(
      this.pointer,
      options,
      adapters,
    );
    return result;
  }
}

export class PipelineLayout extends UC.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: UC.ClassBase) {
    super(pointer, parent);
  }

  setLabel(label: Deno.PointerValue): void {
    const result = lib.symbols.wgpuPipelineLayoutSetLabel(this.pointer, label);
    return result;
  }

  reference(): void {
    const result = lib.symbols.wgpuPipelineLayoutReference(this.pointer);
    return result;
  }

  release(): void {
    const result = lib.symbols.wgpuPipelineLayoutRelease(this.pointer);
    return result;
  }
}

export class QuerySet extends UC.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: UC.ClassBase) {
    super(pointer, parent);
  }

  destroy(): void {
    const result = lib.symbols.wgpuQuerySetDestroy(this.pointer);
    return result;
  }

  getCount(): number {
    const result = lib.symbols.wgpuQuerySetGetCount(this.pointer);
    return result;
  }

  getType(): E.QueryType {
    const result = lib.symbols.wgpuQuerySetGetType(this.pointer);
    return result as E.QueryType;
  }

  setLabel(label: Deno.PointerValue): void {
    const result = lib.symbols.wgpuQuerySetSetLabel(this.pointer, label);
    return result;
  }

  reference(): void {
    const result = lib.symbols.wgpuQuerySetReference(this.pointer);
    return result;
  }

  release(): void {
    const result = lib.symbols.wgpuQuerySetRelease(this.pointer);
    return result;
  }
}

export class Queue extends UC.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: UC.ClassBase) {
    super(pointer, parent);
  }
  onSubmittedWorkDone(): Promise<[E.QueueWorkDoneStatus, Deno.PointerValue]>;
  onSubmittedWorkDone(
    callback: (...args: [E.QueueWorkDoneStatus, Deno.PointerValue]) => void,
  ): Deno.UnsafeCallback<C.QueueWorkDoneCallbackDefinition>;
  onSubmittedWorkDone(
    callback: Deno.UnsafeCallback<C.QueueWorkDoneCallbackDefinition>,
  ): void;
  onSubmittedWorkDone(callback: Deno.PointerValue): void;
  onSubmittedWorkDone(
    callback?:
      | ((...args: [E.QueueWorkDoneStatus, Deno.PointerValue]) => void)
      | Deno.UnsafeCallback<C.QueueWorkDoneCallbackDefinition>
      | Deno.PointerValue,
  ):
    | void
    | Promise<[E.QueueWorkDoneStatus, Deno.PointerValue]>
    | Deno.UnsafeCallback<C.QueueWorkDoneCallbackDefinition> {
    if (callback == null) {
      return new Promise((res) => {
        const cb = new Deno.UnsafeCallback(
          C.QueueWorkDoneCallbackDefinition,
          (...args: UC.CbParam<C.QueueWorkDoneCallbackDefinition>) => {
            res(
              [args[0] as E.QueueWorkDoneStatus, args[1]] as [
                E.QueueWorkDoneStatus,
                Deno.PointerValue,
              ],
            );
          },
        );
        lib.symbols.wgpuQueueOnSubmittedWorkDone(
          this.pointer,
          cb.pointer,
          null,
        );
      });
    } else if (callback instanceof Deno.UnsafeCallback) {
      lib.symbols.wgpuQueueOnSubmittedWorkDone(
        this.pointer,
        callback.pointer,
        null,
      );
    } else if (callback instanceof Function) {
      const cb = new Deno.UnsafeCallback(
        C.QueueWorkDoneCallbackDefinition,
        (...args: UC.CbParam<C.QueueWorkDoneCallbackDefinition>) => {
          callback(...[args[0] as E.QueueWorkDoneStatus, args[1]]);
        },
      );
      lib.symbols.wgpuQueueOnSubmittedWorkDone(this.pointer, cb.pointer, null);
      return cb;
    } else {
      lib.symbols.wgpuQueueOnSubmittedWorkDone(this.pointer, callback, null);
    }
  }

  setLabel(label: Deno.PointerValue): void {
    const result = lib.symbols.wgpuQueueSetLabel(this.pointer, label);
    return result;
  }

  submit(commandCount: number | bigint, commands: Deno.PointerValue): void {
    const result = lib.symbols.wgpuQueueSubmit(
      this.pointer,
      commandCount,
      commands,
    );
    return result;
  }

  writeBuffer(
    buffer: Buffer,
    bufferOffset: number | bigint,
    data: Deno.PointerValue,
    size: number | bigint,
  ): void {
    const result = lib.symbols.wgpuQueueWriteBuffer(
      this.pointer,
      buffer.pointer,
      bufferOffset,
      data,
      size,
    );
    return result;
  }

  writeTexture(
    destination: Deno.PointerValue,
    data: Deno.PointerValue,
    dataSize: number | bigint,
    dataLayout: Deno.PointerValue,
    writeSize: Deno.PointerValue,
  ): void {
    const result = lib.symbols.wgpuQueueWriteTexture(
      this.pointer,
      destination,
      data,
      dataSize,
      dataLayout,
      writeSize,
    );
    return result;
  }

  reference(): void {
    const result = lib.symbols.wgpuQueueReference(this.pointer);
    return result;
  }

  release(): void {
    const result = lib.symbols.wgpuQueueRelease(this.pointer);
    return result;
  }

  submitForIndex(
    commandCount: number | bigint,
    commands: Deno.PointerValue,
  ): number | bigint {
    const result = lib.symbols.wgpuQueueSubmitForIndex(
      this.pointer,
      commandCount,
      commands,
    );
    return result;
  }
}

export class RenderBundle extends UC.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: UC.ClassBase) {
    super(pointer, parent);
  }

  setLabel(label: Deno.PointerValue): void {
    const result = lib.symbols.wgpuRenderBundleSetLabel(this.pointer, label);
    return result;
  }

  reference(): void {
    const result = lib.symbols.wgpuRenderBundleReference(this.pointer);
    return result;
  }

  release(): void {
    const result = lib.symbols.wgpuRenderBundleRelease(this.pointer);
    return result;
  }
}

export class RenderBundleEncoder extends UC.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: UC.ClassBase) {
    super(pointer, parent);
  }

  draw(
    vertexCount: number,
    instanceCount: number,
    firstVertex: number,
    firstInstance: number,
  ): void {
    const result = lib.symbols.wgpuRenderBundleEncoderDraw(
      this.pointer,
      vertexCount,
      instanceCount,
      firstVertex,
      firstInstance,
    );
    return result;
  }

  drawIndexed(
    indexCount: number,
    instanceCount: number,
    firstIndex: number,
    baseVertex: number,
    firstInstance: number,
  ): void {
    const result = lib.symbols.wgpuRenderBundleEncoderDrawIndexed(
      this.pointer,
      indexCount,
      instanceCount,
      firstIndex,
      baseVertex,
      firstInstance,
    );
    return result;
  }

  drawIndexedIndirect(
    indirectBuffer: Buffer,
    indirectOffset: number | bigint,
  ): void {
    const result = lib.symbols.wgpuRenderBundleEncoderDrawIndexedIndirect(
      this.pointer,
      indirectBuffer.pointer,
      indirectOffset,
    );
    return result;
  }

  drawIndirect(indirectBuffer: Buffer, indirectOffset: number | bigint): void {
    const result = lib.symbols.wgpuRenderBundleEncoderDrawIndirect(
      this.pointer,
      indirectBuffer.pointer,
      indirectOffset,
    );
    return result;
  }

  finish(descriptor: Deno.PointerValue): RenderBundle {
    const result = lib.symbols.wgpuRenderBundleEncoderFinish(
      this.pointer,
      descriptor,
    );
    return new RenderBundle(result, this);
  }

  insertDebugMarker(markerLabel: Deno.PointerValue): void {
    const result = lib.symbols.wgpuRenderBundleEncoderInsertDebugMarker(
      this.pointer,
      markerLabel,
    );
    return result;
  }

  popDebugGroup(): void {
    const result = lib.symbols.wgpuRenderBundleEncoderPopDebugGroup(
      this.pointer,
    );
    return result;
  }

  pushDebugGroup(groupLabel: Deno.PointerValue): void {
    const result = lib.symbols.wgpuRenderBundleEncoderPushDebugGroup(
      this.pointer,
      groupLabel,
    );
    return result;
  }

  setBindGroup(
    groupIndex: number,
    group: BindGroup,
    dynamicOffsetCount: number | bigint,
    dynamicOffsets: Deno.PointerValue,
  ): void {
    const result = lib.symbols.wgpuRenderBundleEncoderSetBindGroup(
      this.pointer,
      groupIndex,
      group.pointer,
      dynamicOffsetCount,
      dynamicOffsets,
    );
    return result;
  }

  setIndexBuffer(
    buffer: Buffer,
    format: E.IndexFormat,
    offset: number | bigint,
    size: number | bigint,
  ): void {
    const result = lib.symbols.wgpuRenderBundleEncoderSetIndexBuffer(
      this.pointer,
      buffer.pointer,
      format,
      offset,
      size,
    );
    return result;
  }

  setLabel(label: Deno.PointerValue): void {
    const result = lib.symbols.wgpuRenderBundleEncoderSetLabel(
      this.pointer,
      label,
    );
    return result;
  }

  setPipeline(pipeline: RenderPipeline): void {
    const result = lib.symbols.wgpuRenderBundleEncoderSetPipeline(
      this.pointer,
      pipeline.pointer,
    );
    return result;
  }

  setVertexBuffer(
    slot: number,
    buffer: Buffer,
    offset: number | bigint,
    size: number | bigint,
  ): void {
    const result = lib.symbols.wgpuRenderBundleEncoderSetVertexBuffer(
      this.pointer,
      slot,
      buffer.pointer,
      offset,
      size,
    );
    return result;
  }

  reference(): void {
    const result = lib.symbols.wgpuRenderBundleEncoderReference(this.pointer);
    return result;
  }

  release(): void {
    const result = lib.symbols.wgpuRenderBundleEncoderRelease(this.pointer);
    return result;
  }
}

export class RenderPassEncoder extends UC.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: UC.ClassBase) {
    super(pointer, parent);
  }

  beginOcclusionQuery(queryIndex: number): void {
    const result = lib.symbols.wgpuRenderPassEncoderBeginOcclusionQuery(
      this.pointer,
      queryIndex,
    );
    return result;
  }

  beginPipelineStatisticsQuery(querySet: QuerySet, queryIndex: number): void {
    const result = lib.symbols
      .wgpuRenderPassEncoderBeginPipelineStatisticsQuery(
        this.pointer,
        querySet.pointer,
        queryIndex,
      );
    return result;
  }

  draw(
    vertexCount: number,
    instanceCount: number,
    firstVertex: number,
    firstInstance: number,
  ): void {
    const result = lib.symbols.wgpuRenderPassEncoderDraw(
      this.pointer,
      vertexCount,
      instanceCount,
      firstVertex,
      firstInstance,
    );
    return result;
  }

  drawIndexed(
    indexCount: number,
    instanceCount: number,
    firstIndex: number,
    baseVertex: number,
    firstInstance: number,
  ): void {
    const result = lib.symbols.wgpuRenderPassEncoderDrawIndexed(
      this.pointer,
      indexCount,
      instanceCount,
      firstIndex,
      baseVertex,
      firstInstance,
    );
    return result;
  }

  drawIndexedIndirect(
    indirectBuffer: Buffer,
    indirectOffset: number | bigint,
  ): void {
    const result = lib.symbols.wgpuRenderPassEncoderDrawIndexedIndirect(
      this.pointer,
      indirectBuffer.pointer,
      indirectOffset,
    );
    return result;
  }

  drawIndirect(indirectBuffer: Buffer, indirectOffset: number | bigint): void {
    const result = lib.symbols.wgpuRenderPassEncoderDrawIndirect(
      this.pointer,
      indirectBuffer.pointer,
      indirectOffset,
    );
    return result;
  }

  end(): void {
    const result = lib.symbols.wgpuRenderPassEncoderEnd(this.pointer);
    return result;
  }

  endOcclusionQuery(): void {
    const result = lib.symbols.wgpuRenderPassEncoderEndOcclusionQuery(
      this.pointer,
    );
    return result;
  }

  endPipelineStatisticsQuery(): void {
    const result = lib.symbols.wgpuRenderPassEncoderEndPipelineStatisticsQuery(
      this.pointer,
    );
    return result;
  }

  executeBundles(
    bundleCount: number | bigint,
    bundles: Deno.PointerValue,
  ): void {
    const result = lib.symbols.wgpuRenderPassEncoderExecuteBundles(
      this.pointer,
      bundleCount,
      bundles,
    );
    return result;
  }

  insertDebugMarker(markerLabel: Deno.PointerValue): void {
    const result = lib.symbols.wgpuRenderPassEncoderInsertDebugMarker(
      this.pointer,
      markerLabel,
    );
    return result;
  }

  popDebugGroup(): void {
    const result = lib.symbols.wgpuRenderPassEncoderPopDebugGroup(this.pointer);
    return result;
  }

  pushDebugGroup(groupLabel: Deno.PointerValue): void {
    const result = lib.symbols.wgpuRenderPassEncoderPushDebugGroup(
      this.pointer,
      groupLabel,
    );
    return result;
  }

  setBindGroup(
    groupIndex: number,
    group: BindGroup,
    dynamicOffsetCount: number | bigint,
    dynamicOffsets: Deno.PointerValue,
  ): void {
    const result = lib.symbols.wgpuRenderPassEncoderSetBindGroup(
      this.pointer,
      groupIndex,
      group.pointer,
      dynamicOffsetCount,
      dynamicOffsets,
    );
    return result;
  }

  setBlendConstant(color: Deno.PointerValue): void {
    const result = lib.symbols.wgpuRenderPassEncoderSetBlendConstant(
      this.pointer,
      color,
    );
    return result;
  }

  setIndexBuffer(
    buffer: Buffer,
    format: E.IndexFormat,
    offset: number | bigint,
    size: number | bigint,
  ): void {
    const result = lib.symbols.wgpuRenderPassEncoderSetIndexBuffer(
      this.pointer,
      buffer.pointer,
      format,
      offset,
      size,
    );
    return result;
  }

  setLabel(label: Deno.PointerValue): void {
    const result = lib.symbols.wgpuRenderPassEncoderSetLabel(
      this.pointer,
      label,
    );
    return result;
  }

  setPipeline(pipeline: RenderPipeline): void {
    const result = lib.symbols.wgpuRenderPassEncoderSetPipeline(
      this.pointer,
      pipeline.pointer,
    );
    return result;
  }

  setScissorRect(x: number, y: number, width: number, height: number): void {
    const result = lib.symbols.wgpuRenderPassEncoderSetScissorRect(
      this.pointer,
      x,
      y,
      width,
      height,
    );
    return result;
  }

  setStencilReference(reference: number): void {
    const result = lib.symbols.wgpuRenderPassEncoderSetStencilReference(
      this.pointer,
      reference,
    );
    return result;
  }

  setVertexBuffer(
    slot: number,
    buffer: Buffer,
    offset: number | bigint,
    size: number | bigint,
  ): void {
    const result = lib.symbols.wgpuRenderPassEncoderSetVertexBuffer(
      this.pointer,
      slot,
      buffer.pointer,
      offset,
      size,
    );
    return result;
  }

  setViewport(
    x: number,
    y: number,
    width: number,
    height: number,
    minDepth: number,
    maxDepth: number,
  ): void {
    const result = lib.symbols.wgpuRenderPassEncoderSetViewport(
      this.pointer,
      x,
      y,
      width,
      height,
      minDepth,
      maxDepth,
    );
    return result;
  }

  reference(): void {
    const result = lib.symbols.wgpuRenderPassEncoderReference(this.pointer);
    return result;
  }

  release(): void {
    const result = lib.symbols.wgpuRenderPassEncoderRelease(this.pointer);
    return result;
  }

  setPushConstants(
    stages: number,
    offset: number,
    sizeBytes: number,
    data: Deno.PointerValue,
  ): void {
    const result = lib.symbols.wgpuRenderPassEncoderSetPushConstants(
      this.pointer,
      stages,
      offset,
      sizeBytes,
      data,
    );
    return result;
  }

  multiDrawIndirect(
    buffer: Buffer,
    offset: number | bigint,
    count: number,
  ): void {
    const result = lib.symbols.wgpuRenderPassEncoderMultiDrawIndirect(
      this.pointer,
      buffer.pointer,
      offset,
      count,
    );
    return result;
  }

  multiDrawIndexedIndirect(
    buffer: Buffer,
    offset: number | bigint,
    count: number,
  ): void {
    const result = lib.symbols.wgpuRenderPassEncoderMultiDrawIndexedIndirect(
      this.pointer,
      buffer.pointer,
      offset,
      count,
    );
    return result;
  }

  multiDrawIndirectCount(
    buffer: Buffer,
    offset: number | bigint,
    count_buffer: Buffer,
    count_buffer_offset: number | bigint,
    max_count: number,
  ): void {
    const result = lib.symbols.wgpuRenderPassEncoderMultiDrawIndirectCount(
      this.pointer,
      buffer.pointer,
      offset,
      count_buffer.pointer,
      count_buffer_offset,
      max_count,
    );
    return result;
  }

  multiDrawIndexedIndirectCount(
    buffer: Buffer,
    offset: number | bigint,
    count_buffer: Buffer,
    count_buffer_offset: number | bigint,
    max_count: number,
  ): void {
    const result = lib.symbols
      .wgpuRenderPassEncoderMultiDrawIndexedIndirectCount(
        this.pointer,
        buffer.pointer,
        offset,
        count_buffer.pointer,
        count_buffer_offset,
        max_count,
      );
    return result;
  }
}

export class RenderPipeline extends UC.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: UC.ClassBase) {
    super(pointer, parent);
  }

  getBindGroupLayout(groupIndex: number): BindGroupLayout {
    const result = lib.symbols.wgpuRenderPipelineGetBindGroupLayout(
      this.pointer,
      groupIndex,
    );
    return new BindGroupLayout(result, this);
  }

  setLabel(label: Deno.PointerValue): void {
    const result = lib.symbols.wgpuRenderPipelineSetLabel(this.pointer, label);
    return result;
  }

  reference(): void {
    const result = lib.symbols.wgpuRenderPipelineReference(this.pointer);
    return result;
  }

  release(): void {
    const result = lib.symbols.wgpuRenderPipelineRelease(this.pointer);
    return result;
  }
}

export class Sampler extends UC.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: UC.ClassBase) {
    super(pointer, parent);
  }

  setLabel(label: Deno.PointerValue): void {
    const result = lib.symbols.wgpuSamplerSetLabel(this.pointer, label);
    return result;
  }

  reference(): void {
    const result = lib.symbols.wgpuSamplerReference(this.pointer);
    return result;
  }

  release(): void {
    const result = lib.symbols.wgpuSamplerRelease(this.pointer);
    return result;
  }
}

export class ShaderModule extends UC.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: UC.ClassBase) {
    super(pointer, parent);
  }
  getCompilationInfo(): Promise<
    [E.CompilationInfoRequestStatus, Deno.PointerValue, Deno.PointerValue]
  >;
  getCompilationInfo(
    callback: (
      ...args: [
        E.CompilationInfoRequestStatus,
        Deno.PointerValue,
        Deno.PointerValue,
      ]
    ) => void,
  ): Deno.UnsafeCallback<C.CompilationInfoCallbackDefinition>;
  getCompilationInfo(
    callback: Deno.UnsafeCallback<C.CompilationInfoCallbackDefinition>,
  ): void;
  getCompilationInfo(callback: Deno.PointerValue): void;
  getCompilationInfo(
    callback?:
      | ((
        ...args: [
          E.CompilationInfoRequestStatus,
          Deno.PointerValue,
          Deno.PointerValue,
        ]
      ) => void)
      | Deno.UnsafeCallback<C.CompilationInfoCallbackDefinition>
      | Deno.PointerValue,
  ):
    | void
    | Promise<
      [E.CompilationInfoRequestStatus, Deno.PointerValue, Deno.PointerValue]
    >
    | Deno.UnsafeCallback<C.CompilationInfoCallbackDefinition> {
    if (callback == null) {
      return new Promise((res) => {
        const cb = new Deno.UnsafeCallback(
          C.CompilationInfoCallbackDefinition,
          (...args: UC.CbParam<C.CompilationInfoCallbackDefinition>) => {
            res(
              [args[0] as E.CompilationInfoRequestStatus, args[1], args[2]] as [
                E.CompilationInfoRequestStatus,
                Deno.PointerValue,
                Deno.PointerValue,
              ],
            );
          },
        );
        lib.symbols.wgpuShaderModuleGetCompilationInfo(
          this.pointer,
          cb.pointer,
          null,
        );
      });
    } else if (callback instanceof Deno.UnsafeCallback) {
      lib.symbols.wgpuShaderModuleGetCompilationInfo(
        this.pointer,
        callback.pointer,
        null,
      );
    } else if (callback instanceof Function) {
      const cb = new Deno.UnsafeCallback(
        C.CompilationInfoCallbackDefinition,
        (...args: UC.CbParam<C.CompilationInfoCallbackDefinition>) => {
          callback(...[
            args[0] as E.CompilationInfoRequestStatus,
            args[1],
            args[2],
          ]);
        },
      );
      lib.symbols.wgpuShaderModuleGetCompilationInfo(
        this.pointer,
        cb.pointer,
        null,
      );
      return cb;
    } else {
      lib.symbols.wgpuShaderModuleGetCompilationInfo(
        this.pointer,
        callback,
        null,
      );
    }
  }

  setLabel(label: Deno.PointerValue): void {
    const result = lib.symbols.wgpuShaderModuleSetLabel(this.pointer, label);
    return result;
  }

  reference(): void {
    const result = lib.symbols.wgpuShaderModuleReference(this.pointer);
    return result;
  }

  release(): void {
    const result = lib.symbols.wgpuShaderModuleRelease(this.pointer);
    return result;
  }
}

export class Surface extends UC.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: UC.ClassBase) {
    super(pointer, parent);
  }

  getPreferredFormat(adapter: Adapter): E.TextureFormat {
    const result = lib.symbols.wgpuSurfaceGetPreferredFormat(
      this.pointer,
      adapter.pointer,
    );
    return result as E.TextureFormat;
  }

  reference(): void {
    const result = lib.symbols.wgpuSurfaceReference(this.pointer);
    return result;
  }

  release(): void {
    const result = lib.symbols.wgpuSurfaceRelease(this.pointer);
    return result;
  }

  getCapabilities(adapter: Adapter, capabilities: Deno.PointerValue): void {
    const result = lib.symbols.wgpuSurfaceGetCapabilities(
      this.pointer,
      adapter.pointer,
      capabilities,
    );
    return result;
  }
}

export class SwapChain extends UC.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: UC.ClassBase) {
    super(pointer, parent);
  }

  getCurrentTextureView(): TextureView {
    const result = lib.symbols.wgpuSwapChainGetCurrentTextureView(this.pointer);
    return new TextureView(result, this);
  }

  present(): void {
    const result = lib.symbols.wgpuSwapChainPresent(this.pointer);
    return result;
  }

  reference(): void {
    const result = lib.symbols.wgpuSwapChainReference(this.pointer);
    return result;
  }

  release(): void {
    const result = lib.symbols.wgpuSwapChainRelease(this.pointer);
    return result;
  }
}

export class Texture extends UC.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: UC.ClassBase) {
    super(pointer, parent);
  }

  createView(descriptor: Deno.PointerValue): TextureView {
    const result = lib.symbols.wgpuTextureCreateView(this.pointer, descriptor);
    return new TextureView(result, this);
  }

  destroy(): void {
    const result = lib.symbols.wgpuTextureDestroy(this.pointer);
    return result;
  }

  getDepthOrArrayLayers(): number {
    const result = lib.symbols.wgpuTextureGetDepthOrArrayLayers(this.pointer);
    return result;
  }

  getDimension(): E.TextureDimension {
    const result = lib.symbols.wgpuTextureGetDimension(this.pointer);
    return result as E.TextureDimension;
  }

  getFormat(): E.TextureFormat {
    const result = lib.symbols.wgpuTextureGetFormat(this.pointer);
    return result as E.TextureFormat;
  }

  getHeight(): number {
    const result = lib.symbols.wgpuTextureGetHeight(this.pointer);
    return result;
  }

  getMipLevelCount(): number {
    const result = lib.symbols.wgpuTextureGetMipLevelCount(this.pointer);
    return result;
  }

  getSampleCount(): number {
    const result = lib.symbols.wgpuTextureGetSampleCount(this.pointer);
    return result;
  }

  getUsage(): number {
    const result = lib.symbols.wgpuTextureGetUsage(this.pointer);
    return result;
  }

  getWidth(): number {
    const result = lib.symbols.wgpuTextureGetWidth(this.pointer);
    return result;
  }

  setLabel(label: Deno.PointerValue): void {
    const result = lib.symbols.wgpuTextureSetLabel(this.pointer, label);
    return result;
  }

  reference(): void {
    const result = lib.symbols.wgpuTextureReference(this.pointer);
    return result;
  }

  release(): void {
    const result = lib.symbols.wgpuTextureRelease(this.pointer);
    return result;
  }
}

export class TextureView extends UC.ClassBase {
  constructor(pointer: Deno.PointerValue, parent?: UC.ClassBase) {
    super(pointer, parent);
  }

  setLabel(label: Deno.PointerValue): void {
    const result = lib.symbols.wgpuTextureViewSetLabel(this.pointer, label);
    return result;
  }

  reference(): void {
    const result = lib.symbols.wgpuTextureViewReference(this.pointer);
    return result;
  }

  release(): void {
    const result = lib.symbols.wgpuTextureViewRelease(this.pointer);
    return result;
  }
}
