/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace aes_ctr {
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
        dependencies: any[];
        factory(): PadAPI;
    })[];
    /** @returns {AesCtrApi} */
    function factory(bitArray: any, aes: any, ctr: any, pad: any): AesCtrApi;
}
/**
 * Public shape of an AES-CTR instance returned by `ui8()`.
 */
export type AesCtrInstance = {
    /**
     * Replace the IV (Uint8Array form).
     */
    update: (iv: Uint8Array) => void;
    /**
     * PKCS#7-pad then CTR-encrypt.
     */
    pad: (arr: Uint8Array) => (Uint8Array | false);
    /**
     * CTR-decrypt then strip PKCS#7 padding.
     */
    strip: (arr: Uint8Array) => (Uint8Array | false);
    /**
     * Raw CTR encrypt/decrypt (no padding).
     */
    raw: (arr: Uint8Array) => (Uint8Array | false);
    /**
     * Replace the IV (bitArray form).
     */
    ba_update: (ba_iv: number[]) => void;
    /**
     * Raw CTR over bitArray input/output.
     */
    ba_raw: (b_arr: number[]) => (number[] | false);
};
/**
 * Public surface of `aes_ctr.factory(...)`.
 */
export type AesCtrApi = {
    /**
     * Build an instance from Uint8Array key/IV.
     */
    ui8: (key: Uint8Array, iv: Uint8Array) => AesCtrInstance;
};
//# sourceMappingURL=aes_ctr.d.ts.map