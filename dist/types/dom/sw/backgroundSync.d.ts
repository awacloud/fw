/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace backgroundSync {
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
     * @param {Object} serviceWorker - Resolved instance of the serviceWorker module.
     * @returns {BackgroundSyncAPI}
     */
    function factory(serviceWorker: any): BackgroundSyncAPI;
}
export type SyncManager = {
    register: (arg0: string) => Promise<void>;
    getTags: () => Promise<string[]>;
};
/**
 * Background Sync helper surface returned by `factory()`.
 */
export type BackgroundSyncAPI = {
    /**
     * - Register a sync tag (throws `BackgroundSyncNotSupported` if SyncManager is unavailable).
     */
    register: (tag: string) => Promise<void>;
    /**
     * - List currently registered sync tags (throws `BackgroundSyncNotSupported` if SyncManager is unavailable).
     */
    list: () => Promise<string[]>;
    /**
     * - Detect availability of the Background Sync API.
     */
    support: () => {
        available: boolean;
        sw: boolean;
    };
};
//# sourceMappingURL=backgroundSync.d.ts.map