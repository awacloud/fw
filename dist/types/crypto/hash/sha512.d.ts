/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace sha512 {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BitArrayAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Utf8API;
    })[];
    /** @returns {Sha512API} */
    function factory(bitArray: any, utf8: any): Sha512API;
}
/**
 * Streaming SHA-512 hasher instance (SJCL-style; bitArray = `number[]` of 32-bit words,
 * each 64-bit lane stored as two adjacent halves).
 */
export type Sha512Hasher = {
    /**
     * Block size in bits (1024).
     */
    blockSize: number;
    /**
     * IV (16 × 32-bit halves = 8 × 64-bit lanes).
     */
    _init: number[];
    /**
     * Number of 32-bit words retained in the digest.
     */
    _outWords: number;
    /**
     * Round constants.
     */
    _key: number[];
    /**
     * Reset internal state; returns `this`.
     */
    reset: () => Sha512Hasher;
    /**
     * Absorb a bitArray or UTF-8 string; returns `this`, or `false` on > 2^53-1 bit overflow.
     */
    update: (data: number[] | string) => (Sha512Hasher | false);
    /**
     * Pad and emit the digest as a bitArray (truncated to `outWords`).
     */
    finalize: () => number[];
    /**
     * Compress one 32-word (1024-bit) block.
     */
    _block: (words: ArrayLike<number>) => void;
};
/**
 * Object returned by `sha512.factory()`.
 */
export type Sha512API = {
    /**
     * Streaming hasher constructor (optional arg clones an existing instance).
     */
    fn: new (hash?: Sha512Hasher) => Sha512Hasher;
    /**
     * One-shot hash; returns the digest as a bitArray.
     */
    hash: (data: number[] | string) => number[];
    /**
     * Escape hatch used by sha384/sha512_224/sha512_256 to build truncated variants.
     */
    _internal: {
        makeSha: (init: number[], outWords: number) => {
            fn: Function;
            hash: Function;
        };
    };
};
//# sourceMappingURL=sha512.d.ts.map