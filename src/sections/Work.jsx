import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../components/useInView'

const cases = [
  {
    num: '01', tags: ['Google Ads', 'Lead Gen'], tagColors: ['var(--a)', 'var(--a3)'],
    title: 'Coaching Center — Gurgaon',
    sub: 'Lead generation campaign for competitive exam coaching (IIT JEE, NEET, UPSC, CAT)',
    metrics: [{ v: '4–6%', l: 'Estimated CTR' }, { v: '8–12%', l: 'Conversion Rate' }, { v: '₹150+', l: 'Cost Per Lead' }, { v: '40–60', l: 'Monthly Leads' }],
    desc: 'Built a full Google Ads strategy targeting high-intent local searches across IIT JEE, NEET, UPSC, and CAT verticals. Structured campaigns with separate ad groups per exam type, location targeting Gurgaon + 10km radius, and Target CPA bid strategy.',
    insights: [
      { t: 'Keyword Layering', d: 'Combined broad exam terms with geo-modifiers to capture intent at multiple funnel stages.' },
      { t: 'Copy Psychology', d: 'Scarcity, authority, and money-back guarantee in every ad description.' },
      { t: 'Campaign Structure', d: 'Separate ad groups per exam type + mobile + desktop targeting for precision bidding.' },
      { t: 'Persona Targeting', d: 'Separate angles for students vs. parents to maximize relevance scores.' },
    ]
  },
  {
    num: '02', tags: ['YouTube SEO', 'AI Strategy'], tagColors: ['var(--a)', 'var(--a2)'],
    title: 'AI Agentic Workflows for Advisors',
    sub: 'YouTube SEO for a small channel targeting financial advisors',
    metrics: [{ v: '800+', l: 'Views / 30 Days' }, { v: '7%+', l: 'Click-Through Rate' }, { v: '45%+', l: 'Avg View Duration' }, { v: '40%+', l: 'YouTube Search Traffic' }],
    desc: 'Developed a complete YouTube SEO strategy for a small channel (under 5k subs) targeting high-intent financial advisors. Focused on long-tail keyword clusters combining AI, Wealth Management, and Agentic Workflows.',
    insights: [
      { t: 'Title Specificity', d: '"5 Agentic Workflows That Improve Returns" beats generic titles.' },
      { t: 'Tag Architecture', d: '30 tags (15 broad + 15 niche) to index for mass and specific terms.' },
      { t: 'Quality Over Volume', d: 'Targeted 5–10 high-quality subscriber conversions over raw views.' },
      { t: 'Chapter Markers', d: 'Enhanced UX + additional search snippets for YouTube and Google indexing.' },
    ]
  },
  {
    num: '03', tags: ['Analytics', 'Dashboard'], tagColors: ['var(--a2)', 'var(--a)'],
    title: 'Marketing Analytics Dashboard',
    sub: 'Centralized KPI tracking across Google Ads, YouTube, and social channels',
    metrics: [{ v: '4+', l: 'Channels Tracked' }, { v: 'Real-time', l: 'Decision Making' }, { v: 'CAC', l: 'Cost Optimization' }, { v: 'MRR', l: 'Revenue Tracking' }],
    desc: 'Built a centralized performance dashboard tracking KPIs across Google Ads, YouTube, and social channels to enable real-time decision-making and optimization opportunities. Tracked CTR, CPC, ROAS, AVD, CAC by channel, LTV projection, and MRR.',
    insights: [
      { t: 'Channel Performance', d: 'Identified top-performing channels and underperformers for budget reallocation.' },
      { t: 'Audience Behavior', d: 'Tracked which keywords/content drive highest-quality leads.' },
      { t: 'Cost Efficiency', d: 'Monitored CAC trends and optimized budget allocation across all channels.' },
      { t: 'Conversion Funnel', d: 'Measured trial-to-paid conversion rates and identified drop-off points.' },
    ]
  },
]

