import type { FC } from 'react'
import Circles from '../../components/ui/backgrounds/Circles/Circles.tsx'
import useIsChristmas from '../../hooks/useIsChristmas.ts'
import useIsDesktop from '../../hooks/useIsDesktop.ts'
// import DarkVeil from '../../../Backgrounds/DarkVeils/DarkVeils.tsx'
import ViewPage from './ViewPage.tsx'

const App: FC = () => {
  const isDesktop = useIsDesktop()
  const isChristmas = useIsChristmas()
  const showCircles = !isDesktop && !isChristmas

  return (
    <div className="App">
      {isDesktop ? (
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
          <ViewPage />
        </div>
      ) : showCircles ? (
        <Circles>
          <ViewPage />
        </Circles>
      ) : (
        <ViewPage />
      )}
    </div>
  )
}

export default App
