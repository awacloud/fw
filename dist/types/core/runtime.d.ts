/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A module definition object.
 *
 * @typedef {Object} ModuleDefinition
 * @property {string}    name           - Unique module identifier.
 * @property {string}    [version]      - Semver string. Defaults to '0.0.0'.
 * @property {string}    [type]         - Hierarchical type (e.g. 'fw.io.codec').
 * @property {string[]}  dependencies   - Ordered list of dependency specs
 *                                        ('name' or 'name@version').
 * @property {ModuleDefinition[]} [deps] - Optional direct JS references to the
 *                                        dependency modules, in the same order
 *                                        as `dependencies`. Bundler-facing only :
 *                                        lets tree-shaking tools trace the graph
 *                                        through static imports. Walked by
 *                                        `registerDeep` / `registerAllDeep`.
 * @property {Function}  factory        - Factory function invoked with resolved
 *                                        dependency instances as arguments.
 */
/**
 * Public instance type produced by a module's `factory` — i.e. what
 * `runtime.resolve('<name>')` returns for that module. Given a module value
 * `M`, `InstanceOf<typeof M>` is `ReturnType<M['factory']>`. See the typed
 * runtime facade (`@awacloud/fw/typed`) and `docs/guide/typescript.md` for usage.
 *
 * @template {{ factory: (...args: any[]) => any }} M
 * @typedef {ReturnType<M['factory']>} InstanceOf
 */
/**
 * Per-name registry entry holding all known versions of a module.
 *
 * @typedef {Object} ModuleEntry
 * @property {Map<string, ModuleDefinition>} versions  - Map of version → definition.
 * @property {string}                        latest    - Highest semver version present.
 * @property {ModuleDefinition}              latestDef - Cached pointer to the latest def.
 */
/**
 * Options accepted by {@link ModuleRuntime#resolve} and
 * {@link ModuleRuntime#resolveAll}.
 *
 * @typedef {Object} ResolveOptions
 * @property {boolean}    [isolation] - When truthy the instance is **not** cached.
 * @property {string}     [version]   - Explicit version. Ignored if `spec` already
 *                                      contains `@version`.
 * @property {Map}        [instances] - Custom instance map (flat, keyed by canonical
 *                                      `name@version`).
 */
/**
 * Filter passed to {@link ModuleRuntime#list}.
 *
 * @typedef {Object} ListFilter
 * @property {string} [name]    - Exact module name.
 * @property {string} [version] - Exact version.
 * @property {string} [type]    - Exact type, or prefix when ending with `.`
 *                                (e.g. `'fw.io.'` matches `'fw.io.codec'`).
 */
/**
 * One frozen registry row returned by {@link ModuleRuntime#snapshot}.
 *
 * Pure **metadata** — it carries no `factory`, no `deps` reference and no
 * instance. Every field is a primitive or a frozen copy, so the row is inert:
 * holding it grants no way to write back into the registry.
 *
 * @typedef {Object} RegistrySnapshotEntry
 * @property {string}   name         - Registered module name.
 * @property {string}   version      - Resolved version ('0.0.0' when the
 *                                     descriptor omitted `version`).
 * @property {string|null} type      - Declared taxonomy type, or `null`.
 * @property {ReadonlyArray<string>} dependencies - Frozen copy of the declared
 *                                     dependency specs (never the live array).
 * @property {boolean}  latest       - `true` when this version is the one a
 *                                     version-less `resolve(name)` would pick.
 * @property {boolean}  instantiated - `true` when an instance for this
 *                                     `(name, version)` is already in the
 *                                     default cache. Read-only observation —
 *                                     reading it never instantiates anything.
 */
/**
 * Options accepted by {@link ModuleRuntime#invalidate}.
 *
 * @typedef {Object} InvalidateOptions
 * @property {boolean} [cascade] - When truthy, also invalidate every module
 *                                 that declares the target among its
 *                                 `dependencies`, transitively. Dependents,
 *                                 not dependencies: what a swapped module
 *                                 breaks is the things built on top of it.
 */
