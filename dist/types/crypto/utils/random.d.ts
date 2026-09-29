/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace random {
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
        factory(): AesAPI;
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
    /** @returns {RandomAPI} */
    function factory(bitArray: any, aes: any, sha256: any): RandomAPI;
}
export type TypedArray = Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | BigInt64Array | BigUint64Array;
/**
 * Low-level CTR_DRBG instance produced by the internal `_makeDrbg` factory
 * (exposed via `_internal.makeDrbg`). Caller drives the full SP 800-90A
 * lifecycle manually with explicit seed material.
 */
export type DrbgCore = {
    /**
     * Seed the DRBG.
     */
    instantiate: (entropyBytes: Uint8Array, personalisationBytes?: Uint8Array, nonceBytes?: Uint8Array) => boolean;
    /**
     * Reseed with caller-supplied entropy.
     */
    reseed: (entropyBytes: Uint8Array, additionalInputBytes?: Uint8Array) => boolean;
    /**
     * Produce `n` random bytes.
     */
    generate: (n: number, additionalInputBytes?: Uint8Array) => (Uint8Array | false);
    /**
     * Wipe internal state.
     */
    uninstantiate: () => void;
    /**
     * Whether the DRBG has been instantiated (getter).
     */
    isLive: boolean;
    /**
     * Current reseed counter (getter).
     */
    reseedCounter: number;
    /**
     * Security strength in bits (getter).
     */
    securityStrength: number;
    /**
     * Configured AES key size in bits (getter).
     */
    aesKeyBits: number;
    /**
     * Whether a derivation function is used (getter).
     */
    useDf: boolean;
    /**
     * Seed length in bytes (getter).
     */
    seedBytes: number;
};
/**
 * High-level CTR_DRBG instance returned by `api.drbg(options)`. Auto-seeds
 * from OS entropy and supports mixing in pending additional input.
 */
export type Drbg = {
    /**
     * Produce `n` random bytes, folding in any pending additional input.
     */
    generate: (n: number, additionalInput?: Uint8Array) => (Uint8Array | false);
    /**
     * Reseed with fresh OS entropy.
     */
    reseed: (additionalInput?: Uint8Array) => boolean;
    /**
     * Buffer entropy for the next `generate()`/`reseed()`.
     */
    addAdditionalInput: (bytes: Uint8Array | number[] | Uint32Array | number) => boolean;
    /**
     * Wipe internal state and pending buffer.
     */
    uninstantiate: () => void;
    /**
     * Whether the DRBG is live (getter).
     */
    isLive: boolean;
    /**
     * Current reseed counter (getter).
     */
    reseedCounter: number;
    /**
     * Security strength in bits (getter).
     */
    securityStrength: number;
};
/**
 * SP 800-90B continuous health-test surface.
 */
export type RandomHealth = {
    /**
     * Push bytes through RCT + APT; `false` on failure.
     */
    feed: (buf: Uint8Array | number[]) => boolean;
    /**
     * Clear state and the latched-dead flag.
     */
    reset: () => void;
    /**
     * True once any continuous test has failed (getter).
     */
    isDead: boolean;
};
/**
 * Public shape returned by `random.factory()`.
 */
export type RandomAPI = {
    /**
     * Fill a typed array in place with secure random values.
     */
    fill: <T extends TypedArray>(array: T) => T;
    /**
     * Secure random float in `[0, 1)`.
     */
    float: () => (number | false);
    /**
     * Secure random integer in `[min, max]` (rejection-sampled).
     */
    int: (min: number, max: number) => (number | false);
    /**
     * `n` random bytes (direct OS RBG).
     */
    bytes: (n: number) => (Uint8Array | false);
    /**
     * `n` random 32-bit words (direct OS RBG).
     */
    words: (n: number) => (number[] | false);
    /**
     * Random bit array of `n` bits (direct OS RBG).
     */
    bits: (n: number) => (number[] | false);
    /**
     * Whether `crypto.getRandomValues` is available.
     */
    isReady: () => boolean;
    /**
     * Run / re-run the CTR_DRBG power-on self-test.
     */
    selfTest: () => boolean;
    /**
     * Test-only internal CTR_DRBG factory.
     */
    _internal: {
        makeDrbg: (opts?: {
            aesKeyBits?: 128 | 192 | 256;
            df?: boolean;
        }) => (DrbgCore | false);
    };
    /**
     * Continuous health-test surface.
     */
    health: RandomHealth;
    /**
     * Build a fresh CTR_DRBG-AES-256 (no-df) instance.
     */
    drbg: (options?: {
        aesKeyBits?: 128 | 192 | 256;
        df?: boolean;
        personalisation?: Uint8Array;
    }) => (Drbg | false);
};
//# sourceMappingURL=random.d.ts.map