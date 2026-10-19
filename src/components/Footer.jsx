import { Heart } from 'lucide-react'
import { profile } from '../data/profile'
import SocialLinks from './SocialLinks'
import { useLanguage } from '../i18n/LanguageContext'
import { profileByLanguage } from '../i18n/localizedContent'

/** Pied de page simple. */
export default function Footer() {
  const { language, t } = useLanguage()
  return (
    <footer className="border-t border-slate-200/80 py-10 dark:border-white/10">
      <div className="section flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-sm font-semibold text-slate-900 dark:text-white">
            {profile.name}
          </p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            {profileByLanguage[language].role}
          </p>
        </div>

        <SocialLinks iconSize={16} />

        <p className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} — {t('footer.madeWith')}{' '}
          <Heart size={13} className="text-rose-500" aria-hidden="true" />
          <span className="sr-only">{t('footer.and')}</span> React, Tailwind &amp; Framer Motion
        </p>
      </div>
    </footer>
  )
}