/**
 * Result returned by {@link ModuleRuntime#invalidate}.
 *
 * @typedef {Object} InvalidateResult
 * @property {ReadonlyArray<string>} invalidated - Canonical `name@version` keys
 *      whose cached instance was actually dropped. A target that was never
 *      instantiated contributes nothing, so an empty array means "nothing was
 *      cached", never "nothing matched" — an unknown module throws instead.
 * @property {Object<string, *>} state - Frozen map of canonical key → the value
 *      returned by the outgoing instance's `dehydrate()`, for the targets that
 *      opted into the convention. Keys absent from it did not implement
 *      `dehydrate`. The values themselves are whatever the module returned and
 *      are **not** deep-frozen.
 */
/**
 * Result returned by {@link ModuleRuntime#serialize}.
 *
 * @typedef {Object} SerializedGraph
 * @property {string} list    - JS array literal of canonical names :
 *                              `"['hex@1.0.0','uuid@2.0.0']"`.
 * @property {string} content - JS array literal of fully serialised module objects,
 *                              ready to be evaluated and registered inside a Worker.
 */
/**
 * Lightweight dependency-injection runtime with native multi-version support.
 *
 * Modules are registered once and resolved lazily. `resolve('name')` returns the
 * highest-semver version ; `resolve('name@1.2.3')` or `resolve('name', {version})`
 * returns an exact one. Instances are cached by `(name, version)`.
 *
 * The `context` property is reserved for the Worker bootstrap : `worker-helper.js`
 * assigns the worker framework's public API to it after the worker starts.
 */
