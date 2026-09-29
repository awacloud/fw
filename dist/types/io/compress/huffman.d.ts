/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace huffman {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BitstreamAPI;
    }[];
    /** @returns {HuffmanAPI} */
    function factory(bitstream: any): HuffmanAPI;
}
/**
 * Public surface of `huffman.factory(...)`.
 */
export type HuffmanAPI = {
    /**
     * Build the encode map (`reversed=0`) or reversed-code decode table (`reversed=1`) from canonical code lengths.
     */
    buildMap: (codeLengths: Uint8Array | number[], maxBits: number, reversed: 0 | 1 | number) => Uint16Array;
    /**
     * Derive a length-limited canonical code; `t` = per-symbol code lengths, `l` = max bits used.
     */
    buildTree: (freqs: Uint16Array | number[], maxBits: number) => {
        t: Uint8Array;
        l: number;
    };
};
//# sourceMappingURL=huffman.d.ts.map