/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace ctr {
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
    /** @returns {CtrAPI} */
    function factory(bitArray: any): CtrAPI;
}
/**
 * Object returned by `ctr.factory()`. bitArrays are `number[]` (32-bit words).
 */
export type CtrAPI = {
    /**
     * Encrypt in CTR mode.
     */
    encrypt: (prf: {
        encrypt: Function;
    }, plaintext: number[], iv: number[]) => (number[] | false);
    /**
     * Decrypt in CTR mode (identical to encrypt).
     */
    decrypt: (prf: {
        encrypt: Function;
    }, ciphertext: number[], iv: number[]) => (number[] | false);
    /**
     * Internal CTR core.
     */
    _calculate: (prf: {
        encrypt: Function;
    }, data: number[], iv: number[]) => (number[] | false);
    /**
     * Advance a 16-byte counter by ⌊pos/16⌋ blocks.
     */
    ui8_increase: (ui8a: (Uint8Array | number[]), pos: number) => (Uint8Array | number[]);
    /**
     * As `ui8_increase` over the last 16 bytes of a 48-byte buffer.
     */
    ui8_increase_384: (ui8a: (Uint8Array | number[]), pos: number) => (Uint8Array | number[]);
};
//# sourceMappingURL=ctr.d.ts.map