export class ModuleRuntime {
    /**
     * Pinned "never swap" set — module names {@link ModuleRuntime#invalidate}
     * refuses to touch, directly or through a cascade.
     *
     * `signal` is on it because its effect tracking is **per-factory-instance**:
     * dropping its cached instance would leave every already-created signal,
     * derived and effect bound to the previous factory instance while new reads
     * register against the new one, so effects silently stop firing. That is a
     * whole-application breakage with no error to point at, which is exactly the
     * class of failure a hot-reload seam must not be able to cause.
     *
     * The set is **pinned**, not configurable: a per-runtime opt-out would make
     * the guarantee negotiable at the call site, which is where the mistake
     * happens. Widening it is a source change, reviewed like any other.
     *
     * @type {ReadonlyArray<string>}
     */
    static NEVER_SWAP: ReadonlyArray<string>;
    /** @type {Map<string, ModuleEntry>} Registered module entries (one per name). */
    modules: Map<string, ModuleEntry>;
    /** @type {Map<string, Map<string, *>>} Instance cache : name → version → instance. */
    instances: Map<string, Map<string, any>>;
    /**
     * Reserved for the Worker bootstrap - populated by `worker-helper.js`.
     * @type {Object}
     */
    context: any;
    /**
     * Register a module definition.
     *
     * Validates `name`, `factory`, `version` (semver, defaults to '0.0.0') and
     * `type` (taxonomy regex, optional). Registering the same `(name, version)`
     * pair overwrites the previous definition. Multiple versions of the same
     * `name` coexist.
     *
     * @param {ModuleDefinition} module
     * @throws {Error} On invalid name, factory, version or type.
     * @returns {this} Chainable.
     */
    register(module: ModuleDefinition): this;
    /**
     * Register an array of module descriptors. Equivalent to calling
     * `register()` for each entry; returns `this` for chaining.
     * @param {ModuleDefinition[]} modules
     * @returns {ModuleRuntime}
     */
    registerAll(modules: ModuleDefinition[]): ModuleRuntime;
    /**
     * Register a module along with all its transitive `deps` — the optional
     * bundler-friendly companion of `dependencies`.
     *
     * A module may carry a `deps` array of **direct JS references** to its
     * dependency modules (imported statically by the module's source file).
     * `registerDeep` walks that graph depth-first and registers each missing
     * module on the way back up, so dependencies are always registered
     * before their dependents — the correct order for `resolve`.
     *
     * `deps` is purely a build-time / bundler concern : it lets tree-shaking
     * bundlers (Vite / Rollup / Webpack / esbuild) trace the module graph
     * from JS `import` statements while keeping `dependencies` (strings,
     * possibly with `name@version` specs) as the runtime resolution
     * contract. Workers receive only the canonical `dependencies` form via
     * {@link ModuleRuntime#serialize}, so `deps` is not transferred — that
     * is fine, the worker-side closure has already been computed.
     *
     * Idempotent : already-registered modules are skipped. Cycle-safe via
     * a per-call visited set keyed on module name.
     *
     * **Invariant** (validated at build time) :
     * `module.deps.map(d => d.name)` === `module.dependencies.map(s => s.split('@')[0])`
     *
     * @param {ModuleDefinition & {deps?: ModuleDefinition[]}} module
     * @returns {this} Chainable.
     */
    registerDeep(module: ModuleDefinition & {
        deps?: ModuleDefinition[];
    }): this;
    /**
     * Equivalent to calling {@link ModuleRuntime#registerDeep} for each entry,
     * sharing a single visited set across the batch so common transitive
     * dependencies are walked only once.
     *
     * @param {Array<ModuleDefinition & {deps?: ModuleDefinition[]}>} modules
     * @returns {this} Chainable.
     */
    registerAllDeep(modules: Array<ModuleDefinition & {
        deps?: ModuleDefinition[];
    }>): this;
    /**
     * Unregister a module definition. **Does not touch the instance cache** -
     * already-resolved instances held by callers continue to function ; only
     * subsequent `resolve` calls for the removed module(s) will throw.
     *
     * **Spec / version semantics (mirrors `has`) :**
     * - `unregister('foo')` → remove **all** versions of `foo`
     * - `unregister('foo', '1.0.0')` or `unregister('foo@1.0.0')` → remove only that version
     *
     * When the removed version is the current `latest`, the entry's `latest`
     * pointer is recomputed from the remaining versions. When the last version
     * of a name is removed, the entry itself is deleted.
     *
     * @param {string} spec     Module name, or `'name@version'`.
     * @param {string} [version] Explicit version (ignored if `spec` already contains `@`).
     * @returns {boolean} `true` if at least one definition was removed.
     */
    unregister(spec: string, version?: string): boolean;
    /**
     * Check whether a module (or a specific version) is registered.
     *
     * @param {string} name
     * @param {string} [version] When omitted, returns true if any version of `name` exists.
     * @returns {boolean}
     */
    has(name: string, version?: string): boolean;
    /**
     * Resolve a module by spec.
     *
     * **Spec forms :**
     * - `'foo'` → highest version registered for `foo`
     * - `'foo@1.2.3'` → exact version
     * - `'foo'` + `{ version: '1.2.3' }` → exact version
     *
     * **Caching :**
     * - default : singleton per `(name, version)` in `this.instances`.
     * - `{ isolation: true }` : never cache, always fresh.
     * - `{ instances: customMap }` : flat map keyed by canonical `name@version`.
     *
     * Dependencies are resolved transitively with the same options.
     *
     * @param {string}         spec
     * @param {ResolveOptions} [options={}]
     * @throws {Error} When the module (or version) is not registered.
     * @returns {*}
     */
    resolve(spec: string, options?: ResolveOptions): any;
    /**
     * Resolve multiple module specs in a single call.
     *
     * Each result key is the original spec string (preserving any `@version`
     * suffix), so `resolveAll(['hex', 'utf8@1.0.0'])` yields
     * `{ hex: <inst>, 'utf8@1.0.0': <inst> }`.
     *
     * @param {string[]}       specs
     * @param {ResolveOptions} [options={}]
     * @returns {Object<string, *>}
     */
    resolveAll(specs: string[], options?: ResolveOptions): {
        [x: string]: any;
    };
    /**
     * List registered module definitions matching the given filter.
     *
     * Linear scan ; acceptable for the typical module count (≪ 1000).
     *
     * @param {ListFilter} [filter={}]
     * @returns {ModuleDefinition[]}
     */
    list(filter?: ListFilter): ModuleDefinition[];
    /**
     * Passive, read-only view of the module registry.
     *
     * Companion of {@link ModuleRuntime#list}, which returns the **live**
     * `ModuleDefinition` objects (their `factory`, and a `dependencies` array a
     * caller can splice in place). `snapshot` instead returns frozen metadata
     * rows: enumeration for a devtools registry view without handing out a
     * write channel into registry state, and without the side effect of
     * `resolve()` — which is a full instantiate, not a peek.
     *
     * **Guarantees**
     * - **Instantiates nothing.** No `factory` is invoked and `this.instances`
     *   is never written; a call on a registry where nothing has been resolved
     *   leaves the instance cache exactly as it was.
     * - **Read-only.** The returned array is frozen, every row is frozen, and
     *   each row's `dependencies` is a frozen *copy* — mutating anything the
     *   caller receives cannot reach the registry.
     * - **No live handle.** Rows expose no `factory`, no `deps` and no
     *   instance, so nothing reachable from a row can be called or patched.
     *
     * The filter is the same one {@link ModuleRuntime#list} accepts, with the
     * same semantics (exact `name` / `version`; exact `type`, or prefix match
     * when `type` ends with `.`).
     *
     * Linear scan over the registry, like `list`.
     *
     * @param {ListFilter} [filter={}]
     * @returns {ReadonlyArray<RegistrySnapshotEntry>} Frozen rows, frozen array.
     */
    snapshot(filter?: ListFilter): ReadonlyArray<RegistrySnapshotEntry>;
    /**
     * Drop cached instances so the next `resolve` re-runs the factory — the
     * registry-side half of a hot module swap.
     *
     * `register()` is **descriptor-only**: re-registering a module (or
     * `unregister()` then `register()`) swaps the stored definition but never
     * touches {@link ModuleRuntime#instances}, so `resolve()` keeps returning
     * the instance built from the *old* factory. `invalidate` is the missing
     * step: register the new descriptor, invalidate, resolve again.
     *
     * **Spec / version semantics** (mirrors `unregister` / `has`) :
     * - `invalidate('foo')` → every registered version of `foo`
     * - `invalidate('foo@1.0.0')` → only that version
     *
     * **Cascade.** With `{ cascade: true }` the target set grows to every
     * module that declares a target among its `dependencies`, transitively —
     * because a dependent's factory already ran with the *old* dependency
     * instance baked into its closure, and nothing would ever hand it the new
     * one. A version-less dependency spec (`'foo'`) only cascades when the
     * invalidated version is the one `resolve('foo')` would pick, i.e. the
     * entry's `latest`; a pinned spec (`'foo@1.0.0'`) cascades only for that
     * exact version.
     *
     * **Atomic.** The never-swap check and every `dehydrate()` call run *before*
     * the first cache write, so a refused module or a throwing `dehydrate()`
     * leaves the instance cache exactly as it was.
     *
     * **`dehydrate()` / `hydrate()` convention (opt-in).** If an outgoing
     * instance exposes a `dehydrate()` function it is called once and its return
     * value is carried out in the result's `state`, keyed by canonical
     * `name@version`. The runtime does **not** re-inject it: `resolve()` is
     * unchanged and knows nothing about the convention. The caller closes the
     * loop, which keeps the state transfer explicit and inspectable :
     *
     * ```js
     * const { invalidated, state } = runtime.invalidate('todoView', { cascade: true });
     * runtime.register(nextTodoView);
     * for (const key of invalidated) {
     *     const instance = runtime.resolve(key);
     *     if (key in state && typeof instance.hydrate === 'function') {
     *         instance.hydrate(state[key]);
     *     }
     * }
     * ```
     *
     * **Scope — read this before relying on it.** Three limits are structural,
     * not gaps to be closed later :
     * - **Handles already handed out are never upgraded.** A caller holding the
     *   old instance keeps it; only *subsequent* `resolve` calls see the new
     *   one. Hot swap works for modules resolved through the runtime on use.
     * - **Factory-closure state is lost by construction.** Re-running the
     *   factory is exactly what clears it. The convention above is the answer,
     *   and it is opt-in; state that must survive belongs in a module that is
     *   not part of the swap.
     * - **Only the default instance cache is affected.** `{ isolation: true }`
     *   instances are never cached and so can never be invalidated, and a
     *   caller-supplied `{ instances: map }` cache is the caller's to clear.
     *
     * @param {string}            spec      Module name, or `'name@version'`.
     * @param {InvalidateOptions} [options={}]
     * @throws {Error} When the module (or version) is not registered, or when a
     *                 target — directly or through the cascade — is in
     *                 {@link ModuleRuntime.NEVER_SWAP}.
     * @returns {InvalidateResult} Frozen result.
     */
    invalidate(spec: string, options?: InvalidateOptions): InvalidateResult;
    /**
     * Whether `def` declares any of the `targets` among its `dependencies`.
     *
     * A version-less dependency spec resolves to the entry's `latest`, so it
     * only counts when that exact version is a target ; a pinned `name@version`
     * spec counts only for its own version.
     *
     * @param {ModuleDefinition}         def
     * @param {Map<string, Set<string>>} targets name → invalidated versions.
     * @returns {boolean}
     * @private
     */
    private _dependsOnTarget;
    /**
     * Serialise a dependency sub-graph to a self-contained code string for use
     * inside a Web Worker.
     *
     * Each spec resolves to an exact `(name, version)` def via `parseSpec`
     * (latest if no version). Dependencies of every emitted module are rewritten
     * as canonical `name@version` to guarantee exact resolution worker-side.
     *
     * @param {string[]} specs Entry-point module specs.
     * @returns {SerializedGraph}
     */
    serialize(specs: string[]): SerializedGraph;
    /**
     * Build a topologically ordered list of `(name, version, def)` triples
     * covering the transitive dependency closure of the given specs.
     *
     * Iterative depth-first search with a visited set keyed on canonical
     * `name@version` to deduplicate. Each module's dependencies are visited
     * before the module itself.
     *
     * @param {string[]} specs Entry-point module specs.
     * @returns {Array<{name: string, version: string, def: ModuleDefinition}>}
     * @private
     */
    private _buildGraph;
}
/**
 * Self-contained source code of the entire runtime (constants +
 * private helpers + `ModuleRuntime` class), ready to be inlined
 * into a Worker without depending on `import`.
 *
 * `worker-helper.js` injects this string at worker startup so that
 * the class (serialised via `.toString()`) can find `SEMVER_RE`,
 * `TYPE_RE`, `DEFAULT_VERSION`, `semverCompare`, `parseSpec`, and
 * `canonical` at execution time.
 *
 * **Order is critical**: helpers and constants must precede the class
 * to satisfy the hoisting rules for `function` declarations and the
 * temporal dead zone of `const`.
 *
 * @type {string}
 */
