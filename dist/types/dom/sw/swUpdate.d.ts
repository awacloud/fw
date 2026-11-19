/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace swUpdate {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): ServiceWorkerAPI;
    }[];
    /**
     * @param {{isSupported: () => boolean, register: (url: string, o?: RegistrationOptions) => Promise<ServiceWorkerRegistration>}} serviceWorker - Module serviceWorker (fw)
     * @returns {SwUpdateAPI}
     */
    function factory(serviceWorker: {
        isSupported: () => boolean;
        register: (url: string, o?: RegistrationOptions) => Promise<ServiceWorkerRegistration>;
    }): SwUpdateAPI;
}
/**
 * Result of `checkForUpdates()`: `current` — no newer release; `ready` — one
 * is installed and waits; `offline` — the check could not reach the server;
 * `unavailable` — no service worker on this page.
 */
export type CheckResult = "current" | "ready" | "offline" | "unavailable";
/**
 * The message types posted to the worker.
 */
export type SwMessages = {
    /**
     * - Asks the waiting worker to take over.
     */
    skipWaiting: string;
    /**
     * - Asks the active worker for its release (answered on the transferred port).
     */
    version: string;
};
/**
 * Options of `create()`.
 */
export type SwUpdateOptions = {
    /**
     * - The worker script URL.
     */
    swUrl: string;
    /**
     * - Forwarded to `serviceWorker.register` (default `{ type: 'module', updateViaCache: 'none' }`).
     */
    registerOptions?: RegistrationOptions;
    /**
     * - The page window (default `globalThis`).
     */
    win?: any;
    /**
     * - Called once when a newer release waits on a controlled page.
     */
    onUpdateReady?: () => void;
    /**
     * - Called at creation when a worker controls the page, and on every `controllerchange`.
     */
    onControlled?: () => void;
    /**
     * - The message types (default `DEFAULT_MESSAGES`).
     */
    messages?: SwMessages;
    /**
     * - Milliseconds a check waits for a found release to install (default 30000).
     */
    installWait?: number;
    /**
     * - Milliseconds `version()` waits for the worker's answer (default 2000).
     */
    versionWait?: number;
};
/**
 * The update controller resolved by `create()`.
 */
export type SwUpdateController = {
    /**
     * - Registration outcome.
     */
    state: "registered" | "unsupported" | "failed";
    /**
     * - A newer release waits and a worker controls the page.
     */
    updateReady: () => boolean;
    /**
     * - Ask the server for a newer release.
     */
    checkForUpdates: () => Promise<CheckResult>;
    /**
     * - Let the waiting release take over, then reload; `false` when none waits.
     */
    applyUpdate: () => boolean;
    /**
     * - The release the active worker serves, `null` when unknown.
     */
    version: () => Promise<string | null>;
    /**
     * - A worker controls the page.
     */
    controlled: () => boolean;
    /**
     * - Remove the listeners `create()` added.
     */
    dispose: () => void;
};
/**
 * Public surface returned by the swUpdate factory.
 */
export type SwUpdateAPI = {
    /**
     * - Register the worker and drive its updates.
     */
    create: (opts: SwUpdateOptions) => Promise<SwUpdateController>;
    /**
     * - The default wire protocol.
     */
    DEFAULT_MESSAGES: Readonly<SwMessages>;
};
//# sourceMappingURL=swUpdate.d.ts.map