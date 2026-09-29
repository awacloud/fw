/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace brotliDictWords {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {BrotliDictWordsAPI} */
    function factory(): BrotliDictWordsAPI;
}
/**
 * Public surface of `brotliDictWords.factory()` (the mutable loader state).
 */
export type BrotliDictWordsAPI = {
    /**
     * The loaded 122784-byte dictionary, or `null` before loading.
     */
    blob: Uint8Array | null;
    /**
     * `true` once a valid blob has been accepted.
     */
    isLoaded: boolean;
    /**
     * Required blob size (122784).
     */
    EXPECTED_SIZE: number;
    /**
     * Required CRC-32 of the blob (0x5136CB04).
     */
    EXPECTED_CRC32: number;
    /**
     * Validate (size + CRC-32) and accept a pre-loaded blob.
     */
    setBlob: (buf: Uint8Array) => Uint8Array;
    /**
     * Fetch the blob from `url`, validate, and accept it.
     */
    load: (url: string) => Promise<Uint8Array>;
};
//# sourceMappingURL=brotli_dict_words.d.ts.map