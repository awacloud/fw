/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace ml_dsa {
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
        })[];
        factory(bitArray: any, utf8: any): Sha3API;
    })[];
    /** @returns {MlDsaAPI} */
    function factory(sha3: any, bitArray: any, random: any): MlDsaAPI;
}
/**
 * Byte sizes of every artefact of an ML-DSA parameter set.
 */
export type MlDsaLengths = {
    /**
     * Public-key length in bytes.
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
     * Keygen seed length (32).
     */
    seed: number;
};
/**
 * One ML-DSA parameter-set instance (44 / 65 / 87).
 */
export type MlDsaInstance = {
    /**
     * Byte sizes of every artefact.
     */
    lengths: MlDsaLengths;
    /**
     * Generate a key pair (deterministic for a 32-byte seed).
     */
    keygen: (seed?: Uint8Array) => ({
        publicKey: Uint8Array;
        secretKey: Uint8Array;
    } | false);
    /**
     * Pure ML-DSA sign.
     */
    sign: (msg: Uint8Array, secretKey: Uint8Array, ctx?: Uint8Array, rnd?: Uint8Array) => (Uint8Array | false);
    /**
     * Pure ML-DSA verify.
     */
    verify: (sig: Uint8Array, msg: Uint8Array, publicKey: Uint8Array, ctx?: Uint8Array) => boolean;
    /**
     * HashML-DSA sign.
     */
    signPh: (msg: Uint8Array, secretKey: Uint8Array, hashAlg: string, hashMod: ({
        hash: Function;
        shake?: Function;
    } | Function | null), ctx?: Uint8Array, rnd?: Uint8Array) => (Uint8Array | false);
    /**
     * HashML-DSA verify.
     */
    verifyPh: (sig: Uint8Array, msg: Uint8Array, publicKey: Uint8Array, hashAlg: string, hashMod: ({
        hash: Function;
        shake?: Function;
    } | Function | null), ctx?: Uint8Array) => boolean;
    /**
     * Test-only escape hatches.
     */
    _internal: {
        signInternal: Function;
        verifyInternal: Function;
        signWithMu: Function;
        verifyWithMu: Function;
        wrapMessage: Function;
        wrapMessageHash: Function;
        computePh: Function;
    };
};
/**
 * Public API returned by `ml_dsa.factory()`.
 */
export type MlDsaAPI = {
    /**
     * ML-DSA-44 instance.
     */
    ml_dsa44: MlDsaInstance;
    /**
     * ML-DSA-65 instance.
     */
    ml_dsa65: MlDsaInstance;
    /**
     * ML-DSA-87 instance.
     */
    ml_dsa87: MlDsaInstance;
    /**
     * Test-only NTT.
     */
    _ntt: (f: Int32Array) => Int32Array;
    /**
     * Test-only inverse NTT.
     */
    _nttInv: (f: Int32Array) => Int32Array;
};
//# sourceMappingURL=ml_dsa.d.ts.map