import { type DependencyList } from "react";
export type AsyncFunction<T> = () => Promise<T>;
/**
 * `useAsync` is a custom React hook that manages asynchronous operations.
 * It simplifies the process of handling asynchronous tasks by providing a stateful object that tracks loading, error, and value.
 *
 * @param callback - The asynchronous function to execute.
 * @param deps - An array of dependencies that triggers the execution of the callback.
 * @returns An object containing the loading state, error, and value of the asynchronous operation.
 */
export declare function useAsync<T>(callback: AsyncFunction<T>, dependencies?: DependencyList): {
    loading: boolean;
    error: Error | undefined;
    value: T | undefined;
};
