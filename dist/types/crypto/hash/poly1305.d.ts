/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace poly1305 {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {Poly1305API} */
    function factory(): Poly1305API;
}
/**
 * Public shape returned by `poly1305.factory()`.
 */
export type Poly1305API = {
    /**
     * Module name (`'poly1305'`).
     */
    name: string;
    /**
     *   Compute the 16-byte tag, or `false` on invalid key.
     */
    mac: (key: Uint8Array, msg: Uint8Array) => (Uint8Array | false);
    /**
     *   Constant-time tag verification.
     */
    verify: (key: Uint8Array, msg: Uint8Array, tag: Uint8Array) => boolean;
};
//# sourceMappingURL=poly1305.d.ts.map