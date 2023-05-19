import React, { lazy, Suspense } from 'react';

const LazyCardSlider = lazy(() => import('./CardSlider'));

const CardSlider = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCardSlider {...props} />
  </Suspense>
);

export default CardSlider;
