/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace gesture {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: {
        name: string;
        type: string;
        dependencies: any[];
        factory(): EventsAPI;
    }[];
    /**
     * @param {Object} events - Resolved events module instance (fw/dom/query/events).
     * @returns {GestureAPI}
     */
    function factory(events: any): GestureAPI;
}
/**
 * A gesture controller returned by `attach()`.
 */
export type GestureController = {
    /**
     * - Subscribe to a gesture event; returns an unsubscribe function.
     */
    on: (name: string, fn: Function) => Function;
    /**
     * - Unsubscribe a function from a gesture event.
     */
    off: (name: string, fn: Function) => void;
    /**
     * - Detach all DOM listeners and clear subscriptions.
     */
    detach: () => void;
    /**
     * - Alias of `detach` (recognised by `ui.adopt`).
     */
    dispose: () => void;
};
/**
 * Gesture-detection surface returned by `factory()`.
 */
export type GestureAPI = {
    /**
     * - Attach a gesture detector to a DOM element.
     */
    attach: (el: Element, opts?: {
        tapMaxMs?: number;
        doubletapMaxMs?: number;
        longpressMs?: number;
        swipeMinPx?: number;
        swipeMaxMs?: number;
    }) => GestureController;
};
//# sourceMappingURL=gesture.d.ts.map