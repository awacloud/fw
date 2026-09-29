/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace binaryWriter {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {BinaryWriterCtor} */
    function factory(): BinaryWriterCtor;
}
export type Endian = "be" | "le";
/**
 * A cursor-based writer instance with auto-growing buffer (returned by `create`).
 * Typed write methods return the instance for chaining.
 */
export type BinaryWriterInstance = {
    /**
     * current cursor position (read-only getter)
     */
    pos: number;
    /**
     * logical length / highest written position (read-only getter)
     */
    length: number;
    seek: (offset: number) => BinaryWriterInstance;
    align: (n: number) => BinaryWriterInstance;
    u8: (v: number) => BinaryWriterInstance;
    u16: (v: number) => BinaryWriterInstance;
    u24: (v: number) => BinaryWriterInstance;
    u32: (v: number) => BinaryWriterInstance;
    u64: (v: bigint) => BinaryWriterInstance;
    i8: (v: number) => BinaryWriterInstance;
    i16: (v: number) => BinaryWriterInstance;
    i32: (v: number) => BinaryWriterInstance;
    i64: (v: bigint) => BinaryWriterInstance;
    f32: (v: number) => BinaryWriterInstance;
    f64: (v: number) => BinaryWriterInstance;
    bytes: (arr: Uint8Array) => BinaryWriterInstance;
    utf8: (s: string) => BinaryWriterInstance;
    ascii: (s: string) => BinaryWriterInstance;
    cstring: (s: string) => BinaryWriterInstance;
    finalize: () => Uint8Array;
};
/**
 * Object returned by `binaryWriter.factory()` - a namespace exposing `create`.
 */
export type BinaryWriterCtor = {
    create: (opts?: {
        endian?: Endian;
        initialSize?: number;
    }) => BinaryWriterInstance;
};
//# sourceMappingURL=writer.d.ts.map