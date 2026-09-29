/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace unicode {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {UnicodeAPI} */
    function factory(): UnicodeAPI;
}
/**
 * Collator options accepted by `unicode.compare` and `unicode.collator`.
 */
export type UnicodeCollatorOptions = {
    locale?: string | string[];
    sensitivity?: "base" | "accent" | "case" | "variant";
    numeric?: boolean;
    caseFirst?: "upper" | "lower" | "false";
    ignorePunctuation?: boolean;
};
/**
 * Reusable collator returned by `unicode.collator`.
 */
export type UnicodeCollator = {
    /**
     * Compare two strings (`-1`/`0`/`1`).
     */
    compare: (a: string, b: string) => number;
    /**
     * Return a sorted copy (non-mutating).
     */
    sort: (arr: string[]) => string[];
};
/**
 * Public API returned by `unicode.factory()`.
 */
export type UnicodeAPI = {
    /**
     * Apply a Unicode normalization form.
     */
    normalize: (str: string, form?: "NFC" | "NFD" | "NFKC" | "NFKD") => string;
    /**
     * Locale-aware lowercase (case folding).
     */
    casefold: (str: string, locale?: string | string[]) => string;
    /**
     * Compare two strings via `Intl.Collator`.
     */
    compare: (a: string, b: string, options?: UnicodeCollatorOptions) => number;
    /**
     * Build a reusable collator.
     */
    collator: (options?: UnicodeCollatorOptions) => UnicodeCollator;
    /**
     * Iterate over grapheme clusters.
     */
    graphemes: (str: string) => Generator<string, void, unknown>;
    /**
     * Estimate visual width in terminal cells.
     */
    width: (str: string) => number;
    /**
     * Remove combining diacritical marks.
     */
    stripDiacritics: (str: string) => string;
};
//# sourceMappingURL=unicode.d.ts.map