import { useState, type RefObject } from "react"
import { useEventListener } from "./useEventListener"

/**
 * `useHover` is a custom React hook that detects when an element is hovered over.
 * It uses `useState` to manage the hovered state and `useEventListener` to listen for mouseover and mouseout events.
 *
 * @param ref - The ref object for the element to detect hover on.
 * @returns The hovered state.
 */
export function useHover<T extends HTMLElement>(ref: RefObject<T>) {
    const [hovered, setHovered] = useState(false)

    useEventListener("mouseover", () => setHovered(true), ref.current)
    useEventListener("mouseout", () => setHovered(false), ref.current)

    return hovered
}
