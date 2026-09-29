/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace wasmHkdf {
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
     * @returns {WasmHkdfAPI}
     */
    function factory(wasmRuntime: import("./runtime.js").WasmRuntimeAPI): WasmHkdfAPI;
}
/**
 * Public surface of `wasmHkdf.factory()`.
 */
export type WasmHkdfAPI = {
    /**
     * Whether `WebAssembly` is present.
     */
    isAvailable: () => boolean;
    /**
     *   Derive `dkLen` bytes of output keying material (combined extract+expand,
     *   RFC 5869). `hash` defaults to `256`. Empty `salt`/`info` are allowed.
     *   Returns `false` if WebAssembly is unavailable, the binary fails to load,
     *   or any argument is invalid.
     */
    deriveBits: (ikm: Uint8Array, salt: Uint8Array, info: Uint8Array, dkLen: number, hash?: 256 | 384 | 512) => Promise<Uint8Array | false>;
};
//# sourceMappingURL=hkdf.d.ts.map