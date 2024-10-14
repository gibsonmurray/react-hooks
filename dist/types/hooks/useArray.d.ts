/**
 * `useArray` is a custom React hook that manages an array state and provides functions to manipulate it.
 * It simplifies the process of managing dynamic lists by providing methods to add, filter, update, remove, and clear elements.
 *
 * @param defaultValue - The initial array to set as the state.
 * @returns An object containing the array, a set function to update the array, and methods to add, filter, update, remove, and clear elements.
 */
export declare function useArray<T>(defaultValue: T[]): {
    array: T[];
    set: import("react").Dispatch<import("react").SetStateAction<T[]>>;
    push: (element: T) => void;
    filter: (callback: (element: T) => boolean) => void;
    update: (index: number, newElement: T) => void;
    remove: (index: number) => void;
    clear: () => void;
};
