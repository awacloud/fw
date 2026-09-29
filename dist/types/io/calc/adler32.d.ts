/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace adler32 {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {Adler32Ctor} */
    function factory(): Adler32Ctor;
}
/**
 * Public shape of an Adler32 streaming instance.
 */
export type Adler32Instance = {
    /**
     * Update the running checksum with `data`.
     */
    append: (data: Uint8Array) => void;
    /**
     * Final Adler32 checksum as an unsigned 32-bit integer.
     */
    get: () => number;
};
/**
 * Constructor returned by `adler32.factory()`.
 */
export type Adler32Ctor = new () => Adler32Instance;
//# sourceMappingURL=adler32.d.ts.map