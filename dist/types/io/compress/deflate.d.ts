/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace deflate {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BitstreamAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitstreamAPI;
        }[];
        factory(bitstream: any): HuffmanAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Lz77API;
    })[];
    /** @returns {DeflateApi} */
    function factory(bitstream: any, huffman: any, lz77: any): DeflateApi;
}
/**
 * Streaming DEFLATE compressor instance shape.
 */
export type DeflateStreamInstance = {
    /**
     * Output callback.
     */
    ondata?: (chunk: Uint8Array, isFinal: boolean) => void;
    /**
     * Push a chunk of plaintext.
     */
    push: (chunk: Uint8Array, final?: boolean) => void;
    /**
     * Flush buffered data without finalising.
     */
    flush: () => void;
};
/**
 * Constructor for `DeflateStream`.
 */
export type DeflateStreamCtor = new (opts?: object | ((chunk: Uint8Array, isFinal: boolean) => void), ondata?: (chunk: Uint8Array, isFinal: boolean) => void) => DeflateStreamInstance;
/**
 * Streaming DEFLATE decompressor instance shape.
 */
export type InflateStreamInstance = {
    /**
     * Output callback.
     */
    ondata?: (chunk: Uint8Array, isFinal: boolean) => void;
    /**
     * Push a chunk of compressed data.
     */
    push: (chunk: Uint8Array, final?: boolean) => void;
};
/**
 * Constructor for `InflateStream`.
 */
export type InflateStreamCtor = new (opts?: object | ((chunk: Uint8Array, isFinal: boolean) => void), ondata?: (chunk: Uint8Array, isFinal: boolean) => void) => InflateStreamInstance;
/**
 * Public surface of `deflate.factory(...)`.
 */
export type DeflateApi = {
    deflateSync: (data: Uint8Array, opts?: object) => Uint8Array;
    inflateSync: (data: Uint8Array, opts?: object) => Uint8Array;
    deflate: (data: Uint8Array, opts?: object) => Promise<Uint8Array>;
    inflate: (data: Uint8Array, opts?: object) => Promise<Uint8Array>;
    DeflateStream: DeflateStreamCtor;
    InflateStream: InflateStreamCtor;
};
//# sourceMappingURL=deflate.d.ts.map