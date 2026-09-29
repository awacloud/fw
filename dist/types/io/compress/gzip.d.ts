/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace gzip {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Crc32Ctor;
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
     * @param {new() => {append: function(Uint8Array): void, get: function(): number}} Crc32 - constructor returned by crc32.factory()
     * @returns {GzipApi}
     */
    function factory(deflateModule: {
        deflateSync: any;
        inflateSync: any;
        deflate: any;
        inflate: any;
        DeflateStream: any;
        InflateStream: any;
    }, Crc32: new () => {
        append: (arg0: Uint8Array) => void;
        get: () => number;
    }): GzipApi;
}
/**
 * Streaming Gzip compressor instance shape.
 */
export type GzipStreamInstance = {
    ondata: ((chunk: Uint8Array, isFinal: boolean) => void) | null;
    push: (chunk: Uint8Array, final?: boolean) => void;
};
/**
 * Constructor for `GzipStream`.
 */
export type GzipStreamCtor = new (opts?: object | ((chunk: Uint8Array, isFinal: boolean) => void), ondata?: (chunk: Uint8Array, isFinal: boolean) => void) => GzipStreamInstance;
/**
 * Streaming Gzip decompressor instance shape.
 */
export type GunzipStreamInstance = {
    ondata: ((chunk: Uint8Array, isFinal: boolean) => void) | null;
    push: (chunk: Uint8Array, final?: boolean) => void;
};
/**
 * Constructor for `GunzipStream`.
 */
export type GunzipStreamCtor = new (opts?: object | ((chunk: Uint8Array, isFinal: boolean) => void), ondata?: (chunk: Uint8Array, isFinal: boolean) => void) => GunzipStreamInstance;
/**
 * Public surface of `gzip.factory(...)`.
 */
export type GzipApi = {
    gzipSync: (data: Uint8Array, opts?: object) => Uint8Array;
    gunzipSync: (data: Uint8Array, opts?: object) => Uint8Array;
    gzip: (data: Uint8Array, opts?: object) => Promise<Uint8Array>;
    gunzip: (data: Uint8Array, opts?: object) => Promise<Uint8Array>;
    GzipStream: GzipStreamCtor;
    GunzipStream: GunzipStreamCtor;
};
//# sourceMappingURL=gzip.d.ts.map