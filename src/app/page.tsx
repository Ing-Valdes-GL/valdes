import ParticleBackground from '@/components/ParticleBackground'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      {/* Fixed animated background */}
      <ParticleBackground />

      {/* Navigation */}
      <Navbar />

      {/* Page sections */}
      <div className="relative z-10">
        <Hero />

        {/* Section divider */}
        <SectionDivider />
        <About />

        <SectionDivider />
        <Skills />

        <SectionDivider />
        <Projects />

        <SectionDivider />
        <Contact />
      </div>

      <Footer />
    </main>
  )
}

function SectionDivider() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </div>
  )
}
