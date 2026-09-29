/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace themeTokens {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: {
        name: string;
        type: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): SecPolicyAPI;
        }[];
        factory(secPolicy: any): DomAPI;
    }[];
    /**
     * @param {Object} dom - The fw `dom` module instance.
     * @returns {ThemeTokensAPI}
     */
    function factory(dom: any): ThemeTokensAPI;
}
export type ThemeInstance = {
    define: (arg0: Record<string, string | number | any>) => void;
    mode: (arg0: string) => void;
    current: () => {
        mode: string;
        resolved: string;
        reducedMotion: boolean;
    };
    get: (arg0: string) => string;
    onChange: (arg0: Function) => Function;
    dispose: () => void;
    applyPreset?: (arg0: any) => void;
};
/**
 * Design-token manager surface returned by `factory()`.
 */
export type ThemeTokensAPI = {
    /**
     * - Create an isolated token-manager instance.
     */
    create: (opts?: {
        scope?: string | Element;
        prefix?: string;
    }) => ThemeInstance;
    /**
     * - Ready-to-use token presets (`neutral`, `material`, `tailwind`).
     */
    presets: {
        [x: string]: any;
    };
};
//# sourceMappingURL=themeTokens.d.ts.map