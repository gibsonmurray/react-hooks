import { useRef, useState, useCallback } from "react"
import { useGSAP } from "@gsap/react"
import { Flip } from "gsap/Flip"
import gsap from "gsap"

gsap.registerPlugin(Flip)

/**
 * `useFlipGSAP` is a custom React hook that provides a way to flip elements using GSAP's Flip plugin.
 * It simplifies the process of creating flip animations by handling the state management and GSAP animation.
 *
 * @param target - The target element to flip.
 * @param options - Configuration options for the flip animation.
 * @returns An object containing a boolean to swap the rendered content, a play function that triggers the animation, and a ref to the scope of the flip.
 */
export default function useFlipGSAP(
    target: gsap.DOMTarget,
    options: Flip.FlipStateVars &
        Flip.FromToVars & { revertOnUpdate?: boolean } = {
        revertOnUpdate: false,
    }
) {
    const [isFlipped, setIsFlipped] = useState(false)
    const flipStateRef = useRef<Flip.FlipState | null>(null)
    const scopeRef = useRef(null)

    const { props, simple, revertOnUpdate, ...vars } = options

    const captureState = useCallback(() => {
        const mergedVars = { props, simple, targets: target }
        flipStateRef.current = Flip.getState(target, mergedVars)
    }, [target, props, simple])

    const play = useCallback(() => {
        captureState()
        setIsFlipped((prev) => !prev)
    }, [captureState])

    useGSAP(
        () => {
            if (flipStateRef.current) {
                Flip.from(flipStateRef.current, vars)
                flipStateRef.current = null
            }
        },
        {
            scope: scopeRef,
            dependencies: [isFlipped],
            revertOnUpdate: revertOnUpdate,
        }
    )

    return { isFlipped, play, scopeRef }
}
