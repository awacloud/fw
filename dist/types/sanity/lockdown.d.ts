/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Apply the strict integrity lockdown to the current realm. Idempotent: the
 * first call performs all mutations; subsequent calls are no-ops (the
 * module-level guard short-circuits, and every individual step is itself
 * tolerant of already-frozen slots).
 *
 * The intrinsic steps (tame constructors, capture/remove evaluators, poison the
 * sync wasm constructors, harden intrinsics) target pure-JS intrinsics and
 * therefore run in ANY realm — main thread, Worker, or SSR. The DOM step
 * (compose `base.js` DOM/XSS hardening) runs only in a browser realm (`window`
 * + `document` present); `base.js` is imported lazily and its `applyBase()` is
 * called explicitly there, so a non-browser realm never loads the DOM layer.
 * That step is inherently asynchronous (dynamic `import`), exactly as before —
 * the DOM hardening lands on a later microtask, while `lockdown()` itself stays
 * synchronous and returns once the intrinsic tier is complete.
 *
 * @param {object} [options] reserved for future opts (currently unused)
 * @returns {void}
 * @throws {TypeError} if the synchronous `WebAssembly.Module`/`Instance`
 *   poisoning does not take effect — a silently open compile path would make
 *   the WebAssembly whitelist security theatre, so it fails loudly instead.
 */
export function lockdown(options?: object): void;
/**
 * Transitive freeze of an object graph (SES `harden`). Depth-first over each
 * reachable object's own property values (data values + getter/setter
 * functions) and its `[[Prototype]]`, calling `Object.freeze` on every
 * object/function exactly once (a WeakSet guards against cycles and re-visits).
 *
 * Primitives are skipped. Hosts that throw on `Object.freeze` (exotic objects)
 * are tolerated best-effort: the object is marked visited and skipped.
 *
 * @template T
 * @param {T} target object graph root to deep-freeze
 * @returns {T} the same `target`, now (transitively) frozen
 */
export function harden<T>(target: T): T;
//# sourceMappingURL=lockdown.d.ts.map