export const runtimeSource: string;
/**
 * A module definition object.
 */
export type ModuleDefinition = {
    /**
     * - Unique module identifier.
     */
    name: string;
    /**
     * - Semver string. Defaults to '0.0.0'.
     */
    version?: string;
    /**
     * - Hierarchical type (e.g. 'fw.io.codec').
     */
    type?: string;
    /**
     * - Ordered list of dependency specs
     *   ('name' or 'name@version').
     */
    dependencies: string[];
    /**
     * - Optional direct JS references to the
     *   dependency modules, in the same order
     *   as `dependencies`. Bundler-facing only :
     *   lets tree-shaking tools trace the graph
     *   through static imports. Walked by
     *   `registerDeep` / `registerAllDeep`.
     */
    deps?: ModuleDefinition[];
    /**
     * - Factory function invoked with resolved
     *   dependency instances as arguments.
     */
    factory: Function;
};
/**
 * Public instance type produced by a module's `factory` — i.e. what
 * `runtime.resolve('<name>')` returns for that module. Given a module value
 * `M`, `InstanceOf<typeof M>` is `ReturnType<M['factory']>`. See the typed
 * runtime facade (`@awacloud/fw/typed`) and `docs/guide/typescript.md` for usage.
 */
export type InstanceOf<M extends {
    factory: (...args: any[]) => any;
}> = ReturnType<M["factory"]>;
/**
 * Per-name registry entry holding all known versions of a module.
 */
