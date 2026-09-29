/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace bitmap {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /**
     * Create bitmap helper API.
     * @returns {BitmapAPI}
     */
    function factory(): BitmapAPI;
}
/**
 * Bitmap conversion helper surface returned by `factory()`.
 */
export type BitmapAPI = {
    /**
     * - Convert a Uint8Array to an array of bits (0/1), LSB-first per byte.
     */
    bytesToBits: (ui8a: Uint8Array, ret?: number[]) => number[];
    /**
     * - Convert an array of bits (0/1) to a Uint8Array, LSB-first per byte.
     */
    bitsToBytes: (ba: number[], validateLength?: boolean) => Uint8Array;
    /**
     * - Pad a bit array with `fill` so its length is a multiple of 8.
     */
    padBitsToByte: (arr: number[], fill?: number) => number[];
};
//# sourceMappingURL=bitmap.d.ts.map