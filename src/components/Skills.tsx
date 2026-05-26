'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skills, categoryLabels, categoryOrder, type SkillCategory } from '@/data/skills'
import AnimatedSection from './AnimatedSection'
import SkillIcon from './SkillIcon'

const filters: Array<{ value: SkillCategory | 'all'; label: string }> = [
  { value: 'all', label: 'TOUT' },
  ...categoryOrder.map((c) => ({ value: c, label: categoryLabels[c].toUpperCase() })),
]

export default function Skills() {
  const [active, setActive] = useState<SkillCategory | 'all'>('all')

  const displayed = active === 'all' ? skills : skills.filter((s) => s.category === active)

  return (
    <section id="skills" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">

        {/* ─── Header ────────────────────────────────────── */}
        <AnimatedSection className="mb-14 text-center">
          <span className="section-label text-dark">COMPÉTENCES</span>
          <h2 className="font-black text-5xl md:text-6xl lg:text-7xl tracking-tight text-dark mt-8 leading-none">
            MES OUTILS
          </h2>
          <div className="wave-divider justify-center mt-6">
            <span>——</span>
            <span>\/\/\/</span>
            <span>——</span>
          </div>
        </AnimatedSection>

        {/* ─── Filter tabs ───────────────────────────────── */}
        <AnimatedSection delay={0.1} className="mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setActive(value)}
                className={`text-xs font-black tracking-widest px-4 py-2 border transition-all duration-200 ${
                  active === value
                    ? 'bg-dark text-white border-dark'
                    : 'bg-transparent text-mid border-border hover:border-dark hover:text-dark'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* ─── Skills grid ───────────────────────────────── */}
        <motion.div
          layout
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-px bg-border"
        >
          <AnimatePresence mode="popLayout">
            {displayed.map((skill, i) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2, delay: i * 0.02 }}
              >
                <SkillTile name={skill.name} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ─── Category counts ───────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-border mt-px">
          {categoryOrder.map((cat) => {
            const count = skills.filter((s) => s.category === cat).length
            return (
              <AnimatedSection key={cat}>
                <div className="bg-light p-6 text-center">
                  <div className="font-black text-3xl text-dark">{count}</div>
                  <div className="text-xs font-bold tracking-widest uppercase text-mid mt-1">
                    {categoryLabels[cat]}
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─── Skill tile ─────────────────────────────────────── */
function SkillTile({ name }: { name: string }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="bg-white flex flex-col items-center justify-center gap-3 p-5 cursor-default"
      style={{
        backgroundColor: hovered ? '#111111' : '#FFFFFF',
        transition: 'background-color 0.2s',
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <div style={{ color: hovered ? '#FFFFFF' : '#111111', transition: 'color 0.2s' }}>
        <SkillIcon name={name} size={28} />
      </div>
      <span
        className="text-[10px] font-bold tracking-wider text-center leading-tight"
        style={{ color: hovered ? 'rgba(255,255,255,0.7)' : '#555555', transition: 'color 0.2s' }}
      >
        {name}
      </span>
    </motion.div>
  )
}
