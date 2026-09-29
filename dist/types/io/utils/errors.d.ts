/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace errors {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {ErrorsAPI} */
    function factory(): ErrorsAPI;
}
export type LogRecord = {
    /**
     * - Severity name ('debug'|'info'|'warn'|'error').
     */
    level: string;
    /**
     * - Tag prepended to the message (may be empty).
     */
    prefix: string;
    /**
     * - Milliseconds since epoch (Date.now()).
     */
    time: number;
    /**
     * - The log message coerced to string.
     */
    message: string;
    /**
     * - Arbitrary structured payload (defaults to {}).
     */
    context: any;
};
/**
 * Structured logger instance returned by `errors.factory().logger(...)`.
 */
export type Logger = {
    /**
     * Emit a `debug` record.
     */
    debug: (msg: string, ctx?: object) => void;
    /**
     * Emit an `info` record.
     */
    info: (msg: string, ctx?: object) => void;
    /**
     * Emit a `warn` record.
     */
    warn: (msg: string, ctx?: object) => void;
    /**
     * Emit an `error` record.
     */
    error: (msg: string, ctx?: object) => void;
    /**
     * Spawn a child logger that appends to the current prefix.
     */
    child: (subPrefix: string) => Logger;
    /**
     * Current severity threshold (readable and writable accessor).
     */
    level: string;
};
/**
 * Public shape returned by `errors.factory()`.
 */
export type ErrorsAPI = {
    /**
     * Create a structured logger.
     */
    logger: (opts?: {
        level?: ("debug" | "info" | "warn" | "error" | "silent");
        prefix?: string;
        sink?: (record: LogRecord) => void;
    }) => Logger;
    /**
     * Build a higher-order wrapper that catches sync/async errors.
     */
    guard: (opts?: {
        onError?: (err: Error, ctx: any) => void;
        rethrow?: boolean;
    }) => ((fn: Function, ctx?: any) => any);
    /**
     * Construct a UI-block error boundary guard.
     */
    boundary: (ui: object, blockId: string, opts?: {
        onError?: (err: Error) => void;
        render?: (err: Error, ui: object, blockId: string) => void;
        fallback?: string;
        clear?: boolean;
    }) => ((fn: Function) => any);
};
//# sourceMappingURL=errors.d.ts.map