export type ModuleEntry = {
    /**
     * - Map of version → definition.
     */
    versions: Map<string, ModuleDefinition>;
    /**
     * - Highest semver version present.
     */
    latest: string;
    /**
     * - Cached pointer to the latest def.
     */
    latestDef: ModuleDefinition;
};
/**
 * Options accepted by {@link ModuleRuntime#resolve} and
 * {@link ModuleRuntime#resolveAll}.
 */
export type ResolveOptions = {
    /**
     * - When truthy the instance is **not** cached.
     */
    isolation?: boolean;
    /**
     * - Explicit version. Ignored if `spec` already
     *      contains `@version`.
     */
    version?: string;
    /**
     * - Custom instance map (flat, keyed by canonical
     *    `name@version`).
     */
    instances?: Map<any, any>;
};
/**
 * Filter passed to {@link ModuleRuntime#list}.
 */
export type ListFilter = {
    /**
     * - Exact module name.
     */
    name?: string;
    /**
     * - Exact version.
     */
    version?: string;
    /**
     * - Exact type, or prefix when ending with `.`
     *       (e.g. `'fw.io.'` matches `'fw.io.codec'`).
     */
    type?: string;
};
/**
 * One frozen registry row returned by {@link ModuleRuntime#snapshot}.
 *
 * Pure **metadata** — it carries no `factory`, no `deps` reference and no
 * instance. Every field is a primitive or a frozen copy, so the row is inert:
 * holding it grants no way to write back into the registry.
 */
