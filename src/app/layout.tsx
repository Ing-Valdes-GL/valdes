import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Doungmo Lagoung Valdes — Full-Stack Developer',
  description:
    'Portfolio de Doungmo Lagoung Valdes, développeur web & mobile basé à Douala, Cameroun. Spécialisé en React, Next.js, React Native, TypeScript.',
  keywords: [
    'developer', 'full-stack', 'react', 'nextjs', 'react native',
    'typescript', 'douala', 'cameroun',
  ],
  authors: [{ name: 'Doungmo Lagoung Valdes' }],
  openGraph: {
    title: 'Doungmo Lagoung Valdes — Full-Stack Developer',
    description: 'Portfolio de Doungmo Lagoung Valdes, développeur web & mobile.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/profile.jpg" />
      </head>
      <body className={`${montserrat.variable} bg-white text-dark overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
