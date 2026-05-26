'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

const socials = [
  { href: 'https://github.com/Ing-Valdes-GL',                icon: Github,   label: 'GitHub'   },
  { href: 'https://linkedin.com/in/doungmo-lagoung-valdes',  icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:doungmolagoungvaldes@gmail.com',           icon: Mail,     label: 'Email'    },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Brand */}
          <div>
            <span className="font-black text-white text-xl tracking-tight uppercase">
              VALDES<span className="text-white/20">.</span>
            </span>
            <p className="text-xs text-white/30 font-bold tracking-widest uppercase mt-1">
              Full-Stack Developer · Douala, CMR
            </p>
          </div>

          {/* Nav links */}
          <ul className="flex flex-wrap items-center gap-6 justify-center">
            {[
              { id: 'home',     label: 'Accueil'     },
              { id: 'about',    label: 'À Propos'    },
              { id: 'skills',   label: 'Compétences' },
              { id: 'projects', label: 'Projets'     },
              { id: 'contact',  label: 'Contact'     },
            ].map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-[10px] font-black tracking-widest uppercase text-white/30 hover:text-white transition-colors"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-all duration-200"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/10">
          <p className="text-[10px] text-white/20 font-bold tracking-widest uppercase">
            © {year} Doungmo Lagoung Valdes — Tous droits réservés
          </p>
          <p className="text-[10px] text-white/20 font-bold tracking-widest uppercase hidden sm:block">
            Construit avec Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>

      {/* Back to top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-40 w-11 h-11 bg-dark border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-all duration-200"
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <ArrowUp size={16} />
      </motion.button>
    </footer>
  )
}
