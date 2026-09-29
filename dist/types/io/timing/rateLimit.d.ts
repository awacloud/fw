/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace rateLimit {
    let name: string;
    let dependencies: any[];
    /** @returns {RateLimitAPI} */
    function factory(): RateLimitAPI;
}
/**
 * A debounced callable wrapping the original `fn`.
 */
export type DebouncedFn = Function;
/**
 * A throttled callable wrapping the original `fn`. Same shape as {@link DebouncedFn}.
 */
export type ThrottledFn = Function;
/**
 * Public API returned by `rateLimit.factory()`.
 */
export type RateLimitAPI = {
    /**
     * Create a debounced version of `fn`.
     */
    debounce: (fn: Function, delay: number, options?: {
        leading?: boolean;
        trailing?: boolean;
        maxWait?: number;
    }) => DebouncedFn;
    /**
     * Create a throttled version of `fn`.
     */
    throttle: (fn: Function, interval: number, options?: {
        leading?: boolean;
        trailing?: boolean;
    }) => ThrottledFn;
};
//# sourceMappingURL=rateLimit.d.ts.map