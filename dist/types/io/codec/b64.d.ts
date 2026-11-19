/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace b64 {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /**
     * Factory function that creates Base64 encoder/decoder instance.
     *
     * @returns {Base64API} Object containing Base64 encoding/decoding methods
     *
     * @example
     * const codec = b64.factory();
     * const encoded = codec.fromBytes(new Uint8Array([65, 66, 67]));
     * console.log(encoded); // "QUJD"
     */
    function factory(): Base64API;
}
/**
 * base64url (RFC 4648 section 5): the `-` / `_` alphabet, no padding.
 */
export type Base64UrlAPI = {
    /**
     * Encode, without padding.
     */
    fromBytes: (bytes: Uint8Array | number[]) => string;
    /**
     * Decode the canonical
     * unpadded form only: `false` for any other character, a length of 1 mod 4,
     * or non-zero unused bits in the last character (sections 3.5 and 5), so one
     * byte string has exactly one accepted spelling.
     */
    toBytes: (str: string) => (Uint8Array | false);
    /**
     * `true` when `toBytes` accepts `str`.
     */
    test: (str: string) => boolean;
};
export type Base64API = {
    fromBytes: (bytes: Uint8Array | number[]) => string;
    toBytes: (str: string) => Uint8Array;
    test: (str: string) => boolean;
    /**
     * The base64url codec.
     */
    url: Base64UrlAPI;
};
//# sourceMappingURL=b64.d.ts.map