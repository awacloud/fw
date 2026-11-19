/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Apply the strict `base` sanity denylist to the current realm.
 *
 * Must be called before any application code — every guarantee is positional:
 * scripts that ran earlier observed an unlocked realm.
 *
 * Browser-only: outside a `window` + `document` realm the call is a no-op
 * reporting `'non-browser-realm'` (SSR prerender of a client component must not
 * crash). Idempotent: a second call is a no-op reporting `'already-applied'`
 * instead of re-poisoning non-configurable slots.
 *
 * The returned `steps` list names each hardening pass in application order.
 * Prototype freezing runs FIRST by design (most critical, and later passes
 * install setters that must survive it). A pass is listed once it ran; the
 * individual slots it could not harden (a non-configurable property, a frozen
 * namespace) are listed in `failures`, one `{ step, target, message }` entry
 * each, `[]` on a clean apply. They are also warned on the console.
 *
 * @returns {{applied: boolean, reason?: string, steps: string[],
 *   failures: Array<{step: string, target: string, message: string}>}}
 *   report of what was applied
 */
export function applyBase(): {
    applied: boolean;
    reason?: string;
    steps: string[];
    failures: Array<{
        step: string;
        target: string;
        message: string;
    }>;
};
//# sourceMappingURL=base.d.ts.map