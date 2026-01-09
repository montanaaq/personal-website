import { type ComponentType, lazy } from 'react'

const App = lazy(() => import('../screens/app/App'))
const InfoPage = lazy(() => import('../screens/info-page/Info'))
const NotFoundPage = lazy(() => import('../screens/NotFoundPage/NotFoundPage'))

interface IRoute {
  path: string
  Component: ComponentType
}

export const routes: IRoute[] = [
  { path: '/', Component: App },
  { path: '/info', Component: InfoPage },
  {
    path: '*',
    Component: NotFoundPage
  }
]
