import { useState, useEffect } from "react"

/**
 * `useGeolocation` is a custom React hook that provides access to the user's geolocation.
 * It uses `useEffect` to get the current position and `useState` to manage the loading, error, and data states.
 *
 * @param options - The options for the geolocation request.
 * @returns An object containing the `loading`, `error`, and `data` states.
 */
export default function useGeolocation(options: PositionOptions) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState({})

    useEffect(() => {
        const successHandler = (e: any) => {
            setLoading(false)
            setError(null)
            setData(e.coords)
        }
        const errorHandler = (e: any) => {
            setError(e)
            setLoading(false)
        }
        navigator.geolocation.getCurrentPosition(
            successHandler,
            errorHandler,
            options
        )
        const id = navigator.geolocation.watchPosition(
            successHandler,
            errorHandler,
            options
        )
        return () => navigator.geolocation.clearWatch(id)
    }, [options])

    return { loading, error, data }
}
