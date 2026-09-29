/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace wasmSlhDsa {
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
     * @param {import('./runtime.js').wasmRuntime} wasmRuntime  resolved runtime
     *   module instance (its factory's API).
     * @returns {WasmSlhDsaAPI}
     */
    function factory(wasmRuntime: any): WasmSlhDsaAPI;
}
/**
 * One artefact-size record for a parameter set.
 */
export type SlhDsaSizes = {
    /**
     * frozen ABI enum (0..11)
     */
    psId: number;
    /**
     * security parameter (16 / 24 / 32)
     */
    n: number;
    /**
     * public-key length (2n)
     */
    publicKey: number;
    /**
     * secret-key length (4n)
     */
    secretKey: number;
    /**
     * signature length
     */
    signature: number;
};
/**
 * Public surface of `wasmSlhDsa.factory()`.
 */
export type WasmSlhDsaAPI = {
    isAvailable: () => boolean;
    keygen: (paramSet: string) => Promise<{
        publicKey: Uint8Array;
        secretKey: Uint8Array;
    } | false>;
    sign: (secretKey: Uint8Array, message: Uint8Array, ctx?: Uint8Array, paramSet?: string) => Promise<Uint8Array | false>;
    verify: (publicKey: Uint8Array, signature: Uint8Array, message: Uint8Array, ctx?: Uint8Array, paramSet?: string) => Promise<boolean>;
};
//# sourceMappingURL=slh_dsa.d.ts.map