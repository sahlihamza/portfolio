import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowDownToLine, ArrowRight, Mail, Sparkles } from 'lucide-react'
import { useRef } from 'react'
import { profile } from '../data/profile'
import { useTypewriter } from '../hooks/useTypewriter'
import Particles from './Particles'
import SocialLinks from './SocialLinks'
import { useLanguage } from '../i18n/LanguageContext'
import { profileByLanguage } from '../i18n/localizedContent'

const FLOATING_CHIPS = [
  { label: 'React', className: 'left-[-6%] top-[12%]', delay: '0s' },
  { label: 'NestJS', className: 'right-[-4%] top-[26%]', delay: '0.6s' },
  { label: 'Docker', className: 'left-[-2%] bottom-[22%]', delay: '1.2s' },
  { label: 'IA / LLM', className: 'right-[2%] bottom-[12%]', delay: '1.8s' },
]

/** Section d'accueil : nom, titre animé, accroche, appels à l'action et photo. */
export default function Hero() {
  const { language, t } = useLanguage()
  const localizedProfile = { ...profile, ...profileByLanguage[language] }
  const { text } = useTypewriter(localizedProfile.roles)
  const sectionRef = useRef(null)

  // Parallaxe légère au défilement
  const { scrollY } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const photoY = useTransform(scrollY, [0, 700], [0, 70])
  const copyY = useTransform(scrollY, [0, 700], [0, -45])
  const fade = useTransform(scrollY, [0, 600], [1, 0.25])

  // Inclinaison 3D de la photo au survol
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const tiltX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 150,
    damping: 20,
  })
  const tiltY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 150,
    damping: 20,
  })

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <section
      id="accueil"
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      <Particles />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 h-96 w-96 animate-pulse rounded-full bg-cyan-500/20 blur-[120px] dark:bg-cyan-500/25"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-[26rem] w-[26rem] animate-pulse rounded-full bg-violet-500/20 blur-[130px] [animation-delay:1.5s] dark:bg-violet-500/25"
      />

      <motion.div
        style={{ y: copyY, opacity: fade }}
        className="section relative z-10 grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]"
      >
        <div>
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            <Sparkles size={13} />
            {localizedProfile.availability}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="mt-6 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl"
          >
            <span className="block text-slate-500 dark:text-slate-400">{t('hero.greeting')}</span>
            <span className="gradient-text mt-1 block animate-gradient-pan bg-[length:200%_auto]">
              {profile.name}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16 }}
            className="mt-5 flex min-h-[2.2rem] flex-wrap items-center gap-2 font-display text-lg font-medium sm:text-2xl"
          >
            <span className="text-slate-600 dark:text-slate-300">{text}</span>
            <span
              aria-hidden="true"
              className="inline-block h-6 w-[3px] animate-blink rounded-full bg-cyan-400"
            />
            <span className="sr-only">{localizedProfile.roles.join(', ')}</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400"
          >
            {localizedProfile.pitch}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.32 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <motion.a
              href="#projets"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary"
            >
              {t('hero.projects')}
              <ArrowRight size={16} />
            </motion.a>
            <motion.a
              href={profile.cv}
              download
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="btn-ghost"
            >
              <ArrowDownToLine size={16} />
              {t('hero.cv')}
            </motion.a>
            <motion.a
              href={`mailto:${profile.email}`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="btn-ghost"
            >
              <Mail size={16} />
              {t('hero.contact')}
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-5"
          >
            <SocialLinks />
            <span className="text-xs text-slate-500 dark:text-slate-500">{localizedProfile.location}</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ y: photoY }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-8 animate-pulse rounded-[2.5rem] bg-accent-gradient opacity-25 blur-3xl"
          />
          <motion.div
            onMouseMove={handleMove}
            onMouseLeave={() => {
              mouseX.set(0)
              mouseY.set(0)
            }}
            style={{ rotateX: tiltX, rotateY: tiltY, transformPerspective: 1000 }}
            className="relative rounded-[2rem] border border-slate-200/80 bg-white/60 p-2.5 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
          >
            <img
              src={profile.photo}
              alt={t('hero.portraitAlt')}
              width="900"
              height="900"
              className="aspect-square w-full rounded-[1.6rem] object-cover"
            />
          </motion.div>

          {FLOATING_CHIPS.map((chip) => (
            <motion.span
              key={chip.label}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + parseFloat(chip.delay) }}
              style={{ animationDelay: chip.delay }}
              className={`absolute animate-float rounded-xl border border-slate-200/80 bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-lg backdrop-blur dark:border-white/10 dark:bg-slate-900/85 dark:text-slate-200 ${chip.className}`}
            >
              {chip.label}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#apropos"
        aria-label={t('hero.scrollAbout')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-slate-400 transition-colors hover:text-cyan-500 lg:block"
      >
        <span className="flex flex-col items-center gap-1 text-[11px] uppercase tracking-[0.2em]">
          {t('hero.scroll')}
          <motion.span
            animate={{ scaleY: [1, 0.4, 1], originY: 0 }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="h-8 w-px bg-gradient-to-b from-cyan-400 to-transparent"
          />
        </span>
      </motion.a>
    </section>
  )
}
