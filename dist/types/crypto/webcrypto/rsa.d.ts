/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace webcryptoRsa {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {WebcryptoRsaAPI} */
    function factory(): WebcryptoRsaAPI;
}
/**
 * Object returned by `webcryptoRsa.factory()`.
 */
export type WebcryptoRsaAPI = {
    /**
     * Whether `crypto.subtle` is present.
     */
    isAvailable: () => boolean;
    /**
     *   Generate an RSA keypair for the given scheme.
     */
    generateKey: (scheme: "OAEP" | "PSS" | "PKCS1", modulusBits?: number, hash?: string, extractable?: boolean) => Promise<CryptoKeyPair | false>;
    /**
     *   RSA-OAEP encrypt (OAEP keys only).
     */
    encrypt: (publicKey: CryptoKey, data: Uint8Array, label?: Uint8Array) => Promise<Uint8Array | false>;
    /**
     *   RSA-OAEP decrypt (OAEP keys only).
     */
    decrypt: (privateKey: CryptoKey, ct: Uint8Array, label?: Uint8Array) => Promise<Uint8Array | false>;
    /**
     *   RSA-PSS or RSASSA-PKCS1-v1_5 sign, dispatched by key algorithm.
     */
    sign: (privateKey: CryptoKey, data: Uint8Array, saltLengthBytes?: number) => Promise<Uint8Array | false>;
    /**
     *   RSA-PSS or RSASSA-PKCS1-v1_5 verify, dispatched by key algorithm.
     */
    verify: (publicKey: CryptoKey, signature: Uint8Array, data: Uint8Array, saltLengthBytes?: number) => Promise<boolean>;
    /**
     *   Import a key in DER (spki/pkcs8) or JWK form.
     */
    importKey: (format: "spki" | "pkcs8" | "jwk", keyData: Uint8Array | object, scheme: "OAEP" | "PSS" | "PKCS1", hash: string, usages: string[], extractable?: boolean) => Promise<CryptoKey | false>;
    /**
     *   Export a key; DER formats wrapped as `Uint8Array`, `jwk` returned as object.
     */
    exportKey: (format: "spki" | "pkcs8" | "jwk", key: CryptoKey) => Promise<Uint8Array | object | false>;
};
//# sourceMappingURL=rsa.d.ts.map