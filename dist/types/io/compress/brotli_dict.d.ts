/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace brotliDict {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {BrotliDictAPI} */
    function factory(): BrotliDictAPI;
}
/**
 * One entry of the 121-element transform table (Appendix B).
 */
export type BrotliTransform = {
    /**
     * UTF-8 prefix bytes.
     */
    prefix: Uint8Array;
    /**
     * Transform kind id (0=Identity, 1=FermentFirst, 2=FermentAll, 3..11=OmitFirstk, 12..20=OmitLastk).
     */
    kind: number;
    /**
     * `k` for OmitFirstk/OmitLastk, else 0.
     */
    param: number;
    /**
     * UTF-8 suffix bytes.
     */
    suffix: Uint8Array;
};
/**
 * Public surface of `brotliDict.factory()`.
 */
export type BrotliDictAPI = {
    /**
     * Bit-depths per word length (length 25).
     */
    NDBITS: Uint8Array;
    /**
     * Number of words at a length (0 if `< 4`).
     */
    NWORDS: (length: number) => number;
    /**
     * Blob offset of the first word at a length.
     */
    DOFFSET: (length: number) => number;
    /**
     * Fixed dictionary size (122784).
     */
    DICTSIZE: number;
    /**
     * The 121 canonical transforms.
     */
    transforms: BrotliTransform[];
    /**
     * Apply `transforms[id]` to `baseWord`, returning `prefix + T(baseWord) + suffix`.
     */
    applyTransform: (id: number, baseWord: Uint8Array) => Uint8Array;
    /**
     * Inject the size-checked Appendix A word blob.
     */
    setWords: (blob: Uint8Array) => void;
    /**
     * Whether the word blob has been injected.
     */
    hasWords: () => boolean;
    /**
     * View into the blob for word `(length, index)`; throws if unloaded.
     */
    lookupWord: (length: number, index: number) => Uint8Array;
};
//# sourceMappingURL=brotli_dict.d.ts.map