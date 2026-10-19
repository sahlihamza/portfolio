import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'portfolio-theme'

/** Résout le thème au chargement : localStorage > préférence système > sombre (défaut). */
function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return 'dark'
}

/**
 * Gère le thème clair/sombre : bascule la classe `dark` sur <html>
 * et mémorise le choix dans le localStorage.
 */
export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.style.colorScheme = theme
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggleTheme }
}
