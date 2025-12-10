import type { FC } from 'react'
import { createContext, type ReactNode, useState } from 'react'

import { type Translations, translations } from '../locales/translations'

type Language = 'en' | 'ru'

interface LanguageContextType {
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

export const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
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
    } catch (e) {
      console.log(`Cannot store language to localStorage: ${e}`)
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
