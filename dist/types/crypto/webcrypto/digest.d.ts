/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace webcryptoDigest {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {WebcryptoDigestAPI} */
    function factory(): WebcryptoDigestAPI;
}
/**
 * Object returned by `webcryptoDigest.factory()`.
 */
export type WebcryptoDigestAPI = {
    /**
     * Whether `crypto.subtle` is present.
     */
    isAvailable: () => boolean;
    /**
     *   Hash `data` with `algorithm`; resolves `false` on error or unsupported algorithm.
     */
    digest: (algorithm: "SHA-1" | "SHA-256" | "SHA-384" | "SHA-512", data: Uint8Array) => Promise<Uint8Array | false>;
    /**
     * SHA-256 shorthand.
     */
    sha256: (data: Uint8Array) => Promise<Uint8Array | false>;
    /**
     * SHA-384 shorthand.
     */
    sha384: (data: Uint8Array) => Promise<Uint8Array | false>;
    /**
     * SHA-512 shorthand.
     */
    sha512: (data: Uint8Array) => Promise<Uint8Array | false>;
    /**
     *   SHA-1 shorthand — emits a deprecation warning; use SHA-256+ for new code.
     */
    sha1: (data: Uint8Array) => Promise<Uint8Array | false>;
};
//# sourceMappingURL=digest.d.ts.map