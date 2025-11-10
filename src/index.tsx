import React from 'react'

import { Toaster } from 'sonner'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import Router from './Router/Router'

import { LanguageProvider } from './contexts/LanguageContext'

import './index.css'

import Header from './Components/Screens/Homepage/Header/Header'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
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
              fontSize: '12px',
              lineHeight: '1.3'
            }
          }}
        />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
)
