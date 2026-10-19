import { Briefcase, GraduationCap, MapPin } from 'lucide-react'
import { education, experiences } from '../data/experience'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { useLanguage } from '../i18n/LanguageContext'
import { educationByLanguage, experiencesByLanguage } from '../i18n/localizedContent'

/** Section « Parcours » : formation et expériences, timeline verticale animée. */
export default function Experience() {
  const { language, t } = useLanguage()
  const localizedEducation = language === 'en'
    ? education.map((item, index) => ({ ...item, period: educationByLanguage.en[index][0], title: educationByLanguage.en[index][1], detail: educationByLanguage.en[index][2], place: educationByLanguage.en[index][3] }))
    : education
  const localizedExperiences = experiences.map((item, index) => ({ ...item, ...(experiencesByLanguage[language]?.[index] ?? {}) }))

  return (
    <section id="parcours" className="relative py-20 sm:py-28">
      <div className="section">
        <SectionTitle
          eyebrow={t('journey.eyebrow')}
          title={t('journey.title')}
          subtitle={t('journey.subtitle')}
        />

        <div className="mt-14 space-y-14">
          {/* Formation */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <GraduationCap size={20} className="text-cyan-500" />
              {t('journey.education')}
            </h3>

            <ol className="mt-6 space-y-6 border-l border-slate-200 pl-8 dark:border-white/10">
              {localizedEducation.map((item, index) => (
                <Reveal as="li" key={item.title} delay={index * 0.08} className="relative">
                  <span className="timeline-dot" aria-hidden="true" />
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-600 dark:text-cyan-300">
                    {item.period}
                  </p>
                  <h4 className="mt-1.5 text-base font-semibold">{item.title}</h4>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.detail}</p>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-500">
                    <MapPin size={12} />
                    {item.place}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* Expériences */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <Briefcase size={20} className="text-cyan-500" />
              {t('journey.experience')}
            </h3>

            <ol className="mt-6 grid grid-cols-1 items-stretch gap-5 md:grid-cols-2">
              {localizedExperiences.map((item, index) => (
                <Reveal as="li" key={`${item.company}-${item.period}`} delay={index * 0.08} className="h-full">
                  <div className="glass card-hover h-full rounded-2xl p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-600 dark:text-cyan-300">
                      {item.period}
                    </p>
                    <h4 className="mt-1.5 text-base font-semibold">{item.title}</h4>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                      {item.company}
                      <span className="ml-2 text-xs font-normal text-slate-500">{item.place}</span>
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                    <ul className="mt-3 space-y-1.5">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2 text-sm text-slate-600 dark:text-slate-400"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {item.stack.map((tech) => (
                        <li key={tech} className="chip">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
