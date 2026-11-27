import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ShieldCheck,
  CheckCircle2,
  GraduationCap,
  Leaf,
  ClipboardCheck,
  PackageCheck,
  Check,
  ArrowRight,
  Sparkles
} from 'lucide-react'
import Reveal from './Reveal.jsx'
import { services } from '../data/content.js'

const icons = {
  shield: ShieldCheck,
  checkCircle: CheckCircle2,
  cap: GraduationCap,
  leaf: Leaf,
  clipboardCheck: ClipboardCheck,
  packageCheck: PackageCheck
}

export default function Services({ onOpenConsultation }) {
  const [activeIdx, setActiveIdx] = useState(0)
  const current = services[activeIdx]
  const Icon = icons[current.icon] || ShieldCheck

  const handleInquire = (e) => {
    if (onOpenConsultation) {
      e.preventDefault()
      onOpenConsultation(e)
    }
  }

  return (
    <section id="services" className="sec sec--dark services-sec">
      <div className="wrap">
        <div className="sec-header-center">
          <Reveal className="sec-tag sec-tag--gold">
            <Sparkles size={14} />
            <span>Our Comprehensive Services</span>
          </Reveal>
          <Reveal as="h2" className="h2 sec-title-center">
            Specialized Solutions in Food Safety, Quality & Sustainability.
          </Reveal>
          <Reveal as="p" className="sec-subtitle-center sec-subtitle-center--light" delay={0.1}>
            Combining technical knowledge with real-world industry experience to deliver practical, cost-effective, and value-driven solutions.
          </Reveal>
        </div>

        <div className="svc-lux">
          {/* Left: Interactive Navigation Tabs (All 6 Services) */}
          <div className="svc-lux__tabs" role="tablist" aria-label="Services Navigation">
            {services.map((item, idx) => {
              const TabIcon = icons[item.icon] || ShieldCheck
              const isSelected = idx === activeIdx
              return (
                <button
                  key={item.id}
                  role="tab"
                  aria-selected={isSelected}
                  className={`svc-lux__tab ${isSelected ? 'is-active' : ''}`}
                  onClick={() => setActiveIdx(idx)}
                >
                  <div className="svc-lux__tab-icon">
                    <span className="svc-lux__tab-letter">{item.letter}</span>
                  </div>
                  <div className="svc-lux__tab-text">
                    <span className="svc-lux__tab-tag">{item.tag}</span>
                    <span className="svc-lux__tab-title">{item.title}</span>
                  </div>
                  {isSelected && (
                    <motion.div
                      layoutId="svc-lux-active-bar"
                      className="svc-lux__tab-bar"
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* Right: Immersive Visual & Details Panel */}
          <div className="svc-lux__panel" role="tabpanel">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                className="svc-lux__card"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
              >
                {/* Visual Imagery Side with Gold Framing */}
                <div className="svc-lux__visual">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="svc-lux__img"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = current.fallback
                    }}
                  />
                  <div className="svc-lux__img-overlay" />

                  {/* Impact Metric Floating Badge */}
                  <div className="svc-lux__metric-badge">
                    <span className="svc-lux__metric-val">{current.stat}</span>
                    <span className="svc-lux__metric-lbl">{current.statLabel}</span>
                  </div>

                  {/* Category Pill */}
                  <div className="svc-lux__category-pill">
                    <Icon size={16} />
                    <span>Service {current.letter}</span>
                  </div>
                </div>

                {/* Content Breakdown Side */}
                <div className="svc-lux__content">
                  <div className="svc-lux__header">
                    <div className="svc-lux__icon-wrap">
                      <Icon size={28} />
                    </div>
                    <div>
                      <span className="svc-lux__small-tag">Service {current.letter} &bull; {current.tag}</span>
                      <h3 className="svc-lux__title">{current.title}</h3>
                    </div>
                  </div>

                  <p className="svc-lux__summary">{current.summary}</p>

                  <div className="svc-lux__deliverables">
                    <p className="svc-lux__deliv-title">Our Services Include:</p>
                    <ul className="svc-lux__list">
                      {current.points.map((pt) => (
                        <li key={pt} className="svc-lux__item">
                          <Check size={14} className="svc-lux__check" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="svc-lux__footer">
                    <div className="svc-lux__target-box">
                      <span className="svc-lux__for-label">Tailored For:</span>
                      <span className="svc-lux__for-text">{current.for}</span>
                    </div>

                    <button
                      type="button"
                      onClick={handleInquire}
                      className="btn btn--gold btn--shimmer svc-lux__cta"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
