/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace network {
    let name: string;
    let type: string;
    let dependencies: any[];
    /** @returns {NetworkAPI} */
    function factory(): NetworkAPI;
}
export type NetworkInformation = {
    effectiveType?: string;
    downlink?: number;
    rtt?: number;
    saveData?: boolean;
    type?: string;
    addEventListener: (arg0: string, arg1: Function) => void;
    removeEventListener: (arg0: string, arg1: Function) => void;
};
/**
 * Frozen snapshot of `navigator.connection`.
 */
export type ConnectionSnapshot = {
    effectiveType: string | null;
    downlink: number | null;
    rtt: number | null;
    saveData: boolean;
    type: string | null;
};
/**
 * Public API returned by `network.factory()`.
 */
export type NetworkAPI = {
    /**
     * Whether the browser believes it is online.
     */
    isOnline: () => boolean;
    /**
     * Subscribe to `online`; returns an unsubscribe.
     */
    onOnline: (callback: () => void) => (() => void);
    /**
     * Subscribe to `offline`; returns an unsubscribe.
     */
    onOffline: (callback: () => void) => (() => void);
    /**
     * Subscribe to online/offline changes; returns an unsubscribe.
     */
    onChange: (callback: (online: boolean) => void, opts?: {
        immediate?: boolean;
    }) => (() => void);
    /**
     * Snapshot of `navigator.connection`, or `null`.
     */
    connection: () => (ConnectionSnapshot | null);
    /**
     * Subscribe to connection changes; returns an unsubscribe.
     */
    onConnectionChange: (callback: (snapshot: ConnectionSnapshot | null) => void, opts?: {
        immediate?: boolean;
    }) => (() => void);
    /**
     * Whether the Data Saver preference is on.
     */
    saveData: () => boolean;
    /**
     * Reachability check via `fetch`.
     */
    ping: (url: string, opts?: {
        timeout?: number;
        method?: string;
    }) => Promise<boolean>;
    /**
     * Remove all listeners and detach event bindings.
     */
    off: () => void;
};
//# sourceMappingURL=network.d.ts.map