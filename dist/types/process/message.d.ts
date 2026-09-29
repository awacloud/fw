/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace processMessage {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /**
     * Builds the process-message helpers.
     * @returns {ProcessMessageAPI}
     */
    function factory(): ProcessMessageAPI;
}
/**
 * Process-message helper surface returned by `factory()`.
 */
export type ProcessMessageAPI = {
    /**
     * - Create a synchronous in-memory channel between a process proxy and a manager store.
     */
    sync: () => {
        process: ProxyConstructor;
        manager: MessageStore;
    };
    /**
     * - Create a process proxy bound to the real Worker global (`self`).
     */
    worker: () => ProxyConstructor;
    /**
     * - Create a command-sender proxy that posts fw/cmd messages to a worker.
     */
    workerCommand: (workerRef: WorkerLike) => ProxyConstructor;
    /**
     * - Resolve modules and prepare a worker process for framework usage.
     */
    workerFramework: (runtime: RuntimeLike, modules: string[], args: any) => {
        libs: object;
        process: ProxyConstructor;
        args: any;
    };
};
export type MessageEventLike = {
    data?: any;
    ports?: any;
    stopImmediatePropagation?: () => void;
};
export type MessageStore = {
    handlers: Map<any, any>;
    onmessage: (arg0: MessageEventLike) => void;
    postMessage: (arg0: any, arg1: any | undefined) => void;
    addEventListener: (arg0: string, arg1: (arg0: MessageEventLike) => void) => void;
    removeEventListener: (arg0: string, arg1: (arg0: MessageEventLike) => void) => void;
    listeners: Array<(arg0: MessageEventLike) => void>;
};
export type WorkerLike = {
    postMessage: (arg0: any, arg1: any | undefined) => void;
};
export type RuntimeLike = {
    resolveAll: (arg0: string[]) => object;
};
//# sourceMappingURL=message.d.ts.map