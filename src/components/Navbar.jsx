import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Experience', href: '#experience' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '16px 60px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: scrolled ? 'rgba(0,0,0,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid #1c1c1c' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      <a href="#" style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 20, color: 'var(--a)', letterSpacing: 3 }}>
        AK<span style={{ color: 'var(--text)' }}>.</span>
      </a>

      {/* Desktop */}
      <ul style={{ display: 'flex', gap: 36, listStyle: 'none' }} className="desktop-nav">
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} style={{
              color: 'var(--muted)', fontSize: 11, letterSpacing: 2,
              textTransform: 'uppercase', transition: 'color 0.3s',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--a)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >{l.label}</a>
          </li>
        ))}
        <li>
          <a href="#contact" style={{
            border: '1px solid var(--a)', color: 'var(--a)',
            padding: '8px 20px', fontSize: 11, letterSpacing: 2,
            textTransform: 'uppercase', transition: 'all 0.3s',
          }}
            onMouseEnter={e => { e.target.style.background = 'var(--a)'; e.target.style.color = '#000' }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--a)' }}
          >Book Audit</a>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button onClick={() => setOpen(!open)} style={{
        display: 'none', background: 'none', border: 'none',
        color: 'var(--text)', fontSize: 24, cursor: 'pointer',
      }} className="hamburger">☰</button>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            position: 'absolute', top: '100%', left: 0, right: 0,
            background: 'rgba(0,0,0,0.98)', padding: '20px',
            borderBottom: '1px solid #1c1c1c',
          }}
        >
          {[...links, { label: 'Book Audit', href: '#contact' }].map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              display: 'block', padding: '14px 0', color: 'var(--muted)',
              fontSize: 13, letterSpacing: 2, textTransform: 'uppercase',
              borderBottom: '1px solid #1c1c1c',
            }}>{l.label}</a>
          ))}
        </motion.div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
          nav { padding: 16px 20px !important; }
        }
      `}</style>
    </motion.nav>
  )
}
