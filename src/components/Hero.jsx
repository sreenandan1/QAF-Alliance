import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Award, ArrowRight, Sparkles, Users, Leaf } from 'lucide-react'
import { pillars, site } from '../data/content.js'
import { assetUrl } from '../utils/asset.js'

const lineOneWords = ['Empowering', 'Businesses', 'Through']
const lineTwoWords = ['Quality,', 'Expertise', '&', 'Sustainable', 'Solutions.']

export default function Hero({ ready, onOpenConsultation }) {
  const sectionRef = useRef(null)
  const pillarsRef = useRef(null)
  const [activePillar, setActivePillar] = useState(0)

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
      aria-label="QAF Alliance - Assurance • Innovation • Sustainability"
    >
      {/* Grand Sovereign Hero Background Image & Luxury Atmospheric Grading */}
      <div className="hero-sov__bg" aria-hidden="true">
        <img
          src={assetUrl('images/hero-bg.jpg')}
          alt=""
          className="hero-sov__bg-img"
          onError={(e) => {
            e.target.onerror = null
            e.target.src = assetUrl('images/hero-luxury.jpg')
          }}
        />
        <div className="hero-sov__bg-overlay" />
        <div className="hero-sov__bg-radial" />
        <div className="hero-sov__bg-vignette" />
        <div className="hero-sov__bg-lateral-fade" />
      </div>

      <div className="wrap hero-sov__wrap" style={{ position: 'relative', zIndex: 10 }}>
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

        {/* 3 Call to Actions Matching Executive Reference Mockup */}
        <motion.div
          className="hero-sov__actions"
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.85, duration: 0.8 }}
        >
          <button
            type="button"
            onClick={handleConsultClick}
            className="btn btn--hero-gold"
          >
            <span>Request a Consultation</span>
            <ArrowRight size={16} className="btn-arrow" />
          </button>
          <a className="btn btn--hero-glass" href="#services">
            Explore Our Services
          </a>
          <a className="btn btn--hero-glass" href="#contact">
            Contact Us
          </a>
        </motion.div>

        {/* ─────────────────────────────────────────────────────────────
            THE 4 GLASSMORPHIC TRUST PLAQUES ON THE MARBLE PODIUM
            ───────────────────────────────────────────────────────────── */}
        <motion.div
          className="hero-sov__podium-cards"
          initial={{ opacity: 0, y: 24 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.0, duration: 0.85 }}
        >
          <div className="podium-card">
            <div className="podium-card__icon">
              <ShieldCheck size={22} />
            </div>
            <h4 className="podium-card__val">15+ Years</h4>
            <p className="podium-card__lbl">Industry Leadership</p>
          </div>

          <div className="podium-card">
            <div className="podium-card__icon">
              <Users size={22} />
            </div>
            <h4 className="podium-card__val">112,000+</h4>
            <p className="podium-card__lbl">Single-Use Plastics Diverted</p>
          </div>

          <div className="podium-card">
            <div className="podium-card__icon">
              <Award size={22} />
            </div>
            <h4 className="podium-card__val">HACCP & ISO</h4>
            <p className="podium-card__lbl">Regulatory Acumen</p>
          </div>

          <div className="podium-card">
            <div className="podium-card__icon">
              <Leaf size={22} />
            </div>
            <h4 className="podium-card__val">Practical &</h4>
            <p className="podium-card__lbl">Value-Driven</p>
          </div>
        </motion.div>

        {/* ─────────────────────────────────────────────────────────────
            THE THREE PILLARS (BOTTOM CARDS) - TOUCH CAROUSEL ON MOBILE
            ───────────────────────────────────────────────────────────── */}
        <div className="hero-sov__pillars-wrap">
          <motion.div
            ref={pillarsRef}
            className="hero-sov__pillars"
            onScroll={handlePillarsScroll}
            initial={{ opacity: 0, y: 25 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.3, duration: 0.9 }}
          >
            {pillars.map((p, idx) => (
              <div
                key={p.title}
                className={`hero-sov__pillar-card ${activePillar === idx ? 'is-active' : ''}`}
                onClick={() => scrollToPillar(idx)}
              >
                <div className="hero-sov__pillar-header">
                  <span className="hero-sov__pillar-num">{p.num}</span>
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
