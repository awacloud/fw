/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace media {
    let name: string;
    let type: string;
    let dependencies: any[];
    /** @returns {MediaAPI} */
    function factory(): MediaAPI;
}
export type StreamHandle = {
    id: string;
    type: "audio" | "video" | "screen";
    stream: MediaStream;
    settings: MediaTrackSettings[];
    constraints: MediaTrackConstraints[];
    stop: () => void;
};
export type MediaDeviceLists = {
    audio: MediaDeviceInfo[];
    video: MediaDeviceInfo[];
};
/**
 * Named device-change listener registry.
 */
export type MediaDevicesListen = {
    /**
     * Register a named device-change listener.
     */
    add: (name: string, fn: (lists: MediaDeviceLists) => void) => void;
    /**
     * Remove a named listener.
     */
    del: (name: string) => void;
};
/**
 * Device-management sub-API.
 */
export type MediaDevicesAPI = {
    /**
     * Enumerate devices, update the cache, notify listeners.
     */
    refresh: () => Promise<MediaDeviceLists>;
    /**
     * Cached device lists from the last refresh.
     */
    list: () => MediaDeviceLists;
    /**
     * Cached audio input devices.
     */
    audio: () => MediaDeviceInfo[];
    /**
     * Cached video input devices.
     */
    video: () => MediaDeviceInfo[];
    /**
     * Named device-change listeners.
     */
    listen: MediaDevicesListen;
};
/**
 * A stream starter sub-API (audio / video / screen).
 */
export type MediaStarter = {
    /**
     * Open a stream, resolving to a handle.
     */
    start: (opts?: object) => Promise<StreamHandle>;
};
/**
 * Active-stream registry sub-API.
 */
export type MediaStreamsAPI = {
    /**
     * All active stream handles.
     */
    list: () => StreamHandle[];
    /**
     * Handle by `MediaStream.id`, or `null`.
     */
    get: (id: string) => (StreamHandle | null);
    /**
     * Handles of a given type.
     */
    byType: (type: "audio" | "video" | "screen") => StreamHandle[];
    /**
     * Stop tracks and remove one stream.
     */
    stop: (id: string) => void;
    /**
     * Stop all active streams.
     */
    stopAll: () => void;
    /**
     * Stop all streams of a type.
     */
    stopType: (type: "audio" | "video" | "screen") => void;
};
/**
 * Public API returned by `media.factory()`.
 */
export type MediaAPI = {
    /**
     * Browser API availability.
     */
    isSupported: () => {
        audio: boolean;
        video: boolean;
        screen: boolean;
    };
    /**
     * Inferred permission state.
     */
    permissions: () => {
        audio: boolean;
        video: boolean;
    };
    /**
     * Device enumeration and listeners.
     */
    devices: MediaDevicesAPI;
    /**
     * Audio stream starter.
     */
    audio: MediaStarter;
    /**
     * Video stream starter.
     */
    video: MediaStarter;
    /**
     * Screen-capture starter.
     */
    screen: MediaStarter;
    /**
     * Active-stream registry.
     */
    streams: MediaStreamsAPI;
    /**
     * Remember preferred device for the next start.
     */
    select: (type: "audio" | "video", deviceId: string) => void;
    /**
     * Currently selected device IDs.
     */
    selected: () => {
        audio: string | null;
        video: string | null;
    };
    /**
     * Stop all streams and detach listeners.
     */
    dispose: () => void;
};
//# sourceMappingURL=media.d.ts.map