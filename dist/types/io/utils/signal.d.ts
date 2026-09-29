/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace signal {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {SignalAPI} */
    function factory(): SignalAPI;
}
/**
 * A writable reactive cell holding a value of type `T`.
 */
export type Signal<T> = {
    /**
     * Read the value, registering as a dependency of any active effect.
     */
    get: () => T;
    /**
     * Read the value without registering a dependency.
     */
    peek: () => T;
    /**
     * Replace the value and notify subscribers (unless equal per `eq`).
     */
    set: (next: T) => void;
    /**
     * Set the value from a function of the current value.
     */
    update: (fn: (current: T) => T) => void;
    /**
     * Subscribe to changes; returns an unsubscribe.
     */
    subscribe: (fn: (value: T) => void) => (() => void);
    /**
     * Current subscriber count.
     */
    size: number;
    /**
     * Internal marker.
     */
    _isSignal: boolean;
    /**
     * Internal subscriber set.
     */
    _subs: Set<Function>;
    /**
     * Internal dependency-graph node id (`s<n>`).
     */
    _graphId: string;
};
/**
 * A read-only reactive cell of type `T` (e.g. from `resource`).
 */
export type ReadonlySignal<T> = {
    /**
     * Read the value, registering as a dependency of any active effect.
     */
    get: () => T;
    /**
     * Read the value without registering a dependency.
     */
    peek: () => T;
    /**
     * Subscribe to changes; returns an unsubscribe.
     */
    subscribe: (fn: (value: T) => void) => (() => void);
    /**
     * Current subscriber count.
     */
    size: number;
    /**
     * Internal marker.
     */
    _isSignal: boolean;
    /**
     * Internal subscriber set.
     */
    _subs: Set<Function>;
};
/**
 * A read-only reactive cell of type `T` returned by `derived`, additionally
 * disposable to detach its dependency subscriptions.
 */
export type DisposableReadonlySignal<T> = {
    /**
     * Read the value, registering as a dependency of any active effect.
     */
    get: () => T;
    /**
     * Read the value without registering a dependency.
     */
    peek: () => T;
    /**
     * Subscribe to changes; returns an unsubscribe.
     */
    subscribe: (fn: (value: T) => void) => (() => void);
    /**
     * Detach all dependency subscriptions (idempotent). After
     * `dispose()`, `get()`/`peek()` keep returning the last computed value and a dep write
     * never recomputes it again.
     */
    dispose: () => void;
    /**
     * Current subscriber count.
     */
    size: number;
    /**
     * Internal marker.
     */
    _isSignal: boolean;
    /**
     * Internal subscriber set.
     */
    _subs: Set<Function>;
};
/**
 * State carried by a `resource` / `derivedAsync` signal.
 */
export type ResourceState<T> = {
    /**
     * Current fetch status.
     */
    status: "idle" | "pending" | "resolved" | "rejected";
    /**
     * Last resolved value (preserved while pending/rejected).
     */
    value: T | null;
    /**
     * Error from the latest rejected fetch, else null.
     */
    error: Error | null;
};
/**
 * Read-only resource signal returned by `resource`.
 */
export type ResourceSignal<T> = {
    /**
     * Read the resource state, registering as a dependency.
     */
    get: () => ResourceState<T>;
    /**
     * Read the resource state without registering.
     */
    peek: () => ResourceState<T>;
    /**
     * Subscribe to state changes.
     */
    subscribe: (fn: (state: ResourceState<T>) => void) => (() => void);
    /**
     * Trigger a new fetch (re-using this signal).
     */
    refresh: () => void;
    /**
     * Current subscriber count.
     */
    size: number;
    /**
     * Internal marker.
     */
    _isSignal: boolean;
    /**
     * Internal subscriber set.
     */
    _subs: Set<Function>;
};
/**
 * Read-only async-derived resource signal returned by `derivedAsync`.
 */
export type DerivedAsyncSignal<T> = {
    /**
     * Read the resource state, registering as a dependency.
     */
    get: () => ResourceState<T>;
    /**
     * Read the resource state without registering.
     */
    peek: () => ResourceState<T>;
    /**
     * Subscribe to state changes.
     */
    subscribe: (fn: (state: ResourceState<T>) => void) => (() => void);
    /**
     * Trigger a new fetch.
     */
    refresh: () => void;
    /**
     * Detach all dependency subscriptions (idempotent).
     */
    dispose: () => void;
    /**
     * Current subscriber count.
     */
    size: number;
    /**
     * Internal marker.
     */
    _isSignal: boolean;
    /**
     * Internal subscriber set.
     */
    _subs: Set<Function>;
};
/**
 * A read-only auto-tracked memoized derived signal returned by `computed`.
 */
