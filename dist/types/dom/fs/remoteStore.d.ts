/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace remoteStore {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: ({
        name: string;
        type: string;
        dependencies: any[];
        factory(): AjaxAPI;
    } | {
        name: string;
        type: string;
        dependencies: any[];
        factory(): WsAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): EventBusAPI;
    })[];
    /**
     * @param {object} ajaxFactory - The ajax module (returns a create function).
     * @param {object} wsFactory   - The ws module (returns a create function).
     * @param {object} eventBus    - The eventBus module.
     * @returns {RemoteStoreAPI}
     */
    function factory(ajaxFactory: object, wsFactory: object, eventBus: object): RemoteStoreAPI;
}
export type RemoteStoreInstance = {
    get: (arg0: string) => Promise<any>;
    set: (arg0: string, arg1: any) => Promise<void>;
    del?: (arg0: string) => Promise<void>;
    delete: (arg0: string) => Promise<void>;
    list: (arg0: any | undefined) => Promise<{
        keys: string[];
        cursor?: string;
    }>;
    batch: (arg0: any) => Promise<any>;
    watch: (arg0: string, arg1: Function) => Function;
    close: () => void;
    connected?: () => boolean;
};
/**
 * Public surface returned by the remoteStore factory.
 */
export type RemoteStoreAPI = {
    /**
     * - Create a remote key-value store instance over the chosen transport.
     */
    create: (opts: {
        endpoint: string;
        auth?: string;
        transport?: "http" | "ws";
        headers?: object;
    }) => RemoteStoreInstance;
};
//# sourceMappingURL=remoteStore.d.ts.map