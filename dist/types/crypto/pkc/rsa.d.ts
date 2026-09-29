/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace rsa {
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
    /** @returns {RsaAPI} */
    function factory(bitArray: any, bn: any, random: any): RsaAPI;
}
/**
 * RSA public key.
 */
export type RsaPublicKey = {
    n: Uint8Array;
    e: Uint8Array;
};
/**
 * RSA private key (CRT fields optional; present → CRT fast path).
 */
export type RsaPrivateKey = {
    n: Uint8Array;
    e?: Uint8Array;
    d: Uint8Array;
    p?: Uint8Array;
    q?: Uint8Array;
    dp?: Uint8Array;
    dq?: Uint8Array;
    qInv?: Uint8Array;
};
/**
 * Public API returned by `rsa.factory()`.
 */
export type RsaAPI = {
    /**
     * RSAES-OAEP encrypt.
     */
    oaepEncrypt: (pub: RsaPublicKey, msg: Uint8Array, hashMod: object, label?: Uint8Array, seed?: Uint8Array) => (Uint8Array | false);
    /**
     * RSAES-OAEP decrypt.
     */
    oaepDecrypt: (priv: RsaPrivateKey, ct: Uint8Array, hashMod: object, label?: Uint8Array) => (Uint8Array | false);
    /**
     * RSASSA-PSS sign.
     */
    pssSign: (priv: RsaPrivateKey, msg: Uint8Array, hashMod: object, sLen?: number, salt?: Uint8Array) => (Uint8Array | false);
    /**
     * RSASSA-PSS verify.
     */
    pssVerify: (pub: RsaPublicKey, msg: Uint8Array, sig: Uint8Array, hashMod: object, sLen?: number) => boolean;
    /**
     * Deprecated; always rejects.
     */
    pkcs1v15Sign: () => false;
    /**
     * Deprecated; always rejects.
     */
    pkcs1v15Verify: () => false;
    /**
     * Deprecated/unsafe; always rejects.
     */
    pkcs1v15Encrypt: () => false;
    /**
     * Deprecated/unsafe; always rejects.
     */
    pkcs1v15Decrypt: () => false;
    /**
     * KAT-test-only primitives.
     */
    _internal: {
        rsaep: Function;
        rsadp: Function;
        mgf1: Function;
    };
};
//# sourceMappingURL=rsa.d.ts.map