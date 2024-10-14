/**
 * `useFlipGSAP` is a custom React hook that provides a way to flip elements using GSAP's Flip plugin.
 * It simplifies the process of creating flip animations by handling the state management and GSAP animation.
 *
 * @param target - The target element to flip.
 * @param options - Configuration options for the flip animation.
 * @returns An object containing a boolean to swap the rendered content, a play function that triggers the animation, and a ref to the scope of the flip.
 */
export declare function useFlipGSAP(target: gsap.DOMTarget, options?: Flip.FlipStateVars & Flip.FromToVars & {
    revertOnUpdate?: boolean;
}): {
    isFlipped: boolean;
    play: () => void;
    scopeRef: import("react").MutableRefObject<null>;
};
