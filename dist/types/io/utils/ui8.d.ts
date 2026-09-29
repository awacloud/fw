/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace ui8 {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /**
     * Create Uint8Array helper API.
     * @returns {Ui8API}
     */
    function factory(): Ui8API;
}
/**
 * Uint8Array helper surface returned by `factory()`.
 */
export type Ui8API = {
    /**
     * - Compare two Uint8Array for byte equality.
     */
    equal: (a: Uint8Array, b: Uint8Array) => boolean;
    /**
     * - Join two Uint8Array instances into a new one.
     */
    join: (ui8a_1: Uint8Array, ui8a_2: Uint8Array) => Uint8Array;
    /**
     * - Concatenate an array of Uint8Array into a new one.
     */
    concat: (arr: Uint8Array[]) => Uint8Array;
};
//# sourceMappingURL=ui8.d.ts.map