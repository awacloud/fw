/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace wasmAes {
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
     * @returns {WasmAesAPI}
     */
    function factory(wasmRuntime: import("./runtime.js").WasmRuntimeAPI): WasmAesAPI;
}
/**
 * Public surface of `wasmAes.factory()`. All methods are async, operate over
 * `Uint8Array`, and resolve `false` (never throw) on invalid params, load
 * failure, WASM error, or — for `decryptGcm` — authentication failure.
 */
export type WasmAesAPI = {
    /**
     * Whether `WebAssembly` is present.
     */
    isAvailable: () => boolean;
    /**
     *   AES-GCM seal. `iv` is 12 bytes; output is `ciphertext ‖ tag(16)`.
     */
    encryptGcm: (key: Uint8Array, iv: Uint8Array, plaintext: Uint8Array, aad?: Uint8Array) => Promise<Uint8Array | false>;
    /**
     *   AES-GCM open. `ctWithTag` is `ciphertext ‖ tag(16)`; auth failure → `false`.
     */
    decryptGcm: (key: Uint8Array, iv: Uint8Array, ctWithTag: Uint8Array, aad?: Uint8Array) => Promise<Uint8Array | false>;
    /**
     *   AES-CBC with PKCS#7 padding. `iv` is 16 bytes.
     */
    encryptCbc: (key: Uint8Array, iv: Uint8Array, plaintext: Uint8Array) => Promise<Uint8Array | false>;
    /**
     *   AES-CBC; strips PKCS#7. Invalid padding → `false`. `iv` is 16 bytes.
     */
    decryptCbc: (key: Uint8Array, iv: Uint8Array, ciphertext: Uint8Array) => Promise<Uint8Array | false>;
    /**
     *   AES-CTR. `nonce` is 12 bytes (block counter starts at 0).
     */
    encryptCtr: (key: Uint8Array, nonce: Uint8Array, data: Uint8Array) => Promise<Uint8Array | false>;
    /**
     *   AES-CTR (its own inverse). `nonce` is 12 bytes.
     */
    decryptCtr: (key: Uint8Array, nonce: Uint8Array, data: Uint8Array) => Promise<Uint8Array | false>;
};
//# sourceMappingURL=aes.d.ts.map