/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace sanitize {
    let name: string;
    let type: string;
    let dependencies: string[];
    let deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): SecPolicyAPI;
    }[];
    /**
     * @param {object} secPolicy - Centralised security primitives (URL safety,
     *   event-attr detection, dangerous schemes). See `secPolicy.js`.
     * @returns {SanitizeInstance}
     */
    function factory(secPolicy: object): SanitizeInstance;
}
export type SanitizeInstance = {
    /**
     *   Sanitise an HTML fragment against the allowlist. Returns the cleaned string.
     */
    sanitizeHtml: (html: string, opts?: SanitizeOptions) => string;
    /**
     *   Forwards to `secPolicy.isSafeUrl` with sanitize defaults.
     */
    isSafeUrl: (url: string, schemes?: string[], allowDataImage?: boolean) => boolean;
    /**
     *   Frozen-by-convention default allowlist (do not mutate ; copy if needed).
     */
    defaultAllowlist: {
        tags: Set<string>;
        attributes: Record<string, Set<string>>;
        urlSchemes: string[];
    };
};
export type SanitizeOptions = {
    allowedTags?: Set<string> | string[];
    allowedAttributes?: Record<string, Set<string>>;
    urlSchemes?: string[];
    dropDangerousContent?: boolean;
};
//# sourceMappingURL=sanitize.d.ts.map