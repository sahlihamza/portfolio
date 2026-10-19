import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

/**
 * Galerie plein écran d'un projet.
 * - transition décalée (slide) selon le sens de navigation
 * - flèches clavier (← / →) et Échap pour fermer
 * - verrouillage du défilement de la page à l'ouverture
 */
const slideVariants = {
  enter: (direction) => ({ opacity: 0, x: direction > 0 ? 80 : -80, scale: 0.97 }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (direction) => ({ opacity: 0, x: direction > 0 ? -80 : 80, scale: 0.97 }),
}

export default function ProjectLightbox({ project, startIndex = 0, onClose }) {
  const images = project.images ?? []
  const [active, setActive] = useState(startIndex)
  const [direction, setDirection] = useState(1)

  const go = useCallback(
    (delta) => {
      if (!images.length) return
      setDirection(delta)
      setActive((index) => (index + delta + images.length) % images.length)
    },
    [images.length],
  )

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') go(1)
      if (event.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [go, onClose])

  if (!images.length) return null

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`Galerie du projet ${project.title}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex flex-col bg-slate-950/95 backdrop-blur-md"
      onClick={onClose}
    >
      {/* Barre supérieure */}
      <div className="relative z-10 flex items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <div>
          <p className="font-display text-base font-semibold text-white sm:text-lg">{project.title}</p>
          <p className="text-xs text-slate-400">
            Capture {active + 1} sur {images.length}
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer la galerie"
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/5 text-slate-200 transition-colors hover:border-cyan-400/60 hover:text-cyan-300"
        >
          <X size={18} />
        </button>
      </div>

      {/* Image principale */}
      <div
        className="relative z-10 flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20"
        onClick={(event) => event.stopPropagation()}
      >
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.img
            key={images[active]}
            src={images[active]}
            alt={`${project.title} — capture ${active + 1}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="max-h-full max-w-full rounded-2xl border border-white/10 object-contain shadow-2xl"
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Capture précédente"
              className="absolute left-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-slate-900/70 text-white backdrop-blur transition-all hover:scale-110 hover:border-cyan-400/60 hover:text-cyan-300 sm:left-4"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Capture suivante"
              className="absolute right-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-slate-900/70 text-white backdrop-blur transition-all hover:scale-110 hover:border-cyan-400/60 hover:text-cyan-300 sm:right-4"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {/* Vignettes */}
      {images.length > 1 && (
        <div
          className="relative z-10 mt-4 flex justify-start gap-2 overflow-x-auto px-5 pb-6 sm:justify-center sm:px-8"
          onClick={(event) => event.stopPropagation()}
        >
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => {
                setDirection(index > active ? 1 : -1)
                setActive(index)
              }}
              aria-label={`Afficher la capture ${index + 1}`}
              aria-current={index === active ? 'true' : undefined}
              className={`h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                index === active
                  ? 'border-cyan-400 opacity-100'
                  : 'border-transparent opacity-45 hover:opacity-90'
              }`}
            >
              <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </motion.div>
  )
}
