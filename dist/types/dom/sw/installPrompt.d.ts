/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace installPrompt {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /**
     * @returns {InstallPromptAPI}
     */
    function factory(): InstallPromptAPI;
}
/**
 * Options of `install()`.
 */
export type InstallOptions = {
    /**
     * - The window the events fire on (default `globalThis`).
     */
    win?: EventTarget;
    /**
     * - Called when the browser offers installation.
     */
    onAvailable?: () => void;
    /**
     * - Called once the app is installed.
     */
    onInstalled?: () => void;
};
/**
 * The install offer returned by `install()`.
 */
export type InstallOffer = {
    /**
     * - An install offer is deferred and can be prompted.
     */
    available: () => boolean;
    /**
     * - Show the deferred offer; never rejects.
     */
    prompt: () => Promise<"accepted" | "dismissed" | "unavailable">;
    /**
     * - Remove both listeners and drop the deferred offer.
     */
    dispose: () => void;
};
/**
 * Options of `launchQueue()`.
 */
export type LaunchQueueOptions = {
    /**
     * - The window carrying `launchQueue` (default `globalThis`).
     */
    win?: any;
    /**
     * - Receives the launched files' handles (never an empty list).
     */
    onFiles: (handles: FileSystemFileHandle[]) => void;
};
/**
 * The launch-queue consumer returned by `launchQueue()`.
 */
export type LaunchQueueConsumer = {
    /**
     * - The File Handling launch queue exists on this page.
     */
    supported: boolean;
    /**
     * - Neutralise the consumer (a consumer cannot be removed).
     */
    dispose: () => void;
};
/**
 * Public surface returned by the installPrompt factory.
 */
export type InstallPromptAPI = {
    /**
     * - Defer the browser's install offer.
     */
    install: (opts?: InstallOptions) => InstallOffer;
    /**
     * - Consume the File Handling launch queue.
     */
    launchQueue: (opts: LaunchQueueOptions) => LaunchQueueConsumer;
};
//# sourceMappingURL=installPrompt.d.ts.map