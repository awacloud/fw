/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace htmlEntities {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {HtmlEntitiesAPI} */
    function factory(): HtmlEntitiesAPI;
}
/**
 * Public API returned by `htmlEntities.factory()`.
 */
export type HtmlEntitiesAPI = {
    /**
     * Decode entity references (strict, semicolon-terminated only).
     */
    decodeHtmlStrict: (s: string) => string;
    /**
     * Decode entity references (lenient, trailing semicolon optional).
     */
    decodeHtml: (s: string) => string;
    /**
     * Decode a numeric code point (with Windows-1252 overrides / U+FFFD fallbacks).
     */
    decodeCodePoint: (cp: number) => string;
    /**
     * Canonical WHATWG named-entity lookup table.
     */
    HTML5_ENTITIES: Record<string, string>;
};
//# sourceMappingURL=html-entities.d.ts.map