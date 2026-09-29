/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace url {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /**
     * @returns {UrlAPI}
     */
    function factory(): UrlAPI;
}
export type ParsedURL = {
    protocol: string;
    username: string;
    password: string;
    hostname: string;
    port: string;
    host: string;
    pathname: string;
    search: string;
    hash: string;
    origin: string;
    href: string;
    query: any;
};
export type UrlAPI = {
    parseQuery: (str: string, options?: {
        arrayFormat?: "repeat" | "brackets" | "indices" | "comma" | "none";
        nested?: boolean;
        space?: "plus" | "percent";
        delimiter?: string;
    }) => any;
    stringifyQuery: (obj: any, options?: {
        arrayFormat?: "repeat" | "brackets" | "indices" | "comma";
        nested?: boolean;
        space?: "plus" | "percent";
        delimiter?: string;
        skipNull?: boolean;
        sort?: boolean;
    }) => string;
    parseURL: (str: string, base?: string) => ParsedURL;
    buildURL: (parts: any) => string;
    encodeSafe: (s: string, options?: {
        safe?: string;
    }) => string;
    decodeSafe: (s: string) => string;
};
//# sourceMappingURL=url.d.ts.map