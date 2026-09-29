/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace webcryptoAesKw {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {WebcryptoAesKwAPI} */
    function factory(): WebcryptoAesKwAPI;
}
/**
 * Object returned by `webcryptoAesKw.factory()`.
 */
export type WebcryptoAesKwAPI = {
    /**
     * Whether `crypto.subtle` is present.
     */
    isAvailable: () => boolean;
    /**
     *   Generate a new AES-KW KEK.
     */
    generateKek: (lengthBits?: 128 | 192 | 256, extractable?: boolean) => Promise<CryptoKey | false>;
    /**
     *   Import raw key bytes as an AES-KW KEK.
     */
    importKek: (raw: Uint8Array, extractable?: boolean) => Promise<CryptoKey | false>;
    /**
     *   Wrap a CryptoKey (must be extractable) with a KEK; returns the wrapped bytes.
     */
    wrapKey: (kek: CryptoKey, keyToWrap: CryptoKey) => Promise<Uint8Array | false>;
    /**
     *   Unwrap previously wrapped bytes back to a CryptoKey; resolves `false` on
     *   integrity failure or any subtle error.
     */
    unwrapKey: (kek: CryptoKey, wrapped: Uint8Array, unwrappedKeyAlg: object, usages: KeyUsage[], extractable?: boolean) => Promise<CryptoKey | false>;
};
//# sourceMappingURL=aeskw.d.ts.map