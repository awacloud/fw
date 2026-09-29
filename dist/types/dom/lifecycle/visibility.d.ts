/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace visibility {
    let name: string;
    let type: string;
    let dependencies: any[];
    let worker: boolean;
    /** @returns {VisibilityAPI} */
    function factory(): VisibilityAPI;
}
/**
 * Public API returned by `visibility.factory()`.
 */
export type VisibilityAPI = {
    /**
     * Whether `document.visibilityState` is available.
     */
    isSupported: () => boolean;
    /**
     * Current `document.visibilityState`.
     */
    state: () => string;
    /**
     * Whether the document is currently visible.
     */
    isVisible: () => boolean;
    /**
     * Whether the document is currently hidden.
     */
    isHidden: () => boolean;
    /**
     * Subscribe to visibility changes; returns an unsubscribe function.
     */
    onChange: (callback: (state: string, event: Event | null) => void, options?: {
        immediate?: boolean;
    }) => (() => void);
    /**
     * Subscribe only to transitions to visible; returns an unsubscribe function.
     */
    onVisible: (callback: (state: string, event: Event | null) => void) => (() => void);
    /**
     * Subscribe only to transitions to hidden; returns an unsubscribe function.
     */
    onHidden: (callback: (state: string, event: Event | null) => void) => (() => void);
};
//# sourceMappingURL=visibility.d.ts.map