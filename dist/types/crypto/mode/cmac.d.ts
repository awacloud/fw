/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace cmac {
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
    /** @returns {CmacAPI} */
    function factory(bitArray: any): CmacAPI;
}
/**
 * Object returned by `cmac.factory()`. bitArrays are `number[]` (32-bit words).
 */
export type CmacAPI = {
    /**
     * 128-bit CMAC tag, or `false` if the PRF is rejected.
     */
    mac: (prf: {
        encrypt: Function;
    }, message: number[]) => (number[] | false);
    /**
     * Constant-time tag verification.
     */
    verify: (prf: {
        encrypt: Function;
    }, message: number[], tag: number[]) => boolean;
    /**
     * Truncated MAC (tagLen 32..128 bits).
     */
    truncatedMac: (prf: {
        encrypt: Function;
    }, message: number[], tagLen: number) => (number[] | false);
    /**
     * Constant-time truncated verification.
     */
    truncatedVerify: (prf: {
        encrypt: Function;
    }, message: number[], tag: number[], tagLen: number) => boolean;
    /**
     * Internal primitive (KAT tests only).
     */
    _internal: {
        dbl: (b: number[]) => number[];
    };
};
//# sourceMappingURL=cmac.d.ts.map