'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { label: 'Accueil',      href: '#home'     },
  { label: 'À Propos',     href: '#about'    },
  { label: 'Compétences',  href: '#skills'   },
  { label: 'Projets',      href: '#projects' },
  { label: 'Contact',      href: '#contact'  },
]

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Intersection observer to highlight active section
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''))
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.35 },
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#050508]/80 backdrop-blur-xl border-b border-white/[0.07]'
            : 'bg-transparent'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-2.5 group"
          >
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#00d9f5]/40 glow-cyan group-hover:border-[#00d9f5] transition-all duration-300">
              <Image
                src="/profile.jpg"
                alt="Valdes"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <span className="font-display font-bold text-sm tracking-wide hidden sm:block">
              <span className="text-white">Valdes</span>
              <span className="text-[#00d9f5]">.</span>
            </span>
          </button>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '')
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'text-[#00d9f5]'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-[#00d9f5]/10 rounded-lg border border-[#00d9f5]/20"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                </li>
              )
            })}
          </ul>

          {/* CTA button */}
          <a
            href="/cv.pdf"
            download
            className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-[#00d9f5] to-[#8b5cf6] text-black hover:opacity-90 transition-opacity duration-200"
          >
            Télécharger CV
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
            <motion.nav
              className="absolute top-16 left-0 right-0 bg-[#0a0a12]/95 backdrop-blur-xl border-b border-white/[0.07] py-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ul className="flex flex-col gap-1 px-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="w-full text-left px-4 py-3 text-sm font-medium text-slate-300 hover:text-[#00d9f5] hover:bg-[#00d9f5]/5 rounded-lg transition-all duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="/cv.pdf"
                    download
                    className="block px-4 py-3 text-sm font-semibold text-center rounded-lg bg-gradient-to-r from-[#00d9f5] to-[#8b5cf6] text-black"
                    onClick={() => setMobileOpen(false)}
                  >
                    Télécharger CV
                  </a>
                </li>
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
