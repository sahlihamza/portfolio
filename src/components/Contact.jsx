import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react'
import { profile } from '../data/profile'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { useLanguage } from '../i18n/LanguageContext'
import { profileByLanguage } from '../i18n/localizedContent'

/** Endpoint Formspree (optionnel) : renseigné via la variable d'environnement VITE_FORMSPREE_ENDPOINT. */
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || ''

const EMPTY_FORM = { name: '', email: '', message: '' }

/** Section « Contact » : formulaire validé + liens directs. */
export default function Contact() {
  const { language, t } = useLanguage()
  const localizedProfile = { ...profile, ...profileByLanguage[language] }
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errorMessage, setErrorMessage] = useState('')

  const validate = () => {
    const nextErrors = {}
    if (form.name.trim().length < 2) nextErrors.name = t('contact.nameError')
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
      nextErrors.email = t('contact.emailError')
    }
    if (form.message.trim().length < 10) {
      nextErrors.message = t('contact.messageError')
    }
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!validate()) return

    setStatus('sending')
    setErrorMessage('')

    // Sans endpoint configuré, on ouvre le client e-mail avec un message pré-rempli.
    if (!FORMSPREE_ENDPOINT) {
      const subject = `${t('contact.subject')} — ${form.name}`
      const body = `${form.message}\n\n— ${form.name} (${form.email})`
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`
      setStatus('sent')
      setForm(EMPTY_FORM)
      return
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      })
      if (!response.ok) throw new Error(`Erreur ${response.status}`)
      setStatus('sent')
      setForm(EMPTY_FORM)
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        t('contact.sendError') + profile.email + '.',
      )
    }
  }

  const fieldClass = (name) =>
    `w-full rounded-xl border bg-white/70 px-4 py-3 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 dark:bg-white/5 dark:text-slate-200 ${
      errors[name]
        ? 'border-rose-400/70 dark:border-rose-400/60'
        : 'border-slate-200 dark:border-white/10'
    }`

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-violet-500/15 blur-[120px]"
      />

      <div className="section relative">
        <SectionTitle
          eyebrow={t('contact.eyebrow')}
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="glass flex h-full flex-col gap-5 rounded-2xl p-7">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-start gap-4"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-gradient-soft text-cyan-500 transition-transform duration-300 group-hover:scale-110 dark:text-cyan-300">
                  <Mail size={19} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.16em] text-slate-500">
                    E-mail
                  </span>
                  <span className="mt-0.5 block text-sm font-semibold text-slate-800 transition-colors group-hover:text-cyan-600 dark:text-slate-100 dark:group-hover:text-cyan-300">
                    {profile.email}
                  </span>
                </span>
              </a>

              <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="group flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-gradient-soft text-cyan-500 transition-transform duration-300 group-hover:scale-110 dark:text-cyan-300">
                  <Phone size={19} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.16em] text-slate-500">
                    {t('contact.phone')}
                  </span>
                  <span className="mt-0.5 block text-sm font-semibold text-slate-800 transition-colors group-hover:text-cyan-600 dark:text-slate-100 dark:group-hover:text-cyan-300">
                    {profile.phone}
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-gradient-soft text-cyan-500 dark:text-cyan-300">
                  <MapPin size={19} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.16em] text-slate-500">
                    {t('contact.location')}
                  </span>
                  <span className="mt-0.5 block text-sm font-semibold text-slate-800 dark:text-slate-100">
                    {localizedProfile.location}
                  </span>
                </span>
              </div>

              <p className="mt-auto rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm leading-relaxed text-cyan-700 dark:text-cyan-200">
                {localizedProfile.availability}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} noValidate className="glass rounded-2xl p-7">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    {t('contact.name')}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t('contact.namePlaceholder')}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={fieldClass('name')}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-rose-500">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t('contact.emailPlaceholder')}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={fieldClass('email')}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-rose-500">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t('contact.messagePlaceholder')}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`${fieldClass('message')} resize-y`}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-rose-500">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button type="submit" disabled={status === 'sending'} className="btn-primary disabled:opacity-70">
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      {t('contact.sending')}
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      {t('contact.send')}
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {status === 'sent' && (
                    <motion.p
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-sm font-medium text-emerald-500"
                    >
                      <Check size={16} />
                      {t('contact.sent')}
                    </motion.p>
                  )}
                  {status === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-sm text-rose-500"
                    >
                      {errorMessage}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
