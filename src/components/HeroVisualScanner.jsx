import { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ShieldCheck, Award, Scan, CheckCircle2, Crosshair, Sparkles, Activity } from 'lucide-react'
import { assetUrl } from '../utils/asset.js'

export default function HeroVisualScanner({ ready }) {
  const containerRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)
  const [scanData, setScanData] = useState({
    purity: '99.98%',
    haccp: 'PASS (Tier 1)',
    iso: 'ISO 22000 VALID',
    status: 'OPTIMAL SPEC'
  })

  // Mouse tracking physics
  const mouseX = useMotionValue(230)
  const mouseY = useMotionValue(270)
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 })

  // 3D Tilt calculation
  const tiltX = useMotionValue(0)
  const tiltY = useMotionValue(0)
  const springTiltX = useSpring(tiltX, { stiffness: 100, damping: 18 })
  const springTiltY = useSpring(tiltY, { stiffness: 100, damping: 18 })

  const rotateX = useTransform(springTiltY, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(springTiltX, [-0.5, 0.5], [-12, 12])

  // Handle cursor moves
  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    mouseX.set(x)
    mouseY.set(y)

    // Normalize -0.5 to 0.5 for tilt
    tiltX.set((x / rect.width) - 0.5)
    tiltY.set((y / rect.height) - 0.5)
  }

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => {
    setIsHovered(false)
    tiltX.set(0)
    tiltY.set(0)
    // Return to center
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      mouseX.set(rect.width * 0.5)
      mouseY.set(rect.height * 0.5)
    }
  }

  // Dynamic simulation of micro metrics
  useEffect(() => {
    const interval = setInterval(() => {
      const purityVal = (99.95 + Math.random() * 0.04).toFixed(2) + '%'
      setScanData((prev) => ({
        ...prev,
        purity: purityVal
      }))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="hero-scanner-wrapper" aria-label="Interactive Precision Food Science Lens">
      <motion.div
        ref={containerRef}
        className="hero-scanner-card"
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1100,
          transformStyle: 'preserve-3d'
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Luxury Gold Ambient Glow Behind Card */}
        <div className="hero-scanner__ambient-glow" aria-hidden="true" />

        {/* Outer Metallic Bezel */}
        <div className="hero-scanner__bezel">
          <div className="hero-scanner__stage">
            {/* Primary Base Image */}
            <img
              src={assetUrl('images/hero-luxury.jpg')}
              alt="QAF Alliance food science and quality assurance laboratory"
              className={`hero-scanner__img ${imgLoaded ? 'is-loaded' : ''}`}
              onLoad={() => setImgLoaded(true)}
              onError={(e) => {
                e.target.onerror = null
                e.target.src = 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80'
              }}
            />

            {/* Ambient Dark Emerald & Gold Vignette */}
            <div className="hero-scanner__vignette" />

            {/* Dual Layer: Scientific Precision Spectral Reveal */}
            <motion.div
              className={`hero-scanner__reveal ${isHovered ? 'is-active' : ''}`}
              style={{
                // Mask moves with cursor to reveal scientific overlay
                WebkitMaskImage: useTransform(
                  [springX, springY],
                  ([x, y]) => `radial-gradient(circle 140px at ${x}px ${y}px, black 35%, transparent 100%)`
                ),
                maskImage: useTransform(
                  [springX, springY],
                  ([x, y]) => `radial-gradient(circle 140px at ${x}px ${y}px, black 35%, transparent 100%)`
                )
              }}
            >
              {/* High-contrast scientific image with gold spectrum grade */}
              <img
                src={assetUrl('images/hero-luxury.jpg')}
                alt="Spectral quality scan view"
                className="hero-scanner__img-spectral"
              />
              {/* Scientific grid lines */}
              <div className="hero-scanner__grid-overlay" />
            </motion.div>

            {/* Interactive Optical Lens Crosshair (Follows Cursor) */}
            <motion.div
              className="hero-scanner__lens"
              style={{
                left: springX,
                top: springY
              }}
              animate={{
                opacity: isHovered ? 1 : 0.6,
                scale: isHovered ? 1 : 0.9
              }}
              transition={{ duration: 0.2 }}
            >
              {/* Concentric rotating reticle rings */}
              <div className="hero-scanner__reticle-ring" />
              <div className="hero-scanner__reticle-inner" />
              <div className="hero-scanner__crosshair" />

              {/* Floating live readout beside lens */}
              <motion.div
                className="hero-scanner__hud-tag"
                initial={false}
                animate={{ opacity: isHovered ? 1 : 0.75, y: isHovered ? 0 : 2 }}
              >
                <div className="hud-tag__top">
                  <span className="hud-tag__dot" />
                  <span className="hud-tag__title">SPECTRUM ANALYSIS</span>
                </div>
                <div className="hud-tag__metric">
                  <span className="hud-tag__lbl">Purity:</span>
                  <span className="hud-tag__val">{scanData.purity}</span>
                </div>
                <div className="hud-tag__metric">
                  <span className="hud-tag__lbl">Safety:</span>
                  <span className="hud-tag__val hud-tag__val--green">{scanData.haccp}</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Technical HUD Corner Brackets */}
            <div className="hud-corner hud-corner--tl" />
            <div className="hud-corner hud-corner--tr" />
            <div className="hud-corner hud-corner--bl" />
            <div className="hud-corner hud-corner--br" />

            {/* Top Bar HUD status */}
            <div className="hero-scanner__top-hud">
              <span className="top-hud__chip">
                <Scan size={13} className="spin-slow" />
                <span>REC // SPEC-SCAN 4K</span>
              </span>
              <span className="top-hud__status">
                <Activity size={13} />
                <span>GCC VALIDATED</span>
              </span>
            </div>
          </div>
        </div>

        {/* Floating 3D Depth Badges (Pop out in Z-space) */}
        <motion.div
          className="hero-scanner__floating-badge hero-scanner__floating-badge--top"
          style={{ translateZ: 50 }}
          initial={{ opacity: 0, x: -30 }}
          animate={ready ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <div className="scanner-badge-icon scanner-badge-icon--gold">
            <ShieldCheck size={20} />
          </div>
          <div>
            <p className="scanner-badge-title">ISO 22000 & HACCP</p>
            <p className="scanner-badge-sub">Dubai Municipality Cleared</p>
          </div>
        </motion.div>

        <motion.div
          className="hero-scanner__floating-badge hero-scanner__floating-badge--bottom"
          style={{ translateZ: 60 }}
          initial={{ opacity: 0, y: 30 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <div className="scanner-badge-icon scanner-badge-icon--emerald">
            <Award size={20} />
          </div>
          <div>
            <p className="scanner-badge-title">99.8% First-Time Pass</p>
            <p className="scanner-badge-sub">60+ GCC Brands Scaled</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
