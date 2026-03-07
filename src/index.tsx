import type { FC } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import Snowfall from 'react-snowfall' // only on christmas ☃️
import { Toaster } from 'sonner'
import Router from './app/router/Router.tsx'
import { LanguageProvider } from './shared/contexts/LanguageContext.tsx'

import './index.css'

import Header from './components/header/Header.tsx'
import { ThemeProvider } from './shared/contexts/ThemeContext.tsx'
import useIsChristmas from './shared/hooks/useIsChristmas.ts'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const ChristmasLayout: FC = () => {
  const isChristmas = useIsChristmas()

  return (
    isChristmas && (
      <Snowfall
        snowflakeCount={150}
        radius={[0.5, 1.5]}
        color="#dee4fd"
        speed={[1, 1.5]}
        wind={[-0.5, 0]}
      />
    )
  )
}

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <LanguageProvider>
        <Header />
        <ChristmasLayout />
        <Router />
        <Toaster theme="system" position="bottom-left" duration={2000} />
      </LanguageProvider>
    </ThemeProvider>
  </BrowserRouter>
)
