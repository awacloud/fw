/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace broadcastChannel {
    let name: string;
    let type: string;
    let dependencies: any[];
    /** @returns {BroadcastChannelAPI} */
    function factory(): BroadcastChannelAPI;
}
/**
 * A live BroadcastChannel handle returned by {@link BroadcastChannelAPI.create}.
 */
export type BroadcastChannelConnection = {
    /**
     * Post a message to all subscribers on the channel.
     */
    post: (data: any) => void;
    /**
     *   Register a message listener; returns an unsubscribe function.
     */
    on: (callback: (data: any, event: MessageEvent) => void) => (() => boolean);
    /**
     * Remove a listener.
     */
    off: (callback: (data: any, event: MessageEvent) => void) => void;
    /**
     * Close the channel and clear all listeners.
     */
    close: () => void;
    /**
     * The channel name (getter).
     */
    name: string;
};
/**
 * Object returned by `broadcastChannel.factory()`.
 */
export type BroadcastChannelAPI = {
    /**
     *   Create a wrapped BroadcastChannel handle for `channelName`.
     */
    create: (channelName: string) => BroadcastChannelConnection;
    /**
     * True when the BroadcastChannel API is available.
     */
    isSupported: () => boolean;
};
//# sourceMappingURL=broadcastChannel.d.ts.map