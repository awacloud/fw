/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace ansi {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {AnsiAPI} */
    function factory(): AnsiAPI;
}
/**
 * Stateful parser instance returned by `ansi.parser()`.
 */
export type AnsiParser = {
    /**
     * Subscribe a handler to an event (`text`, `csi`, `osc`, `cursor`, `mode`, `sgr`, `warning`).
     */
    on: (event: string, fn: Function) => void;
    /**
     * Feed a chunk of data through the state machine.
     */
    feed: (chunk: string | Uint8Array) => void;
    /**
     * Reset internal state to ground.
     */
    reset: () => void;
};
/**
 * Cursor movement serializer namespace.
 */
export type AnsiCursor = {
    /**
     * Absolute cursor position (1-indexed).
     */
    move: (pos: {
        row: number;
        col: number;
    }) => string;
    /**
     * Move `n` lines up.
     */
    up: (n?: number) => string;
    /**
     * Move `n` lines down.
     */
    down: (n?: number) => string;
    /**
     * Move `n` columns right.
     */
    right: (n?: number) => string;
    /**
     * Move `n` columns left.
     */
    left: (n?: number) => string;
    /**
     * Save the cursor position (ESC 7).
     */
    save: () => string;
    /**
     * Restore the cursor position (ESC 8).
     */
    restore: () => string;
};
/**
 * Screen/line clearing serializer namespace.
 */
export type AnsiClear = {
    /**
     * Clear the current line.
     */
    line: (mode?: "all" | "before" | "after") => string;
    /**
     * Clear the screen.
     */
    screen: (mode?: "all" | "before" | "after") => string;
};
/**
 * OSC serializer namespace.
 */
export type AnsiOsc = {
    /**
     * Set the window title (`OSC 0 ; <s> BEL`).
     */
    title: (s: string) => string;
};
/**
 * Public API returned by `ansi.factory()`.
 */
export type AnsiAPI = {
    /**
     * Create a new stateful ANSI/VT100 sequence parser.
     */
    parser: () => AnsiParser;
    /**
     * Build an SGR sequence.
     */
    sgr: (opts?: {
        fg?: any;
        bg?: any;
        bold?: any;
        italic?: any;
        underline?: any;
        reverse?: any;
        dim?: any;
        blink?: any;
        strikethrough?: any;
        reset?: any;
    }) => string;
    /**
     * Cursor movement serializers.
     */
    cursor: AnsiCursor;
    /**
     * Screen/line clearing serializers.
     */
    clear: AnsiClear;
    /**
     * OSC serializers.
     */
    osc: AnsiOsc;
};
//# sourceMappingURL=ansi.d.ts.map