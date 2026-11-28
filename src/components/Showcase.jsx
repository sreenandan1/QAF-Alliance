import { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ShieldCheck, Award, Sparkles } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { pillars } from '../data/content.js'
import { assetUrl } from '../utils/asset.js'

export default function Showcase({ onOpenConsultation }) {
  const [imgLoaded, setImgLoaded] = useState(false)
  const containerRef = useRef(null)
  const portalRef = useRef(null)
  const pillarsRef = useRef(null)
  const [activePillar, setActivePillar] = useState(0)

  // Interactive mouse tracking across entire showcase
  const mouseNormX = useMotionValue(0)
  const mouseNormY = useMotionValue(0)
  const springNormX = useSpring(mouseNormX, { stiffness: 65, damping: 20 })
  const springNormY = useSpring(mouseNormY, { stiffness: 65, damping: 20 })

  // 3D holographic tilt on the visual portal
  const rotateX = useTransform(springNormY, [-0.5, 0.5], [6, -6])
  const rotateY = useTransform(springNormX, [-0.5, 0.5], [-7, 7])

  const handlePillarsScroll = () => {
    if (!pillarsRef.current) return
    const el = pillarsRef.current
    const scrollLeft = el.scrollLeft
    const firstCard = el.querySelector('.hero-sov__pillar-card')
    const cardWidth = firstCard ? firstCard.offsetWidth : el.offsetWidth * 0.85
    const gap = 16
    const newIdx = Math.round(scrollLeft / (cardWidth + gap))
    setActivePillar(Math.min(Math.max(newIdx, 0), pillars.length - 1))
  }

  const scrollToPillar = (idx) => {
    setActivePillar(idx)
    if (pillarsRef.current) {
      const cards = pillarsRef.current.querySelectorAll('.hero-sov__pillar-card')
      if (cards[idx]) {
        cards[idx].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
      }
    }
  }

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const normX = (e.clientX - rect.left) / rect.width - 0.5
    const normY = (e.clientY - rect.top) / rect.height - 0.5
    mouseNormX.set(normX)
    mouseNormY.set(normY)
  }

  const handleTouchMove = (e) => {
    if (!containerRef.current || !e.touches || !e.touches[0]) return
    const rect = containerRef.current.getBoundingClientRect()
    const touch = e.touches[0]
    const normX = (touch.clientX - rect.left) / rect.width - 0.5
    const normY = (touch.clientY - rect.top) / rect.height - 0.5
    mouseNormX.set(normX)
    mouseNormY.set(normY)
  }

  const handleMouseLeave = () => {
    mouseNormX.set(0)
    mouseNormY.set(0)
  }

  const handleConsultClick = (e) => {
    if (onOpenConsultation) {
      e.preventDefault()
      onOpenConsultation(e)
    }
  }

  return (
    <section
      id="pillars"
      ref={containerRef}
      className="sec sec--dark showcase-sec"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseLeave={handleMouseLeave}
      aria-label="Sovereign Strategic Foundations & Pillars"
    >
      <div className="wrap showcase-wrap">
        {/* Section Header */}
        <div className="sec-header-center">
          <Reveal className="sec-tag sec-tag--gold">
            <Sparkles size={14} />
            <span>Sovereign Foundations</span>
          </Reveal>
          <Reveal as="h2" className="h2 sec-title-center">
            The Three Pillars of Distinction.
          </Reveal>
          <Reveal as="p" className="sec-subtitle-center sec-subtitle-center--light" delay={0.1}>
            Bridging advanced regulatory frameworks, food laboratory precision, and sustainable industrial innovation across the UAE.
          </Reveal>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            THE SOVEREIGN VISUAL PORTAL (CENTERPIECE)
            ───────────────────────────────────────────────────────────── */}
        <div className="hero-sov__portal-stage">
          {/* Masterpiece Portal with 3D Parallax & Metallic Gold Double Rim */}
          <motion.div
            ref={portalRef}
            className="hero-sov__portal"
            style={{
              rotateX,
              rotateY,
              transformPerspective: 1100,
              transformStyle: 'preserve-3d'
            }}
          >
            <div className="hero-sov__portal-frame">
              <img
                src={assetUrl('images/hero-luxury.jpg')}
                alt="QAF Alliance food science, quality assurance and sustainability consulting"
                className={`hero-sov__portal-img ${imgLoaded ? 'is-loaded' : ''}`}
                onLoad={() => setImgLoaded(true)}
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80'
                }}
              />
              <div className="hero-sov__portal-vignette" />

              {/* Center Floating Sovereign Emblem Plaque with Official Logo */}
              <motion.div
                className="hero-sov__center-plaque"
                style={{ translateZ: 55 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                onClick={handleConsultClick}
                role="button"
                tabIndex={0}
                aria-label="QAF Alliance Emblem - Click to Request Consultation"
              >
                <div className="plaque-inner">
                  <img
                    src={assetUrl('images/qaf-alliance-logo-transparent.png')}
                    alt="QAF ALLIANCE"
                    className="plaque-logo-img"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = assetUrl('images/qaf-alliance-logo.jpg')
                    }}
                  />
                  <div className="plaque-gold-glow" aria-hidden="true" />
                </div>
              </motion.div>
            </div>

            {/* Floating Left Crest: Quality & ISO 22000 */}
            <motion.div
              className="hero-sov__crest hero-sov__crest--left"
              style={{ translateZ: 50 }}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="crest-icon-box crest-icon-box--gold">
                <ShieldCheck size={22} />
              </div>
              <div className="crest-text">
                <p className="crest-title">HACCP & ISO 22000</p>
                <p className="crest-sub">Management Systems & FSMS</p>
              </div>
            </motion.div>

            {/* Floating Right Crest: Track Record */}
            <motion.div
              className="hero-sov__crest hero-sov__crest--right"
              style={{ translateZ: 55 }}
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="crest-icon-box crest-icon-box--emerald">
                <Award size={22} />
              </div>
              <div className="crest-text">
                <p className="crest-title">15+ Years Track Record</p>
                <p className="crest-sub">Food Safety & Operational Excellence</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            THE THREE PILLARS (BOTTOM CARDS) - TOUCH CAROUSEL ON MOBILE
            ───────────────────────────────────────────────────────────── */}
        <div className="hero-sov__pillars-wrap">
          <motion.div
            ref={pillarsRef}
            className="hero-sov__pillars"
            onScroll={handlePillarsScroll}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            {pillars.map((p, idx) => (
              <div
                key={p.title}
                className={`hero-sov__pillar-card ${activePillar === idx ? 'is-active' : ''}`}
                onClick={() => scrollToPillar(idx)}
              >
                <div className="hero-sov__pillar-header">
                  <span className="hero-sov__pillar-badge">{p.num}</span>
                  <span className="hero-sov__pillar-sub">{p.subtitle}</span>
                </div>
                <h2>{p.title}</h2>
                <p>{p.text}</p>
              </div>
            ))}
          </motion.div>

          {/* Mobile pagination dots indicator */}
          <div className="hero-sov__pillars-dots" aria-label="Hero Pillars Navigation">
            {pillars.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`hero-sov__pillar-dot ${activePillar === idx ? 'is-active' : ''}`}
                onClick={() => scrollToPillar(idx)}
                aria-label={`View pillar ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
