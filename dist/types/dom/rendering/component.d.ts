/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace component {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): SignalAPI;
        }[];
        factory(signal: any): ReactiveBindAPI;
    }[];
    /** @returns {ComponentAPI} */
    function factory(reactiveBind: any): ComponentAPI;
}
/**
 * A mounted component instance returned by a component factory.
 */
export type ComponentInstance = {
    /**
     * Current transformed (DOM-bound) props (getter).
     */
    props: any;
    /**
     * Logical block id used internally (getter).
     */
    blockId: string;
    /**
     * Free-form per-instance state object (getter).
     */
    state: object;
    /**
     * Scope class applied to the root, or `null` (getter).
     */
    scopeClass: (string | null);
    /**
     * Re-validate props (re-apply `propsFn`) and fire the `update` hook. Does NOT auto-re-bind the DOM — re-bind in the hook via `self.text`/`self.attr`.
     */
    update: (newProps: object) => void;
    /**
     * Clear the block (fires the `unmount` hook).
     */
    destroy: () => void;
    /**
     * Root element, or a descendant by logical id.
     */
    get: (lid?: string) => (Element | null);
    /**
     * Proxy onto `ui.text(blockId, ...)`.
     */
    text: (...args: any[]) => any;
    /**
     * Proxy onto `ui.attr(blockId, ...)`.
     */
    attr: (...args: any[]) => any;
    /**
     * Proxy onto `ui.on(blockId, ...)`.
     */
    on: (...args: any[]) => any;
};
/**
 * Factory produced by `define(spec)` : mounts a component instance.
 */
export type ComponentFactory = (opts?: {
    ui: object;
    parent?: string;
    slot?: string;
    id?: string;
    props?: object;
}) => ComponentInstance;
/**
 * Public API returned by `component.factory()`.
 */
export type ComponentAPI = {
    /**
     * Define a component blueprint; returns a factory that mounts instances.
     */
    define: (spec: object) => ComponentFactory;
};
//# sourceMappingURL=component.d.ts.map