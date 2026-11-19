/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace fileIntake {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {FileIntakeAPI} */
    function factory(): FileIntakeAPI;
}
export type FileIntakeOptions = {
    /**
     * The `type="file"` picker; its `change` event is read.
     */
    input: HTMLInputElement;
    /**
     *   Every file chosen or dropped at once, in order; never called with an empty array.
     */
    onFiles: (files: File[], source: "picker" | "drop") => void;
    /**
     * Where OS file drops are accepted; without it no drop wiring is made.
     */
    dropTarget?: EventTarget & {
        setAttribute?: (name: string, value: string) => void;
    };
    /**
     * The keyboard-operable dropzone; without it no keyboard wiring is made.
     */
    zone?: HTMLElement;
    /**
     * Attribute set to `'true'` / `'false'` on `zone` and on
     * `dropTarget` (when it has `setAttribute`) while a file drag is over the target. Default `'data-dragover'`.
     */
    dragoverAttribute?: string;
};
export type FileIntakeInstance = {
    /**
     * Open the file picker (`input.click()`).
     */
    pick: () => void;
    /**
     * Focus the zone (no-op without a zone).
     */
    focus: () => void;
    /**
     * Remove every listener added; `pick` and `focus` become no-ops.
     */
    dispose: () => void;
};
export type FileIntakeAPI = {
    /**
     * Wire an input, a drop target and a zone to one callback.
     */
    create: (opts: FileIntakeOptions) => FileIntakeInstance;
};
//# sourceMappingURL=fileIntake.d.ts.map