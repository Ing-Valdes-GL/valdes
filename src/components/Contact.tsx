'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle, Linkedin, Github, ArrowRight } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const contactLinks = [
  {
    icon: Mail,
    label: 'EMAIL',
    value: 'doungmolagoungvaldes@gmail.com',
    href: 'mailto:doungmolagoungvaldes@gmail.com',
    desc: 'Réponse sous 24h garantie',
  },
  {
    icon: MessageCircle,
    label: 'WHATSAPP',
    value: '+237 688 297 576',
    href: 'https://wa.me/237688297576',
    desc: 'Disponible pour discuter',
  },
  {
    icon: Linkedin,
    label: 'LINKEDIN',
    value: 'Doungmo Lagoung Valdes',
    href: 'https://linkedin.com/in/doungmo-lagoung-valdes',
    desc: 'Mon profil professionnel',
  },
  {
    icon: Github,
    label: 'GITHUB',
    value: 'Ing-Valdes-GL',
    href: 'https://github.com/Ing-Valdes-GL',
    desc: 'Mes projets open source',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">

        {/* ─── Header ─────────────────────────────────────── */}
        <AnimatedSection className="mb-16 text-center">
          <span className="section-label text-dark">CONTACT</span>
          <h2 className="font-black text-5xl md:text-6xl lg:text-7xl tracking-tight text-dark mt-8 leading-none">
            TRAVAILLONS
            <br />
            ENSEMBLE
          </h2>
          <div className="wave-divider justify-center mt-6 mb-8">
            <span>——</span>
            <span>\/\/\/</span>
            <span>——</span>
          </div>
          <p className="text-mid text-sm max-w-md mx-auto leading-relaxed">
            Un projet en tête ? Une opportunité à saisir ?
            Choisis le canal qui te convient — je réponds sous 24h.
          </p>
        </AnimatedSection>

        {/* ─── Contact grid ──────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border max-w-3xl mx-auto mb-16">
          {contactLinks.map(({ icon: Icon, label, value, href, desc }, i) => (
            <AnimatedSection key={label} delay={i * 0.08}>
              <motion.a
                href={href}
                target={href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="group flex items-center gap-5 p-8 bg-light hover:bg-dark transition-colors duration-300"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                {/* Icon box */}
                <div className="w-12 h-12 border border-dark/20 group-hover:border-white/30 flex items-center justify-center flex-shrink-0 transition-colors">
                  <Icon size={18} className="text-dark group-hover:text-white transition-colors" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-black tracking-widest text-mid group-hover:text-white/40 transition-colors block mb-0.5">
                    {label}
                  </span>
                  <span className="text-dark group-hover:text-white font-bold text-sm truncate block transition-colors">
                    {value}
                  </span>
                  <span className="text-xs text-mid group-hover:text-white/50 transition-colors block mt-0.5">
                    {desc}
                  </span>
                </div>

                <ArrowRight
                  size={16}
                  className="text-mid group-hover:text-white flex-shrink-0 transition-all duration-200 group-hover:translate-x-1"
                />
              </motion.a>
            </AnimatedSection>
          ))}
        </div>

        {/* ─── Big CTA ───────────────────────────────────── */}
        <AnimatedSection delay={0.3} className="text-center">
          <motion.a
            href="mailto:doungmolagoungvaldes@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-4 bg-dark text-white font-black text-sm tracking-widest uppercase hover:bg-black transition-colors duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail size={16} />
            ÉCRIRE UN EMAIL
          </motion.a>

          {/* Availability badge */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-mid">
              Disponible — Stage · Freelance · Remote
            </span>
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}
