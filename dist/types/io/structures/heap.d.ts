/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace heap {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {HeapApi} */
    function factory(): HeapApi;
}
export type TypedArray = Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | BigInt64Array | BigUint64Array | Float32Array | Float64Array;
export type HeapSnapshot = {
    /**
     * - the heap's internal array, already in valid
     * heap order. Must be the round-trip output of `snapshot()` (no re-heapify
     * is performed on restore); passing an arbitrary array would corrupt the heap.
     */
    data: Array<any>;
};
/**
 * Options accepted by {@link HeapApi.create}.
 */
export type HeapCreateOptions = {
    /**
     * - default is natural-order min-heap
     */
    comparator?: (a: any, b: any) => number;
    /**
     * - initial values; heapified in O(n) via Floyd's algorithm
     */
    initial?: Array<any>;
    /**
     * - external backing store (requires `maxSize`)
     */
    storage?: any[] | TypedArray;
    /**
     * - bounded mode capacity; integer >= 1
     */
    maxSize?: number;
    /**
     * - restore from a previous `snapshot()`. Mutually exclusive with `initial`.
     */
    snapshot?: HeapSnapshot;
};
/**
 * A binary-heap (priority queue) instance, as returned by {@link HeapApi.create}.
 */
export type HeapInstance = {
    push: (value: any) => void;
    pop: () => any;
    peek: () => any;
    has: (value: any, equals?: (a: any, b: any) => boolean) => boolean;
    toArray: () => Array<any>;
    drain: () => Array<any>;
    clear: () => void;
    snapshot: () => HeapSnapshot;
    /**
     * - readonly; current number of entries
     */
    size: number;
    /**
     * - readonly
     */
    isEmpty: boolean;
};
/**
 * Object returned by `heap.factory()`.
 */
export type HeapApi = {
    create: (opts?: HeapCreateOptions) => HeapInstance;
};
//# sourceMappingURL=heap.d.ts.map