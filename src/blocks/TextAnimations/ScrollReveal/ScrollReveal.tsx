import { Children, isValidElement, useEffect, useRef, useState } from 'react'
import type React from 'react'
import type { ReactElement, ReactNode } from 'react'
import { motion } from 'motion/react'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delay?: number // base delay in seconds
  duration?: number // seconds
  distance?: number // pixels to translate from origin
  origin?: 'top' | 'bottom'
  once?: boolean
  stagger?: number // seconds between children
  as?: keyof React.JSX.IntrinsicElements
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  distance = 24,
  origin = 'bottom',
  once = true,
  stagger = 0,
  as = 'div',
}: ScrollRevealProps) {
  const [inView, setInView] = useState(false)
  const containerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const el = containerRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [once])

  const Wrapper = as as any
  const initialY = origin === 'bottom' ? distance : -distance

  const items = Children.toArray(children)

  const wrapChild = (child: ReactNode, index: number): ReactElement => {
    const transition = { duration, delay: delay + index * stagger }
    const commonProps = {
      initial: { opacity: 0, y: initialY },
      animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: initialY },
      transition,
    }

    if (isValidElement(child)) {
      return (
        <motion.div key={index} {...commonProps}>
          {child}
        </motion.div>
      )
    }
    return (
      <motion.span key={index} {...commonProps}>
        {child as any}
      </motion.span>
    )
  }

  return (
    <Wrapper ref={containerRef as any} className={className}>
      {items.map(wrapChild)}
    </Wrapper>
  )
}

// End
