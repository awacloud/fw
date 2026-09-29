/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace blake2b {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {Blake2bAPI} */
    function factory(): Blake2bAPI;
}
/**
 * Streaming BLAKE2b context returned by `create`.
 */
export type Blake2bContext = {
    /**
     * Absorb a chunk; `false` if already finalised.
     */
    update: (chunk: Uint8Array) => boolean;
    /**
     * Finalise and return the digest bytes, or `false`.
     */
    digest: () => (Uint8Array | false);
};
/**
 * Public shape returned by `blake2b.factory()`.
 */
export type Blake2bAPI = {
    /**
     *   One-shot BLAKE2b hash (digest bytes, or `false` on invalid params).
     */
    hash: (msg: Uint8Array, outLen?: number, key?: Uint8Array) => (Uint8Array | false);
    /**
     *   Create a streaming context, or `false` on invalid params.
     */
    create: (outLen?: number, key?: Uint8Array, salt?: Uint8Array, person?: Uint8Array) => (Blake2bContext | false);
};
//# sourceMappingURL=blake2b.d.ts.map