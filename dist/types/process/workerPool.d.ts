/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace workerPool {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /**
     * @returns {WorkerPoolAPI}
     */
    function factory(): WorkerPoolAPI;
}
/**
 * A live worker pool instance returned by `create()`.
 */
export type WorkerPool = {
    /**
     * - Submit a job to the pool; resolves with the worker's result.
     */
    run: (job: any, runOpts?: {
        transfer?: Transferable[];
        signal?: AbortSignal;
    }) => Promise<any>;
    /**
     * - Effective pool size (number of worker slots).
     */
    size: () => number;
    /**
     * - Number of idle workers.
     */
    idle: () => number;
    /**
     * - Number of queued jobs.
     */
    pending: () => number;
    /**
     * - Adjust the pool size (grow immediately, shrink lazily).
     */
    resize: (n: number) => void;
    /**
     * - Terminate all workers and reject queued jobs.
     */
    terminate: () => void;
};
/**
 * Worker-pool helper surface returned by `factory()`.
 */
export type WorkerPoolAPI = {
    /**
     * - Create a homogeneous pool of N identical Web Workers.
     */
    create: (opts: {
        factory: Function;
        size?: number;
        maxQueue?: number;
        respawnOnCrash?: boolean;
    }) => WorkerPool;
};
//# sourceMappingURL=workerPool.d.ts.map