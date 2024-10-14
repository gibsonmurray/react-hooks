import { type EffectCallback, type DependencyList } from "react";
/**
 * `useUpdated` is a custom React hook that executes a callback when the dependencies change.
 * It uses `useRef` to store a flag indicating if it's the first render, and `useEffect` to execute the callback when the dependencies change.
 *
 * @param callback - The function to be executed when the dependencies change.
 * @param dependencies - The dependencies to watch for changes, if not provided, the hook will execute the callback on every render.
 */
export declare function useUpdated(callback: EffectCallback, dependencies?: DependencyList): void;
