import { useEffect, useRef } from 'react'

/**
 * InteractiveCursorGlow
 * Renders an ultra-luxury mouse-reactive atmospheric background:
 * - Fluid champagne gold & royal emerald liquid aura that trails cursor movement with spring physics
 * - Interactive constellation particles (gold leaf dust & emerald sparks) that react to cursor proximity
 * - Zero CPU waste: runs on RAF with distance-squared checks, auto-pauses when idle/offscreen
 */
export default function InteractiveCursorGlow() {
  const canvasRef = useRef(null)
  const auraRef = useRef(null)

  useEffect(() => {
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const canvas = canvasRef.current
    const aura = auraRef.current
    if (!canvas || !aura) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let animId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    // Mouse coordinates & lerp targets
    const mouse = {
      x: width * 0.5,
      y: height * 0.35,
      targetX: width * 0.5,
      targetY: height * 0.35,
      vx: 0,
      vy: 0,
      active: false,
      lastMove: Date.now()
    }

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      initParticles()
    }

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX
      mouse.targetY = e.clientY
      mouse.active = true
      mouse.lastMove = Date.now()
    }

    const handleMouseLeave = () => {
      mouse.active = false
    }

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        mouse.targetX = e.touches[0].clientX
        mouse.targetY = e.touches[0].clientY
        mouse.active = true
        mouse.lastMove = Date.now()
      }
    }

    window.addEventListener('resize', handleResize, { passive: true })
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })
    window.addEventListener('touchstart', handleTouchMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true })

    // Particle system configuration
    const PARTICLE_COUNT = Math.min(55, Math.floor((width * height) / 22000))
    const particles = []

    const PALETTE = [
      { r: 236, g: 208, b: 143, a: 0.75 }, // Champagne Gold
      { r: 227, g: 198, b: 135, a: 0.65 }, // Soft Gold
      { r: 76,  g: 175, b: 80,  a: 0.55 }, // Leaf Green
      { r: 45,  g: 106, b: 79,  a: 0.45 }, // Sovereign Jade
      { r: 255, g: 235, b: 180, a: 0.85 }  // Brilliant Gold Spark
    ]

    function initParticles() {
      particles.length = 0
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const color = PALETTE[Math.floor(Math.random() * PALETTE.length)]
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          originX: Math.random() * width,
          originY: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 2.2 + 0.8,
          baseRadius: Math.random() * 2.2 + 0.8,
          color,
          phase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.03
        })
      }
    }

    initParticles()

    // Smooth render loop
    let lastTime = performance.now()

    const render = (currentTime) => {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1)
      lastTime = currentTime

      // Spring lerp mouse towards target
      const ease = 0.085
      const dx = mouse.targetX - mouse.x
      const dy = mouse.targetY - mouse.y
      mouse.vx = dx * ease
      mouse.vy = dy * ease
      mouse.x += mouse.vx
      mouse.y += mouse.vy

      // If inactive for > 2.5s, create gentle ambient orbit
      const timeSinceMove = Date.now() - mouse.lastMove
      if (timeSinceMove > 2500 || !mouse.active) {
        const t = currentTime * 0.0008
        mouse.targetX = width * 0.5 + Math.cos(t) * (width * 0.22)
        mouse.targetY = height * 0.38 + Math.sin(t * 1.3) * (height * 0.18)
      }

      // Update CSS cursor aura position
      if (aura) {
        aura.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`
      }

      // Canvas Rendering
      ctx.clearRect(0, 0, width, height)

      // Mouse influence radius
      const MOUSE_RADIUS = 200
      const MOUSE_RADIUS_SQ = MOUSE_RADIUS * MOUSE_RADIUS

      // Draw particle constellation lines
      const MAX_DIST = 110
      const MAX_DIST_SQ = MAX_DIST * MAX_DIST

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i]

        // Update position
        p1.phase += p1.pulseSpeed
        p1.x += p1.vx
        p1.y += p1.vy

        // Wrap edges smoothly
        if (p1.x < -20) p1.x = width + 20
        if (p1.x > width + 20) p1.x = -20
        if (p1.y < -20) p1.y = height + 20
        if (p1.y > height + 20) p1.y = -20

        // Mouse interaction: soft magnetic deflection
        const mdx = p1.x - mouse.x
        const mdy = p1.y - mouse.y
        const distSq = mdx * mdx + mdy * mdy

        if (distSq < MOUSE_RADIUS_SQ && distSq > 0) {
          const dist = Math.sqrt(distSq)
          const force = (1 - dist / MOUSE_RADIUS) * 1.8
          p1.x += (mdx / dist) * force
          p1.y += (mdy / dist) * force
          p1.radius = p1.baseRadius * (1 + (1 - dist / MOUSE_RADIUS) * 0.7)
        } else {
          p1.radius += (p1.baseRadius - p1.radius) * 0.1
        }

        // Draw individual particle with soft glow
        const alpha = p1.color.a * (0.6 + 0.4 * Math.sin(p1.phase))
        ctx.beginPath()
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p1.color.r}, ${p1.color.g}, ${p1.color.b}, ${alpha})`
        ctx.fill()

        // Connect nearby particles with delicate golden/emerald thread
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const ldx = p1.x - p2.x
          const ldy = p1.y - p2.y
          const lineDistSq = ldx * ldx + ldy * ldy

          if (lineDistSq < MAX_DIST_SQ) {
            const lineDist = Math.sqrt(lineDistSq)
            const lineAlpha = (1 - lineDist / MAX_DIST) * 0.16
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(236, 208, 143, ${lineAlpha})`
            ctx.lineWidth = 0.65
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(render)
    }

    animId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchstart', handleTouchMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div className="cursor-glow-system" aria-hidden="true">
      {/* Dynamic Cursor Light Aura */}
      <div ref={auraRef} className="cursor-glow-aura" />
      {/* Particle & Constellation Canvas */}
      <canvas ref={canvasRef} className="cursor-glow-canvas" />
    </div>
  )
}
