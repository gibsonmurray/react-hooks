/**
 * `useDebug` is a custom React hook that provides debugging information about a component's props and renders.
 * It logs the component name, the number of times the component has rendered, the changed properties,
 * the time since the last render, and the timestamp of the last render.
 *
 * @param componentName - The name of the component to debug.
 * @param props - The props of the component to debug.
 */
export declare function useDebug(componentName: string, props: any): {
    count: number;
    changedProps: {};
    timeSinceLastRender: number;
    lastRenderTimestamp: number;
};
