/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace valid {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /**
     * Factory function.
     * @returns {ValidAPI} Validation helper - see module description.
     */
    function factory(): ValidAPI;
}
/**
 * A single validation error.
 */
export type ValidationError = {
    /**
     * - JSON-Pointer-like path to the offending value.
     */
    path: string;
    /**
     * - The schema keyword that failed.
     */
    keyword: string;
    /**
     * - Human-readable description.
     */
    message: string;
};
/**
 * Result of a validation run.
 */
export type ValidationResult = {
    /**
     * - True when no errors were collected.
     */
    valid: boolean;
    /**
     * - Collected validation errors (empty when valid).
     */
    errors: ValidationError[];
};
/**
 * Options accepted by validate/test/compile.
 */
export type ValidateOptions = {
    /**
     * - Extra/override formats merged over the built-ins.
     */
    formats?: {
        [x: string]: RegExp | ((value: string) => boolean);
    };
};
/**
 * A schema pre-compiled with its options.
 */
export type CompiledValidator = {
    /**
     * - Validate a value, returning detailed errors.
     */
    validate: (value: any) => ValidationResult;
    /**
     * - Validate a value, returning a boolean.
     */
    test: (value: any) => boolean;
};
/**
 * Validation helper surface returned by `factory()`.
 */
export type ValidAPI = {
    /**
     * - Lower-cased internal `[[Class]]` tag of a value.
     */
    is: (obj: any) => string;
    /**
     * - Finite number guard.
     */
    isNumber: (obj: any) => boolean;
    /**
     * - String guard (incl. boxed strings).
     */
    isString: (obj: any) => boolean;
    /**
     * - Boolean guard (incl. boxed booleans).
     */
    isBoolean: (obj: any) => boolean;
    /**
     * - Array guard.
     */
    isArray: (obj: any) => boolean;
    /**
     * - Plain object guard.
     */
    isObject: (obj: any) => boolean;
    /**
     * - Uint8Array guard.
     */
    isUint8Array: (obj: any) => boolean;
    /**
     * - Uint8ClampedArray guard.
     */
    isUint8ClampedArray: (obj: any) => boolean;
    /**
     * - Function guard.
     */
    isFunction: (obj: any) => boolean;
    /**
     * - Validate against a schema with detailed errors.
     */
    validate: (value: any, schema: any | boolean, options?: ValidateOptions) => ValidationResult;
    /**
     * - Boolean validation against a schema.
     */
    test: (value: any, schema: any | boolean, options?: ValidateOptions) => boolean;
    /**
     * - Pre-compile a schema + options.
     */
    compile: (schema: any | boolean, options?: ValidateOptions) => CompiledValidator;
    /**
     * - Read-only map of built-in formats.
     */
    formats: {
        [x: string]: RegExp | ((value: string) => boolean);
    };
};
//# sourceMappingURL=valid.d.ts.map