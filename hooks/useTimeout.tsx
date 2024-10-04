import { useCallback, useEffect, useRef } from "react"

/**
 * `useTimeout` is a custom React hook that sets a timeout and provides functions to reset or clear the timeout.
 * It uses `useRef` to store the callback and timeout references, and `useEffect` to update the callback reference.
 *
 * @param callback - The function to be executed after the delay.
 * @param delay - The delay time in milliseconds.
 * @returns An object with `reset` and `clear` methods to control the timeout.
 */
export default function useTimeout(callback: () => void, delay: number) {
    const callbackRef = useRef(callback)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        callbackRef.current = callback
    }, [callback])

    const set = useCallback(() => {
        timeoutRef.current = setTimeout(
            () => callbackRef.current(),
            delay
        ) as NodeJS.Timeout
    }, [delay])

    const clear = useCallback(() => {
        timeoutRef.current && clearTimeout(timeoutRef.current)
    }, [])

    useEffect(() => {
        set()
        return clear
    }, [delay, set, clear])

    const reset = useCallback(() => {
        clear()
        set()
    }, [clear, set])

    return { reset, clear }
}
