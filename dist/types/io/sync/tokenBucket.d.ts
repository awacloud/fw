/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace tokenBucket {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /**
     * @returns {TokenBucketAPI}
     */
    function factory(): TokenBucketAPI;
}
export type TokenBucketOptions = {
    /**
     * - Integer >= 1, max tokens.
     */
    capacity: number;
    /**
     * - Tokens added per `refillInterval` (>= 0; 0 = fixed bucket).
     */
    refillRate: number;
    /**
     * - Interval in ms.
     */
    refillInterval?: number;
    /**
     * - Initial tokens (defaults to `capacity`).
     */
    initial?: number;
};
export type TokenBucket = {
    tryTake: (n?: number) => boolean;
    take: (n?: number) => Promise<void>;
    reset: () => void;
    cancel: () => void;
    available: number;
    capacity: number;
    refillRate: number;
    refillInterval: number;
};
/**
 * Token bucket rate limiter factory surface.
 */
export type TokenBucketAPI = {
    /**
     * - Build a fresh token bucket.
     */
    create: (opts: TokenBucketOptions) => TokenBucket;
};
//# sourceMappingURL=tokenBucket.d.ts.map