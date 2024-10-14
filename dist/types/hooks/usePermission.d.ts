export type PermissionName = "geolocation" | "notifications" | "push" | "microphone" | "camera" | "speaker" | "device-info" | "background-sync" | "bluetooth" | "persistent-storage" | "ambient-light-sensor" | "accelerometer" | "gyroscope" | "magnetometer" | "clipboard-read" | "clipboard-write" | "payment-handler" | "unknown-permission" | string;
export interface PermissionState {
    state: PermissionStatus["state"] | "prompt";
    isLoading: boolean;
    error: string | null;
}
/**
 * `usePermission` is a hook for querying permission status for various browser APIs.
 * It supports querying permissions like geolocation, notifications, camera, microphone, etc.
 *
 * @param permissionName - The name of the permission to query.
 * @return - An object containing the permission state, loading status, and error information.
 */
export declare function usePermission(permissionName: PermissionName): PermissionState;
