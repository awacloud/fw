/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace keyformat {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Asn1API;
    }[];
    /** @returns {KeyformatAPI} */
    function factory(asn1: any): KeyformatAPI;
}
export type EdwardsPrivateKeyDecoded = {
    oid: string;
    seed: Uint8Array;
};
export type EdwardsPublicKeyDecoded = {
    oid: string;
    publicKey: Uint8Array;
};
export type EcSec1Decoded = {
    d: Uint8Array;
    curveOid?: string;
    publicKey?: Uint8Array;
};
export type EcPkcs8Decoded = {
    curveOid: string;
    d: Uint8Array;
    publicKey?: Uint8Array;
};
export type EcSpkiDecoded = {
    curveOid: string;
    point: Uint8Array;
};
/**
 * Unsigned big-endian integers (the shape `pkc/rsa.js` takes).
 */
export type RsaPublicKeyParts = {
    n: Uint8Array;
    e: Uint8Array;
};
/**
 * A two-prime RSA private key, every integer unsigned big-endian.
 */
export type RsaPrivateKeyParts = {
    n: Uint8Array;
    e: Uint8Array;
    d: Uint8Array;
    p: Uint8Array;
    q: Uint8Array;
    dp: Uint8Array;
    dq: Uint8Array;
    qInv: Uint8Array;
};
/**
 * Public shape returned by `keyformat.factory()`.
 */
export type KeyformatAPI = {
    /**
     * Algorithm/curve OID constants.
     */
    OID: {
        ED25519: string;
        X25519: string;
        EC_PUBKEY: string;
        P256: string;
        P384: string;
        P521: string;
        RSA: string;
    };
    /**
     * Wrap a raw seed as a PKCS#8 Ed25519/X25519 private key.
     */
    encodePkcs8Edwards: (oid: string, rawSeed: Uint8Array) => (Uint8Array | false);
    /**
     * Decode a PKCS#8 Edwards private key.
     */
    decodePkcs8Edwards: (der: Uint8Array) => (EdwardsPrivateKeyDecoded | false);
    /**
     * Wrap a raw public key as an Edwards SPKI.
     */
    encodeSpkiEdwards: (oid: string, rawPub: Uint8Array) => (Uint8Array | false);
    /**
     * Decode an Edwards SPKI.
     */
    decodeSpkiEdwards: (der: Uint8Array) => (EdwardsPublicKeyDecoded | false);
    /**
     * Encode an EC private key in SEC1 form.
     */
    encodeSec1: (d: Uint8Array, pub?: Uint8Array, curveOid?: string) => (Uint8Array | false);
    /**
     * Decode a SEC1 EC private key.
     */
    decodeSec1: (der: Uint8Array) => (EcSec1Decoded | false);
    /**
     * Wrap an EC private key as PKCS#8.
     */
    encodePkcs8Ec: (curveOid: string, d: Uint8Array, pub?: Uint8Array) => (Uint8Array | false);
    /**
     * Decode a PKCS#8 EC private key.
     */
    decodePkcs8Ec: (der: Uint8Array) => (EcPkcs8Decoded | false);
    /**
     * Wrap an uncompressed EC public key as SPKI.
     */
    encodeSpkiEc: (curveOid: string, uncompressedPoint: Uint8Array) => (Uint8Array | false);
    /**
     * Decode an EC SPKI.
     */
    decodeSpkiEc: (der: Uint8Array) => (EcSpkiDecoded | false);
    /**
     * Encode a PKCS#1 `RSAPublicKey`.
     */
    encodeRsaPublicKey: (key: RsaPublicKeyParts) => (Uint8Array | false);
    /**
     * Decode a PKCS#1 `RSAPublicKey`.
     */
    decodeRsaPublicKey: (der: Uint8Array) => (RsaPublicKeyParts | false);
    /**
     * Encode a PKCS#1 `RSAPrivateKey` (version 0).
     */
    encodeRsaPrivateKey: (key: RsaPrivateKeyParts) => (Uint8Array | false);
    /**
     * Decode a two-prime PKCS#1 `RSAPrivateKey`.
     */
    decodeRsaPrivateKey: (der: Uint8Array) => (RsaPrivateKeyParts | false);
    /**
     * Wrap an RSA public key as SPKI.
     */
    encodeSpkiRsa: (key: RsaPublicKeyParts) => (Uint8Array | false);
    /**
     * Decode an RSA SPKI.
     */
    decodeSpkiRsa: (der: Uint8Array) => (RsaPublicKeyParts | false);
    /**
     * Wrap an RSA private key as PKCS#8.
     */
    encodePkcs8Rsa: (key: RsaPrivateKeyParts) => (Uint8Array | false);
    /**
     * Decode an RSA PKCS#8 private key.
     */
    decodePkcs8Rsa: (der: Uint8Array) => (RsaPrivateKeyParts | false);
};
//# sourceMappingURL=keyformat.d.ts.map