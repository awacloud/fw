/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace chacha20poly1305 {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): ChaCha20API;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Poly1305API;
    })[];
    /** @returns {ChaCha20Poly1305API} */
    function factory(chacha20: any, poly1305: any): ChaCha20Poly1305API;
}
/**
 * Process-local nonce-uniqueness guard returned by `chacha20poly1305.nonceTracker()`.
 */
export type ChaCha20Poly1305NonceTracker = {
    /**
     * Set of hex-encoded nonces already used (inspectable).
     */
    seenNonces: Set<string>;
    /**
     * Encrypt, rejecting reused nonces.
     */
    encrypt: (nonce: Uint8Array, plaintext: Uint8Array, aad?: Uint8Array) => ({
        ct: Uint8Array;
        tag: Uint8Array;
    } | false);
    /**
     * Decrypt (does not consult the seen set).
     */
    decrypt: (nonce: Uint8Array, ciphertext: Uint8Array, tag: Uint8Array, aad?: Uint8Array) => (Uint8Array | false);
};
/**
 * Object returned by `chacha20poly1305.factory()`.
 */
export type ChaCha20Poly1305API = {
    /**
     * Module name (`'chacha20poly1305'`).
     */
    name: string;
    /**
     * AEAD encrypt.
     */
    encrypt: (key: Uint8Array, nonce: Uint8Array, plaintext: Uint8Array, aad?: Uint8Array) => ({
        ct: Uint8Array;
        tag: Uint8Array;
    } | false);
    /**
     * AEAD decrypt; `false` on tag mismatch.
     */
    decrypt: (key: Uint8Array, nonce: Uint8Array, ciphertext: Uint8Array, tag: Uint8Array, aad?: Uint8Array) => (Uint8Array | false);
    /**
     * Wrap key in an in-process nonce-uniqueness guard.
     */
    nonceTracker: (key: Uint8Array) => ChaCha20Poly1305NonceTracker;
};
//# sourceMappingURL=chacha20poly1305.d.ts.map