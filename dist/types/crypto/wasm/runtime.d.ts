/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace wasmRuntime {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {WasmRuntimeAPI} */
    function factory(): WasmRuntimeAPI;
}
/**
 * Handle returned by {@link WasmRuntimeAPI.load} on success.
 */
export type WasmLoaded = {
    instance: WebAssembly.Instance;
    /**
     * the module's exported linear memory
     */
    memory: WebAssembly.Memory;
    /**
     * alias of `memory`
     */
    mem: WebAssembly.Memory;
    alloc: (size: number) => number;
    free: (ptr: number) => void;
    /**
     * all exports (incl. algo fns)
     */
    exports: Record<string, Function>;
    /**
     * which variant was instantiated
     */
    variant: "simd" | "scalar";
};
/**
 * A `{ ptr, len, free }` triple describing a buffer copied into linear memory.
 */
export type WasmBuf = {
    /**
     * pointer into the handle's `memory`
     */
    ptr: number;
    /**
     * byte length written
     */
    len: number;
    /**
     * releases `ptr` via the handle's `free` export
     */
    free: () => void;
};
/**
 * Per-call load options.
 */
export type WasmLoadOptions = {
    /**
     * force a variant; default = runtime selection
     */
    variant?: "simd" | "scalar";
    /**
     * injectable byte source (test seam); default fetches the colocated
     * `<wasmModule>.<variant>.wasm` relative to this module.
     */
    fetchBytes?: (wasmModule: string, variant: string) => Promise<Uint8Array>;
};
/**
 * Public surface of `wasmRuntime.factory()`.
 */
export type WasmRuntimeAPI = {
    /**
     * Whether `WebAssembly` is present.
     */
    isAvailable: () => boolean;
    /**
     * Whether the host validates simd128.
     */
    hasSimd: () => Promise<boolean>;
    /**
     *   Load a colocated module BY NAME; resolves a handle or `false`.
     */
    load: (wasmModule: string, expectedExports?: string[], opts?: WasmLoadOptions) => Promise<WasmLoaded | false>;
    /**
     *   Copy `input` into linear memory; returns ptr/len + a `free()` thunk.
     */
    withBytes: (loaded: WasmLoaded, input: Uint8Array) => WasmBuf;
    /**
     *   Copy `len` bytes OUT of linear memory at `ptr` into a fresh `Uint8Array`.
     */
    readBytes: (loaded: WasmLoaded, ptr: number, len: number) => Uint8Array;
    /**
     *   Call an export and return its `i32` status. A throw propagates to the
     *   caller's try/catch (the per-algo wrapper's no-throw boundary).
     */
    run: (loaded: WasmLoaded, fnName: string, args: number[]) => number;
};
//# sourceMappingURL=runtime.d.ts.map