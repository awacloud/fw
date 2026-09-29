/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace route {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: {
        name: string;
        type: string;
        dependencies: any[];
        factory(): EventsAPI;
    }[];
    /** @returns {RouteAPI} */
    function factory(events: any): RouteAPI;
}
/**
 * Route handler / info bag passed to handlers and guards.
 */
export type RouteHandler = (params: {
    [x: string]: string;
}, query: {
    [x: string]: string;
}, info: {
    path: string;
    hash: string;
    name: string;
}) => void;
/**
 * Guard return value: `false` (or a Promise resolving to `false`) cancels navigation.
 */
export type RouteGuard = (params: {
    [x: string]: string;
}, query: {
    [x: string]: string;
}, info: {
    path: string;
    hash: string;
    name: string;
}) => (boolean | void | Promise<boolean | void>);
/**
 * Public surface returned by `route.factory()`.
 */
export type RouteAPI = {
    /**
     *   Register (or replace) a named route handler.
     */
    on: (name: string, pattern: string, fn: RouteHandler, opts?: {
        parent?: string;
        beforeEnter?: RouteGuard;
        beforeLeave?: RouteGuard;
    }) => void;
    /**
     * Unregister a named route.
     */
    off: (name: string) => void;
    /**
     *   Navigate to a path; resolves `true` if it went through, `false` if a guard cancelled.
     */
    go: (path: string, query?: {
        [x: string]: any;
    }) => Promise<boolean>;
    /**
     *   Replace the current hash without adding a history entry.
     */
    replace: (path: string, query?: {
        [x: string]: any;
    }) => void;
    /**
     *   Snapshot of the current parsed route state.
     */
    current: () => {
        path: string;
        query: {
            [x: string]: string;
        };
        hash: string;
    };
    /**
     *   Active primary matched route info, or `null` when nothing matched.
     */
    active: () => ({
        name: string;
        params: {
            [x: string]: string;
        };
        query: {
            [x: string]: string;
        };
        info: {
            path: string;
            hash: string;
            name: string;
        };
        hash: string;
    } | null);
    /**
     * Manually re-dispatch the current hash.
     */
    refresh: () => Promise<void>;
    /**
     * Install the `hashchange` listener and dispatch once (idempotent).
     */
    start: () => void;
    /**
     * Detach the listener and clear all registered routes.
     */
    dispose: () => void;
    /**
     * Number of registered routes (read-only getter).
     */
    size: number;
};
//# sourceMappingURL=route.d.ts.map