/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace x509 {
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
        dependencies: any[];
        factory(): Asn1API;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): Base64API;
        }[];
        factory(b64: any): PemAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): Asn1API;
        }[];
        factory(asn1: any): KeyformatAPI;
    })[];
    /** @returns {X509API} */
    function factory(asn1: any, keyformat: any, pem: any, ed25519: any, ecc: any, sha256: any, bitArray: any): X509API;
}
/**
 * A subject or issuer name: known attributes by short name; an attribute fw
 * does not name appears under its dotted OID, and a repeated one as an array.
 */
export type X509Name = Record<string, string | string[]>;
/**
 * Ed25519: the 32-byte key. ECDSA-P256: the 65-byte SEC1 uncompressed point.
 */
export type X509PublicKey = {
    alg: "Ed25519";
    key: Uint8Array;
} | {
    alg: "ECDSA-P256";
    key: Uint8Array;
};
/**
 * Ed25519: the 64-byte private key (seed ‖ public key, as `ed25519.keyPair`
 * returns it). ECDSA-P256: the 32-byte scalar. `publicKey` is the issuer's
 * key, needed for `authorityKeyIdentifier`.
 */
export type X509Signer = {
    alg: "Ed25519";
    privateKey: Uint8Array;
    publicKey?: Uint8Array;
} | {
    alg: "ECDSA-P256";
    privateKey: Uint8Array;
    publicKey?: Uint8Array;
};
export type X509Extensions = {
    /**
     * Critical. `pathLen` only with `ca`.
     */
    basicConstraints?: {
        ca: boolean;
        pathLen?: number;
    };
    /**
     * Critical. Names: digitalSignature, nonRepudiation, keyEncipherment,
     * dataEncipherment, keyAgreement, keyCertSign, cRLSign, encipherOnly, decipherOnly.
     */
    keyUsage?: string[];
    /**
     * Dotted OIDs (e.g. `1.3.6.1.5.5.7.3.1` serverAuth).
     */
    extKeyUsage?: string[];
    /**
     * ASCII values.
     */
    subjectAltName?: {
        dns?: string[];
        email?: string[];
    };
    subjectKeyIdentifier?: boolean;
    /**
     * Needs the issuer key (`signer.publicKey`, or the subject key when self-signed).
     */
    authorityKeyIdentifier?: boolean;
};
export type X509Spec = {
    /**
     * `{ CN, O, OU, L, ST, C }`, at least one; `C` two upper-case letters.
     */
    subject: Record<string, string>;
    /**
     * Defaults to `subject`.
     */
    issuer?: Record<string, string>;
    /**
     * Unsigned big-endian, positive, at most 20 encoded octets.
     */
    serial: Uint8Array;
    notBefore: Date;
    /**
     * Later than `notBefore`.
     */
    notAfter: Date;
    /**
     * The certified key.
     */
    publicKey: X509PublicKey;
    extensions?: X509Extensions;
};
export type X509Parsed = {
    /**
     * 1, 2 or 3.
     */
    version: number;
    /**
     * Unsigned big-endian.
     */
    serial: Uint8Array;
    /**
     * `'Ed25519'`, `'ECDSA-SHA256'` or the dotted OID.
     */
    signatureAlgorithm: string;
    issuer: X509Name;
    subject: X509Name;
    notBefore: Date;
    notAfter: Date;
    publicKey: X509PublicKey | {
        alg: string;
        key: null;
        spki: Uint8Array;
    };
    /**
     * The six known ones decoded (each with `critical`), the rest in `other`.
     */
    extensions: object;
    /**
     * The signed TBSCertificate bytes.
     */
    tbs: Uint8Array;
    signature: Uint8Array;
};
/**
 * Public surface of `x509.factory()`.
 */
export type X509API = {
    /**
     * Build and sign a certificate (DER).
     */
    create: (spec: X509Spec, signer: X509Signer) => (Uint8Array | false);
    /**
     * Read a certificate.
     */
    parse: (der: Uint8Array) => (X509Parsed | false);
    /**
     * Check the certificate's signature.
     */
    verify: (der: Uint8Array, issuerPublicKey: X509PublicKey) => boolean;
    /**
     * PEM `CERTIFICATE` block.
     */
    toPem: (der: Uint8Array) => string;
    /**
     * DER of the first `CERTIFICATE` block.
     */
    fromPem: (text: string) => (Uint8Array | false);
};
//# sourceMappingURL=x509.d.ts.map