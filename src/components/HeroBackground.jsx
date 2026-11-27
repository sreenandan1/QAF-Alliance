import { useEffect, useRef } from 'react'

/**
 * HeroBackground — "Light rays + gold specks"
 *
 * Premium, calm, and clean canvas-based background for QAF Alliance.
 * Theme:
 * - Dark green & gold vertical gradient (#0a3326 to #041a12)
 * - Volumetric light rays with top radial halo leaning toward cursor/drift
 * - Drifting, twinkling gold specks with gentle cursor repel
 * - Bottom emerald radial glow & subtle vignette overlay
 */
export default function HeroBackground({ className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId = null
    let width = 0
    let height = 0

    // Respect prefers-reduced-motion
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    let reducedMotion = reducedMotionQuery.matches

    // Specks pool: 70 total, 35 active when width < 768
    const TOTAL_SPECKS = 70
    const specks = []

    const initSpecks = (w, h) => {
      specks.length = 0
      for (let i = 0; i < TOTAL_SPECKS; i++) {
        specks.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: 0.5 + Math.random() * 1.6, // radius 0.5 to 2.1
          speed: 0.1 + Math.random() * 0.35, // upward speed 0.1 to 0.45 px per frame
          phase: Math.random() * Math.PI * 2,
          ox: 0,
          oy: 0
        })
      }
    }

    // Pointer state
    let hasPointer = false
    let rawX = 0
    let rawY = 0
    let sx = 0
    let sy = 0

    // Resize handling with devicePixelRatio cap at 2
    const handleResize = () => {
      if (!canvas) return
      const parent = canvas.parentElement || canvas
      const rect = parent.getBoundingClientRect()
      width = Math.ceil(rect.width || window.innerWidth)
      height = Math.ceil(rect.height || window.innerHeight)

      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      if (specks.length === 0) {
        initSpecks(width, height)
        sx = width * 0.5
        sy = height * 0.5
      }
    }

    handleResize()

    // Pointer listeners on window
    const handlePointerMove = (e) => {
      if (width < 768) return
      const rect = canvas.getBoundingClientRect()
      rawX = e.clientX - rect.left
      rawY = e.clientY - rect.top
      hasPointer = true
    }

    const handlePointerLeave = () => {
      hasPointer = false
    }

    window.addEventListener('resize', handleResize, { passive: true })
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    document.addEventListener('mouseleave', handlePointerLeave)
    window.addEventListener('pointercancel', handlePointerLeave)

    // Render single frame at timestamp t
    const renderFrame = (t) => {
      if (!ctx || width === 0 || height === 0) return

      const isUnder768 = width < 768
      const speckCount = isUnder768 ? 35 : 70

      // Cursor position: smoothed or automatic drift
      let targetX = rawX
      let targetY = rawY

      if (!hasPointer || isUnder768) {
        targetX = width * (0.5 + 0.25 * Math.sin(t * 0.0003))
        targetY = height * (0.5 + 0.15 * Math.cos(t * 0.00037))
      }

      sx += (targetX - sx) * 0.1
      sy += (targetY - sy) * 0.1

      const pointerX = sx
      const pointerY = sy

      // ==========================================
      // 1. BASE GRADIENT BACKGROUND
      // Vertical gradient from #0a3326 (top) to #041a12 (bottom)
      // ==========================================
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height)
      bgGrad.addColorStop(0, '#0a3326')
      bgGrad.addColorStop(1, '#041a12')
      ctx.fillStyle = bgGrad
      ctx.fillRect(0, 0, width, height)

      // ==========================================
      // 2. EFFECT 1: LIGHT RAYS
      // ==========================================
      const ox = width * 0.5 + (pointerX - width * 0.5) * 0.15
      const oy = -30

      // Soft halo at the origin: radial gradient, radius H * 0.7, from rgba(236,214,150,0.2) to 0
      const haloRadius = height * 0.7
      const haloGrad = ctx.createRadialGradient(ox, oy, 0, ox, oy, haloRadius)
      haloGrad.addColorStop(0, 'rgba(236, 214, 150, 0.2)')
      haloGrad.addColorStop(1, 'rgba(236, 214, 150, 0)')
      ctx.fillStyle = haloGrad
      ctx.fillRect(0, 0, width, height)

      // Draw 8 beams with globalCompositeOperation = "lighter"
      ctx.globalCompositeOperation = 'lighter'
      const L = height * 1.25

      for (let i = 0; i < 8; i++) {
        const angle =
          -0.8 +
          i * 0.23 +
          Math.sin(t * 0.0004 + i * 1.3) * 0.05 +
          ((pointerX - width * 0.5) / width) * 0.3

        const w = Math.tan(0.03 + 0.035 * ((i * 37) % 5) / 4) * L

        // Far end center
        const cx = ox + Math.sin(angle) * L
        const cy = oy + Math.cos(angle) * L

        // Perpendicular unit vector
        const nx = Math.cos(angle)
        const ny = -Math.sin(angle)

        // Triangle vertices
        const p1x = cx - nx * w
        const p1y = cy - ny * w
        const p2x = cx + nx * w
        const p2y = cy + ny * w

        // Linear gradient along its length
        const beamGrad = ctx.createLinearGradient(ox, oy, cx, cy)
        const startAlpha = 0.1 + 0.05 * Math.sin(t * 0.0007 + i)
        beamGrad.addColorStop(0, `rgba(236, 214, 150, ${startAlpha})`)
        beamGrad.addColorStop(1, 'rgba(236, 214, 150, 0)')

        ctx.beginPath()
        ctx.moveTo(ox, oy)
        ctx.lineTo(p1x, p1y)
        ctx.lineTo(p2x, p2y)
        ctx.closePath()

        ctx.fillStyle = beamGrad
        ctx.fill()
      }

      // Reset globalCompositeOperation to "source-over" afterward
      ctx.globalCompositeOperation = 'source-over'

      // ==========================================
      // 3. BOTTOM GREEN GLOW AND SPECKS
      // ==========================================
      // Soft green glow at the bottom center: radial gradient from rgba(30,120,85,0.25) to 0, radius H
      const greenGlow = ctx.createRadialGradient(
        width * 0.5,
        height,
        0,
        width * 0.5,
        height,
        height
      )
      greenGlow.addColorStop(0, 'rgba(30, 120, 85, 0.25)')
      greenGlow.addColorStop(1, 'rgba(30, 120, 85, 0)')
      ctx.fillStyle = greenGlow
      ctx.fillRect(0, 0, width, height)

      // Gold specks
      for (let i = 0; i < speckCount; i++) {
        const s = specks[i]

        // Upward speed and horizontal sway
        s.y -= s.speed
        s.x += Math.sin(t * 0.0008 + s.phase) * 0.25

        // Top exit wrap
        if (s.y < -10) {
          s.y = height + 10
          s.x = Math.random() * width
        }

        // Horizontal screen wrap
        if (s.x < 0) s.x += width
        else if (s.x > width) s.x -= width

        // Cursor repel (active on screens >= 768px)
        if (!isUnder768) {
          const dx = s.x - pointerX
          const dy = s.y - pointerY
          const d = Math.hypot(dx, dy)

          if (d < 150 && d > 0.0001) {
            const f = 1 - d / 150
            s.ox += (dx / d) * f * 0.9
            s.oy += (dy / d) * f * 0.9
          }
        }

        s.ox *= 0.95
        s.oy *= 0.95
        s.x += s.ox
        s.y += s.oy

        // Twinkle: a = 0.3 + 0.5 * (0.5 + 0.5 * sin(t * 0.002 + phase))
        const a = 0.3 + 0.5 * (0.5 + 0.5 * Math.sin(t * 0.002 + s.phase))

        // Draw two circles per speck:
        // 1. Soft glow (radius r * 4, alpha a * 0.14, rgb 236,214,150)
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r * 4, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(236, 214, 150, ${a * 0.14})`
        ctx.fill()

        // 2. Core (radius r, alpha a, rgb 255,240,190)
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 240, 190, ${a})`
        ctx.fill()
      }
    }

    // Main animation loop
    const loop = (time) => {
      renderFrame(time)
      animId = requestAnimationFrame(loop)
    }

    if (reducedMotion) {
      renderFrame(0)
    } else {
      animId = requestAnimationFrame(loop)
    }

    // Handle visibilitychange: pause when hidden, resume when visible
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (animId) {
          cancelAnimationFrame(animId)
          animId = null
        }
      } else {
        if (!animId && !reducedMotion) {
          animId = requestAnimationFrame(loop)
        }
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    // Listen to reduced motion changes dynamically
    const handleMotionChange = (e) => {
      reducedMotion = e.matches
      if (reducedMotion) {
        if (animId) {
          cancelAnimationFrame(animId)
          animId = null
        }
        renderFrame(0)
      } else if (!animId) {
        animId = requestAnimationFrame(loop)
      }
    }

    if (reducedMotionQuery.addEventListener) {
      reducedMotionQuery.addEventListener('change', handleMotionChange)
    }

    // Cleanup on unmount
    return () => {
      if (animId) cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('pointermove', handlePointerMove)
      document.removeEventListener('mouseleave', handlePointerLeave)
      window.removeEventListener('pointercancel', handlePointerLeave)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      if (reducedMotionQuery.removeEventListener) {
        reducedMotionQuery.removeEventListener('change', handleMotionChange)
      }
    }
  }, [])

  return (
    <div
      className={`hero-background absolute inset-0 z-0 pointer-events-none ${className}`}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          display: 'block'
        }}
      />
      {/* Subtle vignette overlay so edges stay slightly darker and center headline stays fully readable */}
      <div
        className="hero-background__vignette"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse at 50% 45%, rgba(6,35,26,0.55) 0%, transparent 55%)'
        }}
      />
    </div>
  )
}
