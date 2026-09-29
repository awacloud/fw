/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace cancellable {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): AbortAPI;
    }[];
    /**
     * @param {Object} abortDep - resolved `abort` module.
     * @returns {CancellableAPI}
     */
    function factory(abortDep: any): CancellableAPI;
}
export type CancellableTaskContext = {
    signal: AbortSignal;
    /**
     * - Register a cleanup hook (LIFO).
     */
    onCancel: (fn: () => void | Promise<void>) => void;
    throwIfAborted: () => void;
};
export type CancellableTask = {
    run: () => Promise<any>;
    cancel: (reason?: any) => Promise<void>;
    cancelled: boolean;
    done: boolean;
    signal: AbortSignal;
};
export type CancellablePoolOptions = {
    /**
     * Optional sink for task rejections inside the pool. Without it, the pool
     * suppresses unhandled-rejection noise but the task's own `run()` promise
     * (returned earlier to `add`'s caller? no - pool owns it) is consumed.
     * Use `onError` when you need to observe failures.
     */
    onError?: (err: any, task: CancellableTask) => void;
};
/**
 * Cancellable async task helpers with LIFO cleanup, plus `race`, `all`, `pool`.
 */
export type CancellableAPI = {
    /**
     * - Build a cancellable task wrapper.
     */
    create: (asyncFn: (ctx: CancellableTaskContext) => Promise<any>) => CancellableTask;
    /**
     * - Race tasks; first to settle wins, others cancelled.
     */
    race: (...tasks: CancellableTask[]) => Promise<any>;
    /**
     * - Run tasks in parallel; reject cancels the rest.
     */
    all: (tasks: CancellableTask[]) => Promise<any[]>;
    /**
     * - Build a pool of long-lived cancellable tasks.
     */
    pool: (opts?: CancellablePoolOptions) => any;
};
//# sourceMappingURL=cancellable.d.ts.map