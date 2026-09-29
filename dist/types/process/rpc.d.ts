/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace processRPC {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {ProcessRPCAPI} */
    function factory(): ProcessRPCAPI;
}
/**
 * Public API returned by `processRPC.factory()`.
 */
export type ProcessRPCAPI = {
    /**
     *   Expose `target` for RPC; returns the transferable port(s) and a `close` disposer.
     */
    create: (target: object) => {
        port: MessagePort[];
        close: () => void;
    };
    /**
     *   Open an RPC channel and resolve to a nested Proxy whose calls/value-gets return Promises.
     */
    open: (port: MessagePort, options?: {
        timeout?: number;
    }) => Promise<any>;
};
export type RPCDescriptor = {
    key?: string | RPCDescriptor;
};
//# sourceMappingURL=rpc.d.ts.map