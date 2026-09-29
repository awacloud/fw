/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace xml {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {XmlAPI} */
    function factory(): XmlAPI;
}
/**
 * An element node in the XML tree.
 */
export type XmlElement = {
    type: "element";
    name: string;
    attrs: any;
    children: any[];
};
/**
 * A text node in the XML tree.
 */
export type XmlText = {
    type: "text";
    value: string;
};
/**
 * Any XML tree node.
 */
export type XmlNode = XmlElement | XmlText;
/**
 * Public API returned by `xml.factory()`.
 */
export type XmlAPI = {
    /**
     * Create an element node.
     */
    el: (name: string, attrs?: any, children?: any[]) => XmlElement;
    /**
     * Create a text node.
     */
    text: (value: string) => XmlText;
    /**
     * Parse an XML string into a node tree (returns the root element).
     */
    parse: (xmlStr: string) => XmlElement;
    /**
     * Serialize a document with the XML prolog.
     */
    serialize: (root: object) => string;
    /**
     * Serialize a node tree without the prolog.
     */
    serializeNode: (node: object) => string;
    /**
     * First direct child element with `name`, or `null`.
     */
    findChild: (node: {
        children: any[];
    }, name: string) => (object | null);
    /**
     * All direct child elements with `name`.
     */
    findAll: (node: {
        children: any[];
    }, name: string) => any[];
    /**
     * Recursively concatenate all descendant text values.
     */
    textContent: (node: object) => string;
    /**
     * Escape `&`, `<`, `>` for text content.
     */
    encodeText: (s: string) => string;
    /**
     * Escape `&`, `<`, `>`, `"` for attribute values.
     */
    encodeAttr: (s: string) => string;
    /**
     * Decode character references and predefined entities.
     */
    decodeEntities: (s: string) => string;
    /**
     * Constructor for parser errors.
     */
    XmlParseError: new (code: string, msg: string) => Error;
};
//# sourceMappingURL=xml.d.ts.map