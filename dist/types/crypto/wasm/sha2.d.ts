/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace wasmSha2 {
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
     * @returns {WasmSha2API}
     */
    function factory(wasmRuntime: import("./runtime.js").WasmRuntimeAPI): WasmSha2API;
}
/**
 * Public surface of `wasmSha2.factory()`.
 */
export type WasmSha2API = {
    /**
     * Whether `WebAssembly` is present.
     */
    isAvailable: () => boolean;
    /**
     * 32-byte digest (FIPS 180-4 SHA-256).
     */
    sha256: (data: Uint8Array) => Promise<Uint8Array | false>;
    /**
     * 48-byte digest (FIPS 180-4 SHA-384).
     */
    sha384: (data: Uint8Array) => Promise<Uint8Array | false>;
    /**
     * 64-byte digest (FIPS 180-4 SHA-512).
     */
    sha512: (data: Uint8Array) => Promise<Uint8Array | false>;
};
//# sourceMappingURL=sha2.d.ts.map