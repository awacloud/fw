/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace sharedWorker {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): ProcessRPCAPI;
    }[];
    /**
     * @param {Object} processRPC - Bidirectional RPC module.
     * @returns {SharedWorkerAPI}
     */
    function factory(processRPC: any): SharedWorkerAPI;
}
export type SharedWorkerRpc = {
    /**
     * - Resolves to the remote proxy: each property
     * on the resolved value is a function calling into the SharedWorker side.
     */
    call: Promise<any>;
    /**
     * - Local-side exposed API control.
     * `close()` tears down the local processRPC peer (does not cascade to the
     * remote proxy; close the call-side separately if you opened both ends).
     */
    expose: {
        close: () => void;
    };
};
export type SharedWorkerHandle = {
    /**
     * - Native MessagePort.
     */
    port: () => MessagePort;
    /**
     * - Start a bidirectional RPC.
     */
    rpc: (api: Record<string, Function>) => SharedWorkerRpc;
    /**
     * - Best-effort connection status.
     */
    online: () => boolean;
    /**
     * - Register an error handler; returns a disposer.
     */
    onError: (fn: (event: Event) => void) => (() => void);
    /**
     * - Close the port and detach handlers (idempotent).
     */
    close: () => void;
};
/**
 * SharedWorker helper surface returned by `factory()`.
 */
export type SharedWorkerAPI = {
    /**
     * - Create an instance connected to a SharedWorker (throws `SharedWorkerNotSupported` if the API is missing).
     */
    create: (opts: {
        url: string;
        name?: string;
        credentials?: string;
    }) => SharedWorkerHandle;
    /**
     * - Detect availability of the SharedWorker API.
     */
    support: () => {
        available: boolean;
        sharedWorker: boolean;
    };
};
//# sourceMappingURL=sharedWorker.d.ts.map