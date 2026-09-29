/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace ecc {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): HexAPI;
    } | {
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
        deps: {
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
        }[];
        factory(sha512: any): Sha384API;
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
        factory(bitArray: any, random: any): BnAPI;
    })[];
    /** @returns {EccApi} */
    function factory(bitArray: any, hex: any, bn: any, sha256: any, sha384: any, sha512: any, hmac: any): EccApi;
}
/**
 * Affine point instance on a curve.
 */
export type EccPointInstance = {
    isIdentity: boolean;
    x?: any;
    y?: any;
    curve: EccCurveInstance;
    toJac: () => EccPointJacInstance;
    mult: (k: any) => EccPointInstance;
    mult2: (k: any, k2: any, affine2: EccPointInstance) => EccPointInstance;
    multiples: () => EccPointInstance[];
    negate: () => EccPointInstance;
    isValid: () => boolean;
    toBits: () => number[];
};
/**
 * Constructor for `ecc.point`.
 */
export type EccPointCtor = {
    new (curve: EccCurveInstance, x?: any, y?: any): EccPointInstance;
};
/**
 * Jacobian-coordinate point instance.
 */
export type EccPointJacInstance = {
    isIdentity: boolean;
    x?: any;
    y?: any;
    z?: any;
    curve: EccCurveInstance;
    add: (T: EccPointJacInstance) => (EccPointJacInstance | false);
    doubl: () => EccPointJacInstance;
    toAffine: () => EccPointInstance;
    mult: (k: any, affine: EccPointInstance) => EccPointJacInstance;
    mult2: (k1: any, affine: EccPointInstance, k2: any, affine2: EccPointInstance) => EccPointJacInstance;
    negate: () => EccPointJacInstance;
    isValid: () => boolean;
};
/**
 * Constructor for `ecc.pointJac`. Static method `toAffineMultiple` is also exposed.
 */
export type EccPointJacCtor = {
    new (curve: EccCurveInstance, x?: any, y?: any, z?: any): EccPointJacInstance;
    toAffineMultiple: (points: EccPointJacInstance[]) => EccPointInstance[];
};
/**
 * Curve instance built via `new ecc.curve(...)`.
 */
export type EccCurveInstance = {
    field: any;
    r: any;
    a: any;
    b: any;
    G: EccPointInstance;
    fromBits: (bits: number[]) => (EccPointInstance | false);
};
/**
 * Constructor for `ecc.curve`.
 */
export type EccCurveCtor = {
    new (Field: any, r: any, a: any, b: any, x: any, y: any): EccCurveInstance;
};
/**
 * Public-key instance shared by `elGamal` and `ecdsa`.
 */
export type EccPublicKeyInstance = {
    serialize: () => object;
    get: () => {
        x: number[];
        y: number[];
    };
    getType: () => string;
};
/**
 * Constructor for a publicKey (elGamal / ecdsa).
 */
export type EccPublicKeyCtor = {
    new (curve: EccCurveInstance, point: EccPointInstance | number[]): EccPublicKeyInstance;
};
/**
 * Secret-key instance shared by `elGamal` and `ecdsa`.
 */
export type EccSecretKeyInstance = {
    serialize: () => object;
    get: () => number[];
    getType: () => string;
};
/**
 * Constructor for a secretKey (elGamal / ecdsa).
 */
export type EccSecretKeyCtor = {
    new (curve: EccCurveInstance, exponent: any): EccSecretKeyInstance;
};
/**
 * Public surface of `ecc.factory(...)`.
 */
export type EccApi = {
    point: EccPointCtor;
    pointJac: EccPointJacCtor;
    curve: EccCurveCtor;
    curves: {
        [x: string]: EccCurveInstance;
    };
    curveName: (curve: EccCurveInstance) => (string | false);
    deserialize: (key: object) => (EccPublicKeyInstance | EccSecretKeyInstance | false);
    basicKey: {
        publicKey: EccPublicKeyCtor;
        secretKey: EccSecretKeyCtor;
        generateKeys: (cn: string) => Function;
    };
    elGamal: {
        generateKeys: Function;
        publicKey: EccPublicKeyCtor;
        secretKey: EccSecretKeyCtor;
    };
    ecdsa: {
        generateKeys: Function;
        publicKey: EccPublicKeyCtor;
        secretKey: EccSecretKeyCtor;
    };
    _internal: object;
};
//# sourceMappingURL=ecc.d.ts.map