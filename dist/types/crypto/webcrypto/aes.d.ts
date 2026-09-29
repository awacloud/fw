/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace webcryptoAes {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {WebcryptoAesAPI} */
    function factory(): WebcryptoAesAPI;
}
/**
 * Object returned by `webcryptoAes.factory()`.
 */
export type WebcryptoAesAPI = {
    /**
     * Whether `crypto.subtle` is present.
     */
    isAvailable: () => boolean;
    /**
     *   Generate a random AES key.
     */
    generateKey: (mode: "GCM" | "CBC" | "CTR", lengthBits?: 128 | 192 | 256, extractable?: boolean) => Promise<CryptoKey | false>;
    /**
     *   Import raw key bytes as a `CryptoKey`.
     */
    importKey: (raw: Uint8Array, mode: "GCM" | "CBC" | "CTR", extractable?: boolean) => Promise<CryptoKey | false>;
    /**
     *   Export a `CryptoKey` to raw bytes.
     */
    exportKey: (key: CryptoKey) => Promise<Uint8Array | false>;
    /**
     *   AES-GCM encrypt; output is `ciphertext || tag`.
     */
    encryptGcm: (key: CryptoKey, iv: Uint8Array, plaintext: Uint8Array, aad?: Uint8Array, tagBits?: number) => Promise<Uint8Array | false>;
    /**
     *   AES-GCM decrypt; auth failure resolves `false`.
     */
    decryptGcm: (key: CryptoKey, iv: Uint8Array, ctWithTag: Uint8Array, aad?: Uint8Array, tagBits?: number) => Promise<Uint8Array | false>;
    /**
     *   AES-CBC encrypt (PKCS#7 padding applied by the platform). `iv` must be 16 bytes.
     */
    encryptCbc: (key: CryptoKey, iv: Uint8Array, plaintext: Uint8Array) => Promise<Uint8Array | false>;
    /**
     *   AES-CBC decrypt. `iv` must be 16 bytes.
     */
    decryptCbc: (key: CryptoKey, iv: Uint8Array, ciphertext: Uint8Array) => Promise<Uint8Array | false>;
    /**
     *   AES-CTR encrypt. `counter` must be 16 bytes.
     */
    encryptCtr: (key: CryptoKey, counter: Uint8Array, counterBits: number, data: Uint8Array) => Promise<Uint8Array | false>;
    /**
     *   AES-CTR decrypt. `counter` must be 16 bytes.
     */
    decryptCtr: (key: CryptoKey, counter: Uint8Array, counterBits: number, data: Uint8Array) => Promise<Uint8Array | false>;
};
//# sourceMappingURL=aes.d.ts.map