/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @fileoverview Factory that creates a `workerRuntime` function for spawning
 * framework-aware Web Workers from inline code.
 *
 * **How it works:**
 * 1. The requested dependency modules are serialised by `runtime.serialize` into
 *    a self-contained JS string.
 * 2. An optional logger bootstrap (`logFn`) is prepended when `ENV.LOG` is active.
 * 3. The code string is turned into a Blob URL and passed to `new Worker(...)`.
 * 4. Framework-internal messages (flagged with `__fw: true`) are intercepted on
 *    the main-thread `message` event and never reach user handlers.
 * 5. `worker.terminate` is patched to perform cleanup (revoke the Blob URL,
 *    run the user-supplied `terminate` callback) before delegating to the native
 *    `terminate`.
 *
 */
/**
 * Options accepted by the `workerRuntime` function returned by
 * {@link createWorkerRuntime}.
 *
 * @typedef {Object} WorkerOptions
 * @property {string[]}  [dependencies=[]]  - Module names to serialise and register
 *   inside the worker. The transitive dependency graph is resolved automatically.
 * @property {Function}  [workerFw]         - Worker-side framework bootstrap function.
 *   Signature: `(runtime, modules, args) => context`. Called inside the worker
 *   after all modules are registered; its return value is assigned to
 *   `runtime.context` and passed as the sole argument to `workerFn`.
 *   Defaults to a function that resolves all modules into `libs` and returns
 *   `{ libs, process, args }`.
 * @property {*[]}       [args=[]]          - Serialisable arguments forwarded to
 *   `workerFw` as its third parameter. Must be JSON-serialisable.
 * @property {Function}  [terminate]        - Callback invoked during cleanup, just
 *   before the native `Worker.terminate()` call. Defaults to a no-op.
 */
/**
 * @typedef {Object} ModuleRuntime
 * @property {function(string[]): Object} resolveAll - Resolve a list of module names.
 * @property {function(string[]): {content: string, list: string[]}} serialize    - Serialize module(s) by name array.
 * @property {*} [context]                           - Worker-side resolved context.
 */
/**
 * @typedef {function(Function, WorkerOptions=): Worker} workerRuntime
 */
/**
 * A framework-internal message sent from the worker to the main thread.
 * These messages are intercepted and never forwarded to user listeners.
 *
 * @typedef {Object} FwMessage
 * @property {true}   __fw    - Framework flag; always `true`.
 * @property {string} __type  - Message sub-type (e.g. `'log'`).
 * @property {*}      [msg]   - Payload (type-dependent).
 */
/**
 * Create a `workerRuntime` function bound to the given environment and runtime.
 *
 * Separating construction from invocation allows `createWorkerRuntime` to be
 * called once at application startup while `workerRuntime` is called each time
 * a new Worker is needed.
 *
 * @param {Object}        ENV           - Environment configuration object.
 * @param {boolean}       ENV.LOG       - When `true`, the log-forwarding handler is
 *   installed and the logger bootstrap is prepended to the worker code.
 * @param {boolean}       [ENV.DEV]     - Passed to the logger bootstrap when `ENV.LOG`
 *   is active.
 * @param {ModuleRuntime} runtime       - The main-thread runtime instance used to
 *   serialise modules for the worker.
 * @param {string}        runtimeSource - Self-contained source code of the runtime
 *   (constants + private helpers + `ModuleRuntime` class), exported by
 *   `runtime.js` as `runtimeSource`. Embedded as-is at the top of the worker
 *   code so the class can reference its private helpers (`semverCompare`,
 *   `parseSpec`, `canonical`, etc.) once instantiated worker-side.
 * @param {Object}        log           - Main-thread log service. Must expose a
 *   `__push(msg)` method when `ENV.LOG` is `true`.
 * @param {Function}      logFn         - Logger initialisation function; its source is
 *   stringified and prepended to the worker code when `ENV.LOG` is `true`.
 * @returns {workerRuntime} A configured worker-spawn function.
 */
export function createWorkerRuntime(ENV: {
    LOG: boolean;
    DEV?: boolean;
}, runtime: ModuleRuntime, runtimeSource: string, log: any, logFn: Function): workerRuntime;
/**
 * Options accepted by the `workerRuntime` function returned by
 * {@link createWorkerRuntime}.
 */
export type WorkerOptions = {
    /**
     * - Module names to serialise and register
     * inside the worker. The transitive dependency graph is resolved automatically.
     */
    dependencies?: string[];
    /**
     * - Worker-side framework bootstrap function.
     * Signature: `(runtime, modules, args) => context`. Called inside the worker
     * after all modules are registered; its return value is assigned to
     * `runtime.context` and passed as the sole argument to `workerFn`.
     * Defaults to a function that resolves all modules into `libs` and returns
     * `{ libs, process, args }`.
     */
    workerFw?: Function;
    /**
     * - Serialisable arguments forwarded to
     * `workerFw` as its third parameter. Must be JSON-serialisable.
     */
    args?: any[];
    /**
     * - Callback invoked during cleanup, just
     * before the native `Worker.terminate()` call. Defaults to a no-op.
     */
    terminate?: Function;
};
export type ModuleRuntime = {
    /**
     * - Resolve a list of module names.
     */
    resolveAll: (arg0: string[]) => any;
    /**
     * - Serialize module(s) by name array.
     */
    serialize: (arg0: string[]) => {
        content: string;
        list: string[];
    };
    /**
     * - Worker-side resolved context.
     */
    context?: any;
};
export type workerRuntime = (arg0: Function, arg1: WorkerOptions | undefined) => Worker;
/**
 * A framework-internal message sent from the worker to the main thread.
 * These messages are intercepted and never forwarded to user listeners.
 */
export type FwMessage = {
    /**
     * - Framework flag; always `true`.
     */
    __fw: true;
    /**
     * - Message sub-type (e.g. `'log'`).
     */
    __type: string;
    /**
     * - Payload (type-dependent).
     */
    msg?: any;
};
//# sourceMappingURL=worker-helper.d.ts.map