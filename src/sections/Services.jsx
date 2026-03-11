import { motion } from 'framer-motion'
import { useInView } from '../components/useInView'

const services = [
  { icon: '🎯', title: 'Google Ads & Lead Generation', desc: 'High-intent keyword targeting, optimized ad copy, conversion tracking. Built for qualified leads, not just clicks.', outcome: 'Qualified leads, improved CTR, reduced CAC' },
  { icon: '📺', title: 'YouTube SEO & Content Growth', desc: 'Long-tail keyword optimization, CTR-driven titles, description SEO, 30-tag architecture, and chapter markers for maximum indexing.', outcome: '800+ views, 7%+ CTR, 45%+ AVD' },
  { icon: '📊', title: 'Marketing Analytics & Dashboards', desc: 'KPI tracking across all channels, performance insights, budget reallocation frameworks, and strategic recommendations for compounding growth.', outcome: 'Data-driven decisions, optimization opportunities identified' },
  { icon: '🤖', title: 'AI-Powered Content & UGC Ads', desc: 'Hook strategy, persuasion elements, conversion-focused creative testing powered by AI automation workflows.', outcome: 'Higher engagement, improved conversion rates' },
]

export default function Services() {
  const [ref, inView] = useInView()

  return (
    <section id="services" style={{ padding: '0 0 80px', position: 'relative', zIndex: 1 }}>
      <div style={{ padding: '96px 60px 36px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--muted)', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 12 }}>
          <span style={{ width: 22, height: 1, background: 'var(--a)', display: 'block' }} />
          What I Do
        </div>
        <h2 style={{ fontFamily: 'Syne', fontSize: 'clamp(36px,4.5vw,60px)', fontWeight: 800, letterSpacing: -1.5 }}>Services</h2>
      </div>

      <div ref={ref} style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 1, background: 'var(--b1)', border: '1px solid var(--b1)', margin: '0 60px',
      }}>
        {services.map((s, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            style={{
              background: 'var(--s1)', padding: 44,
              borderLeft: '3px solid transparent', transition: 'all 0.3s', cursor: 'default',
            }}
            whileHover={{ backgroundColor: 'rgba(0,245,196,0.03)', borderLeftColor: 'var(--a)' }}
          >
            <div style={{ fontSize: 28, marginBottom: 18 }}>{s.icon}</div>
            <div style={{ fontFamily: 'Syne', fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{s.title}</div>
            <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.8 }}>{s.desc}</div>
            <div style={{
              marginTop: 16, padding: '12px 16px',
              background: 'rgba(0,245,196,0.04)', border: '1px solid rgba(0,245,196,0.1)',
              fontSize: 12, color: 'var(--a)', letterSpacing: 0.5,
            }}>
              <span style={{ color: 'var(--muted)', marginRight: 6, textTransform: 'uppercase', fontSize: 10, letterSpacing: 2 }}>Outcome: </span>
              {s.outcome}
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`@media(max-width:768px){
        #services > div:last-child{grid-template-columns:1fr!important;margin:0 20px!important}
        #services > div:first-child{padding:60px 20px 36px!important}
      }`}</style>
    </section>
  )
}
