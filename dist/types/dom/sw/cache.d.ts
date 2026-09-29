/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace cache {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /**
     * @returns {CacheAPI}
     */
    function factory(): CacheAPI;
}
export type CacheWrapper = {
    /**
     *   Store a response keyed by request.
     */
    put: (request: RequestInfo, response: Response) => Promise<void>;
    /**
     *   Return the first matching response or undefined.
     */
    match: (request: RequestInfo, options?: CacheQueryOptions) => Promise<Response | undefined>;
    /**
     *   Return all matching responses.
     */
    matchAll: (request?: RequestInfo, options?: CacheQueryOptions) => Promise<Response[]>;
    /**
     *   Fetch and store a single request.
     */
    add: (request: RequestInfo) => Promise<void>;
    /**
     *   Fetch and store multiple requests atomically.
     */
    addAll: (requests: RequestInfo[]) => Promise<void>;
    /**
     *   Remove an entry; resolves to true if anything was deleted.
     */
    delete: (request: RequestInfo, options?: CacheQueryOptions) => Promise<boolean>;
    /**
     *   List stored requests.
     */
    keys: (request?: RequestInfo, options?: CacheQueryOptions) => Promise<Request[]>;
};
/**
 * CacheStorage helper surface returned by `factory()`.
 */
export type CacheAPI = {
    /**
     * - Open (creating if needed) a named cache.
     */
    open: (name: string) => Promise<CacheWrapper>;
    /**
     * - Delete an entire named cache; resolves true if it existed.
     */
    delete: (name: string) => Promise<boolean>;
    /**
     * - Check whether a named cache exists.
     */
    has: (name: string) => Promise<boolean>;
    /**
     * - List all cache names.
     */
    keys: () => Promise<string[]>;
    /**
     * - Match a request across every cache.
     */
    match: (request: RequestInfo, options?: CacheQueryOptions) => Promise<Response | undefined>;
};
//# sourceMappingURL=cache.d.ts.map