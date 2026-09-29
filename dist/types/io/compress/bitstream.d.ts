/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace bitstream {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {BitstreamAPI} */
    function factory(): BitstreamAPI;
}
/**
 * Public surface of `bitstream.factory()`.
 */
export type BitstreamAPI = {
    /**
     * Read up to 16 bits at `bitPos`, masked by `mask`.
     */
    readBits: (buf: Uint8Array, bitPos: number, mask: number) => number;
    /**
     * Read up to 24 bits at `bitPos` (unmasked).
     */
    readBits16: (buf: Uint8Array, bitPos: number) => number;
    /**
     * OR up to 16 bits of `value` into `buf` at `bitPos`.
     */
    writeBits: (buf: Uint8Array, bitPos: number, value: number) => void;
    /**
     * OR up to 24 bits of `value` into `buf` at `bitPos`.
     */
    writeBits16: (buf: Uint8Array, bitPos: number, value: number) => void;
    /**
     * `ceil(bitPos / 8)` as an integer.
     */
    byteOffset: (bitPos: number) => number;
    /**
     * Copying subarray slice.
     */
    slice: (buf: Uint8Array, start?: number, end?: number) => Uint8Array;
    /**
     * Maximum value in `arr`.
     */
    max: (arr: ArrayLike<number>) => number;
    /**
     * 15-bit bit-reversal table (length 32768) for canonical Huffman.
     */
    rev: Uint16Array;
};
//# sourceMappingURL=bitstream.d.ts.map