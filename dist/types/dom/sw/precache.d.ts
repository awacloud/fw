/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace precache {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): CacheAPI;
    }[];
    /**
     * @param {{open: (name: string) => Promise<any>, delete: (name: string) => Promise<boolean>, keys: () => Promise<string[]>}} cache - Module cache (fw)
     * @returns {PrecacheAPI}
     */
    function factory(cache: {
        open: (name: string) => Promise<any>;
        delete: (name: string) => Promise<boolean>;
        keys: () => Promise<string[]>;
    }): PrecacheAPI;
}
/**
 * Strategy chosen for one request.
 */
export type StrategyKind = "cache-first" | "network-first" | "pass";
/**
 * The message types the worker answers.
 */
export type PrecacheMessages = {
    /**
     * - Take over now (`skipWaiting()`).
     */
    skipWaiting: string;
    /**
     * - Answer `{ version }` on the first transferred port.
     */
    version: string;
};
/**
 * Options of `create()`.
 */
export type PrecacheOptions = {
    /**
     * - The worker global scope (`self`); required.
     */
    scope: any;
    /**
     * - Cache-name prefix owned by this app.
     */
    prefix: string;
    /**
     * - The release; the cache is `prefix + version`.
     */
    version: string;
    /**
     * - The release's files, relative to the worker.
     */
    urls: string[];
    /**
     * - Per-request strategy (default always `'cache-first'`).
     */
    strategy?: (request: Request, url: URL) => StrategyKind;
    /**
     * - URL served for a navigation miss in cache-first (default `'./'`; `null` goes to the network).
     */
    navigationFallback?: string | null;
    /**
     * - Keep a copy of 200 network responses (default `true`).
     */
    cacheRuntime?: boolean;
    /**
     * - When install calls `skipWaiting()` (default `'first-install'`).
     */
    takeOver?: "first-install" | "always" | "never";
    /**
     * - `clients.claim()` on activate (default `true`).
     */
    claim?: boolean;
    /**
     * - The message protocol (default `DEFAULT_MESSAGES`; `null` installs no message listener).
     */
    messages?: PrecacheMessages | null;
};
/**
 * The event handlers of one instance.
 */
export type PrecacheHandlers = {
    /**
     * - Pre-cache, then take over per `takeOver`.
     */
    install: (event: any) => void;
    /**
     * - Delete this prefix's other caches, then claim.
     */
    activate: (event: any) => void;
    /**
     * - Route a same-origin GET through the strategy.
     */
    fetch: (event: any) => void;
    /**
     * - Answer skip-waiting and version requests.
     */
    message: (event: any) => void;
};
/**
 * The instance returned by `create()`.
 */
export type PrecacheInstance = {
    /**
     * - `prefix + version`.
     */
    cacheName: string;
    /**
     * - The event handlers, callable directly.
     */
    handlers: PrecacheHandlers;
    /**
     * - The release's copy first, then the network.
     */
    cacheFirst: (request: Request) => Promise<Response>;
    /**
     * - The network first, then the last copy.
     */
    networkFirst: (request: Request) => Promise<Response>;
    /**
     * - Attach the handlers to the scope (idempotent).
     */
    listen: () => PrecacheInstance;
};
/**
 * Public surface returned by the precache factory.
 */
export type PrecacheAPI = {
    /**
     * - Build a release precache for one worker scope.
     */
    create: (opts: PrecacheOptions) => PrecacheInstance;
    /**
     * - The default wire protocol (shared with `swUpdate`).
     */
    DEFAULT_MESSAGES: Readonly<PrecacheMessages>;
};
//# sourceMappingURL=precache.d.ts.map