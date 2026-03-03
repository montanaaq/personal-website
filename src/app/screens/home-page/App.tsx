import type { FC } from 'react'
import Circles from '@/components/ui/backgrounds/Circles/Circles.tsx'
import ViewPage from './ViewPage'

const App: FC = () => {
  return (
    <div className="App">
      <Circles>
        <ViewPage />
      </Circles>
    </div>
  )
}

export default App
