/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace sse {
    let name: string;
    let type: string;
    let dependencies: any[];
    /** @returns {SseAPI} */
    function factory(): SseAPI;
}
/**
 * A live SSE connection handle returned by `SseAPI.connect()`.
 */
export type SseConnection = {
    /**
     * Register a listener for an event name.
     */
    on: (eventName: string, callback: Function) => void;
    /**
     * Remove a listener.
     */
    off: (eventName: string, callback: Function) => void;
    /**
     * Subscribe to error events; returns an unsubscribe.
     */
    onError: (cb: (event: Event, readyState: number) => void) => (() => void);
    /**
     * Subscribe to reconnect telemetry; returns an unsubscribe.
     */
    onReconnect: (cb: (info: {
        attempt: number;
        delay: number;
    }) => void) => (() => void);
    /**
     * Close the connection and clear listeners.
     */
    close: () => void;
    /**
     * 0 = CONNECTING, 1 = OPEN, 2 = CLOSED (read-only).
     */
    readyState: number;
    /**
     * Configured base URL, without query mutation (read-only).
     */
    url: string;
    /**
     * Most recent Last-Event-ID seen, or `null` (read-only).
     */
    lastEventId: string | null;
};
/**
 * Public API returned by `sse.factory()`.
 */
export type SseAPI = {
    /**
     * Open an SSE connection.
     */
    connect: (url: string, options?: {
        withCredentials?: boolean;
        retry?: {
            initial?: number;
            max?: number;
            factor?: number;
        };
        autoConnect?: boolean;
        lastEventIdParam?: string;
        initialLastEventId?: string | null;
    }) => SseConnection;
};
//# sourceMappingURL=sse.d.ts.map