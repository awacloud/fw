/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace dom {
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
    /** @returns {DomAPI} */
    function factory(secPolicy: any): DomAPI;
}
/**
 * Public API returned by `dom.factory()`.
 *
 * Mutating methods accept a single `HTMLElement`, a `NodeList`, or an array of
 * elements as `target` and apply to every node. Read-only methods take a single
 * `Element` and return `null` / `false` for invalid inputs.
 */
export type DomAPI = {
    /**
     * All matching descendants, or an empty array on invalid input.
     */
    queryAll: (node: HTMLElement | SVGElement, selector: string) => (NodeList | never[]);
    /**
     * First matching descendant, or `null`.
     */
    query: (node: HTMLElement | SVGElement, selector: string) => (Element | null);
    /**
     * Set an attribute on the target(s).
     */
    attr: (target: HTMLElement | NodeListOf<HTMLElement> | HTMLElement[], name: string, value: string) => void;
    /**
     * Get an attribute value, or `null`.
     */
    attrGet: (element: Element, name: string) => (string | null);
    /**
     * Remove an attribute from the target(s).
     */
    attrRemove: (target: HTMLElement | NodeListOf<HTMLElement> | HTMLElement[], name: string) => void;
    /**
     * Whether the element has the attribute.
     */
    attrHas: (element: Element, name: string) => boolean;
    /**
     * Set a `data-*` attribute (camelCase key).
     */
    data: (target: HTMLElement | NodeListOf<HTMLElement> | HTMLElement[], key: string, value: string) => void;
    /**
     * Get a `data-*` value, or `null`.
     */
    dataGet: (element: Element, key: string) => (string | null);
    /**
     * Remove a `data-*` attribute.
     */
    dataRemove: (target: HTMLElement | NodeListOf<HTMLElement> | HTMLElement[], key: string) => void;
    /**
     * Whether the element has the `data-*` key.
     */
    dataHas: (element: Element, key: string) => boolean;
    /**
     * Add space-separated class name(s).
     */
    classAdd: (target: HTMLElement | NodeListOf<HTMLElement> | HTMLElement[], name: string) => void;
    /**
     * Remove space-separated class name(s).
     */
    classRemove: (target: HTMLElement | NodeListOf<HTMLElement> | HTMLElement[], name: string) => void;
    /**
     * Whether the element has the class.
     */
    classHas: (element: Element, name: string) => boolean;
    /**
     * Toggle a class on the target(s).
     */
    classToggle: (target: HTMLElement | NodeListOf<HTMLElement> | HTMLElement[], name: string) => void;
    /**
     * Replace one class with another.
     */
    classReplace: (target: HTMLElement | NodeListOf<HTMLElement> | HTMLElement[], oldName: string, newName: string) => void;
    /**
     * Set an inline CSS property.
     */
    style: (target: HTMLElement | NodeListOf<HTMLElement> | HTMLElement[], prop: string, val: string) => void;
    /**
     * Get a computed CSS property value, or `null`.
     */
    styleGet: (element: Element, prop: string) => (string | null);
    /**
     * Get the full computed style declaration, or `null`.
     */
    styleGetAll: (element: Element) => (CSSStyleDeclaration | null);
    /**
     * Remove an inline CSS property.
     */
    styleRemove: (target: HTMLElement | NodeListOf<HTMLElement> | HTMLElement[], prop: string) => void;
    /**
     * Hide the target(s) via inline `display:none`.
     */
    hide: (target: HTMLElement | NodeListOf<HTMLElement> | HTMLElement[]) => void;
    /**
     * Show the target(s); optional explicit display value.
     */
    show: (target: HTMLElement | NodeListOf<HTMLElement> | HTMLElement[], displayVal?: string) => void;
    /**
     * Toggle inline `display:none`.
     */
    toggleVisibility: (target: HTMLElement | NodeListOf<HTMLElement> | HTMLElement[]) => void;
    /**
     * Bounding box relative to the viewport, or `null`.
     */
    rect: (element: Element) => (DOMRect | null);
    /**
     * Current scroll position, or `null`.
     */
    scrollPos: (element: Element) => ({
        top: number;
        left: number;
    } | null);
    /**
     * Set scroll position (undefined axis skipped).
     */
    scrollTo: (target: HTMLElement | NodeListOf<HTMLElement> | HTMLElement[], top: number | undefined, left: number | undefined) => void;
    /**
     * Reorder existing direct children of `parent` with minimal DOM moves.
     */
    reorder: (parent: Element, orderedChildren: Element[]) => void;
    /**
     * Wrap nodes in a new `DocumentFragment`.
     */
    fragment: (nodes: Iterable<Node>) => DocumentFragment;
    /**
     * Two-way bind an input to a getter/setter pair.
     */
    bind: (name: string, element: HTMLInputElement, getter: () => any, setter: (v: any) => void, opts?: {
        event?: string;
        checked?: boolean;
    }) => {
        refresh: () => void;
        destroy: () => void;
    };
    /**
     * Move keyboard focus to the element.
     */
    focus: (element: HTMLElement) => void;
    /**
     * Remove keyboard focus from the element.
     */
    blur: (element: HTMLElement) => void;
    /**
     * Set text content (string or multi-fragment array).
     */
    text: (target: HTMLElement | NodeListOf<HTMLElement> | HTMLElement[], value: string | Array<{
        text: string;
        lang?: string;
        dir?: string;
    }>) => void;
    /**
     * Get `textContent`, or `null`.
     */
    textGet: (element: Element) => (string | null);
    /**
     * Set `value` on form element(s).
     */
    val: (target: HTMLElement | NodeListOf<HTMLElement> | HTMLElement[], value: string) => void;
    /**
     * Get `value`, or `null`.
     */
    valGet: (element: Element) => (string | null);
    /**
     * Set `checked` on checkbox/radio input(s).
     */
    checked: (target: HTMLElement | NodeListOf<HTMLElement> | HTMLElement[], state: boolean) => void;
    /**
     * Get `checked`, or `null`.
     */
    checkedGet: (element: Element) => (boolean | null);
    /**
     * Set `disabled` on form element(s).
     */
    disabled: (target: HTMLElement | NodeListOf<HTMLElement> | HTMLElement[], state: boolean) => void;
    /**
     * Get `disabled`, or `null`.
     */
    disabledGet: (element: Element) => (boolean | null);
};
//# sourceMappingURL=dom.d.ts.map