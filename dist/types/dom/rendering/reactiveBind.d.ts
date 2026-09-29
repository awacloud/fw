/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace reactiveBind {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): SignalAPI;
    }[];
    /** @returns {ReactiveBindAPI} */
    function factory(signal: any): ReactiveBindAPI;
}
/**
 * Public shape returned by `reactiveBind.factory()`.
 */
export type ReactiveBindAPI = {
    /**
     * Create a new binding controller for the given uiSession.
     */
    create: (ui: object) => ReactiveBindController;
};
/**
 * A binding controller scoped to one `uiSession` instance.
 */
export type ReactiveBindController = {
    /**
     * Bind a signal/thunk to `textContent` of a node.
     */
    text: (blockId: string, localId: string, sigOrFn: object | Function) => (() => void);
    /**
     * Bind a signal/thunk to an attribute of a node.
     */
    attr: (blockId: string, localId: string, name: string, sigOrFn: object | Function) => (() => void);
    /**
     * Toggle a CSS class on a node based on a boolean signal/thunk.
     */
    class: (blockId: string, localId: string, name: string, sigBool: object | Function) => (() => void);
    /**
     * Bind a signal/thunk to an inline style property.
     */
    style: (blockId: string, localId: string, prop: string, sigOrFn: object | Function) => (() => void);
    /**
     * Toggle the `hidden` attribute based on a boolean signal/thunk.
     */
    show: (blockId: string, localId: string, sigBool: object | Function) => (() => void);
    /**
     * Two-way bind an input element to a writable signal.
     */
    model: (blockId: string, localId: string, sig: object, opts?: ReactiveModelOpts) => (() => void);
    /**
     * Bind an array signal to a UIList controller.
     */
    list: (listController: object, sigArray: object, opts: ReactiveListOpts) => (() => void);
    /**
     * Unsubscribe and clean up every registered binding.
     */
    dispose: () => void;
};
/**
 * Options for two-way model binding.
 */
export type ReactiveModelOpts = {
    /**
     * DOM event type to listen on.
     */
    event?: string;
    /**
     * Convert the DOM value to the signal value.
     */
    parse?: (v: string) => any;
    /**
     * Convert the signal value to the DOM value.
     */
    format?: (v: any) => string;
};
/**
 * Options for list binding.
 */
export type ReactiveListOpts = {
    /**
     * Key extractor — forwarded to UIList.sync.
     */
    keyFn: (item: any) => any;
    /**
     * ParseResult forwarded to UIList.sync.
     */
    block: object;
    /**
     * Equality function or preset forwarded to UIList.sync.
     */
    eqFn?: ((a: any, b: any) => boolean) | string;
};
//# sourceMappingURL=reactiveBind.d.ts.map