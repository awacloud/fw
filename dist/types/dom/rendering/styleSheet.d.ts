/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace styleSheet {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /**
     * @returns {StyleSheetAPI}
     */
    function factory(): StyleSheetAPI;
}
export type StyleAttachOptions = {
    /**
     * - Per-call override of the instance mode.
     */
    mode?: "element" | "adopted";
    /**
     * - Element that receives the `<style>` (default `document.head`); its `ownerDocument` is the target document.
     */
    head?: Element;
    /**
     * - Element mode sets `el.id`; kept on the handle in both modes.
     */
    id?: string;
    /**
     * - Own string keys set with `setAttribute` (element mode only).
     */
    attrs?: Record<string, string>;
    /**
     * - CSP nonce (`''` = none); `undefined` uses the factory default (element mode only).
     */
    nonce?: string;
};
export type StyleHandle = {
    /**
     * - Channel that actually ran (`'none'` = inert, no document).
     */
    mode: "element" | "adopted" | "none";
    id: string | null;
    element: HTMLStyleElement | null;
    sheet: CSSStyleSheet | null;
    /**
     * - Replace the CSS text; no-op after `detach()`.
     */
    set: (css: string) => void;
    /**
     * - Remove the style; idempotent.
     */
    detach: () => void;
};
/**
 * Surface returned by `factory()`.
 */
export type StyleSheetAPI = {
    /**
     * - Whether constructable stylesheets are available now.
     */
    support: () => {
        constructable: boolean;
    };
    /**
     * - Get (no argument) or set the default mode of this instance.
     */
    mode: (value?: "element" | "adopted") => ("element" | "adopted" | void);
    /**
     * - Attach CSS text to a document.
     */
    attach: (css: string, opts?: StyleAttachOptions) => StyleHandle;
};
//# sourceMappingURL=styleSheet.d.ts.map