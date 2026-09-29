/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace semaphore {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /**
     * @returns {SemaphoreAPI}
     */
    function factory(): SemaphoreAPI;
}
export type SemaphoreAcquireOptions = {
    /**
     * - Optional abort signal - cancels a pending
     * acquire; the returned Promise rejects with the signal's reason.
     */
    signal?: AbortSignal;
};
export type Semaphore = {
    acquire: (opts?: SemaphoreAcquireOptions) => Promise<void>;
    release: () => void;
    tryAcquire: () => boolean;
    runExclusive: <T>(fn: () => T | Promise<T>, opts?: SemaphoreAcquireOptions) => Promise<T>;
    permits: number;
    capacity: number;
};
/**
 * Counting semaphore factory surface.
 */
export type SemaphoreAPI = {
    /**
     * - Build a fresh semaphore with `n` permits.
     */
    create: (n: number) => Semaphore;
};
//# sourceMappingURL=semaphore.d.ts.map