export type ComputedSignal<T> = {
    /**
     * Read the computed value, registering as a dependency of any active effect.
     */
    get: () => T;
    /**
     * Read the computed value without registering a dependency.
     */
    peek: () => T;
    /**
     * Subscribe to changes; returns an unsubscribe.
     */
    subscribe: (fn: (value: T) => void) => (() => void);
    /**
     * Detach all tracked-source subscriptions (idempotent). After
     * `dispose()`, `get()`/`peek()` keep returning the last computed value and a source write
     * never recomputes it again.
     */
    dispose: () => void;
    /**
     * Current subscriber count.
     */
    size: number;
    /**
     * Internal marker.
     */
    _isSignal: boolean;
    /**
     * Internal subscriber set.
     */
    _subs: Set<Function>;
    /**
     * Internal dependency-graph node id (`c<n>`).
     */
    _graphId: string;
};
/**
 * A signal node of the snapshot returned by `inspectGraph()`.
 */
export type GraphSignalNode = {
    /**
     * Stable per-factory node id — `s<n>` (`create`) or `c<n>` (`computed`).
     */
    id: string;
    /**
     * Which primitive minted the node.
     */
    kind: "signal" | "computed";
};
/**
 * An effect node of the snapshot returned by `inspectGraph()`.
 */
export type GraphEffectNode = {
    /**
     * Stable per-factory effect id (`e<n>`).
     */
    id: string;
    /**
     * Number of signals this effect currently depends on.
     */
    deps: number;
};
/**
 * A directed dependency edge: the effect re-runs when the signal changes.
 */
export type GraphEdge = {
    /**
     * Effect node id.
     */
    effect: string;
    /**
     * Signal node id.
     */
    signal: string;
};
/**
 * Frozen, defensively-copied view of one factory instance's dependency graph.
 */
export type SignalGraphSnapshot = {
    /**
     * Signals at least one live effect depends on.
     */
    signals: ReadonlyArray<GraphSignalNode>;
    /**
     * Live (non-stopped) effects.
     */
    effects: ReadonlyArray<GraphEffectNode>;
    /**
     * Effect → signal dependency edges.
     */
    edges: ReadonlyArray<GraphEdge>;
};
/**
 * Public shape returned by `signal.factory()` — the reactivity core.
 */
export type SignalAPI = {
    /**
     * Create a writable signal.
     */
    create: <T>(initial: T, opts?: {
        eq?: (a: T, b: T) => boolean;
    }) => Signal<T>;
    /**
     * Create a read-only signal derived from explicit deps.
     */
    derived: <T>(deps: Array<Signal<any> | ReadonlySignal<any>>, fn: (...values: any[]) => T, opts?: {
        eq?: (a: T, b: T) => boolean;
    }) => DisposableReadonlySignal<T>;
    /**
     * Batch multiple `set()` calls so subscribers fire once at the end.
     */
    batch: (fn: () => void) => void;
    /**
     * Read signals without registering in the active effect.
     */
    untrack: <T>(fn: () => T) => T;
    /**
     * Run `fn`, auto-tracking reads; returns a `stop()`.
     */
    effect: (fn: () => void) => (() => void);
    /**
     * Wrap an async fetcher into a resource signal.
     */
    resource: <T>(fetcher: () => Promise<T>, opts?: {
        autoStart?: boolean;
        eq?: (a: ResourceState<T>, b: ResourceState<T>) => boolean;
    }) => ResourceSignal<T>;
    /**
     * Async-derived resource signal.
     */
    derivedAsync: <T>(deps: Array<Signal<any> | ReadonlySignal<any>>, fn: (...values: any[]) => T | Promise<T>, opts?: {
        autoStart?: boolean;
    }) => DerivedAsyncSignal<T>;
    /**
     * Auto-tracked memoized read-only derived signal.
     */
    computed: <T>(fn: () => T, opts?: {
        eq?: (a: T, b: T) => boolean;
    }) => ComputedSignal<T>;
    /**
     * Enable opt-in async coalescing; returns a disposer restoring the previous mode.
     */
    scheduleNotify: (mode: "sync" | "microtask" | "raf") => (() => void);
    /**
     * Force immediate flush of any pending coalesced notifications.
     */
    flushSync: () => void;
    /**
     * Read-only snapshot of this instance's dependency graph.
     */
    inspectGraph: () => SignalGraphSnapshot;
};
//# sourceMappingURL=signal.d.ts.map