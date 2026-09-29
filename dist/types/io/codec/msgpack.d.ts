/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace msgpack {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Utf8API;
    }[];
    /**
     * Factory function that creates a MessagePack encoder/decoder instance.
     * @param {Object} utf8 - UTF-8 codec dependency
     * @returns {MsgpackAPI}
     */
    function factory(utf8: any): MsgpackAPI;
}
export type MsgpackExt = {
    type: number;
    data: Uint8Array;
};
export type MsgpackAPI = {
    encode: (value: unknown) => Uint8Array;
    decode: (bytes: Uint8Array, options?: {
        useMap?: boolean;
    }) => unknown;
    Ext: new (type: number, data: Uint8Array) => MsgpackExt;
};
//# sourceMappingURL=msgpack.d.ts.map