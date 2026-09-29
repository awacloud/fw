/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace hmac {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BitArrayAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Utf8API;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): Utf8API;
        })[];
        factory(bitArray: any, utf8: any): Sha256API;
    })[];
    /** @returns {HmacAPI} */
    function factory(bitArray: any, utf8: any, sha256: any): HmacAPI;
}
/**
 * Public shape of a constructed HMAC instance (prototype methods).
 * `bitArray` values are represented as `number[]`.
 */
export type HmacInstance = {
    /**
     * Streaming absorb; returns `this`.
     */
    update: (data: (number[] | Uint8Array | string)) => HmacInstance;
    /**
     * Finalize and return the MAC tag (bitArray); resets the instance.
     */
    digest: () => number[];
    /**
     * One-shot MAC; `false` if already updated.
     */
    encrypt: (data: (number[] | Uint8Array | string)) => (number[] | false);
    /**
     * Alias for `encrypt`.
     */
    mac: (data: (number[] | Uint8Array | string)) => (number[] | false);
    /**
     * Reset streaming state (key schedule preserved).
     */
    reset: () => void;
};
/**
 * Public shape returned by `hmac.factory()`.
 */
export type HmacAPI = {
    /**
     *   HMAC constructor bound to `key` under the (optional) hash module.
     */
    fn: new (key: (number[] | Uint8Array | string), Hash?: object) => HmacInstance;
    /**
     *   Constant-time MAC verification.
     */
    verify: (key: (number[] | Uint8Array | string), data: (number[] | Uint8Array | string), tag: number[], Hash?: object) => boolean;
};
//# sourceMappingURL=hmac.d.ts.map