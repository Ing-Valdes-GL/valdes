'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Props {
  roles: string[]
  darkMode?: boolean
}

export default function RoleCarousel({ roles, darkMode = true }: Props) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2800)
    return () => clearInterval(timer)
  }, [roles.length])

  return (
    <motion.p
      key={index}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`text-sm font-bold tracking-widest uppercase ${darkMode ? 'text-white/60' : 'text-mid'}`}
    >
      — {roles[index]}
    </motion.p>
  )
}
