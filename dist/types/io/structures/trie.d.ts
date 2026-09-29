/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace trie {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {TrieApi} */
    function factory(): TrieApi;
}
export type TrieNode = {
    /**
     * - child nodes keyed by single code point
     */
    children: Map<string, TrieNode>;
    /**
     * - value bound to this node (only meaningful when `isEnd === true`)
     */
    value: any;
    /**
     * - true if a complete key ends at this node
     */
    isEnd: boolean;
};
export type TrieSearchHit = {
    key: string;
    value: any;
};
export type TrieSnapshot = {
    /**
     * - all (key, value) pairs in DFS order
     */
    entries: Array<[string, any]>;
};
/**
 * Options accepted by {@link TrieApi.create}.
 */
export type TrieCreateOptions = {
    /**
     * - restore from a previous `snapshot()`
     */
    snapshot?: TrieSnapshot;
};
/**
 * A prefix-tree (trie) instance, as returned by {@link TrieApi.create}.
 */
export type TrieInstance = {
    insert: (key: string, value?: any) => void;
    has: (key: string) => boolean;
    get: (key: string) => any;
    hasPrefix: (prefix: string) => boolean;
    search: (prefix: string, limit?: number) => TrieSearchHit[];
    delete: (key: string) => boolean;
    keys: () => IterableIterator<string>;
    clear: () => void;
    snapshot: () => TrieSnapshot;
    /**
     * - readonly; current number of keys
     */
    size: number;
};
/**
 * Object returned by `trie.factory()`.
 */
export type TrieApi = {
    create: (opts?: TrieCreateOptions) => TrieInstance;
};
//# sourceMappingURL=trie.d.ts.map