import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'
import { LanguageProvider } from './contexts/LanguageContext'
import Router from './Router/Router'

import './index.css'

import Header from './Components/Screens/Homepage/Header/Header'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <Header />
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
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
)
