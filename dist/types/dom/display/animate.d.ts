/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace animate {
    let name: string;
    let type: string;
    let dependencies: string[];
    let deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): EasingAPI;
    }[];
    /**
     * @param {Object} easing - Injected easing map (fw/io/calc/easing module).
     * @returns {AnimateAPI}
     */
    function factory(easing: any): AnimateAPI;
}
/**
 * The animation runner returned by `animate.factory()`.
 *
 * Starts a `requestAnimationFrame`-driven loop that forwards the current eased
 * value to `progress` on each frame and fires `onComplete` once the duration
 * elapses. Returns `void` (the loop is fire-and-forget; cancellation is via the
 * `running` guard).
 */
export type AnimateAPI = (duration: number, easingName: string, prop: {
    init: number;
    end: number;
}, progress: (value: number, running: () => boolean) => void, onComplete?: (() => void) | null, running?: () => boolean) => void;
//# sourceMappingURL=animate.d.ts.map