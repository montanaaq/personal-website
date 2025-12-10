import {
  type ComponentType,
  type LazyExoticComponent,
  lazy,
  type ReactElement,
  Suspense
} from 'react'
import type { RouteObject } from 'react-router'
import LoadingFallback from './LoadingFallback'

const withSuspense = (
  Component: LazyExoticComponent<ComponentType>
): ReactElement => (
  <Suspense fallback={<LoadingFallback />}>
    <Component />
  </Suspense>
)

const App = lazy(() => import('../Components/Screens/Homepage/App/App'))
const InfoPage = lazy(() => import('../Components/Screens/InfoPage/Info'))
const NotFoundPage = lazy(
  () => import('../Components/NotFoundPage/NotFoundPage')
)

export const routes: RouteObject[] = [
  {
    path: '/',
    element: withSuspense(App)
  },
  {
    path: '/info',
    element: withSuspense(InfoPage)
  },

  {
    path: '*',
    Component: NotFoundPage
  }
]
