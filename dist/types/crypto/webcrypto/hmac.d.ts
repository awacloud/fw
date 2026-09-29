/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace webcryptoHmac {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {WebcryptoHmacAPI} */
    function factory(): WebcryptoHmacAPI;
}
/**
 * Object returned by `webcryptoHmac.factory()`.
 */
export type WebcryptoHmacAPI = {
    /**
     * Whether `crypto.subtle` is present.
     */
    isAvailable: () => boolean;
    /**
     *   Import a raw key for HMAC under the given hash.
     */
    importKey: (rawKey: Uint8Array, hash?: string, extractable?: boolean) => Promise<CryptoKey | false>;
    /**
     *   Generate a random HMAC key under the given hash.
     */
    generateKey: (hash?: string, lengthBits?: number, extractable?: boolean) => Promise<CryptoKey | false>;
    /**
     *   Compute HMAC tag over `data` with `key`.
     */
    sign: (key: CryptoKey, data: Uint8Array) => Promise<Uint8Array | false>;
    /**
     *   Verify an HMAC tag; constant-time per platform guarantee.
     */
    verify: (key: CryptoKey, signature: Uint8Array, data: Uint8Array) => Promise<boolean>;
    /**
     *   One-shot: import key then sign.
     */
    mac: (rawKey: Uint8Array, data: Uint8Array, hash?: string) => Promise<Uint8Array | false>;
};
//# sourceMappingURL=hmac.d.ts.map