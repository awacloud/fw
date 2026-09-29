/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace ml_kem {
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
    /** @returns {MlKemAPI} */
    function factory(sha3: any, bitArray: any, random: any): MlKemAPI;
}
/**
 * Byte sizes of every artefact of an ML-KEM parameter set.
 */
export type MlKemLengths = {
    /**
     * Encapsulation-key length in bytes.
     */
    publicKey: number;
    /**
     * Decapsulation-key length in bytes.
     */
    secretKey: number;
    /**
     * Ciphertext length in bytes.
     */
    cipherText: number;
    /**
     * Shared-secret length (32).
     */
    sharedSecret: number;
    /**
     * Keygen seed length (64).
     */
    seed: number;
    /**
     * Encapsulation message length (32).
     */
    msg: number;
};
/**
 * One ML-KEM parameter-set instance (512 / 768 / 1024).
 */
export type MlKemInstance = {
    /**
     * Byte sizes of every artefact.
     */
    lengths: MlKemLengths;
    /**
     * Generate a key pair (deterministic for a 64-byte seed).
     */
    keygen: (seed?: Uint8Array) => ({
        publicKey: Uint8Array;
        secretKey: Uint8Array;
    } | false);
    /**
     * Encapsulate to a public key.
     */
    encapsulate: (publicKey: Uint8Array, msg?: Uint8Array) => ({
        cipherText: Uint8Array;
        sharedSecret: Uint8Array;
    } | false);
    /**
     * Decapsulate; 32-byte shared secret.
     */
    decapsulate: (cipherText: Uint8Array, secretKey: Uint8Array) => (Uint8Array | false);
    /**
     * Validation helpers.
     */
    _internal: {
        isValidEncapsulationKey: (ek: Uint8Array) => boolean;
        isValidDecapsulationKey: (dk: Uint8Array) => boolean;
    };
};
/**
 * Public API returned by `ml_kem.factory()`.
 */
export type MlKemAPI = {
    /**
     * ML-KEM-512 instance.
     */
    ml_kem512: MlKemInstance;
    /**
     * ML-KEM-768 instance.
     */
    ml_kem768: MlKemInstance;
    /**
     * ML-KEM-1024 instance.
     */
    ml_kem1024: MlKemInstance;
    /**
     * Test-only NTT.
     */
    _ntt: (f: Uint16Array) => Uint16Array;
    /**
     * Test-only inverse NTT.
     */
    _nttInv: (f: Uint16Array) => Uint16Array;
    /**
     * Test-only pointwise product.
     */
    _multiplyNTTs: (out: Uint16Array, a: Uint16Array, b: Uint16Array) => Uint16Array;
    /**
     * Test-only CBD sampler.
     */
    _sampleCBD: (prfBytes: Uint8Array, eta: number) => Uint16Array;
    /**
     * Test-only NTT sampler.
     */
    _sampleNTT: (rho: Uint8Array, j: number, i: number) => Uint16Array;
    /**
     * Test-only encoder.
     */
    _byteEncode: (poly: Uint16Array, d: number) => Uint8Array;
    /**
     * Test-only decoder.
     */
    _byteDecode: (bytes: Uint8Array, d: number) => Uint16Array;
    /**
     * Test-only compress.
     */
    _compress: (x: number, d: number) => number;
    /**
     * Test-only decompress.
     */
    _decompress: (y: number, d: number) => number;
};
//# sourceMappingURL=ml_kem.d.ts.map