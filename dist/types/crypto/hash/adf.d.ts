/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace adf {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: ({
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
    /** @returns {AdfAPI} */
    function factory(sha256: any, aes: any): AdfAPI;
}
/**
 * ADF derivation call signature. `bitArray` values are `number[]`.
 */
export type AdfDerive = (master: number[], transform: number[], rounds: number, composite: number[]) => (number[] | false);
/**
 * Public shape returned by `adf.factory()`.
 */
export type AdfAPI = {
    /**
     * Full derivation (`adf_partial` result hashed once more).
     */
    fn: AdfDerive;
    /**
     * Partial derivation (master ‖ SHA-256(transformed)).
     */
    partial: AdfDerive;
    /**
     * KeePass recommended minimum round count.
     */
    MIN_RECOMMENDED_ROUNDS: number;
    /**
     * Upper bound on rounds.
     */
    MAX_ROUNDS: number;
};
//# sourceMappingURL=adf.d.ts.map