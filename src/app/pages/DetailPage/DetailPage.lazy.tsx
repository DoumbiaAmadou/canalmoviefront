import React, { lazy, Suspense } from "react";

const LazyDetailPage = lazy(() => import("./DetailPage"));

const DetailPage = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode },
) => (
  <Suspense fallback={null}>
    <LazyDetailPage {...props} />
  </Suspense>
);

export default DetailPage;
