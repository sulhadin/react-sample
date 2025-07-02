 import React, { lazy, Suspense, ComponentType, ReactNode } from 'react';

 export interface WithSuspenseProps {
    suspense?: ReactNode;
}

 export function withSuspense<T extends object>(
    importFn: () => Promise<{ default: ComponentType<T> }>,
    defaultFallback: ReactNode = <div>Loading...</div>
) {
     const LazyComponent = lazy(importFn);

     const WithSuspense = (props: T & WithSuspenseProps) => {
        const { suspense, ...componentProps } = props as WithSuspenseProps & any;
        const fallback = suspense || defaultFallback;

        return (
            <Suspense fallback={fallback}>
                <LazyComponent {...componentProps} />
            </Suspense>
        );
    };

    return WithSuspense;
}