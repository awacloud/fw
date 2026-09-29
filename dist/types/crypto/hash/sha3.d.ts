/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace sha3 {
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
    })[];
    /** @returns {Sha3API} */
    function factory(bitArray: any, utf8: any): Sha3API;
}
/**
 * Streaming SHA-3 / SHAKE hash instance - HMAC/HKDF/PBKDF2 compatible.
 */
export type Sha3HashInstance = {
    /**
     * Block size in bits.
     */
    blockSize: number;
    update: (data: (string | Uint8Array | number[])) => Sha3HashInstance;
    /**
     * Returns the digest as bitArray, or `false` on misuse.
     */
    finalize: () => (number[] | false);
};
/**
 * Streaming SHA-3 / SHAKE constructor. The copy form (`new Ctor(other)`) clones
 * inner state for HMAC inner/outer caching.
 */
export type Sha3HashCtor = {
    new (other?: Sha3HashInstance): Sha3HashInstance;
};
/**
 * Submodule shape exposed by `sha3_*_hash` keys, compatible with
 * `hmac.js` / `hkdf.js` / `pbkdf2.js` dependency injection.
 */
export type Sha3StreamingModule = {
    name: string;
    fn: Sha3HashCtor;
    hash: (data: (string | Uint8Array | number[])) => (number[] | false);
};
/**
 * One-shot SHA-3 hash function: data in, digest bitArray out.
 */
export type Sha3OneShot = (data: (string | Uint8Array | number[])) => number[];
/**
 * SHAKE extendable-output function: data + requested output bit-length.
 * Returns the digest bitArray, or `false` when `outBits` is invalid.
 */
export type ShakeXof = (data: (string | Uint8Array | number[]), outBits: number) => (number[] | false);
/**
 * Public shape returned by `sha3.factory()`.
 */
export type Sha3API = {
    /**
     * One-shot SHA3-224 (digest as bitArray).
     */
    sha3_224: Sha3OneShot;
    /**
     * One-shot SHA3-256 (digest as bitArray).
     */
    sha3_256: Sha3OneShot;
    /**
     * One-shot SHA3-384 (digest as bitArray).
     */
    sha3_384: Sha3OneShot;
    /**
     * One-shot SHA3-512 (digest as bitArray).
     */
    sha3_512: Sha3OneShot;
    /**
     * SHAKE128 XOF (variable-length output).
     */
    shake128: ShakeXof;
    /**
     * SHAKE256 XOF (variable-length output).
     */
    shake256: ShakeXof;
    /**
     * HMAC/HKDF/PBKDF2-compatible module.
     */
    sha3_224_hash: Sha3StreamingModule;
    /**
     * HMAC/HKDF/PBKDF2-compatible module.
     */
    sha3_256_hash: Sha3StreamingModule;
    /**
     * HMAC/HKDF/PBKDF2-compatible module.
     */
    sha3_384_hash: Sha3StreamingModule;
    /**
     * HMAC/HKDF/PBKDF2-compatible module.
     */
    sha3_512_hash: Sha3StreamingModule;
};
//# sourceMappingURL=sha3.d.ts.map