/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace csv {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /**
     * Factory function that creates a CSV codec instance.
     * @returns {CsvAPI}
     */
    function factory(): CsvAPI;
}
export type CsvAPI = {
    parse: (text: string, options?: {
        delimiter?: string;
        quote?: string;
        header?: boolean | string[];
        skipEmpty?: boolean;
        trim?: boolean;
        cast?: boolean;
        comment?: string | null;
        skipLines?: number;
    }) => any[][] | Record<string, any>[];
    stringify: (data: any[][] | Record<string, any>[], options?: {
        delimiter?: string;
        quote?: string;
        newline?: string;
        header?: boolean | string[];
    }) => string;
};
//# sourceMappingURL=csv.d.ts.map