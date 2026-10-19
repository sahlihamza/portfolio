import { motion, useReducedMotion } from 'framer-motion'

/**
 * Enveloppe d'apparition au scroll (fade + translation).
 * L'effet est neutralisé si l'utilisateur a demandé moins de animations.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.6,
  className = '',
  as = 'div',
  once = true,
}) {
  const reduceMotion = useReducedMotion()
  const MotionTag = motion[as] ?? motion.div

  return (
    <MotionTag
      className={className}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
