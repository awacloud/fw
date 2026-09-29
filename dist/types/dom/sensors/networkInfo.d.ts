/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace networkInfo {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    let worker: boolean;
    /** @returns {NetworkInfoAPI} */
    function factory(): NetworkInfoAPI;
}
/**
 * Normalized network information snapshot.
 *
 * A `timestamp` field (milliseconds since the Unix epoch) is included
 * for parity with the geolocation reading, even though the underlying
 * `NetworkInformation` object exposes no native timestamp.
 */
export type NetworkInfo = {
    /**
     * - Effective bandwidth estimate in Mbps.
     */
    downlink: number;
    /**
     * - Max downlink for the underlying connection technology, or `undefined` (e.g. WiFi on Chromium).
     */
    downlinkMax: number | undefined;
    /**
     * - Effective connection type.
     */
    effectiveType: "slow-2g" | "2g" | "3g" | "4g";
    /**
     * - Estimated round-trip time in ms.
     */
    rtt: number;
    /**
     * - User has requested reduced data usage.
     */
    saveData: boolean;
    /**
     * - Underlying connection type.
     */
    type: "bluetooth" | "cellular" | "ethernet" | "none" | "wifi" | "wimax" | "other" | "unknown";
    /**
     * - `Date.now()` at the time of the snapshot.
     */
    timestamp: number;
};
/**
 * Watch callback invoked on every `change` event with a fresh snapshot.
 */
export type NetworkInfoWatchCallback = (info: NetworkInfo) => void;
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
 * Object returned by `networkInfo.factory()`.
 */
export type NetworkInfoAPI = {
    /**
     * `true` if `navigator.connection` is available.
     */
    isSupported: () => boolean;
    /**
     * Return the current network information snapshot (synchronous).
     */
    current: () => NetworkInfo;
    /**
     * Subscribe to connection changes; returns a dispose function.
     */
    watch: (callback: NetworkInfoWatchCallback) => (() => void);
};
//# sourceMappingURL=networkInfo.d.ts.map