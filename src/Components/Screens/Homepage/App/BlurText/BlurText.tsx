/* eslint-disable */

import { useState } from 'react'
import { motion as m } from 'motion/react'
import { useNavigate } from 'react-router-dom'

type LinkConfig = {
  word: string
  url: string
}

type BlurTextProps = {
  text?: string
  delay?: number
  className?: string
  animateBy?: 'words' | 'letters'
  direction?: 'top' | 'bottom'
  threshold?: number
  rootMargin?: string
  animationFrom?: Record<string, string | number>
  animationTo?: Array<Record<string, string | number>>
  easing?: (t: number) => number
  onAnimationComplete?: () => void
  stepDuration?: number
  linkWord?: string | null
  linkTo?: string | null
  links?: LinkConfig[]
}

const buildKeyframes = (
  from: Record<string, string | number>,
  steps: Array<Record<string, string | number>>
): Record<string, Array<string | number>> => {
  const keys = new Set<string>([
    ...Object.keys(from),
    ...steps.flatMap(s => Object.keys(s))
  ])

  const keyframes: Record<string, Array<string | number>> = {}
  keys.forEach(k => {
    keyframes[k] = [from[k], ...steps.map(s => s[k])]
  })
  return keyframes
}

const BlurText: React.FC<BlurTextProps> = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  animationFrom,
  animationTo,
  easing = (t: number) => t,
  onAnimationComplete,
  stepDuration = 0.35,
  linkWord = null,
  linkTo = null,
  links = []
}) => {
  const navigate = useNavigate()
  const elements = animateBy === 'words' ? text.split(' ') : text.split('')
  const [inView, setInView] = useState(true)

  const defaultFrom =
    direction === 'top'
      ? { filter: 'blur(10px)', opacity: 0, y: -50 }
      : { filter: 'blur(10px)', opacity: 0, y: 50 }

  const defaultTo = [
    {
      filter: 'blur(5px)',
      opacity: 0.5,
      y: direction === 'top' ? 5 : -5
    },
    { filter: 'blur(0px)', opacity: 1, y: 0 }
  ]

  const fromSnapshot = animationFrom ?? defaultFrom
  const toSnapshots = animationTo ?? defaultTo

  const stepCount = toSnapshots.length + 1
  const totalDuration = stepDuration * (stepCount - 1)
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1)
  )

  // Функция для поиска ссылки для слова
  const findLinkForWord = (word: string) => {
    // Сначала проверяем массив links
    const linkConfig = links.find(
      link => link.word.toLowerCase() === word.toLowerCase()
    )
    if (linkConfig) return linkConfig.url

    // Если не найдено, проверяем одиночную ссылку (для обратной совместимости)
    if (linkWord && word.toLowerCase() === linkWord.toLowerCase()) {
      return linkTo
    }

    return null
  }

  const handleLinkClick = (url: string) => (e: React.MouseEvent) => {
    // Если это mailto или внешняя ссылка, не preventDefault
    if (
      url.startsWith('mailto:') ||
      url.startsWith('http://') ||
      url.startsWith('https://')
    ) {
      return
    }

    // Для внутренних маршрутов используем navigate
    e.preventDefault()
    navigate(url)
  }

  return (
    <p className={className} style={{ display: 'flex', flexWrap: 'wrap' }}>
      {elements.map((segment, index) => {
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots)
        const linkUrl = findLinkForWord(segment)

        const spanTransition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
          ease: easing
        }

        const content = segment === ' ' ? '\u00A0' : segment

        return (
          <m.span
            key={index}
            initial={fromSnapshot}
            animate={inView ? animateKeyframes : fromSnapshot}
            transition={spanTransition}
            onAnimationComplete={
              index === elements.length - 1 ? onAnimationComplete : undefined
            }
            style={{
              display: 'inline-block',
              willChange: 'transform, filter, opacity'
            }}
          >
            {linkUrl ? (
              <a
                href={linkUrl}
                onClick={handleLinkClick(linkUrl)}
                target={linkUrl.startsWith('http') ? '_blank' : undefined}
                rel={
                  linkUrl.startsWith('http') ? 'noopener noreferrer' : undefined
                }
                style={{
                  textDecoration: 'underline',
                  color: 'inherit',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s'
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                {content}
              </a>
            ) : (
              content
            )}
            {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
          </m.span>
        )
      })}
    </p>
  )
}

export default BlurText
