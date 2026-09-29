/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace hybridKem {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: ({
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
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): X25519API;
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
        factory(sha3: any, bitArray: any, random: any): MlKemAPI;
    })[];
    /**
     * @param {ReturnType<typeof x25519.factory>} x25519 X25519 primitive.
     * @param {ReturnType<typeof ml_kem.factory>} ml_kem ML-KEM primitive.
     * @param {ReturnType<typeof sha3.factory>} sha3 SHA-3 / SHAKE primitive.
     * @returns {{ xwing: XwingApi }}
     */
    function factory(x25519: ReturnType<() => X25519API>, ml_kem: ReturnType<(sha3: any, bitArray: any, random: any) => MlKemAPI>, sha3: ReturnType<(bitArray: any, utf8: any) => Sha3API>): {
        xwing: XwingApi;
    };
}
/**
 * Ready-to-use X-Wing hybrid KEM over default fw primitives (lazily wired).
 * @type {XwingApi}
 */
export const xwing: XwingApi;
/**
 * X-Wing hybrid KEM API.
 */
export type XwingApi = {
    /**
     * Byte sizes.
     */
    lengths: {
        pk: number;
        sk: number;
        ct: number;
        ss: number;
    };
    /**
     * Generate a key pair; deterministic for a 32-byte seed.
     */
    keygen: (seed?: Uint8Array) => ({
        publicKey: Uint8Array;
        secretKey: Uint8Array;
    } | false);
    /**
     * Encapsulate; deterministic for 64-byte randomness (msg32 || eskX32).
     */
    encapsulate: (publicKey: Uint8Array, randomness?: Uint8Array) => ({
        cipherText: Uint8Array;
        sharedSecret: Uint8Array;
    } | false);
    /**
     * Decapsulate to the 32-byte shared secret.
     */
    decapsulate: (cipherText: Uint8Array, secretKey: Uint8Array) => (Uint8Array | false);
};
//# sourceMappingURL=hybridKem.d.ts.map