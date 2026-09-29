/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace jws {
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
        dependencies: any[];
        factory(): Utf8API;
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
        factory(bitArray: any, utf8: any, sha256: any): HmacAPI;
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
            factory(bitArray: any, utf8: any): Sha512API;
        })[];
        factory(sha512: any, bitArray: any): Ed25519API;
    })[];
    /** @returns {JwsAPI} */
    function factory(bitArray: any, utf8: any, b64: any, hmac: any, sha256: any, sha512: any, ed25519: any): JwsAPI;
}
/**
 * Public shape returned by `jws.factory()`.
 */
export type JwsAPI = {
    /**
     * Sign a payload and return a compact JWS.
     */
    sign: (payload: Uint8Array, alg: string, key: Uint8Array, extraHeader?: any) => (string | false);
    /**
     * Verify a compact JWS.
     */
    verify: (token: string, key: Uint8Array, opts?: {
        expectedAlg?: string | string[];
        expectedTyp?: string;
    }) => ({
        header: any;
        payload: Uint8Array;
        claims?: any;
    } | false);
    /**
     * Sign a JSON claim set as a JWT.
     */
    signJwt: (claims: any, alg: string, key: Uint8Array) => (string | false);
    /**
     * Verify a JWT and parse its claims.
     */
    verifyJwt: (token: string, key: Uint8Array, opts?: {
        expectedAlg?: string | string[];
        expectedTyp?: string;
    }) => ({
        header: any;
        payload: Uint8Array;
        claims?: any;
    } | false);
    /**
     * base64url (no padding) encode.
     */
    _b64uEnc: (bytes: Uint8Array) => string;
    /**
     * base64url (no padding) decode.
     */
    _b64uDec: (s: string) => (Uint8Array | false);
};
//# sourceMappingURL=jws.d.ts.map