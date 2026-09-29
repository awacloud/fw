/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace stats {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {StatsAPI} */
    function factory(): StatsAPI;
}
/**
 * Object returned by `stats.factory()`.
 */
export type StatsAPI = {
    mean: (arr: ArrayLike<number>) => number;
    median: (arr: ArrayLike<number>) => number;
    mode: (arr: ArrayLike<number>) => number;
    geomean: (arr: ArrayLike<number>) => number;
    harmean: (arr: ArrayLike<number>) => number;
    variance: (arr: ArrayLike<number>, sample?: boolean) => number;
    stddev: (arr: ArrayLike<number>, sample?: boolean) => number;
    range: (arr: ArrayLike<number>) => number;
    iqr: (arr: ArrayLike<number>) => number;
    mad: (arr: ArrayLike<number>) => number;
    min: (arr: ArrayLike<number>) => number;
    max: (arr: ArrayLike<number>) => number;
    sum: (arr: ArrayLike<number>) => number;
    product: (arr: ArrayLike<number>) => number;
    quantile: (arr: ArrayLike<number>, q: number) => number;
    percentile: (arr: ArrayLike<number>, p: number) => number;
    histogram: (arr: ArrayLike<number>, bins: number | number[]) => {
        edges: number[];
        counts: number[];
    };
    zscore: (value: number, arr: ArrayLike<number>) => number;
    normalize: (arr: ArrayLike<number>, opts?: {
        min?: number;
        max?: number;
    }) => number[];
    standardize: (arr: ArrayLike<number>) => number[];
};
//# sourceMappingURL=stats.d.ts.map