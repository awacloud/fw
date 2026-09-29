/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace focus {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: ({
        name: string;
        type: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): SecPolicyAPI;
        }[];
        factory(secPolicy: any): DomAPI;
    } | {
        name: string;
        type: string;
        dependencies: any[];
        factory(): EventsAPI;
    })[];
    /**
     * @param {Object} dom    - dom module (fw)
     * @param {Object} events - events module (fw)
     * @returns {FocusAPI} focus API
     */
    function factory(dom: any, events: any): FocusAPI;
}
/**
 * Controller returned by `trap()`.
 */
export type FocusTrap = {
    /**
     * - Whether the trap is currently paused (getter).
     */
    paused: boolean;
    /**
     * - Activate the trap and move focus inside.
     */
    activate: () => void;
    /**
     * - Deactivate the trap and optionally restore prior focus.
     */
    deactivate: () => void;
    /**
     * - Temporarily stop enforcing the trap.
     */
    pause: () => void;
    /**
     * - Resume enforcing the trap.
     */
    resume: () => void;
};
/**
 * Handle returned by `stash()`.
 */
export type FocusStash = {
    /**
     * - Restore the previously focused element.
     */
    restore: () => void;
};
/**
 * Focus management API returned by `factory()`.
 */
export type FocusAPI = {
    /**
     * - Create a focus trap within a container.
     */
    trap: (el: HTMLElement, opts?: any) => FocusTrap;
    /**
     * - Compute focusable elements in logical tab order.
     */
    tabOrder: (container: HTMLElement) => HTMLElement[];
    /**
     * - Move focus to the next focusable element.
     */
    next: (container?: HTMLElement) => void;
    /**
     * - Move focus to the previous focusable element.
     */
    previous: (container?: HTMLElement) => void;
    /**
     * - Capture current focus for later restoration.
     */
    stash: () => FocusStash;
    /**
     * - Return the currently focused element.
     */
    current: () => Element;
    /**
     * - Subscribe to focus changes; returns an unsubscribe function.
     */
    onChange: (fn: (current: Element, previous: Element) => void) => (() => void);
    /**
     * - Push current focus onto the stack and optionally focus a target; returns new depth.
     */
    pushFocus: (target?: Element | string) => number;
    /**
     * - Pop and restore the last pushed focus; returns the restored element or null.
     */
    popFocus: () => (Element | null);
    /**
     * - Current focus-stack depth.
     */
    focusStackDepth: () => number;
    /**
     * - Empty the focus stack without restoring.
     */
    clearFocusStack: () => void;
    /**
     * - Capture focus, run callback, restore (awaits a returned Promise).
     */
    restoreFocus: (cb: () => any, target?: Element | string) => any;
};
//# sourceMappingURL=focus.d.ts.map