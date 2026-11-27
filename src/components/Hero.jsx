import { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ShieldCheck, Award, ArrowRight, CheckCircle2, Sparkles, Star } from 'lucide-react'
import QMark from './QMark.jsx'
import OfficeLightRays from './OfficeLightRays.jsx'
import { pillars, site } from '../data/content.js'
import { assetUrl } from '../utils/asset.js'

const lineOneWords = ['Empowering', 'Businesses', 'Through']
const lineTwoWords = ['Quality,', 'Expertise', '&', 'Sustainable', 'Solutions.']

export default function Hero({ ready, onOpenConsultation }) {
  const [imgLoaded, setImgLoaded] = useState(false)
  const sectionRef = useRef(null)
  const portalRef = useRef(null)

  // Interactive mouse tracking across entire hero
  const mouseNormX = useMotionValue(0)
  const mouseNormY = useMotionValue(0)
  const springNormX = useSpring(mouseNormX, { stiffness: 65, damping: 20 })
  const springNormY = useSpring(mouseNormY, { stiffness: 65, damping: 20 })

  // Fluid ambient light shifts in parallax
  const auroraTopX = useTransform(springNormX, [-0.5, 0.5], [-50, 50])
  const auroraTopY = useTransform(springNormY, [-0.5, 0.5], [-35, 35])
  const auroraCenterX = useTransform(springNormX, [-0.5, 0.5], [60, -60])
  const auroraCenterY = useTransform(springNormY, [-0.5, 0.5], [40, -40])

  // 3D holographic tilt on the visual portal
  const rotateX = useTransform(springNormY, [-0.5, 0.5], [6, -6])
  const rotateY = useTransform(springNormX, [-0.5, 0.5], [-7, 7])

  // Mouse liquid spotlight coordinates
  const spotX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth * 0.5 : 600)
  const spotY = useMotionValue(360)
  const springSpotX = useSpring(spotX, { stiffness: 85, damping: 24 })
  const springSpotY = useSpring(spotY, { stiffness: 85, damping: 24 })

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    const normX = (e.clientX - rect.left) / rect.width - 0.5
    const normY = (e.clientY - rect.top) / rect.height - 0.5
    mouseNormX.set(normX)
    mouseNormY.set(normY)
    spotX.set(e.clientX - rect.left)
    spotY.set(e.clientY - rect.top)
  }

  const handleTouchMove = (e) => {
    if (!sectionRef.current || !e.touches || !e.touches[0]) return
    const rect = sectionRef.current.getBoundingClientRect()
    const touch = e.touches[0]
    const normX = (touch.clientX - rect.left) / rect.width - 0.5
    const normY = (touch.clientY - rect.top) / rect.height - 0.5
    mouseNormX.set(normX)
    mouseNormY.set(normY)
    spotX.set(touch.clientX - rect.left)
    spotY.set(touch.clientY - rect.top)
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
      ref={sectionRef}
      className="hero hero--sovereign"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseLeave={handleMouseLeave}
      aria-label="QAF Alliance - Assurance • Innovation • Sustainability"
    >
      {/* Office Light Rays: Soft golden beams falling from formal office window */}
      <OfficeLightRays ready={ready} />

      {/* Interactive Liquid Gold & Emerald Cursor Spotlight in Hero */}
      <motion.div
        className="hero-sov__mouse-spotlight"
        style={{
          x: springSpotX,
          y: springSpotY
        }}
        aria-hidden="true"
      />

      {/* Ambient Lighting & Royal Emerald Glows with Parallax Motion */}
      <motion.div
        className="hero-sov__aurora-top"
        style={{ x: auroraTopX, y: auroraTopY }}
        aria-hidden="true"
      />
      <motion.div
        className="hero-sov__aurora-center"
        style={{ x: auroraCenterX, y: auroraCenterY }}
        aria-hidden="true"
      />

      {/* Floating Micro Gold Leaf Flakes */}
      <div className="hero__particles" aria-hidden="true">
        {[...Array(16)].map((_, i) => (
          <span
            key={i}
            className="hero__particle"
            style={{
              top: `${(i * 14) % 94}%`,
              left: `${(i * 19) % 96}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${5 + (i % 4)}s`
            }}
          />
        ))}
      </div>

      <div className="wrap hero-sov__wrap">
        {/* Top Royal Accreditation Seal Pill */}
        <motion.div
          className="hero-sov__seal"
          initial={{ opacity: 0, y: -16 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <Sparkles size={13} className="hero-sov__seal-icon" />
          <span>{site.name} &bull; UNITED ARAB EMIRATES &bull; {site.tagline}</span>
        </motion.div>

        {/* Grand Sovereign Title — Refined Editorial Proportions */}
        <div className="hero-sov__headline-box">
          <h1 className="hero-sov__title" aria-label="Empowering Businesses Through Quality, Expertise & Sustainable Solutions.">
            <span className="hero-title-line">
              {lineOneWords.map((word, i) => (
                <span className="word-mask" key={i} aria-hidden="true">
                  <motion.span
                    className="word"
                    initial={{
                      opacity: 0,
                      y: 30,
                      filter: 'blur(12px)',
                      scale: 1.04
                    }}
                    animate={
                      ready
                        ? {
                            opacity: 1,
                            y: 0,
                            filter: 'blur(0px)',
                            scale: 1
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.9,
                      delay: 0.08 * i,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </span>
            <br className="hero-title-br" />
            <span className="hero-title-line">
              {lineTwoWords.map((word, i) => {
                const isHighlight = word === 'Quality,' || word === 'Expertise' || word === 'Solutions.'
                return (
                  <span className="word-mask" key={i} aria-hidden="true">
                    <motion.span
                      className={'word' + (isHighlight ? ' word--gold-shine' : '')}
                      initial={{
                        opacity: 0,
                        y: 30,
                        filter: 'blur(12px)',
                        scale: 1.04
                      }}
                      animate={
                        ready
                          ? {
                              opacity: 1,
                              y: 0,
                              filter: 'blur(0px)',
                              scale: 1
                            }
                          : {}
                      }
                      transition={{
                        duration: 0.9,
                        delay: 0.08 * (lineOneWords.length + i),
                        ease: [0.16, 1, 0.3, 1]
                      }}
                    >
                      {word}
                    </motion.span>
                  </span>
                )
              })}
            </span>
          </h1>

          <motion.p
            className="hero-sov__lead"
            initial={{ opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            A UAE-based professional consultancy and business solutions company committed to helping businesses achieve excellence through quality assurance, food safety, sustainability, training and operational improvement.
          </motion.p>
        </div>

        {/* 3 Call to Actions from client brief */}
        <motion.div
          className="hero-sov__actions"
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.85, duration: 0.8 }}
        >
          <button
            type="button"
            onClick={handleConsultClick}
            className="btn btn--gold btn--shimmer btn--luxury-glow"
          >
            <span>Request a Consultation</span>
            <ArrowRight size={17} className="btn-arrow" />
          </button>
          <a className="btn btn--ghost" href="#services">
            Explore Our Services
          </a>
          <a className="btn btn--outline-gold" href="#contact">
            Contact Us
          </a>
        </motion.div>

        {/* Trust Endorsements */}
        <motion.div
          className="hero-sov__trust-line"
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          <span className="sov-trust-item">
            <CheckCircle2 size={15} /> <b>15+ Years</b> Industry Leadership
          </span>
          <span className="sov-trust-item">
            <CheckCircle2 size={15} /> <b>112,000+</b> Single-Use Plastics Diverted
          </span>
          <span className="sov-trust-item">
            <CheckCircle2 size={15} /> <b>HACCP & ISO</b> Regulatory Acumen
          </span>
          <span className="sov-trust-item">
            <CheckCircle2 size={15} /> <b>Practical</b> & Value-Driven
          </span>
        </motion.div>

        {/* ─────────────────────────────────────────────────────────────
            THE SOVEREIGN VISUAL PORTAL (CENTERPIECE)
            ───────────────────────────────────────────────────────────── */}
        <motion.div
          className="hero-sov__portal-stage"
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={ready ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Ambient 3D Rotating Brand Mark Behind Stage */}
          <div className="hero-sov__qmark-backdrop" aria-hidden="true">
            <QMark play={ready} />
          </div>

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
                animate={ready ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.15, duration: 0.8 }}
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
              animate={ready ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.1, duration: 0.8 }}
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
              animate={ready ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.25, duration: 0.8 }}
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
        </motion.div>

        {/* ─────────────────────────────────────────────────────────────
            THE THREE PILLARS (BOTTOM CARDS)
            ───────────────────────────────────────────────────────────── */}
        <motion.div
          className="hero-sov__pillars"
          initial={{ opacity: 0, y: 25 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.3, duration: 0.9 }}
        >
          {pillars.map((p) => (
            <div key={p.title} className="hero-sov__pillar-card">
              <div className="hero-sov__pillar-header">
                <span className="hero-sov__pillar-num">{p.num}</span>
                <span className="hero-sov__pillar-sub">{p.subtitle}</span>
              </div>
              <h2>{p.title}</h2>
              <p>{p.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
