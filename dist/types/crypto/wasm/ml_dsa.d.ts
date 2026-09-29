/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace wasmMlDsa {
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
     * @returns {WasmMlDsaAPI}
     */
    function factory(wasmRuntime: any): WasmMlDsaAPI;
}
/**
 * Public surface of `wasmMlDsa.factory()`.
 */
export type WasmMlDsaAPI = {
    /**
     * Whether `WebAssembly` is present.
     */
    isAvailable: () => boolean;
    /**
     *   ML-DSA.KeyGen — fresh random key pair for the parameter set.
     */
    keygen: (paramSet?: (44 | 65 | 87)) => Promise<{
        publicKey: Uint8Array;
        secretKey: Uint8Array;
    } | false>;
    /**
     *   ML-DSA.Sign (hedged by default; `ctx` ≤ 255 bytes).
     */
    sign: (secretKey: Uint8Array, message: Uint8Array, ctx?: Uint8Array, paramSet?: (44 | 65 | 87)) => Promise<Uint8Array | false>;
    /**
     *   ML-DSA.Verify.
     */
    verify: (publicKey: Uint8Array, signature: Uint8Array, message: Uint8Array, ctx?: Uint8Array, paramSet?: (44 | 65 | 87)) => Promise<boolean>;
};
//# sourceMappingURL=ml_dsa.d.ts.map