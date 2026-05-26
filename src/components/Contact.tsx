'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle, Linkedin, Github, Send, ArrowRight } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'doungmolagoungvaldes@gmail.com',
    href: 'mailto:doungmolagoungvaldes@gmail.com',
    desc: 'Réponse sous 24h garantie',
    color: 'text-red-400 bg-red-400/10 border-red-400/25',
    hoverBorder: 'hover:border-red-400/60',
    hoverBg: 'hover:bg-red-400/8',
    glow: 'hover:shadow-[0_0_30px_rgba(248,113,113,0.15)]',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+237 688 297 576',
    href: 'https://wa.me/237688297576',
    desc: 'Disponible pour discuter',
    color: 'text-green-400 bg-green-400/10 border-green-400/25',
    hoverBorder: 'hover:border-green-400/60',
    hoverBg: 'hover:bg-green-400/8',
    glow: 'hover:shadow-[0_0_30px_rgba(74,222,128,0.15)]',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Doungmo Lagoung Valdes',
    href: 'https://linkedin.com/in/doungmo-lagoung-valdes',
    desc: 'Mon profil professionnel',
    color: 'text-blue-400 bg-blue-400/10 border-blue-400/25',
    hoverBorder: 'hover:border-blue-400/60',
    hoverBg: 'hover:bg-blue-400/8',
    glow: 'hover:shadow-[0_0_30px_rgba(96,165,250,0.15)]',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Ing-Valdes-GL',
    href: 'https://github.com/Ing-Valdes-GL',
    desc: 'Mes projets open source',
    color: 'text-white bg-white/5 border-white/20',
    hoverBorder: 'hover:border-white/50',
    hoverBg: 'hover:bg-white/8',
    glow: 'hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* ─── Header ─────────────────────────────────── */}
        <AnimatedSection className="mb-14 text-center">
          <span className="text-[#00ff88] text-sm font-mono font-medium tracking-widest uppercase">
            04. Contact
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mt-2">
            Travaillons <span className="gradient-text">Ensemble</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-lg mx-auto text-base">
            Un projet en tête ? Une opportunité à saisir ? Choisis le canal qui te convient —
            je réponds sous 24h.
          </p>
        </AnimatedSection>

        {/* ─── Contact cards grid ─────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {contactLinks.map(({ icon: Icon, label, value, href, desc, color, hoverBorder, hoverBg, glow }, i) => (
            <AnimatedSection key={label} delay={i * 0.1} direction="up">
              <motion.a
                href={href}
                target={href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 p-5 rounded-2xl glass-card border transition-all duration-300 ${hoverBorder} ${hoverBg} ${glow}`}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${color}`}>
                  <Icon size={21} />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-widest mb-0.5">
                    {label}
                  </div>
                  <div className="text-white font-semibold text-sm truncate">{value}</div>
                  <div className="text-slate-600 text-xs mt-0.5">{desc}</div>
                </div>

                {/* Arrow */}
                <ArrowRight
                  size={16}
                  className="text-slate-600 flex-shrink-0 group-hover:text-white group-hover:translate-x-1 transition-all duration-200"
                />
              </motion.a>
            </AnimatedSection>
          ))}
        </div>

        {/* ─── Big email CTA ──────────────────────────── */}
        <AnimatedSection delay={0.4} direction="up">
          <div className="text-center">
            <motion.a
              href="mailto:doungmolagoungvaldes@gmail.com"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg text-black relative overflow-hidden"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#00d9f5] to-[#8b5cf6]" />
              <span className="absolute inset-0 shimmer-btn" />
              <Mail size={20} className="relative z-10" />
              <span className="relative z-10">Écrire un email</span>
              <Send size={16} className="relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.a>

            <p className="text-slate-600 text-xs mt-4">
              Ouvre ton client mail avec mon adresse pré-remplie
            </p>
          </div>
        </AnimatedSection>

        {/* ─── Availability badge ──────────────────────── */}
        <AnimatedSection delay={0.5} className="mt-10">
          <div className="flex items-center justify-center gap-3 p-4 rounded-2xl glass-card border border-[#00ff88]/15 max-w-sm mx-auto">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00ff88] animate-pulse flex-shrink-0" />
            <div>
              <span className="text-[#00ff88] font-semibold text-sm">Disponible maintenant</span>
              <p className="text-slate-600 text-xs mt-0.5">
                Stage · Freelance · Collaboration remote worldwide
              </p>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}
