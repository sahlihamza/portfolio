import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { socialLinks } from '../data/profile'

const ICONS = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  phone: Phone,
}

/** Icônes sociales (GitHub, LinkedIn, e-mail, téléphone). */
export default function SocialLinks({ className = '', iconSize = 18 }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map(({ label, href, icon }) => {
        const Icon = ICONS[icon] ?? Github
        const external = href.startsWith('http')
        return (
          <li key={label}>
            <a
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer noopener' : undefined}
              aria-label={label}
              title={label}
              className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white/70 text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-cyan-400/60 dark:hover:text-cyan-300"
            >
              <Icon size={iconSize} />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
