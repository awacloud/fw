/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace wasmRsa {
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
     * @param {import('./runtime.js').wasmRuntime} wasmRuntime  the fw WASM adapter.
     * @returns {WasmRsaAPI}
     */
    function factory(wasmRuntime: any): WasmRsaAPI;
}
/**
 * Public surface of `wasmRsa.factory()`.
 */
export type WasmRsaAPI = {
    /**
     * Whether `WebAssembly` is present.
     */
    isAvailable: () => boolean;
    /**
     *   Generate an RSA key pair (BearSSL wire format), or `false`.
     */
    generateKey: (scheme: ("OAEP" | "PSS" | "PKCS1"), modulusBits?: (2048 | 3072 | 4096), hash?: (256 | 384 | 512)) => Promise<{
        publicKey: Uint8Array;
        privateKey: Uint8Array;
    } | false>;
    /**
     *   RSA-OAEP encrypt (OAEP only), or `false`.
     */
    encrypt: (publicKey: Uint8Array, data: Uint8Array, label?: Uint8Array, hash?: (256 | 384 | 512)) => Promise<Uint8Array | false>;
    /**
     *   RSA-OAEP decrypt (OAEP only), or `false`.
     */
    decrypt: (privateKey: Uint8Array, ct: Uint8Array, label?: Uint8Array, hash?: (256 | 384 | 512)) => Promise<Uint8Array | false>;
    /**
     *   RSA-PSS / RSASSA-PKCS1-v1_5 sign (PKCS1 warns DEPRECATED), or `false`.
     */
    sign: (privateKey: Uint8Array, data: Uint8Array, scheme: ("PSS" | "PKCS1"), hash?: (256 | 384 | 512)) => Promise<Uint8Array | false>;
    /**
     *   RSA-PSS / RSASSA-PKCS1-v1_5 verify; `true` iff valid.
     */
    verify: (publicKey: Uint8Array, signature: Uint8Array, data: Uint8Array, scheme: ("PSS" | "PKCS1"), hash?: (256 | 384 | 512)) => Promise<boolean>;
};
//# sourceMappingURL=rsa.d.ts.map