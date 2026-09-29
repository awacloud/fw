/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace devtoolsUI {
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
            factory(): ClockAPI;
        }[];
        factory(clock: any): DevtoolsAPI;
    }[];
    /**
     * @param {object} devtools - The resolved **`devtools` instance** (the six
     *   read-only methods), as `runtime.resolve('devtoolsUI')` injects it. Only
     *   `inspect` and `summarize` are consumed.
     * @returns {DevtoolsUIAPI}
     */
    function factory(devtools: object): DevtoolsUIAPI;
}
/**
 * Sources the composite {@link DevtoolsUIAPI.render} accepts. Every field is
 * optional; a view is emitted only for the sources actually supplied.
 */
export type DevtoolsUISources = {
    /**
     * A `uiSession` instance, passed to `devtools.inspect()`.
     */
    session?: object;
    /**
     * The module runtime, read through its **`snapshot()`** accessor (never `list()`,
     * which hands back live definitions).
     */
    runtime?: {
        snapshot: (filter?: object) => ReadonlyArray<object>;
    };
    /**
     * A `signal.factory()`
     * **instance** — the graph is per-instance, so a module descriptor will not do.
     */
    signal?: {
        inspectGraph: () => object;
    };
    /**
     * Optional `snapshot()` filter for the registry view.
     */
    filter?: object;
};
/**
 * Public API returned by `devtoolsUI.factory()` — DOM rendering only, no writes
 * back into any inspected source.
 */
export type DevtoolsUIAPI = {
    /**
     * Append a composite inspector holding one section per supplied source.
     */
    render: (target: Element, sources?: DevtoolsUISources) => Element;
    /**
     * Append the `devtools.inspect()` view for one uiSession.
     */
    renderSession: (target: Element, session: object) => Element;
    /**
     * Append the module-registry view over `runtime.snapshot(filter)`.
     */
    renderRegistry: (target: Element, runtime: object, filter?: object) => Element;
    /**
     * Append the effect dependency-graph view over `signal.inspectGraph()`.
     */
    renderGraph: (target: Element, signal: object) => Element;
};
//# sourceMappingURL=devtools-ui.d.ts.map