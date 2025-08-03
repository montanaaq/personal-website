import React, { createContext, useContext, useState, ReactNode } from 'react'
import { translations, Translations } from '../locales/translations'

interface LanguageContextType {
  language: string
  t: Translations
  setLanguage: (lang: string) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children
}) => {
  const [language, setLanguageState] = useState(() => {
    const savedLanguage = localStorage.getItem('language')
    return savedLanguage || 'ru'
  })

  const setLanguage = (lang: string) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const t = translations[language] || translations.ru

  const value = {
    language,
    t,
    setLanguage
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
