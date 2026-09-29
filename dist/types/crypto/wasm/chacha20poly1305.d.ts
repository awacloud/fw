/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace wasmChacha20poly1305 {
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
     * @returns {WasmChacha20Poly1305API}
     */
    function factory(wasmRuntime: import("./runtime.js").WasmRuntimeAPI): WasmChacha20Poly1305API;
}
/**
 * Public surface of `wasmChacha20poly1305.factory()`.
 */
export type WasmChacha20Poly1305API = {
    /**
     * Whether `WebAssembly` is present.
     */
    isAvailable: () => boolean;
    /**
     *   Encrypt + authenticate; output = ciphertext‖tag (tag is 16 bytes).
     *   Returns `false` on invalid params or load failure; never throws.
     */
    seal: (key: Uint8Array, nonce: Uint8Array, plaintext: Uint8Array, aad?: Uint8Array) => Promise<Uint8Array | false>;
    /**
     *   Verify tag (constant-time) then decrypt; returns plaintext or `false`
     *   on authentication failure / invalid params. Never throws.
     */
    open: (key: Uint8Array, nonce: Uint8Array, ctWithTag: Uint8Array, aad?: Uint8Array) => Promise<Uint8Array | false>;
};
//# sourceMappingURL=chacha20poly1305.d.ts.map