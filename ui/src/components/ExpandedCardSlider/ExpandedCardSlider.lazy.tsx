import React, { lazy, Suspense } from 'react';

const LazyExpandedCardSlider = lazy(() => import('./ExpandedCardSlider'));

const ExpandedCardSlider = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyExpandedCardSlider {...props} />
  </Suspense>
);

export default ExpandedCardSlider;
