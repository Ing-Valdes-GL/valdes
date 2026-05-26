'use client'

import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

type Status = 'idle' | 'sending' | 'success' | 'error'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'doungmolagoungvaldes@gmail.com',
    href: 'mailto:doungmolagoungvaldes@gmail.com',
    color: 'text-red-400 bg-red-400/10 border-red-400/25',
    hoverColor: 'hover:border-red-400/60 hover:bg-red-400/15',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+237 688 297 576',
    href: 'https://wa.me/237688297576',
    color: 'text-green-400 bg-green-400/10 border-green-400/25',
    hoverColor: 'hover:border-green-400/60 hover:bg-green-400/15',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Doungmo Lagoung Valdes',
    href: 'https://linkedin.com',
    color: 'text-blue-400 bg-blue-400/10 border-blue-400/25',
    hoverColor: 'hover:border-blue-400/60 hover:bg-blue-400/15',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'ValdesDoungmo',
    href: 'https://github.com/ValdesDoungmo',
    color: 'text-white bg-white/5 border-white/20',
    hoverColor: 'hover:border-white/50 hover:bg-white/10',
  },
]

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  /**
   * ─── NOTE ────────────────────────────────────────────────────────────────
   * Pour un site statique, utilisez l'une de ces options pour le formulaire :
   *   1. Formspree  → remplacez l'URL par https://formspree.io/f/{YOUR_ID}
   *   2. EmailJS    → npm install @emailjs/browser, configurez votre service
   *   3. Web3Forms  → npm install @web3forms/react
   * Actuellement, le formulaire ouvre le client mail via mailto: en fallback.
   * ─────────────────────────────────────────────────────────────────────────
   */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      // Option 1 — Formspree (décommentez et remplacez YOUR_FORM_ID) :
      // const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(form),
      // })
      // if (!res.ok) throw new Error()

      // Fallback : ouvre le client mail avec les infos pré-remplies
      const mailto = `mailto:doungmolagoungvaldes@gmail.com?subject=${encodeURIComponent(form.subject || 'Contact depuis le portfolio')}&body=${encodeURIComponent(`De: ${form.name} <${form.email}>\n\n${form.message}`)}`
      window.location.href = mailto

      await new Promise((r) => setTimeout(r, 800))
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }

    setTimeout(() => setStatus('idle'), 4000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* ─── Header ─────────────────────────────────── */}
        <AnimatedSection className="mb-14 text-center">
          <span className="text-[#00ff88] text-sm font-mono font-medium tracking-widest uppercase">
            04. Contact
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mt-2">
            Travaillons <span className="gradient-text">Ensemble</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-lg mx-auto">
            Un projet en tête ? Une opportunité à saisir ? Je suis disponible pour collaborer.
            Réponse garantie sous 24h.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* ─── Contact links ──────────────────────────── */}
          <AnimatedSection direction="left" className="space-y-4">
            <h3 className="font-display font-bold text-white text-xl mb-6">
              Me rejoindre directement
            </h3>

            {contactLinks.map(({ icon: Icon, label, value, href, color, hoverColor }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 rounded-2xl glass-card border transition-all duration-300 ${hoverColor}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ x: 4 }}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center border flex-shrink-0 ${color}`}>
                  <Icon size={19} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">{label}</div>
                  <div className="text-white font-medium text-sm mt-0.5">{value}</div>
                </div>
                <div className="ml-auto text-slate-600">
                  <Send size={14} />
                </div>
              </motion.a>
            ))}

            {/* Availability */}
            <div className="mt-6 p-4 rounded-2xl glass-card border border-[#00ff88]/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00ff88] animate-pulse" />
                <span className="text-[#00ff88] font-semibold text-sm">Disponible maintenant</span>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">
                Ouvert aux opportunités de stage, freelance et projets collaboratifs.
                Basé à Douala, disponible en remote worldwide.
              </p>
            </div>
          </AnimatedSection>

          {/* ─── Contact form ───────────────────────────── */}
          <AnimatedSection direction="right">
            <h3 className="font-display font-bold text-white text-xl mb-6">
              Envoyer un message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FloatingInput
                  id="name"
                  name="name"
                  label="Votre nom"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <FloatingInput
                  id="email"
                  name="email"
                  type="email"
                  label="Votre email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <FloatingInput
                id="subject"
                name="subject"
                label="Sujet"
                value={form.subject}
                onChange={handleChange}
              />

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre projet ou votre idée..."
                  className="w-full bg-white/[0.04] border border-white/[0.09] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#00d9f5]/50 focus:bg-[#00d9f5]/[0.03] transition-all duration-200 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-semibold text-black relative overflow-hidden disabled:opacity-60"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#00d9f5] to-[#8b5cf6]" />
                <span className="absolute inset-0 shimmer-btn opacity-0 hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center gap-2">
                  {status === 'sending' ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-black/40 border-t-black rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                      />
                      Envoi en cours...
                    </>
                  ) : status === 'success' ? (
                    <><CheckCircle size={17} /> Message envoyé !</>
                  ) : status === 'error' ? (
                    <><AlertCircle size={17} /> Erreur — Réessayer</>
                  ) : (
                    <><Send size={17} /> Envoyer le message</>
                  )}
                </span>
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

/* ─── Floating label input ───────────────────────────── */
interface InputProps {
  id: string
  name: string
  label: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
}

function FloatingInput({ id, name, label, type = 'text', value, onChange, required }: InputProps) {
  return (
    <div className="relative">
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={label}
        className="w-full bg-white/[0.04] border border-white/[0.09] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#00d9f5]/50 focus:bg-[#00d9f5]/[0.03] transition-all duration-200"
      />
    </div>
  )
}
