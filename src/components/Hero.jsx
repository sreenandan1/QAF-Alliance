import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import { site } from '../data/content.js'
import { assetUrl } from '../utils/asset.js'

const lineOneWords = ['Empowering', 'Businesses', 'Through']
const lineTwoWords = ['Quality,', 'Expertise', '&', 'Sustainable', 'Solutions.']

export default function Hero({ ready, onOpenConsultation }) {
  const handleConsultClick = (e) => {
    if (onOpenConsultation) {
      e.preventDefault()
      onOpenConsultation(e)
    }
  }

  return (
    <section
      className="hero hero--sovereign"
      aria-label="QAF Alliance - Assurance • Innovation • Sustainability"
    >
      {/* Grand Sovereign Hero Background Image & Luxury Atmospheric Grading */}
      <div className="hero-sov__bg" aria-hidden="true">
        <img
          src={assetUrl('images/hero-bg.jpg')}
          alt="QAF Alliance UAE Corporate Advisory & Food Science"
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

      <div className="wrap hero-sov__content-wrap">
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
      </div>
    </section>
  )
}
