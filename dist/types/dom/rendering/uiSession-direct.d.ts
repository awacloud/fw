/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace uiSessionDirect {
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
    })[];
    /** @returns {UiSessionDirectAPI} */
    function factory(dom: any, events: any): UiSessionDirectAPI;
}
/**
 * Direct DOM mutator methods mixed onto the `UISession` prototype. `this` is a
 * `UISession`; the chainable mutators return that session instance.
 */
export type UiSessionDirectMethods = {
    /**
     * Set `textContent` on the block root or a descendant. Returns the session (`this`).
     */
    text: (blockId: string, logicalIdOrValue: string, maybeValue?: string) => object;
    /**
     * Set/remove an attribute on the block root or a descendant. Returns the session (`this`).
     */
    attr: (blockId: string, logicalIdOrName: string, nameOrValue?: string, value?: any) => object;
    /**
     * Register a managed listener; returns the listener name, or `null` if the node is missing.
     */
    on: (blockId: string, logicalIdOrType: string, typeOrFn?: any, fnOrName?: any, nameOrOptions?: any, options?: any) => (string | null);
    /**
     * Subscribe a signal to a DOM surface; returns an `unsubscribe()` function.
     */
    bind: (sig: object, blockId: string, logicalIdOrTarget?: string, targetOrOpts?: any, maybeOpts?: object) => (() => void);
};
/**
 * Value returned by `uiSessionDirect.factory()`.
 */
export type UiSessionDirectAPI = {
    /**
     * Mutator methods mixed onto the `UISession` prototype.
     */
    methods: UiSessionDirectMethods;
};
//# sourceMappingURL=uiSession-direct.d.ts.map