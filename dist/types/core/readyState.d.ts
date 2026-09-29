/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Create a tiny DOM ready-state helper with queued callbacks.
 * @returns {{loaded: (fn: Function, argArray?: any[]) => void, complete: (fn: Function, argArray?: any[]) => void}}
 */
export function readyState(): {
    loaded: (fn: Function, argArray?: any[]) => void;
    complete: (fn: Function, argArray?: any[]) => void;
};
//# sourceMappingURL=readyState.d.ts.map