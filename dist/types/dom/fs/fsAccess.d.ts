/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace fsAccess {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {FsAccessAPI} */
    function factory(): FsAccessAPI;
}
export type FilePickerAcceptType = {
    description?: string;
    accept?: {
        [x: string]: string[];
    };
};
/**
 * Object returned by `fsAccess.factory()`. File System Access pickers are
 * DOM-bound (main thread only); OPFS and handle helpers are worker-safe.
 */
export type FsAccessAPI = {
    /**
     * Open a single-file picker (`null` if cancelled).
     */
    pickFile: (opts?: {
        types?: FilePickerAcceptType[];
        excludeAcceptAllOption?: boolean;
    }) => Promise<FileSystemFileHandle | null>;
    /**
     * Open a multi-select file picker (empty array if cancelled).
     */
    pickFiles: (opts?: {
        types?: FilePickerAcceptType[];
        excludeAcceptAllOption?: boolean;
    }) => Promise<FileSystemFileHandle[]>;
    /**
     * Open a directory picker (`null` if cancelled).
     */
    pickDirectory: (opts?: {
        mode?: "read" | "readwrite";
    }) => Promise<FileSystemDirectoryHandle | null>;
    /**
     * Open a "Save As" picker (`null` if cancelled).
     */
    pickSave: (opts?: {
        suggestedName?: string;
        types?: FilePickerAcceptType[];
    }) => Promise<FileSystemFileHandle | null>;
    /**
     * Read a file handle's contents.
     */
    read: (handle: FileSystemFileHandle, opts?: {
        as?: "bytes" | "text" | "stream";
    }) => Promise<Uint8Array | string | ReadableStream>;
    /**
     * Write data to a file handle.
     */
    write: (handle: FileSystemFileHandle, data: Uint8Array | string | Blob | ReadableStream, opts?: {
        append?: boolean;
    }) => Promise<void>;
    /**
     * Return the OPFS root for the current origin (cached).
     */
    opfs: () => Promise<FileSystemDirectoryHandle>;
    /**
     * Report capabilities available in the current context.
     */
    support: () => {
        fsa: boolean;
        opfs: boolean;
        writableStreams: boolean;
    };
    /**
     * Return the native `File` from a file handle.
     */
    getFile: (handle: FileSystemFileHandle) => Promise<File>;
    /**
     * Get (or create) a file handle inside a directory.
     */
    getFileHandle: (dirHandle: FileSystemDirectoryHandle, name: string, opts?: {
        create?: boolean;
    }) => Promise<FileSystemFileHandle>;
    /**
     * Get (or create) a directory handle inside a directory.
     */
    getDirectoryHandle: (dirHandle: FileSystemDirectoryHandle, name: string, opts?: {
        create?: boolean;
    }) => Promise<FileSystemDirectoryHandle>;
    /**
     * Iterate over the contents of a directory.
     */
    list: (dirHandle: FileSystemDirectoryHandle) => AsyncGenerator<{
        name: string;
        kind: "file" | "directory";
        handle: FileSystemHandle;
    }>;
    /**
     * Remove an entry from a directory.
     */
    remove: (dirHandle: FileSystemDirectoryHandle, name: string, opts?: {
        recursive?: boolean;
    }) => Promise<void>;
};
//# sourceMappingURL=fsAccess.d.ts.map