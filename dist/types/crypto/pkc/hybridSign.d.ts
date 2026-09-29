/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace hybridSign {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: ({
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
            factory(): HexAPI;
        } | {
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
            deps: {
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
            }[];
            factory(sha512: any): Sha384API;
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
        factory(bitArray: any, hex: any, bn: any, sha256: any, sha384: any, sha512: any, hmac: any): EccApi;
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
                factory(): Utf8API;
            })[];
            factory(bitArray: any, utf8: any): Sha512API;
        })[];
        factory(sha512: any, bitArray: any): Ed25519API;
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
        factory(sha3: any, bitArray: any, random: any): MlDsaAPI;
    })[];
    /**
     * @param {*} ml_dsa
     * @param {*} ed25519
     * @param {*} ecc
     * @param {*} sha512
     * @param {*} sha256
     * @param {*} random
     * @param {*} utf8
     * @returns {HybridSignApi}
     */
    function factory(ml_dsa: any, ed25519: any, ecc: any, sha512: any, sha256: any, random: any, utf8: any): HybridSignApi;
}
/**
 * One composite-signature variant.
 */
export type HybridSignVariant = {
    /**
     * Component and container byte lengths.
     */
    lengths: object;
    /**
     *   Generate a composite key pair (independent per-component seeds). TLV-encoded.
     */
    keygen: () => ({
        publicKey: Uint8Array;
        secretKey: Uint8Array;
    } | false);
    /**
     *   Composite sign; `false` on invalid input.
     */
    sign: (secretKey: Uint8Array, message: Uint8Array, ctx?: Uint8Array) => (Uint8Array | false);
    /**
     *   Composite verify (AND of both components); `false` on any invalid input.
     */
    verify: (publicKey: Uint8Array, message: Uint8Array, signature: Uint8Array, ctx?: Uint8Array) => boolean;
};
/**
 * Public surface of `hybridSign.factory(...)`.
 */
export type HybridSignApi = {
    /**
     * ML-DSA-65 ∧ Ed25519.
     */
    mldsa65_ed25519: HybridSignVariant;
    /**
     * ML-DSA-65 ∧ ECDSA-P-256.
     */
    mldsa65_ecdsaP256: HybridSignVariant;
    /**
     * Test-only escape hatch.
     */
    _internal: object;
};
//# sourceMappingURL=hybridSign.d.ts.map