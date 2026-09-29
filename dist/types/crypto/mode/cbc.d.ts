/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace cbc {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BitArrayAPI;
    }[];
    /** @returns {CbcAPI} */
    function factory(bitArray: any): CbcAPI;
}
/**
 * Object returned by `cbc.factory()`. bitArrays are `number[]` (32-bit words).
 */
export type CbcAPI = {
    /**
     * Encrypt in CBC mode.
     */
    encrypt: (prf: {
        encrypt: Function;
    }, plaintext: number[], iv: number[]) => (number[] | false);
    /**
     * Decrypt in CBC mode.
     */
    decrypt: (prf: {
        decrypt: Function;
    }, ciphertext: number[], iv: number[]) => (number[] | false);
};
//# sourceMappingURL=cbc.d.ts.map