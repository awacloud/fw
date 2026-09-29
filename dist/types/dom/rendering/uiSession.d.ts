/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace uiSession {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
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
        factory(template: any, render: any, parser: any, dom: any, events: any): UiSessionCoreAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
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
        })[];
        factory(dom: any, events: any): UiSessionDirectAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
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
        factory(template: any, render: any, dom: any): UiSessionListAPI;
    })[];
    /** @returns {(containerName: string) => UISessionInstance} */
    function factory(core: any, direct: any, list: any): (containerName: string) => UISessionInstance;
}
export type RenderItem = {
    /**
     * - Pre-resolved elm template array.
     */
    template?: import("./parser").ElmNode[];
    /**
     * - Raw parse result; `template` is
     * derived from it using the `attach.name` slot when available.
     */
    block?: import("./parser").ParseResult;
    /**
     * - Variable bindings. An array
     * triggers loop (iterate) rendering.
     */
    data?: any | any[];
    /**
     * - Logical block identifier.
     */
    id?: string;
    /**
     * - Attach descriptor.
     */
    attach?: {
        elm: string;
        name: string;
    };
    /**
     * - Insert root before existing children.
     */
    prepend?: boolean;
};
/**
 * Stateful session managing one named template context. Composed from the
 * core (lifecycle/lookup/mutation), direct (text/attr/on/bind) and list
 * mixins. Chainable mutators return the session itself.
 */
export type UISessionInstance = {
    /**
     * Shortcut for `parser.fromHTML`.
     */
    parse: (htmlString: string) => object;
    /**
     * Resolve a block root or descendant to a live DOM node.
     */
    get: (blockId: string, logicalId?: string) => (Element | null);
    /**
     * First selector match inside the addressed node.
     */
    query: (blockId: string, logicalId: string, selector: string) => (Element | null);
    /**
     * All selector matches inside the addressed node.
     */
    queryAll: (blockId: string, logicalId: string, selector: string) => (NodeList | any[]);
    /**
     * Yield `[logicalId, element]` pairs for a block.
     */
    iterate: (blockId: string) => IterableIterator<[string, Element]>;
    /**
     * Whether a block (or descendant) is registered.
     */
    exists: (blockId: string, logicalId?: string) => boolean;
    /**
     * Adopt SSR DOM; returns the session.
     */
    hydrate: (items: any[], opts?: object) => UISessionInstance;
    /**
     * Render and append items; returns the session.
     */
    add: (items: any[]) => UISessionInstance;
    /**
     * Alias for `add`; returns the session.
     */
    append: (items: any[]) => UISessionInstance;
    /**
     * Render items before existing children; returns the session.
     */
    prepend: (items: any[]) => UISessionInstance;
    /**
     * Resolve an element, call `factory`, adopt the controller.
     */
    mount: (blockId: string, slotName: (string | null), factory: (element: Element, blockId: string) => object) => (object | null);
    /**
     * Register a cleanup resource.
     */
    adopt: (blockId: string, resource: (Function | object)) => (Function | object);
    /**
     * Set/clear an unmount hook; returns the session.
     */
    onUnmount: (blockId: string, fn?: Function) => UISessionInstance;
    /**
     * Set/fire a mount hook; returns the session.
     */
    onMount: (blockId: string, fn?: Function) => UISessionInstance;
    /**
     * Remove a managed listener by name; returns the session.
     */
    off: (name: string) => UISessionInstance;
    /**
     * Remove a descendant element; returns the session.
     */
    remove: (blockId: string, logicalId?: string) => UISessionInstance;
    /**
     * Clear all / a block / a descendant; returns the session.
     */
    clear: (blockId?: string, logicalId?: string) => UISessionInstance;
    /**
     * Move a node under a new parent; returns the session.
     */
    move: (blockId: string, logicalId: string, targetBlockId: string, targetLogicalId: string) => UISessionInstance;
    /**
     * Clear a block then add items; returns the session.
     */
    replace: (blockId: string, items: any[]) => UISessionInstance;
    /**
     * Open/return an out-of-tree portal session.
     */
    portal: (name: string, opts?: object) => UISessionInstance;
    /**
     * Close a portal; returns the session.
     */
    closePortal: (name: string) => UISessionInstance;
    /**
     * Set `textContent` on a block root or descendant; returns the session.
     */
    text: (blockId: string, logicalIdOrValue: string, maybeValue?: string) => UISessionInstance;
    /**
     * Set/remove an attribute; returns the session.
     */
    attr: (blockId: string, logicalIdOrName: string, nameOrValue?: string, value?: any) => UISessionInstance;
    /**
     * Register a managed listener; returns the listener name or `null`.
     */
    on: (blockId: string, logicalIdOrType: string, typeOrFn?: any, fnOrName?: any, nameOrOptions?: any, options?: any) => (string | null);
    /**
     * Subscribe a signal to a DOM surface; returns an unsubscribe function.
     */
    bind: (sig: object, blockId: string, logicalIdOrTarget?: string, targetOrOpts?: any, maybeOpts?: object) => (() => void);
    /**
     * Get or create the keyed `UIList` for a slot.
     */
    list: (parentBlockId: string, slotName: string, options: object) => object;
};
//# sourceMappingURL=uiSession.d.ts.map