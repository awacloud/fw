/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace secPolicy {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {SecPolicyAPI} */
    function factory(): SecPolicyAPI;
}
/**
 * Public surface returned by `secPolicy.factory()`: the centralised security
 * policy data (sets / regexes) plus the pure predicate functions that consume
 * them. No DOM, no state.
 */
export type SecPolicyAPI = {
    /**
     * - Attribute names carrying URL values.
     */
    URL_ATTRS: Set<string>;
    /**
     * - Categorically dangerous URL schemes.
     */
    SCHEME_DANGEROUS_RE: RegExp;
    /**
     * - Default safe URL schemes.
     */
    SAFE_SCHEMES: Set<string>;
    /**
     * - Accepted `data:image/*` MIME types.
     */
    DATA_IMAGE_RE: RegExp;
    /**
     * - URL safety predicate.
     */
    isSafeUrl: (url: string, schemes?: string[] | Set<string>, allowDataImage?: boolean) => boolean;
    /**
     * - Attributes (`id`/`name`) vulnerable to DOM clobbering.
     */
    CLOBBER_ATTRS: Set<string>;
    /**
     * - Values that would clobber `document.*` properties.
     */
    CLOBBER_NAMES: Set<string>;
    /**
     * - DOM-clobbering (attr, value) pair test.
     */
    isClobberValue: (attrName: string, value: any) => boolean;
    /**
     * - Matches `on*` event-handler attribute names.
     */
    EVENT_ATTR_RE: RegExp;
    /**
     * - Acceptable attribute-name shape (starts with a letter).
     */
    SAFE_ATTR_NAME_RE: RegExp;
    /**
     * - True when the name is an `on*` handler.
     */
    isEventAttr: (name: string) => boolean;
    /**
     * - True when the attribute name is syntactically acceptable.
     */
    isSafeAttrName: (name: string) => boolean;
    /**
     * - Structurally rejected tags (`script`, `object`, `embed`, `iframe`).
     */
    BLOCKED_TAGS_RE: RegExp;
    /**
     * - True when the tag name is blocked.
     */
    isBlockedTag: (tagName: string) => boolean;
    /**
     * - Dangerous CSS value patterns.
     */
    CSS_DANGEROUS_RE: RegExp;
    /**
     * - CSS property names dangerous by name alone.
     */
    CSS_BLOCKED_PROPS: Set<string>;
    /**
     * - CSS `setProperty(prop, val)` safety predicate.
     */
    isSafeCss: (prop: string, val: any) => boolean;
};
//# sourceMappingURL=secPolicy.d.ts.map