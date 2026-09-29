/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace wasmMlKem {
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
     * @returns {WasmMlKemAPI}
     */
    function factory(wasmRuntime: import("./runtime.js").WasmRuntimeAPI): WasmMlKemAPI;
}
/**
 * One of the three ML-KEM parameter sets (FIPS 203 Table 2).
 */
export type MlKemParamSet = 512 | 768 | 1024;
/**
 * Public surface of `wasmMlKem.factory()`.
 */
export type WasmMlKemAPI = {
    /**
     * Whether the WASM runtime is available.
     */
    isAvailable: () => boolean;
    /**
     *   ML-KEM.KeyGen → encapsulation key (`publicKey`) + decapsulation key
     *   (`secretKey`), or `false` on an invalid param set / failure.
     */
    keygen: (paramSet?: MlKemParamSet) => Promise<{
        publicKey: Uint8Array;
        secretKey: Uint8Array;
    } | false>;
    /**
     *   ML-KEM.Encaps → `ciphertext` + 32-byte `sharedSecret`, or `false`.
     */
    encaps: (publicKey: Uint8Array, paramSet?: MlKemParamSet) => Promise<{
        ciphertext: Uint8Array;
        sharedSecret: Uint8Array;
    } | false>;
    /**
     *   ML-KEM.Decaps → 32-byte shared secret (implicit reject on a tampered
     *   ciphertext: returns a pseudo-random secret, never `false`), or `false` on
     *   an invalid param set / length.
     */
    decaps: (secretKey: Uint8Array, ciphertext: Uint8Array, paramSet?: MlKemParamSet) => Promise<Uint8Array | false>;
};
//# sourceMappingURL=ml_kem.d.ts.map