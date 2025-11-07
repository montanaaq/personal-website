import { FC } from 'react'
// import Snowfall from 'react-snowfall' // only on christmas ☃️
import Circles from '../../../Backgrounds/Circles/Circles.tsx'
import DarkVeils from '../../../Backgrounds/DarkVeils/DarkVeils.tsx'
import ViewPage from './ViewPage.tsx'
import useIsDesktop from '../../../../hooks/useIsDesktop.ts'

const App: FC = () => {
  const isDesktop = useIsDesktop()
  return (
    <div className="App">
      {isDesktop ? (
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
          <DarkVeils />
          <ViewPage />
        </div>
      ) : (
        <Circles>
          <ViewPage />
        </Circles>
      )}
    </div>
  )
}
export default App
