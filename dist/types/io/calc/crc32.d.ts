/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace crc32 {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /**
     * Factory function that returns the CRC32 constructor.
     * Creates a lookup table for efficient CRC32 calculation.
     *
     * @returns {Crc32Ctor} CRC32 constructor function
     *
     * @example
     * const Crc32 = crc32.factory();
     * const instance = new Crc32();
     * instance.append(data);
     * const checksum = instance.get();
     */
    function factory(): Crc32Ctor;
}
export type Crc32Instance = {
    /**
     * - Append data to the running CRC32 calculation.
     */
    append: (data: Uint8Array | Array<number>) => void;
    /**
     * - Return the final CRC32 checksum as an unsigned 32-bit integer.
     */
    get: () => number;
};
export type Crc32Ctor = new () => Crc32Instance;
//# sourceMappingURL=crc32.d.ts.map