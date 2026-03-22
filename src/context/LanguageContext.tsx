import { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type Language = 'es' | 'en'

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
}

const STORAGE_KEY = 'portfolio-language'

const LanguageContext = createContext<LanguageContextType | null>(null)

const detectLanguage = (): Language => {
  if (typeof window === 'undefined') {
    return 'es'
  }

  const browserLanguage = window.navigator.language.toLowerCase()
  return browserLanguage.startsWith('es') ? 'es' : 'en'
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('es')

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem(STORAGE_KEY)
    if (storedLanguage === 'es' || storedLanguage === 'en') {
      setLanguage(storedLanguage)
      return
    }

    setLanguage(detectLanguage())
  }, [])

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((prev) => (prev === 'es' ? 'en' : 'es')),
    }),
    [language]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider')
  }

  return context
}
