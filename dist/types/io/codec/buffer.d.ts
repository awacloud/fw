/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace buffer {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): ValidAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Utf8API;
    })[];
    /**
     * Build the codec with injected dependencies.
     *
     * @param {object} valid
     * @param {(value:any)=>string} valid.is Returns a type name matching TYPE_MAP.
     * @param {object} utf8
     * @param {(bytes:Uint8Array)=>string} utf8.fromBytes
     * @param {(text:string)=>Uint8Array} utf8.toBytes
     * @returns {BufferAPI}
     */
    function factory(valid: {
        is: (value: any) => string;
    }, utf8: {
        fromBytes: (bytes: Uint8Array) => string;
        toBytes: (text: string) => Uint8Array;
    }): BufferAPI;
}
/**
 * Binary "buffer" codec surface returned by `factory()`.
 */
export type BufferAPI = {
    /**
     * - Decode a concatenated stream of buffer blocks into JS values.
     */
    consume: (data: Uint8Array) => any[];
    /**
     * - Round-trip a value through encode/decode to produce a structural clone.
     */
    clone: (data: any) => any;
    /**
     * - Encode a JS value into a typed buffer block.
     */
    out: (data: any) => Uint8Array;
    /**
     * - Decode a single typed buffer block into a JS value.
     */
    in: (data: Uint8Array) => any;
    /**
     * - Concatenate Uint8Array blocks into a single Uint8Array.
     */
    concat: (len: number, arr: Uint8Array[], out?: Uint8Array, count?: number) => Uint8Array;
};
//# sourceMappingURL=buffer.d.ts.map