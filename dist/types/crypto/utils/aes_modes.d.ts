/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace aes_modes {
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
        dependencies: any[];
        factory(): AesAPI;
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
            factory(): BitArrayAPI;
        }[];
        factory(bitArray: any): CtrAPI;
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
            factory(): BitArrayAPI;
        }[];
        factory(bitArray: any): CbcAPI;
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
            factory(): BitArrayAPI;
        }[];
        factory(bitArray: any): GcmAPI;
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
            factory(): BitArrayAPI;
        }[];
        factory(bitArray: any): KwAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): PadAPI;
    })[];
    /** @returns {AesModesAPI} */
    function factory(bitArray: any, aes: any, cbc: any, ctr: any, gcm: any, kw: any, pad: any): AesModesAPI;
}
/**
 * Common `(key, iv, data) => bytes` encrypt/decrypt pair over `Uint8Array`.
 */
export type AesModeOps = {
    encrypt: (key: Uint8Array, iv: Uint8Array, data: Uint8Array) => (Uint8Array | false);
    decrypt: (key: Uint8Array, iv: Uint8Array, data: Uint8Array) => (Uint8Array | false);
};
/**
 * Public shape returned by `aes_modes.factory()`.
 */
export type AesModesAPI = {
    /**
     * CBC with PKCS#7 padding, plus a `raw` no-padding variant.
     */
    cbc: AesModeOps & {
        raw: AesModeOps;
    };
    /**
     * CTR stream mode (no padding).
     */
    ctr: AesModeOps;
    /**
     * GCM AEAD mode.
     */
    gcm: {
        encrypt: (key: Uint8Array, iv: Uint8Array, plaintext: Uint8Array, aad?: Uint8Array, tlen?: number) => ({
            ct: Uint8Array;
            tag: Uint8Array;
        } | false);
        decrypt: (key: Uint8Array, iv: Uint8Array, ciphertext: Uint8Array, tag: Uint8Array, aad?: Uint8Array, tlen?: number) => (Uint8Array | false);
        seal: (key: Uint8Array, iv: Uint8Array, plaintext: Uint8Array, aad?: Uint8Array) => (Uint8Array | false);
        open: (key: Uint8Array, sealed: Uint8Array, aad?: Uint8Array) => (Uint8Array | false);
    };
    /**
     * AES-KW / AES-KWP key wrapping.
     */
    kw: {
        wrap: (kek: Uint8Array, key: Uint8Array) => (Uint8Array | false);
        unwrap: (kek: Uint8Array, wrapped: Uint8Array) => (Uint8Array | false);
        wrapPad: (kek: Uint8Array, key: Uint8Array) => (Uint8Array | false);
        unwrapPad: (kek: Uint8Array, wrapped: Uint8Array) => (Uint8Array | false);
    };
};
//# sourceMappingURL=aes_modes.d.ts.map