/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace zlib {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Adler32Ctor;
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
        })[];
        factory(bitstream: any, huffman: any, lz77: any): DeflateApi;
    })[];
    /**
     * @param {{ deflateSync, inflateSync, deflate, inflate, DeflateStream, InflateStream }} deflateModule
     * @param {Function} Adler32 - constructor returned by adler32.factory()
     * @returns {ZlibApi}
     */
    function factory(deflateModule: {
        deflateSync: any;
        inflateSync: any;
        deflate: any;
        inflate: any;
        DeflateStream: any;
        InflateStream: any;
    }, Adler32: Function): ZlibApi;
}
/**
 * Streaming Zlib compressor instance shape.
 */
export type ZlibStreamInstance = {
    ondata: ((chunk: Uint8Array, isFinal: boolean) => void) | null;
    push: (chunk: Uint8Array, final?: boolean) => void;
};
/**
 * Constructor for `ZlibStream`.
 */
export type ZlibStreamCtor = new (opts?: object | ((chunk: Uint8Array, isFinal: boolean) => void), ondata?: (chunk: Uint8Array, isFinal: boolean) => void) => ZlibStreamInstance;
/**
 * Streaming Zlib decompressor instance shape.
 */
export type UnzlibStreamInstance = {
    ondata: ((chunk: Uint8Array, isFinal: boolean) => void) | null;
    push: (chunk: Uint8Array, final?: boolean) => void;
};
/**
 * Constructor for `UnzlibStream`.
 */
export type UnzlibStreamCtor = new (opts?: object | ((chunk: Uint8Array, isFinal: boolean) => void), ondata?: (chunk: Uint8Array, isFinal: boolean) => void) => UnzlibStreamInstance;
/**
 * Public surface of `zlib.factory(...)`.
 */
export type ZlibApi = {
    zlibSync: (data: Uint8Array, opts?: object) => Uint8Array;
    unzlibSync: (data: Uint8Array, opts?: object) => Uint8Array;
    zlib: (data: Uint8Array, opts?: object) => Promise<Uint8Array>;
    unzlib: (data: Uint8Array, opts?: object) => Promise<Uint8Array>;
    ZlibStream: ZlibStreamCtor;
    UnzlibStream: UnzlibStreamCtor;
};
//# sourceMappingURL=zlib.d.ts.map