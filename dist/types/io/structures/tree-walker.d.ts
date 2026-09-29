/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace treeWalker {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {TreeWalkerApi} */
    function factory(): TreeWalkerApi;
}
/**
 * A single traversal event produced by the walker.
 */
export type TreeWalkEvent = {
    /**
     * - the node being visited
     */
    node: object;
    /**
     * - `true` on first visit, `false` once children are consumed
     */
    entering: boolean;
};
/**
 * Stateful tree-walking iterator returned by `createWalker`.
 */
export type TreeWalkerInstance = {
    /**
     * - the node the walker is positioned on (or `null` when exhausted)
     */
    current: object;
    /**
     * - the root node the walker was created with
     */
    root: object;
    /**
     * - whether the next event is an entering event
     */
    entering: boolean;
    /**
     * - advance to the next event
     */
    next: () => TreeWalkEvent | null;
    /**
     * - resume from a specific position
     */
    resumeAt: (node: object, entering: boolean) => void;
};
/**
 * Object returned by `treeWalker.factory()`.
 */
export type TreeWalkerApi = {
    /**
     * - create a stateful walker iterator
     */
    createWalker: (root: object) => TreeWalkerInstance;
    /**
     * - iterable adapter for `for…of`
     */
    walk: (root: object) => Generator<TreeWalkEvent>;
    /**
     * - visitor-based DFS with subtree skipping and cycle guard
     */
    walkVisit: (root: object | null | undefined, visitor: (node: object, entering: boolean) => boolean | void, options?: {
        nodeTypes?: string[];
    }) => void;
    /**
     * - first node matching `predicate` (DFS pre-order)
     */
    findFirst: (root: object, predicate: (node: object) => boolean) => object | null;
    /**
     * - all nodes matching `predicate` (DFS pre-order)
     */
    findAll: (root: object, predicate: (node: object) => boolean) => object[];
    /**
     * - replace a node in its parent's child list
     */
    replaceNode: (oldNode: object, newNode: object) => object;
    /**
     * - wrap a node in a wrapper produced by `wrapperFactory`
     */
    wrapNode: (node: object, wrapperFactory: (node: object) => object) => object;
    /**
     * - replace a node with its direct children
     */
    flattenNode: (node: object) => void;
    /**
     * - clone a node (deep by default)
     */
    cloneNode: (node: object, deep?: boolean) => object;
};
//# sourceMappingURL=tree-walker.d.ts.map