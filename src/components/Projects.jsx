import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { useLanguage } from '../i18n/LanguageContext'
import { projectsByLanguage } from '../i18n/localizedContent'

/** Section « Projets » : filtres par catégorie + grille de cartes. */
export default function Projects() {
  const [filter, setFilter] = useState('all')
  const { language, t } = useLanguage()
  const localizedProjects = projects.map((project) => ({ ...project, ...(projectsByLanguage[language]?.[project.id] ?? {}) }))
  const filters = [
    { id: 'all', label: t('projects.all') },
    { id: 'web', label: t('projects.web') },
    { id: 'ia', label: t('projects.ai') },
    { id: 'devops', label: t('projects.devops') },
  ]

  const visibleProjects = useMemo(
    () => (filter === 'all' ? localizedProjects : localizedProjects.filter((project) => project.categories.includes(filter))),
    [filter, language],
  )

  return (
    <section id="projets" className="relative py-20 sm:py-28">
      <div className="section">
        <SectionTitle
          eyebrow={t('projects.eyebrow')}
          title={t('projects.title')}
          subtitle={t('projects.subtitle')}
        />

        <Reveal delay={0.05} className="mt-10">
          <div
            className="flex flex-wrap items-center justify-center gap-2"
            role="group"
            aria-label={t('projects.filterLabel')}
          >
            {filters.map((item) => {
              const isActive = filter === item.id
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setFilter(item.id)}
                  aria-pressed={isActive}
                  className={`relative rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-[#030712]'
                      : 'text-slate-600 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-300'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 -z-10 rounded-xl bg-accent-gradient"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </button>
              )
            })}
          </div>
        </Reveal>

        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
