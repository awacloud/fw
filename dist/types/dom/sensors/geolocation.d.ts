/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace geolocation {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    let worker: boolean;
    /** @returns {GeolocationAPI} */
    function factory(): GeolocationAPI;
}
/**
 * Normalized geolocation reading.
 *
 * Note: `altitude`, `altitudeAccuracy`, `heading`, and `speed` are
 * passed through from the underlying `GeolocationCoordinates` and may
 * be `null` on devices that do not report them.
 */
export type GeolocationFix = {
    /**
     * - Latitude in decimal degrees.
     */
    lat: number;
    /**
     * - Longitude in decimal degrees.
     */
    lon: number;
    /**
     * - Horizontal accuracy in meters.
     */
    accuracy: number;
    /**
     * - Altitude in meters, or null.
     */
    altitude: number | null;
    /**
     * - Vertical accuracy in meters, or null.
     */
    altitudeAccuracy: number | null;
    /**
     * - Heading in degrees (0-360), or null.
     */
    heading: number | null;
    /**
     * - Speed in m/s, or null.
     */
    speed: number | null;
    /**
     * - DOMHighResTimeStamp of the fix.
     */
    timestamp: number;
};
/**
 * Error passed to `watch` callbacks on failure.
 */
export type GeolocationWatchError = Error & {
    code?: number;
};
/**
 * Watch callback invoked with `(fix, err?)` - see `watch`.
 */
export type GeolocationWatchCallback = (fix: GeolocationFix | null, err?: GeolocationWatchError) => void;
/**
 * Object returned by `geolocation.factory()`.
 */
export type GeolocationAPI = {
    /**
     * `true` if the Geolocation API is available.
     */
    isSupported: () => boolean;
    /**
     * Resolve the current device position.
     */
    current: (options?: PositionOptions) => Promise<GeolocationFix>;
    /**
     * Subscribe to position updates; returns a dispose function that calls `clearWatch`.
     */
    watch: (callback: GeolocationWatchCallback, options?: PositionOptions) => (() => void);
};
//# sourceMappingURL=geolocation.d.ts.map