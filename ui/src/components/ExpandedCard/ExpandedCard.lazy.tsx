import React, { lazy, Suspense } from 'react';

const LazyExpandedCard = lazy(() => import('./ExpandedCard'));

const ExpandedCard = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyExpandedCard {...props} />
  </Suspense>
);

export default ExpandedCard;
