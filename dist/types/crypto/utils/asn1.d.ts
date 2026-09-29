/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace asn1 {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {Asn1API} */
    function factory(): Asn1API;
}
/**
 * A parsed ASN.1 TLV node as produced by `parseOne`.
 */
export type Asn1Node = {
    /**
     * Raw tag byte.
     */
    tag: number;
    /**
     * Declared content length in bytes.
     */
    length: number;
    /**
     * Content octets (subarray view into the input).
     */
    value: Uint8Array;
    /**
     * Offset of the first content byte in the input.
     */
    valueOff: number;
    /**
     * Offset just past this TLV in the input.
     */
    next: number;
};
/**
 * Public shape returned by `asn1.factory()`.
 */
export type Asn1API = {
    /**
     * Tag-byte constants.
     */
    TAG: {
        INTEGER: number;
        BIT_STRING: number;
        OCTET_STRING: number;
        NULL: number;
        OID: number;
        SEQUENCE: number;
        SET: number;
    };
    /**
     * Encode an INTEGER.
     */
    encodeInteger: (value: Uint8Array | number[] | number) => (Uint8Array | false);
    /**
     * Encode an OCTET STRING.
     */
    encodeOctetString: (bytes: Uint8Array | number[]) => (Uint8Array | false);
    /**
     * Encode a BIT STRING.
     */
    encodeBitString: (bytes: Uint8Array | number[], unusedBits: number) => (Uint8Array | false);
    /**
     * Encode a NULL.
     */
    encodeNull: () => Uint8Array;
    /**
     * Encode a dotted-notation OID.
     */
    encodeOid: (dotted: string) => (Uint8Array | false);
    /**
     * Encode a SEQUENCE of TLV items.
     */
    encodeSequence: (items: Uint8Array[]) => (Uint8Array | false);
    /**
     * Encode a SET of TLV items.
     */
    encodeSet: (items: Uint8Array[]) => (Uint8Array | false);
    /**
     * Wrap a TLV in a context-specific [n] EXPLICIT tag.
     */
    encodeExplicit: (n: number, body: Uint8Array) => (Uint8Array | false);
    /**
     * Re-tag a TLV as IMPLICIT context-specific [n].
     */
    encodeImplicit: (n: number, tlv: Uint8Array, constructed?: boolean) => Uint8Array;
    /**
     * Parse one TLV at `off`.
     */
    parseOne: (buf: Uint8Array, off: number) => (Asn1Node | false);
    /**
     * Parse a sequence of TLVs.
     */
    parseChildren: (value: Uint8Array) => (Asn1Node[] | false);
    /**
     * Read raw two's-complement bytes of an INTEGER node.
     */
    readInteger: (node: Asn1Node) => (Uint8Array | false);
    /**
     * Read an OID node as a dotted string.
     */
    readOid: (node: Asn1Node) => (string | false);
    /**
     * Read a BIT STRING node.
     */
    readBitString: (node: Asn1Node) => ({
        unusedBits: number;
        bytes: Uint8Array;
    } | false);
};
//# sourceMappingURL=asn1.d.ts.map