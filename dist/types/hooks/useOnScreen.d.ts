import { type RefObject } from "react";
/**
 * `useOnScreen` is a custom React hook that checks if an element is visible in the viewport.
 * It uses `useState` to manage the visibility state and `useEffect` to set up the IntersectionObserver.
 *
 * @param ref - The ref object for the element to check if it is visible in the viewport.
 * @param rootMargin - The margin around the root element to include in the intersection calculation. Default is "0px".
 * @returns The boolean state indicating if the element is visible in the viewport.
 */
export declare function useOnScreen(ref: RefObject<HTMLElement>, rootMargin?: string): boolean;