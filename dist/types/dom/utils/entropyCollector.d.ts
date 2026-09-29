/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace entropyCollector {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        worker: boolean;
        factory(): SensorsAPI;
    }[];
    /** @returns {EntropyCollectorAPI} */
    function factory(sensors: any): EntropyCollectorAPI;
}
/**
 * A single entropy-collector instance returned by `create()`.
 */
export type EntropyCollector = {
    /**
     *   Start collecting entropy. Passing a DOM `Event` enables automatic motion
     *   permission handling; `motionGranted` is `true`/`false` when a request was
     *   made, `null` when none was issued.
     */
    start: (event?: Event) => Promise<{
        motionGranted: boolean | null;
    }>;
    /**
     * Stop collecting and detach all listeners.
     */
    stop: () => void;
    /**
     * `true` while the collector is active (read-only getter).
     */
    isActive: boolean;
    /**
     *   Manually request motion permission on iOS 13+ (resolves `true` where not required).
     */
    requestMotionPermission: () => Promise<boolean>;
};
/**
 * Public surface returned by `entropyCollector.factory()`.
 */
export type EntropyCollectorAPI = {
    /**
     *   Create a new entropy-collector instance.
     */
    create: (onEntropy: (sample: number | Array<number>, bits: number, source: string) => void, options?: {
        target?: EventTarget;
    }) => EntropyCollector;
};
//# sourceMappingURL=entropyCollector.d.ts.map