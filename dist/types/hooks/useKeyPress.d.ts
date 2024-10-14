/**
 * `useKeyPress` is a hook that tracks if a specified key is being pressed.
 * It's useful for handling keyboard shortcuts or navigation.
 *
 * @param targetKey - The key to monitor.
 * @param options - (Optional) Additional options including debounce timing and global scope setting.
 * @return - A boolean state indicating if the target key is currently pressed.
 */
export declare function useKeyPress(targetKey: string, options?: {
    debounce?: number;
    targetElement?: EventTarget | null;
}): boolean;
