import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)

function getInitialLanguage() {
  if (typeof window === 'undefined') return 'fr'
  const saved = window.localStorage.getItem('portfolio-language')
  if (saved === 'fr' || saved === 'en') return saved
  return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'fr'
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = language
    window.localStorage.setItem('portfolio-language', language)
    document.title = language === 'en'
      ? 'Sahli Hamza — Full Stack Developer, AI & DevOps'
      : 'Sahli Hamza — Développeur Full Stack, IA & DevOps'
    const description = document.querySelector('meta[name="description"]')
    const ogTitle = document.querySelector('meta[property="og:title"]')
    const ogDescription = document.querySelector('meta[property="og:description"]')
    const ogLocale = document.querySelector('meta[property="og:locale"]')
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    const twitterDescription = document.querySelector('meta[name="twitter:description"]')
    const title = language === 'en'
      ? 'Sahli Hamza — Full Stack Developer, AI & DevOps'
      : 'Sahli Hamza — Développeur Full Stack, IA & DevOps'
    const summary = language === 'en'
      ? 'Full Stack applications, AI (chatbots, recommendations, predictive scoring), and DevOps pipelines. Seeking a 2026–2027 final-year internship.'
      : 'Applications web complètes, IA (chatbots, recommandation, scoring prédictif) et chaîne DevOps. Recherche un PFE 2026-2027.'

    if (description) {
      description.content = language === 'en'
        ? 'Portfolio of Sahli Hamza, Full Stack Developer focused on AI and DevOps, seeking a final-year internship in 2026–2027.'
        : 'Portfolio de Sahli Hamza, développeur Full Stack orienté IA et DevOps, à la recherche d’un stage de fin d’études en 2026–2027.'
    }
    if (ogTitle) ogTitle.content = title
    if (ogDescription) ogDescription.content = summary
    if (ogLocale) ogLocale.content = language === 'en' ? 'en_US' : 'fr_FR'
    if (twitterTitle) twitterTitle.content = title
    if (twitterDescription) twitterDescription.content = summary
  }, [language])

  const value = useMemo(() => ({
    language,
    setLanguage,
    toggleLanguage: () => setLanguage((current) => current === 'fr' ? 'en' : 'fr'),
    t: (key, params = {}) => {
      let value = translations[language][key] ?? translations.fr[key] ?? key
      Object.entries(params).forEach(([name, replacement]) => {
        value = value.replaceAll(`{${name}}`, String(replacement))
      })
      return value
    },
  }), [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}
