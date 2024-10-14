import { type DependencyList } from "react";
/**
 * `useFetch` is a custom React hook that fetches data from a specified URL.
 * It uses `useAsync` to handle the asynchronous operation and returns the data.
 *
 * @param url - The URL to fetch data from.
 * @param options - Additional options for the fetch request.
 * @param dependencies - An array of dependencies that trigger the execution of the fetch request.
 * @returns The fetched data.
 */
export declare function useFetch(url: string, options?: {}, dependencies?: DependencyList): {
    loading: boolean;
    error: Error | undefined;
    value: any;
};
