/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace formKit {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): SignalAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): SignalAPI;
        }[];
        factory(signal: any): ReactiveBindAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
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
        factory(dom: any, events: any): FormAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): ValidAPI;
    })[];
    /** @returns {FormKitAPI} */
    function factory(form: any, valid: any, _reactiveBind: any, signal: any): FormKitAPI;
}
/**
 * Props returned by `register(name)` — spread onto an `<input>`.
 */
export type FieldProps = {
    /**
     * Field name (mirrors the registered name).
     */
    name: string;
    /**
     * Current field value (read from the form controller).
     */
    value: any;
    /**
     * Handler for the `input` event (text inputs).
     */
    onInput: Function;
    /**
     * Handler for the `change` event (checkboxes / selects).
     */
    onChange: Function;
};
/**
 * Subscription handle returned by `watch`.
 */
export type WatchHandle = {
    /**
     * Current value (field or whole-values snapshot).
     */
    value: any;
    /**
     * Add a further subscriber; returns unsubscribe.
     */
    subscribe: Function;
    /**
     * Detach this watch subscription.
     */
    unsubscribe: () => void;
};
/**
 * Array accessor returned by `array(name)` — same surface as `form.array()` plus `fields`.
 */
export type FormKitArrayAccessor = {
    /**
     * Alias for the current array values (defensive copy).
     */
    fields: Array<any>;
    /**
     * Defensive copy of current array values.
     */
    values: Array<any>;
    /**
     * Current array length.
     */
    length: number;
    /**
     * Append an item; returns its index.
     */
    push: Function;
    /**
     * Remove at index; `false` when out of range.
     */
    remove: Function;
    /**
     * Move item; `false` when out of range.
     */
    move: Function;
    /**
     * Replace at index; `false` when out of range.
     */
    set: Function;
    /**
     * Empty the array.
     */
    clear: Function;
    /**
     * Read a single item by index.
     */
    get: Function;
};
/**
 * A `formKit` instance returned by `formKit.create(...)`.
 */
export type FormKitInstance = {
    /**
     * Return input props for a field.
     */
    register: (name: string) => FieldProps;
    /**
     * Subscribe to a field (or all fields).
     */
    watch: (name?: string) => WatchHandle;
    /**
     * Reset to defaults or given values.
     */
    reset: (values?: {
        [x: string]: any;
    }) => void;
    /**
     * Set one field value.
     */
    setValue: (name: string, value: any) => void;
    /**
     * Get one field or all values.
     */
    getValues: (name?: string) => any | {
        [x: string]: any;
    };
    /**
     * Set an error on a field.
     */
    setError: (name: string, message: string) => void;
    /**
     * Array-field accessor.
     */
    array: (name: string) => FormKitArrayAccessor;
    /**
     * Submit the form.
     */
    submit: (onValid: Function, onInvalid?: Function) => Promise<void>;
    /**
     * Escape hatch: the underlying controller.
     */
    form: object;
    /**
     * Detach all subscriptions and bindings.
     */
    dispose: () => void;
};
/**
 * Public shape returned by `formKit.factory()`.
 */
export type FormKitAPI = {
    /**
     *   Create a new formKit instance.
     */
    create: (spec: {
        schema?: any;
        defaultValues?: {
            [x: string]: any;
        };
    }) => FormKitInstance;
};
//# sourceMappingURL=formKit.d.ts.map