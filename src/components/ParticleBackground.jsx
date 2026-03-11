import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return
    
    let animationFrameId
    
    // Resize canvas to match window
    const setSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setSize()
    window.addEventListener('resize', setSize)

    // Track mouse for interactivity
    let mouse = { x: -1000, y: -1000 }
    const onMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    window.addEventListener('mousemove', onMouseMove)

    // Initialize Particles
    const particles = []
    const particleCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 15000), 100)
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
        })
    }
    
    let angle = 0

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // 1. Draw rotating background polygon (representing the Lines component)
      angle += 0.002
      ctx.save()
      ctx.translate(canvas.width / 2, canvas.height / 2)
      ctx.rotate(angle)
      ctx.beginPath()
      const radius = Math.min(canvas.width, canvas.height) * 0.35 + 50
      for (let i = 0; i <= 30; i++) {
          const a = (i / 30) * Math.PI * 2
          const px = Math.cos(a) * radius
          const py = Math.sin(a) * radius
          if (i === 0) ctx.moveTo(px, py)
          else ctx.lineTo(px, py)
      }
      ctx.strokeStyle = 'rgba(123, 94, 248, 0.12)' // Light purple #7b5ef8
      ctx.lineWidth = 1
      ctx.stroke()
      ctx.restore()

      // 2. Process and draw interactive particles
      ctx.fillStyle = 'rgba(0, 245, 196, 0.8)' // Green #00f5c4
      for (let i = 0; i < particles.length; i++) {
          let p = particles[i]
          
          // Repel from mouse
          let dx = mouse.x - p.x
          let dy = mouse.y - p.y
          let dist = Math.sqrt(dx * dx + dy * dy)
          
          if (dist < 150) {
              const force = (150 - dist) / 150
              p.vx -= (dx / dist) * force * 0.5
              p.vy -= (dy / dist) * force * 0.5
          }
          
          // Limit max speed and apply slight friction
          const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
          if (speed > 1.2) {
              p.vx *= 0.95
              p.vy *= 0.95
          }
          
          p.x += p.vx
          p.y += p.vy
          
          // Screen wraparound limits
          if (p.x < 0) p.x = canvas.width
          if (p.x > canvas.width) p.x = 0
          if (p.y < 0) p.y = canvas.height
          if (p.y > canvas.height) p.y = 0
          
          // Draw particle
          ctx.beginPath()
          ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2)
          ctx.fill()
          
          // Draw connecting lines between close particles
          for (let j = i + 1; j < particles.length; j++) {
              let p2 = particles[j]
              let dx2 = p.x - p2.x
              let dy2 = p.y - p2.y
              let dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2)
              if (dist2 < 100) {
                  ctx.beginPath()
                  ctx.strokeStyle = `rgba(0, 245, 196, ${0.15 * (1 - dist2 / 100)})`
                  ctx.moveTo(p.x, p.y)
                  ctx.lineTo(p2.x, p2.y)
                  ctx.stroke()
              }
          }
      }
      
      animationFrameId = requestAnimationFrame(render)
    }
    render()

    return () => {
      window.removeEventListener('resize', setSize)
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  )
}
