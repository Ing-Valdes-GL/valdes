'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Props {
  roles: string[]
}

export default function RoleCarousel({ roles }: Props) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2800)
    return () => clearInterval(timer)
  }, [roles.length])

  return (
    <motion.p
      key={index}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="text-xl font-display font-semibold text-slate-300"
    >
      <span className="text-[#00d9f5]">{'>'}</span>{' '}
      <span>{roles[index]}</span>
      <span className="typing-cursor text-[#00d9f5] ml-0.5">_</span>
    </motion.p>
  )
}
