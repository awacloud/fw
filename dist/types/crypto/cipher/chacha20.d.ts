/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace chacha20 {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {ChaCha20API} */
    function factory(): ChaCha20API;
}
/**
 * Object returned by `chacha20.factory()`.
 */
export type ChaCha20API = {
    /**
     * XOR `data` with the ChaCha20 keystream; `false` on invalid key/nonce or counter overflow.
     */
    xor: (key: Uint8Array, nonce: Uint8Array, data: Uint8Array, initialCounter?: number) => (Uint8Array | false);
};
//# sourceMappingURL=chacha20.d.ts.map