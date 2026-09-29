/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace download {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {DownloadAPI} */
    function factory(): DownloadAPI;
}
/**
 * Object returned by `download.factory()`. All methods trigger a browser
 * download synchronously and return `void`.
 */
export type DownloadAPI = {
    /**
     * Download from an existing `data:`/`blob:` URL.
     */
    url: (href: string, name: string) => void;
    /**
     * Download a `Blob` (Object URL created and revoked automatically).
     */
    blob: (blob: Blob, name: string) => void;
    /**
     * Download a `Uint8Array`.
     */
    bytes: (data: Uint8Array, name: string, type?: string) => void;
    /**
     * Download a plain string.
     */
    text: (content: string, name: string, type?: string) => void;
};
//# sourceMappingURL=download.d.ts.map