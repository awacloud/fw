/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace clock {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {ClockAPI} */
    function factory(): ClockAPI;
}
/**
 * Public API returned by `clock.factory()`.
 */
export type ClockAPI = {
    /**
     * Wall-clock milliseconds (`Date.now()` wrapper).
     */
    now: () => number;
    /**
     * Never-decreasing milliseconds; flattens if the wall clock jumps backwards.
     */
    monotonic: () => number;
    /**
     * Positive elapsed milliseconds since `t0` (`monotonic() - t0`, clamped at 0).
     */
    since: (t0: number) => number;
    /**
     * `new Date().toISOString()` snapshot.
     */
    iso: () => string;
    /**
     * Human-readable duration string (e.g. `'1.234 s'`, `'12.3 ms'`).
     */
    format: (ms: number) => string;
};
//# sourceMappingURL=clock.d.ts.map