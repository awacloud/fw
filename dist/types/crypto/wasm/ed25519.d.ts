/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace wasmEd25519 {
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
     * @returns {WasmEd25519API}
     */
    function factory(wasmRuntime: import("./runtime.js").WasmRuntimeAPI): WasmEd25519API;
}
/**
 * Public surface of `wasmEd25519.factory()`.
 */
export type WasmEd25519API = {
    /**
     * Whether `WebAssembly` is present.
     */
    isAvailable: () => boolean;
    /**
     *   Generate an Ed25519 key pair. If `seed` is given it must be 32 bytes;
     *   otherwise 32 random bytes are drawn from `crypto.getRandomValues`.
     *   Returns `{ publicKey: Uint8Array(32), privateKey: Uint8Array(64) }` or `false`.
     */
    keygen: (seed?: Uint8Array) => Promise<{
        publicKey: Uint8Array;
        privateKey: Uint8Array;
    } | false>;
    /**
     *   Sign `message` with the 64-byte expanded `privateKey`. Returns the 64-byte
     *   detached signature, or `false` on any failure.
     */
    sign: (privateKey: Uint8Array, message: Uint8Array) => Promise<Uint8Array | false>;
    /**
     *   Verify a detached Ed25519 signature. Resolves `false` on invalid input,
     *   tampered material, or any internal failure (no-throw).
     */
    verify: (publicKey: Uint8Array, signature: Uint8Array, message: Uint8Array) => Promise<boolean>;
};
//# sourceMappingURL=ed25519.d.ts.map