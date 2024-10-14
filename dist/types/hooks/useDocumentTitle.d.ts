/**
 * `useDocumentTitle` is a custom React hook that sets the document title.
 * It uses `useEffect` to update the document title and optionally reverts it on unmount.
 *
 * @param title - The title to set for the document.
 * @param revertOnUnmount - A boolean to determine if the document title should be reverted on unmount. Default is true.
 */
export declare function useDocumentTitle(title: string, revertOnUnmount?: boolean): void;
