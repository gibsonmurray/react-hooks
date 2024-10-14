/**
 * `useStateValidation` is a custom React hook that validates a state value based on a given function.
 * It uses `useState` to store the state value and the validation result, and `useCallback` to create a function for updating the state.
 *
 * @param validationFunc - The function used to validate the state value.
 * @param initialValue - The initial value of the state.
 * @returns An array containing the state value, a function to update the state, and a boolean indicating if the state is valid.
 */
export declare function useStateValidation<T>(validationFunc: (value: T) => boolean, initialValue: T): (boolean | T | ((nextState: T) => void))[];
