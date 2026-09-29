/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace wasmArgon2 {
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
     * @returns {WasmArgon2API}
     */
    function factory(wasmRuntime: import("./runtime.js").WasmRuntimeAPI): WasmArgon2API;
}
/**
 * Tuning + optional-input parameters for {@link WasmArgon2API.hash}.
 */
export type WasmArgon2Options = {
    /**
     * Passes `t` (≥ 1).
     */
    timeCost: number;
    /**
     * Memory cost `m` in KiB (≥ 8·parallelism).
     */
    memoryKiB: number;
    /**
     * Lanes `p` (≥ 1).
     */
    parallelism: number;
    /**
     * Output tag length in bytes (4 .. 2^32-1).
     */
    hashLen: number;
    /**
     * Optional key `K`.
     */
    secret?: Uint8Array;
    /**
     * Optional associated data `X`.
     */
    ad?: Uint8Array;
};
/**
 * Public surface of `wasmArgon2.factory()`.
 */
export type WasmArgon2API = {
    /**
     * Whether `WebAssembly` is present.
     */
    isAvailable: () => boolean;
    /**
     *   Argon2id tag of `hashLen` bytes, or `false` on invalid params / failure.
     */
    hash: (password: Uint8Array, salt: Uint8Array, opts: WasmArgon2Options) => Promise<Uint8Array | false>;
    /**
     *   `hash(...)` then constant-time compare against `expected`.
     */
    verify: (password: Uint8Array, salt: Uint8Array, expected: Uint8Array, opts: WasmArgon2Options) => Promise<boolean>;
};
//# sourceMappingURL=argon2.d.ts.map