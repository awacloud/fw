/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace storage {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: {
        name: string;
        type: string;
        dependencies: any[];
        factory(): BroadcastChannelAPI;
    }[];
    /** @returns {StorageAPI} */
    function factory(broadcastChannel: any): StorageAPI;
}
export type StorageNamespace = {
    get: (arg0: string) => any;
    set: (arg0: string, arg1: any) => void;
    del: (arg0: string) => void;
    clear: () => void;
    keys: () => string[];
    has: (arg0: string) => boolean;
    on?: (arg0: string, arg1: Function) => Function;
    off?: (arg0: string) => void;
    length: number;
    listen: any;
};
/**
 * Object returned by `storage.factory()`.
 */
export type StorageAPI = {
    /**
     * Persistent storage backed by `localStorage`; `null` when unavailable.
     */
    local: StorageNamespace | null;
    /**
     * Session-scoped storage backed by `sessionStorage`; `null` when unavailable.
     */
    session: StorageNamespace | null;
    /**
     * `true` when at least one storage backend is available.
     */
    isSupported: () => boolean;
    /**
     * Configure cross-tab diffusion (must be called before any `local.listen.add`).
     */
    configure: (opts?: {
        crossTab?: boolean;
        namespace?: string;
    }) => void;
};
//# sourceMappingURL=storage.d.ts.map