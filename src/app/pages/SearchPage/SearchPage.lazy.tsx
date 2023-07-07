import React, { lazy, Suspense } from "react";

const LazySearchPage = lazy(() => import("./SearchPage"));

const SearchPage = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode },
) => (
  <Suspense fallback={null}>
    <LazySearchPage {...props} />
  </Suspense>
);

export default SearchPage;
