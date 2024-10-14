/**
 * `useMediaQuery` is a custom React hook that checks if a media query matches the current window.
 * It uses `useEffect` to set up the media query and `useEventListener` to listen for changes to the media query.
 *
 * @param mediaQuery - The media query string to check.
 * @returns The boolean state indicating if the media query matches the current window.
 */
export declare function useMediaQuery(mediaQuery: string): boolean;
