/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace hkdf {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BitArrayAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Utf8API;
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
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): Utf8API;
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
                factory(): BitArrayAPI;
            } | {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): Utf8API;
            })[];
            factory(bitArray: any, utf8: any): Sha256API;
        })[];
        factory(bitArray: any, utf8: any, sha256: any): HmacAPI;
    })[];
    /** @returns {HkdfAPI} */
    function factory(bitArray: any, utf8: any, hmac: any): HkdfAPI;
}
/**
 * Public shape returned by `hkdf.factory()`. `bitArray` values are `number[]`.
 */
export type HkdfAPI = {
    /**
     *   HKDF-Extract: PRK = HMAC-Hash(salt, IKM).
     */
    extract: (salt: (number[] | string), ikm: (number[] | string), Prff?: {
        fn: Function;
    }) => number[];
    /**
     *   HKDF-Expand: derive `length` bits of OKM, or `false` on invalid length.
     */
    expand: (prk: number[], info: (number[] | string), length: number, Prff?: {
        fn: Function;
    }) => (number[] | false);
    /**
     *   One-shot extract-then-expand.
     */
    derive: (salt: (number[] | string), ikm: (number[] | string), info: (number[] | string), length: number, Prff?: {
        fn: Function;
    }) => (number[] | false);
};
//# sourceMappingURL=hkdf.d.ts.map