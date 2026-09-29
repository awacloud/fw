/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Capture the real `WebAssembly.*` evaluators. `lockdown()` calls this
 * **immediately before** `removeAmbientEvaluators()` poisons the global slots,
 * so what is captured is guaranteed to be the pre-poison originals.
 *
 * Idempotent: a second call keeps the first capture (it can never be tricked
 * into re-reading an already-poisoned slot).
 *
 * A caller that may run **before** `lockdown()` — e.g. `wasmRuntime` in an app
 * that never locks down — must call this itself first; the gate deliberately
 * fails closed rather than lazily capturing on demand (see `compile`).
 *
 * @param {typeof globalThis} [g] realm global (injectable for tests)
 * @returns {boolean} whether a WebAssembly implementation was present
 */
export function captureRealEvaluators(g?: typeof globalThis): boolean;
/**
 * Close the SYNCHRONOUS compile path — `new WebAssembly.Module(bytes)` and
 * `new WebAssembly.Instance(module)`.
 *
 * MEASURED HOLE (fw-sanity W0 FINDINGS §d.2): `removeAmbientEvaluators()`
 * poisons the four *async* slots only. The synchronous constructors were left
 * untouched, so caller-supplied wasm still compiled AND EXECUTED after
 * `lockdown()` — proven end to end. Whitelisting the async four while the sync
 * constructors stayed open would be security theatre; this closes it first.
 *
 * The poisoning **asserts its own effect**: after the `defineProperty`, a
 * genuinely valid module is fed to `new WebAssembly.Module` and MUST throw. A
 * swallowed `defineProperty` failure, or a no-op because a future
 * `lockdown()` hardened the `WebAssembly` namespace before this runs, is a
 * loud error — never silence.
 *
 * `WebAssembly.Memory` / `Table` / `Global` are deliberately NOT poisoned:
 * they are not evaluators, and `runtime.js`'s ABI check does
 * `ex.memory instanceof WebAssembly.Memory`. `WebAssembly.validate` is
 * likewise left alone — it is not closed today and must not be "opened".
 *
 * @param {typeof globalThis} [g] realm global (injectable for tests)
 * @returns {void}
 * @throws {TypeError} if called before `captureRealEvaluators()` (the gate
 *   would lock fw's own loader out), or if the poison did not take effect.
 */
export function poisonSyncConstructors(g?: typeof globalThis): void;
/**
 * Arm the gate. `lockdown()` calls this at the very END of its run. Once
 * armed, the `opts.fetchBytes` test seam is refused (see `assertByteSource`).
 *
 * There is deliberately no disarm: the realm is locked for its lifetime.
 * @returns {void}
 */
export function arm(): void;
/**
 * Issue the capability to fw's single internal wasm loader. `wasmRuntime`
 * obtains it here. Idempotent by design — re-instantiating the loader (e.g. in
 * a Worker realm) must work — but the token is only ever reachable from a
 * module that can `import` this file, never from `globalThis`.
 *
 * NOTE for the `runtime.js` call site: `wasmRuntime`'s factory must not close
 * over a module-scope import (`fw/no-factory-capture`) — obtain the capability
 * through a lazy memoised dynamic `import()` inside the factory, or declare the
 * gate as a dependency.
 *
 * @returns {object} the capability (always the same identity)
 */
export function issueCapability(): object;
/**
 * The `opts.fetchBytes` disposition: **neutralised under lockdown, test-only
 * seam otherwise**. Before `lockdown()` it remains the documented test seam it
 * is today; once the gate is armed it is a hard error, so it can never become a
 * public byte-injection channel into the one call site that holds the
 * capability.
 *
 * The supported alternative for a Worker or an alternate origin is threading an
 * **absolute base URL** (mirror of the runtime's own URL) — never `fetchBytes`.
 *
 * @param {{fetchBytes?: unknown}} [opts] the loader options object
 * @returns {void}
 * @throws {TypeError} when armed and `opts.fetchBytes` is set
 */
export function assertByteSource(opts?: {
    fetchBytes?: unknown;
}): void;
/**
 * Capability-gated `WebAssembly.compile` — the ONLY route to compilation once
 * `lockdown()` has poisoned the global slots.
 *
 * Fails closed when the originals were never captured: a gate that cannot prove
 * it holds pre-poison evaluators refuses rather than reading a possibly
 * poisoned global. Callers that may run before `lockdown()` call
 * `captureRealEvaluators()` first (idempotent, and a no-op afterwards).
 *
 * @param {object} cap the fw wasm capability
 * @param {BufferSource} bytes bytes fetched from fw's internal URL space
 * @returns {Promise<WebAssembly.Module>}
 * @throws {TypeError} without the capability, or when the gate is uninitialised
 */
export function compile(cap: object, bytes: BufferSource): Promise<WebAssembly.Module>;
/**
 * Capability-gated `WebAssembly.instantiate`. Called with a `Module`, the
 * captured original resolves to an `Instance`; called with bytes it resolves to
 * a `{module, instance}` source — the gate does not reshape either.
 *
 * @param {object} cap the fw wasm capability
 * @param {WebAssembly.Module} module a module produced by `compile`
 * @param {WebAssembly.Imports} [imports] import object (fw binaries are zero-import)
 * @returns {Promise<WebAssembly.Instance|WebAssembly.WebAssemblyInstantiatedSource>}
 * @throws {TypeError} without the capability, or when the gate is uninitialised
 */
export function instantiate(cap: object, module: WebAssembly.Module, imports?: WebAssembly.Imports): Promise<WebAssembly.Instance | WebAssembly.WebAssemblyInstantiatedSource>;
/**
 * Module reflection behind the same capability check, used by `wasmRuntime`'s
 * zero-import invariant. `WebAssembly.Module.imports` is not an evaluator and
 * is not poisoned, but routing it here keeps the loader's whole wasm surface on
 * one capability-checked path — and it must use the CAPTURED `Module`, since
 * the global binding is a throwing shim after `poisonSyncConstructors()`.
 *
 * @param {object} cap the fw wasm capability
 * @param {WebAssembly.Module} module
 * @returns {WebAssembly.ModuleImportDescriptor[]}
 * @throws {TypeError} without the capability, or when the gate is uninitialised
 */
export function moduleImports(cap: object, module: WebAssembly.Module): WebAssembly.ModuleImportDescriptor[];
//# sourceMappingURL=wasm-gate.d.ts.map