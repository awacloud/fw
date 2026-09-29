/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace webcryptoX25519 {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {WebcryptoX25519API} */
    function factory(): WebcryptoX25519API;
}
/**
 * Object returned by `webcryptoX25519.factory()`.
 */
export type WebcryptoX25519API = {
    /**
     * Whether `crypto.subtle` is present.
     */
    isAvailable: () => boolean;
    /**
     *   Generate an X25519 key pair.
     */
    generateKey: (extractable?: boolean) => Promise<CryptoKeyPair | false>;
    /**
     *   Derive raw shared-secret bytes (default 256 bits = 32 bytes).
     */
    deriveBits: (privateKey: CryptoKey, publicKey: CryptoKey, lengthBits?: number) => Promise<Uint8Array | false>;
    /**
     *   Derive a symmetric `CryptoKey` from the X25519 shared secret.
     */
    deriveKey: (privateKey: CryptoKey, publicKey: CryptoKey, derivedKeyAlg: object, usages: string[], extractable?: boolean) => Promise<CryptoKey | false>;
    /**
     *   Import an X25519 key.
     */
    importKey: (format: "raw" | "spki" | "pkcs8" | "jwk", keyData: Uint8Array | object, usages: string[], extractable?: boolean) => Promise<CryptoKey | false>;
    /**
     *   Export an X25519 key; DER/raw → `Uint8Array`, `jwk` → object.
     */
    exportKey: (format: "raw" | "spki" | "pkcs8" | "jwk", key: CryptoKey) => Promise<Uint8Array | object | false>;
};
//# sourceMappingURL=x25519.d.ts.map