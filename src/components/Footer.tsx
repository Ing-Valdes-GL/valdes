'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'

const socials = [
  { href: 'https://github.com/Ing-Valdes-GL',           icon: Github,    label: 'GitHub'   },
  { href: 'https://linkedin.com',                       icon: Linkedin,  label: 'LinkedIn' },
  { href: 'mailto:doungmolagoungvaldes@gmail.com',      icon: Mail,      label: 'Email'    },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/[0.06] py-10 px-4 sm:px-6 lg:px-8">
      {/* Gradient accent top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-[#00d9f5]/60 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="font-display font-extrabold text-lg text-white">
              Valdes<span className="text-[#00d9f5]">.</span>
            </span>
            <span className="text-slate-600 text-sm">
              — Full-Stack Developer · Douala, CMR
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-lg glass-card border border-white/[0.06] text-slate-500 hover:text-[#00d9f5] hover:border-[#00d9f5]/30 transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-slate-600 text-xs flex items-center gap-1.5">
            © {year} Valdes · Fait avec
            <Heart size={11} className="text-red-500 fill-red-500" />
            & Next.js
          </p>
        </div>
      </div>

      {/* Back to top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-40 w-11 h-11 rounded-xl glass-card border border-white/[0.1] flex items-center justify-center text-slate-400 hover:text-[#00d9f5] hover:border-[#00d9f5]/40 transition-all duration-200 glow-cyan"
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <ArrowUp size={17} />
      </motion.button>
    </footer>
  )
}
