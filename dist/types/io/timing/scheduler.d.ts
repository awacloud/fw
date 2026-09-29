/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace scheduler {
    let name: string;
    let dependencies: any[];
    /** @returns {SchedulerAPI} */
    function factory(): SchedulerAPI;
}
/**
 * Parsed cron expression fields. Each field is the set of integer values
 * (in its allowed range) that satisfy the field's expression.
 */
export type CronFields = {
    /**
     * Minutes 0-59 that match.
     */
    minute: Set<number>;
    /**
     * Hours 0-23 that match.
     */
    hour: Set<number>;
    /**
     * Days of month 1-31 that match.
     */
    day: Set<number>;
    /**
     * Months 1-12 that match.
     */
    month: Set<number>;
    /**
     * Days of week 0-6 (Sunday=0) that match.
     */
    weekday: Set<number>;
};
/**
 * Public API of a parsed cron expression.
 */
export type CronInstance = {
    /**
     * Original expression string.
     */
    expression: string;
    /**
     * Next firing strictly after `from` (default: now).
     */
    next: (from?: Date) => Date;
    /**
     * Next `n` firings starting after `from`.
     */
    nextN: (n: number, from?: Date) => Date[];
    /**
     * Whether the given date matches the expression.
     */
    matches: (d: Date) => boolean;
    /**
     * Parsed field sets.
     */
    fields: CronFields;
};
/**
 * Public API of an interval timer.
 */
export type IntervalInstance = {
    /**
     * Start firing the callback every `ms`. Idempotent.
     */
    start: () => void;
    /**
     * Stop the interval. Safe to call when not running.
     */
    stop: () => void;
    /**
     * Whether the interval is currently active.
     */
    running: boolean;
};
/**
 * Public API of a cron-scheduled job.
 */
export type JobInstance = {
    /**
     * Start scheduling the next firing. Idempotent.
     */
    start: () => void;
    /**
     * Stop the job and clear any pending timer.
     */
    stop: () => void;
    /**
     * Whether the job is currently scheduled to fire.
     */
    running: boolean;
    /**
     * Date of the next scheduled firing, or null if stopped.
     */
    next: Date | null;
    /**
     * Original cron expression.
     */
    expression: string;
};
/**
 * Public API returned by `scheduler.factory()`.
 */
export type SchedulerAPI = {
    /**
     * Parse a 5-field cron expression into a matcher/next-firing helper.
     */
    cron: (expression: string) => CronInstance;
    /**
     * Create a fixed-interval timer.
     */
    interval: (callback: () => void, ms: number) => IntervalInstance;
    /**
     * Create a cron-scheduled job.
     */
    job: (expression: string, callback: () => void) => JobInstance;
};
//# sourceMappingURL=scheduler.d.ts.map