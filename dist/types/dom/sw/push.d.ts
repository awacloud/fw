/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace push {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): ServiceWorkerAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Base64API;
    })[];
    /**
     * @param {Object} serviceWorker - Resolved fw `serviceWorker` module.
     * @param {Object} b64 - Resolved fw `b64` module.
     * @returns {PushAPI}
     */
    function factory(serviceWorker: any, b64: any): PushAPI;
}
/**
 * JSON-friendly serialization of a native PushSubscription.
 */
export type PushSubscriptionInfo = {
    endpoint: string;
    expirationTime: number | null;
    keys: {
        p256dh: string | null;
        auth: string | null;
    };
    /**
     * - Native subscription escape hatch.
     */
    raw: PushSubscription;
};
/**
 * Push API returned by `factory()`.
 */
export type PushAPI = {
    /**
     * - Subscribe with a VAPID public key.
     */
    subscribe: (opts: {
        applicationServerKey: Uint8Array | string;
        userVisibleOnly?: boolean;
    }) => Promise<PushSubscriptionInfo>;
    /**
     * - Unsubscribe the current subscription; resolves false when none.
     */
    unsubscribe: () => Promise<boolean>;
    /**
     * - Current serialized subscription, or null.
     */
    current: () => Promise<PushSubscriptionInfo | null>;
    /**
     * - Current push permission state.
     */
    permission: () => Promise<"granted" | "denied" | "prompt">;
    /**
     * - Synchronous capability report.
     */
    support: () => {
        available: boolean;
        sw: boolean;
    };
};
//# sourceMappingURL=push.d.ts.map