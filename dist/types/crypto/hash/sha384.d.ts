/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace sha384 {
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
    /** @returns {Sha384API} */
    function factory(sha512: any): Sha384API;
}
/**
 * Streaming SHA-384 hasher instance (truncated SHA-512; bitArray = `number[]` of 32-bit words).
 */
export type Sha384Hasher = {
    /**
     * Block size in bits (1024).
     */
    blockSize: number;
    /**
     * IV (16 × 32-bit halves = 8 × 64-bit lanes).
     */
    _init: number[];
    /**
     * Number of 32-bit words retained in the digest (12).
     */
    _outWords: number;
    /**
     * Round constants.
     */
    _key: number[];
    /**
     * Reset internal state; returns `this`.
     */
    reset: () => Sha384Hasher;
    /**
     * Absorb a bitArray or UTF-8 string; returns `this`, or `false` on > 2^53-1 bit overflow.
     */
    update: (data: number[] | string) => (Sha384Hasher | false);
    /**
     * Pad and emit the 384-bit digest as a bitArray (12 words).
     */
    finalize: () => number[];
    /**
     * Compress one 32-word (1024-bit) block.
     */
    _block: (words: ArrayLike<number>) => void;
};
/**
 * Object returned by `sha384.factory()` (delegates to `sha512._internal.makeSha`).
 */
export type Sha384API = {
    /**
     * Streaming hasher constructor (optional arg clones an existing instance).
     */
    fn: new (hash?: Sha384Hasher) => Sha384Hasher;
    /**
     * One-shot hash; returns the 384-bit digest as a bitArray.
     */
    hash: (data: number[] | string) => number[];
};
//# sourceMappingURL=sha384.d.ts.map