/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace interp {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {InterpAPI} */
    function factory(): InterpAPI;
}
/**
 * Object returned by `interp.factory()`.
 */
export type InterpAPI = {
    linear: (a: number, b: number, t: number) => number;
    smoothstep: (edge0: number, edge1: number, x: number) => number;
    smootherstep: (edge0: number, edge1: number, x: number) => number;
    cubicHermite: (p0: number, p1: number, m0: number, m1: number, t: number) => number;
    catmullRom: (p0: number, p1: number, p2: number, p3: number, t: number, alpha?: number) => number;
    bezier2: (p0: number, p1: number, p2: number, t: number) => number;
    bezier3: (p0: number, p1: number, p2: number, p3: number, t: number) => number;
    bilinear: (q11: number, q21: number, q12: number, q22: number, x: number, y: number) => number;
    bicubic: (s4x4: number[][], x: number, y: number) => number;
    vec: (out: ArrayLike<number>, a: ArrayLike<number>, b: ArrayLike<number>, t: number) => ArrayLike<number>;
    barycentric: (p: {
        x: number;
        y: number;
    }, a: {
        x: number;
        y: number;
    }, b: {
        x: number;
        y: number;
    }, c: {
        x: number;
        y: number;
    }) => {
        u: number;
        v: number;
        w: number;
    };
    sample: (samples: ArrayLike<number>, t: number) => number;
    sample2D: (samples: ArrayLike<number>, w: number, h: number, x: number, y: number) => number;
};
//# sourceMappingURL=interp.d.ts.map