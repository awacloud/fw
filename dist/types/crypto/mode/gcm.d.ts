/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace gcm {
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
    /** @returns {GcmAPI} */
    function factory(bitArray: any): GcmAPI;
}
/**
 * Process-local nonce-uniqueness guard returned by `gcm.nonceTracker()`.
 */
export type GcmNonceTracker = {
    /**
     * Set of hex-encoded IVs already used (inspectable).
     */
    seenNonces: Set<string>;
    /**
     * Encrypt, rejecting reused IVs.
     */
    encrypt: (plaintext: number[], iv: number[], adata?: number[], tlen?: number) => ({
        ct: number[];
        tag: number[];
    } | false);
    /**
     * Decrypt (does not consult the seen set).
     */
    decrypt: (ciphertext: number[], iv: number[], adata: number[], tag: number[], tlen?: number) => (number[] | false);
};
/**
 * Object returned by `gcm.factory()`. bitArrays are `number[]` (32-bit words).
 */
export type GcmAPI = {
    /**
     * Authenticated encryption.
     */
    encrypt: (prf: {
        encrypt: Function;
    }, plaintext: number[], iv: number[], adata?: number[], tlen?: number) => ({
        ct: number[];
        tag: number[];
    } | false);
    /**
     * Authenticated decryption; `false` on tag mismatch.
     */
    decrypt: (prf: {
        encrypt: Function;
    }, ciphertext: number[], iv: number[], adata: number[], tag: number[], tlen?: number) => (number[] | false);
    /**
     * GMAC tag over AAD only.
     */
    gmac: (prf: {
        encrypt: Function;
    }, adata: number[], iv: number[], tlen?: number) => (number[] | false);
    /**
     * Constant-time GMAC verification.
     */
    gmacVerify: (prf: {
        encrypt: Function;
    }, adata: number[], iv: number[], tag: number[], tlen?: number) => boolean;
    /**
     * Wrap a PRF in an in-process nonce-uniqueness guard.
     */
    nonceTracker: (prf: {
        encrypt: Function;
    }) => GcmNonceTracker;
    /**
     * Internal primitives (KAT tests only).
     */
    _internal: {
        ghash: (H: number[], data: number[]) => number[];
        gctr: (prf: {
            encrypt: Function;
        }, icb: number[], data: number[]) => number[];
    };
};
//# sourceMappingURL=gcm.d.ts.map