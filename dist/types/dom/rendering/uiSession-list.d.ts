/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace uiSessionList {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: ({
        name: string;
        type: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): SecPolicyAPI;
        }[];
        factory(secPolicy: any): DomAPI;
    } | {
        name: string;
        type: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): SecPolicyAPI;
        }[];
        factory(secPolicy: any): RenderAPI;
    } | {
        name: string;
        type: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): SecPolicyAPI;
        }[];
        factory(secPolicy: any): TemplateAPI;
    })[];
    /** @returns {UiSessionListAPI} */
    function factory(template: any, render: any, dom: any): UiSessionListAPI;
}
/**
 * Result delta returned by `UIList#sync`.
 */
export type UiListSyncDelta = {
    /**
     * Keys added this sync.
     */
    added: Set<string>;
    /**
     * Keys unchanged this sync.
     */
    kept: Set<string>;
    /**
     * Keys whose data changed.
     */
    updated: Set<string>;
    /**
     * Keys removed this sync.
     */
    removed: Set<string>;
    /**
     * Whether the DOM order was rebuilt.
     */
    reordered: boolean;
};
/**
 * Keyed-list controller managing one `${slot}` of a parent block.
 */
export type UiListInstance = {
    /**
     * Current item count (getter).
     */
    size: number;
    /**
     * Whether a key is present.
     */
    has: (key: any) => boolean;
    /**
     * Item data for a key, or `undefined`.
     */
    get: (key: any) => any;
    /**
     * Iterate keys in order.
     */
    keys: () => IterableIterator<string>;
    /**
     * Iterate `[key, item]` pairs in order.
     */
    entries: () => IterableIterator<[string, any]>;
    /**
     * Iterate items in order.
     */
    values: () => IterableIterator<any>;
    /**
     * Live root element for a key, or `null`.
     */
    element: (key: any) => (Element | null);
    /**
     * Internal block id for a key.
     */
    itemId: (key: any) => string;
    /**
     * Meta value computed by `metaFn`, or `undefined`.
     */
    meta: (key: any) => any;
    /**
     * Proxy onto `ui.attr` for a row.
     */
    attr: (key: any, ...rest: any[]) => any;
    /**
     * Proxy onto `ui.text` for a row.
     */
    text: (key: any, ...rest: any[]) => any;
    /**
     * Proxy onto `ui.on` for a row.
     */
    on: (key: any, ...rest: any[]) => any;
    /**
     * First selector match inside a row.
     */
    query: (key: any, selector: string) => (Element | null);
    /**
     * All selector matches inside a row.
     */
    queryAll: (key: any, selector: string) => (NodeList | any[]);
    /**
     * Append an item; returns its key.
     */
    push: (item: any) => string;
    /**
     * Prepend an item; returns its key.
     */
    prepend: (item: any) => string;
    /**
     * Insert before `beforeKey` (or append); returns its key.
     */
    insert: (item: any, beforeKey?: any) => string;
    /**
     * Add or update by key.
     */
    upsert: (item: any) => ("added" | "updated" | "unchanged");
    /**
     * Update an existing key; throws if absent.
     */
    update: (key: any, item: any) => ("updated" | "unchanged");
    /**
     * Remove a key; returns whether it existed.
     */
    remove: (key: any) => boolean;
    /**
     * Reorder a key before `beforeKey` (or to the end).
     */
    move: (key: any, beforeKey?: any) => boolean;
    /**
     * Remove all items.
     */
    clear: () => void;
    /**
     * Adopt SSR rows without touching the DOM; returns `this`.
     */
    adopt: (items: any[], opts?: {
        idPrefix?: string;
    }) => UiListInstance;
    /**
     * Reconcile the list against `items`; returns the change delta.
     */
    sync: (items: any[]) => UiListSyncDelta;
};
/**
 * Constructor signature of the `UIList` class returned by the factory.
 */
export type UiListCtor = new (session: object, parentBlockId: string, slotName: string, opts: object) => UiListInstance;
/**
 * `list()` method mixed onto the `UISession` prototype.
 */
export type UiSessionListMethods = {
    /**
     * Get or create the keyed list for a `(parentBlockId, slotName)` slot.
     */
    list: (parentBlockId: string, slotName: string, options: object) => UiListInstance;
};
/**
 * Value returned by `uiSessionList.factory()`.
 */
export type UiSessionListAPI = {
    /**
     * The keyed-list controller class.
     */
    UIList: UiListCtor;
    /**
     * Methods mixed onto the `UISession` prototype.
     */
    methods: UiSessionListMethods;
};
//# sourceMappingURL=uiSession-list.d.ts.map