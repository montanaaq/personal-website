import { ReactElement } from 'react'

import App from '../Components/Screens/Homepage/App/App'
import InfoPage from '../Components/Screens/InfoPage/Info'
import IdePage from '../Components/Screens/IDEPage/IdePage'
import MusicPage from '../Components/Screens/MusicPage/MusicPage'

interface IRoute {
  path: string
  element: ReactElement
}

export const routes: IRoute[] = [
  { path: '/', element: <App /> },
  { path: '/info', element: <InfoPage /> },
  { path: '/ide', element: <IdePage /> },
  { path: '/music', element: <MusicPage /> }
]
