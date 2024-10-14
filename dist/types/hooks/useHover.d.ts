import { type RefObject } from "react";
/**
 * `useHover` is a custom React hook that detects when an element is hovered over.
 * It uses `useState` to manage the hovered state and `useEventListener` to listen for mouseover and mouseout events.
 *
 * @param ref - The ref object for the element to detect hover on.
 * @returns The hovered state.
 */
export declare function useHover<T extends HTMLElement>(ref: RefObject<T>): boolean;
