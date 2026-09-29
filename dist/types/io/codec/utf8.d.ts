/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace utf8 {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /**
     * Factory function that creates UTF-8 encoder/decoder instance.
     *
     * @returns {Utf8API} Object containing UTF-8 encoding/decoding methods
     */
    function factory(): Utf8API;
}
export type Utf8API = {
    toBytes: (text: string) => Uint8Array;
    fromBytes: (bytes: Uint8Array | number[]) => string;
};
//# sourceMappingURL=utf8.d.ts.map