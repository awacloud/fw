/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace template {
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
    /** @returns {TemplateAPI} */
    function factory(secPolicy: any): TemplateAPI;
}
/**
 * An entry in the live element map maintained per context.
 */
export type MapEntry = {
    /**
     * - The live DOM node.
     */
    node: Element;
    /**
     * - The direct DOM parent of `node`.
     */
    target: Element;
    /**
     * - Internal tag name (e.g. `'div'`, `'text'`).
     */
    tag: string;
    /**
     * - Ordered list of child element IDs.
     */
    children: string[];
    /**
     * - Names of nested contexts whose root node is
     *   a child of this element; cleared together with
     *   this entry.
     */
    childCtxs?: string[];
};
/**
 * Descriptor for a single entry in the template catalogue.
 * Entries may be a plain tag-name string or a configuration object.
 */
export type TagSpec = string | {
    name: string;
    tag?: string;
    svg?: boolean;
    child?: string;
    attrs?: {
        [x: string]: string;
    };
};
/**
 * Options accepted by `cmd.init`.
 */
export type InitOptions = {
    /**
     * - CSS selector string or a DOM element
     * used as the render container.
     */
    to: string | Element;
    /**
     * - When `true`, the template catalogue
     * is stored under the shared `'main'` key so all non-main contexts can share it.
     */
    main?: boolean;
    /**
     * - When `true`, the container is treated
     * as a full page document: `ctx` → `body`, `head` → `head`, plus `styles` / `scripts`
     * registries are created.
     */
    page?: boolean;
    /**
     * - Custom
     * template source. A string is treated as a CSS selector whose children are
     * `<template>` elements. An array/NodeList is used directly. When omitted,
     * `DEFAULT_TAGS` are used to auto-generate templates.
     */
    tpl?: string | HTMLElement[] | NodeListOf<HTMLTemplateElement>;
};
/**
 * A render context entry stored in the internal `contexts` map.
 */
export type ContextEntry = {
    /**
     * - Root container element.
     */
    ctx: Element;
    /**
     * - Live element map (id → entry).
     */
    map: {
        [x: string]: MapEntry;
    };
    /**
     * - Key into the template catalogue.
     */
    tpl: string;
    /**
     * - Owning document (page contexts only).
     */
    page?: Document;
    /**
     * - `<head>` element (page contexts only).
     */
    head?: Element;
    /**
     * - `<style>` nodes keyed by id.
     */
    styles?: {
        [x: string]: Element;
    };
    /**
     * - `<script>` nodes keyed by id.
     */
    scripts?: {
        [x: string]: Element;
    };
};
/**
 * Public API object returned by `template.factory()` (the internal `cmd`).
 * DOM materialiser : clones `<template>` sources into live nodes and tracks
 * them per named context.
 */
export type TemplateAPI = {
    /**
     * Initialise a named render context bound to a container; throws if the name already exists.
     */
    init: (name: string, options?: InitOptions) => ContextEntry;
    /**
     * Default tag catalogue used when no custom template source is supplied.
     */
    DEFAULT_TAGS: TagSpec[];
    /**
     * Build detached `<template>` elements from tag specs.
     */
    generateTemplateTags: (tags?: TagSpec[]) => HTMLTemplateElement[];
    /**
     * Extend a catalogue; returns the names registered.
     */
    registerTags: (tags: TagSpec[], ctxName?: string) => string[];
    /**
     * Replace-set a catalogue; returns added/removed names.
     */
    reloadTags: (tags: TagSpec[], ctxName?: string) => {
        added: string[];
        removed: string[];
    };
    /**
     * Remove one tag entry; returns whether one was removed.
     */
    unregisterTag: (name: string, ctxName?: string) => boolean;
    /**
     * Container element for a context, or `null`.
     */
    container: (name: string) => (Element | Document | null);
    /**
     * Register an existing DOM node (SSR hydration); throws on duplicate id.
     */
    adoptNode: (ctxName: string, id: string, node: Element, parentId?: string) => void;
    /**
     * Set/clear the CSP nonce applied to inserted `<style>`/`<script>`.
     */
    setNonce: (value: (string | null)) => void;
    /**
     * Current CSP nonce, or `''`.
     */
    getNonce: () => string;
    /**
     * Raw internal context entry, or `null`.
     */
    getCtx: (name: string) => (object | null);
    /**
     * Set whitelisted attributes on a page context's `<body>`.
     */
    pageAttr: (name: string, attrs: {
        [x: string]: string;
    }) => void;
    /**
     * Materialise a single elm node (or array) into the DOM.
     */
    elm: (name: string, data: (import("./parser").ElmNode | import("./parser").ElmNode[]), parent?: string, index?: number) => void;
    /**
     * Materialise an ordered elm array into the DOM.
     */
    elms: (anchor: string, elm_array: import("./parser").ElmNode[], parent?: string) => void;
    /**
     * Live DOM node for an element id, or `null`.
     */
    get: (name: string, id: string) => (Element | null);
    /**
     * Whether an element id exists in a context.
     */
    has: (name: string, id: string) => boolean;
    /**
     * Move a node under a new parent within a context.
     */
    move: (name: string, node: Element, newParent: Element) => void;
    /**
     * Insert/update a `<style>` in a page context's `<head>`.
     */
    style: (name: string, id: string, css: string) => void;
    /**
     * Remove a named `<style>`.
     */
    removeStyle: (name: string, id: string) => void;
    /**
     * Insert/replace a `<script>` in a page context's `<head>`.
     */
    script: (name: string, id: string, options?: {
        content?: string;
        type?: string;
    }) => void;
    /**
     * Remove a named `<script>`.
     */
    removeScript: (name: string, id: string) => void;
    /**
     * Validate a precompiled ParseResult; returns it unchanged.
     */
    fromParseResult: (parseResult: {
        template: import("./parser").ElmNode[];
        iterates?: {
            [x: string]: import("./parser").ElmNode[];
        };
    }) => object;
    /**
     * Tear down a context: remove its container and delete the entry.
     */
    clearContext: (name: string) => void;
    /**
     * Remove all rendered elements from a context; returns removed ids.
     */
    clearAll: (name: string) => string[];
    /**
     * Remove an element and its subtree; returns removed ids.
     */
    clearElm: (name: string, id: string) => string[];
    /**
     * Clear an element's children; returns removed descendant ids.
     */
    clearIn: (name: string, id: string) => string[];
};
//# sourceMappingURL=template.d.ts.map