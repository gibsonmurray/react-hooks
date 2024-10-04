import { useState, useEffect, useCallback } from "react"

export type AsyncFunction<T> = () => Promise<T>

/**
 * `useAsync` is a custom React hook that manages asynchronous operations.
 * It simplifies the process of handling asynchronous tasks by providing a stateful object that tracks loading, error, and value.
 *
 * @param callback - The asynchronous function to execute.
 * @param deps - An array of dependencies that triggers the execution of the callback.
 * @returns An object containing the loading state, error, and value of the asynchronous operation.
 */
export default function useAsync<T>(
    callback: AsyncFunction<T>,
    deps: any[] = []
) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | undefined>()
    const [value, setValue] = useState<T | undefined>()

    const callbackMemoized = useCallback(() => {
        setLoading(true)
        setError(undefined)
        setValue(undefined)
        callback()
            .then(setValue)
            .catch(setError)
            .finally(() => setLoading(false))
    }, deps)

    useEffect(() => {
        callbackMemoized()
    }, [callbackMemoized])

    return { loading, error, value }
}
