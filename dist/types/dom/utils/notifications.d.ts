/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @description
 * Wrapper around the Web Notifications API. Tracks active notifications so
 * they can be closed in bulk via {@link closeAll}, supports an `autoCloseMs`
 * option to dismiss a notification after a delay, and exposes a
 * {@link showFromSW} helper that forwards to a ServiceWorker registration's
 * `showNotification` method.
 *
 * Worker: partial - the `Notification` constructor is main-thread only, but
 * {@link showFromSW} is usable from inside a ServiceWorker context where
 * `registration.showNotification` is available.
 */
/**
 * Options accepted by `show`. Extends the native `NotificationOptions`
 * with a few framework-level extras.
 *
 * @typedef {object} ShowOptions
 * @property {(event: Event) => void} [onclick]      Click handler attached to the notification.
 * @property {() => void}              [onclose]     Called when the notification is closed by the user or system. Not invoked when {@link NotificationHandle.close} is called explicitly.
 * @property {(event: Event) => void} [onerror]      Error handler attached to the notification.
 * @property {(event: Event) => void} [onshow]       Show handler attached to the notification.
 * @property {number}                  [autoCloseMs] If > 0, automatically closes the notification after this many milliseconds.
 * @property {string}                  [body]        Native option - body text.
 * @property {string}                  [icon]        Native option - icon URL.
 * @property {string}                  [tag]         Native option - tag for grouping/replacement.
 * @property {*}                       [data]        Native option - arbitrary data attached to the notification.
 */
/**
 * Handle returned by `show`. Wraps the underlying `Notification`
 * instance and provides a `close()` method that also cleans up the internal
 * tracking set and any pending auto-close timer.
 *
 * @typedef {object} NotificationHandle
 * @property {Notification} notification The underlying native Notification instance.
 * @property {() => void}   close        Closes the notification, clears the auto-close timer (if any) and removes the handle from internal tracking. Does NOT invoke the user-supplied `onclose` callback.
 */
/**
 * Public API returned by the {@link notifications} factory.
 *
 * @typedef {object} NotificationsApi
 * @property {() => boolean}                                                                          isSupported       Whether the Web Notifications API is available in the current environment.
 * @property {() => ('granted'|'denied'|'default')}                                                   permission        Current permission state. Returns `'denied'` when unsupported.
 * @property {() => Promise<('granted'|'denied')>}                                                    requestPermission Requests permission from the user. Returns `'denied'` when unsupported or refused.
 * @property {(title: string, options?: ShowOptions) => NotificationHandle}                           show              Displays a notification. Throws synchronously if permission is not `'granted'`.
 * @property {(handle: NotificationHandle) => void}                                                   close             Closes a specific handle. Equivalent to `handle.close()`, kept for symmetry with {@link closeAll}.
 * @property {() => void}                                                                             closeAll          Closes every currently tracked notification.
 * @property {(registration: ServiceWorkerRegistration, title: string, options?: object) => Promise<void>} showFromSW    Forwards to `registration.showNotification`. Use from a ServiceWorker context; on the main thread use `show` instead.
 */
/**
 * Strict factory descriptor for the notifications module.
 *
 * @type {{
 *   name: 'notifications',
 *   version: '1.0.0',
 *   type: 'fw.dom.utils',
 *   dependencies: [],
 *   worker: 'partial',
 *   factory: () => NotificationsApi
 * }}
 */
export const notifications: {
    name: "notifications";
    version: "1.0.0";
    type: "fw.dom.utils";
    dependencies: [];
    worker: "partial";
    factory: () => NotificationsApi;
};
/**
 * Options accepted by `show`. Extends the native `NotificationOptions`
 * with a few framework-level extras.
 */
export type ShowOptions = {
    /**
     * Click handler attached to the notification.
     */
    onclick?: (event: Event) => void;
    /**
     * Called when the notification is closed by the user or system. Not invoked when {@link NotificationHandle.close} is called explicitly.
     */
    onclose?: () => void;
    /**
     * Error handler attached to the notification.
     */
    onerror?: (event: Event) => void;
    /**
     * Show handler attached to the notification.
     */
    onshow?: (event: Event) => void;
    /**
     * If > 0, automatically closes the notification after this many milliseconds.
     */
    autoCloseMs?: number;
    /**
     * Native option - body text.
     */
    body?: string;
    /**
     * Native option - icon URL.
     */
    icon?: string;
    /**
     * Native option - tag for grouping/replacement.
     */
    tag?: string;
    /**
     * Native option - arbitrary data attached to the notification.
     */
    data?: any;
};
/**
 * Handle returned by `show`. Wraps the underlying `Notification`
 * instance and provides a `close()` method that also cleans up the internal
 * tracking set and any pending auto-close timer.
 */
export type NotificationHandle = {
    /**
     * The underlying native Notification instance.
     */
    notification: Notification;
    /**
     * Closes the notification, clears the auto-close timer (if any) and removes the handle from internal tracking. Does NOT invoke the user-supplied `onclose` callback.
     */
    close: () => void;
};
/**
 * Public API returned by the {@link notifications} factory.
 */
export type NotificationsApi = {
    /**
     * Whether the Web Notifications API is available in the current environment.
     */
    isSupported: () => boolean;
    /**
     * Current permission state. Returns `'denied'` when unsupported.
     */
    permission: () => ("granted" | "denied" | "default");
    /**
     * Requests permission from the user. Returns `'denied'` when unsupported or refused.
     */
    requestPermission: () => Promise<("granted" | "denied")>;
    /**
     * Displays a notification. Throws synchronously if permission is not `'granted'`.
     */
    show: (title: string, options?: ShowOptions) => NotificationHandle;
    /**
     * Closes a specific handle. Equivalent to `handle.close()`, kept for symmetry with {@link closeAll}.
     */
    close: (handle: NotificationHandle) => void;
    /**
     * Closes every currently tracked notification.
     */
    closeAll: () => void;
    /**
     * Forwards to `registration.showNotification`. Use from a ServiceWorker context; on the main thread use `show` instead.
     */
    showFromSW: (registration: ServiceWorkerRegistration, title: string, options?: object) => Promise<void>;
};
//# sourceMappingURL=notifications.d.ts.map