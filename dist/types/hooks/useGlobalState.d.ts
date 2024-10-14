/**
 * A custom hook for managing global state.
 *
 * @param key - The unique identifier for the state.
 * @param initialValue - The initial value of the state (optional).
 * @returns A tuple containing the current state value and a function to update it.
 */
export declare function useGlobalState<T>(key: string, initialValue?: T): [T, (newValue: T | ((prevValue: T) => T)) => void];
/**
 * Creates a new global state hook.
 *
 * @returns A custom hook for managing a specific global state.
 */
export declare function createGlobalState<T>(): (initialValue?: T) => readonly [T, (newValue: T | ((prevValue: T) => T)) => void];
