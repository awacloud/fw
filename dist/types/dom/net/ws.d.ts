/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace ws {
    let name: string;
    let type: string;
    let dependencies: any[];
    /** @returns {WsAPI} */
    function factory(): WsAPI;
}
export type WsOptions = {
    /**
     * - WebSocket server URL.
     */
    url: string;
    /**
     * - Max reconnection attempts.
     */
    retry?: number;
    /**
     * - Base reconnection delay in ms.
     */
    retryDelay?: number;
    /**
     * - Upper bound for the backoff delay in ms.
     */
    maxDelay?: number;
    /**
     * - Binary message type.
     */
    binary?: string;
};
export type WsConnection = {
    /**
     * - Register a lifecycle event handler.
     */
    on: (arg0: string, arg1: Function) => WsConnection;
    /**
     * - Remove a lifecycle event handler.
     */
    off: (arg0: string) => WsConnection;
    /**
     * - Send data.
     */
    send: (arg0: string | ArrayBuffer | Blob | ArrayBufferView) => WsConnection;
    /**
     * - Permanently close the connection.
     */
    close: (arg0: number | undefined, arg1: string | undefined) => void;
    /**
     * - True when the socket is in the OPEN state.
     */
    isOpen: boolean;
    /**
     * - Current readyState of the underlying socket.
     */
    readyState: number;
    /**
     * - Bytes queued in the native socket's send buffer.
     */
    bufferedAmount: number;
};
/**
 * Object returned by `ws.factory()`: a `create(opts)` factory function that
 * opens a WebSocket and returns a {@link WsConnection} handle.
 */
export type WsAPI = (arg0: string | WsOptions) => WsConnection;
//# sourceMappingURL=ws.d.ts.map