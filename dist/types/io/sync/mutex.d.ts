/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace mutex {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /**
     * @returns {MutexAPI}
     */
    function factory(): MutexAPI;
}
export type MutexAcquireOptions = {
    /**
     * - Optional abort signal - cancels a pending
     * acquire; the returned Promise rejects with the signal's reason.
     */
    signal?: AbortSignal;
};
export type Mutex = {
    acquire: (opts?: MutexAcquireOptions) => Promise<void>;
    release: () => void;
    tryAcquire: () => boolean;
    runExclusive: <T>(fn: () => T | Promise<T>, opts?: MutexAcquireOptions) => Promise<T>;
    locked: boolean;
};
/**
 * Async FIFO binary lock factory surface.
 */
export type MutexAPI = {
    /**
     * - Build a fresh mutex.
     */
    create: () => Mutex;
};
//# sourceMappingURL=mutex.d.ts.map