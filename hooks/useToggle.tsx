import { useState } from "react"

/**
 * `useToggle` is a custom React hook that manages a boolean state.
 * It uses `useState` to store the state value and provides a function to toggle the value.
 *
 * @param defaultValue - The initial value of the state.
 * @returns An array containing the state value and a function to toggle the value, the function also accepts a boolean value to set the state to.
 */
export function useToggle(defaultValue: boolean) {
    const [value, setValue] = useState(defaultValue)

    function toggleValue(value: boolean) {
        setValue((currentValue) =>
            typeof value === "boolean" ? value : !currentValue
        )
    }

    return [value, toggleValue]
}
