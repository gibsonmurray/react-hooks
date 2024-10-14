import { type RefObject } from "react";
/**
 * `useSize` is a custom React hook that monitors the size of a specified element.
 * It uses `useState` to store the size and `useEffect` to set up the ResizeObserver.
 *
 * @param ref - The ref object for the element to monitor.
 * @returns The size of the element.
 */
export declare function useSize<T extends HTMLElement>(ref: RefObject<T>): {};
