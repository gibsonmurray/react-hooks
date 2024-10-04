import { useCallback, useState, useEffect } from "react"

/**
 * `useStorage` is a custom React hook that manages storage of a value in a specified storage object (e.g., localStorage or sessionStorage).
 * It uses `useState` to store the value, `useEffect` to update the storage when the value changes, and `useCallback` to create a function for removing the value.
 *
 * @param key - The key to store the value under in the storage object.
 * @param defaultValue - The initial value of the state.
 * @param storageObject - The storage object to use (e.g., localStorage or sessionStorage).
 * @returns An array containing the value, a function to set the value, and a function to remove the value.
 */
function useStorage(key: string, defaultValue: any, storageObject: Storage) {
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

/**
 * `useLocalStorage` is a custom React hook that manages storage of a value in the browser's localStorage.
 * It uses the `useStorage` hook internally to store and retrieve the value.
 *
 * @param key - The key to store the value under in localStorage.
 * @param defaultValue - The initial value of the state.
 * @returns An array containing the value, a function to set the value, and a function to remove the value.
 */
export function useLocalStorage(key: string, defaultValue?: any) {
    return useStorage(key, defaultValue, window.localStorage)
}

/**
 * `useSessionStorage` is a custom React hook that manages storage of a value in the browser's sessionStorage.
 * It uses the `useStorage` hook internally to store and retrieve the value.
 *
 * @param key - The key to store the value under in sessionStorage.
 * @param defaultValue - The initial value of the state.
 * @returns An array containing the value, a function to set the value, and a function to remove the value.
 */
export function useSessionStorage(key: string, defaultValue?: any) {
    return useStorage(key, defaultValue, window.sessionStorage)
}
