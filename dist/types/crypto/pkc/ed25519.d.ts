/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace ed25519 {
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
        factory(bitArray: any, utf8: any): Sha512API;
    })[];
    /** @returns {Ed25519API} */
    function factory(sha512: any, bitArray: any): Ed25519API;
}
/**
 * Ed25519 key pair (RFC 8032). `privateKey` is the 64-byte `seed || publicKey`.
 */
export type Ed25519KeyPair = {
    /**
     * 32-byte public key.
     */
    publicKey: Uint8Array;
    /**
     * 64-byte private key (seed || pub).
     */
    privateKey: Uint8Array;
};
/**
 * Ed448 explicit-reject stub group (NOT-IMPLEMENTED guards).
 */
export type Ed25519Ed448Reject = {
    keyPair: () => false;
    sign: () => false;
    verify: () => false;
    signPh: () => false;
    verifyPh: () => false;
};
/**
 * Public API returned by `ed25519.factory()`.
 */
export type Ed25519API = {
    /**
     * Generate a key pair from a 32-byte seed.
     */
    keyPair: (seed: Uint8Array) => (Ed25519KeyPair | false);
    /**
     * Pure Ed25519 sign (64-byte signature).
     */
    sign: (privateKey: Uint8Array, message: Uint8Array) => (Uint8Array | false);
    /**
     * Pure Ed25519 verify.
     */
    verify: (publicKey: Uint8Array, message: Uint8Array, signature: Uint8Array) => boolean;
    /**
     * Ed25519ph (preHash) sign.
     */
    signPh: (privateKey: Uint8Array, message: Uint8Array, context?: Uint8Array) => (Uint8Array | false);
    /**
     * Ed25519ph verify.
     */
    verifyPh: (publicKey: Uint8Array, message: Uint8Array, signature: Uint8Array, context?: Uint8Array) => boolean;
    /**
     * Ed25519ctx sign.
     */
    signCtx: (privateKey: Uint8Array, message: Uint8Array, context: Uint8Array) => (Uint8Array | false);
    /**
     * Ed25519ctx verify.
     */
    verifyCtx: (publicKey: Uint8Array, message: Uint8Array, signature: Uint8Array, context: Uint8Array) => boolean;
    /**
     * Ed448 explicit-reject stubs.
     */
    ed448: Ed25519Ed448Reject;
    /**
     * Test-only escape hatch.
     */
    _internal: {
        isValidPublicKey: (pk: Uint8Array) => boolean;
        dom2: (F: number, ctx: (Uint8Array | null)) => (Uint8Array | false);
    };
};
//# sourceMappingURL=ed25519.d.ts.map