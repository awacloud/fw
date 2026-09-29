/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace lz77 {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {Lz77API} */
    function factory(): Lz77API;
}
/**
 * Public surface of `lz77.factory()`.
 */
export type Lz77API = {
    /**
     * Run the hash-chain encoder, reporting tokens via callbacks.
     */
    encode: (data: Uint8Array, opts: object, callbacks: {
        literal: (pos: number) => void;
        match: (pos: number, len: number, dist: number) => void;
    }) => void;
    /**
     * Callback-free fast path: same token sequence as `encode`, packed as `(len|0, dist|byte)` pairs into an `Int32Array`.
     */
    encodeTokens: (data: Uint8Array, opts?: object) => {
        tokens: Int32Array;
        count: number;
    };
    /**
     * Single-position match probe.
     */
    findMatch: (data: Uint8Array, pos: number, head: Int32Array, prev: Int32Array, opts: object) => ({
        len: number;
        dist: number;
    } | null);
    /**
     * Replay a token stream into `dst`; returns bytes written.
     */
    decodeStream: (dst: Uint8Array, ops: Array<{
        lit?: number;
        pos?: number;
        len?: number;
        dist?: number;
    }>) => number;
    /**
     * Frozen default option set.
     */
    DEFAULT: {
        windowBits: number;
        minMatch: number;
        maxMatch: number;
        chainDepth: number;
        lazy: boolean;
        hashBits: number;
        niceLength: number;
        goodLength: number;
        maxLazy: number;
        chainSkip: boolean;
        start: number;
        hashFn: (((data: Uint8Array, pos: number) => number) | null);
    };
};
//# sourceMappingURL=lz77.d.ts.map