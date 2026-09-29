/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace sensors {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    let worker: boolean;
    /** @returns {SensorsAPI} */
    function factory(): SensorsAPI;
}
export type OrientationReading = {
    /**
     * - Rotation around z-axis (0-360°).
     */
    alpha: number | null;
    /**
     * - Rotation around x-axis (-180-180°).
     */
    beta: number | null;
    /**
     * - Rotation around y-axis (-90-90°).
     */
    gamma: number | null;
    /**
     * - `true` for absolute orientation.
     */
    absolute: boolean;
    /**
     * - `event.timeStamp`.
     */
    timestamp: number;
};
export type MotionReading = {
    /**
     * - Acceleration excluding gravity (m/s²).
     */
    acceleration: {
        x: number;
        y: number;
        z: number;
    } | null;
    /**
     * - Acceleration including gravity (m/s²).
     */
    accelerationIncludingGravity: {
        x: number;
        y: number;
        z: number;
    } | null;
    /**
     * - Rotation rate (°/s).
     */
    rotationRate: {
        alpha: number;
        beta: number;
        gamma: number;
    } | null;
    /**
     * - Sampling interval in ms.
     */
    interval: number;
    /**
     * - `event.timeStamp`.
     */
    timestamp: number;
};
export type GyroReading = {
    /**
     * - Rotation rate around x-axis (rad/s, Generic Sensor) or °/s (fallback).
     */
    x: number | null;
    /**
     * - Rotation rate around y-axis.
     */
    y: number | null;
    /**
     * - Rotation rate around z-axis.
     */
    z: number | null;
    /**
     * - Sensor timestamp or `event.timeStamp`.
     */
    timestamp: number;
};
export type AccelReading = {
    /**
     * - Acceleration along x-axis (m/s²).
     */
    x: number | null;
    /**
     * - Acceleration along y-axis.
     */
    y: number | null;
    /**
     * - Acceleration along z-axis.
     */
    z: number | null;
    /**
     * - Sensor timestamp or `event.timeStamp`.
     */
    timestamp: number;
};
/**
 * Device orientation sub-API.
 */
export type OrientationAPI = {
    /**
     * `true` if `DeviceOrientationEvent` is defined.
     */
    isSupported: () => boolean;
    /**
     * Subscribe to orientation events; returns a dispose function.
     */
    watch: (callback: (reading: OrientationReading) => void, opts?: {
        absolute?: boolean;
    }) => (() => void);
};
/**
 * Device motion sub-API.
 */
export type MotionAPI = {
    /**
     * `true` if `DeviceMotionEvent` is defined.
     */
    isSupported: () => boolean;
    /**
     * Subscribe to motion events; returns a dispose function.
     */
    watch: (callback: (reading: MotionReading) => void) => (() => void);
};
/**
 * Gyroscope sub-API (Generic Sensor preferred, DeviceMotion fallback).
 */
export type GyroscopeAPI = {
    /**
     * `true` if `Gyroscope` or `DeviceMotionEvent` is defined.
     */
    isSupported: () => boolean;
    /**
     * Subscribe to gyroscope readings; returns a dispose function.
     */
    watch: (callback: (reading: GyroReading) => void, opts?: {
        frequency?: number;
    }) => (() => void);
};
/**
 * Accelerometer sub-API (Generic Sensor preferred, DeviceMotion fallback).
 */
export type AccelerometerAPI = {
    /**
     * `true` if `Accelerometer` or `DeviceMotionEvent` is defined.
     */
    isSupported: () => boolean;
    /**
     * Subscribe to accelerometer readings; returns a dispose function.
     */
    watch: (callback: (reading: AccelReading) => void, opts?: {
        frequency?: number;
        includeGravity?: boolean;
    }) => (() => void);
};
/**
 * Object returned by `sensors.factory()`.
 */
export type SensorsAPI = {
    /**
     * Device orientation sub-API.
     */
    orientation: OrientationAPI;
    /**
     * Device motion sub-API.
     */
    motion: MotionAPI;
    /**
     * Gyroscope sub-API.
     */
    gyroscope: GyroscopeAPI;
    /**
     * Accelerometer sub-API.
     */
    accelerometer: AccelerometerAPI;
    /**
     * Request motion/orientation permission (iOS 13+).
     */
    requestPermission: () => Promise<"granted" | "denied" | "unsupported">;
};
//# sourceMappingURL=sensors.d.ts.map