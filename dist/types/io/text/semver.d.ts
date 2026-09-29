/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace semver {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {SemverAPI} */
    function factory(): SemverAPI;
}
/**
 * Parsed semver components.
 */
export type SemverParsed = {
    major: number;
    minor: number;
    patch: number;
    prerelease: (string | number)[];
    build: string[];
};
/**
 * A single normalized range comparator.
 */
export type SemverComparator = {
    /**
     * Operator (`=`, `>`, `>=`, `<`, `<=`, or `*`).
     */
    op: string;
    /**
     * Comparator version.
     */
    version: string;
};
/**
 * Range sub-namespace.
 */
export type SemverRangeAPI = {
    /**
     * Normalize a range into OR arrays of AND comparator arrays.
     */
    parse: (s: string) => SemverComparator[][];
};
/**
 * Public API returned by `semver.factory()`.
 */
export type SemverAPI = {
    /**
     * Validate a strict semver 2.0.0 string.
     */
    valid: (s: string) => boolean;
    /**
     * Parse a version into components, or `null`.
     */
    parse: (s: string) => SemverParsed | null;
    /**
     * Compare two versions.
     */
    compare: (a: string, b: string) => (-1 | 0 | 1);
    /**
     * Test whether a version satisfies a range.
     */
    satisfies: (version: string, range: string) => boolean;
    /**
     * Highest version satisfying a range, or `null`.
     */
    maxSatisfying: (versions: string[], range: string) => string | null;
    /**
     * Range parsing helpers.
     */
    range: SemverRangeAPI;
};
//# sourceMappingURL=semver.d.ts.map