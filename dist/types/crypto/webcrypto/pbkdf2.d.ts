/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace webcryptoPbkdf2 {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    function factory(): {
        isAvailable: () => boolean;
        deriveBits: (password: Uint8Array, salt: Uint8Array, lengthBits: number, iterations?: number, hash?: HashName) => Promise<Uint8Array | false>;
        deriveKey: (password: Uint8Array, salt: Uint8Array, derivedKeyAlg: object, usages: KeyUsage[], iterations?: number, hash?: HashName, extractable?: boolean) => Promise<CryptoKey | false>;
    };
}
export type HashName = "SHA-1" | "SHA-256" | "SHA-384" | "SHA-512";
//# sourceMappingURL=pbkdf2.d.ts.map