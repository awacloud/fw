/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace virtualScroll {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: {
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
    }[];
    /**
     * @param {Object} dom - Resolved `dom` module instance.
     * @returns {VirtualScrollAPI}
     */
    function factory(dom: any): VirtualScrollAPI;
}
/**
 * A virtualised-list instance returned by `create()`.
 */
export type VirtualScrollInstance = {
    /**
     * - Re-render the visible range after a data/total change.
     */
    refresh: () => void;
    /**
     * - Update the total item count and refresh.
     */
    setTotal: (n: number) => void;
    /**
     * - Programmatically scroll to an index.
     */
    scrollTo: (idx: number, scrollOpts?: {
        align?: "start" | "center" | "end" | "auto";
    }) => void;
    /**
     * - Return the currently visible index range.
     */
    visibleRange: () => {
        start: number;
        end: number;
    };
    /**
     * - Return the (measured or estimated) height of an item.
     */
    measure: (idx: number) => number;
    /**
     * - Detach listeners and clear the layer.
     */
    dispose: () => void;
};
/**
 * Virtualised-list surface returned by `factory()`.
 */
export type VirtualScrollAPI = {
    /**
     * - Create a virtualised-list instance.
     */
    create: (opts: {
        container: Element;
        itemHeight: number;
        total: number;
        renderItem: (idx: number) => (Element | any[]);
        overscan?: number;
        mode?: "fixed" | "variable";
    }) => VirtualScrollInstance;
};
//# sourceMappingURL=virtualScroll.d.ts.map