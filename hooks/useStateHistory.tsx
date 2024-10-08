import { useCallback, useRef, useState } from "react"

/**
 * `useStateHistory` is a custom React hook that maintains a history of state values.
 * It uses `useState` to store the current value, `useRef` to store the history, and `useCallback` to create functions for navigating through the history.
 *
 * @param defaultValue - The initial value of the state.
 * @param capacity - The maximum number of history entries. Default is 10.
 * @returns An array containing the current value, a function to set the value, and an object with methods to navigate through the history.
 */
export function useStateHistory<T>(
    defaultValue: T,
    { capacity = 10 } = {}
) {
    const [value, setValue] = useState(defaultValue)
    const historyRef = useRef([value])
    const pointerRef = useRef(0)

    const set = useCallback(
        (v: T) => {
            const resolvedValue = typeof v === "function" ? v(value) : v
            if (historyRef.current[pointerRef.current] !== resolvedValue) {
                if (pointerRef.current < historyRef.current.length - 1) {
                    historyRef.current.splice(pointerRef.current + 1)
                }
                historyRef.current.push(resolvedValue)

                while (historyRef.current.length > capacity) {
                    historyRef.current.shift()
                }
                pointerRef.current = historyRef.current.length - 1
            }
            setValue(resolvedValue)
        },
        [capacity, value]
    )

    const back = useCallback(() => {
        if (pointerRef.current <= 0) return
        pointerRef.current--
        setValue(historyRef.current[pointerRef.current])
    }, [])

    const forward = useCallback(() => {
        if (pointerRef.current >= historyRef.current.length - 1) return
        pointerRef.current++
        setValue(historyRef.current[pointerRef.current])
    }, [])

    const go = useCallback((index: number) => {
        if (index < 0 || index > historyRef.current.length - 1) return
        pointerRef.current = index
        setValue(historyRef.current[pointerRef.current])
    }, [])

    return [
        value,
        set,
        {
            history: historyRef.current,
            pointer: pointerRef.current,
            back,
            forward,
            go,
        },
    ]
}
