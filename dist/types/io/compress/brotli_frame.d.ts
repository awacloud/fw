/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace brotliFrame {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {BrotliFrameAPI} */
    function factory(): BrotliFrameAPI;
}
/**
 * One parsed chunk (RFC 9841 §8.2).
 */
export type BrotliFrameChunk = {
    /**
     * Chunk type id.
     */
    type: number;
    /**
     * Human-readable chunk type name.
     */
    typeName: string;
    /**
     * Codec id (-1 if none).
     */
    codec: number;
    /**
     * Codec name, or `null`.
     */
    codecName: string | null;
    /**
     * Declared uncompressed size (-1 if absent).
     */
    uncompressedSize: number;
    /**
     * Shared-brotli dictionary references, or `null`.
     */
    dictionaryRefs: Array<object> | null;
    /**
     * Data-chunk flags byte (-1 if absent).
     */
    dataFlags: number;
    /**
     * Optional chunk hash.
     */
    hash: {
        type: number;
        bytes: Uint8Array;
    } | null;
    /**
     * Byte offset of the chunk length varint.
     */
    headerStart: number;
    /**
     * Byte offset of chunk content.
     */
    contentStart: number;
    /**
     * Byte offset of the chunk payload.
     */
    payloadStart: number;
    /**
     * Exclusive byte offset of the chunk end.
     */
    contentEnd: number;
    /**
     * Chunk payload bytes.
     */
    payload: Uint8Array;
};
/**
 * Result of `parse`.
 */
export type BrotliFrameParsed = {
    /**
     * Header flags byte.
     */
    flags: number;
    /**
     * Whether the flags declare a final footer.
     */
    hasFinalFooter: boolean;
    /**
     * Parsed chunks in order.
     */
    chunks: BrotliFrameChunk[];
    /**
     * Final-footer bytes, or `null`.
     */
    finalFooter: Uint8Array | null;
};
/**
 * One extracted resource (`extractResources`).
 */
export type BrotliFrameResource = {
    /**
     * Resource payload (concatenated for partial sequences).
     */
    payload: Uint8Array;
    /**
     * Codec id.
     */
    codec: number;
    /**
     * Codec name.
     */
    codecName: string | null;
    /**
     * Declared uncompressed size.
     */
    uncompressedSize: number;
    /**
     * Dictionary references, or `null`.
     */
    dictionaryRefs: Array<object> | null;
};
/**
 * One metadata field (`parseMetadataFields`).
 */
export type BrotliFrameMetadataField = {
    /**
     * Two-character field name.
     */
    name: string;
    /**
     * Field kind by name case.
     */
    kind: "standard" | "custom";
    /**
     * Field content bytes.
     */
    content: Uint8Array;
};
/**
 * Public surface of `brotliFrame.factory()`.
 */
export type BrotliFrameAPI = {
    /**
     * Parse an RFC 9841 §8 framed container.
     */
    parse: (buf: Uint8Array) => BrotliFrameParsed;
    /**
     * Group data chunks into resources.
     */
    extractResources: (parsed: BrotliFrameParsed) => BrotliFrameResource[];
    /**
     * Parse a §8.3 metadata field sequence.
     */
    parseMetadataFields: (payload: Uint8Array) => BrotliFrameMetadataField[];
    /**
     * Chunk type id → name map.
     */
    CHUNK_TYPE_NAMES: {
        [x: number]: string;
    };
    /**
     * Codec id → name map.
     */
    CODEC_NAMES: {
        [x: number]: string;
    };
};
//# sourceMappingURL=brotli_frame.d.ts.map