/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace wakeLock {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: {
        name: string;
        type: string;
        dependencies: any[];
        worker: boolean;
        factory(): VisibilityAPI;
    }[];
    let worker: boolean;
    /**
     * @param {import('./visibility.js').visibility extends { factory: (...a:any[]) => infer R } ? R : any} visibility
     *   Resolved visibility module (provides `onVisible`).
     * @returns {WakeLockAPI}
     */
    function factory(visibility: any extends {
        factory: (...a: any[]) => infer R;
    } ? R : any): WakeLockAPI;
}
export type WakeLockHandle = {
    /**
     *   `true` once the lock has been released (by the caller, by the browser
     *   auto-releasing on hide, or by an explicit `release()` call).
     */
    released: boolean;
    /**
     *   Subscribe to the (single) release notification. Returns an unsubscribe
     *   function. Subscribing after the lock has already been released is a no-op:
     *   the callback will not fire retroactively.
     */
    onRelease: (callback: () => void) => () => void;
    /**
     *   Explicitly release the lock. Idempotent; resolves once listeners have run
     *   and the underlying sentinel release has settled (errors swallowed).
     */
    release: () => Promise<void>;
};
export type WakeLockAcquireOptions = {
    /**
     * When `true`, the module re-requests a fresh sentinel each time the tab
     * returns to `visible`, as long as the handle has not been explicitly
     * released. The original handle is still considered released as soon as the
     * first sentinel goes away - callers wanting to follow re-acquisitions
     * should call `acquire()` again from their `onRelease` callback if needed.
     */
    reacquireOnVisible?: boolean;
};
/**
 * Public surface returned by the wakeLock factory.
 */
export type WakeLockAPI = {
    /**
     * - `true` if the current environment exposes the Screen Wake Lock API.
     */
    isSupported: () => boolean;
    /**
     * - Acquire a screen wake lock, resolving with a handle; rejects if unsupported or if the initial request fails.
     */
    acquire: (opts?: WakeLockAcquireOptions) => Promise<WakeLockHandle>;
};
//# sourceMappingURL=wakeLock.d.ts.map