/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace devtools {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): ClockAPI;
    }[];
    /** @returns {DevtoolsAPI} */
    function factory(clock: any): DevtoolsAPI;
}
/**
 * Public API returned by `devtools.factory()` - read-only introspection,
 * template dumping, and profiling helpers.
 */
export type DevtoolsAPI = {
    /**
     * Snapshot a `uiSession` into a JSON-safe object (`{ container, blocks, attaches, children, listeners, mountHooks, unmountHooks, lists, portals }`).
     */
    inspect: (session: object) => object;
    /**
     * One-line `"<blockId>(<logicalIds…>)"` summary per mounted block.
     */
    summarize: (session: object) => string;
    /**
     * Render an elm-array/ParseResult as an indented tree string.
     */
    dumpTemplate: (input: (import("./parser").ParseResult | import("./parser").ElmNode[]), opts?: {
        indent?: string;
    }) => string;
    /**
     * Run `fn` synchronously, returning its result and elapsed ms.
     */
    profile: (fn: () => any) => {
        result: any;
        durationMs: number;
    };
    /**
     * Awaitable variant of `profile`.
     */
    profileAsync: (fn: () => any) => Promise<{
        result: any;
        durationMs: number;
    }>;
    /**
     * Marker-style profiler with named segments.
     */
    timer: () => {
        mark: (name: string) => void;
        end: () => {
            total: number;
            segments: Array<{
                name: string;
                durationMs: number;
            }>;
        };
    };
};
//# sourceMappingURL=devtools.d.ts.map