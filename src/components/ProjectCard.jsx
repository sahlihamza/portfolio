import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Github, Images, Maximize2 } from 'lucide-react'
import ProjectArtwork from './ProjectArtwork'
import ProjectLightbox from './ProjectLightbox'
import { useLanguage } from '../i18n/LanguageContext'

/** Carte projet : galerie de captures, description, technologies et liens. */
export default function ProjectCard({ project, index = 0 }) {
  const { t } = useLanguage()
  const { title, summary, stack, github, demo, image, images = [], accent, period, highlights = [] } = project

  // Une seule image reste gérée : `image` sert de repli si `images` est vide.
  const gallery = images.length ? images : image ? [image] : []
  const [active, setActive] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const current = gallery[active]

  const openLightbox = (index = 0) => {
    setActive(index)
    setLightboxOpen(true)
  }

  return (
    <>
      <motion.article
        layout
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.3), ease: [0.22, 1, 0.36, 1] }}
        className="glass card-hover group relative flex h-full flex-col overflow-hidden rounded-2xl"
      >
        {/* Halo animé au survol */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(420px circle at 50% 0%, rgba(34,211,238,0.14), transparent 65%)',
          }}
        />

        <div
          className={`relative aspect-[16/10] overflow-hidden bg-slate-950 ${
            gallery.length > 1 ? 'cursor-zoom-in' : ''
          }`}
          onClick={gallery.length > 1 ? () => openLightbox(active) : undefined}
          onKeyDown={
            gallery.length > 1
              ? (event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    openLightbox(active)
                  }
                }
              : undefined
          }
          role={gallery.length > 1 ? 'button' : undefined}
          tabIndex={gallery.length > 1 ? 0 : undefined}
          aria-label={gallery.length > 1 ? t('projects.openGallery', { title }) : undefined}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={current ?? 'artwork'}
              src={current}
              alt={current ? t('projects.preview', { title }) : ''}
              loading="lazy"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className={`absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.07] ${project.id === 'hirehub' ? 'object-contain p-2' : 'object-cover'}`}
            />
          </AnimatePresence>

          {!current && <ProjectArtwork title={title} accent={accent} />}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/70 to-transparent"
          />

          {period && (
            <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-slate-950/60 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
              {period}
            </span>
          )}

          {gallery.length > 1 && (
            <>
              <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-slate-950/60 px-2.5 py-1 text-[11px] font-semibold tabular-nums text-white backdrop-blur">
                {active + 1}/{gallery.length}
              </span>

              {/* Survol : bouton d'agrandissement */}
              <span className="absolute inset-0 flex items-center justify-center bg-slate-950/50 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                <span className="flex items-center gap-2 rounded-xl border border-white/20 bg-slate-900/80 px-4 py-2.5 text-sm font-semibold text-white shadow-lg">
                  <Maximize2 size={16} />
                  {t('projects.viewCaptures', { count: gallery.length })}
                </span>
              </span>
            </>
          )}
        </div>

        {gallery.length > 1 && (
          <div className="flex items-center gap-2 overflow-x-auto px-6 pt-4">
            {gallery.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setActive(i)}
                aria-label={t('projects.showCapture', { number: i + 1, title })}
                aria-current={i === active ? 'true' : undefined}
                className={`h-11 w-16 shrink-0 overflow-hidden rounded-lg border transition-all duration-200 ${
                  i === active
                    ? 'border-cyan-400 ring-2 ring-cyan-400/40'
                    : 'border-slate-200 opacity-60 hover:opacity-100 dark:border-white/10'
                }`}
              >
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
              </button>
            ))}
            <button
              type="button"
              onClick={() => openLightbox(active)}
              className="ml-auto inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 py-1.5 text-[11px] font-semibold text-slate-600 transition-colors hover:border-cyan-400 hover:text-cyan-600 dark:border-white/10 dark:text-slate-300 dark:hover:text-cyan-300"
            >
              <Images size={13} />
              {t('projects.gallery')}
            </button>
          </div>
        )}

        <div className="flex flex-1 flex-col gap-4 p-6">
          <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-300">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{summary}</p>

          {highlights.length > 0 && (
            <ul className="flex flex-wrap gap-2">
              {highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-2.5 py-1 text-[11px] font-medium text-cyan-600 transition-transform duration-200 hover:scale-105 dark:text-cyan-300"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          )}

          <ul className="flex flex-wrap gap-1.5">
            {stack.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 transition-colors hover:text-cyan-500 dark:text-slate-200 dark:hover:text-cyan-300"
              >
                <Github size={16} />
                Code
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-600 transition-colors hover:text-cyan-400 dark:text-cyan-300"
              >
                {t('projects.demo')}
                <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>
      </motion.article>

      {/* Galerie plein écran */}
      <AnimatePresence>
        {lightboxOpen && (
          <ProjectLightbox
            project={project}
            startIndex={active}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
