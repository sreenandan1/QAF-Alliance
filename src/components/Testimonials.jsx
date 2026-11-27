import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Sparkles, Quote, Info, Handshake, Building2, CheckCircle2 } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { testimonials, clients, clientsSection } from '../data/content.js'

export default function Testimonials() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduce = useReducedMotion()
  const n = testimonials.length

  useEffect(() => {
    if (paused || reduce) return
    const t = setInterval(() => setI((v) => (v + 1) % n), 7000)
    return () => clearInterval(t)
  }, [paused, reduce, n])

  const t = testimonials[i]

  return (
    <section className="sec sec--cream testimonials-sec">
      <div className="wrap">
        <div className="sec-header-center">
          <Reveal className="sec-tag">
            <Sparkles size={14} />
            <span>Clients & Partnerships</span>
          </Reveal>
          <Reveal as="h2" className="h2 sec-title-center">
            {clientsSection.headline}
          </Reveal>
          <Reveal as="p" className="sec-subtitle-center" delay={0.1}>
            {clientsSection.lead}
          </Reveal>
        </div>

        {/* Partnership Pillars Grid */}
        <div className="partnerships-grid">
          {clientsSection.pillars.map((pil, idx) => (
            <Reveal key={pil.title} delay={idx * 0.08} className="partnership-card">
              <div className="partnership-card__icon">
                <CheckCircle2 size={18} />
              </div>
              <h4 className="partnership-card__title">{pil.title}</h4>
              <p className="partnership-card__desc">{pil.desc}</p>
            </Reveal>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div
          className="quote-lux"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="quote-lux__gold-glow" aria-hidden="true" />
          <div className="quote-lux__icon">
            <Quote size={40} />
          </div>

          <div className="quote-lux__stars">
            {[...Array(5)].map((_, idx) => (
              <Star key={idx} size={18} fill="#C8A24A" color="#C8A24A" />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45 }}
              className="quote-lux__figure"
            >
              <blockquote className="quote-lux__text">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="quote-lux__caption">
                <div className="quote-lux__author-box">
                  <b className="quote-lux__name">{t.name}</b>
                  <span className="quote-lux__role">{t.role}</span>
                </div>
                {t.badge && <span className="quote-lux__badge">{t.badge}</span>}
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className="quote-lux__ctrl">
            <button
              aria-label="Previous testimonial"
              onClick={() => setI((i - 1 + n) % n)}
              className="quote-lux__btn"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="quote-lux__count">
              <b>0{i + 1}</b> / 0{n}
            </span>
            <button
              aria-label="Next testimonial"
              onClick={() => setI((i + 1) % n)}
              className="quote-lux__btn"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Client Notice */}
        <Reveal delay={0.2} className="client-approval-notice">
          <Info size={15} />
          <span>{clientsSection.notice}</span>
        </Reveal>
      </div>

      {/* Luxury Client Sectors Ticker */}
      <div className="marquee marquee-lux" aria-label="Sectors & Industry Engagements">
        <div className="marquee__header">
          <span>Supporting Organizations Across Diverse Sectors</span>
        </div>
        <div className="marquee__track">
          {[...clients, ...clients, ...clients].map((c, k) => (
            <div key={k} className="marquee__item">
              <span className="marquee__dot" />
              <span>{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
