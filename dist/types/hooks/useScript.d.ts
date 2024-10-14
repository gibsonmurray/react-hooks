/**
 * `useScript` is a custom React hook that dynamically loads a script from a specified URL.
 * It uses `useAsync` to handle the asynchronous loading of the script and returns a promise.
 *
 * @param url - The URL of the script to load.
 * @returns A promise that resolves when the script is loaded.
 */
export declare function useScript(url: string): {
    loading: boolean;
    error: Error | undefined;
    value: unknown;
};
