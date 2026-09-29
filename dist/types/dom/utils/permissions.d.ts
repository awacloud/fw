/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace permissions {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    let worker: boolean;
    /**
     * Factory producing the permissions utility instance.
     * @returns {PermissionsAPI}
     */
    function factory(): PermissionsAPI;
}
/**
 * Public surface returned by the permissions factory.
 */
export type PermissionsAPI = {
    /**
     * - `true` if `navigator.permissions` is present.
     */
    isSupported: () => boolean;
    /**
     * - Query the current state of a named permission (`"granted"`, `"denied"`, or `"prompt"`).
     */
    query: (name: string) => Promise<string>;
    /**
     * - Watch a permission for state changes; returns a `stop` function that detaches the listener.
     */
    watch: (name: string, callback: (state: string) => void, onError?: (err: Error) => void) => (() => void);
};
//# sourceMappingURL=permissions.d.ts.map