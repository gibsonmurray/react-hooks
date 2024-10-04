import { useState, useCallback } from "react"

/**
 * `useStateValidation` is a custom React hook that validates a state value based on a given function.
 * It uses `useState` to store the state value and the validation result, and `useCallback` to create a function for updating the state.
 *
 * @param validationFunc - The function used to validate the state value.
 * @param initialValue - The initial value of the state.
 * @returns An array containing the state value, a function to update the state, and a boolean indicating if the state is valid.
 */
export default function useStateValidation<T>(
    validationFunc: (value: T) => boolean,
    initialValue: T
) {
    const [state, setState] = useState(initialValue)
    const [isValid, setIsValid] = useState(() => validationFunc(state))

    const onChange = useCallback(
        (nextState: T) => {
            const value =
                typeof nextState === "function" ? nextState(state) : nextState
            setState(value)
            setIsValid(validationFunc(value))
        },
        [validationFunc]
    )

    return [state, onChange, isValid]
}
