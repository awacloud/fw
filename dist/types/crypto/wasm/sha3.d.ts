/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace wasmSha3 {
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
     * @returns {WasmSha3API}
     */
    function factory(wasmRuntime: import("./runtime.js").WasmRuntimeAPI): WasmSha3API;
}
/**
 * Public surface of `wasmSha3.factory()`.
 */
export type WasmSha3API = {
    /**
     * Whether `WebAssembly` is present.
     */
    isAvailable: () => boolean;
    /**
     * 28-byte digest.
     */
    sha3_224: (data: Uint8Array) => Promise<Uint8Array | false>;
    /**
     * 32-byte digest.
     */
    sha3_256: (data: Uint8Array) => Promise<Uint8Array | false>;
    /**
     * 48-byte digest.
     */
    sha3_384: (data: Uint8Array) => Promise<Uint8Array | false>;
    /**
     * 64-byte digest.
     */
    sha3_512: (data: Uint8Array) => Promise<Uint8Array | false>;
    /**
     * XOF; `outLen` bytes.
     */
    shake128: (data: Uint8Array, outLen: number) => Promise<Uint8Array | false>;
    /**
     * XOF; `outLen` bytes.
     */
    shake256: (data: Uint8Array, outLen: number) => Promise<Uint8Array | false>;
};
//# sourceMappingURL=sha3.d.ts.map