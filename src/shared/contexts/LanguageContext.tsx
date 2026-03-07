import type { FC } from 'react'
import { createContext, type ReactNode, useState } from 'react'

import { type Translations, translations } from '@/shared/locales/translations'

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

  function loadLanguage(): Language {
    try {
      const saved = localStorage.getItem('language')
      if (isLanguage(saved)) return saved
    } catch {
      console.log('Cannot load language from localStorage')
    }
    return 'ru'
  }

  const [language, setLanguageState] = useState<Language>(loadLanguage)

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
