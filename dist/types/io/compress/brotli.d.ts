/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace brotli {
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
    /** @returns {BrotliApi} */
    function factory(bitstream: any, huffman: any, lz77: any, brotliDict: any, brotliDictWords: any): BrotliApi;
}
/**
 * Streaming Brotli compressor instance shape.
 */
export type BrotliCompressStreamInstance = {
    ondata: (chunk: Uint8Array, isFinal: boolean) => void;
    push: (chunk: Uint8Array, final?: boolean) => void;
};
/**
 * Constructor for `BrotliCompressStream`.
 */
export type BrotliCompressStreamCtor = new (opts?: object | ((chunk: Uint8Array, isFinal: boolean) => void), ondata?: (chunk: Uint8Array, isFinal: boolean) => void) => BrotliCompressStreamInstance;
/**
 * Streaming Brotli decompressor instance shape.
 */
export type BrotliDecompressStreamInstance = {
    ondata: (chunk: Uint8Array, isFinal: boolean) => void;
    push: (chunk: Uint8Array, final?: boolean) => void;
};
/**
 * Constructor for `BrotliDecompressStream`.
 */
export type BrotliDecompressStreamCtor = new (opts?: object | ((chunk: Uint8Array, isFinal: boolean) => void), ondata?: (chunk: Uint8Array, isFinal: boolean) => void) => BrotliDecompressStreamInstance;
/**
 * Public surface of `brotli.factory(...)`.
 */
export type BrotliApi = {
    brotliCompressSync: (data: Uint8Array, opts?: object) => Uint8Array;
    brotliDecompressSync: (data: Uint8Array, opts?: object) => Uint8Array;
    brotliCompress: (data: Uint8Array, opts?: object) => Promise<Uint8Array>;
    brotliDecompress: (data: Uint8Array, opts?: object) => Promise<Uint8Array>;
    BrotliCompressStream: BrotliCompressStreamCtor;
    BrotliDecompressStream: BrotliDecompressStreamCtor;
    _internal: object;
};
//# sourceMappingURL=brotli.d.ts.map