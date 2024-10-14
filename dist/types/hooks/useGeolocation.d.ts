/**
 * `useGeolocation` is a custom React hook that provides access to the user's geolocation.
 * It uses `useEffect` to get the current position and `useState` to manage the loading, error, and data states.
 *
 * @param options - The options for the geolocation request.
 * @returns An object containing the `loading`, `error`, and `data` states.
 */
export declare function useGeolocation(options: PositionOptions): {
    loading: boolean;
    error: null;
    data: {};
};
