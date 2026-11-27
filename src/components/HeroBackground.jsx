import { useEffect, useRef } from 'react'

/**
 * HeroBackground — "45° Diagonal Shimmer Bands (Liquid Gold & Emerald Silk)"
 *
 * Sovereign Luxury Architecture for QAF Alliance:
 * - 45° diagonal sweeping ribbons (top-left to bottom-right)
 * - Flowing S-curve cubic splines evoking haute-horlogerie brushed gold & liquid silk
 * - Rhythmic light caustics sweeping along the ribbon crests
 * - Interactive spring-damped cursor flex
 * - Drifting starlight gold specks that illuminate as the shimmer passes
 * - Central contrast vignette ensuring 100% headline legibility
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

    // Accessibility: prefers-reduced-motion check
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    let reducedMotion = reducedMotionQuery.matches

    // Specks: 32 on desktop, 18 on mobile
    const TOTAL_SPECKS = 32
    const specks = []

    const initSpecks = (w, h) => {
      specks.length = 0
      for (let i = 0; i < TOTAL_SPECKS; i++) {
        specks.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: 0.6 + Math.random() * 1.5,
          speed: 0.12 + Math.random() * 0.28,
          phase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.015 + Math.random() * 0.025,
          vx: 0,
          vy: 0
        })
      }
    }

    // Pointer state with smooth spring physics
    let hasPointer = false
    let rawX = 0
    let rawY = 0
    let sx = 0
    let sy = 0

    // Canvas resize with retina DPR cap at 2
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

    // Pointer tracking on window
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

    // Three Curated 45° Diagonal Silk Ribbons
    const RIBBONS = [
      {
        id: 'primary-gold',
        offsetNorm: 0.0, // Center diagonal
        width: 260,
        speed: 0.00045,
        causticSpeed: 0.00028,
        phase: 0.0,
        waveAmp: 38,
        baseAlpha: 0.22,
        r: 236,
        g: 214,
        b: 150 // Sovereign Champagne Gold
      },
      {
        id: 'secondary-amber',
        offsetNorm: -0.22, // Offset toward top-right
        width: 210,
        speed: 0.00038,
        causticSpeed: 0.00022,
        phase: 2.1,
        waveAmp: 28,
        baseAlpha: 0.16,
        r: 218,
        g: 185,
        b: 105 // Warm Gilded Amber
      },
      {
        id: 'subsurface-emerald',
        offsetNorm: 0.24, // Offset toward bottom-left
        width: 300,
        speed: 0.00032,
        causticSpeed: 0.00018,
        phase: 4.3,
        waveAmp: 32,
        baseAlpha: 0.20,
        r: 34,
        g: 130,
        b: 92 // Imperial Emerald Glow
      }
    ]

    // Render single frame at timestamp t (ms)
    const renderFrame = (t) => {
      if (!ctx || width === 0 || height === 0) return

      const isMobile = width < 768
      const activeSpecks = isMobile ? 18 : 32

      // Cursor target position with automatic harmonic drift fallback
      let targetX = rawX
      let targetY = rawY

      if (!hasPointer || isMobile) {
        targetX = width * (0.5 + 0.22 * Math.sin(t * 0.0003))
        targetY = height * (0.5 + 0.16 * Math.cos(t * 0.00037))
      }

      // Smooth spring lerp
      sx += (targetX - sx) * 0.05
      sy += (targetY - sy) * 0.05

      const pointerX = sx
      const pointerY = sy

      // Cursor displacement influence relative to center
      const normCursorX = (pointerX - width * 0.5) / (width * 0.5)
      const normCursorY = (pointerY - height * 0.5) / (height * 0.5)

      // ==========================================
      // 1. BASE CANOPY GRADIENT
      // Royal Deep Emerald: #0a3326 (top) -> #041a12 (bottom)
      // ==========================================
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height)
      bgGrad.addColorStop(0, '#0a3326')
      bgGrad.addColorStop(0.55, '#07241b')
      bgGrad.addColorStop(1, '#041a12')
      ctx.fillStyle = bgGrad
      ctx.fillRect(0, 0, width, height)

      // ==========================================
      // 2. 45° DIAGONAL SHIMMER BANDS (LIQUID SILK)
      // ==========================================
      ctx.save()
      ctx.globalCompositeOperation = 'screen'

      // Diagonal vector: 45 degrees from top-left (-20% margin) to bottom-right (120% margin)
      const diagStartX = -width * 0.2
      const diagStartY = -height * 0.2
      const diagEndX = width * 1.2
      const diagEndY = height * 1.2

      // Normal perpendicular vector to 45° diagonal
      const diagDx = diagEndX - diagStartX
      const diagDy = diagEndY - diagStartY
      const diagLen = Math.hypot(diagDx, diagDy)
      const unitDx = diagDx / diagLen
      const unitDy = diagDy / diagLen

      // Perpendicular normal (pointing toward upper-right / lower-left)
      const normNx = -unitDy
      const normNy = unitDx

      const SEGMENTS = 28

      for (let b = 0; b < RIBBONS.length; b++) {
        const ribbon = RIBBONS[b]

        // Lateral offset distance across diagonal
        const lateralOffset = ribbon.offsetNorm * (width * 0.45)

        // Rhythmic caustic shimmer sweep along ribbon length (0 to 1)
        const shimmerCycle = (t * ribbon.causticSpeed + ribbon.phase) % 1.6 - 0.3

        // Calculate ribbon spline nodes
        const topVertices = []
        const bottomVertices = []
        const caustics = []

        for (let i = 0; i <= SEGMENTS; i++) {
          const u = i / SEGMENTS

          // Base point along 45° diagonal axis
          const baseX = diagStartX + u * diagDx + normNx * lateralOffset
          const baseY = diagStartY + u * diagDy + normNy * lateralOffset

          // Dynamic fluid S-curve wave displacement
          const wavePhase = u * Math.PI * 2.2 + t * ribbon.speed + ribbon.phase
          const waveDisplacement =
            Math.sin(wavePhase) * ribbon.waveAmp * (isMobile ? 0.6 : 1)

          // Cursor interactive flex: pull ribbon gently toward cursor
          const cursorWeight = Math.sin(u * Math.PI) // Maximum flex in the middle
          const cursorFlex =
            (normCursorX * normNx + normCursorY * normNy) * 45 * cursorWeight

          const totalDisplacement = waveDisplacement + (isMobile ? 0 : cursorFlex)

          const centerX = baseX + normNx * totalDisplacement
          const centerY = baseY + normNy * totalDisplacement

          // Ribbon width with tapered ends
          const taper = Math.sin(u * Math.PI)
          const halfWidth = (ribbon.width * 0.5 * (0.65 + 0.35 * taper)) * (isMobile ? 0.75 : 1)

          topVertices.push({
            x: centerX - normNx * halfWidth,
            y: centerY - normNy * halfWidth
          })

          bottomVertices.push({
            x: centerX + normNx * halfWidth,
            y: centerY + normNy * halfWidth
          })

          // Calculate shimmer caustic intensity at this node
          const distToShimmer = Math.abs(u - shimmerCycle)
          let causticInt = 0
          if (distToShimmer < 0.22) {
            causticInt = Math.pow(Math.cos((distToShimmer / 0.22) * (Math.PI * 0.5)), 2)
          }
          caustics.push(causticInt)
        }

        // Draw the fluid silk ribbon with soft feathering
        ctx.beginPath()
        ctx.moveTo(topVertices[0].x, topVertices[0].y)

        // Top edge curve
        for (let i = 1; i < topVertices.length; i++) {
          const prev = topVertices[i - 1]
          const curr = topVertices[i]
          const midX = (prev.x + curr.x) * 0.5
          const midY = (prev.y + curr.y) * 0.5
          ctx.quadraticCurveTo(prev.x, prev.y, midX, midY)
        }
        ctx.lineTo(topVertices[topVertices.length - 1].x, topVertices[topVertices.length - 1].y)

        // Connect to bottom edge in reverse
        ctx.lineTo(bottomVertices[bottomVertices.length - 1].x, bottomVertices[bottomVertices.length - 1].y)
        for (let i = bottomVertices.length - 2; i >= 0; i--) {
          const prev = bottomVertices[i + 1]
          const curr = bottomVertices[i]
          const midX = (prev.x + curr.x) * 0.5
          const midY = (prev.y + curr.y) * 0.5
          ctx.quadraticCurveTo(prev.x, prev.y, midX, midY)
        }
        ctx.closePath()

        // Create linear gradient along ribbon's diagonal length
        const ribbonGrad = ctx.createLinearGradient(
          diagStartX,
          diagStartY,
          diagEndX,
          diagEndY
        )

        const baseA = ribbon.baseAlpha
        // Modulate alpha across the ribbon length with travelling shimmer peak
        ribbonGrad.addColorStop(0, `rgba(${ribbon.r}, ${ribbon.g}, ${ribbon.b}, 0)`)
        ribbonGrad.addColorStop(
          0.2,
          `rgba(${ribbon.r}, ${ribbon.g}, ${ribbon.b}, ${baseA * 0.45})`
        )
        ribbonGrad.addColorStop(
          0.5,
          `rgba(${ribbon.r}, ${ribbon.g}, ${ribbon.b}, ${baseA * 1.0})`
        )
        ribbonGrad.addColorStop(
          0.8,
          `rgba(${ribbon.r}, ${ribbon.g}, ${ribbon.b}, ${baseA * 0.55})`
        )
        ribbonGrad.addColorStop(1, `rgba(${ribbon.r}, ${ribbon.g}, ${ribbon.b}, 0)`)

        ctx.fillStyle = ribbonGrad
        ctx.fill()

        // Draw radiant high-frequency caustic crest highlight along the spine
        ctx.beginPath()
        for (let i = 0; i < topVertices.length; i++) {
          const midX = (topVertices[i].x + bottomVertices[i].x) * 0.5
          const midY = (topVertices[i].y + bottomVertices[i].y) * 0.5
          if (i === 0) ctx.moveTo(midX, midY)
          else ctx.lineTo(midX, midY)
        }

        ctx.lineWidth = 4 + 14 * Math.max(...caustics)
        const spineGrad = ctx.createLinearGradient(diagStartX, diagStartY, diagEndX, diagEndY)
        const shimmerPeakA = Math.min(baseA * 1.8 + Math.max(...caustics) * 0.28, 0.45)

        spineGrad.addColorStop(0, `rgba(255, 246, 215, 0)`)
        spineGrad.addColorStop(0.35, `rgba(255, 246, 215, ${shimmerPeakA * 0.4})`)
        spineGrad.addColorStop(0.5, `rgba(255, 246, 215, ${shimmerPeakA})`)
        spineGrad.addColorStop(0.65, `rgba(255, 246, 215, ${shimmerPeakA * 0.4})`)
        spineGrad.addColorStop(1, `rgba(255, 246, 215, 0)`)

        ctx.strokeStyle = spineGrad
        ctx.stroke()
      }

      // ==========================================
      // 3. DRIFTING STARLIGHT GOLD SPECKS
      // ==========================================
      for (let i = 0; i < activeSpecks; i++) {
        const s = specks[i]

        s.y -= s.speed
        s.x += Math.sin(t * 0.0008 + s.phase) * 0.22

        // Screen wrap
        if (s.y < -15) {
          s.y = height + 15
          s.x = Math.random() * width
        }
        if (s.x < -15) s.x = width + 15
        else if (s.x > width + 15) s.x = -15

        // Check proximity to 45° diagonal axis
        // Projection along perpendicular normal
        const dFromDiag = Math.abs((s.x - width * 0.5) * normNx + (s.y - height * 0.5) * normNy)
        const diagProximity = Math.max(0, 1 - dFromDiag / (width * 0.35))

        // Gentle sinusoidal twinkle
        const pulse = 0.5 + 0.5 * Math.sin(t * s.pulseSpeed + s.phase)
        const a = (0.25 + 0.45 * pulse) * (0.6 + 0.6 * diagProximity)

        // Soft outer glow
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r * 3.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(236, 214, 150, ${a * 0.16})`
        ctx.fill()

        // Brilliant core
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 245, 205, ${a * 0.95})`
        ctx.fill()
      }

      ctx.restore()
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

    // Pause on hidden tabs; resume on visible
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
      {/* Optical contrast vignette: preserves 100% legibility of headline & CTAs */}
      <div
        className="hero-background__vignette"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse at 50% 45%, rgba(6,35,26,0.52) 0%, transparent 55%)'
        }}
      />
    </div>
  )
}
