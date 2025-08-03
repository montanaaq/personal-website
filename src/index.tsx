import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'
import { LanguageProvider } from './contexts/LanguageContext'
import Header from './Components/Screens/Homepage/Header/Header'
import './index.css'
import Router from './Router/Router'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <Header />
        <Router />
        <Toaster
          richColors
          position="bottom-left"
          expand
          offset={80}
          closeButton
          duration={3000}
          toastOptions={{
            style: {
              minHeight: '40px',
              padding: '12px 16px',
              fontSize: '12px',
              lineHeight: '1.3'
            }
          }}
        />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
)
