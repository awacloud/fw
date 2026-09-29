/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace pad {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {PadAPI} */
    function factory(): PadAPI;
}
/**
 * A single PKCS#7 pad/strip pair.
 */
export type PadFns = {
    /**
     * Apply PKCS#7 padding; `false` on invalid input.
     */
    pad: (data: Uint8Array | number[]) => (Uint8Array | false);
    /**
     * Strip PKCS#7 padding; `false` on invalid input/padding.
     */
    strip: (data: Uint8Array | number[]) => (Uint8Array | false);
};
/**
 * Public shape returned by `pad.factory()`.
 */
export type PadAPI = {
    /**
     * Apply PKCS#7 padding (validated path).
     */
    pad: (data: Uint8Array | number[]) => (Uint8Array | false);
    /**
     * Strip PKCS#7 padding (validated path).
     */
    strip: (data: Uint8Array | number[]) => (Uint8Array | false);
    /**
     * Unvalidated fast path over `Uint8Array` (trusted input only).
     */
    fast: PadFns;
};
//# sourceMappingURL=pad.d.ts.map