/**
 * `useUnmounted` is a custom React hook that executes a callback when the component is unmounted.
 * It uses `useEffect` to execute the callback when the component is unmounted.
 *
 * @param callback - The function to be executed when the component is unmounted.
 */
export declare function useUnmounted(callback: () => void): void;
