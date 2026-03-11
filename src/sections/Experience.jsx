import { motion } from 'framer-motion'
import { useInView } from '../components/useInView'

const experience = [
  {
    date: 'Jun 2025 — Present', co: 'NMQ Digital India',
    role: 'Digital Marketing Strategist',
    pts: [
      'Integrated AI automation tools to streamline campaign management workflows',
      'Designed and optimized digital marketing funnels across Google Ads and Meta platforms',
      'Applied prompt engineering to automate content generation and campaign optimization',
      'Conducted in-depth user behavior and conversion metric analysis',
      'Leveraged AI-powered analytics to generate actionable insights for budget allocation',
    ]
  },
  {
    date: 'Jul 2024 — Oct 2024', co: 'Cook N Klean · Varanasi',
    role: 'Human Resources Assistant',
    pts: [
      'Streamlined talent acquisition via structured screening frameworks',
      'Coordinated end-to-end interview processes for multiple concurrent roles',
      'Developed internal communication strategies to enhance employee engagement',
    ]
  },
  {
    date: 'Aug 2024 — Oct 2027', co: 'JK Business School',
    role: 'BBA — Bachelor of Business Administration',
    pts: ['Business strategy, marketing, and emerging technology applications']
  },
]

const certs = [
  { icon: '🎓', name: 'Google Prompting Essentials', by: 'Google' },
  { icon: '💻', name: 'Intro to Prompt Engineering with GitHub Copilot', by: 'GitHub' },
  { icon: '📈', name: 'The Complete Digital Marketing Course', by: 'Udemy' },
  { icon: '🤖', name: 'Generative AI Approaches to Business Challenges', by: 'Professional Certification' },
]

export default function Experience() {
  const [ref, inView] = useInView()
  const [cRef, cInView] = useInView()

  return (
    <>
      <section id="experience" style={{ padding: '0 0 80px', position: 'relative', zIndex: 1 }}>
        <div style={{ padding: '96px 60px 36px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--muted)', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 12 }}>
            <span style={{ width: 22, height: 1, background: 'var(--a)', display: 'block' }} />
            Background
          </div>
          <h2 style={{ fontFamily: 'Syne', fontSize: 'clamp(36px,4.5vw,60px)', fontWeight: 800, letterSpacing: -1.5 }}>Experience</h2>
        </div>
        <div ref={ref} style={{ padding: '0 60px' }}>
          {experience.map((e, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                display: 'grid', gridTemplateColumns: '220px 1fr', gap: 44,
                padding: '44px 0', borderBottom: i < 2 ? '1px solid var(--b1)' : 'none',
              }}
            >
              <div>
                <div style={{ fontSize: 12, color: 'var(--a)', letterSpacing: 1 }}>{e.date}</div>
                <div style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: 2, textTransform: 'uppercase', marginTop: 6 }}>{e.co}</div>
              </div>
              <div>
                <div style={{ fontFamily: 'Syne', fontSize: 20, fontWeight: 700, marginBottom: 14 }}>{e.role}</div>
                <ul style={{ listStyle: 'none' }}>
                  {e.pts.map((p, j) => (
                    <li key={j} style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.85, padding: '4px 0 4px 18px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--a)' }}>→</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        <style>{`@media(max-width:768px){
          #experience > div:last-child > div{grid-template-columns:1fr!important;gap:8px!important;padding:24px 0!important}
          #experience > div{padding:60px 20px 36px!important}
          #experience > div:last-child{padding:0 20px!important}
        }`}</style>
      </section>

      <section id="certifications" style={{ padding: '0 0 80px', position: 'relative', zIndex: 1 }}>
        <div style={{ padding: '0 60px 36px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--muted)', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 12 }}>
            <span style={{ width: 22, height: 1, background: 'var(--a)', display: 'block' }} />
            Credentials
          </div>
          <h2 style={{ fontFamily: 'Syne', fontSize: 'clamp(36px,4.5vw,60px)', fontWeight: 800, letterSpacing: -1.5 }}>Certifications</h2>
        </div>
        <div ref={cRef} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, padding: '0 60px' }}>
          {certs.map((c, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.96 }} animate={cInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: 'var(--s1)', border: '1px solid var(--b1)',
                padding: '24px 28px', display: 'flex', alignItems: 'center', gap: 18,
                transition: 'border-color 0.3s, transform 0.3s',
              }}
              whileHover={{ borderColor: 'var(--a)', y: -2 }}
            >
              <div style={{
                width: 46, height: 46, flexShrink: 0,
                background: 'rgba(123,94,248,0.1)', border: '1px solid rgba(123,94,248,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, borderRadius: 4,
              }}>{c.icon}</div>
              <div>
                <div style={{ fontFamily: 'Syne', fontSize: 14, fontWeight: 600 }}>{c.name}</div>
                <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 3 }}>{c.by}</div>
              </div>
            </motion.div>
          ))}
        </div>
        <style>{`@media(max-width:768px){
          #certifications > div:last-child{grid-template-columns:1fr!important;padding:0 20px!important}
          #certifications > div:first-child{padding:0 20px 36px!important}
        }`}</style>
      </section>
    </>
  )
}
