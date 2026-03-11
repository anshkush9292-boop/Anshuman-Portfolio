import Cursor from './components/Cursor'
import ParticleBackground from './components/ParticleBackground'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Stats from './sections/Stats'
import About from './sections/About'
import Services from './sections/Services'
import Work from './sections/Work'
import { Process, Skills } from './sections/ProcessSkills'
import Experience from './sections/Experience'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <Cursor />
      <ParticleBackground />

      {/* Grid background */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(0,245,196,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,196,0.02) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <Navbar />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Skills />
        <Work />
        <Process />
        <Experience />
        <Contact />
      </main>

      <footer style={{
        background: 'var(--s1)', borderTop: '1px solid var(--b1)',
        padding: '22px 60px', display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', fontSize: 11, color: 'var(--muted)',
        letterSpacing: 1, position: 'relative', zIndex: 1,
      }}>
        <span>© 2025 Anshuman Kushwaha</span>
        <span style={{ color: 'var(--a)' }}>📍 Gurgaon, Haryana, India</span>
      </footer>
    </>
  )
}
