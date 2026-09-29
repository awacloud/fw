/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace render {
    let name: string;
    let type: string;
    let dependencies: string[];
    let deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): SecPolicyAPI;
    }[];
    /** @returns {RenderAPI} */
    function factory(secPolicy: any): RenderAPI;
}
/**
 * A single node in the flat elm-array representation.
 * Defined in full in `parser.js`; imported here by reference.
 */
export type ElmNode = import("./parser").ElmNode;
/**
 * A variable-binding descriptor attached to an elm node.
 * Defined in full in `parser.js`; imported here by reference.
 */
export type MapEntry = import("./parser").MapEntry;
/**
 * Parse result from `parser.js`, containing a template elm-array and optional
 * iterate sub-templates. Imported by reference so render.js stays dependency-free.
 */
export type ParseResult = import("./parser").ParseResult;
/**
 * Result produced by `rewrite`: a rewritten elm array together with
 * the ID-translation maps needed by callers to resolve logical IDs later.
 */
export type RenderResult = {
    /**
     * - Elm array with new collision-safe IDs.
     */
    arr: ElmNode[];
    /**
     * - Original ID → new ID translation map.
     */
    map: Map<string, string>;
    /**
     * - Slot/iterate-block name → container
     *   element's new ID.
     */
    content: Map<string, string>;
};
/**
 * Aggregate result produced by `full`: the merged elm array for the
 * whole render pass plus maps used by subsequent `attach` lookups.
 */
export type FullResult = {
    /**
     * - Combined, rewritten
     *  elm array for all items.
     */
    arr: ElmNode[];
    /**
     * - Logical-item ID →
     *  {@link RenderResult#map} (or `false` when an
     *  attach slot was not found).
     */
    map: Map<string, Map<string, string> | false>;
    /**
     * - Updated attach-slot
     * registry for nested items.
     */
    attach: Map<string, {
        content: Map<string, string>;
    }>;
};
/**
 * Public surface returned by `render.factory()`: the elm-array transform and
 * SSR helpers. All functions are pure (no DOM access).
 */
export type RenderAPI = {
    /**
     * - Apply bindings to a cloned elm array.
     */
    elms: (elm_array: ElmNode[], options: any, attach?: string | false) => ElmNode[];
    /**
     * - Rewrite element IDs to collision-safe values.
     */
    rewrite: (elm_array: ElmNode[]) => RenderResult;
    /**
     * - `rewrite(elms(...))` in one call.
     */
    parts: (elm_array: ElmNode[], options?: any, attach?: string | false) => RenderResult;
    /**
     * - Render once per options entry.
     */
    loop: (elm_array: ElmNode[], options?: any[], attach?: string | false) => RenderResult[];
    /**
     * - Full structured render pass.
     */
    full: (data: any[], attach_parent?: Map<string, {
        content: Map<string, string>;
    }>, id_parent?: Map<string, Map<string, string> | false>) => FullResult;
    /**
     * - Resolve one binding against data.
     */
    computeBoundValue: (mapEntry: MapEntry, data: any, base: any) => any;
    /**
     * - Re-resolve a single elm's bindings.
     */
    applyParsedElm: (parsedElm: ElmNode, data: any) => {
        data: any;
        [prop: string]: any;
    };
    /**
     * - Server-side render to an HTML string.
     */
    toHTML: (input: ParseResult | ElmNode[], data?: any, opts?: any) => string;
};
//# sourceMappingURL=render.d.ts.map