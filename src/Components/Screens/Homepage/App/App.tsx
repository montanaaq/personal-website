import type { FC } from 'react'
import Snowfall from 'react-snowfall' // only on christmas ☃️
import useIsChristmas from '../../../../hooks/useIsChristmas.ts'
import useIsDesktop from '../../../../hooks/useIsDesktop.ts'
import Circles from '../../../Backgrounds/Circles/Circles.tsx'
// import DarkVeil from '../../../Backgrounds/DarkVeils/DarkVeils.tsx'
import ViewPage from './ViewPage.tsx'

const App: FC = () => {
  const isDesktop = useIsDesktop()
  const isChristmas = useIsChristmas()
  const showCircles = !isDesktop && !isChristmas

  const content = (
    <>
      <ViewPage />
      {isChristmas && <Snowfall />}
    </>
  )

  return (
    <div className="App">
      {isDesktop ? (
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
          {content}
        </div>
      ) : showCircles ? (
        <Circles>{content}</Circles>
      ) : (
        content
      )}
    </div>
  )
}

export default App
