'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import RoleCarousel from './RoleCarousel'

const ROLES = [
  'Full-Stack Developer',
  'Mobile Developer',
  'TypeScript Enthusiast',
  'IA-Powered Builder',
]

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative min-h-screen flex overflow-hidden pt-16">

      {/* ─── Left panel (light gray) ─────────────────────── */}
      <div className="relative z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 w-full lg:w-1/2 bg-light">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Framed label */}
          <span className="section-label text-dark mb-8 inline-block">
            PORTFOLIO 2026
          </span>

          {/* Name */}
          <h1 className="font-black text-5xl sm:text-6xl lg:text-7xl leading-none tracking-tight text-dark mt-6">
            DOUNGMO
          </h1>
          <h1 className="font-black text-5xl sm:text-6xl lg:text-7xl leading-none tracking-tight text-dark">
            LAGOUNG
          </h1>
          <h1 className="font-black text-5xl sm:text-6xl lg:text-7xl leading-none tracking-tight text-dark mb-8">
            VALDES
          </h1>

          {/* Animated role */}
          <div className="h-5 mb-8 overflow-hidden">
            <RoleCarousel roles={ROLES} darkMode={false} />
          </div>

          {/* Description */}
          <p className="text-mid text-sm leading-relaxed max-w-xs mb-10">
            Je conçois des expériences web &amp; mobile performantes avec
            Next.js, React Native et TypeScript.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo('projects')}
              className="pipe-btn text-dark border-dark"
            >
              MES PROJETS
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="pipe-btn text-dark border-dark"
            >
              ME CONTACTER
            </button>
          </div>

          {/* Availability indicator */}
          <div className="flex items-center gap-2 mt-10">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase text-mid">
              Disponible — Douala, CMR
            </span>
          </div>
        </motion.div>
      </div>

      {/* ─── Right panel (dark) ──────────────────────────── */}
      <motion.div
        className="hidden lg:flex lg:w-1/2 bg-dark hero-right-clip items-end justify-center overflow-hidden relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="relative w-full h-full flex items-end justify-center">
          <Image
            src="/profile.jpg"
            alt="Doungmo Lagoung Valdes"
            fill
            className="object-cover object-center opacity-90"
            priority
            unoptimized
          />
          {/* Subtle gradient only at the very bottom for stats readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/10 to-transparent" />

          {/* Stats strip at bottom */}
          <div className="relative z-10 p-10 w-full">
            <div className="flex gap-10">
              {[
                { value: '5+',  label: 'Projets' },
                { value: '30+', label: 'Technologies' },
                { value: '2',   label: "Ans d'exp." },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-white font-black text-3xl">{value}</div>
                  <div className="text-white/50 text-xs font-bold tracking-wider uppercase mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile dark overlay with photo */}
      <div className="absolute inset-0 lg:hidden -z-10">
        <Image
          src="/profile.jpg"
          alt=""
          fill
          className="object-cover object-top opacity-5"
          unoptimized
          aria-hidden
        />
      </div>
    </section>
  )
}
