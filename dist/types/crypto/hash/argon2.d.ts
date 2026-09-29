/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace argon2 {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Blake2bAPI;
    }[];
    /** @returns {Argon2API} */
    function factory(blake2b: any): Argon2API;
}
/**
 * Options accepted by `argon2.hash`.
 */
export type Argon2Options = {
    password: Uint8Array;
    /**
     * Must be ≥ 8 bytes.
     */
    salt: Uint8Array;
    /**
     * Iterations t (≥ 1).
     */
    time: number;
    /**
     * Memory cost m in KiB (≥ 8*p).
     */
    memory: number;
    /**
     * Lanes p (≥ 1).
     */
    parallelism: number;
    /**
     * Output length in bytes (≥ 4).
     */
    tagLen: number;
    /**
     * Optional key.
     */
    secret?: Uint8Array;
    /**
     * Optional associated data.
     */
    ad?: Uint8Array;
};
/**
 * Public shape returned by `argon2.factory()`.
 */
export type Argon2API = {
    /**
     *   Argon2id hash → tag bytes of length `tagLen`, or `false` on error.
     */
    hash: (opts: Argon2Options) => (Uint8Array | false);
    /**
     * Argon2d - explicitly rejected (warns, returns `false`).
     */
    hashD: () => false;
    /**
     * Argon2i - explicitly rejected (warns, returns `false`).
     */
    hashI: () => false;
    /**
     *   Internal primitives exposed for KAT tests / debug only.
     */
    _internal: {
        Hp: (input: Uint8Array, outLen: number) => Uint8Array;
        compress: (out: Uint32Array, X: Uint32Array, Y: Uint32Array) => void;
    };
};
//# sourceMappingURL=argon2.d.ts.map