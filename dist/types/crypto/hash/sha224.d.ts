/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace sha224 {
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
        factory(bitArray: any, utf8: any): Sha256API;
    }[];
    /** @returns {Sha224API} */
    function factory(sha256: any): Sha224API;
}
/**
 * Streaming SHA-224 hasher instance (truncated SHA-256; bitArray = `number[]` of 32-bit words).
 */
export type Sha224Hasher = {
    /**
     * Block size in bits (512).
     */
    blockSize: number;
    /**
     * IV (8 × 32-bit words).
     */
    _init: number[];
    /**
     * Round constants K[0..63].
     */
    _key: number[];
    /**
     * Reset internal state; returns `this`.
     */
    reset: () => Sha224Hasher;
    /**
     * Absorb a bitArray or UTF-8 string; returns `this`, or `false` on > 2^53-1 bit overflow.
     */
    update: (data: number[] | string) => (Sha224Hasher | false);
    /**
     * Pad and emit the 224-bit digest as a bitArray (7 words).
     */
    finalize: () => number[];
    /**
     * Compress one 16-word block.
     */
    _block: (words: ArrayLike<number>) => void;
};
/**
 * Object returned by `sha224.factory()` (delegates to `sha256._internal.makeSha`).
 */
export type Sha224API = {
    /**
     * Streaming hasher constructor (optional arg clones an existing instance).
     */
    fn: new (hash?: Sha224Hasher) => Sha224Hasher;
    /**
     * One-shot hash; returns the 224-bit digest as a bitArray.
     */
    hash: (data: number[] | string) => number[];
};
//# sourceMappingURL=sha224.d.ts.map