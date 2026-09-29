/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace atomics {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {AtomicsAPI} */
    function factory(): AtomicsAPI;
}
export type AtomicTypedArray = Int32Array | Uint32Array | Uint16Array | Uint8Array;
export type WaitAsyncResult = {
    /**
     * - `true` if `value` is a Promise.
     */
    async: boolean;
    /**
     * - 'ok' | 'not-equal' | 'timed-out'.
     */
    value: string | Promise<string>;
};
export type SabLock = {
    acquire: () => Promise<void>;
    release: () => void;
    tryAcquire: () => boolean;
};
/**
 * Public shape returned by `atomics.factory()`.
 */
export type AtomicsAPI = {
    /**
     * Whether `SharedArrayBuffer` + `Atomics` are available.
     */
    isSupported: () => boolean;
    /**
     * Allocate a SharedArrayBuffer or null when unsupported.
     */
    shared: (byteLength: number) => (SharedArrayBuffer | null);
    /**
     * View a SAB as an Int32Array.
     */
    int32: (sab: SharedArrayBuffer, byteOffset?: number, length?: number) => Int32Array;
    /**
     * View a SAB as a Uint32Array.
     */
    uint32: (sab: SharedArrayBuffer, byteOffset?: number, length?: number) => Uint32Array;
    /**
     * View a SAB as a Uint8Array.
     */
    uint8: (sab: SharedArrayBuffer, byteOffset?: number, length?: number) => Uint8Array;
    /**
     * View a SAB as a Uint16Array.
     */
    uint16: (sab: SharedArrayBuffer, byteOffset?: number, length?: number) => Uint16Array;
    /**
     * Atomic load.
     */
    load: (typed: AtomicTypedArray, index: number) => number;
    /**
     * Atomic store; returns the stored value.
     */
    store: (typed: AtomicTypedArray, index: number, value: number) => number;
    /**
     * Atomic add; returns previous value.
     */
    add: (typed: AtomicTypedArray, index: number, value: number) => number;
    /**
     * Atomic sub; returns previous value.
     */
    sub: (typed: AtomicTypedArray, index: number, value: number) => number;
    /**
     * Atomic bitwise AND; returns previous value.
     */
    and: (typed: AtomicTypedArray, index: number, value: number) => number;
    /**
     * Atomic bitwise OR; returns previous value.
     */
    or: (typed: AtomicTypedArray, index: number, value: number) => number;
    /**
     * Atomic bitwise XOR; returns previous value.
     */
    xor: (typed: AtomicTypedArray, index: number, value: number) => number;
    /**
     * Atomic exchange; returns previous value.
     */
    exchange: (typed: AtomicTypedArray, index: number, value: number) => number;
    /**
     * Atomic compare-and-exchange; returns previous value.
     */
    compareExchange: (typed: AtomicTypedArray, index: number, expected: number, replacement: number) => number;
    /**
     * Async wait on an Int32Array slot.
     */
    waitAsync: (int32Array: Int32Array, index: number, expectedValue: number, timeoutMs?: number) => WaitAsyncResult;
    /**
     * Wake waiters; returns number woken.
     */
    notify: (int32Array: Int32Array, index: number, count?: number) => number;
    /**
     * Minimal cross-worker spinlock on an Int32Array slot.
     */
    sabLock: (int32Array: Int32Array, index: number) => SabLock;
};
//# sourceMappingURL=atomics.d.ts.map