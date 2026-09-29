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
};
//# sourceMappingURL=keyformat.d.ts.map