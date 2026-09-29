/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace idle {
    let name: string;
    let type: string;
    let dependencies: any[];
    let worker: boolean;
    /** @returns {IdleAPI} */
    function factory(): IdleAPI;
}
/**
 * Idle detector instance returned by `create()` (native `IdleDetector`).
 */
export type IdleDetectorInstance = {
    /**
     * Current user state (`'active'` | `'idle'`).
     */
    userState: string;
    /**
     * Current screen state (`'locked'` | `'unlocked'`).
     */
    screenState: string;
    /**
     * Subscribe to change events; returns an unsubscribe function.
     */
    onChange: (callback: (payload: {
        userState: string;
        screenState: string;
    }) => void) => (() => boolean);
    /**
     * Start the underlying detector.
     */
    start: () => Promise<void>;
    /**
     * Stop the detector and clear all listeners.
     */
    stop: () => void;
};
/**
 * Idle detector instance returned by `fallback()` (activity-based polyfill).
 */
export type IdleFallbackInstance = {
    /**
     * Current user state (`'active'` | `'idle'`).
     */
    userState: string;
    /**
     * Subscribe to change events; returns an unsubscribe function.
     */
    onChange: (callback: (payload: {
        userState: string;
    }) => void) => (() => boolean);
    /**
     * Begin listening for user activity.
     */
    start: () => void;
    /**
     * Stop listening and clear timers/listeners.
     */
    stop: () => void;
};
/**
 * Public API returned by `idle.factory()`.
 */
export type IdleAPI = {
    /**
     * Whether the native `IdleDetector` API is available.
     */
    isSupported: () => boolean;
    /**
     * Request idle-detection permission (`'granted'` | `'denied'`).
     */
    requestPermission: () => Promise<string>;
    /**
     * Create a native idle detector.
     */
    create: (options?: {
        threshold?: number;
    }) => Promise<IdleDetectorInstance>;
    /**
     * Create an activity-based fallback detector.
     */
    fallback: (options?: {
        threshold?: number;
        events?: string[];
    }) => IdleFallbackInstance;
};
//# sourceMappingURL=idle.d.ts.map