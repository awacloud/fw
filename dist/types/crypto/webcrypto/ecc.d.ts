/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace webcryptoEcc {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {WebcryptoEccAPI} */
    function factory(): WebcryptoEccAPI;
}
/**
 * Object returned by `webcryptoEcc.factory()`.
 */
export type WebcryptoEccAPI = {
    /**
     * Whether `crypto.subtle` is present.
     */
    isAvailable: () => boolean;
    /**
     *   Generate an ECDSA or ECDH key pair on the given curve.
     */
    generateKey: (kind: "ECDSA" | "ECDH", curve?: "P-256" | "P-384" | "P-521", extractable?: boolean) => Promise<CryptoKeyPair | false>;
    /**
     *   ECDSA sign — raw IEEE P1363 `r||s` output. ECDH key → `false`.
     */
    sign: (privateKey: CryptoKey, data: Uint8Array, hash?: "SHA-256" | "SHA-384" | "SHA-512") => Promise<Uint8Array | false>;
    /**
     *   ECDSA verify of a raw `r||s` signature. Resolves `false` on error.
     */
    verify: (publicKey: CryptoKey, signature: Uint8Array, data: Uint8Array, hash?: "SHA-256" | "SHA-384" | "SHA-512") => Promise<boolean>;
    /**
     *   ECDH shared-secret derivation. ECDSA key → `false`.
     */
    deriveBits: (privateKey: CryptoKey, publicKey: CryptoKey, lengthBits: number) => Promise<Uint8Array | false>;
    /**
     *   ECDH key derivation into a symmetric `CryptoKey`. ECDSA key → `false`.
     */
    deriveKey: (privateKey: CryptoKey, publicKey: CryptoKey, derivedKeyAlg: object, usages: string[], extractable?: boolean) => Promise<CryptoKey | false>;
    /**
     *   Import a key from raw/SPKI/PKCS8/JWK.
     */
    importKey: (format: "raw" | "spki" | "pkcs8" | "jwk", keyData: Uint8Array | object, kind: "ECDSA" | "ECDH", curve: "P-256" | "P-384" | "P-521", usages: string[], extractable?: boolean) => Promise<CryptoKey | false>;
    /**
     *   Export a key; DER/raw → `Uint8Array`, `jwk` → object.
     */
    exportKey: (format: "raw" | "spki" | "pkcs8" | "jwk", key: CryptoKey) => Promise<Uint8Array | object | false>;
};
//# sourceMappingURL=ecc.d.ts.map