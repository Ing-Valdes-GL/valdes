import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Doungmo Lagoung Valdes — Full-Stack Developer',
  description:
    'Portfolio de Doungmo Lagoung Valdes, développeur web & mobile basé à Douala, Cameroun. Spécialisé en React, Next.js, React Native, TypeScript.',
  keywords: [
    'developer',
    'full-stack',
    'react',
    'nextjs',
    'react native',
    'typescript',
    'douala',
    'cameroun',
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
    <html lang="fr" className="dark">
      <head>
        <link rel="icon" href="/profile.jpg" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-[#050508] text-white overflow-x-hidden`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
