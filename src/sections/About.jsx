import { motion } from 'framer-motion'
import { useInView } from '../components/useInView'

const philosophy = [
  'Strategy before spending',
  'Data before decisions',
  'Systems before scaling',
  'Optimization before expansion',
]

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" style={{ padding: '96px 0 80px', position: 'relative', zIndex: 1 }}>
      <div style={{ padding: '0 60px 36px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--muted)', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 12 }}>
          <span style={{ width: 22, height: 1, background: 'var(--a)', display: 'block' }} />
          Who I Am
        </div>
        <h2 style={{ fontFamily: 'Syne', fontSize: 'clamp(36px,4.5vw,60px)', fontWeight: 800, letterSpacing: -1.5 }}>About Me</h2>
      </div>

      <div ref={ref} style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 1, background: 'var(--b1)', border: '1px solid var(--b1)', margin: '0 60px',
      }}>
        <motion.div
          initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ background: 'var(--s1)', padding: 52 }}
        >
          <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.9, marginBottom: 16 }}>
            I'm an <strong style={{ color: 'var(--text)' }}>AI-Driven Growth Marketer</strong> who builds scalable growth systems by combining performance marketing, SEO, analytics, and automation. My focus is measurable impact — qualified leads, improved conversion rates, and predictable revenue growth — not vanity metrics.
          </p>
          <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.9, marginBottom: 16 }}>
            My approach is structured: <strong style={{ color: 'var(--text)' }}>high-intent traffic targeting, conversion-focused messaging,</strong> and continuous data-backed optimization.
          </p>
          <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.9 }}>
            AI isn't just for content generation. I leverage it for competitor analysis, keyword research, performance insights, and campaign optimization — <strong style={{ color: 'var(--text)' }}>smarter decisions and faster execution.</strong>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ background: 'var(--s2)', padding: 52 }}
        >
          <div style={{ fontFamily: 'Syne', fontSize: 16, fontWeight: 700, color: 'var(--a)', marginBottom: 20, letterSpacing: 1 }}>
            My Growth Philosophy
          </div>
          {philosophy.map((p, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 14,
              padding: '14px 0', borderBottom: i < 3 ? '1px solid var(--b1)' : 'none',
            }}>
              <span style={{ fontFamily: 'Syne', fontSize: 11, color: 'var(--a)', fontWeight: 700, letterSpacing: 2, flexShrink: 0 }}>
                0{i + 1}
              </span>
              <span style={{ fontSize: 13, color: 'var(--text)', letterSpacing: 0.5 }}>{p}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`@media(max-width:768px){
        #about > div:last-child{grid-template-columns:1fr!important;margin:0 20px!important}
        #about > div:first-child{padding:60px 20px 36px!important}
        #about > div:last-child > div{padding:32px!important}
      }`}</style>
    </section>
  )
}
