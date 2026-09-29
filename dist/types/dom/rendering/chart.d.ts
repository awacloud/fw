/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace chart {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: ({
        name: string;
        type: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): EasingAPI;
        }[];
        factory(easing: any): AnimateAPI;
    } | {
        name: string;
        type: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): SecPolicyAPI;
        }[];
        factory(secPolicy: any): DomAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): StatsAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): LinalgAPI;
    })[];
    /**
     * @param {Object} dom    - fw dom module.
     * @param {Object} animate - fw animate module.
     * @param {Object} stats   - fw stats module.
     * @param {Object} linalg  - fw linalg module.
     * @returns {ChartAPI}
     */
    function factory(dom: any, animate: any, stats: any, linalg: any): ChartAPI;
}
/**
 * A live chart handle returned by each chart constructor.
 */
export type ChartHandle = {
    /**
     * - Replace the data set and redraw.
     */
    update: (newData: number[] | {
        x: number;
        y: number;
    }[]) => void;
    /**
     * - Force a dimension recompute and redraw.
     */
    resize: () => void;
    /**
     * - Merge new options (and optionally data) then redraw.
     */
    setOpts: (newOpts: any) => void;
    /**
     * - Detach observers and release resources.
     */
    dispose: () => void;
};
/**
 * Canvas 2D chart surface returned by `factory()`.
 */
export type ChartAPI = {
    /**
     * - Create a line chart.
     */
    line: (opts: {
        el: HTMLElement | HTMLCanvasElement;
        data?: number[] | {
            x: number;
            y: number;
        }[];
        xAxis?: any;
        yAxis?: any;
        color?: string;
        smoothing?: "none" | "monotone";
        animate?: boolean | number;
    }) => ChartHandle;
    /**
     * - Create an area chart (line + fill).
     */
    area: (opts: {
        el: HTMLElement | HTMLCanvasElement;
        data?: number[] | {
            x: number;
            y: number;
        }[];
        xAxis?: any;
        yAxis?: any;
        color?: string;
        smoothing?: "none" | "monotone";
        animate?: boolean | number;
    }) => ChartHandle;
    /**
     * - Create a vertical bar chart.
     */
    bar: (opts: {
        el: HTMLElement | HTMLCanvasElement;
        data?: number[] | {
            x: number;
            y: number;
        }[];
        xAxis?: any;
        yAxis?: any;
        color?: string;
        animate?: boolean | number;
    }) => ChartHandle;
    /**
     * - Create a minimal axis-less sparkline.
     */
    sparkline: (opts: {
        el: HTMLElement | HTMLCanvasElement;
        data?: number[] | {
            x: number;
            y: number;
        }[];
        color?: string;
        smoothing?: "none" | "monotone";
        animate?: boolean | number;
    }) => ChartHandle;
};
//# sourceMappingURL=chart.d.ts.map