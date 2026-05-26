'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Mail, Github, Linkedin } from 'lucide-react'
import ProfileCard3D from './ProfileCard3D'
import RoleCarousel from './RoleCarousel'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const item = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

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
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ─── Left content ─────────────────────────── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Status badge */}
            <motion.div variants={item} className="inline-flex items-center gap-2 mb-6">
              <span className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-[#00d9f5]/20 text-sm">
                <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
                <span className="text-slate-300">Étudiant Licence · Génie Logiciel</span>
                <span className="text-[#00d9f5] font-mono text-xs border border-[#00d9f5]/30 rounded px-1.5 py-0.5">
                  Douala, CMR
                </span>
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              variants={item}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-4"
            >
              <span className="block text-white">Bonjour, je suis</span>
              <span className="block gradient-text mt-1">Valdes.</span>
            </motion.h1>

            {/* Animated role subtitle */}
            <motion.div variants={item} className="h-8 mb-6 overflow-hidden">
              <RoleCarousel roles={ROLES} />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={item}
              className="text-slate-400 text-lg leading-relaxed max-w-xl mb-8"
            >
              Je conçois des expériences web & mobile{' '}
              <span className="text-white font-medium">performantes et visuellement percutantes</span>{' '}
              avec Next.js, React Native et TypeScript. Passionné par l&apos;IA et les outils modernes,
              je transforme vos idées en produits numériques qui marquent les esprits.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={() => scrollTo('contact')}
                className="group relative flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-black overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#00d9f5] to-[#8b5cf6]" />
                <span className="absolute inset-0 shimmer-btn opacity-0 group-hover:opacity-100 transition-opacity" />
                <Mail size={17} className="relative z-10" />
                <span className="relative z-10">Me contacter</span>
              </button>

              <button
                onClick={() => scrollTo('projects')}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white glass-card border border-white/10 hover:border-[#00d9f5]/40 hover:text-[#00d9f5] transition-all duration-300"
              >
                Voir mes projets
                <ArrowDown size={17} />
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div variants={item} className="flex items-center gap-4">
              <span className="text-xs text-slate-600 uppercase tracking-widest">Follow me</span>
              <div className="flex-1 h-px bg-white/5" />
              <div className="flex items-center gap-3">
                {[
                  { href: 'https://github.com/ValdesDoungmo', icon: <Github size={18} />,    label: 'GitHub'   },
                  { href: 'https://linkedin.com',             icon: <Linkedin size={18} />,  label: 'LinkedIn' },
                  { href: 'https://wa.me/237688297576',       icon: <WhatsAppIcon />,        label: 'WhatsApp' },
                  { href: 'https://tiktok.com',               icon: <TikTokIcon />,          label: 'TikTok'   },
                ].map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2.5 rounded-lg glass-card border border-white/[0.06] text-slate-400 hover:text-[#00d9f5] hover:border-[#00d9f5]/30 transition-all duration-200"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ─── Right: 3D profile card ────────────────── */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProfileCard3D />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center p-1"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-[#00d9f5] rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

/* ─── SVG icons ──────────────────────────────────────── */
function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  )
}
