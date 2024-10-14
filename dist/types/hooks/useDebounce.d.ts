/**
 * `useDebounce` is a custom React hook that debounces a callback function.
 * It ensures that the callback is not executed until a specified delay has passed without any further calls.
 *
 * @param callback - The function to be debounced.
 * @param delay - The delay time in milliseconds. Default is 1000 milliseconds.
 * @param dependencies - An array of dependencies that trigger the execution of the callback.
 */
export declare function useDebounce(callback: () => void, delay: number | undefined, dependencies: any[]): void;
