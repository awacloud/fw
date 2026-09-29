/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace webcryptoHkdf {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    function factory(): {
        isAvailable: () => boolean;
        deriveBits: (ikm: Uint8Array, salt: Uint8Array, info: Uint8Array, lengthBits: number, hash?: HashName) => Promise<Uint8Array | false>;
        deriveKey: (ikm: Uint8Array, salt: Uint8Array, info: Uint8Array, derivedKeyAlg: object, usages: KeyUsage[], hash?: HashName, extractable?: boolean) => Promise<CryptoKey | false>;
    };
}
export type HashName = "SHA-1" | "SHA-256" | "SHA-384" | "SHA-512";
//# sourceMappingURL=hkdf.d.ts.map