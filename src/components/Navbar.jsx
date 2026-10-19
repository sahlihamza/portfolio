import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Languages, Menu, X } from 'lucide-react'
import { profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { useLanguage } from '../i18n/LanguageContext'
import ThemeToggle from './ThemeToggle'

/** Barre de navigation fixe : effet au scroll, menu mobile, bascule de thème. */
export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()
  const navLinks = [
    { id: 'apropos', label: t('nav.about') },
    { id: 'competences', label: t('nav.skills') },
    { id: 'projets', label: t('nav.projects') },
    { id: 'parcours', label: t('nav.journey') },
    { id: 'contact', label: t('nav.contact') },
  ]
  const sectionIds = useMemo(() => navLinks.map((link) => link.id), [])
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Empêche le défilement de l'arrière-plan quand le menu mobile est ouvert.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/70 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-[#030712]/85'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="section flex h-16 items-center justify-between gap-4" aria-label={t('nav.main')}>
        <a href="#accueil" className="flex items-center gap-2.5" aria-label={t('nav.home')}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent-gradient font-display text-sm font-bold text-[#030712]">
            HS
          </span>
          <span className="hidden font-display text-sm font-semibold text-slate-900 sm:block dark:text-white">
            {profile.name}
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-cyan-600 dark:text-cyan-300'
                      : 'text-slate-600 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-300'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-lg bg-cyan-400/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={`${t('language.label')}: ${language === 'fr' ? 'English' : 'Français'}`}
            title={`${t('language.label')}: ${language === 'fr' ? 'English' : 'Français'}`}
            className="inline-flex h-10 items-center gap-1.5 rounded-xl border border-slate-200 bg-white/70 px-2.5 text-xs font-semibold text-slate-700 transition-colors hover:border-cyan-400 hover:text-cyan-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-cyan-300"
          >
            <Languages size={15} />
            <span>{language.toUpperCase()}</span>
          </button>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? t('nav.menuClose') : t('nav.menuOpen')}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white/70 text-slate-700 lg:hidden dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-slate-200/70 bg-white lg:hidden dark:border-white/10 dark:bg-[#030712]"
          >
            <ul className="section flex min-h-[calc(100vh-4rem)] flex-col gap-1 py-6">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3.5 text-base font-medium text-slate-600 transition-colors hover:bg-cyan-400/10 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
