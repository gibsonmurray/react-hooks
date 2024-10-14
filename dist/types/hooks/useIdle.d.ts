/**
 * `useIdle` is a hook that determines if the user is idle based on lack of specific activities (e.g., mouse movement, key presses).
 * It's useful for scenarios like auto-logging out users after a period of inactivity.
 *
 * @param idleTime - The duration in milliseconds after which the user is considered idle.
 * @return - A boolean state indicating if the user is idle.
 */
export declare function useIdle(idleTime: number): boolean;
