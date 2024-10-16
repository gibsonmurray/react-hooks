import { useAsync } from "./useAsync"

export type FetchOptions = {
    method?: "GET" | "POST" | "PUT" | "DELETE"
    headers?: Record<string, string>
    body?: string
}

/**
 * `useFetch` is a custom React hook that fetches data from a specified URL.
 * It uses `useAsync` to handle the asynchronous operation and returns the data.
 *
 * @param url - The URL to fetch data from.
 * @param options - Additional options for the fetch request.
 * @param dependencies - An array of dependencies that trigger the execution of the fetch request.
 * @returns The fetched data.
 */
export function useFetch(
    url: string,
    options: FetchOptions = {},
    dependencies = []
) {
    return useAsync(async () => {
        const res = await fetch(url, { ...options })
        const data = await res.json()

        if (res.ok) return data
        throw data // This will be caught as an error by useAsync
    }, dependencies)
}
