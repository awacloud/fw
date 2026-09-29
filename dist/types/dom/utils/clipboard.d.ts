/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace clipboard {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {ClipboardAPI} */
    function factory(): ClipboardAPI;
}
/**
 * Public surface returned by `clipboard.factory()`.
 */
export type ClipboardAPI = {
    /**
     *   Capability flags computed once at factory initialisation.
     */
    isSupported: () => {
        read: boolean;
        write: boolean;
        share: boolean;
    };
    /**
     *   Write `text` to the system clipboard.
     */
    set: (text: string) => Promise<void>;
    /**
     *   Read text from the system clipboard.
     */
    get: () => Promise<string>;
    /**
     *   Invoke the native Web Share sheet.
     */
    share: (opts?: {
        url?: string;
        title?: string;
        text?: string;
        files?: File[];
    }) => Promise<void>;
};
//# sourceMappingURL=clipboard.d.ts.map