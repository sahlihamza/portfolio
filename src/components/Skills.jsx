import { motion } from 'framer-motion'
import { Brain, Container, Database, KeyRound, LayoutTemplate, Server } from 'lucide-react'
import { marqueeTech, skillCategories } from '../data/skills'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

const ICONS = {
  layout: LayoutTemplate,
  server: Server,
  database: Database,
  container: Container,
  brain: Brain,
  key: KeyRound,
}

/** Section « Compétences » : catégories avec badges animés + bandeau défilant. */
export default function Skills() {
  return (
    <section id="competences" className="relative py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]"
      />

      <div className="section relative">
        <SectionTitle
          eyebrow="Compétences"
          title="La pile technique que je maîtrise"
          subtitle="Des interfaces riches en données jusqu’au déploiement conteneurisé, avec l’IA comme levier de valeur."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = ICONS[category.icon] ?? Server
            return (
              <Reveal key={category.id} delay={(index % 3) * 0.08}>
                <article className="glass card-hover group h-full rounded-2xl p-6">
                  <div className="flex items-start gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-gradient-soft text-cyan-500 transition-transform duration-300 group-hover:scale-110 dark:text-cyan-300">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold">{category.title}</h3>
                      <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <motion.ul
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{ show: { transition: { staggerChildren: 0.035 } } }}
                    className="mt-5 flex flex-wrap gap-2"
                  >
                    {category.skills.map((skill) => (
                      <motion.li
                        key={skill}
                        variants={{
                          hidden: { opacity: 0, y: 10, scale: 0.92 },
                          show: { opacity: 1, y: 0, scale: 1 },
                        }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="chip"
                      >
                        {skill}
                      </motion.li>
                    ))}
                  </motion.ul>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.1} className="mt-12">
          <div
            className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/60 py-4 dark:border-white/10 dark:bg-white/[0.03]"
            aria-hidden="true"
          >
            <div className="flex w-max animate-marquee-x gap-10 pr-10">
              {[...marqueeTech, ...marqueeTech].map((tech, index) => (
                <span
                  key={`${tech}-${index}`}
                  className="whitespace-nowrap font-display text-sm font-semibold text-slate-400 transition-colors hover:text-cyan-500 dark:text-slate-500"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
