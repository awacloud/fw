/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace bigint {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {BigIntAPI} */
    function factory(): BigIntAPI;
}
/**
 * Public shape returned by `bigint.factory()`.
 */
export type BigIntAPI = {
    /**
     * Serialize a BigInt to a byte array.
     */
    toBytes: (bi: bigint, opts?: {
        byteLength?: number;
        endian?: ("be" | "le");
        signed?: boolean;
    }) => Uint8Array;
    /**
     * Parse a byte array into a BigInt.
     */
    fromBytes: (bytes: Uint8Array | number[], opts?: {
        endian?: ("be" | "le");
        signed?: boolean;
    }) => bigint;
    /**
     * Number of bits needed to represent `bi` in absolute value.
     */
    bitLength: (bi: bigint) => number;
    /**
     * Minimum byte count needed to represent `bi`.
     */
    byteLength: (bi: bigint) => number;
    /**
     * Modular exponentiation `base^exp mod mod`.
     */
    modPow: (base: bigint, exp: bigint, mod: bigint) => bigint;
    /**
     * Modular inverse of `a` mod `mod`.
     */
    modInv: (a: bigint, mod: bigint) => bigint;
    /**
     * Greatest common divisor of `|a|` and `|b|`.
     */
    gcd: (a: bigint, b: bigint) => bigint;
    /**
     * Least common multiple of `a` and `b`.
     */
    lcm: (a: bigint, b: bigint) => bigint;
    /**
     * Miller-Rabin primality test.
     */
    isPrime: (n: bigint, rounds?: number) => boolean;
    /**
     * Uniform BigInt in `[min, max]`.
     */
    randomBetween: (min: bigint, max: bigint, randomBytesFn: (n: number) => Uint8Array | number[]) => bigint;
    /**
     * Parse a string into a BigInt.
     */
    parse: (str: string, radix?: number) => bigint;
    /**
     * Convert a BigInt to a string in the given radix.
     */
    toString: (bi: bigint, radix?: number) => string;
};
//# sourceMappingURL=bigint.d.ts.map