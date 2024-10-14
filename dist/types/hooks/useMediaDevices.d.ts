export interface MediaDevice {
    id: string;
    kind: string;
    label: string;
}
export interface UseMediaDevicesState {
    devices: MediaDevice[];
    isLoading: boolean;
    error: string | null;
}
/**
 * `useMediaDevices` is a hook for accessing and listing media input and output devices like cameras, microphones, and speakers.
 * It provides a list of available devices, loading status, and any errors encountered.
 *
 * @return - An object containing the array of media devices, loading status, and error information.
 */
export declare function useMediaDevices(requestPermission?: boolean): UseMediaDevicesState;
