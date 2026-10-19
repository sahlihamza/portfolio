import { Briefcase, GraduationCap, MapPin } from 'lucide-react'
import { education, experiences } from '../data/experience'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

/** Section « Parcours » : formation et expériences, timeline verticale animée. */
export default function Experience() {
  return (
    <section id="parcours" className="relative py-20 sm:py-28">
      <div className="section">
        <SectionTitle
          eyebrow="Parcours"
          title="Formation et expériences professionnelles"
          subtitle="Un chemin construit entre l’école, l laboratoire et l’entreprise — chaque étape a produit du code en production."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          {/* Formation */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <GraduationCap size={20} className="text-cyan-500" />
              Formation
            </h3>

            <ol className="mt-6 space-y-6 border-l border-slate-200 pl-8 dark:border-white/10">
              {education.map((item, index) => (
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
              Expériences
            </h3>

            <ol className="mt-6 space-y-6 border-l border-slate-200 pl-8 dark:border-white/10">
              {experiences.map((item, index) => (
                <Reveal as="li" key={`${item.company}-${item.period}`} delay={index * 0.08} className="relative">
                  <span className="timeline-dot" aria-hidden="true" />
                  <div className="glass card-hover rounded-2xl p-5">
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
