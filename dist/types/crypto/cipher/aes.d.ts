/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace aes {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {AesAPI} */
    function factory(): AesAPI;
}
/**
 * A scheduled AES cipher instance: single-block encrypt (and optionally
 * decrypt) over a 4-word (128-bit) block. Returns `false` on invalid block
 * length.
 */
export type AesCipher = {
    /**
     * Encrypt one 4-word block.
     */
    encrypt: (data: number[]) => (number[] | false);
    /**
     * Decrypt one 4-word block (present only when scheduled with `full=true`).
     */
    decrypt?: (data: number[]) => (number[] | false);
};
/**
 * Key-schedule function producing an {@link AesCipher} (or `false` on invalid
 * key size: must be 4/6/8 32-bit words for AES-128/192/256).
 */
export type AesKeyScheduler = (input_key: number[], full?: boolean) => (AesCipher | false);
/**
 * Object returned by `aes.factory()`.
 */
export type AesAPI = {
    /**
     * Constant-time (masked-lookup) key scheduler — **default**.
     */
    fn: AesKeyScheduler;
    /**
     * T-table key scheduler (fast, NOT constant-time, opt-in).
     */
    ttable: {
        fn: AesKeyScheduler;
    };
    /**
     * Deprecated alias of `fn`.
     */
    bitsliced: {
        fn: AesKeyScheduler;
    };
};
//# sourceMappingURL=aes.d.ts.map