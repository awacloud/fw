/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace bn {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BitArrayAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): AesAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: string[];
            deps: ({
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): BitArrayAPI;
            } | {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): Utf8API;
            })[];
            factory(bitArray: any, utf8: any): Sha256API;
        })[];
        factory(bitArray: any, aes: any, sha256: any): RandomAPI;
    })[];
    /** @returns {BnAPI} */
    function factory(bitArray: any, random: any): BnAPI;
}
/**
 * An arbitrary-precision unsigned integer instance (limbs of 24-bit values).
 * Most arithmetic methods return a `BnInstance`; mutating-in-place methods
 * (suffixed `M`) return `this`.
 */
export type BnInstance = {
    /**
     * 24-bit limbs, little-endian.
     */
    limbs: number[];
    /**
     * Bits per limb (24).
     */
    radix: number;
    /**
     * Clone this bignum.
     */
    copy: () => BnInstance;
    /**
     * (Re)initialise from object/number/string.
     */
    initWith: (it: any) => BnInstance;
    /**
     * Constant-time equality.
     */
    equals: (that: BnInstance | number) => boolean;
    /**
     * Limb `i` (0 past the end).
     */
    getLimb: (i: number) => number;
    /**
     * 1 if `this >= that`, else 0.
     */
    greaterEquals: (that: BnInstance | number) => number;
    /**
     * Hex serialisation (`0x…`).
     */
    toHex: () => string;
    /**
     * Add in place; returns `this`.
     */
    addM: (that: BnInstance | number) => BnInstance;
    /**
     * Double in place; returns `this`.
     */
    doubleM: () => BnInstance;
    /**
     * Halve in place; returns `this`.
     */
    halveM: () => BnInstance;
    /**
     * Subtract in place; returns `this`.
     */
    subM: (that: BnInstance | number) => BnInstance;
    /**
     * Reduce modulo `that`.
     */
    mod: (that: BnInstance | number) => BnInstance;
    /**
     * Modular inverse; `false` if non-invertible.
     */
    inverseMod: (p: BnInstance) => (BnInstance | false);
    /**
     * Sum (new bignum).
     */
    add: (that: BnInstance | number) => BnInstance;
    /**
     * Difference (new bignum).
     */
    sub: (that: BnInstance | number) => BnInstance;
    /**
     * Product (new bignum).
     */
    mul: (that: BnInstance | number) => BnInstance;
    /**
     * Square (new bignum).
     */
    square: () => BnInstance;
    /**
     * Exponentiation.
     */
    power: (l: BnInstance | number) => BnInstance;
    /**
     * Modular multiplication.
     */
    mulmod: (that: BnInstance, N: BnInstance) => BnInstance;
    /**
     * Modular exponentiation.
     */
    powermod: (x: BnInstance | number, N: BnInstance | number) => BnInstance;
    /**
     * Montgomery modular exponentiation; `false` on setup failure.
     */
    montpowermod: (x: BnInstance | number, N: BnInstance | number) => (BnInstance | false);
    /**
     * Drop trailing zero limbs; returns `this`.
     */
    trim: () => BnInstance;
    /**
     * Reduce (identity on the base class); returns `this`.
     */
    reduce: () => BnInstance;
    /**
     * Full reduction; returns `this`.
     */
    fullReduce: () => BnInstance;
    /**
     * Normalise carries in place; returns `this`.
     */
    normalize: () => BnInstance;
    /**
     * Carry-normalise in place; returns `this`.
     */
    cnormalize: () => BnInstance;
    /**
     * Serialise to a bit array.
     */
    toBits: (len?: number) => number[];
    /**
     * Bit length (rounded up to a byte).
     */
    bitLength: () => number;
};
/**
 * The `bn` constructor (also accessible as `BnCtor.bn`). Calling
 * `new BnCtor(value?)` produces a `BnInstance`.
 */
export type BnCtor = new (it?: any) => BnInstance;
/**
 * Namespace returned by `bn.factory()`.
 */
export type BnAPI = {
    /**
     * Base bignum constructor.
     */
    bn: BnCtor;
    /**
     * Build a bignum from a bit array.
     */
    fromBits: (bits: number[]) => BnInstance;
    /**
     * Pre-built pseudo-Mersenne prime field constructors (p192, p256, …).
     */
    prime: {
        [x: string]: BnCtor;
    };
    /**
     * Build a prime-field subclass constructor.
     */
    pseudoMersennePrime: (exponent: number, coeff: Array<Array<number>>) => BnCtor;
    /**
     * Uniform random bignum below `modulus`.
     */
    random: (modulus: BnInstance | number, paranoia?: number) => BnInstance;
};
//# sourceMappingURL=bn.d.ts.map