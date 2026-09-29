/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace b64 {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /**
     * Factory function that creates Base64 encoder/decoder instance.
     *
     * @returns {Base64API} Object containing Base64 encoding/decoding methods
     *
     * @example
     * const codec = b64.factory();
     * const encoded = codec.fromBytes(new Uint8Array([65, 66, 67]));
     * console.log(encoded); // "QUJD"
     */
    function factory(): Base64API;
}
export type Base64API = {
    fromBytes: (bytes: Uint8Array | number[]) => string;
    toBytes: (str: string) => Uint8Array;
    test: (str: string) => boolean;
};
//# sourceMappingURL=b64.d.ts.map