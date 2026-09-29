/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace i18n {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {I18nAPI} */
    function factory(): I18nAPI;
}
/**
 * An i18n instance returned by `create(...)`.
 */
export type I18nInstance = {
    /**
     * Translate `key`, interpolating `params`.
     */
    t: (key: string, params?: Record<string, any>) => string;
    /**
     * Plural-aware translation.
     */
    tn: (key: string, count: number, params?: Record<string, any>) => string;
    /**
     * True if `key` exists in the active locale catalog.
     */
    has: (key: string) => boolean;
    /**
     * Change the active locale.
     */
    setLocale: (loc: string) => void;
    /**
     * Register or merge a catalog for `loc`.
     */
    addCatalog: (loc: string, dict: Record<string, any>) => void;
    /**
     * Locale-aware formatter.
     */
    format: (value: number | Date, type: ("number" | "currency" | "date" | "relative"), options?: Record<string, any>) => string;
    /**
     * Active locale (read-only accessor).
     */
    locale: string;
    /**
     * Fallback locale (read-only accessor).
     */
    fallback: string;
};
/**
 * Public shape returned by `i18n.factory()`.
 */
export type I18nAPI = {
    /**
     * Create an i18n instance.
     */
    create: (opts?: {
        locale?: string;
        fallback?: string;
        catalogs?: Record<string, Record<string, any>>;
    }) => I18nInstance;
};
//# sourceMappingURL=i18n.d.ts.map