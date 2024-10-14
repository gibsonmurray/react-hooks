export type EventHandler<E extends Event = Event> = (event: E) => void;
/**
 * `useEventListener` is a custom React hook that adds an event listener to a specified element.
 * It simplifies the process of handling events by managing the event listener and callback function.
 *
 * @param eventType - The type of event to listen for.
 * @param callback - The function to execute when the event occurs.
 * @param element - The element to add the event listener to. Default is the window.
 */
export declare function useEventListener<E extends Event = Event>(eventType: string, callback: EventHandler<E>, element?: any): void;
