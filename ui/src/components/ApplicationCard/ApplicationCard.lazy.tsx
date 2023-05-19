import React, { lazy, Suspense } from 'react';

const LazyApplicationCard = lazy(() => import('./ApplicationCard'));

const ApplicationCard = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyApplicationCard {...props} />
  </Suspense>
);

export default ApplicationCard;
