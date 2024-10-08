import { useEffect, useRef } from "react"

/**
 * `useRenderCount` is a custom React hook that counts the number of times a component has re-rendered.
 * It uses `useRef` to store the count and `useEffect` to update it on every render.
 *
 * @returns The current count of re-renders.
 */
export function useRenderCount() {
    const count = useRef(1)
    useEffect(() => {
        count.current++
    })
    return count.current
}
