import { type RefObject } from "react"
import useEventListener from "./useEventListener"

/**
 * `useClickOutside` is a custom React hook that detects clicks outside a specified element.
 * It simplifies the process of handling click events outside a specific DOM element.
 *
 * @param ref - A ref to the element to detect clicks outside of.
 * @param callback - The callback function to execute when a click outside the element occurs.
 */
export default function useClickOutside<T extends HTMLElement>(
    ref: RefObject<T>,
    callback: (e: Event) => void
) {
    useEventListener(
        "click",
        (e) => {
            if (ref.current == null || ref.current.contains(e.target as Node))
                return
            callback(e)
        },
        document
    )
}
