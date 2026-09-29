/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace x25519 {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {X25519API} */
    function factory(): X25519API;
}
/**
 * Public API returned by `x25519.factory()`.
 */
export type X25519API = {
    /**
     * Compute scalarmult(scalar, u); 32-byte output or false.
     */
    scalarMult: (scalar: Uint8Array, u: Uint8Array) => (Uint8Array | false);
    /**
     * scalarmult against the base point u=9.
     */
    scalarMultBase: (scalar: Uint8Array) => (Uint8Array | false);
    /**
     * True iff `u` is a documented low-order point (or malformed length).
     */
    isLowOrderPoint: (u: Uint8Array) => boolean;
    /**
     * Embedded low-order point table.
     */
    _internal: {
        lowOrderPoints: Uint8Array[];
    };
};
//# sourceMappingURL=x25519.d.ts.map