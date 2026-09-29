/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Apply the degraded `community` sanity layer to the current realm.
 *
 * Same contract as `applyBase()`: browser-only, idempotent, returns a step
 * report. Must be called before any application code — every guarantee is
 * positional.
 *
 * @returns {{applied: boolean, reason?: string, steps: string[]}} report of what was applied
 */
export function applyCommunity(): {
    applied: boolean;
    reason?: string;
    steps: string[];
};
//# sourceMappingURL=community.d.ts.map