/**
 * `useClipboard` is a custom React hook that provides functionality to copy text to the clipboard.
 * It simplifies the process of handling clipboard operations by managing the state of the copied text and the success status.
 *
 * @returns An array containing the `copyToClipboard` function and an object with the `value` and `success` states.
 */
export declare function useClipboard(): (((text: string, options: any) => void) | {
    value: string | null;
    success: boolean | null;
})[];
