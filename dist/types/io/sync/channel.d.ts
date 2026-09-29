/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace channel {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /**
     * @returns {ChannelAPI}
     */
    function factory(): ChannelAPI;
}
export type ChannelOptions = {
    /**
     * - Cancels a pending send/recv; rejects the
     * returned Promise with the signal's reason and removes the waiter.
     */
    signal?: AbortSignal;
};
export type ChannelRecvResult = {
    /**
     * - The received value, or `undefined` if `done`.
     */
    value: any;
    /**
     * - `true` when the channel is closed and drained.
     */
    done: boolean;
};
export type ChannelTryRecvResult = {
    /**
     * - The received value, or `undefined`.
     */
    value: any;
    /**
     * - `true` when closed and drained.
     */
    done: boolean;
    /**
     * - `true` when the channel is open but has no value ready.
     */
    empty?: boolean;
};
/**
 * CSP-style buffered FIFO channel factory surface.
 */
export type ChannelAPI = {
    /**
     * - Create a fresh channel.
     */
    create: (opts?: {
        capacity?: number;
    }) => Channel;
};
export type Channel = {
    send: (value: any, opts?: ChannelOptions) => Promise<void>;
    recv: (opts?: ChannelOptions) => Promise<ChannelRecvResult>;
    trySend: (value: any) => boolean;
    tryRecv: () => ChannelTryRecvResult;
    close: () => void;
    closed: boolean;
    capacity: number;
    size: number;
    pendingSenders: number;
    pendingReceivers: number;
};
//# sourceMappingURL=channel.d.ts.map