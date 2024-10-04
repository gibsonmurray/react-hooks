import { useEffect, useState, type RefObject } from "react"

/**
 * `useOnScreen` is a custom React hook that checks if an element is visible in the viewport.
 * It uses `useState` to manage the visibility state and `useEffect` to set up the IntersectionObserver.
 *
 * @param ref - The ref object for the element to check if it is visible in the viewport.
 * @param rootMargin - The margin around the root element to include in the intersection calculation. Default is "0px".
 * @returns The boolean state indicating if the element is visible in the viewport.
 */
export default function useOnScreen(
    ref: RefObject<HTMLElement>,
    rootMargin = "0px"
) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (ref.current == null) return
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { rootMargin }
        )
        observer.observe(ref.current)
        return () => {
            if (ref.current == null) return
            observer.unobserve(ref.current)
        }
    }, [ref.current, rootMargin])

    return isVisible
}
