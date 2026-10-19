import { Brain, Briefcase, Code2, Layers, Zap } from 'lucide-react'
import { profile, stats } from '../data/profile'
import AnimatedNumber from './AnimatedNumber'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

const STAT_ICONS = { briefcase: Briefcase, layers: Layers, code: Code2, zap: Zap }

const FOCUS = [
  {
    icon: Brain,
    title: 'IA intégrée',
    text: 'Chatbots, moteurs de recommandation, scoring prédictif et modèles de machine learning (Random Forest, NLP) embarqués dans des produits réels.',
  },
  {
    icon: Zap,
    title: 'Delivery DevOps',
    text: 'Conteneurisation Docker, orchestration Kubernetes, pipelines CI/CD (Jenkins, GitHub Actions) et analyse de qualité avec SonarQube.',
  },
  {
    icon: Layers,
    title: 'Applications complètes',
    text: 'Du modèle de données à l’interface : APIs REST, frontends Angular/React, authentification JWT et temps réel WebSocket.',
  },
]

/** Section « À propos » : présentation et chiffres clés. */
export default function About() {
  return (
    <section id="apropos" className="relative py-20 sm:py-28">
      <div className="section">
        <SectionTitle
          eyebrow="À propos"
          title="Un développeur full stack orienté IA & DevOps"
          subtitle={profile.intro}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="grid grid-cols-2 gap-4">
            {stats.map((stat) => {
              const Icon = STAT_ICONS[stat.icon] ?? Zap
              return (
                <div
                  key={stat.label}
                  className="glass card-hover group rounded-2xl p-5 text-center sm:text-left"
                >
                  <Icon className="mx-auto mb-3 h-5 w-5 text-cyan-500 transition-transform duration-300 group-hover:scale-110 sm:mx-0" />
                  <p className="font-display text-3xl font-bold gradient-text">
                    <AnimatedNumber value={stat.value} />
                  </p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{stat.label}</p>
                </div>
              )
            })}
          </Reveal>

          <div className="flex flex-col gap-4">
            {FOCUS.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="glass card-hover flex gap-4 rounded-2xl p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-gradient-soft text-cyan-500 dark:text-cyan-300">
                    <item.icon size={20} />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
