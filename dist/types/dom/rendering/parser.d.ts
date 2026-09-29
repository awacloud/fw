/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace parser {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): SecPolicyAPI;
    }[];
    /** @returns {ParserAPI} */
    function factory(secPolicy: any): ParserAPI;
}
/**
 * A variable-binding descriptor that maps a named placeholder to a rendered target.
 */
export type MapEntry = {
    /**
     * - Placeholder variable name (from `#{name}`).
     */
    name: string;
    /**
     * - Target property: an attribute name, or `'text'`.
     */
    prop: string;
    /**
     * - `true` when the target is `elm.data[prop]` (attribute);
     *       omitted / `false` for text content.
     */
    data?: boolean;
    /**
     * - Value is appended after the static base string.
     */
    append?: boolean;
    /**
     * - Value is prepended before the static base string.
     */
    prepend?: boolean;
    /**
     * - Static run that immediately follows this variable in
     *       the source value. Appended after the resolved value so
     *       that interleaved static segments (e.g. the trailing run
     *       of `"prefix#{v}suffix"`, or the `"b"` in
     *       `"a#{v1}b#{v2}c"`) are preserved. Present only when a
     *       non-empty trailing run exists.
     */
    tail?: string;
    /**
     * - Fallback value when the variable is absent from the
     *    options passed to `render`.
     */
    default?: any;
};
/**
 * A single node in the flat elm-array representation.
 * Elements are stored in parent-before-child order.
 */
export type ElmNode = {
    /**
     * - Element identifier, unique within the parsed
     *   document (preserves the HTML `id` attribute
     *   when present, otherwise auto-generated as
     *   `p<n>`, skipping any `p<n>` already used as
     *   an explicit id in the same document).
     */
    id: string;
    /**
     * - Internal tag name.
     *   SVG child elements are prefixed: `svg_use`,
     *   `svg_rect`, … The synthetic `'text'` tag
     *   represents an inline bare-text node.
     */
    tag: string;
    /**
     * - `id` of the parent node (absent for roots).
     */
    parent?: string;
    /**
     * - Ordered list of tracked attribute names.
     */
    attrs?: string[];
    /**
     * - Attribute values, keyed by attr name (may be string, boolean, null, etc).
     */
    data?: {
        [x: string]: any;
    };
    /**
     * - Static text content (leaf nodes only).
     */
    text?: string;
    /**
     * - Slot or iterate-block name.
     */
    content?: string;
    /**
     * - Inline child nodes (runtime extension for nested elms).
     */
    child?: ElmNode[];
    /**
     * - When true, insert before existing children.
     */
    prepend?: boolean;
    /**
     * - Variable binding descriptors.
     */
    map?: MapEntry[];
};
/**
 * Result returned by `fromHTML`.
 */
export type ParseResult = {
    /**
     * - Flat, parent-ordered array of
     *   elm nodes for the main markup.
     */
    template: ElmNode[];
    /**
     * - Sub-templates for iterate blocks,
     *   keyed by block name. Present only
     *   when at least one iterate block was
     *   found in the HTML.
     */
    iterates?: {
        [x: string]: ElmNode[];
    };
};
/**
 * Internal tree structure built by `buildTree` for serialisation.
 */
export type ElmTree = {
    /**
     * - Nodes indexed by id.
     */
    byId: Map<string, ElmNode>;
    /**
     * - Children id arrays indexed by parent id.
     */
    kids: Map<string, string[]>;
    /**
     * - Ids of root-level nodes (no parent).
     */
    roots: string[];
};
/**
 * Manual cache controls exposed on the parser surface (test / power-user).
 */
export type ParserCache = {
    /**
     * - Clear all cached entries and reset stats.
     */
    clear: () => void;
    /**
     * - Set the max cache size; 0 disables caching.
     */
    setMax: (n: number) => void;
    /**
     * - Current max cache size.
     */
    getMax: () => number;
    /**
     * - Current number of cached entries.
     */
    size: () => number;
    /**
     * - Cache statistics snapshot.
     */
    stats: () => {
        hits: number;
        misses: number;
        evictions: number;
        size: number;
        max: number;
    };
};
/**
 * Optional input of `fromHTML`.
 */
export type FromHTMLOptions = {
    /**
     * - Explicit ids the caller knows the
     * assembled document will contain, declared UP FRONT. They are reserved for
     * the whole parser instance (this call and every later one), so an auto
     * `p<n>` never collides with an explicit id the instance has not met yet —
     * the direction per-call and per-instance accumulation cannot cover. Empty
     * and non-string entries are ignored. Supplying the option BYPASSES the
     * source-keyed `ParseResult` cache (read and write): the reservation changes
     * which ids are minted, so a cached entry would violate the contract.
     */
    reserveIds?: Iterable<string>;
};
/**
 * Public surface returned by `parser.factory()`.
 */
export type ParserAPI = {
    /**
     * - Parse HTML to a (cached) {@link ParseResult}.
     */
    fromHTML: (htmlString: string, options?: FromHTMLOptions) => ParseResult;
    /**
     * - Serialise an elm array / ParseResult back to HTML.
     */
    toHTML: (input: ElmNode[] | ParseResult) => string;
    /**
     * - Manual cache controls.
     */
    cache: ParserCache;
};
//# sourceMappingURL=parser.d.ts.map