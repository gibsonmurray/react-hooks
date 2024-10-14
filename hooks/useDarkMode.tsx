import { useEffect } from "react"
import { useMediaQuery } from "./useMediaQuery"
import { useLocalStorage } from "./useLocalStorage"

/**
 * `useDarkMode` is a custom React hook that manages the dark mode state of the application.
 * It uses `useLocalStorage` to store the dark mode preference and `useMediaQuery` to detect the user's system preference.
 * The `enabled` state is determined by the combination of the stored preference and the system preference.
 * The hook also updates the `dark-mode` class on the `document.body` to apply the dark mode styles.
 *
 * @returns An array containing the `enabled` state and a function to toggle the dark mode.
 */
export function useDarkMode() {
    const [darkMode, setDarkMode] = useLocalStorage("useDarkMode")
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
    const enabled = darkMode ?? prefersDarkMode

    useEffect(() => {
        document.body.classList.toggle("dark-mode", enabled)
    }, [enabled])

    return [enabled, setDarkMode]
}
