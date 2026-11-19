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
    verify: (publicKey: Uint8Array, signature: Uint8Array, message: Uint8Array, ctx?: Uint8Array) => boolean;
    /**
     *   Build this variant's public key, secret key or signature container from
     *   its two components; `false` on a wrong length or form.
     */
    fromComponents: (kind: CompositeKind, parts: CompositeParts) => (Uint8Array | false);
    /**
     *   Split a container into its two components (copies); `false` when it does
     *   not decode.
     */
    toComponents: (kind: CompositeKind, bytes: Uint8Array) => (CompositeParts | false);
};
/**
 * Which container `fromComponents` / `toComponents` handle.
 */
export type CompositeKind = "publicKey" | "secretKey" | "signature";
/**
 * The two components of a composite container: `pq` = the ML-DSA-65 bytes,
 * `trad` = the traditional component — Ed25519 (public key 32, secret key 64 =
 * seed || public key, signature 64) or ECDSA-P256 (public key SEC1
 * uncompressed 65 bytes, secret key the 32-byte scalar, signature DER).
 */
export type CompositeParts = {
    pq: Uint8Array;
    trad: Uint8Array;
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
};
//# sourceMappingURL=hybridSign.d.ts.map