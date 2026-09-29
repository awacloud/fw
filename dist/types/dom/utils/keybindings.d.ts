/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace keybindings {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): EventBusAPI;
    } | {
        name: string;
        type: string;
        dependencies: any[];
        factory(): EventsAPI;
    })[];
    /**
     * @param {Object} events    - Module events (fw)
     * @param {Object} eventBus  - Module eventBus (fw)
     * @returns {KeybindingsAPI}
     */
    function factory(events: any, eventBus: any): KeybindingsAPI;
}
/**
 * Public surface returned by the keybindings factory.
 */
export type KeybindingsAPI = {
    /**
     * - Create a keybindings manager instance (bind/unbind/contexts/attach/detach/...).
     */
    create: (opts?: {
        target?: EventTarget;
        layout?: string;
        chordTimeout?: number;
    }) => object;
    /**
     * - Parse a combo string into a single segment (simple) or an array of segments (chord).
     */
    parse: (combo: string) => ({
        modifiers: object;
        key: string;
    } | Array<{
        modifiers: object;
        key: string;
    }>);
};
//# sourceMappingURL=keybindings.d.ts.map