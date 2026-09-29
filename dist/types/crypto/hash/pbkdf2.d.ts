/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace pbkdf2 {
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
    /** @returns {Pbkdf2API} */
    function factory(bitArray: any, utf8: any, hmac: any): Pbkdf2API;
}
/**
 * Single PBKDF2 derivation call signature. `bitArray` values are `number[]`.
 */
export type Pbkdf2Derive = (password: (number[] | string), salt: (number[] | string), count?: number, length?: number, Prff?: {
    fn: Function;
}) => (number[] | false);
/**
 * Public shape returned by `pbkdf2.factory()`: a callable function carrying
 * `.derive` (alias of itself) and the recommended-count constants.
 */
export type Pbkdf2API = Pbkdf2Derive & {
    derive: Pbkdf2Derive;
    MIN_RECOMMENDED_COUNT: number;
    DEFAULT_COUNT: number;
};
//# sourceMappingURL=pbkdf2.d.ts.map