/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export type LogEntry = {
    /**
     * Timestamp (ms).
     */
    ts: number;
    /**
     * Log level (log, info, warn...).
     */
    lvl: string;
    /**
     * Logged arguments (serialized).
     */
    data: any[];
    /**
     * Stack string, if available.
     */
    stack?: string;
};
export type LoggerAPI = {
    get: () => LogEntry[];
    setLen: (arg0: number) => void;
    clear: () => void;
    __push?: (arg0: LogEntry) => void;
    subscribe: (arg0: Function) => Function;
    /**
     * Opt out of the takeover's
     * printing policy: with `native(true)` every `console` call of the realm
     * prints as the native console does (in production too, without the
     * appended stack) and is still recorded; `native(false)` restores the
     * policy (printed only in dev). Returns `false` when the realm's console
     * is not an fw console (locked by another script), `true` otherwise.
     */
    native: (arg0: boolean | undefined) => boolean;
};
export namespace logger {
    export { main };
    export { worker };
}
/**
 * @typedef {Object} LogEntry
 * @property {number} ts Timestamp (ms).
 * @property {string} lvl Log level (log, info, warn...).
 * @property {any[]} data Logged arguments (serialized).
 * @property {string} [stack] Stack string, if available.
 */
/**
 * @typedef {Object} LoggerAPI
 * @property {function(): LogEntry[]} get
 * @property {function(number): void} setLen
 * @property {function(): void} clear
 * @property {function(LogEntry): void} [__push]
 * @property {function(function): function} subscribe
 * @property {function(boolean=): boolean} native Opt out of the takeover's
 *   printing policy: with `native(true)` every `console` call of the realm
 *   prints as the native console does (in production too, without the
 *   appended stack) and is still recorded; `native(false)` restores the
 *   policy (printed only in dev). Returns `false` when the realm's console
 *   is not an fw console (locked by another script), `true` otherwise.
 */
/**
 * Create a lightweight in-memory logger and optionally proxy to the real console.
 * Note: In a browser-shaped realm (`window` defined) this replaces
 * `window.console` with a non-modifiable wrapper: every call is recorded in
 * the buffer, and printed only when `dev` is true; assigning a console
 * method is refused (a warning). A later call in the same realm (a second
 * fw entry) joins that wrapper — its buffer records the same calls — instead
 * of redefining it; a console another script locked is left alone. Under
 * bare Node or a worker-shaped realm (no `window`), the console Proxy
 * install is SKIPPED — logging still works as a plain passthrough via
 * `globalThis.console`.
 * @param {boolean} dev When true, forward logs to the original console.
 * @returns {LoggerAPI}
 */
declare function main(dev: boolean): LoggerAPI;
/**
 * Create an in-worker logger and proxy `self.console`.
 * Important: This function is stringified via `toString()` before being
 * injected into a Worker, so keep it fully self-contained.
 * @param {boolean} dev When true, forward logs to the original console.
 * @param {MessagePort} port Channel used to forward log entries.
 * @returns {LoggerAPI}
 */
declare function worker(dev: boolean, port: MessagePort): LoggerAPI;
export {};
//# sourceMappingURL=logger.d.ts.map