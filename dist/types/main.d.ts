/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
declare namespace _default {
    export { ENV };
    export { log };
    export { runtime };
    export { createWorker };
    export { domReady };
}
export default _default;
export namespace ENV {
    let DEV: boolean;
}
export const log: false | import("./core/logger.js").LoggerAPI;
export const runtime: ModuleRuntime;
export const createWorker: import("./core/worker-helper.js").workerRuntime;
export const domReady: {
    loaded: (fn: Function, argArray?: any[]) => void;
    complete: (fn: Function, argArray?: any[]) => void;
};
import { ModuleRuntime } from './core/runtime.js';
//# sourceMappingURL=main.d.ts.map