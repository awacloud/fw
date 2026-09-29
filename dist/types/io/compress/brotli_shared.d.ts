/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace brotliShared {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BrotliDictAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BrotliDictWordsAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
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
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BrotliDictAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BrotliDictWordsAPI;
        })[];
        factory(bitstream: any, huffman: any, lz77: any, brotliDict: any, brotliDictWords: any): BrotliApi;
    })[];
    /** @returns {BrotliSharedAPI} */
    function factory(brotli: any, brotliDict: any, brotliDictWords: any): BrotliSharedAPI;
}
/**
 * Streaming wrapper instance (RFC 9841-aware).
 */
export type BrotliSharedStreamInstance = {
    /**
     * Push a chunk into the underlying brotli stream.
     */
    push: (chunk: Uint8Array, final?: boolean) => void;
};
/**
 * Constructor for a shared-brotli streaming wrapper.
 */
export type BrotliSharedStreamCtor = new (opts?: object, ondata?: (chunk: Uint8Array, isFinal: boolean) => void) => BrotliSharedStreamInstance;
/**
 * Result of `parseSharedDictionary` (RFC 9841 §5).
 */
export type BrotliSharedDictionary = {
    /**
     * Shared LZ77 dictionary, or `null`.
     */
    lz77Dict: Uint8Array | null;
    /**
     * Custom word lists.
     */
    wordLists: Array<{
        sizeBits: Uint8Array;
        offsets: Int32Array;
        words: Uint8Array;
    }>;
    /**
     * Custom transform lists.
     */
    transformLists: Array<{
        stringlets: Uint8Array[];
        transforms: Array<{
            prefixIdx: number;
            suffixIdx: number;
            opIdx: number;
            param: number;
        }>;
    }>;
    /**
     * Dictionary map, or `null`.
     */
    dictionaryMap: Array<{
        wordListIdx: number;
        transformListIdx: number;
    }> | null;
    /**
     * 64-entry context map, or `null`.
     */
    contextMap: Uint8Array | null;
    /**
     * Number of bytes consumed from the input.
     */
    bytesConsumed: number;
};
/**
 * Public surface of `brotliShared.factory(...)`.
 */
export type BrotliSharedAPI = {
    /**
     * RFC 9841-aware sync compression.
     */
    brotliCompressSync: (data: Uint8Array, opts?: object) => Uint8Array;
    /**
     * RFC 9841-aware sync decompression.
     */
    brotliDecompressSync: (data: Uint8Array, opts?: object) => Uint8Array;
    /**
     * Async compression.
     */
    brotliCompress: (data: Uint8Array, opts?: object) => Promise<Uint8Array>;
    /**
     * Async decompression.
     */
    brotliDecompress: (data: Uint8Array, opts?: object) => Promise<Uint8Array>;
    /**
     * Streaming compressor.
     */
    BrotliCompressStream: BrotliSharedStreamCtor;
    /**
     * Streaming decompressor.
     */
    BrotliDecompressStream: BrotliSharedStreamCtor;
    /**
     * Parse a §5 shared-dictionary stream.
     */
    parseSharedDictionary: (buf: Uint8Array) => BrotliSharedDictionary;
    /**
     * Internal helpers exposed for tests.
     */
    _internal: object;
};
//# sourceMappingURL=brotli_shared.d.ts.map