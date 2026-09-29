/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace base32 {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /**
     * Factory function that creates Base32 encoder/decoder instance.
     *
     * @returns {Base32API} Object containing Base32 encoding/decoding methods
     *
     * @example
     * const codec = base32.factory();
     * const encoded = codec.fromBytes(new Uint8Array([65, 66, 67]));
     * console.log(encoded); // "IFBEG==="
     */
    function factory(): Base32API;
}
export type Base32API = {
    fromBytes: (bytes: Uint8Array | number[]) => string;
    toBytes: (str: string) => Uint8Array;
    test: (str: string) => boolean;
};
//# sourceMappingURL=base32.d.ts.map