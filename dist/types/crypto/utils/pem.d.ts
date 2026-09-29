/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace pem {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Base64API;
    }[];
    /** @returns {PemAPI} */
    function factory(b64: any): PemAPI;
}
/**
 * Public shape returned by `pem.factory()`.
 */
export type PemAPI = {
    /**
     * Module name (`'pem'`).
     */
    name: string;
    /**
     * Encode bytes as a PEM block.
     */
    encode: (bytes: Uint8Array, label: string) => string;
    /**
     * Decode a single PEM block.
     */
    decode: (text: string, expectLabel?: string) => ({
        label: string;
        bytes: Uint8Array;
    } | false);
};
//# sourceMappingURL=pem.d.ts.map