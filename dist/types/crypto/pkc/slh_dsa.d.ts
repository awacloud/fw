/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace slh_dsa {
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
        factory(bitArray: any, utf8: any): Sha256API;
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
        factory(bitArray: any, aes: any, sha256: any): RandomAPI;
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
        factory(bitArray: any, utf8: any): Sha3API;
    })[];
    /** @returns {SlhDsaAPI} */
    function factory(sha3: any, sha256: any, sha512: any, hmac: any, bitArray: any, random: any): SlhDsaAPI;
}
/**
 * Byte sizes of every artefact of an SLH-DSA parameter set.
 */
export type SlhDsaLengths = {
    /**
     * Public-key length in bytes (2*N).
     */
    publicKey: number;
    /**
     * Secret-key length in bytes.
     */
    secretKey: number;
    /**
     * Signature length in bytes.
     */
    signature: number;
    /**
     * Keygen seed length in bytes (3*N).
     */
    seed: number;
};
/**
 * Optional signing options.
 */
export type SlhDsaSignOpts = {
    /**
     * Context bytes (≤ 255).
     */
    context?: Uint8Array;
    /**
     * N-byte randomiser; `false` = deterministic.
     */
    extraEntropy?: Uint8Array | false;
};
/**
 * One SLH-DSA parameter-set / hash-family instance (one of the 12 variants).
 */
export type SlhDsaInstance = {
    /**
     * Byte sizes of every artefact.
     */
    lengths: SlhDsaLengths;
    /**
     * Generate a key pair.
     */
    keygen: (seed?: Uint8Array) => ({
        publicKey: Uint8Array;
        secretKey: Uint8Array;
    } | false);
    /**
     * Pure SLH-DSA sign.
     */
    sign: (msg: Uint8Array, sk: Uint8Array, opts?: SlhDsaSignOpts) => (Uint8Array | false);
    /**
     * Pure SLH-DSA verify.
     */
    verify: (sig: Uint8Array, msg: Uint8Array, publicKey: Uint8Array, opts?: SlhDsaSignOpts) => boolean;
    /**
     * HashSLH-DSA sign.
     */
    signPh: (msg: Uint8Array, sk: Uint8Array, hashAlg: string, hashMod: ({
        hash: Function;
    } | Function | null), opts?: SlhDsaSignOpts) => (Uint8Array | false);
    /**
     * HashSLH-DSA verify.
     */
    verifyPh: (sig: Uint8Array, msg: Uint8Array, publicKey: Uint8Array, hashAlg: string, hashMod: ({
        hash: Function;
    } | Function | null), opts?: SlhDsaSignOpts) => boolean;
    /**
     * Test-only escape hatches.
     */
    _internal: {
        signInternal: Function;
        verifyInternal: Function;
        wrapMessage: Function;
        wrapMessageHash: Function;
        computePh: Function;
    };
};
/**
 * Public API returned by `slh_dsa.factory()` - the 12 SLH-DSA signers.
 */
export type SlhDsaAPI = {
    slh_dsa_shake_128f: SlhDsaInstance;
    slh_dsa_shake_128s: SlhDsaInstance;
    slh_dsa_shake_192f: SlhDsaInstance;
    slh_dsa_shake_192s: SlhDsaInstance;
    slh_dsa_shake_256f: SlhDsaInstance;
    slh_dsa_shake_256s: SlhDsaInstance;
    slh_dsa_sha2_128f: SlhDsaInstance;
    slh_dsa_sha2_128s: SlhDsaInstance;
    slh_dsa_sha2_192f: SlhDsaInstance;
    slh_dsa_sha2_192s: SlhDsaInstance;
    slh_dsa_sha2_256f: SlhDsaInstance;
    slh_dsa_sha2_256s: SlhDsaInstance;
};
//# sourceMappingURL=slh_dsa.d.ts.map