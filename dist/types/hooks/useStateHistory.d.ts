/**
 * `useStateHistory` is a custom React hook that maintains a history of state values.
 * It uses `useState` to store the current value, `useRef` to store the history, and `useCallback` to create functions for navigating through the history.
 *
 * @param defaultValue - The initial value of the state.
 * @param capacity - The maximum number of history entries. Default is 10.
 * @returns An array containing the current value, a function to set the value, and an object with methods to navigate through the history.
 */
export declare function useStateHistory<T>(defaultValue: T, { capacity }?: {
    capacity?: number | undefined;
}): (T | ((v: T) => void) | {
    history: T[];
    pointer: number;
    back: () => void;
    forward: () => void;
    go: (index: number) => void;
})[];
