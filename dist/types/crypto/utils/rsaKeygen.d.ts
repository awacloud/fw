/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace rsaKeygen {
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
        })[];
        factory(bitArray: any, random: any): BnAPI;
    })[];
    /** @returns {RsaKeygenAPI} */
    function factory(bitArray: any, bn: any, random: any): RsaKeygenAPI;
}
/**
 * RSA key pair returned by `generate`. Every field is a big-endian `Uint8Array`.
 */
export type RsaKeyPair = {
    /**
     * Public modulus and exponent.
     */
    publicKey: {
        n: Uint8Array;
        e: Uint8Array;
    };
    /**
     * Private key with CRT parameters.
     */
    privateKey: {
        n: Uint8Array;
        e: Uint8Array;
        d: Uint8Array;
        p: Uint8Array;
        q: Uint8Array;
        dp: Uint8Array;
        dq: Uint8Array;
        qInv: Uint8Array;
    };
};
/**
 * Public shape returned by `rsaKeygen.factory()`.
 */
export type RsaKeygenAPI = {
    /**
     * Generate an RSA key pair.
     */
    generate: (options?: {
        bits?: number;
        e?: number;
        drbg?: object;
    }) => (RsaKeyPair | false);
    /**
     * Generate a probable prime (`bn` instance) coprime with `e`.
     */
    generateProbablePrime: (nbits: number, eBn: unknown, drbg: object) => (unknown | false);
    /**
     * Internal primitives exposed for KAT tests only; not API.
     */
    _internal: {
        millerRabin: Function;
        smallPrimes: number[];
        divmod: Function;
        lcm: Function;
        inverseModAny: Function;
    };
};
//# sourceMappingURL=rsaKeygen.d.ts.map