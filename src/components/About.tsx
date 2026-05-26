'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Zap } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { getMyAge } from '@/lib/ageCalculator'

const timeline = [
  {
    year: '2022–2023',
    icon: GraduationCap,
    title: 'Baccalauréat D',
    org: 'GBHS Limbe',
    desc: 'Obtention du Baccalauréat série D avec mention.',
  },
  {
    year: '2024–2025',
    icon: GraduationCap,
    title: 'BTS en Génie Logiciel',
    org: 'Institut Universitaire de la Côte de Douala',
    desc: 'Formation intensive : algorithmes, POO, bases de données, développement web.',
  },
  {
    year: '2024',
    icon: Briefcase,
    title: 'Stage — Service Informatique',
    org: 'SCECUDS',
    desc: "Conception d'une solution de prêt en ligne : analyse des besoins, modélisation UML, prototypage Figma.",
  },
  {
    year: '2025 · 3 mois',
    icon: Briefcase,
    title: 'Stage Développeur Web',
    org: 'CCN Technologies — Douala',
    desc: 'Développement PHP & Laravel : fonctionnalités backend, MySQL, APIs REST, projets clients en équipe.',
  },
  {
    year: 'Depuis 2025',
    icon: Zap,
    title: 'Licence en Génie Logiciel',
    org: 'IUT de Douala',
    desc: 'Architecture logicielle, développement Full-Stack et projets concrets.',
  },
]

const services = [
  { num: '01', title: 'Web Development', desc: 'Applications Next.js, React & TypeScript performantes et scalables.' },
  { num: '02', title: 'Mobile Apps',     desc: 'Apps cross-platform React Native & Expo livrées sur iOS et Android.' },
  { num: '03', title: 'Backend & API',   desc: 'APIs REST avec Express, Supabase, PostgreSQL et Laravel.' },
  { num: '04', title: 'UI/UX Design',    desc: 'Interfaces visuellement percutantes avec Figma et Tailwind CSS.' },
]

export default function About() {
  const age = getMyAge()

  return (
    <section id="about" className="section-light">

      {/* ─── Intro band ─────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <AnimatedSection className="text-center mb-16">
          <span className="section-label text-dark">À PROPOS</span>
          <h2 className="font-black text-5xl md:text-6xl lg:text-7xl tracking-tight text-dark mt-8 leading-none">
            QUI SUIS-JE ?
          </h2>

          {/* Wave divider */}
          <div className="wave-divider justify-center mt-6 mb-8">
            <span>——</span>
            <span>\/\/\/</span>
            <span>——</span>
          </div>

          <p className="text-mid max-w-2xl mx-auto text-sm leading-relaxed">
            Développeur web &amp; mobile de{' '}
            <strong className="text-dark">{age} ans</strong> basé à{' '}
            <strong className="text-dark">Douala, Cameroun</strong>.
            Je construis des produits numériques avec une attention particulière
            pour la performance, l&apos;expérience utilisateur et le code propre.
            Passionné par l&apos;IA, je combine{' '}
            <strong className="text-dark">Claude Code, Cursor et Gemini</strong>
            {' '}pour livrer plus vite et mieux.
          </p>
        </AnimatedSection>

        {/* Stats row */}
        <AnimatedSection delay={0.15}>
          <div className="grid grid-cols-3 gap-px bg-border max-w-lg mx-auto mb-20">
            {[
              { value: `${age}`, label: 'Ans' },
              { value: '5+',    label: 'Projets' },
              { value: '30+',   label: 'Technologies' },
            ].map(({ value, label }) => (
              <div key={label} className="bg-light text-center py-8 px-4">
                <div className="font-black text-4xl text-dark">{value}</div>
                <div className="text-xs font-bold tracking-widest uppercase text-mid mt-1">{label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Services grid */}
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border mb-20">
            {services.map(({ num, title, desc }, i) => (
              <motion.div
                key={num}
                className="bg-light p-8 hover:bg-dark hover:text-white transition-colors duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <span className="text-xs font-black tracking-widest text-mid group-hover:text-white/50 transition-colors">
                  {num}
                </span>
                <h3 className="font-black text-sm tracking-widest uppercase text-dark group-hover:text-white mt-3 mb-3 transition-colors">
                  {title}
                </h3>
                <p className="text-xs text-mid group-hover:text-white/70 leading-relaxed transition-colors">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.3} className="flex justify-center">
          <a
            href="/DoungmoLagoungValdesCV.pdf"
            download
            className="pipe-btn text-dark border-dark"
          >
            TÉLÉCHARGER CV
          </a>
        </AnimatedSection>
      </div>

      {/* ─── Timeline (dark band) ─────────────────────────── */}
      <div className="bg-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <AnimatedSection className="mb-14 text-center">
            <span className="section-label text-white">PARCOURS</span>
          </AnimatedSection>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-white/10" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  className="relative flex gap-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  {/* Dot */}
                  <div className="flex-shrink-0 w-10 h-10 border border-white/20 flex items-center justify-center z-10 bg-dark">
                    <item.icon size={16} className="text-white/60" />
                  </div>

                  <div className="flex-1 border border-white/10 p-5 hover:border-white/30 transition-colors duration-200">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-black text-white text-sm tracking-wide">{item.title}</h3>
                      <span className="text-xs text-white/30 font-mono whitespace-nowrap">{item.year}</span>
                    </div>
                    <p className="text-xs font-bold tracking-wider uppercase text-white/50 mb-2">{item.org}</p>
                    <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
