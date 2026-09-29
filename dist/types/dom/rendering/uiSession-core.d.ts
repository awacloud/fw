/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace uiSessionCore {
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
        dependencies: any[];
        factory(): EventsAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): SecPolicyAPI;
        }[];
        factory(secPolicy: any): ParserAPI;
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
    /** @returns {UiSessionCoreAPI} */
    function factory(template: any, render: any, parser: any, dom: any, events: any): UiSessionCoreAPI;
}
/**
 * Core lifecycle / lookup / mutation methods mixed onto the `UISession`
 * prototype. `this` is a `UISession`; chainable mutators return that instance.
 */
export type UiSessionCoreMethods = {
    /**
     * Shortcut for `parser.fromHTML`; returns a parse result.
     */
    parse: (htmlString: string) => object;
    /**
     * Resolve a block/element pair to a live DOM node.
     */
    get: (blockId: string, logicalId?: string) => (Element | null);
    /**
     * Resolve a declared `${slot}` to its container element.
     */
    _resolveSlotElement: (parentBlockId: string, slotName: string) => (Element | null);
    /**
     * First selector match inside the addressed node.
     */
    query: (blockId: string, logicalId: string, selector: string) => (Element | null);
    /**
     * All selector matches inside the addressed node.
     */
    queryAll: (blockId: string, logicalId: string, selector: string) => (NodeList | any[]);
    /**
     * Generator yielding `[logicalId, element]` pairs.
     */
    iterate: (blockId: string) => IterableIterator<[string, Element]>;
    /**
     * Whether a block (or descendant) is registered.
     */
    exists: (blockId: string, logicalId?: string) => boolean;
    /**
     * Adopt SSR DOM; returns the session (`this`).
     */
    hydrate: (items: any[], opts?: object) => object;
    /**
     * Render and append items; returns the session (`this`).
     */
    add: (items: any[]) => object;
    /**
     * Alias for `add`; returns the session (`this`).
     */
    append: (items: any[]) => object;
    /**
     * Render items before existing children; returns the session (`this`).
     */
    prepend: (items: any[]) => object;
    /**
     * Resolve an element, call `factory`, adopt the controller; returns the controller.
     */
    mount: (blockId: string, slotName: (string | null), factory: (element: Element, blockId: string) => object) => (object | null);
    /**
     * Register a cleanup resource; returns the resource.
     */
    adopt: (blockId: string, resource: (Function | object)) => (Function | object);
    /**
     * Set/clear an unmount hook; returns the session (`this`).
     */
    onUnmount: (blockId: string, fn?: Function) => object;
    /**
     * Set/fire a mount hook; returns the session (`this`).
     */
    onMount: (blockId: string, fn?: Function) => object;
    /**
     * Fire queued mount hooks for the given ids.
     */
    _fireMount: (ids: Array<string>) => void;
    /**
     * Fire and clear the unmount hook for a block.
     */
    _fireUnmount: (blockId: string) => void;
    /**
     * Remove a managed listener by name; returns the session (`this`).
     */
    off: (name: string) => object;
    /**
     * Remove tracked listeners for a block/descendant.
     */
    _offTracked: (blockId: string, logicalId?: string) => void;
    /**
     * Remove a descendant element; returns the session (`this`).
     */
    remove: (blockId: string, logicalId?: string) => object;
    /**
     * Clear all / a block / a descendant; returns the session (`this`).
     */
    clear: (blockId?: string, logicalId?: string) => object;
    /**
     * Move a node under a new parent; returns the session (`this`).
     */
    move: (blockId: string, logicalId: string, targetBlockId: string, targetLogicalId: string) => object;
    /**
     * Clear a block then add items; returns the session (`this`).
     */
    replace: (blockId: string, items: any[]) => object;
    /**
     * Open/return an out-of-tree portal session.
     */
    portal: (name: string, opts?: object) => object;
    /**
     * Close a portal; returns the session (`this`).
     */
    closePortal: (name: string) => object;
    /**
     * Dispose any `UIList`s owned by a block.
     */
    _disposeListsFor: (blockId: string) => void;
};
/**
 * Value returned by `uiSessionCore.factory()`.
 */
export type UiSessionCoreAPI = {
    /**
     * Methods mixed onto the `UISession` prototype.
     */
    methods: UiSessionCoreMethods;
    /**
     * Resolve a render item's `template` field; shared by `add`/`hydrate`.
     */
    resolveTemplate: (item: object) => object;
};
//# sourceMappingURL=uiSession-core.d.ts.map