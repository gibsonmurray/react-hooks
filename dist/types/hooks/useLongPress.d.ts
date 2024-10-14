import type { RefObject } from "react";
/**
 * `useLongPress` is a custom React hook that detects long press events on an element.
 * It uses `useTimeout` to set a delay and `useEventListener` to listen for mousedown, touchstart, mouseup, mouseleave, and touchend events.
 *
 * @param ref - The ref object for the element to detect long press on.
 * @param cb - The callback function to execute when a long press is detected.
 * @param delay - The delay time in milliseconds. Default is 250 milliseconds.
 */
export declare function useLongPress<T extends HTMLElement>(ref: RefObject<T>, cb: () => void, { delay }?: {
    delay?: number | undefined;
}): void;
