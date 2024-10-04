import { useEffect, useRef } from "react"
import isEqual from "lodash/fp/isEqual"

/**
 * `useDeepEffect` is a custom React hook that runs a callback function when the dependencies change.
 * It uses `useRef` to store the current dependencies and `isEqual` from `lodash` to compare the current and previous dependencies.
 * If the dependencies have changed, it updates the current dependencies and runs the callback.
 *
 * @param callback - The function to be executed when the dependencies change.
 * @param dependencies - An array of dependencies that trigger the execution of the callback.
 */
export default function useDeepEffect(
    callback: () => void,
    dependencies: any[]
) {
    const currentDependenciesRef = useRef<any[]>([])

    if (!isEqual(currentDependenciesRef.current, dependencies)) {
        currentDependenciesRef.current = dependencies
    }

    useEffect(callback, [currentDependenciesRef.current])
}
