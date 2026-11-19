/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace ua {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {UaAPI} */
    function factory(): UaAPI;
}
/**
 * Public surface returned by `ua.factory()`.
 */
export type UaAPI = {
    /**
     * Raw `navigator.userAgent` string (empty outside the browser).
     */
    string: () => string;
    /**
     * `true` on a phone-class device: UA-CH `mobile` when available, else "Mobi" in the UA.
     */
    mobile: () => boolean;
    /**
     * `true` when the device reports touch capability.
     */
    touch: () => boolean;
    /**
     *   Normalised platform: UA-CH `platform` when available, else a minimal UA reading.
     */
    platform: () => ("ios" | "android" | "windows" | "mac" | "linux" | "unknown");
};
//# sourceMappingURL=ua.d.ts.map