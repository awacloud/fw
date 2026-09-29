/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace battery {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    let worker: boolean;
    /** @returns {BatteryAPI} */
    function factory(): BatteryAPI;
}
/**
 * Normalized battery snapshot.
 *
 * Note: unlike geolocation/networkInfo readings, this payload does
 * not include a `timestamp` field - `BatteryManager` is a stateful
 * object and changes fire as events rather than as discrete samples.
 */
export type BatteryStatus = {
    /**
     * - Charge level in `[0, 1]`.
     */
    level: number;
    /**
     * - `true` while charging.
     */
    charging: boolean;
    /**
     * - Seconds until fully charged, or `Infinity`.
     */
    chargingTime: number;
    /**
     * - Seconds until empty, or `Infinity`.
     */
    dischargingTime: number;
};
/**
 * Watch callback. On success invoked with `(status)`. If `getBattery()`
 * rejects after the watch has started, invoked with `(null, err)` for
 * parity with the geolocation watch contract.
 */
export type BatteryWatchCallback = (status: BatteryStatus | null, err?: Error) => void;
export type BatteryManager = {
    charging: boolean;
    chargingTime: number;
    dischargingTime: number;
    level: number;
    addEventListener: (arg0: string, arg1: Function) => void;
    removeEventListener: (arg0: string, arg1: Function) => void;
};
/**
 * Object returned by `battery.factory()`.
 */
export type BatteryAPI = {
    /**
     * `true` if the Battery Status API is available.
     */
    isSupported: () => boolean;
    /**
     * Resolve the current battery snapshot.
     */
    current: () => Promise<BatteryStatus>;
    /**
     * Subscribe to battery changes; returns a dispose function.
     */
    watch: (callback: BatteryWatchCallback) => (() => void);
};
//# sourceMappingURL=battery.d.ts.map