import { type RefObject } from "react";
export interface OrientationState {
    angle: number;
    type: "landscape-primary" | "landscape-secondary" | "portrait-primary" | "portrait-secondary" | undefined;
    aspectRatio?: number;
    elementOrientation?: "landscape" | "portrait";
}
/**
 * `useOrientation` is a versatile hook that provides real-time information about the orientation
 * of a device or a specific HTML element. It returns the orientation angle and type for the device,
 * and if an element reference is provided, it also offers the aspect ratio and orientation (portrait or landscape)
 * of that element.
 *
 * @param elementRef - (Optional) A React ref to an HTML element to track its orientation and aspect ratio.
 * @param trackWindow - (Optional) If true, tracks the device's window orientation instead of an element's orientation.
 * @return - An object containing the orientation angle, type, aspect ratio, and element orientation.
 */
export declare function useOrientation<T extends HTMLElement>(elementRef?: RefObject<T>, trackWindow?: boolean): OrientationState;