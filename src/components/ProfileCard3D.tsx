'use client'

import { useRef, useState, useCallback } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import { MapPin, Code2 } from 'lucide-react'

const SPRING = { damping: 30, stiffness: 350, mass: 0.5 }

export default function ProfileCard3D() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), SPRING)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), SPRING)
  const glareX  = useTransform(mouseX, [-0.5, 0.5], ['0%', '100%'])
  const glareY  = useTransform(mouseY, [-0.5, 0.5], ['0%', '100%'])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width  - 0.5)
    mouseY.set((e.clientY - rect.top)  / rect.height - 0.5)
  }, [mouseX, mouseY])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
  }, [mouseX, mouseY])

  return (
    <div className="flex items-center justify-center" style={{ perspective: '1000px' }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        animate={{ scale: isHovered ? 1.03 : 1 }}
        transition={{ scale: { duration: 0.3 } }}
        className="relative w-72 h-96 md:w-80 md:h-[440px] rounded-2xl overflow-hidden"
      >
        {/* ─── Gradient border glow ───────────────────── */}
        <motion.div
          className="absolute inset-0 rounded-2xl z-0"
          animate={{
            boxShadow: isHovered
              ? '0 0 0 1.5px rgba(0,217,245,0.7), 0 0 50px rgba(0,217,245,0.25), 0 0 100px rgba(139,92,246,0.15)'
              : '0 0 0 1px rgba(255,255,255,0.1), 0 20px 60px rgba(0,0,0,0.5)',
          }}
          transition={{ duration: 0.3 }}
        />

        {/* ─── Profile image ───────────────────────────── */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <Image
            src="/profile.jpg"
            alt="Doungmo Lagoung Valdes"
            fill
            className="object-cover object-top select-none"
            unoptimized
            priority
          />
          {/* Bottom gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/40 to-transparent" />
        </div>

        {/* ─── Glare effect ────────────────────────────── */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none z-10"
          style={{
            background: useTransform(
              [glareX, glareY],
              ([x, y]) =>
                `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.10) 0%, transparent 65%)`,
            ),
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ opacity: { duration: 0.2 } }}
        />

        {/* ─── Content overlay ─────────────────────────── */}
        <div
          className="absolute bottom-0 left-0 right-0 p-5 z-20"
          style={{ transform: 'translateZ(30px)' }}
        >
          <h3 className="font-display font-bold text-xl text-white leading-tight">
            Doungmo Lagoung Valdes
          </h3>
          <p className="text-[#00d9f5] text-sm font-medium mt-0.5">Full-Stack Developer</p>

          <div className="flex items-center gap-3 mt-3">
            <span className="flex items-center gap-1 text-xs text-slate-400">
              <MapPin size={11} className="text-[#00d9f5]" />
              Douala, Cameroun
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-400">
              <Code2 size={11} className="text-[#8b5cf6]" />
              Open to work
            </span>
          </div>
        </div>

        {/* ─── Available badge ─────────────────────────── */}
        <motion.div
          className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-card border border-green-500/30 text-xs font-medium text-green-400"
          style={{ transform: 'translateZ(50px)' }}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Disponible
        </motion.div>

        {/* ─── Tech stack pill ─────────────────────────── */}
        <motion.div
          className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full glass-card border border-[#00d9f5]/25 text-xs font-mono text-[#00d9f5]"
          style={{ transform: 'translateZ(40px)' }}
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          {'<NextJS />'}
        </motion.div>
      </motion.div>
    </div>
  )
}
