/**
 * `useTimeout` is a custom React hook that sets a timeout and provides functions to reset or clear the timeout.
 * It uses `useRef` to store the callback and timeout references, and `useEffect` to update the callback reference.
 *
 * @param callback - The function to be executed after the delay.
 * @param delay - The delay time in milliseconds.
 * @returns An object with `reset` and `clear` methods to control the timeout.
 */
export declare function useTimeout(callback: () => void, delay: number): {
    reset: () => void;
    clear: () => void;
};
