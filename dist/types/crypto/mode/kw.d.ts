/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace kw {
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
    /** @returns {KwAPI} */
    function factory(bitArray: any): KwAPI;
}
/**
 * Object returned by `kw.factory()`.
 */
export type KwAPI = {
    /**
     * KW-wrap (RFC 3394).
     */
    wrap: (prf: {
        encrypt: Function;
    }, plaintext: (Uint8Array | number[])) => (Uint8Array | false);
    /**
     * KW-unwrap (RFC 3394).
     */
    unwrap: (prf: {
        encrypt: Function;
        decrypt: Function;
    }, ciphertext: (Uint8Array | number[])) => (Uint8Array | false);
    /**
     * KWP-wrap (RFC 5649).
     */
    wrapPad: (prf: {
        encrypt: Function;
    }, plaintext: (Uint8Array | number[])) => (Uint8Array | false);
    /**
     * KWP-unwrap (RFC 5649).
     */
    unwrapPad: (prf: {
        encrypt: Function;
        decrypt: Function;
    }, ciphertext: (Uint8Array | number[])) => (Uint8Array | false);
    /**
     * Explicit reject for the unimplemented KW-AE inverse-cipher variant.
     */
    wrapInverseCipher: () => false;
    /**
     * Explicit reject for the unimplemented KW-AD inverse-cipher variant.
     */
    unwrapInverseCipher: () => false;
};
//# sourceMappingURL=kw.d.ts.map