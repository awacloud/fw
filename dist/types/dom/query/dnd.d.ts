/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace dnd {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /**
     * No declared dependencies - DOM-level pointer listeners are owned by
     * each `draggable()` instance and torn down by its `dispose()` method.
     *
     * @returns {DndAPI}
     */
    function factory(): DndAPI;
}
/**
 * Drag-and-drop surface returned by `factory()`.
 */
export type DndAPI = {
    /**
     * - Make an element draggable via Pointer Events.
     */
    draggable: (el: Element, opts?: {
        data?: () => any;
        preview?: (data: any) => HTMLElement;
        handle?: string | Element;
        axis?: "x" | "y" | "both";
        threshold?: number;
        cancelMs?: number;
        onStart?: (ctx: {
            data: any;
            x: number;
            y: number;
        }) => void;
        onMove?: (ctx: {
            data: any;
            x: number;
            y: number;
        }) => void;
        onEnd?: (ctx: {
            data: any;
            x: number;
            y: number;
            cancelled?: boolean;
        }) => void;
        onError?: (err: any) => void;
    }) => {
        disable: () => void;
        enable: () => void;
        dispose: () => void;
    };
    /**
     * - Register an element as a drop zone.
     */
    dropTarget: (el: Element, opts?: {
        accept: (data: any) => boolean;
        onDrop: (data: any, ctx: {
            x: number;
            y: number;
            target: Element;
        }) => void;
        hoverClass?: string;
        onEnter?: (data: any) => void;
        onOver?: (data: any, ctx: {
            x: number;
            y: number;
        }) => void;
        onLeave?: (data: any) => void;
    }) => {
        dispose: () => void;
    };
    /**
     * - Return the current drag context, or null.
     */
    active: () => (null | {
        data: any;
        preview: HTMLElement;
        source: Element;
        x: number;
        y: number;
    });
};
//# sourceMappingURL=dnd.d.ts.map