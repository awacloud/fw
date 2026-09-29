/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace zip {
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
     * @returns {ZipApi}
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
    }): ZipApi;
}
/**
 * Writer returned by `ZipStream.openEntry(...)`.
 */
export type ZipEntryWriter = {
    push: (chunk: Uint8Array, final?: boolean) => void;
};
/**
 * Streaming ZIP archive writer instance shape.
 */
export type ZipStreamInstance = {
    ondata: ((chunk: Uint8Array, isFinal: boolean) => void) | null;
    add: (name: string, data: Uint8Array | [Uint8Array, object], opts?: object) => void;
    openEntry: (name: string, opts?: object) => ZipEntryWriter;
    finalize: () => void;
};
/**
 * Constructor for `ZipStream`.
 */
export type ZipStreamCtor = new (opts?: object | ((chunk: Uint8Array, isFinal: boolean) => void), ondata?: (chunk: Uint8Array, isFinal: boolean) => void) => ZipStreamInstance;
/**
 * Streaming ZIP reader instance shape.
 */
export type ZipStreamReaderInstance = {
    onfile: ((name: string, data: Uint8Array, isFinal: boolean) => void) | null;
    push: (chunk: Uint8Array, final?: boolean) => void;
};
/**
 * Constructor for `ZipStreamReader`.
 */
export type ZipStreamReaderCtor = new (opts?: object | ((name: string, data: Uint8Array, isFinal: boolean) => void), onfile?: (name: string, data: Uint8Array, isFinal: boolean) => void) => ZipStreamReaderInstance;
/**
 * Public surface of `zip.factory(...)`.
 */
export type ZipApi = {
    zipSync: (files: object, opts?: object) => Uint8Array;
    unzipSync: (data: Uint8Array, opts?: object) => {
        [x: string]: Uint8Array;
    };
    zip: (files: object, opts?: object) => Promise<Uint8Array>;
    unzip: (data: Uint8Array, opts?: object) => Promise<{
        [x: string]: Uint8Array;
    }>;
    ZipStream: ZipStreamCtor;
    ZipStreamReader: ZipStreamReaderCtor;
};
//# sourceMappingURL=zip.d.ts.map