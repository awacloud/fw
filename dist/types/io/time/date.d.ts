/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace date {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {DateAPI} */
    function factory(): DateAPI;
}
export type DateArithUnit = "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | "ms";
export type DateBoundaryUnit = "years" | "months" | "days" | "hours" | "minutes" | "seconds";
/**
 * Public shape returned by `date.factory()`.
 */
export type DateAPI = {
    /**
     * Format a date with `Intl.DateTimeFormat`.
     */
    format: (d: Date, options?: Intl.DateTimeFormatOptions & {
        locale?: string;
    }) => string;
    /**
     * Format the difference between two dates as a relative string.
     */
    formatRelative: (from: Date, to?: Date, options?: Intl.RelativeTimeFormatOptions & {
        locale?: string;
    }) => string;
    /**
     * Parse a date string using a simple token format.
     */
    parse: (str: string, fmt?: string) => (Date | null);
    /**
     * Parse a strict ISO 8601 string with mandatory timezone.
     */
    parseISO: (str: string) => (Date | null);
    /**
     * Integer difference `a - b` in `unit`.
     */
    diff: (a: Date, b: Date, unit: DateArithUnit) => number;
    /**
     * Return a new date offset by `n` units.
     */
    add: (d: Date, n: number, unit: DateArithUnit) => Date;
    /**
     * Return a new date offset by `-n` units.
     */
    sub: (d: Date, n: number, unit: DateArithUnit) => Date;
    /**
     * Round down to the start of `unit`.
     */
    startOf: (d: Date, unit: DateBoundaryUnit) => Date;
    /**
     * Round up to the end of `unit`.
     */
    endOf: (d: Date, unit: DateBoundaryUnit) => Date;
    /**
     * Timezone offset in minutes between UTC and `timeZone`.
     */
    getOffset: (d: Date, timeZone: string) => number;
    /**
     * List of supported IANA timezone identifiers.
     */
    zones: () => string[];
    /**
     * True if `d` is a valid `Date` instance.
     */
    isValid: (d: unknown) => boolean;
};
//# sourceMappingURL=date.d.ts.map