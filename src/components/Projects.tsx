'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Clock, CheckCircle2, Lightbulb } from 'lucide-react'
import { projects, statusLabels, statusColors, type ProjectStatus } from '@/data/projects'
import AnimatedSection from './AnimatedSection'

const statusIcons: Record<ProjectStatus, React.ReactNode> = {
  completed: <CheckCircle2 size={12} />,
  'in-progress': <Clock size={12} />,
  concept: <Lightbulb size={12} />,
}

const techColors: Record<string, string> = {
  'React Native':   'bg-cyan-400/10 text-cyan-300 border-cyan-400/25',
  'Next.js':        'bg-white/5 text-white border-white/15',
  'TypeScript':     'bg-blue-400/10 text-blue-300 border-blue-400/25',
  'Supabase':       'bg-emerald-400/10 text-emerald-300 border-emerald-400/25',
  'Expo':           'bg-slate-400/10 text-slate-300 border-slate-400/25',
  'Neon DB':        'bg-teal-400/10 text-teal-300 border-teal-400/25',
  'Express':        'bg-green-400/10 text-green-300 border-green-400/25',
  'Tailwind CSS':   'bg-sky-400/10 text-sky-300 border-sky-400/25',
  'PWA':            'bg-purple-400/10 text-purple-300 border-purple-400/25',
  'PHP':            'bg-violet-400/10 text-violet-300 border-violet-400/25',
  'MySQL':          'bg-orange-400/10 text-orange-300 border-orange-400/25',
  default:          'bg-slate-400/10 text-slate-400 border-slate-400/20',
}

function getTechColor(tech: string): string {
  return techColors[tech] ?? techColors.default
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const displayed = showAll ? projects : projects.filter((p) => p.featured)

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* ─── Header ─────────────────────────────────── */}
        <AnimatedSection className="mb-14">
          <span className="text-amber-400 text-sm font-mono font-medium tracking-widest uppercase">
            03. Réalisations
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mt-2 section-title">
            Mes Projets
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl">
            Des applications concrètes construites avec passion. Chaque projet est une opportunité
            d&apos;apprendre, d&apos;innover et de livrer de la valeur.
          </p>

          {/* GitHub API note */}
          <div className="mt-5 inline-flex items-start gap-3 px-4 py-3 rounded-xl glass-card border border-amber-400/20 text-xs text-amber-400/80 max-w-lg">
            <Github size={14} className="flex-shrink-0 mt-0.5" />
            <span>
              <strong className="text-amber-400">Tip :</strong> Remplace ce fichier statique par
              un appel à{' '}
              <code className="font-mono bg-amber-400/10 px-1 rounded">
                api.github.com/users/&#123;USERNAME&#125;/repos
              </code>{' '}
              pour afficher tes dépôts en temps réel. Voir le commentaire dans{' '}
              <code className="font-mono bg-amber-400/10 px-1 rounded">src/data/projects.ts</code>.
            </span>
          </div>
        </AnimatedSection>

        {/* ─── Projects grid ──────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.08} direction="up">
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>

        {/* ─── Show more ──────────────────────────────── */}
        {!showAll && projects.length > displayed.length && (
          <AnimatedSection className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 rounded-xl font-semibold text-sm glass-card border border-white/[0.08] text-slate-300 hover:text-white hover:border-white/20 transition-all duration-200"
            >
              Voir tous les projets ({projects.length})
            </button>
          </AnimatedSection>
        )}
      </div>
    </section>
  )
}

/* ─── Project card ───────────────────────────────────── */
function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      className="relative h-full glass-card rounded-2xl border border-white/[0.07] overflow-hidden flex flex-col"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      animate={{
        borderColor: hovered ? 'rgba(0,217,245,0.25)' : 'rgba(255,255,255,0.07)',
        boxShadow: hovered
          ? '0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(0,217,245,0.07)'
          : '0 4px 20px rgba(0,0,0,0.2)',
      }}
    >
      {/* Top accent line */}
      <div className="h-0.5 bg-gradient-to-r from-[#00d9f5] via-[#8b5cf6] to-transparent" />

      <div className="p-6 flex flex-col flex-1 gap-4">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="text-xs font-mono text-slate-500 mb-1 block">{project.category}</span>
            <h3 className="font-display font-bold text-white text-lg leading-tight">
              {project.title}
            </h3>
          </div>

          <span
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border flex-shrink-0 ${statusColors[project.status]}`}
          >
            {statusIcons[project.status]}
            {statusLabels[project.status]}
          </span>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed flex-1">{project.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className={`text-xs px-2 py-0.5 rounded-md border font-mono ${getTechColor(tech)}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer links */}
        <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
          <span className="text-xs text-slate-600 font-mono">{project.year}</span>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors px-2.5 py-1.5 rounded-lg hover:bg-white/5"
              >
                <Github size={13} />
                Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-[#00d9f5] hover:text-white transition-colors px-2.5 py-1.5 rounded-lg hover:bg-[#00d9f5]/10"
              >
                <ExternalLink size={13} />
                Live
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