export type RegistrySnapshotEntry = {
    /**
     * - Registered module name.
     */
    name: string;
    /**
     * - Resolved version ('0.0.0' when the
     *   descriptor omitted `version`).
     */
    version: string;
    /**
     * - Declared taxonomy type, or `null`.
     */
    type: string | null;
    /**
     * - Frozen copy of the declared
     * dependency specs (never the live array).
     */
    dependencies: ReadonlyArray<string>;
    /**
     * - `true` when this version is the one a
     *   version-less `resolve(name)` would pick.
     */
    latest: boolean;
    /**
     * - `true` when an instance for this
     *   `(name, version)` is already in the
     *   default cache. Read-only observation —
     *   reading it never instantiates anything.
     */
    instantiated: boolean;
};
/**
 * Options accepted by {@link ModuleRuntime#invalidate}.
 */
export type InvalidateOptions = {
    /**
     * - When truthy, also invalidate every module
     *    that declares the target among its
     *    `dependencies`, transitively. Dependents,
     *    not dependencies: what a swapped module
     *    breaks is the things built on top of it.
     */
    cascade?: boolean;
};
/**
 * Result returned by {@link ModuleRuntime#invalidate}.
 */
export type InvalidateResult = {
    /**
     * - Canonical `name@version` keys
     * whose cached instance was actually dropped. A target that was never
     * instantiated contributes nothing, so an empty array means "nothing was
     * cached", never "nothing matched" — an unknown module throws instead.
     */
    invalidated: ReadonlyArray<string>;
    /**
     * - Frozen map of canonical key → the value
     * returned by the outgoing instance's `dehydrate()`, for the targets that
     * opted into the convention. Keys absent from it did not implement
     * `dehydrate`. The values themselves are whatever the module returned and
     * are **not** deep-frozen.
     */
    state: {
        [x: string]: any;
    };
};
/**
 * Result returned by {@link ModuleRuntime#serialize}.
 */
export type SerializedGraph = {
    /**
     * - JS array literal of canonical names :
     *   `"['hex@1.0.0','uuid@2.0.0']"`.
     */
    list: string;
    /**
     * - JS array literal of fully serialised module objects,
     *   ready to be evaluated and registered inside a Worker.
     */
    content: string;
};
//# sourceMappingURL=runtime.d.ts.map