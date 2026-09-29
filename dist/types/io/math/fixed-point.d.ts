/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace fixedPoint {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {FixedPointAPI} */
    function factory(): FixedPointAPI;
}
/**
 * Object returned by `fixedPoint.factory()`.
 */
export type FixedPointAPI = {
    fixed16ToFloat: (raw: number) => number;
    floatToFixed16: (value: number, opts?: object) => number;
    ufixed16ToFloat: (raw: number) => number;
    floatToUfixed16: (value: number, opts?: object) => number;
    f2dot14ToFloat: (raw: number) => number;
    floatToF2dot14: (value: number, opts?: object) => number;
    funitToPx: (unitsPerEm: number, fontSize: number, funit: number) => number;
    fixedToFloat: (raw: number, intBits: number, fracBits: number, signed?: boolean) => number;
    floatToFixed: (value: number, intBits: number, fracBits: number, signed?: boolean, opts?: {
        strict?: boolean;
    }) => number;
};
//# sourceMappingURL=fixed-point.d.ts.map