import { lazy, ComponentType } from 'react'

const App = lazy(() => import('../Components/Screens/Homepage/App/App'))
const InfoPage = lazy(() => import('../Components/Screens/InfoPage/Info'))
const IdePage = lazy(() => import('../Components/Screens/IDEPage/IdePage'))
const MusicPage = lazy(
  () => import('../Components/Screens/MusicPage/MusicPage')
)

interface IRoute {
  path: string
  Component: ComponentType
}

export const routes: IRoute[] = [
  { path: '/', Component: App },
  { path: '/info', Component: InfoPage },
  { path: '/ide', Component: IdePage },
  { path: '/music', Component: MusicPage }
]
