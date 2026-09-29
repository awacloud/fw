/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace fullscreen {
    let name: string;
    let type: string;
    let dependencies: any[];
    /** @returns {FullscreenAPI} */
    function factory(): FullscreenAPI;
}
/**
 * Named state-change callback registry exposed as `api.listen`.
 */
export type FullscreenListenAPI = {
    /**
     * Register (or replace) a named state-change callback.
     */
    add: (name: string, fn: (active: boolean) => void) => void;
    /**
     * Remove a named callback; detaches the listener when none remain.
     */
    del: (name: string) => void;
};
/**
 * Public API returned by `fullscreen.factory()`.
 */
export type FullscreenAPI = {
    /**
     * Whether the Fullscreen API is available.
     */
    isSupported: () => boolean;
    /**
     * Whether the browser is currently in fullscreen mode.
     */
    isFullscreen: () => boolean;
    /**
     * Enter fullscreen for the element resolved from `source`.
     */
    enter: (source?: Event | Element) => Promise<void>;
    /**
     * Exit fullscreen mode.
     */
    exit: () => Promise<void>;
    /**
     * Toggle fullscreen state.
     */
    toggle: (source?: Event | Element) => Promise<void>;
    /**
     * Named state-change callback registry.
     */
    listen: FullscreenListenAPI;
    /**
     * Remove every callback and detach the document-level listener.
     */
    dispose: () => void;
};
//# sourceMappingURL=fullscreen.d.ts.map