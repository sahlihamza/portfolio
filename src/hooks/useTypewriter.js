import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

/**
 * Effet machine à écrire : écrit puis efface chaque mot en boucle.
 * Retourne le mot affiché et l'index courant.
 */
export function useTypewriter(words, { typingSpeed = 75, deletingSpeed = 38, pause = 1700 } = {}) {
  const reduceMotion = useReducedMotion()
  const [text, setText] = useState(reduceMotion ? words[0] ?? '' : '')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (reduceMotion || !words.length) return undefined

    const currentWord = words[wordIndex % words.length]
    let timeout

    if (!isDeleting && text === currentWord) {
      // Mot entièrement écrit : on attend avant de l'effacer.
      timeout = setTimeout(() => setIsDeleting(true), pause)
    } else if (isDeleting && text === '') {
      // Mot effacé : on passe au suivant.
      setIsDeleting(false)
      setWordIndex((index) => (index + 1) % words.length)
    } else {
      timeout = setTimeout(
        () => {
          setText(currentWord.slice(0, text.length + (isDeleting ? -1 : 1)))
        },
        isDeleting ? deletingSpeed : typingSpeed,
      )
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, reduceMotion, typingSpeed, deletingSpeed, pause])

  return { text, wordIndex }
}
