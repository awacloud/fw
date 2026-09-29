/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace ringBuffer {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {RingBufferApi} */
    function factory(): RingBufferApi;
}
export type TypedArray = Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | BigInt64Array | BigUint64Array | Float32Array | Float64Array;
export type RingBufferSnapshot = {
    /**
     * - must match the buffer `capacity` on restore
     */
    capacity: number;
    /**
     * - number of live entries; must satisfy `size <= capacity`
     */
    size: number;
    /**
     * - live entries in FIFO order (length must be >= `size`)
     */
    data: Array<any>;
};
/**
 * Options accepted by {@link RingBufferApi.create}.
 */
export type RingBufferCreateOptions = {
    /**
     * - maximum number of entries; integer >= 1
     */
    capacity: number;
    /**
     * - external backing store; must have length >= `capacity`
     */
    storage?: any[] | TypedArray;
    /**
     * - restore from a previous `snapshot()`
     */
    snapshot?: RingBufferSnapshot;
};
/**
 * A bounded FIFO circular buffer instance, as returned by {@link RingBufferApi.create}.
 */
export type RingBufferInstance = {
    push: (value: any) => void;
    shift: () => any;
    pop: () => any;
    peek: () => any;
    peekLast: () => any;
    peekAt: (i: number) => any;
    toArray: () => Array<any>;
    clear: () => void;
    snapshot: () => RingBufferSnapshot;
    /**
     * - readonly; current number of entries
     */
    size: number;
    /**
     * - readonly; configured capacity
     */
    capacity: number;
    /**
     * - readonly
     */
    isFull: boolean;
    /**
     * - readonly
     */
    isEmpty: boolean;
};
/**
 * Object returned by `ringBuffer.factory()`.
 */
export type RingBufferApi = {
    create: (opts: RingBufferCreateOptions) => RingBufferInstance;
};
//# sourceMappingURL=ringBuffer.d.ts.map