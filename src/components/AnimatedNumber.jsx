import { useEffect, useRef } from 'react'
import { animate, useInView } from 'framer-motion'

/**
 * Compteur qui s'incrémente quand l'élément entre dans le viewport.
 * Gère les suffixes (« 20+ ») et les préfixes (« +5 »).
 */
export default function AnimatedNumber({ value, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })

  const raw = String(value)
  const numeric = Number.parseFloat(raw.replace(/[^\d.]/g, '')) || 0
  const prefix = raw.trim().startsWith('+') ? '+' : ''
  const suffix = raw.trim().endsWith('+') ? '+' : raw.trim().endsWith('%') ? '%' : ''

  useEffect(() => {
    if (!inView || !ref.current) return undefined
    const node = ref.current
    node.textContent = `${prefix}${numeric}${suffix}`

    const controls = animate(0, numeric, {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        node.textContent = `${prefix}${Math.round(latest)}${suffix}`
      },
    })

    return () => controls.stop()
  }, [inView, numeric, prefix, suffix])

  return (
    <span ref={ref} className={className}>
      {`${prefix}${numeric}${suffix}`}
    </span>
  )
}
