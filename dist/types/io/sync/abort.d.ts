/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace abort {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /**
     * @returns {AbortAPI}
     */
    function factory(): AbortAPI;
}
export type AbortTimeoutHandle = {
    /**
     * - The auto-aborting signal.
     */
    signal: AbortSignal;
    /**
     * - The underlying controller.
     */
    controller: AbortController;
    /**
     * - Manual abort + timer clear.
     */
    abort: (reason?: any) => void;
};
/**
 * Helpers around the native AbortController / AbortSignal.
 */
export type AbortAPI = {
    /**
     * - Create a controller that auto-aborts after `ms`.
     */
    timeout: (ms: number) => AbortTimeoutHandle;
    /**
     * - Combine signals into one that aborts when any source aborts.
     */
    any: (...signals: AbortSignal[]) => AbortSignal;
    /**
     * - Promise that rejects when the signal aborts.
     */
    wait: (signal: AbortSignal) => Promise<never>;
    /**
     * - Race a promise against a signal aborting.
     */
    race: <T>(promise: Promise<T>, signal?: AbortSignal | null) => Promise<T>;
    /**
     * - Throw the signal's reason if it is aborted.
     */
    throwIfAborted: (signal?: AbortSignal | null) => void;
    /**
     * - Build an AbortError.
     */
    error: (reason?: any) => Error;
};
//# sourceMappingURL=abort.d.ts.map