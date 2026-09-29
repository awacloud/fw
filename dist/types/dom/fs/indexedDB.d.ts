/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace indexedDB {
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
    /** @returns {IndexedDBAPI} */
    function factory(broadcastChannel: any): IndexedDBAPI;
}
export type IDBStoreAccessor = {
    get: (arg0: IDBValidKey) => Promise<any>;
    set: (arg0: IDBValidKey, arg1: any) => Promise<IDBValidKey>;
    has: (arg0: IDBValidKey) => Promise<boolean>;
    del: (arg0: IDBValidKey) => Promise<void>;
    clear: () => Promise<void>;
    each: (arg0: (arg0: any, arg1: IDBValidKey) => boolean | void) => Promise<void>;
    count: (arg0: (IDBValidKey | IDBKeyRange) | undefined) => Promise<number>;
    getAll: (arg0: (IDBValidKey | IDBKeyRange) | undefined, arg1: number | undefined) => Promise<any[]>;
    getAllKeys: (arg0: (IDBValidKey | IDBKeyRange) | undefined, arg1: number | undefined) => Promise<IDBValidKey[]>;
};
export type DB = {
    name: string;
    version: number;
    storeNames: string[];
    store: (arg0: string) => IDBStoreAccessor;
    close: () => void;
    listen: {
        add: (arg0: string, arg1: Function) => void;
        del: (arg0: string) => void;
    };
};
/**
 * Object returned by `indexedDB.factory()`.
 */
export type IndexedDBAPI = {
    /**
     * `true` when IndexedDB is available in this environment.
     */
    isSupported: () => boolean;
    /**
     * Open (or create/upgrade) a database and resolve with a `DB` handle.
     */
    open: (name: string, version: number, upgrade?: (arg0: IDBDatabase, arg1: number, arg2: number) => void, options?: {
        crossTab?: boolean;
        namespace?: string;
    }) => Promise<DB>;
    /**
     * Permanently delete the named database.
     */
    drop: (name: string) => Promise<void>;
};
//# sourceMappingURL=indexedDB.d.ts.map