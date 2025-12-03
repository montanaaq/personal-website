import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { Toaster } from 'sonner'
import { LanguageProvider } from './contexts/LanguageContext'
import Router from './Router/Router'

import './index.css'

import Footer from './Components/Screens/Homepage/Footer/Footer'
import Header from './Components/Screens/Homepage/Header/Header'

const Layout = () => {
  const location = useLocation()
  const is404Page =
    location.pathname === '/404' ||
    !['/', '/info', '/music', '/ide'].includes(location.pathname)

  return (
    <>
      {!is404Page && <Header />}
      <Router />
      <Toaster
        theme="system"
        position="bottom-left"
        closeButton
        duration={3000}
        toastOptions={{
          style: {
            minHeight: '40px',
            padding: '12px 16px',
            lineHeight: '1.3'
          }
        }}
      />
      {!is404Page && <Footer />}
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <Layout />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
)
