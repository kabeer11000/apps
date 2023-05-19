import React, { lazy, Suspense } from 'react';

const LazyApplicationListItem = lazy(() => import('./ApplicationListItem'));

const ApplicationListItem = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyApplicationListItem {...props} />
  </Suspense>
);

export default ApplicationListItem;
