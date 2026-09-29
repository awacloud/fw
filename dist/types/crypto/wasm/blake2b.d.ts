/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace wasmBlake2b {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): WasmRuntimeAPI;
    }[];
    /**
     * @param {import('./runtime.js').WasmRuntimeAPI} wasmRuntime
     * @returns {WasmBlake2bAPI}
     */
    function factory(wasmRuntime: import("./runtime.js").WasmRuntimeAPI): WasmBlake2bAPI;
}
/**
 * Options for {@link WasmBlake2bAPI.hash}.
 */
export type WasmBlake2bOpts = {
    /**
     * Output digest length in bytes [1..64].
     */
    outLen?: number;
    /**
     * Optional key for keyed/MAC mode (0..64 bytes).
     */
    key?: Uint8Array;
    /**
     * Optional 16-byte salt (BLAKE2 param block).
     */
    salt?: Uint8Array;
    /**
     * Optional 16-byte personalisation string.
     */
    personal?: Uint8Array;
};
/**
 * Public surface of `wasmBlake2b.factory()`.
 */
export type WasmBlake2bAPI = {
    /**
     *   Whether `WebAssembly` is present in this environment.
     */
    isAvailable: () => boolean;
    /**
     *   BLAKE2b digest. Resolves `false` on bad params or a WASM failure; never
     *   rejects.
     */
    hash: (data: Uint8Array, opts?: WasmBlake2bOpts) => Promise<Uint8Array | false>;
};
//# sourceMappingURL=blake2b.d.ts.map