import { useEffect, type EffectCallback } from "react"

/**
 * `useMounted` is a custom React hook that runs a callback function when the component is mounted.
 * It uses `useEffect` to run the callback and an empty dependency array to ensure it runs only once.
 *
 * @param callback - The function to be executed when the component is mounted.
 */
export default function useMounted(callback: EffectCallback) {
    useEffect(callback, [])
}
