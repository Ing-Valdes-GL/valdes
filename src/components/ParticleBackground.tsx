'use client'

import { motion } from 'framer-motion'

const orbs = [
  { size: 600, x: '-10%', y: '-20%', color: 'rgba(0,217,245,0.07)',   delay: 0,   duration: 18 },
  { size: 500, x: '70%',  y: '10%',  color: 'rgba(139,92,246,0.07)',  delay: 3,   duration: 22 },
  { size: 400, x: '20%',  y: '60%',  color: 'rgba(0,255,136,0.05)',   delay: 6,   duration: 20 },
  { size: 350, x: '80%',  y: '70%',  color: 'rgba(0,217,245,0.05)',   delay: 1.5, duration: 25 },
]

const dots = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  top:  `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: Math.random() * 2 + 1,
  opacity: Math.random() * 0.4 + 0.1,
  delay: Math.random() * 5,
  duration: Math.random() * 4 + 3,
}))

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-100" />

      {/* Gradient orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width:  orb.size,
            height: orb.size,
            left:   orb.x,
            top:    orb.y,
            background: orb.color,
          }}
          animate={{
            y:       [0, -30, 0],
            x:       [0, 15, 0],
            scale:   [1, 1.05, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: orb.duration,
            delay:    orb.delay,
            repeat:   Infinity,
            ease:     'easeInOut',
          }}
        />
      ))}

      {/* Floating star-like dots */}
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-white"
          style={{
            top:     dot.top,
            left:    dot.left,
            width:   dot.size,
            height:  dot.size,
            opacity: dot.opacity,
          }}
          animate={{ opacity: [dot.opacity, dot.opacity * 2.5, dot.opacity] }}
          transition={{
            duration: dot.duration,
            delay:    dot.delay,
            repeat:   Infinity,
            ease:     'easeInOut',
          }}
        />
      ))}

      {/* Horizontal scan line — subtle effect */}
      <motion.div
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(0,217,245,0.15), transparent)',
        }}
        animate={{ top: ['-2%', '102%'] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear', repeatDelay: 4 }}
      />
    </div>
  )
}
