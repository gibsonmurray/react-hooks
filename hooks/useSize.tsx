import { useState, useEffect, type RefObject } from "react"

/**
 * `useSize` is a custom React hook that monitors the size of a specified element.
 * It uses `useState` to store the size and `useEffect` to set up the ResizeObserver.
 *
 * @param ref - The ref object for the element to monitor.
 * @returns The size of the element.
 */
export default function useSize<T extends HTMLElement>(ref: RefObject<T>) {
    const [size, setSize] = useState({})

    useEffect(() => {
        if (ref.current == null) return
        const observer = new ResizeObserver(([entry]) =>
            setSize(entry.contentRect)
        )
        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return size
}
