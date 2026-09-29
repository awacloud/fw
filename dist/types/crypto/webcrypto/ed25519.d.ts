/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace webcryptoEd25519 {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {WebcryptoEd25519API} */
    function factory(): WebcryptoEd25519API;
}
/**
 * Object returned by `webcryptoEd25519.factory()`.
 */
export type WebcryptoEd25519API = {
    /**
     * Whether `crypto.subtle` is present.
     */
    isAvailable: () => boolean;
    /**
     *   Generate an Ed25519 key pair; resolves `false` if the platform lacks Ed25519.
     */
    generateKey: (extractable?: boolean) => Promise<CryptoKeyPair | false>;
    /**
     *   Sign `message` with `privateKey`; resolves 64-byte `Uint8Array` or `false`.
     */
    sign: (privateKey: CryptoKey, message: Uint8Array) => Promise<Uint8Array | false>;
    /**
     *   Verify `signature` over `message` with `publicKey`; resolves `boolean` (never rejects).
     */
    verify: (publicKey: CryptoKey, signature: Uint8Array, message: Uint8Array) => Promise<boolean>;
    /**
     *   Import a key from `keyData` in the given `format`.
     */
    importKey: (format: "raw" | "spki" | "pkcs8" | "jwk", keyData: Uint8Array | object, usages: KeyUsage[], extractable?: boolean) => Promise<CryptoKey | false>;
    /**
     *   Export `key` in the given `format`; DER/raw → `Uint8Array`, jwk → object.
     */
    exportKey: (format: "raw" | "spki" | "pkcs8" | "jwk", key: CryptoKey) => Promise<Uint8Array | object | false>;
};
//# sourceMappingURL=ed25519.d.ts.map