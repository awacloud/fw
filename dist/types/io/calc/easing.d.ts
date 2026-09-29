/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace easing {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /**
     * Factory function that creates and returns an object containing all easing functions.
     * Each easing function calculates an interpolated value based on time progression.
     *
     * @returns {EasingAPI} Object containing all easing functions
     *
     * @example
     * const ease = easing.factory();
     * const position = ease.linear(currentTime, startPos, endPos - startPos, duration);
     */
    function factory(): EasingAPI;
}
/**
 * Penner easing signature: (t, b, c, d) => value.
 */
export type EaseFn = (t: number, b: number, c: number, d: number) => number;
export type EasingAPI = {
    linear: EaseFn;
    easeInQuad: EaseFn;
    easeOutQuad: EaseFn;
    easeInOutQuad: EaseFn;
    easeInCubic: EaseFn;
    easeOutCubic: EaseFn;
    easeInOutCubic: EaseFn;
    easeInQuart: EaseFn;
    easeOutQuart: EaseFn;
    easeInOutQuart: EaseFn;
    easeInQuint: EaseFn;
    easeOutQuint: EaseFn;
    easeInOutQuint: EaseFn;
    easeInSine: EaseFn;
    easeOutSine: EaseFn;
    easeInOutSine: EaseFn;
    easeInExpo: EaseFn;
    easeOutExpo: EaseFn;
    easeInOutExpo: EaseFn;
    easeInCirc: EaseFn;
    easeOutCirc: EaseFn;
    easeInOutCirc: EaseFn;
    easeInElastic: EaseFn;
    easeOutElastic: EaseFn;
    easeInOutElastic: EaseFn;
    easeInBack: EaseFn;
    easeOutBack: EaseFn;
    easeInOutBack: EaseFn;
    easeInBounce: EaseFn;
    easeOutBounce: EaseFn;
    easeInOutBounce: EaseFn;
};
//# sourceMappingURL=easing.d.ts.map