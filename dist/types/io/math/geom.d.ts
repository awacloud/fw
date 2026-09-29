/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace geom {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: string[];
    let deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): LinalgAPI;
    }[];
    /** @returns {GeomAPI} */
    function factory(linalg: any): GeomAPI;
}
/**
 * 2D point.
 */
export type Pt = {
    x: number;
    y: number;
};
/**
 * Axis-aligned rectangle (top-left origin).
 */
export type RectShape = {
    x: number;
    y: number;
    w: number;
    h: number;
};
/**
 * Circle.
 */
export type CircleShape = {
    cx: number;
    cy: number;
    r: number;
};
/**
 * Line segment.
 */
export type LineShape = {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
};
/**
 * Polygon (open ring).
 */
export type PolygonShape = {
    points: Pt[];
};
/**
 * Point namespace.
 */
export type PointAPI = {
    create: (x: number, y: number) => Pt;
    distance: (a: Pt, b: Pt) => number;
    midpoint: (a: Pt, b: Pt) => Pt;
    equals: (a: Pt, b: Pt, eps?: number) => boolean;
};
/**
 * Rect namespace.
 */
export type RectAPI = {
    create: (x: number, y: number, w: number, h: number) => RectShape;
    contains: (r: RectShape, p: Pt) => boolean;
    intersects: (a: RectShape, b: RectShape) => boolean;
    intersection: (a: RectShape, b: RectShape) => RectShape | null;
    union: (a: RectShape, b: RectShape) => RectShape;
    area: (r: RectShape) => number;
    center: (r: RectShape) => Pt;
    normalize: (r: RectShape) => RectShape;
};
/**
 * Circle namespace.
 */
export type CircleAPI = {
    create: (cx: number, cy: number, r: number) => CircleShape;
    contains: (c: CircleShape, p: Pt) => boolean;
    intersectsCircle: (a: CircleShape, b: CircleShape) => boolean;
    intersectsRect: (c: CircleShape, r: RectShape) => boolean;
};
/**
 * Line namespace.
 */
export type LineAPI = {
    create: (x1: number, y1: number, x2: number, y2: number) => LineShape;
    length: (l: LineShape) => number;
    intersects: (a: LineShape, b: LineShape) => boolean;
    intersection: (a: LineShape, b: LineShape) => Pt | null;
    distanceToPoint: (l: LineShape, p: Pt) => number;
    closestPoint: (l: LineShape, p: Pt) => Pt;
};
/**
 * Polygon namespace.
 */
export type PolygonAPI = {
    create: (points: Pt[]) => PolygonShape;
    area: (poly: PolygonShape) => number;
    isCcw: (poly: PolygonShape) => boolean;
    bbox: (poly: PolygonShape) => RectShape;
    contains: (poly: PolygonShape, p: Pt) => boolean;
    simplify: (poly: PolygonShape, tolerance: number) => PolygonShape;
};
/**
 * Object returned by `geom.factory()`.
 */
export type GeomAPI = {
    Point: PointAPI;
    Rect: RectAPI;
    Circle: CircleAPI;
    Line: LineAPI;
    Polygon: PolygonAPI;
    hitTest: (shape: object, point: Pt) => boolean;
    transform: (point: Pt, mat3: ArrayLike<number>) => Pt;
};
//# sourceMappingURL=geom.d.ts.map