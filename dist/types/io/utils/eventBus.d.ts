/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace eventBus {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /**
     * @returns {EventBusAPI}
     */
    function factory(): EventBusAPI;
}
/**
 * A single event bus instance returned by `create()`.
 */
export type EventBusInstance = {
    /**
     * - Subscribe to a topic (exact or `'a:*'` wildcard); returns an unsubscribe function.
     */
    on: (topic: string, fn: Function, opts?: {
        replay?: boolean;
    }) => Function;
    /**
     * - Unsubscribe a handler from a topic.
     */
    off: (topic: string, fn: Function) => void;
    /**
     * - Synchronously dispatch data to all matching subscribers.
     */
    emit: (topic: string, data: any) => void;
    /**
     * - Subscribe and immediately replay the last sticky value if any; returns an unsubscribe function.
     */
    sticky: (topic: string, fn: Function) => Function;
    /**
     * - Publish a value and store it for future sticky subscribers.
     */
    set: (topic: string, value: any) => void;
    /**
     * - Clear the sticky value of a topic, or all sticky values when omitted.
     */
    clear: (topic?: string) => void;
    /**
     * - Create a scope for atomic unsubscription of a group of subscriptions.
     */
    scope: () => {
        on: (topic: string, fn: Function) => Function;
        sticky: (topic: string, fn: Function) => Function;
        dispose: () => void;
    };
    /**
     * - List active topics (with subscribers or sticky values).
     */
    topics: () => string[];
};
/**
 * Application-level pub/sub surface returned by `factory()`.
 */
export type EventBusAPI = {
    /**
     * - Create an independent event bus instance.
     */
    create: () => EventBusInstance;
};
//# sourceMappingURL=eventBus.d.ts.map