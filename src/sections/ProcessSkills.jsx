import { motion } from 'framer-motion'
import { useInView } from '../components/useInView'

const steps = [
  { n: '01', t: 'Audit', d: 'Analyze current performance, identify gaps, benchmark competitors.' },
  { n: '02', t: 'Strategy', d: 'Define goals, target audience, channel mix, messaging framework.' },
  { n: '03', t: 'Execution', d: 'Launch campaigns, create content, set up tracking dashboards.' },
  { n: '04', t: 'Optimization', d: 'Monitor metrics, A/B test, iterate based on real performance data.' },
  { n: '05', t: 'Reporting', d: 'Track results, communicate insights, plan next phase of growth.' },
]

const skills = [
  { icon: '🎯', t: 'Performance Marketing', d: 'Paid funnels across Google and Meta with data-driven iteration cycles.', tags: ['Google Ads', 'Meta Ads', 'A/B Testing', 'CRO'] },
  { icon: '🤖', t: 'AI & Automation', d: 'Generative AI and prompt engineering to automate workflows at scale.', tags: ['Prompt Engineering', 'GitHub Copilot', 'AI Workflows'] },
  { icon: '📊', t: 'Analytics & BI', d: 'Transforming raw data into growth insights through KPI frameworks.', tags: ['Google Analytics', 'KPI Design', 'ROAS'] },
  { icon: '📺', t: 'YouTube SEO', d: 'Channel growth through keyword architecture and CTR engineering.', tags: ['SEO Strategy', 'Long-tail KW', 'CTR'] },
  { icon: '🚀', t: 'Growth Strategy', d: 'Multi-channel growth systems using funnel logic and market intelligence.', tags: ['Funnel Design', 'Market Research', 'ROI'] },
  { icon: '✍️', t: 'Content & Copy', d: 'High-converting ad copy, UGC hooks, SEO content for specific personas.', tags: ['Ad Copy', 'Hook Strategy', 'UGC'] },
]

function SectionHeader({ tag, title }) {
  return (
    <div style={{ padding: '96px 60px 36px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--muted)', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 12 }}>
        <span style={{ width: 22, height: 1, background: 'var(--a)', display: 'block' }} />
        {tag}
      </div>
      <h2 style={{ fontFamily: 'Syne', fontSize: 'clamp(36px,4.5vw,60px)', fontWeight: 800, letterSpacing: -1.5 }}>{title}</h2>
    </div>
  )
}

export function Process() {
  const [ref, inView] = useInView()
  return (
    <section id="process" style={{ padding: '0 0 80px', position: 'relative', zIndex: 1 }}>
      <SectionHeader tag="How I Work" title="My Growth Process" />
      <div ref={ref} style={{
        display: 'grid', gridTemplateColumns: 'repeat(5,1fr)',
        gap: 1, background: 'var(--b1)', border: '1px solid var(--b1)', margin: '0 60px',
      }}>
        {steps.map((s, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            style={{ background: 'var(--s1)', padding: '36px 28px', transition: 'background 0.3s' }}
            whileHover={{ backgroundColor: 'rgba(0,245,196,0.03)' }}
          >
            <div style={{ fontFamily: 'Syne', fontSize: 36, fontWeight: 800, color: 'rgba(0,245,196,0.1)', letterSpacing: -1, marginBottom: 20 }}>{s.n}</div>
            <div style={{ fontFamily: 'Syne', fontSize: 16, fontWeight: 700, color: 'var(--a)', marginBottom: 10 }}>{s.t}</div>
            <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.75 }}>{s.d}</div>
          </motion.div>
        ))}
      </div>
      <style>{`@media(max-width:768px){
        #process > div:last-child{grid-template-columns:1fr!important;margin:0 20px!important}
        #process > div:first-child{padding:60px 20px 36px!important}
      }`}</style>
    </section>
  )
}

export function Skills() {
  const [ref, inView] = useInView()
  return (
    <section id="skills" style={{ padding: '0 0 80px', position: 'relative', zIndex: 1 }}>
      <SectionHeader tag="Expertise" title="Skills & Tools" />
      <div ref={ref} style={{
        display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
        gap: 1, background: 'var(--b1)', border: '1px solid var(--b1)', margin: '0 60px',
      }}>
        {skills.map((s, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            style={{ background: 'var(--s1)', padding: 40, transition: 'background 0.3s' }}
            whileHover={{ backgroundColor: 'rgba(0,245,196,0.03)' }}
          >
            <div style={{
              width: 42, height: 42, background: 'rgba(0,245,196,0.07)',
              border: '1px solid rgba(0,245,196,0.12)', display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: 18, marginBottom: 18, borderRadius: 3,
            }}>{s.icon}</div>
            <div style={{ fontFamily: 'Syne', fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{s.t}</div>
            <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.75, marginBottom: 14 }}>{s.d}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {s.tags.map(tag => (
                <span key={tag} style={{
                  background: 'rgba(255,255,255,0.03)', border: '1px solid var(--b2)',
                  color: 'var(--dim)', fontSize: 10, letterSpacing: 1, padding: '4px 10px',
                }}>{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <style>{`@media(max-width:768px){
        #skills > div:last-child{grid-template-columns:1fr!important;margin:0 20px!important}
        #skills > div:first-child{padding:60px 20px 36px!important}
      }`}</style>
    </section>
  )
}
