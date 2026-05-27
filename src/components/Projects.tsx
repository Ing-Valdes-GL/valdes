'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Clock, CheckCircle2, Lightbulb } from 'lucide-react'
import { projects, statusLabels, type ProjectStatus } from '@/data/projects'
import AnimatedSection from './AnimatedSection'

type Filter = 'ALL' | 'WEB' | 'MOBILE' | 'DESIGN'

const filterLabels: Filter[] = ['ALL', 'WEB', 'MOBILE', 'DESIGN']

function getFilter(p: (typeof projects)[number]): Filter {
  if (p.category === 'Mobile App') return 'MOBILE'
  if (p.techs.includes('Figma') || p.category === 'Design') return 'DESIGN'
  return 'WEB'
}

const statusIcons: Record<ProjectStatus, React.ReactNode> = {
  completed:     <CheckCircle2 size={11} />,
  'in-progress': <Clock size={11} />,
  concept:       <Lightbulb size={11} />,
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('ALL')

  const displayed = filter === 'ALL' ? projects : projects.filter((p) => getFilter(p) === filter)

  return (
    <section id="projects" className="section-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">

        {/* ─── Header ────────────────────────────────────── */}
        <AnimatedSection className="mb-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <span className="section-label text-white">RÉALISATIONS</span>
              <h2 className="font-black text-5xl md:text-6xl lg:text-7xl tracking-tight text-white mt-8 leading-none">
                MES PROJETS
              </h2>
              <div className="wave-divider mt-6 text-white/30">
                <span>——</span>
                <span>\/\/\/</span>
                <span>——</span>
              </div>
            </div>

            {/* Filter tabs */}
            <div className="flex gap-2 flex-wrap">
              {filterLabels.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`text-xs font-black tracking-widest px-4 py-2 border transition-all duration-200 ${
                    filter === f
                      ? 'bg-white text-dark border-white'
                      : 'bg-transparent text-white/50 border-white/20 hover:border-white/60 hover:text-white'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ─── Projects grid ─────────────────────────────── */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          <AnimatePresence mode="popLayout">
            {displayed.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Project card ───────────────────────────────────── */
function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      className="relative flex flex-col h-full bg-dark overflow-hidden p-7"
      style={{
        borderColor: hovered ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.1)',
        border: '1px solid',
        transition: 'border-color 0.2s',
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {/* Highlight banner */}
      {project.highlight && (
        <div className="mb-4 -mx-7 -mt-7 px-7 py-2 bg-white/10 border-b border-white/15">
          <span className="text-[10px] font-black tracking-widest uppercase text-white flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
            {project.highlight}
          </span>
        </div>
      )}

      {/* Top: category + status */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-[10px] font-black tracking-widest uppercase text-white/30">
          {project.category}
        </span>
        <span className={`flex items-center gap-1 text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 border ${
          project.status === 'completed'
            ? 'text-green-400 border-green-400/30'
            : project.status === 'in-progress'
            ? 'text-amber-400 border-amber-400/30'
            : 'text-white/40 border-white/20'
        }`}>
          {statusIcons[project.status]}
          {statusLabels[project.status]}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-black text-white text-xl leading-tight tracking-tight mb-4">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-white/50 text-xs leading-relaxed flex-1 mb-6">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {project.techs.map((tech) => (
          <span
            key={tech}
            className="text-[10px] px-2 py-0.5 border border-white/15 text-white/40 font-mono"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <span className="text-[10px] text-white/20 font-mono">{project.year}</span>
        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase text-white/40 hover:text-white transition-colors px-2 py-1 border border-white/10 hover:border-white/40"
            >
              <Github size={11} />
              CODE
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase text-white hover:bg-white hover:text-dark transition-all px-2 py-1 border border-white/40 hover:border-white"
            >
              <ExternalLink size={11} />
              LIVE
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
