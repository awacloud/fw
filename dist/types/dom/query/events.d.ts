/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace events {
    let name: string;
    let type: string;
    let dependencies: any[];
    /** @returns {EventsAPI} */
    function factory(): EventsAPI;
}
/**
 * An active listener entry stored in the internal registry.
 */
export type ListenerEntry = {
    /**
     * - The target element the listener is bound to.
     */
    elm: EventTarget;
    /**
     * - DOM event type (e.g. `'click'`).
     */
    type: string;
    /**
     * - The handler function or object.
     */
    fn: EventListenerOrEventListenerObject;
    /**
     * - Options passed to
     * `addEventListener` (or `false` for the default).
     */
    options: boolean | AddEventListenerOptions | false;
};
/**
 * A named custom-event preset stored in the internal registry.
 */
export type PresetEntry = {
    /**
     * - The target element that will dispatch the event.
     */
    elm: EventTarget;
    /**
     * - Custom event type name.
     */
    type: string;
    /**
     * - Default detail payload.
     */
    detail: any;
    /**
     * - Default event options (`bubbles`, `cancelable`,
     * `composed`).
     */
    options: any;
};
/**
 * Namespaced sub-API returned by `EventsAPI.scope()`.
 */
export type EventsScope = {
    /**
     * Register a scoped named listener; returns the full prefixed name.
     */
    on: (name: string, elm: EventTarget, type: string, fn: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) => string;
    /**
     * Register a scoped delegated listener; returns the full prefixed name.
     */
    delegate: (name: string, root: EventTarget, type: string, selector: string, fn: Function, options?: boolean | AddEventListenerOptions) => string;
    /**
     * Remove a scoped listener by name.
     */
    off: (name: string) => void;
    /**
     * Whether a scoped listener is registered.
     */
    has: (name: string) => boolean;
    /**
     * Remove every listener owned by this scope.
     */
    clear: () => void;
};
/**
 * Public API returned by `events.factory()`.
 */
export type EventsAPI = {
    /**
     * Register a named DOM listener (replaces any existing one with the same name).
     */
    on: (name: string, elm: EventTarget, type: string, fn: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) => void;
    /**
     * Remove a named listener.
     */
    off: (name: string) => void;
    /**
     * Whether a named listener is registered.
     */
    has: (name: string) => boolean;
    /**
     * Remove every registered listener.
     */
    clear: () => void;
    /**
     * Dispatch a `CustomEvent` immediately.
     */
    emit: (elm: EventTarget, type: string, detail?: any, options?: object) => void;
    /**
     * Register a named custom-event preset.
     */
    preset: (name: string, elm: EventTarget, type: string, detail?: any, options?: object) => void;
    /**
     * Fire a registered preset by name.
     */
    dispatch: (name: string, detail?: any) => void;
    /**
     * Delete a named preset.
     */
    unset: (name: string) => void;
    /**
     * Register a named delegated listener.
     */
    delegate: (name: string, root: EventTarget, type: string, selector: string, fn: Function, options?: boolean | AddEventListenerOptions) => void;
    /**
     * Create a namespaced sub-API for grouped cleanup.
     */
    scope: (scopeName: string) => EventsScope;
    /**
     * Install a MutationObserver that auto-detaches listeners; returns a disabler.
     */
    autoCleanup: (root?: Element) => (() => void);
    /**
     * Disabler installed by `autoCleanup`; absent until then.
     */
    _disableAutoCleanup?: (() => void);
};
//# sourceMappingURL=events.d.ts.map