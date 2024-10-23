import { useStorage } from "./useStorage"

/**
 * `useSessionStorage` is a custom React hook that manages storage of a value in the browser's sessionStorage.
 * It uses the `useStorage` hook internally to store and retrieve the value.
 *
 * @param key - The key to store the value under in sessionStorage.
 * @param defaultValue - The initial value of the state.
 * @returns An array containing the value, a function to set the value, and a function to remove the value.
 */
export function useSessionStorage<T>(key: string, defaultValue?: T) {
    return useStorage<T>(window.sessionStorage, key, defaultValue)
}
