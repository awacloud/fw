/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace cbor {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Utf8API;
    }[];
    /**
     * Factory function that creates a CBOR encoder/decoder instance.
     *
     * @param {Object} utf8 - UTF-8 codec dependency
     * @returns {CborAPI}
     */
    function factory(utf8: any): CborAPI;
}
export type CborTagged = {
    tag: number;
    value: unknown;
};
export type CborSimple = {
    value: number;
};
export type CborAPI = {
    encode: (value: unknown, options?: {
        deterministic?: boolean;
    }) => Uint8Array;
    decode: (bytes: Uint8Array, options?: {
        useMap?: boolean;
    }) => unknown;
    Tagged: new (tag: number, value: unknown) => CborTagged;
    Simple: new (value: number) => CborSimple;
};
//# sourceMappingURL=cbor.d.ts.map