import { FC, Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';

import { routes } from './Routes';
import LoadingFallback from './LoadingFallback';

const Router: FC = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        {routes.map((route, index) => {
          const { Component } = route
          return <Route key={index} path={route.path} element={<Component />} />
        })}
      </Routes>
    </Suspense>
  )
}

export default Router
