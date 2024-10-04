import { useRef } from "react"

/**
 * `usePrevious` is a custom React hook that keeps track of the previous value of a state.
 * It uses `useRef` to store the current and previous values and updates them when the current value changes.
 *
 * @param value - The current value to track.
 * @returns The previous value.
 */
export default function usePrevious<T>(value: T) {
    const currentRef = useRef(value)
    const previousRef = useRef<T>()

    if (currentRef.current !== value) {
        previousRef.current = currentRef.current
        currentRef.current = value
    }

    return previousRef.current
}
