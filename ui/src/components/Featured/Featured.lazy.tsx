import React, { lazy, Suspense } from 'react';

const LazyFeatured = lazy(() => import('./Featured'));

const Featured = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFeatured {...props} />
  </Suspense>
);

export default Featured;
