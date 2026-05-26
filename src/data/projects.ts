export type ProjectStatus = 'completed' | 'in-progress' | 'concept'

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  techs: string[]
  githubUrl?: string
  liveUrl?: string
  status: ProjectStatus
  featured: boolean
  year: number
  category: string
}

/**
 * ─── NOTE FOR MAINTAINER ────────────────────────────────────────────────────
 * To pull live data from GitHub, replace this static array with a call to:
 *   GET https://api.github.com/users/{YOUR_GITHUB_USERNAME}/repos
 *       ?sort=pushed&per_page=6&type=owner
 *
 * You can use the GitHub token as an env variable: NEXT_PUBLIC_GITHUB_TOKEN
 * Add a component `<GitHubProjects username="YOUR_USERNAME" />` and fetch
 * with React Query / SWR for automatic cache and revalidation.
 *
 * For a static export, run the fetch at build time in generateStaticParams
 * or via a build script that writes to src/data/projects.generated.ts.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const projects: Project[] = [
  {
    id: 'moneymap',
    title: 'MoneyMap',
    description: 'Application mobile de suivi de dépenses personnelles avec tableaux de bord visuels et statistiques en temps réel.',
    longDescription: 'MoneyMap aide les utilisateurs à visualiser leurs flux financiers, catégoriser leurs dépenses et recevoir des insights intelligents sur leurs habitudes de consommation.',
    techs: ['React Native', 'Expo', 'TypeScript', 'Neon DB', 'Express', 'Render'],
    githubUrl: 'https://github.com/ValdesDoungmo',
    status: 'completed',
    featured: true,
    year: 2025,
    category: 'Mobile App',
  },
  {
    id: 'ecommerce-chat',
    title: 'E-Commerce + Chat IA',
    description: 'Site e-commerce complet développé avec Next.js et un chat IA intégré permettant une assistance à l\'achat en temps réel.',
    techs: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'OpenAI API'],
    githubUrl: 'https://github.com/ValdesDoungmo',
    status: 'completed',
    featured: true,
    year: 2025,
    category: 'Web App',
  },
  {
    id: 'todoapp',
    title: 'ToDoApp — Agenda Intelligent',
    description: 'Application d\'agenda avancée avec rappels intelligents, catégorisation des tâches et synchronisation cross-plateforme.',
    techs: ['React Native', 'Expo', 'TypeScript', 'Supabase'],
    githubUrl: 'https://github.com/ValdesDoungmo',
    status: 'in-progress',
    featured: true,
    year: 2025,
    category: 'Mobile App',
  },
  {
    id: 'pppte-pwa',
    title: 'PPPTE — Progressive Web App',
    description: 'Application web progressive (PWA) avec mode hors-ligne, notifications push et installation sur mobile/desktop.',
    techs: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PWA', 'Service Workers'],
    githubUrl: 'https://github.com/ValdesDoungmo',
    status: 'in-progress',
    featured: false,
    year: 2025,
    category: 'PWA',
  },
  {
    id: 'credit-solution',
    title: 'Solution de Prêt en Ligne',
    description: 'Plateforme de gestion de prêts en ligne conçue lors d\'un stage à SCECUDS. Analyse, modélisation UML et prototypage Figma.',
    techs: ['Figma', 'UML', 'PHP', 'MySQL'],
    status: 'completed',
    featured: false,
    year: 2024,
    category: 'Web App',
  },
  {
    id: 'static-sites',
    title: 'Sites Web Hébergés',
    description: '3 sites web statiques conçus et hébergés sur InfinityFree pour des clients et projets académiques.',
    techs: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'InfinityFree'],
    status: 'completed',
    featured: false,
    year: 2024,
    category: 'Web',
  },
]

export const statusLabels: Record<ProjectStatus, string> = {
  completed: 'Terminé',
  'in-progress': 'En cours',
  concept: 'Concept',
}

export const statusColors: Record<ProjectStatus, string> = {
  completed: 'text-green-400 bg-green-400/10 border-green-400/30',
  'in-progress': 'text-amber-400 bg-amber-400/10 border-amber-400/30',
  concept: 'text-slate-400 bg-slate-400/10 border-slate-400/30',
}
