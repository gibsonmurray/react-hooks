import { type RefObject } from "react";
export interface UseImageLoadOptions {
    thumbnailSrc: string;
    fullSrc: string;
    lazyLoad?: boolean;
}
export interface UseImageLoadState {
    src: string;
    isLoading: boolean;
    isLoaded: boolean;
    hasError: boolean;
}
/**
 * `useImageLoad` is a hook for managing the loading of images, especially useful for progressive image loading and lazy loading.
 * It tracks the loading state, loaded state, and any errors for a given image source.
 *
 * @param options - The options object containing `thumbnailSrc`, `fullSrc`, and an optional `lazyLoad` flag.
 * @return - An object containing the current source of the image, loading state, loaded state, and error state.
 */
export declare function useImageLoad({ thumbnailSrc, fullSrc, lazyLoad }: UseImageLoadOptions, imgRef: RefObject<HTMLImageElement>): UseImageLoadState;
