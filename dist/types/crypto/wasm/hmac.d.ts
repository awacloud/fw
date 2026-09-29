/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace wasmHmac {
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
     * @returns {WasmHmacAPI}
     */
    function factory(wasmRuntime: import("./runtime.js").WasmRuntimeAPI): WasmHmacAPI;
}
/**
 * Public surface of `wasmHmac.factory()`.
 */
export type WasmHmacAPI = {
    /**
     * Whether `WebAssembly` is present.
     */
    isAvailable: () => boolean;
    /**
     *   Compute the HMAC tag. Returns a `Uint8Array` (32/48/64 bytes) or `false`
     *   on invalid params, load failure, or WASM error.
     */
    mac: (key: Uint8Array, data: Uint8Array, hash?: 256 | 384 | 512) => Promise<Uint8Array | false>;
    /**
     *   Recompute the HMAC tag and compare with `tag` in constant time.
     */
    verify: (key: Uint8Array, tag: Uint8Array, data: Uint8Array, hash?: 256 | 384 | 512) => Promise<boolean>;
};
//# sourceMappingURL=hmac.d.ts.map