function CaseCard({ c, index }) {
  const [open, setOpen] = useState(false)
  const [ref, inView] = useInView()

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 36 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ background: 'var(--s1)', border: '1px solid var(--b1)', overflow: 'hidden' }}
    >
      <div onClick={() => setOpen(!open)} style={{
        display: 'grid', gridTemplateColumns: '72px 1fr 44px',
        alignItems: 'center', gap: 20, padding: '36px 44px', cursor: 'pointer',
        transition: 'background 0.3s',
      }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,245,196,0.015)'}
        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
      >
        <div style={{ fontFamily: 'Syne', fontSize: 50, fontWeight: 800, color: 'rgba(255,255,255,0.04)', letterSpacing: -2 }}>{c.num}</div>
        <div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 10, flexWrap: 'wrap' }}>
            {c.tags.map((t, i) => (
              <span key={i} style={{
                fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', padding: '3px 10px',
                color: c.tagColors[i], background: `${c.tagColors[i]}14`, border: `1px solid ${c.tagColors[i]}26`,
              }}>{t}</span>
            ))}
          </div>
          <div style={{ fontFamily: 'Syne', fontSize: 21, fontWeight: 700, marginBottom: 4 }}>{c.title}</div>
          <div style={{ fontSize: 12, color: 'var(--muted)' }}>{c.sub}</div>
        </div>
        <motion.div animate={{ rotate: open ? 45 : 0 }} style={{
          width: 40, height: 40, border: open ? 'none' : '1px solid var(--b2)',
          borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 20,
          background: open ? 'var(--a)' : 'transparent', color: open ? '#000' : 'var(--muted)',
          transition: 'background 0.3s, color 0.3s',
        }}>+</motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '36px 44px', borderTop: '1px solid var(--b1)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12, marginBottom: 28 }}>
                {c.metrics.map((m, i) => (
                  <div key={i} style={{
                    padding: 18, background: 'rgba(0,245,196,0.04)',
                    border: '1px solid rgba(0,245,196,0.09)', borderRadius: 3,
                  }}>
                    <div style={{ fontFamily: 'Syne', fontSize: 24, fontWeight: 700, color: 'var(--a)' }}>{m.v}</div>
                    <div style={{ fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--muted)', marginTop: 4 }}>{m.l}</div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.9, marginBottom: 22 }}>{c.desc}</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {c.insights.map((ins, i) => (
                  <div key={i} style={{
                    background: 'rgba(255,255,255,0.02)', borderLeft: '2px solid var(--a2)',
                    padding: '14px 16px', fontSize: 12, color: 'var(--muted)', lineHeight: 1.7,
                  }}>
                    <strong style={{ color: 'var(--text)', display: 'block', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 5 }}>{ins.t}</strong>
                    {ins.d}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`@media(max-width:768px){
        div[style*="repeat(4,1fr)"]{grid-template-columns:repeat(2,1fr)!important}
        div[style*="1fr 1fr"]{grid-template-columns:1fr!important}
        div[style*="72px 1fr 44px"]{padding:20px!important;grid-template-columns:40px 1fr 40px!important;gap:12px!important}
      }`}</style>
    </motion.div>
  )
}

export default function Work() {
  return (
    <section id="work" style={{ padding: '0 0 80px', position: 'relative', zIndex: 1 }}>
      <div style={{ padding: '96px 60px 36px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--muted)', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 12 }}>
          <span style={{ width: 22, height: 1, background: 'var(--a)', display: 'block' }} />
          Portfolio
        </div>
        <h2 style={{ fontFamily: 'Syne', fontSize: 'clamp(36px,4.5vw,60px)', fontWeight: 800, letterSpacing: -1.5 }}>Case Studies</h2>
      </div>
      <div style={{ padding: '0 60px', display: 'flex', flexDirection: 'column', gap: 2 }}>
        {cases.map((c, i) => <CaseCard key={i} c={c} index={i} />)}
      </div>
      <style>{`@media(max-width:768px){ #work > div{ padding: 0 20px !important; } #work > div:first-child{ padding: 60px 20px 36px !important; } }`}</style>
    </section>
  )
}
