/**
 * `usePrevious` is a custom React hook that keeps track of the previous value of a state.
 * It uses `useRef` to store the current and previous values and updates them when the current value changes.
 *
 * @param value - The current value to track.
 * @returns The previous value.
 */
export declare function usePrevious<T>(value: T): T | undefined;
