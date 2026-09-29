/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace linalg {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {LinalgAPI} */
    function factory(): LinalgAPI;
}
/**
 * 2-component vector namespace (Float32Array(2), out-parameter convention).
 */
export type Vec2API = {
    create: (arr?: ArrayLike<number>) => Float32Array;
    copy: (out: Float32Array, a: ArrayLike<number>) => Float32Array;
    set: (out: Float32Array, x: number, y: number) => Float32Array;
    add: (out: Float32Array, a: ArrayLike<number>, b: ArrayLike<number>) => Float32Array;
    sub: (out: Float32Array, a: ArrayLike<number>, b: ArrayLike<number>) => Float32Array;
    mul: (out: Float32Array, a: ArrayLike<number>, b: ArrayLike<number>) => Float32Array;
    scale: (out: Float32Array, v: ArrayLike<number>, s: number) => Float32Array;
    dot: (a: ArrayLike<number>, b: ArrayLike<number>) => number;
    length: (v: ArrayLike<number>) => number;
    lengthSq: (v: ArrayLike<number>) => number;
    normalize: (out: Float32Array, v: ArrayLike<number>) => Float32Array;
    distance: (a: ArrayLike<number>, b: ArrayLike<number>) => number;
    lerp: (out: Float32Array, a: ArrayLike<number>, b: ArrayLike<number>, t: number) => Float32Array;
    equals: (a: ArrayLike<number>, b: ArrayLike<number>, eps?: number) => boolean;
};
/**
 * 3-component vector namespace (Float32Array(3), out-parameter convention).
 */
export type Vec3API = {
    create: (arr?: ArrayLike<number>) => Float32Array;
    copy: (out: Float32Array, a: ArrayLike<number>) => Float32Array;
    set: (out: Float32Array, x: number, y: number, z: number) => Float32Array;
    add: (out: Float32Array, a: ArrayLike<number>, b: ArrayLike<number>) => Float32Array;
    sub: (out: Float32Array, a: ArrayLike<number>, b: ArrayLike<number>) => Float32Array;
    mul: (out: Float32Array, a: ArrayLike<number>, b: ArrayLike<number>) => Float32Array;
    scale: (out: Float32Array, v: ArrayLike<number>, s: number) => Float32Array;
    dot: (a: ArrayLike<number>, b: ArrayLike<number>) => number;
    cross: (out: Float32Array, a: ArrayLike<number>, b: ArrayLike<number>) => Float32Array;
    length: (v: ArrayLike<number>) => number;
    lengthSq: (v: ArrayLike<number>) => number;
    normalize: (out: Float32Array, v: ArrayLike<number>) => Float32Array;
    distance: (a: ArrayLike<number>, b: ArrayLike<number>) => number;
    lerp: (out: Float32Array, a: ArrayLike<number>, b: ArrayLike<number>, t: number) => Float32Array;
    equals: (a: ArrayLike<number>, b: ArrayLike<number>, eps?: number) => boolean;
};
/**
 * 4-component vector namespace (Float32Array(4), out-parameter convention).
 */
export type Vec4API = {
    create: (arr?: ArrayLike<number>) => Float32Array;
    copy: (out: Float32Array, a: ArrayLike<number>) => Float32Array;
    set: (out: Float32Array, x: number, y: number, z: number, w: number) => Float32Array;
    add: (out: Float32Array, a: ArrayLike<number>, b: ArrayLike<number>) => Float32Array;
    sub: (out: Float32Array, a: ArrayLike<number>, b: ArrayLike<number>) => Float32Array;
    mul: (out: Float32Array, a: ArrayLike<number>, b: ArrayLike<number>) => Float32Array;
    scale: (out: Float32Array, v: ArrayLike<number>, s: number) => Float32Array;
    dot: (a: ArrayLike<number>, b: ArrayLike<number>) => number;
    length: (v: ArrayLike<number>) => number;
    lengthSq: (v: ArrayLike<number>) => number;
    normalize: (out: Float32Array, v: ArrayLike<number>) => Float32Array;
    distance: (a: ArrayLike<number>, b: ArrayLike<number>) => number;
    lerp: (out: Float32Array, a: ArrayLike<number>, b: ArrayLike<number>, t: number) => Float32Array;
    equals: (a: ArrayLike<number>, b: ArrayLike<number>, eps?: number) => boolean;
};
/**
 * 3×3 column-major matrix namespace (Float32Array(9), out-parameter convention).
 */
export type Mat3API = {
    create: () => Float32Array;
    identity: (out: Float32Array) => Float32Array;
    copy: (out: Float32Array, src: ArrayLike<number>) => Float32Array;
    multiply: (out: Float32Array, a: ArrayLike<number>, b: ArrayLike<number>) => Float32Array;
    translate: (out: Float32Array, m: ArrayLike<number>, v: ArrayLike<number>) => Float32Array;
    rotate: (out: Float32Array, m: ArrayLike<number>, rad: number) => Float32Array;
    scale: (out: Float32Array, m: ArrayLike<number>, v: ArrayLike<number>) => Float32Array;
    determinant: (m: ArrayLike<number>) => number;
    invert: (out: Float32Array, m: ArrayLike<number>) => boolean;
    transpose: (out: Float32Array, m: ArrayLike<number>) => Float32Array;
    transform: (outV2: Float32Array, m: ArrayLike<number>, v: ArrayLike<number>) => Float32Array;
};
/**
 * 4×4 column-major matrix namespace (Float32Array(16), out-parameter convention).
 */
export type Mat4API = {
    create: () => Float32Array;
    identity: (out: Float32Array) => Float32Array;
    copy: (out: Float32Array, src: ArrayLike<number>) => Float32Array;
    multiply: (out: Float32Array, a: ArrayLike<number>, b: ArrayLike<number>) => Float32Array;
    translate: (out: Float32Array, m: ArrayLike<number>, v: ArrayLike<number>) => Float32Array;
    rotate: (out: Float32Array, m: ArrayLike<number>, rad: number, axis: ArrayLike<number>) => Float32Array;
    scale: (out: Float32Array, m: ArrayLike<number>, v: ArrayLike<number>) => Float32Array;
    invert: (out: Float32Array, m: ArrayLike<number>) => boolean;
    transpose: (out: Float32Array, m: ArrayLike<number>) => Float32Array;
    perspective: (out: Float32Array, fovY: number, aspect: number, near: number, far: number) => Float32Array;
    ortho: (out: Float32Array, left: number, right: number, bottom: number, top: number, near: number, far: number) => Float32Array;
    lookAt: (out: Float32Array, eye: ArrayLike<number>, center: ArrayLike<number>, up: ArrayLike<number>) => Float32Array;
    transform: (outV3: Float32Array, m: ArrayLike<number>, v: ArrayLike<number>) => Float32Array;
    transform4: (outV4: Float32Array, m: ArrayLike<number>, v: ArrayLike<number>) => Float32Array;
};
/**
 * Object returned by `linalg.factory()`.
 */
export type LinalgAPI = {
    vec2: Vec2API;
    vec3: Vec3API;
    vec4: Vec4API;
    mat3: Mat3API;
    mat4: Mat4API;
};
//# sourceMappingURL=linalg.d.ts.map