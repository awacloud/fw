/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace base58 {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /**
     * Factory function that creates Base58 encoder/decoder instance.
     *
     * @returns {Base58API} Object containing Base58 encoding/decoding methods
     *
     * @example
     * const codec = base58.factory();
     * const encoded = codec.fromBytes(new Uint8Array([0, 0, 1]));
     * console.log(encoded); // "112"
     */
    function factory(): Base58API;
}
export type Base58API = {
    fromBytes: (bytes: Uint8Array | number[]) => string;
    toBytes: (str: string) => Uint8Array;
    test: (str: string) => boolean;
};
//# sourceMappingURL=base58.d.ts.map