import { DependencyList } from "react"
import { AsyncUtils, useAsync } from "./useAsync"

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
export const useFetch = <T,>(
    url: string,
    options: FetchOptions = {},
    dependencies: DependencyList = []
): AsyncUtils<T> => {
    return useAsync(async () => {
        const res = await fetch(url, { ...options })

        if (res.ok) {
            const contentType = res.headers.get("content-type")
            if (contentType) {
                if (contentType.includes("application/json")) {
                    return await res.json()
                } else if (contentType.includes("text/")) {
                    return await res.text()
                } else if (contentType.includes("application/octet-stream")) {
                    return await res.blob()
                }
            }
            return res
        }

        throw new Error(await res.text())
    }, dependencies)
}
