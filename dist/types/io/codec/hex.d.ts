/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace hex {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /**
     * Factory function that creates hexadecimal encoder/decoder instance.
     *
     * @returns {HexAPI} Object containing hex encoding/decoding methods
     *
     * @example
     * const codec = hex.factory();
     * const encoded = codec.fromBytes(new Uint8Array([255, 0, 128]));
     * console.log(encoded); // "ff0080"
     */
    function factory(): HexAPI;
}
export type HexAPI = {
    toBytes: (text: string) => Uint8Array;
    fromBytes: (bytes: Uint8Array | number[]) => string;
    test: (str: string) => boolean;
};
//# sourceMappingURL=hex.d.ts.map