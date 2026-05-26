'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skills, categoryLabels, categoryOrder, type SkillCategory } from '@/data/skills'
import AnimatedSection from './AnimatedSection'
import SkillIcon, { getSkillHex } from './SkillIcon'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'all'>('all')

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter((s) => s.category === activeCategory)

  const categoryFilters: Array<{ value: SkillCategory | 'all'; label: string }> = [
    { value: 'all', label: 'Tout' },
    ...categoryOrder.map((c) => ({ value: c, label: categoryLabels[c] })),
  ]

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* ─── Header ────────────────────────────────── */}
        <AnimatedSection className="mb-10">
          <span className="text-[#8b5cf6] text-sm font-mono font-medium tracking-widest uppercase">
            02. Stack technique
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mt-2 section-title">
            Mes Compétences
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl">
            Un arsenal technologique moderne enrichi par les outils d&apos;IA les plus avancés.
          </p>
        </AnimatedSection>

        {/* ─── Filter pills ───────────────────────────── */}
        <AnimatedSection delay={0.1} className="mb-10">
          <div className="flex flex-wrap gap-2">
            {categoryFilters.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setActiveCategory(value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  activeCategory === value
                    ? 'bg-[#00d9f5]/15 text-[#00d9f5] border-[#00d9f5]/40 shadow-lg shadow-[#00d9f5]/10'
                    : 'glass-card text-slate-400 border-white/[0.07] hover:text-white hover:border-white/20'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* ─── Skills grid ────────────────────────────── */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.22, delay: i * 0.025 }}
              >
                <SkillBadge name={skill.name} bgColor={skill.bgColor} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ─── Category summary ───────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-16">
          {categoryOrder.slice(0, 3).map((cat, i) => {
            const count = skills.filter((s) => s.category === cat).length
            const gradients = [
              'from-[#00d9f5]/20 to-transparent',
              'from-[#8b5cf6]/20 to-transparent',
              'from-amber-400/20 to-transparent',
            ]
            return (
              <AnimatedSection key={cat} delay={i * 0.1}>
                <div className={`glass-card rounded-2xl p-6 border border-white/[0.07] bg-gradient-to-br ${gradients[i]}`}>
                  <div className="font-display text-3xl font-extrabold text-white mb-1">{count}</div>
                  <div className="text-slate-400 text-sm">{categoryLabels[cat]}</div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─── Individual skill badge ─────────────────────────── */
function SkillBadge({ name, bgColor }: { name: string; bgColor: string }) {
  const [hovered, setHovered] = useState(false)
  const hex = getSkillHex(name)

  return (
    <motion.div
      className={`relative flex flex-col items-center justify-center gap-2.5 p-4 rounded-2xl border glass-card transition-all duration-200 ${bgColor}`}
      style={{
        borderColor: hovered ? `${hex}55` : 'rgba(255,255,255,0.07)',
        boxShadow: hovered ? `0 0 24px ${hex}22, 0 8px 32px rgba(0,0,0,0.3)` : 'none',
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -5, scale: 1.06 }}
      transition={{ duration: 0.18 }}
    >
      {/* Icon */}
      <motion.div
        className="flex items-center justify-center"
        style={{ color: hovered ? hex : `${hex}bb` }}
        animate={{ scale: hovered ? 1.15 : 1 }}
        transition={{ duration: 0.18 }}
      >
        <SkillIcon name={name} size={26} />
      </motion.div>

      {/* Name */}
      <span
        className="text-xs font-medium text-center leading-tight transition-colors duration-200"
        style={{ color: hovered ? '#f0f4f8' : '#94a3b8' }}
      >
        {name}
      </span>

      {/* Glow backdrop */}
      {hovered && (
        <motion.div
          className="absolute inset-0 rounded-2xl -z-10 blur-xl"
          style={{ background: `${hex}18` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.div>
  )
}
