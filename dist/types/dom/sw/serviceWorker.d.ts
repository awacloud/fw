/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace serviceWorker {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /**
     * @returns {ServiceWorkerAPI}
     */
    function factory(): ServiceWorkerAPI;
}
/**
 * Service Worker registration/lifecycle helper surface returned by `factory()`.
 */
export type ServiceWorkerAPI = {
    /**
     * - Register a Service Worker script.
     */
    register: (scriptUrl: string, options?: RegistrationOptions) => Promise<ServiceWorkerRegistration>;
    /**
     * - Unregister Service Worker(s); resolves true if at least one was unregistered.
     */
    unregister: (scope?: string) => Promise<boolean>;
    /**
     * - Wait for and resolve the controlling registration.
     */
    ready: () => Promise<ServiceWorkerRegistration>;
    /**
     * - Trigger `update()` on registration(s).
     */
    update: (scope?: string) => Promise<void>;
    /**
     * - Attach an `updatefound` callback; returns a disposer.
     */
    onUpdate: (callback: (reg: ServiceWorkerRegistration) => void) => (() => void);
    /**
     * - Post a message to the active controller (throws if none).
     */
    postMessage: (data: any) => void;
    /**
     * - Listen for messages from a Service Worker; returns a disposer.
     */
    onMessage: (callback: (data: any, event: MessageEvent) => void) => (() => void);
    /**
     * - Non-throwing probe for Service Worker support.
     */
    isSupported: () => boolean;
    /**
     * - Current controlling Service Worker, or null if none.
     */
    controller: ServiceWorker | null;
};
//# sourceMappingURL=serviceWorker.d.ts.map