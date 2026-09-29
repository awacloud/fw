/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export type bitArray = number[];
export namespace bitArray {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {BitArrayAPI} */
    function factory(): BitArrayAPI;
}
/**
 * Public shape returned by `bitArray.factory()`.
 *
 * Every member operates on `number[]` bit arrays (SJCL 32-bit word arrays),
 * except the explicit byte-conversion helpers which bridge to `Uint8Array`.
 */
export type BitArrayAPI = {
    /**
     * Convert a bit array to a `Uint8Array`.
     */
    ba_to_ui8: (arr: number[]) => Uint8Array;
    /**
     * Convert a byte array to a bit array (big-endian packing).
     */
    ui8_to_ba: (arr: Uint8Array | number[]) => number[];
    /**
     * Slice a bit array in units of bits.
     */
    bitSlice: (a: number[], bstart: number, bend?: number) => number[];
    /**
     * Extract a number packed into a bit array.
     */
    extract: (a: number[], bstart: number, blength: number) => number;
    /**
     * Concatenate two bit arrays.
     */
    concat: (a1: number[], a2: number[]) => number[];
    /**
     * Length of a bit array, in bits.
     */
    bitLength: (a: number[]) => number;
    /**
     * Truncate a bit array to `len` bits.
     */
    clamp: (a: number[], len: number) => number[];
    /**
     * Build a partial word.
     */
    partial: (len: number, x: number, _end?: number) => number;
    /**
     * Number of bits used by a partial word.
     */
    getPartial: (x: number) => number;
    /**
     * Constant-time equality of two bit arrays.
     */
    equal: (a: number[], b: number[]) => boolean;
    /**
     * Shift a bit array right (private).
     */
    _shiftRight: (a: number[], shift: number, carry?: number, out?: number[]) => number[];
    /**
     * XOR two 4-word blocks element-wise (private).
     */
    _xor4: (x: number[], y: number[]) => number[];
    /**
     * Byte-swap each word in place; `false` on a partial word.
     */
    byteswapM: (a: number[]) => (number[] | false);
};
//# sourceMappingURL=bitArray.d.ts.map