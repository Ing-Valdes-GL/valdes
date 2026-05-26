export type SkillCategory = 'language' | 'framework' | 'tool' | 'ai' | 'database' | 'cloud'

export interface Skill {
  name: string
  icon: string
  category: SkillCategory
  color: string       // Tailwind border/text color class
  bgColor: string     // Tailwind bg class (subtle)
}

export const skills: Skill[] = [
  // ─── Languages ───────────────────────────────────────
  { name: 'JavaScript', icon: 'JS',  category: 'language',  color: 'text-yellow-400 border-yellow-400/40', bgColor: 'bg-yellow-400/5'  },
  { name: 'TypeScript', icon: 'TS',  category: 'language',  color: 'text-blue-400 border-blue-400/40',     bgColor: 'bg-blue-400/5'    },
  { name: 'Java',       icon: 'Jv',  category: 'language',  color: 'text-orange-400 border-orange-400/40', bgColor: 'bg-orange-400/5'  },
  { name: 'C',          icon: 'C',   category: 'language',  color: 'text-slate-300 border-slate-400/40',   bgColor: 'bg-slate-400/5'   },
  { name: 'PHP',        icon: 'PHP', category: 'language',  color: 'text-violet-400 border-violet-400/40', bgColor: 'bg-violet-400/5'  },
  { name: 'HTML5',      icon: 'H5',  category: 'language',  color: 'text-red-400 border-red-400/40',       bgColor: 'bg-red-400/5'     },
  { name: 'CSS3',       icon: 'CS',  category: 'language',  color: 'text-sky-400 border-sky-400/40',       bgColor: 'bg-sky-400/5'     },

  // ─── Frameworks ──────────────────────────────────────
  { name: 'Next.js',       icon: 'NX',  category: 'framework', color: 'text-white border-white/30',            bgColor: 'bg-white/5'       },
  { name: 'React',         icon: 'RE',  category: 'framework', color: 'text-cyan-400 border-cyan-400/40',      bgColor: 'bg-cyan-400/5'    },
  { name: 'React Native',  icon: 'RN',  category: 'framework', color: 'text-cyan-300 border-cyan-300/40',      bgColor: 'bg-cyan-300/5'    },
  { name: 'Express.js',    icon: 'EX',  category: 'framework', color: 'text-green-400 border-green-400/40',    bgColor: 'bg-green-400/5'   },
  { name: 'Flutter',       icon: 'FL',  category: 'framework', color: 'text-teal-400 border-teal-400/40',      bgColor: 'bg-teal-400/5'    },
  { name: 'Laravel',       icon: 'LA',  category: 'framework', color: 'text-rose-400 border-rose-400/40',      bgColor: 'bg-rose-400/5'    },
  { name: 'Tailwind CSS',  icon: 'TW',  category: 'framework', color: 'text-sky-300 border-sky-300/40',        bgColor: 'bg-sky-300/5'     },

  // ─── AI & Workflow ────────────────────────────────────
  { name: 'Claude Code', icon: 'CC', category: 'ai', color: 'text-amber-300 border-amber-300/40',  bgColor: 'bg-amber-300/5'  },
  { name: 'Gemini',      icon: 'GM', category: 'ai', color: 'text-blue-300 border-blue-300/40',    bgColor: 'bg-blue-300/5'   },
  { name: 'Grok',        icon: 'GK', category: 'ai', color: 'text-white border-white/30',          bgColor: 'bg-white/5'      },
  { name: 'Cursor',      icon: 'CU', category: 'ai', color: 'text-purple-300 border-purple-300/40',bgColor: 'bg-purple-300/5' },

  // ─── Database ─────────────────────────────────────────
  { name: 'PostgreSQL', icon: 'PG',  category: 'database', color: 'text-blue-500 border-blue-500/40',   bgColor: 'bg-blue-500/5'   },
  { name: 'MySQL',      icon: 'MY',  category: 'database', color: 'text-orange-500 border-orange-500/40',bgColor: 'bg-orange-500/5' },
  { name: 'Supabase',   icon: 'SB',  category: 'database', color: 'text-emerald-400 border-emerald-400/40',bgColor: 'bg-emerald-400/5'},
  { name: 'Neon DB',    icon: 'ND',  category: 'database', color: 'text-teal-300 border-teal-300/40',   bgColor: 'bg-teal-300/5'   },

  // ─── Cloud & Tools ───────────────────────────────────
  { name: 'GitHub',              icon: 'GH',  category: 'cloud', color: 'text-white border-white/30',            bgColor: 'bg-white/5'       },
  { name: 'Vercel',              icon: 'VR',  category: 'cloud', color: 'text-white border-white/30',            bgColor: 'bg-white/5'       },
  { name: 'Expo',                icon: 'EP',  category: 'cloud', color: 'text-slate-200 border-slate-200/30',    bgColor: 'bg-slate-200/5'   },
  { name: 'Railway',             icon: 'RW',  category: 'cloud', color: 'text-violet-300 border-violet-300/40', bgColor: 'bg-violet-300/5'  },
  { name: 'Render',              icon: 'RD',  category: 'cloud', color: 'text-indigo-400 border-indigo-400/40', bgColor: 'bg-indigo-400/5'  },
  { name: 'Google Cloud',        icon: 'GC',  category: 'cloud', color: 'text-red-400 border-red-400/40',        bgColor: 'bg-red-400/5'     },
  { name: 'VS Code',             icon: 'VS',  category: 'tool',  color: 'text-blue-400 border-blue-400/40',      bgColor: 'bg-blue-400/5'    },
  { name: 'Figma',               icon: 'FG',  category: 'tool',  color: 'text-pink-400 border-pink-400/40',      bgColor: 'bg-pink-400/5'    },
  { name: 'Postman',             icon: 'PM',  category: 'tool',  color: 'text-orange-400 border-orange-400/40',  bgColor: 'bg-orange-400/5'  },
]

export const categoryLabels: Record<SkillCategory, string> = {
  language:  'Langages',
  framework: 'Frameworks & Libs',
  ai:        'IA & Workflow',
  database:  'Bases de données',
  cloud:     'Cloud & DevOps',
  tool:      'Outils',
}

export const categoryOrder: SkillCategory[] = [
  'language', 'framework', 'ai', 'database', 'cloud', 'tool',
]
