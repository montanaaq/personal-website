// File: src/contexts/LanguageContext.tsx
import React, { createContext, ReactNode, useState } from 'react'
import { translations, Translations } from '../locales/translations'

export type Language = 'en' | 'ru'

export interface LanguageContextType {
  language: Language
  t: Translations
  setLanguage: (lang: Language) => void
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
)

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children
}) => {
  const isLanguage = (v: unknown): v is Language => v === 'en' || v === 'ru'

  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('language')
      return isLanguage(saved) ? saved : 'ru'
    } catch {
      return 'ru'
    }
  })

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    try {
      localStorage.setItem('language', lang)
    } catch {
      // ignore localStorage errors
    }
  }

  const t = translations[language] ?? translations.ru

  const value: LanguageContextType = {
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
