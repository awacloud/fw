/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace mime {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: ({
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
     * @param {Object} utf8 UTF-8 codec.
     * @param {Object} random CSPRNG (provides `bytes(n)`).
     * @returns {MimeAPI}
     */
    function factory(utf8: any, random: any): MimeAPI;
}
export type MimePart = {
    headers: {
        [x: string]: string;
    };
    body: Uint8Array;
};
export type MimeAPI = {
    parseHeader: (s: string) => {
        value: string;
        params: {
            [x: string]: string;
        };
    };
    formatHeader: (value: string | {
        value: string;
        params?: any;
    }, params?: any) => string;
    parseHeaders: (text: string) => {
        [x: string]: string;
    };
    formatHeaders: (headers: {
        [x: string]: string;
    }) => string;
    encode: (parts: Array<{
        headers?: any;
        body: Uint8Array | string;
    }>, options?: {
        boundary?: string;
        type?: string;
    }) => {
        body: Uint8Array;
        boundary: string;
        contentType: string;
    };
    decode: (bytes: Uint8Array, boundary: string) => MimePart[];
    randomBoundary: () => string;
};
//# sourceMappingURL=mime.d.ts.map