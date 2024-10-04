import useEventListener from "./useEventListener"
import useTimeout from "./useTimeout"
import useMounted from "./useMounted"
import type { RefObject } from "react"

/**
 * `useLongPress` is a custom React hook that detects long press events on an element.
 * It uses `useTimeout` to set a delay and `useEventListener` to listen for mousedown, touchstart, mouseup, mouseleave, and touchend events.
 *
 * @param ref - The ref object for the element to detect long press on.
 * @param cb - The callback function to execute when a long press is detected.
 * @param delay - The delay time in milliseconds. Default is 250 milliseconds.
 */
export default function useLongPress<T extends HTMLElement>(
    ref: RefObject<T>,
    cb: () => void,
    { delay = 250 } = {}
) {
    const { reset, clear } = useTimeout(cb, delay)
    useMounted(clear)

    useEventListener("mousedown", reset, ref.current)
    useEventListener("touchstart", reset, ref.current)

    useEventListener("mouseup", clear, ref.current)
    useEventListener("mouseleave", clear, ref.current)
    useEventListener("touchend", clear, ref.current)
}
