import { type RefObject } from "react";
/**
 * `useClickOutside` is a custom React hook that detects clicks outside a specified element.
 * It simplifies the process of handling click events outside a specific DOM element.
 *
 * @param ref - A ref to the element to detect clicks outside of.
 * @param callback - The callback function to execute when a click outside the element occurs.
 */
export declare function useClickOutside<T extends HTMLElement>(ref: RefObject<T>, callback: (e: Event) => void): void;
