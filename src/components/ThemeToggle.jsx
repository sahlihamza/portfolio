import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

/** Bascule du thème clair / sombre. */
export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'
  const { t } = useLanguage()

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? t('theme.light') : t('theme.dark')}
      title={isDark ? t('theme.light') : t('theme.dark')}
      className="relative grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white/70 text-slate-600 transition-colors hover:border-cyan-400 hover:text-cyan-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-cyan-400/60 dark:hover:text-cyan-300"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -70, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 70, scale: 0.6 }}
          transition={{ duration: 0.25 }}
          className="absolute"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
