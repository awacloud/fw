/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace asn1Oid {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {Asn1OidAPI} */
    function factory(): Asn1OidAPI;
}
export type OidEntry = {
    name: string;
    shortName: string;
    category: string;
    keyLen?: number;
    mode?: string;
    [key: string]: string | number | undefined;
};
/**
 * Public shape returned by `asn1Oid.factory()`.
 */
export type Asn1OidAPI = {
    /**
     * Resolve an OID string to its metadata entry.
     */
    lookup: (oidStr: string) => (OidEntry | null);
    /**
     * Reverse-lookup an OID string by name or shortName.
     */
    byName: (nameOrShortName: string) => (string | null);
    /**
     * All entries for a category.
     */
    findByCategory: (category: string) => Array<{
        oid: string;
    } & OidEntry>;
    /**
     * Raw OID database keyed by dotted OID.
     */
    OID_DATABASE: Record<string, OidEntry>;
};
//# sourceMappingURL=asn1-oid.d.ts.map