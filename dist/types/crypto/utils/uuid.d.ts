/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace uuid {
    let name: string;
    let dependencies: string[];
    let deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): HexAPI;
    }[];
    /**
     * Build the UUID API using the provided hex helper.
     * @param {{fromBytes: (bytes: Uint8Array) => string}} hex - Hex encoder.
     * @returns {UuidFactoryApi} UUID API with `v1` and `v4` generators.
     */
    function factory(hex: {
        fromBytes: (bytes: Uint8Array) => string;
    }): UuidFactoryApi;
}
export type UuidFactoryApi = {
    v1: (raw?: boolean, prng?: false | ((buf: Uint8Array) => Uint8Array | void), format?: "compact" | "rfc4122") => Uint8Array | string;
    v4: (raw?: boolean, prng?: false | ((buf: Uint8Array) => Uint8Array | void), format?: "compact" | "rfc4122") => Uint8Array | string;
};
//# sourceMappingURL=uuid.d.ts.map