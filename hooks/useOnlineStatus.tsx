import { useState } from "react"
import { useEventListener } from "./useEventListener"

/**
 * `useOnlineStatus` is a custom React hook that monitors the user's online status.
 * It uses `useState` to store the online status and `useEventListener` to listen for online and offline events.
 *
 * @returns The boolean state indicating if the user is online.
 */
export function useOnlineStatus() {
    const [online, setOnline] = useState(navigator.onLine)

    useEventListener("online", () => setOnline(navigator.onLine))
    useEventListener("offline", () => setOnline(navigator.onLine))

    return online
}
