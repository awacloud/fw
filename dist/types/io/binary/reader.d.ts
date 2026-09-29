/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace binaryReader {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {BinaryReaderCtor} */
    function factory(): BinaryReaderCtor;
}
export type Endian = "be" | "le";
/**
 * A cursor-based reader instance over a Uint8Array (returned by `create`).
 */
export type BinaryReaderInstance = {
    /**
     * current cursor position (read-only getter)
     */
    pos: number;
    /**
     * total byte length (read-only getter)
     */
    length: number;
    eof: () => boolean;
    tell: () => number;
    seek: (offset: number) => BinaryReaderInstance;
    skip: (n: number) => BinaryReaderInstance;
    peek: (n: number) => Uint8Array;
    setEndian: (e: Endian) => void;
    u8: () => number;
    u16: () => number;
    u24: () => number;
    u32: () => number;
    u64: () => bigint;
    u64Safe: () => number;
    i8: () => number;
    i16: () => number;
    i32: () => number;
    i64: () => bigint;
    f32: () => number;
    f64: () => number;
    bytes: (n: number) => Uint8Array;
    utf8: (n: number) => string;
    ascii: (n: number) => string;
    cstring: () => string;
    sub: (offset: number, length: number) => BinaryReaderInstance;
};
/**
 * Object returned by `binaryReader.factory()` - a namespace exposing `create`.
 */
export type BinaryReaderCtor = {
    create: (uint8: Uint8Array, opts?: {
        endian?: Endian;
    }) => BinaryReaderInstance;
};
//# sourceMappingURL=reader.d.ts.map