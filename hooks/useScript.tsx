import { useAsync } from "./useAsync"

/**
 * `useScript` is a custom React hook that dynamically loads a script from a specified URL.
 * It uses `useAsync` to handle the asynchronous loading of the script and returns a promise.
 *
 * @param url - The URL of the script to load.
 * @returns A promise that resolves when the script is loaded.
 */
export function useScript(url: string) {
    return useAsync(() => {
        const script = document.createElement("script")
        script.src = url
        script.async = true

        return new Promise((resolve, reject) => {
            script.addEventListener("load", resolve)
            script.addEventListener("error", reject)
            document.body.appendChild(script)
        })
    }, [url])
}
