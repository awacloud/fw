/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace queue {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {QueueCtor} */
    function factory(): QueueCtor;
}
/**
 * A concurrency queue instance.
 */
export type QueueInstance = {
    /**
     * Max number of concurrent jobs.
     */
    concurrency: number;
    /**
     * Number of jobs currently queued or running.
     */
    length: number;
    /**
     * Number of jobs currently in flight.
     */
    running: number;
    /**
     * Error that closed the queue, if any.
     */
    error: any;
    /**
     * Whether `stop()` has been called.
     */
    stopped: boolean;
    /**
     * Push an array of jobs in order.
     */
    concat: (jobs: Array<any>) => void;
    /**
     * Signal EOF (no more jobs).
     */
    end: (error?: any) => void;
    /**
     * Job handler; must call `end(error)` when finished.
     */
    onData: (job: any, end: Function) => void;
    /**
     * Called once when the queue closes.
     */
    onEnd: (error: any) => void;
    /**
     * Push a single job.
     */
    push: (job: any) => void;
    /**
     * Stop processing; optional error closes with failure.
     */
    stop: (error?: any) => void;
};
/**
 * Constructor returned by `queue.factory()`.
 */
export type QueueCtor = (new (concurrency?: number | boolean) => QueueInstance) & {
    parseConcurrency: (concurrency: number | boolean) => number;
};
//# sourceMappingURL=queue.d.ts.map