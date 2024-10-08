import { useState } from "react"

/**
 * `useArray` is a custom React hook that manages an array state and provides functions to manipulate it.
 * It simplifies the process of managing dynamic lists by providing methods to add, filter, update, remove, and clear elements.
 *
 * @param defaultValue - The initial array to set as the state.
 * @returns An object containing the array, a set function to update the array, and methods to add, filter, update, remove, and clear elements.
 */
export function useArray<T>(defaultValue: T[]) {
    const [array, setArray] = useState(defaultValue)

    function push(element: T) {
        setArray((a) => [...a, element])
    }

    function filter(callback: (element: T) => boolean) {
        setArray((a) => a.filter(callback))
    }

    function update(index: number, newElement: T) {
        setArray((a) => [
            ...a.slice(0, index),
            newElement,
            ...a.slice(index + 1, a.length),
        ])
    }

    function remove(index: number) {
        setArray((a) => [...a.slice(0, index), ...a.slice(index + 1, a.length)])
    }

    function clear() {
        setArray([])
    }

    return { array, set: setArray, push, filter, update, remove, clear }
}
