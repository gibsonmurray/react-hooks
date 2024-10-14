import { useStorage } from "./useStorage";

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
