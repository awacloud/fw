/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace wasmEcc {
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
     * @param {import('./runtime.js').WasmRuntimeAPI} wasmRuntime  the fw WASM adapter.
     * @returns {WasmEccAPI}
     */
    function factory(wasmRuntime: import("./runtime.js").WasmRuntimeAPI): WasmEccAPI;
}
/**
 * Supported NIST prime curve names.
 */
export type WasmEccCurve = ("P-256" | "P-384" | "P-521");
/**
 * Public surface of `wasmEcc.factory()`.
 */
export type WasmEccAPI = {
    /**
     * Whether `WebAssembly` is present.
     */
    isAvailable: () => boolean;
    /**
     *   Fresh random key pair — SEC1 uncompressed `publicKey` + raw scalar `privateKey`.
     */
    generateKey: (curve?: WasmEccCurve) => Promise<{
        publicKey: Uint8Array;
        privateKey: Uint8Array;
    } | false>;
    /**
     *   Deterministic (RFC 6979) ECDSA — raw `r||s` signature.
     */
    sign: (privateKey: Uint8Array, data: Uint8Array, curve?: WasmEccCurve, hash?: (256 | 384 | 512)) => Promise<Uint8Array | false>;
    /**
     *   ECDSA verify — `false` on any failure (no-throw).
     */
    verify: (publicKey: Uint8Array, signature: Uint8Array, data: Uint8Array, curve?: WasmEccCurve, hash?: (256 | 384 | 512)) => Promise<boolean>;
    /**
     *   ECDH shared X-coordinate `Z` (raw, no KDF).
     */
    deriveBits: (privateKey: Uint8Array, publicKey: Uint8Array, curve?: WasmEccCurve) => Promise<Uint8Array | false>;
};
//# sourceMappingURL=ecc.d.ts.map