import { useState, useCallback } from "react"
import Cookies from "js-cookie"

/**
 * `useCookie` is a custom React hook that provides functionality to manage cookies.
 * It simplifies the process of reading, updating, and deleting cookies by managing the state of the cookie value.
 *
 * @param name - The name of the cookie.
 * @param defaultValue - The default value to set if the cookie is not found.
 * @returns An array containing the cookie value, a function to update the cookie, and a function to delete the cookie.
 */
export default function useCookie(name: string, defaultValue: any = "") {
    const [value, setValue] = useState(() => {
        const cookie = Cookies.get(name)
        if (cookie) return cookie
        Cookies.set(name, defaultValue)
        return defaultValue
    })

    const updateCookie = useCallback(
        (newValue: any, options: any) => {
            Cookies.set(name, newValue, options)
            setValue(newValue)
        },
        [name]
    )

    const deleteCookie = useCallback(() => {
        Cookies.remove(name)
        setValue(null)
    }, [name])

    return [value, updateCookie, deleteCookie]
}
