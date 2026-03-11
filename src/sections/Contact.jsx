import { motion } from 'framer-motion'
import { useInView } from '../components/useInView'

export default function Contact() {
  const [ref, inView] = useInView()

  return (
    <section id="contact" style={{
      padding: '80px 60px 120px', textAlign: 'center',
      position: 'relative', zIndex: 1,
    }}>
      {/* Glow */}
      <div style={{
        position: 'absolute', top: '40%', left: '50%',
        transform: 'translate(-50%,-50%)', width: 700, height: 350,
        background: 'radial-gradient(ellipse, rgba(0,245,196,0.05), transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, color: 'var(--muted)', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 20 }}
        >
          <span style={{ width: 22, height: 1, background: 'var(--a)', display: 'block' }} />
          Ready to Scale?
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          style={{ fontFamily: 'Syne', fontSize: 'clamp(44px,6vw,80px)', fontWeight: 800, letterSpacing: -2, marginBottom: 16 }}
        >
          Let's Build<br />
          <span style={{
            background: 'linear-gradient(90deg, var(--a), var(--a2))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>Growth Systems.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          style={{ color: 'var(--muted)', fontSize: 14, marginBottom: 52, maxWidth: 560, margin: '0 auto 52px', lineHeight: 1.8 }}
        >
          I build growth systems that combine Google Ads, YouTube SEO, Marketing Analytics, and AI-powered automation to deliver measurable results that compound month-over-month.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}
        >
          {[
            { label: '📅 Book a Free Growth Audit', href: 'mailto:anshkush9292@gmail.com', primary: true },
            { label: '🔗 View LinkedIn', href: 'https://linkedin.com/in/anshuman-kushwaha-31bb95237', primary: false },
            { label: '✉️ anshkush9292@gmail.com', href: 'mailto:anshkush9292@gmail.com', primary: false },
          ].map((btn, i) => (
            <a key={i} href={btn.href} target={btn.href.startsWith('http') ? '_blank' : undefined}
              style={{
                border: '1px solid var(--b2)', color: btn.primary ? '#000' : 'var(--text)',
                padding: '14px 28px', fontSize: 12, letterSpacing: 2,
                textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: 10,
                background: btn.primary ? 'var(--a)' : 'transparent',
                borderColor: btn.primary ? 'var(--a)' : 'var(--b2)',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => {
                if (!btn.primary) { e.currentTarget.style.borderColor = 'var(--a)'; e.currentTarget.style.color = 'var(--a)' }
                else { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,245,196,0.2)' }
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = btn.primary ? 'var(--a)' : 'var(--b2)'
                e.currentTarget.style.color = btn.primary ? '#000' : 'var(--text)'
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >{btn.label}</a>
          ))}
        </motion.div>
      </div>

      <style>{`@media(max-width:768px){
        #contact{padding:60px 20px 80px!important}
      }`}</style>
    </section>
  )
}
