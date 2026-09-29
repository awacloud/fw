/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace lruCache {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {LruCacheApi} */
    function factory(): LruCacheApi;
}
export type LruEntry = {
    /**
     * - entry key (any value Map can use as key)
     */
    key: any;
    /**
     * - entry value
     */
    value: any;
    /**
     * - previous node in the MRU→LRU chain
     */
    prev: LruEntry | null;
    /**
     * - next node in the MRU→LRU chain
     */
    next: LruEntry | null;
};
export type LruSnapshot = {
    /**
     * - must match the cache `maxSize` on restore
     */
    maxSize: number;
    /**
     * - entries in MRU→LRU order
     */
    entries: Array<Array<any>>;
};
/**
 * Options accepted by {@link LruCacheApi.create}.
 */
export type LruCacheCreateOptions = {
    /**
     * - maximum number of entries; integer >= 1
     */
    maxSize: number;
    /**
     * - called when an entry is evicted, deleted, or cleared
     */
    onEvict?: (key: any, value: any) => void;
    /**
     * - restore state from a previous `snapshot()`
     */
    snapshot?: LruSnapshot;
};
/**
 * A bounded LRU cache instance, as returned by {@link LruCacheApi.create}.
 */
export type LruCacheInstance = {
    get: (key: any) => any;
    set: (key: any, value: any) => void;
    has: (key: any) => boolean;
    peek: (key: any) => any;
    delete: (key: any) => boolean;
    clear: () => void;
    keys: () => Generator<any, void, unknown>;
    values: () => Generator<any, void, unknown>;
    entries: () => Generator<Array<any>, void, unknown>;
    snapshot: () => LruSnapshot;
    /**
     * - readonly; current number of entries
     */
    size: number;
    /**
     * - readonly; configured capacity
     */
    maxSize: number;
};
/**
 * Object returned by `lruCache.factory()`.
 */
export type LruCacheApi = {
    create: (opts: LruCacheCreateOptions) => LruCacheInstance;
};
//# sourceMappingURL=lruCache.d.ts.map