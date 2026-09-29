/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace wasmPbkdf2 {
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
     * @returns {WasmPbkdf2API}
     */
    function factory(wasmRuntime: import("./runtime.js").WasmRuntimeAPI): WasmPbkdf2API;
}
/**
 * Public surface of `wasmPbkdf2.factory()`.
 */
export type WasmPbkdf2API = {
    /**
     * Whether `WebAssembly` is present.
     */
    isAvailable: () => boolean;
    /**
     *   Derive `dkLen` bytes via PBKDF2-HMAC-SHA-{256|384|512}. Resolves
     *   `false` on invalid params, load failure, or WASM error — never rejects.
     */
    deriveBits: (password: Uint8Array, salt: Uint8Array, dkLen: number, iterations?: number, hash?: 256 | 384 | 512) => Promise<Uint8Array | false>;
};
//# sourceMappingURL=pbkdf2.d.ts.map