/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace btree {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {BTreeApi} */
    function factory(): BTreeApi;
}
export type BTreeNode = {
    keys: Array<any>;
    values: Array<any>;
    /**
     * - empty when `isLeaf === true`
     */
    children: Array<BTreeNode>;
    isLeaf: boolean;
};
export type BTreeEntry = {
    key: any;
    value: any;
};
export type BTreeSnapshot = {
    /**
     * - must match the tree `order` on restore
     */
    order: number;
    /**
     * - all (key, value) pairs in sorted order
     */
    entries: Array<Array<any>>;
};
/**
 * Options accepted by {@link BTreeApi.create}.
 */
export type BTreeCreateOptions = {
    /**
     * - branching factor; integer >= 3
     */
    order?: number;
    /**
     * - key comparator (default natural order)
     */
    comparator?: (a: any, b: any) => number;
    /**
     * - restore from a previous `snapshot()`
     */
    snapshot?: BTreeSnapshot;
};
/**
 * A B-tree (ordered map) instance, as returned by {@link BTreeApi.create}.
 */
export type BTreeInstance = {
    insert: (key: any, value: any) => void;
    get: (key: any) => any;
    has: (key: any) => boolean;
    delete: (key: any) => boolean;
    range: (low: any, high: any, opts?: {
        includeLow?: boolean;
        includeHigh?: boolean;
    }) => Generator<Array<any>, void, unknown>;
    keys: () => Generator<any, void, unknown>;
    values: () => Generator<any, void, unknown>;
    entries: () => Generator<Array<any>, void, unknown>;
    min: () => BTreeEntry | null;
    max: () => BTreeEntry | null;
    clear: () => void;
    snapshot: () => BTreeSnapshot;
    /**
     * - readonly; current number of entries
     */
    size: number;
};
/**
 * Object returned by `btree.factory()`.
 */
export type BTreeApi = {
    create: (opts?: BTreeCreateOptions) => BTreeInstance;
};
//# sourceMappingURL=btree.d.ts.map