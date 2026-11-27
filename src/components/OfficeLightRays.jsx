import { useEffect, useRef } from 'react'

/**
 * OfficeLightRays
 * Soft golden beams of volumetric light that fall from the top of the page,
 * evoking sunlight through tall windows in a formal executive boardroom.
 *
 * Features:
 * - Opens first: Gracefully unfurls and brightens on mount before any other element
 * - Slow ambient drift: Very slow, meditative sinusoidal undulation
 * - Interactive mouse lean: Beams smoothly tilt and follow cursor movement with gentle physics
 * - Ultra-clean: Non-distracting, feathered edges keep headline and copy 100% in focus
 */
export default function OfficeLightRays({ ready = true }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let animId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    // Opening animation state
    let openProgress = 0
    const startTime = performance.now()
    const OPEN_DURATION = 2200 // 2.2 seconds smooth open

    // Mouse tracking with smooth spring damping
    const mouse = {
      x: width * 0.5,
      y: height * 0.35,
      targetX: width * 0.5,
      targetY: height * 0.35,
      leanAngle: 0,
      targetLean: 0,
      active: false,
      lastMove: Date.now()
    }

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      initMotes()
    }

    const handleMouseMove = (e) => {
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      mouse.targetX = e.clientX - rect.left
      mouse.targetY = e.clientY - rect.top
      mouse.active = true
      mouse.lastMove = Date.now()
    }

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0] && canvas) {
        const rect = canvas.getBoundingClientRect()
        mouse.targetX = e.touches[0].clientX - rect.left
        mouse.targetY = e.touches[0].clientY - rect.top
        mouse.active = true
        mouse.lastMove = Date.now()
      }
    }

    window.addEventListener('resize', handleResize, { passive: true })
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })

    // Curated volumetric light ray configuration
    // Spread across the top like sunlight streaming through multi-pane executive windows
    const BEAMS = [
      {
        offsetNormX: -0.32,
        baseAngle: -0.24,
        topWidth: 40,
        bottomWidth: 260,
        alphaMax: 0.20,
        speed: 0.00028,
        phase: 0.4
      },
      {
        offsetNormX: -0.16,
        baseAngle: -0.14,
        topWidth: 60,
        bottomWidth: 340,
        alphaMax: 0.28,
        speed: 0.00022,
        phase: 1.9
      },
      {
        offsetNormX: -0.04,
        baseAngle: -0.04,
        topWidth: 85,
        bottomWidth: 440,
        alphaMax: 0.36, // Central primary sunbeam
        speed: 0.00018,
        phase: 3.4
      },
      {
        offsetNormX: 0.08,
        baseAngle: 0.07,
        topWidth: 70,
        bottomWidth: 380,
        alphaMax: 0.30,
        speed: 0.00025,
        phase: 5.1
      },
      {
        offsetNormX: 0.22,
        baseAngle: 0.18,
        topWidth: 50,
        bottomWidth: 310,
        alphaMax: 0.22,
        speed: 0.00020,
        phase: 2.3
      },
      {
        offsetNormX: 0.36,
        baseAngle: 0.29,
        topWidth: 35,
        bottomWidth: 240,
        alphaMax: 0.16,
        speed: 0.00032,
        phase: 4.5
      }
    ]

    // Sparse, serene golden sun motes drifting quietly within the light beams
    const MOTE_COUNT = Math.min(22, Math.floor(width / 70))
    const motes = []

    function initMotes() {
      motes.length = 0
      for (let i = 0; i < MOTE_COUNT; i++) {
        motes.push({
          x: Math.random() * width,
          y: Math.random() * height * 0.85,
          radius: Math.random() * 1.4 + 0.6,
          vy: Math.random() * 0.25 + 0.12,
          vx: (Math.random() - 0.5) * 0.15,
          alpha: Math.random() * 0.4 + 0.2,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.015
        })
      }
    }

    initMotes()

    const render = (now) => {
      // Calculate "opens first" expansion curve
      const elapsed = now - startTime
      if (openProgress < 1) {
        const rawT = Math.min(elapsed / OPEN_DURATION, 1)
        // Smooth luxury easeOutQuart curve
        openProgress = 1 - Math.pow(1 - rawT, 4)
      }

      // Smooth mouse lean physics
      const normMouseX = (mouse.targetX - width * 0.5) / (width * 0.5)
      // Max tilt angle: ~12 degrees (0.21 radians) so it remains composed and elegant
      mouse.targetLean = prefersReducedMotion ? 0 : normMouseX * 0.21

      // Gentle spring lerp
      const leanDamping = 0.045
      mouse.leanAngle += (mouse.targetLean - mouse.leanAngle) * leanDamping

      // Idle ambient drift if mouse is inactive
      const idleTime = Date.now() - mouse.lastMove
      let ambientLean = 0
      if (!prefersReducedMotion && (idleTime > 2000 || !mouse.active)) {
        ambientLean = Math.sin(now * 0.00045) * 0.035
      }

      const totalLean = mouse.leanAngle + ambientLean

      ctx.clearRect(0, 0, width, height)

      // Light source origin at the top (virtual formal window transom)
      const originY = -80
      const originX = width * 0.5

      // Use 'screen' blending for natural optical caustics where light beams cross
      ctx.globalCompositeOperation = 'screen'

      // Apply blur for soft, feathered, atmospheric window light
      ctx.filter = 'blur(24px)'

      const beamReach = height * (1.1 + openProgress * 0.35)

      // Render each volumetric light shaft
      for (let i = 0; i < BEAMS.length; i++) {
        const b = BEAMS[i]

        // Very slow organic breath swaying
        const wave = prefersReducedMotion ? 0 : Math.sin(now * b.speed + b.phase) * 0.035
        const effectiveAngle = b.baseAngle + totalLean + wave

        // Origin at top window frame
        const topCenterX = originX + b.offsetNormX * (width * 0.55)
        const topHalfW = b.topWidth * 0.5

        // Bottom intersection
        const bottomCenterX = topCenterX + Math.tan(effectiveAngle) * beamReach
        const bottomHalfW = b.bottomWidth * (0.85 + openProgress * 0.35)

        // Polygon vertices for the beam shaft
        const p1x = topCenterX - topHalfW
        const p1y = originY
        const p2x = topCenterX + topHalfW
        const p2y = originY
        const p3x = bottomCenterX + bottomHalfW
        const p3y = beamReach
        const p4x = bottomCenterX - bottomHalfW
        const p4y = beamReach

        // Create linear gradient along the light ray direction
        const grad = ctx.createLinearGradient(topCenterX, originY, bottomCenterX, beamReach)

        const peakAlpha = b.alphaMax * openProgress * 0.85

        // Sovereign champagne gold & luminous sunlight palette
        grad.addColorStop(0, `rgba(255, 246, 215, ${peakAlpha * 1.0})`)
        grad.addColorStop(0.15, `rgba(236, 208, 143, ${peakAlpha * 0.75})`)
        grad.addColorStop(0.45, `rgba(205, 172, 105, ${peakAlpha * 0.38})`)
        grad.addColorStop(0.78, `rgba(165, 130, 68, ${peakAlpha * 0.12})`)
        grad.addColorStop(1, 'rgba(7, 37, 29, 0)')

        ctx.beginPath()
        ctx.moveTo(p1x, p1y)
        ctx.lineTo(p2x, p2y)
        ctx.lineTo(p3x, p3y)
        ctx.lineTo(p4x, p4y)
        ctx.closePath()

        ctx.fillStyle = grad
        ctx.fill()
      }

      // Reset filter for motes
      ctx.filter = 'none'

      // Render serene golden sun motes caught in the light rays
      if (openProgress > 0.35) {
        const moteAlphaMult = Math.min((openProgress - 0.35) / 0.65, 1)

        for (let i = 0; i < motes.length; i++) {
          const m = motes[i]
          m.pulse += m.pulseSpeed
          m.y += m.vy
          m.x += m.vx + totalLean * 0.35

          // Wrap motes around screen
          if (m.y > height) {
            m.y = -10
            m.x = Math.random() * width
          }
          if (m.x < -20) m.x = width + 20
          if (m.x > width + 20) m.x = -20

          // Distance from central light beam to illuminate mote
          const distFromCenter = Math.abs(m.x - (originX + totalLean * m.y * 0.6)) / width
          const lightIntensity = Math.max(0, 1 - distFromCenter * 2.2)

          const currentAlpha = m.alpha * (0.65 + 0.35 * Math.sin(m.pulse)) * lightIntensity * moteAlphaMult

          if (currentAlpha > 0.04) {
            ctx.beginPath()
            ctx.arc(m.x, m.y, m.radius, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(245, 225, 175, ${currentAlpha})`
            ctx.fill()
          }
        }
      }

      ctx.globalCompositeOperation = 'source-over'
      animId = requestAnimationFrame(render)
    }

    animId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [ready])

  return (
    <div className="office-light-rays-layer" aria-hidden="true">
      <canvas ref={canvasRef} className="office-light-rays-canvas" />
      {/* Soft golden top window glow bar */}
      <div className="office-light-rays-aperture" />
    </div>
  )
}
