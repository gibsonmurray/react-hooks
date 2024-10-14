/**
 * `useCookie` is a custom React hook that provides functionality to manage cookies.
 * It simplifies the process of reading, updating, and deleting cookies by managing the state of the cookie value.
 *
 * @param name - The name of the cookie.
 * @param defaultValue - The default value to set if the cookie is not found.
 * @returns An array containing the cookie value, a function to update the cookie, and a function to delete the cookie.
 */
export declare function useCookie(name: string, defaultValue?: any): any[];
