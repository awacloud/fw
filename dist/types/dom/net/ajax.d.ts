/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace ajax {
    let name: string;
    let type: string;
    let dependencies: any[];
    /** @returns {AjaxAPI} */
    function factory(): AjaxAPI;
}
export type AjaxInstance = {
    get: (arg0: string, arg1: object | undefined) => Promise<any>;
    post: (arg0: string, arg1: any, arg2: object | undefined) => Promise<any>;
    put: (arg0: string, arg1: any, arg2: object | undefined) => Promise<any>;
    patch: (arg0: string, arg1: any, arg2: object | undefined) => Promise<any>;
    del: (arg0: string, arg1: object | undefined) => Promise<any>;
    scope: (arg0: string | undefined, arg1: object | undefined) => AjaxInstance;
    HttpError: any;
};
/**
 * Object returned by `ajax.factory()`: a `create(baseUrl, defaults)` factory
 * function producing {@link AjaxInstance} HTTP clients.
 */
export type AjaxAPI = (arg0: string | undefined, arg1: object | undefined) => AjaxInstance;
//# sourceMappingURL=ajax.d.ts.map