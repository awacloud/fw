/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace sha512_224 {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
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
        factory(bitArray: any, utf8: any): Sha512API;
    }[];
    /** @returns {Sha512_224API} */
    function factory(sha512: any): Sha512_224API;
}
/**
 * Streaming SHA-512/224 hasher instance (truncated SHA-512; bitArray = `number[]` of 32-bit words).
 */
export type Sha512_224Hasher = {
    /**
     * Block size in bits (1024).
     */
    blockSize: number;
    /**
     * IV (16 × 32-bit halves = 8 × 64-bit lanes).
     */
    _init: number[];
    /**
     * Number of 32-bit words retained in the digest (7).
     */
    _outWords: number;
    /**
     * Round constants.
     */
    _key: number[];
    /**
     * Reset internal state; returns `this`.
     */
    reset: () => Sha512_224Hasher;
    /**
     * Absorb a bitArray or UTF-8 string; returns `this`, or `false` on > 2^53-1 bit overflow.
     */
    update: (data: number[] | string) => (Sha512_224Hasher | false);
    /**
     * Pad and emit the 224-bit digest as a bitArray (7 words).
     */
    finalize: () => number[];
    /**
     * Compress one 32-word (1024-bit) block.
     */
    _block: (words: ArrayLike<number>) => void;
};
/**
 * Object returned by `sha512_224.factory()`.
 */
export type Sha512_224API = {
    /**
     * Streaming hasher constructor (optional arg clones an existing instance).
     */
    fn: new (hash?: Sha512_224Hasher) => Sha512_224Hasher;
    /**
     * One-shot hash; returns the 224-bit digest as a bitArray.
     */
    hash: (data: number[] | string) => number[];
};
//# sourceMappingURL=sha512_224.d.ts.map