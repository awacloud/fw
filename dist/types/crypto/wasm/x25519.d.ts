/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace wasmX25519 {
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
     * @returns {WasmX25519API}
     */
    function factory(wasmRuntime: import("./runtime.js").WasmRuntimeAPI): WasmX25519API;
}
/**
 * Key pair returned by `keygen`.
 */
export type WasmX25519KeyPair = {
    publicKey: Uint8Array;
    secretKey: Uint8Array;
};
/**
 * Public surface of `wasmX25519.factory()`.
 */
export type WasmX25519API = {
    /**
     * Whether `WebAssembly` is present.
     */
    isAvailable: () => boolean;
    /**
     *   Generate an X25519 key pair. Draws 32 bytes from `crypto.getRandomValues`
     *   when `secretKey` is omitted; the provided `secretKey` MUST be 32 bytes.
     *   The 32-byte public key (u-coordinate) is derived via `x25519_base(sk, pk)`.
     *   Returns the scalar as `secretKey` (clamping is applied by the binary).
     */
    keygen: (secretKey?: Uint8Array) => Promise<WasmX25519KeyPair | false>;
    /**
     *   X25519 scalar multiplication — shared secret. Returns the 32-byte output or
     *   `false` when lengths are wrong, the result is all-zero (small-subgroup /
     *   low-order public key), or any internal failure.
     */
    deriveBits: (secretKey: Uint8Array, publicKey: Uint8Array) => Promise<Uint8Array | false>;
};
//# sourceMappingURL=x25519.d.ts.map