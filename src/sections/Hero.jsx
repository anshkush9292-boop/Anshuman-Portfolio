import { motion } from 'framer-motion'

const skills = ['Google Ads', 'YouTube SEO', 'Prompt Engineering', 'AI Automation', 'Meta Ads', 'Marketing Analytics', 'UGC Ads']

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }
})

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '130px 60px 80px', position: 'relative', zIndex: 1,
    }}>
      <div style={{ maxWidth: 960 }}>
        <motion.div {...fadeUp(0)} style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(0,245,196,0.06)', border: '1px solid rgba(0,245,196,0.18)',
          color: 'var(--a)', fontSize: 11, letterSpacing: 3,
          textTransform: 'uppercase', padding: '7px 18px', marginBottom: 32,
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%', background: 'var(--a)',
            animation: 'pulse 2s infinite'
          }} />
          Available for Opportunities
        </motion.div>

        <motion.h1 {...fadeUp(0.1)} style={{
          fontFamily: 'Syne', fontSize: 'clamp(56px, 9vw, 120px)',
          fontWeight: 800, lineHeight: 0.88, letterSpacing: -4,
        }}>
          <span style={{ display: 'block', color: 'var(--text)' }}>Anshuman</span>
          <span style={{
            display: 'block',
            background: 'linear-gradient(110deg, var(--a), var(--a2) 50%, var(--a3))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>Kushwaha</span>
        </motion.h1>

        <motion.p {...fadeUp(0.2)} style={{
          marginTop: 28, fontSize: 15, color: 'var(--muted)',
          maxWidth: 600, lineHeight: 1.9,
        }}>
          I help <strong style={{ color: 'var(--a)', WebkitTextFillColor: 'var(--a)' }}>startups, creators, and Indian businesses</strong> generate leads, scale visibility, and build predictable growth using <strong style={{ color: 'var(--a)', WebkitTextFillColor: 'var(--a)' }}>Ads, SEO, Analytics, and AI automation.</strong>
        </motion.p>

        <motion.div {...fadeUp(0.3)} style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 32 }}>
          {skills.map(s => (
            <span key={s} style={{
              border: '1px solid var(--b2)', color: 'var(--muted)',
              fontSize: 11, letterSpacing: 1.5, padding: '6px 16px',
              transition: 'all 0.3s', cursor: 'default',
            }}
              onMouseEnter={e => { e.target.style.borderColor = 'var(--a)'; e.target.style.color = 'var(--a)' }}
              onMouseLeave={e => { e.target.style.borderColor = 'var(--b2)'; e.target.style.color = 'var(--muted)' }}
            >{s}</span>
          ))}
        </motion.div>

        <motion.div {...fadeUp(0.4)} style={{ display: 'flex', gap: 14, marginTop: 48, flexWrap: 'wrap' }}>
          <a href="#contact" style={{
            background: 'var(--a)', color: '#000', fontFamily: 'DM Mono',
            fontWeight: 600, fontSize: 12, letterSpacing: 2, textTransform: 'uppercase',
            padding: '15px 36px', display: 'inline-block', transition: 'all 0.3s',
          }}
            onMouseEnter={e => { e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 12px 40px rgba(0,245,196,0.25)' }}
            onMouseLeave={e => { e.target.style.transform = 'none'; e.target.style.boxShadow = 'none' }}
          >Book a Free Growth Audit</a>
          <a href="#work" style={{
            border: '1px solid var(--b2)', color: 'var(--text)',
            fontFamily: 'DM Mono', fontSize: 12, letterSpacing: 2,
            textTransform: 'uppercase', padding: '15px 36px',
            display: 'inline-block', transition: 'all 0.3s',
          }}
            onMouseEnter={e => { e.target.style.borderColor = 'var(--a)'; e.target.style.color = 'var(--a)' }}
            onMouseLeave={e => { e.target.style.borderColor = 'var(--b2)'; e.target.style.color = 'var(--text)' }}
          >View Case Studies</a>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.3;transform:scale(1.5)} }
        @media(max-width:768px){ section#hero{ padding: 100px 20px 60px !important; } }
      `}</style>
    </section>
  )
}
