/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace sha256 {
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
    /** @returns {Sha256API} */
    function factory(bitArray: any, utf8: any): Sha256API;
}
/**
 * Streaming SHA-256 hasher instance (SJCL-style; bitArray = `number[]` of 32-bit words).
 */
export type Sha256Hasher = {
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
    reset: () => Sha256Hasher;
    /**
     * Absorb a bitArray or UTF-8 string; returns `this`, or `false` on > 2^53-1 bit overflow.
     */
    update: (data: number[] | string) => (Sha256Hasher | false);
    /**
     * Pad and emit the digest as a bitArray (8 words for SHA-256, truncated per `outWords`).
     */
    finalize: () => number[];
    /**
     * Compress one 16-word block.
     */
    _block: (words: ArrayLike<number>) => void;
};
/**
 * Object returned by `sha256.factory()`.
 */
export type Sha256API = {
    /**
     * Streaming hasher constructor (optional arg clones an existing instance).
     */
    fn: new (hash?: Sha256Hasher) => Sha256Hasher;
    /**
     * One-shot hash; returns the digest as a bitArray.
     */
    hash: (data: number[] | string) => number[];
    /**
     * Escape hatch used by sha224.js to build a truncated variant.
     */
    _internal: {
        makeSha: (init: number[], outWords: number) => {
            fn: Function;
            hash: Function;
        };
    };
};
//# sourceMappingURL=sha256.d.ts.map