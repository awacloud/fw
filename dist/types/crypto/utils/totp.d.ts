/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace totp {
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
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Base32API;
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
    })[];
    /**
     * @param {Object} hmac     HMAC module (RFC 2104) - used for SHA-256 and SHA-512.
     * @param {Object} random   CSPRNG module.
     * @param {Object} base32   Base32 module (RFC 4648).
     * @param {Object} bitArray bitArray module (Uint8Array ↔ bitArray conversion).
     * @param {Object} sha256   SHA-256 module (used via hmac for 'SHA-256').
     * @param {Object} sha512   SHA-512 module (used via hmac for 'SHA-512').
     * @returns {TotpAPI}
     */
    function factory(hmac: any, random: any, base32: any, bitArray: any, sha256: any, sha512: any): TotpAPI;
}
/**
 * TOTP/HOTP helper surface returned by `factory()`.
 */
export type TotpAPI = {
    /**
     * - Generate a zero-padded TOTP code for the given secret and time.
     */
    generate: (secret: Uint8Array | string, opts?: {
        algorithm?: "SHA-1" | "SHA-256" | "SHA-512";
        digits?: 6 | 7 | 8;
        period?: number;
        t?: number;
    }) => string;
    /**
     * - Verify a TOTP code against a constant-time tolerance window.
     */
    verify: (code: string, secret: Uint8Array | string, opts?: {
        algorithm?: "SHA-1" | "SHA-256" | "SHA-512";
        digits?: 6 | 7 | 8;
        period?: number;
        t?: number;
        window?: number;
    }) => {
        valid: boolean;
        delta?: number;
    };
    /**
     * - Generate a random secret and an otpauth:// URI for enrollment.
     */
    enroll: (opts: {
        issuer: string;
        account: string;
        algorithm?: "SHA-1" | "SHA-256" | "SHA-512";
        digits?: 6 | 7 | 8;
        period?: number;
        secretLen?: number;
    }) => {
        secret: string;
        secretBytes: Uint8Array;
        uri: string;
    };
    /**
     * - Build an otpauth://totp/ URI matching the Google Authenticator spec.
     */
    uri: (opts: {
        issuer: string;
        account: string;
        secret: string;
        algorithm?: "SHA-1" | "SHA-256" | "SHA-512";
        digits?: 6 | 7 | 8;
        period?: number;
    }) => string;
};
//# sourceMappingURL=totp.d.ts.map