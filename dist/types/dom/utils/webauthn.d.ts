/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace webauthn {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Base64API;
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
    /**
     * @param {Object} random - fw `random` module
     * @param {Object} b64    - fw `b64` module
     * @returns {WebAuthnAPI} webauthn API
     */
    function factory(random: any, b64: any): WebAuthnAPI;
}
/**
 * Browser WebAuthn capability report.
 */
export type WebAuthnSupport = {
    /**
     * - Credential Management API present.
     */
    available: boolean;
    /**
     * - Platform authenticator (e.g. Touch ID) available.
     */
    userVerifyingPlatformAuthenticator: boolean;
    /**
     * - Conditional UI (autofill) available.
     */
    conditionalMediation: boolean;
};
/**
 * WebAuthn API returned by `factory()`. Registration/authentication results
 * are all-base64url plain objects destined for the RP server.
 */
export type WebAuthnAPI = {
    /**
     * - Run credential creation (navigator.credentials.create).
     */
    register: (opts: any) => Promise<any>;
    /**
     * - Run credential assertion (navigator.credentials.get).
     */
    authenticate: (opts?: any) => Promise<any>;
    /**
     * - Detect browser WebAuthn capabilities.
     */
    support: () => Promise<WebAuthnSupport>;
};
//# sourceMappingURL=webauthn.d.ts.map