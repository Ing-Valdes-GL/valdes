export type ProjectStatus = 'completed' | 'in-progress' | 'concept'

export interface Project {
  id: string
  title: string
  description: string
  techs: string[]
  githubUrl?: string
  liveUrl?: string
  status: ProjectStatus
  featured: boolean
  highlight?: string
  year: number
  category: string
}

/**
 * ─── NOTE ────────────────────────────────────────────────────────────────────
 * Pour afficher les repos en temps réel depuis GitHub, remplace ce tableau
 * statique par un appel à :
 *   GET https://api.github.com/users/Ing-Valdes-GL/repos
 *       ?sort=pushed&per_page=9&type=owner
 *
 * En statique (output: 'export'), effectue ce fetch dans un script de build
 * et écris le résultat dans src/data/projects.generated.ts.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const projects: Project[] = [
  // ─── Projets mis en avant ─────────────────────────────
  {
    id: 'vertex-biolabs',
    title: 'Vertex BioBabs',
    description: 'Site web moderne pour un laboratoire de biologie — présentation des recherches, équipes et services avec une UI soignée et des animations avancées.',
    techs: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/Ing-Valdes-GL/vertex-biolabs',
    liveUrl: 'https://vertex-biolabs.vercel.app',
    status: 'completed',
    featured: true,
    year: 2025,
    category: 'Web App',
  },
  {
    id: 'alluvicare',
    title: 'Alluvicare — Kawaga',
    description: 'Site web complet pour Kawaga, une plateforme de santé digitale. Design professionnel, architecture modulaire et expérience utilisateur optimisée.',
    techs: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/Ing-Valdes-GL/alluvicare',
    liveUrl: 'https://alluvicareuk.store',
    status: 'completed',
    featured: true,
    year: 2025,
    category: 'Web App',
  },
  {
    id: 'peptide-research-hub',
    title: 'Peptide Research Hub',
    description: 'Plateforme de recherche scientifique dédiée aux peptides — présentation de données de recherche, publications et ressources pour chercheurs.',
    techs: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/Ing-Valdes-GL/peptide-research-hub',
    liveUrl: 'https://peptide-research-hub-sigma.vercel.app',
    status: 'in-progress',
    featured: true,
    year: 2025,
    category: 'Web App',
  },
  {
    id: 'dashmeal',
    title: 'DashMeal — Food Delivery',
    description: 'Mon projet le plus ambitieux : plateforme complète de livraison de repas avec app mobile Expo, dashboard admin Next.js, API REST Express/Supabase, paiements Campay et notifications push en temps réel.',
    techs: ['React Native', 'Expo', 'Next.js', 'TypeScript', 'Supabase', 'Express'],
    githubUrl: 'https://github.com/Ing-Valdes-GL/DashMeal',
    liveUrl: 'https://project-e1sdh.vercel.app/fr',
    status: 'in-progress',
    featured: true,
    highlight: 'PLUS GROS PROJET',
    year: 2025,
    category: 'Mobile App',
  },
  {
    id: 'moneymap',
    title: 'MoneyMap',
    description: 'Application mobile de suivi de dépenses personnelles avec tableaux de bord visuels et statistiques en temps réel.',
    techs: ['React Native', 'Expo', 'TypeScript', 'Neon DB', 'Express', 'Render'],
    githubUrl: 'https://github.com/Ing-Valdes-GL',
    status: 'completed',
    featured: true,
    year: 2025,
    category: 'Mobile App',
  },
  {
    id: 'ecommerce-chat',
    title: 'E-Commerce + Chat IA',
    description: 'Site e-commerce complet avec Next.js et un chat IA intégré permettant une assistance à l\'achat en temps réel.',
    techs: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    githubUrl: 'https://github.com/Ing-Valdes-GL',
    status: 'completed',
    featured: true,
    year: 2025,
    category: 'Web App',
  },
  {
    id: 'valpay',
    title: 'ValPay — Fintech Cameroun',
    description: 'Agrégateur de paiements cross-platform pour le marché camerounais. Wallet avec historique, transferts P2P (1% de frais), recharge télécom via Reloadly, paiements Orange Money / MTN MoMo / Express Union via CamPay, QR code marchand et sécurité PIN + HMAC-SHA256. Projet réalisé lors de mon stage chez CCN Technologies.',
    techs: ['Flutter', 'Laravel', 'PHP', 'Supabase', 'PostgreSQL', 'Railway'],
    githubUrl: 'https://github.com/Ing-Valdes-GL/ValPay',
    liveUrl: 'https://web-kohl-three-94.vercel.app/#/landing',
    status: 'in-progress',
    featured: true,
    highlight: 'PROJET DE STAGE',
    year: 2026,
    category: 'Web App',
  },
  // ─── Autres projets ───────────────────────────────────
  {
    id: 'todoapp',
    title: 'ToDoApp — Agenda Intelligent',
    description: 'Application d\'agenda avancée avec rappels intelligents, catégorisation des tâches et synchronisation cross-plateforme.',
    techs: ['React Native', 'Expo', 'TypeScript', 'Supabase'],
    githubUrl: 'https://github.com/Ing-Valdes-GL',
    status: 'in-progress',
    featured: false,
    year: 2025,
    category: 'Mobile App',
  },
  {
    id: 'pppte-pwa',
    title: 'PPPTE — Progressive Web App',
    description: 'Application web progressive (PWA) avec mode hors-ligne, notifications push et installation sur mobile/desktop.',
    techs: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PWA'],
    githubUrl: 'https://github.com/Ing-Valdes-GL',
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
