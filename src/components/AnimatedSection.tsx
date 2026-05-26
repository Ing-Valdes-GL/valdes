'use client'

import { motion, type Variants } from 'framer-motion'
import { type ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  once?: boolean
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  once = true,
}: Props) {
  const offsets: Record<string, { x: number; y: number }> = {
    up:    { x: 0,    y: 50   },
    down:  { x: 0,    y: -50  },
    left:  { x: 60,   y: 0    },
    right: { x: -60,  y: 0    },
    none:  { x: 0,    y: 0    },
  }

  const { x, y } = offsets[direction]

  const variants: Variants = {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-80px' }}
    >
      {children}
    </motion.div>
  )
}
