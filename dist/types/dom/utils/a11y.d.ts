/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace a11y {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {A11yAPI} */
    function factory(): A11yAPI;
}
/**
 * Public surface returned by `a11y.factory()`.
 */
export type A11yAPI = {
    /**
     *   Announce `text` to screen readers via a hidden `aria-live` region.
     */
    announce: (text: string, politeness?: "polite" | "assertive") => void;
    /**
     * Clear both live regions.
     */
    clearAnnouncements: () => void;
    /**
     *   Batch-set `aria-*` attributes (falsy values remove).
     */
    aria: (el: Element, attrs: {
        [x: string]: any;
    }) => void;
    /**
     *   Set/remove `aria-labelledby` from ids or elements.
     */
    labelledBy: (el: Element, idsOrEls: string | Element | Array<string | Element | null | undefined>) => void;
    /**
     *   Set/remove `aria-describedby` from ids or elements.
     */
    describedBy: (el: Element, idsOrEls: string | Element | Array<string | Element | null | undefined>) => void;
    /**
     *   Set or remove the `role` attribute.
     */
    setRole: (el: Element, role: string | null | false | undefined) => void;
    /**
     * Remove the `role` attribute.
     */
    removeRole: (el: Element) => void;
    /**
     *   `true` when `prefers-reduced-motion: reduce` is active.
     */
    prefersReducedMotion: () => boolean;
};
//# sourceMappingURL=a11y.d.ts.map