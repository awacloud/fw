/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace lzw {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {LzwAPI} */
    function factory(): LzwAPI;
}
/**
 * Public surface of `lzw.factory()`.
 */
export type LzwAPI = {
    /**
     * Compress `data` to LZW codes.
     */
    encode: (data: Uint8Array, opts?: {
        minCodeBits?: number;
        maxBits?: number;
        bigEndian?: boolean;
        useClearEnd?: boolean;
    }) => Uint8Array;
    /**
     * Decompress LZW codes back to the original bytes.
     */
    decode: (data: Uint8Array, opts?: {
        minCodeBits?: number;
        maxBits?: number;
        bigEndian?: boolean;
        useClearEnd?: boolean;
    }) => Uint8Array;
};
//# sourceMappingURL=lzw.d.ts.map