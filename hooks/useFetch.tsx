import { type DependencyList } from "react"
import { useAsync } from "./useAsync"

const DEFAULT_OPTIONS = {
    headers: { "Content-Type": "application/json" },
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
    options = {},
    dependencies: DependencyList = []
) {
    return useAsync(async () => {
        const res = await fetch(url, { ...DEFAULT_OPTIONS, ...options })
        const data = await res.json()

        if (res.ok) return data
        throw data
    }, dependencies)
}
