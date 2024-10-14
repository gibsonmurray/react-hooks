/**
 * `useWindowSize` is a custom React hook that monitors the size of the browser window.
 * It uses `useState` to store the window size and `useEventListener` to update the size when the window is resized.
 *
 * @returns An object containing the current width and height of the window.
 */
export declare function useWindowSize(): {
    width: number;
    height: number;
};
