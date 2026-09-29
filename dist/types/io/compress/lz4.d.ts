/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace lz4 {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {Lz4API} */
    function factory(): Lz4API;
}
/**
 * LZ4 compression/decompression surface returned by `factory()`.
 */
export type Lz4API = {
    /**
     * - Compress data; returns `[compressed_size, compressed_data]` (`[0, original]` if incompressible, `[-1, original]` on size-limit error). `opts.mode`: 'speed' (default) or 'ratio' (smaller blocks, slower encode); any other value throws a RangeError.
     */
    compress: (src: Uint8Array, len: number, opts?: {
        mode?: "speed" | "ratio";
    }) => [number, Uint8Array];
    /**
     * - Decompress data; returns `[decompressed_size, decompressed_data]` (`[-1, compressed]` on error).
     */
    decompress: (src: Uint8Array) => [number, Uint8Array];
    /**
     * - Streaming LZ4 compressor constructor; `opts` as for `compress`.
     */
    Lz4CompressStream: new (ondata: (chunk: Uint8Array, isFinal: boolean) => void, opts?: {
        mode?: "speed" | "ratio";
    }) => {
        ondata: ((chunk: Uint8Array, isFinal: boolean) => void) | null;
        push: (chunk: Uint8Array, final?: boolean) => void;
    };
    /**
     * - Streaming LZ4 decompressor constructor.
     */
    Lz4DecompressStream: new (ondata: (chunk: Uint8Array, isFinal: boolean) => void) => {
        ondata: ((chunk: Uint8Array, isFinal: boolean) => void) | null;
        push: (chunk: Uint8Array, final?: boolean) => void;
    };
};
//# sourceMappingURL=lz4.d.ts.map