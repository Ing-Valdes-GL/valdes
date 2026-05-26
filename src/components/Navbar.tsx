'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Accueil',     href: '#home'     },
  { label: 'À Propos',    href: '#about'    },
  { label: 'Compétences', href: '#skills'   },
  { label: 'Projets',     href: '#projects' },
  { label: 'Contact',     href: '#contact'  },
]

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active,     setActive]     = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace('#', ''))
    const obs = ids.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const o = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActive(id) },
        { threshold: 0.3 },
      )
      o.observe(el)
      return o
    })
    return () => obs.forEach((o) => o?.disconnect())
  }, [])

  const goto = (href: string) => {
    setMobileOpen(false)
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-dark/95 backdrop-blur-sm' : 'bg-dark'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => goto('#home')}
            className="font-black text-white text-lg tracking-tight uppercase hover:opacity-70 transition-opacity"
          >
            VALDES<span className="text-light">.</span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => {
              const id = href.replace('#', '')
              return (
                <li key={href}>
                  <button
                    onClick={() => goto(href)}
                    className={`text-xs font-bold tracking-widest uppercase transition-colors duration-200 ${
                      active === id
                        ? 'text-white'
                        : 'text-white/40 hover:text-white/80'
                    }`}
                  >
                    {label}
                    {active === id && (
                      <motion.div
                        layoutId="nav-underline"
                        className="h-px bg-white mt-0.5"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </button>
                </li>
              )
            })}
          </ul>

          {/* CTA */}
          <a
            href="/DoungmoLagoungValdesCV.pdf"
            download
            className="hidden md:inline-flex items-center px-5 py-2 text-xs font-bold tracking-widest uppercase border border-white text-white hover:bg-white hover:text-dark transition-all duration-200"
          >
            Télécharger CV
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/70" onClick={() => setMobileOpen(false)} />
            <motion.nav
              className="absolute top-16 left-0 right-0 bg-dark border-t border-white/10 py-6"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ul className="flex flex-col gap-1 px-6">
                {navLinks.map(({ label, href }) => (
                  <li key={href}>
                    <button
                      onClick={() => goto(href)}
                      className="w-full text-left py-3 text-xs font-bold tracking-widest uppercase text-white/60 hover:text-white transition-colors"
                    >
                      {label}
                    </button>
                  </li>
                ))}
                <li className="pt-3">
                  <a
                    href="/DoungmoLagoungValdesCV.pdf"
                    download
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-xs font-bold tracking-widest uppercase text-center border border-white text-white hover:bg-white hover:text-dark transition-all"
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
