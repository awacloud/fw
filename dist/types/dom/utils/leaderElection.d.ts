/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace leaderElection {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: ({
        name: string;
        type: string;
        dependencies: any[];
        factory(): BroadcastChannelAPI;
    } | {
        name: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): HexAPI;
        }[];
        factory(hex: {
            fromBytes: (bytes: Uint8Array) => string;
        }): UuidFactoryApi;
    })[];
    /**
     * @param {object} broadcastChannel - Resolved broadcastChannel module
     * @param {object} uuid - uuid module (fw/crypto/utils/uuid)
     * @returns {LeaderElectionAPI}
     */
    function factory(broadcastChannel: object, uuid: object): LeaderElectionAPI;
}
/**
 * Public surface returned by the leaderElection factory.
 */
export type LeaderElectionAPI = {
    /**
     * - Create a leader-election instance.
     */
    create: (opts?: {
        channel: string;
        id?: string;
        heartbeatMs?: number;
        takeoverMs?: number;
        _forceFallback?: boolean;
    }) => {
        id: string;
        onLeader: (fn: () => void) => () => void;
        onFollower: (fn: () => void) => () => void;
        isLeader: () => boolean;
        leader: () => ({
            id: string;
            since: number | null;
            isMe: boolean;
        } | null);
        dispose: () => void;
    };
    /**
     * - Report the election capabilities available in the current environment.
     */
    support: () => {
        webLocks: boolean;
        broadcastChannel: boolean;
    };
};
//# sourceMappingURL=leaderElection.d.ts.map