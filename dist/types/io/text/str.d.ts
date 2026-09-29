/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace str {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): UnicodeAPI;
    }[];
    /** @returns {StrAPI} */
    function factory(unicodeDep: any): StrAPI;
}
/**
 * Public API returned by `str.factory()`.
 */
export type StrAPI = {
    /**
     * Split into words across case/digit/separator boundaries.
     */
    splitWords: (s: string) => string[];
    /**
     * Convert to camelCase.
     */
    camelCase: (s: string) => string;
    /**
     * Convert to PascalCase.
     */
    pascalCase: (s: string) => string;
    /**
     * Convert to kebab-case.
     */
    kebabCase: (s: string) => string;
    /**
     * Convert to snake_case.
     */
    snakeCase: (s: string) => string;
    /**
     * Convert to CONSTANT_CASE.
     */
    constantCase: (s: string) => string;
    /**
     * Convert to Title Case.
     */
    titleCase: (s: string) => string;
    /**
     * Build a URL-safe slug.
     */
    slug: (s: string, options?: {
        separator?: string;
        lower?: boolean;
    }) => string;
    /**
     * Truncate with optional suffix.
     */
    truncate: (s: string, length: number, options?: {
        suffix?: string;
        wordBoundary?: boolean;
    }) => string;
    /**
     * Pad to a length.
     */
    pad: (s: string, length: number, char?: string, side?: "left" | "right" | "both") => string;
    /**
     * Replace `{key}` placeholders.
     */
    format: (template: string, params: Record<string, any>) => string;
    /**
     * Escape for literal use in a RegExp.
     */
    escapeRegExp: (s: string) => string;
    /**
     * Escape for safe HTML inclusion.
     */
    escapeHTML: (s: string) => string;
    /**
     * Levenshtein-based similarity in `[0, 1]`.
     */
    similarity: (a: string, b: string) => number;
};
//# sourceMappingURL=str.d.ts.map