import { type FC, Suspense } from 'react'

import { Route, Routes } from 'react-router'
import LoadingFallback from './LoadingFallback'
import { routes } from './Routes'

const Router: FC = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        {routes.map(route => {
          const { Component } = route
          return (
            <Route key={route.path} path={route.path} element={<Component />} />
          )
        })}
      </Routes>
    </Suspense>
  )
}

export default Router
