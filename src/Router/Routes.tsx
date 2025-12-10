import { type ComponentType, lazy } from 'react'

const App = lazy(() => import('../Components/Screens/Homepage/App/App'))
const InfoPage = lazy(() => import('../Components/Screens/InfoPage/Info'))
const NotFoundPage = lazy(
  () => import('../Components/NotFoundPage/NotFoundPage')
)

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
