/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace form {
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
    /** @returns {FormAPI} */
    function factory(dom: any, events: any): FormAPI;
}
/**
 * Low-level binding handle returned by `bind()`.
 */
export type FormBinding = {
    /**
     * Re-apply the current value from the getter to the element.
     */
    refresh: () => void;
    /**
     * Detach the bound input listener.
     */
    destroy: () => void;
};
/**
 * Array-field accessor returned by `controller.array(name)`.
 */
export type FormArrayAccessor = {
    /**
     * Defensive copy of the current array values (read-only getter).
     */
    values: Array<any>;
    /**
     * Current array length (read-only getter).
     */
    length: number;
    /**
     * Append an item; returns its index.
     */
    push: (item: any) => number;
    /**
     * Remove at index; `false` when out of range.
     */
    remove: (idx: number) => boolean;
    /**
     * Move item; `false` when out of range.
     */
    move: (from: number, to: number) => boolean;
    /**
     * Replace at index; `false` when out of range.
     */
    set: (idx: number, item: any) => boolean;
    /**
     * Empty the array.
     */
    clear: () => void;
    /**
     * Read a single item by index.
     */
    get: (idx: number) => any;
};
/**
 * Immutable snapshot of the form state.
 */
export type FormSnapshot = {
    values: {
        [x: string]: any;
    };
    errors: {
        [x: string]: string | string[];
    };
    touched: {
        [x: string]: boolean;
    };
    dirty: {
        [x: string]: boolean;
    };
    validating: {
        [x: string]: boolean;
    };
    isValid: boolean;
    submitting: boolean;
};
/**
 * High-level form controller returned by `create()`.
 */
export type FormController = {
    /**
     * Current values (defensive copy, read-only getter).
     */
    values: {
        [x: string]: any;
    };
    /**
     * Current errors (read-only getter).
     */
    errors: {
        [x: string]: string | string[];
    };
    /**
     * Touched flags (read-only getter).
     */
    touched: {
        [x: string]: boolean;
    };
    /**
     * Dirty flags (read-only getter).
     */
    dirty: {
        [x: string]: boolean;
    };
    /**
     * Pending-validation flags (read-only getter).
     */
    validating: {
        [x: string]: boolean;
    };
    /**
     * `true` while `submit()` runs (read-only getter).
     */
    submitting: boolean;
    /**
     * `false` when any error exists or any field is validating (read-only getter).
     */
    isValid: boolean;
    /**
     * Read one field value.
     */
    get: (name: string) => any;
    /**
     * Set one field value and refresh its binding.
     */
    set: (name: string, val: any) => void;
    /**
     * Mark a field touched.
     */
    touch: (name: string) => void;
    /**
     * Array-field accessor (throws for non-array fields).
     */
    array: (name: string) => FormArrayAccessor;
    /**
     *   Wire a field to a DOM element's value/checked plus a blur→touch listener.
     */
    attach: (name: string, element: Element, opts?: {
        event?: string;
    }) => void;
    /**
     * Detach all field bindings.
     */
    detach: () => void;
    /**
     * Run all validators synchronously; returns `isValid`.
     */
    validate: () => boolean;
    /**
     * Run validators and await in-flight async ones; resolves `isValid`.
     */
    validateAsync: () => Promise<boolean>;
    /**
     *   Subscribe to state changes; returns an unsubscribe function.
     */
    subscribe: (fn: (snapshot: FormSnapshot) => void) => (() => void);
    /**
     * Build an immutable state snapshot.
     */
    snapshot: () => FormSnapshot;
    /**
     * Reset to defaults, optionally overriding values.
     */
    reset: (overrides?: {
        [x: string]: any;
    }) => void;
    /**
     *   Touch all fields, validate (awaiting async), run `onSubmit`; resolves `true` on success.
     */
    submit: () => Promise<boolean>;
};
/**
 * Public surface returned by `form.factory()`.
 */
export type FormAPI = {
    /**
     *   Low-level two-way bind between a single input and an external value source.
     */
    bind: (name: string, element: Element, getter: () => any, setter: (value: any) => void, opts?: {
        event?: string;
        checked?: boolean;
    }) => FormBinding;
    /**
     *   High-level multi-field form controller.
     */
    create: (spec: {
        fields: {
            [x: string]: any;
        };
        validate?: (values: {
            [x: string]: any;
        }) => {
            [x: string]: string;
        };
        onSubmit?: (values: {
            [x: string]: any;
        }) => (void | Promise<void>);
    }) => FormController;
};
//# sourceMappingURL=form.d.ts.map