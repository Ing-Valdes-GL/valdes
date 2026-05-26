'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Zap, Heart } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { getMyAge } from '@/lib/ageCalculator'

const timeline = [
  {
    year: '2022–2023',
    icon: GraduationCap,
    color: 'text-[#00d9f5] bg-[#00d9f5]/10 border-[#00d9f5]/30',
    title: 'Baccalauréat D',
    org: 'GBHS Limbe',
    desc: 'Obtention du Baccalauréat série D avec mention.',
  },
  {
    year: '2024–2025',
    icon: GraduationCap,
    color: 'text-[#8b5cf6] bg-[#8b5cf6]/10 border-[#8b5cf6]/30',
    title: 'BTS en Génie Logiciel',
    org: 'Institut Universitaire de la Côte de Douala',
    desc: 'Formation intensive aux fondamentaux du développement logiciel : algorithmes, POO, bases de données, développement web.',
  },
  {
    year: '2024',
    icon: Briefcase,
    color: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
    title: 'Stage — Service Informatique',
    org: 'SCECUDS',
    desc: 'Assistance technique et conception d\'une solution de prêt en ligne : analyse des besoins, modélisation UML, prototypage Figma.',
  },
  {
    year: 'Depuis 2025',
    icon: Zap,
    color: 'text-[#00ff88] bg-[#00ff88]/10 border-[#00ff88]/30',
    title: 'Licence en Génie Logiciel',
    org: 'Institut Universitaire des Technologies de Douala',
    desc: 'Approfondissement en architecture logicielle, développement Full-Stack et projets concrets.',
  },
]

const passions = [
  { emoji: '⚡', label: 'Intelligence Artificielle', desc: 'Intégration de LLMs dans les workflows de développement' },
  { emoji: '📱', label: 'Apps Mobile', desc: 'Expériences cross-platform fluides avec React Native & Expo' },
  { emoji: '🎨', label: 'UI/UX Design', desc: 'Interfaces visuellement percutantes et accessibles' },
  { emoji: '🔧', label: 'Open Source', desc: 'Contribution à l\'écosystème JavaScript/TypeScript' },
]

export default function About() {
  const age = getMyAge()

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <AnimatedSection className="mb-16">
          <span className="text-[#00d9f5] text-sm font-mono font-medium tracking-widest uppercase">
            01. À propos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mt-2 section-title">
            Qui suis-je ?
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* ─── Bio ─────────────────────────────────────── */}
          <AnimatedSection direction="left">
            <div className="space-y-5 text-slate-400 text-lg leading-relaxed">
              <p>
                Développeur web & mobile de{' '}
                <span className="text-[#00d9f5] font-semibold">{age} ans</span> basé à{' '}
                <span className="text-white font-medium">Douala, Cameroun</span>. Je construis
                des produits numériques avec une attention particulière pour la performance,
                l&apos;expérience utilisateur et le code propre.
              </p>
              <p>
                Autodidacte dans l&apos;âme, je combine les outils d&apos;IA modernes —{' '}
                <span className="text-[#8b5cf6] font-medium">Claude Code, Cursor, Gemini</span> —
                avec mes compétences techniques pour livrer plus vite et mieux. Je crois fermement
                que l&apos;IA est un multiplicateur de force pour le développeur du futur.
              </p>
              <p>
                Ma stack de prédilection tourne autour de{' '}
                <span className="text-white font-medium">Next.js, React Native et TypeScript</span>,
                avec des backends sur Express/Supabase et des déploiements sur Vercel et Railway.
              </p>

              {/* Stat cards */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { value: age,   label: 'Ans'             },
                  { value: '5+',  label: 'Projets réalisés' },
                  { value: '10+', label: 'Technologies'     },
                ].map(({ value, label }) => (
                  <div key={label} className="glass-card rounded-xl p-4 text-center border border-white/[0.06]">
                    <div className="font-display text-3xl font-extrabold gradient-text">{value}</div>
                    <div className="text-xs text-slate-500 mt-1">{label}</div>
                  </div>
                ))}
              </div>

              {/* Download CV */}
              <div className="pt-2">
                <a
                  href="/cv.pdf"
                  download
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm glass-card border border-[#00d9f5]/25 text-[#00d9f5] hover:bg-[#00d9f5]/10 hover:border-[#00d9f5]/50 transition-all duration-300"
                >
                  <Heart size={15} />
                  Télécharger mon CV complet
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* ─── Timeline ────────────────────────────────── */}
          <AnimatedSection direction="right">
            <div className="relative space-y-6">
              {/* Vertical line */}
              <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-[#00d9f5]/50 via-[#8b5cf6]/30 to-transparent" />

              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  className="relative flex gap-5"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Icon dot */}
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl border flex items-center justify-center z-10 ${item.color}`}>
                    <item.icon size={18} />
                  </div>

                  <div className="flex-1 glass-card rounded-xl p-4 border border-white/[0.06] hover:border-white/[0.12] transition-colors duration-200">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-display font-bold text-white text-sm">{item.title}</h3>
                      <span className="text-xs text-slate-500 font-mono whitespace-nowrap">{item.year}</span>
                    </div>
                    <p className="text-[#00d9f5] text-xs font-medium mb-2">{item.org}</p>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* ─── Passions grid ───────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {passions.map((p, i) => (
            <AnimatedSection key={p.label} delay={i * 0.1} direction="up">
              <motion.div
                className="glass-card rounded-2xl p-5 border border-white/[0.06] hover:border-[#00d9f5]/25 transition-all duration-300 group"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-3xl">{p.emoji}</span>
                <h4 className="font-display font-bold text-white text-sm mt-3 mb-1 group-hover:text-[#00d9f5] transition-colors">
                  {p.label}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
