import { type RefObject } from "react";
export interface MouseOptions {
    offsetX: number;
    offsetY: number;
    avoidEdges: boolean;
    tooltipWidth?: number;
    tooltipHeight?: number;
    relativeToWindow?: boolean;
}
export interface UseMouseState {
    x: number;
    y: number;
    position: "bottomRight" | "bottomLeft" | "topRight" | "topLeft";
}
/**
 * `useMouse` is a hook that tracks the mouse position relative to a specified element.
 * It provides options for offset, edge avoidance, and custom dimensions for precise positioning.
 *
 * @param ref - A React ref to the element to track mouse position relative to (viewport if not provided).
 * @param options - Configuration options including offsets and edge avoidance.
 * @return - An object containing the mouse's x and y coordinates.
 */
export declare function useMouse<T extends HTMLElement>(ref?: RefObject<T>, options?: MouseOptions): UseMouseState;
