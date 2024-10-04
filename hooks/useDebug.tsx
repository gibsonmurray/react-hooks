import { useEffect, useRef } from "react"
import useRenderCount from "./useRenderCount"

/**
 * `useDebug` is a custom React hook that provides debugging information about a component's props and renders.
 * It logs the component name, the number of times the component has rendered, the changed properties,
 * the time since the last render, and the timestamp of the last render.
 *
 * @param componentName - The name of the component to debug.
 * @param props - The props of the component to debug.
 */
export default function useDebug(componentName: string, props: any) {
    const count = useRenderCount()
    const changedProps = useRef({})
    const previousProps = useRef(props)
    const lastRenderTimestamp = useRef(Date.now())

    const propKeys = Object.keys({ ...props, ...previousProps })
    changedProps.current = propKeys.reduce((obj, key) => {
        if (props[key] === previousProps.current[key]) return obj
        return {
            ...obj,
            [key]: {
                previous: previousProps.current[key],
                current: props[key],
            },
        }
    }, {})
    const info = {
        count,
        changedProps: changedProps.current,
        timeSinceLastRender: Date.now() - lastRenderTimestamp.current,
        lastRenderTimestamp: lastRenderTimestamp.current,
    }

    useEffect(() => {
        previousProps.current = props
        lastRenderTimestamp.current = Date.now()
        console.log("[debug-info]", componentName, info)
    })

    return info
}
