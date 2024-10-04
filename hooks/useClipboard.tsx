import { useState } from "react"
import copy from "copy-to-clipboard"

/**
 * `useClipboard` is a custom React hook that provides functionality to copy text to the clipboard.
 * It simplifies the process of handling clipboard operations by managing the state of the copied text and the success status.
 *
 * @returns An array containing the `copyToClipboard` function and an object with the `value` and `success` states.
 */
export default function useClipboard() {
    const [value, setValue] = useState<string | null>(null)
    const [success, setSuccess] = useState<boolean | null>(null)

    const copyToClipboard = (text: string, options: any) => {
        const result = copy(text, options)
        if (result) setValue(text)
        setSuccess(result)
    }

    return [copyToClipboard, { value, success }]
}
