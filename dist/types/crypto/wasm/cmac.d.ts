/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace wasmCmac {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): WasmRuntimeAPI;
    }[];
    /**
     * @param {import('./runtime.js').WasmRuntimeAPI} wasmRuntime
     * @returns {WasmCmacAPI}
     */
    function factory(wasmRuntime: import("./runtime.js").WasmRuntimeAPI): WasmCmacAPI;
}
/**
 * Public surface of `wasmCmac.factory()`.
 */
export type WasmCmacAPI = {
    /**
     * Whether `WebAssembly` is present.
     */
    isAvailable: () => boolean;
    /**
     *   Compute the AES-CMAC tag of `message` under `key`. `tagLen` defaults to
     *   16. Returns `false` on invalid params, load failure, or WASM error.
     */
    mac: (key: Uint8Array, message: Uint8Array, tagLen?: number) => Promise<Uint8Array | false>;
    /**
     *   Recompute the tag and compare with `tag` in constant time.
     */
    verify: (key: Uint8Array, message: Uint8Array, tag: Uint8Array) => Promise<boolean>;
};
//# sourceMappingURL=cmac.d.ts.map