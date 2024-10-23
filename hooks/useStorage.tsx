import { useCallback, useState, useEffect } from "react"

export type StorageUtils<T> = [T, (value: T) => void, () => void]

/**
 * `useStorage` is a custom React hook that manages storage of a value in a specified storage object (e.g., localStorage or sessionStorage).
 * It uses `useState` to store the value, `useEffect` to update the storage when the value changes, and `useCallback` to create a function for removing the value.
 *
 * @param {Storage} storageObject - The storage object to use (e.g., localStorage or sessionStorage).
 * @param {string} key - The key to store the value under in the storage object.
 * @param {T} defaultValue - The initial value of the state.
 * @returns An array containing the value, a function to set the value, and a function to remove the value.
 */
export function useStorage<T>(
    storageObject: Storage,
    key: string,
    defaultValue?: T
): StorageUtils<T> {
    const [value, setValue] = useState(() => {
        const jsonValue = storageObject.getItem(key)
        if (jsonValue != null) return JSON.parse(jsonValue)

        if (typeof defaultValue === "function") {
            return defaultValue()
        } else {
            return defaultValue
        }
    })

    useEffect(() => {
        if (value === undefined) return storageObject.removeItem(key)
        storageObject.setItem(key, JSON.stringify(value))
    }, [key, value, storageObject])

    const remove = useCallback(() => {
        setValue(undefined)
    }, [])

    return [value, setValue, remove]
}
