import { useEffect, useState } from 'react'
import { useInView } from '../components/useInView'

const stats = [
  { num: 3, suffix: '', label: 'Case Studies' },
  { num: 800, suffix: '+', label: 'Projected Views / Video' },
  { num: 50000, suffix: '', label: 'Campaign Budget (₹)', prefix: '₹' },
  { num: 4, suffix: '', label: 'Certifications' },
]

function Counter({ num, suffix, prefix = '' }) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView()

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = num / 60
    const timer = setInterval(() => {
      start += step
      if (start >= num) { setCount(num); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 20)
    return () => clearInterval(timer)
  }, [inView, num])

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString('en-IN')}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <div style={{
      background: 'var(--s1)',
      borderTop: '1px solid var(--b1)', borderBottom: '1px solid var(--b1)',
      display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
      padding: '40px 60px', gap: 20, position: 'relative', zIndex: 1,
    }}>
      {stats.map((s, i) => (
        <div key={i} style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: 'Syne', fontSize: 42, fontWeight: 800, color: 'var(--a)',
          }}>
            <Counter num={s.num} suffix={s.suffix} prefix={s.prefix || ''} />
          </div>
          <div style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: 1.5, textTransform: 'uppercase', marginTop: 6 }}>
            {s.label}
          </div>
        </div>
      ))}
      <style>{`@media(max-width:768px){div[style*="repeat(4"]{grid-template-columns:repeat(2,1fr)!important;padding:24px 20px!important}}`}</style>
    </div>
  )
}
