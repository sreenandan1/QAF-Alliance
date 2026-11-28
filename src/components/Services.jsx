import { useState, useRef, useEffect } from 'react'
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
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Building2,
  Layers
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
  const tabsContainerRef = useRef(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const isProgrammaticScroll = useRef(false)
  const navScrollTimeout = useRef(null)

  const current = services[activeIdx]
  const Icon = icons[current.icon] || ShieldCheck

  const handleInquire = (e) => {
    if (onOpenConsultation) {
      e.preventDefault()
      onOpenConsultation(e)
    }
  }

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? services.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIdx((prev) => (prev === services.length - 1 ? 0 : prev + 1))
  }

  const scrollToTab = (idx) => {
    if (tabsContainerRef.current) {
      const cards = tabsContainerRef.current.querySelectorAll('.svc-nav-card')
      if (cards[idx]) {
        isProgrammaticScroll.current = true
        cards[idx].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        })
        setTimeout(() => {
          isProgrammaticScroll.current = false
        }, 350)
      }
    }
  }

  const handleNavScroll = () => {
    if (isProgrammaticScroll.current) return
    if (navScrollTimeout.current) clearTimeout(navScrollTimeout.current)
    navScrollTimeout.current = setTimeout(() => {
      if (!tabsContainerRef.current) return
      const el = tabsContainerRef.current
      const firstCard = el.querySelector('.svc-nav-card')
      if (!firstCard) return
      const cardWidth = firstCard.offsetWidth
      const gap = 12
      const scrollLeft = el.scrollLeft
      const newIdx = Math.round(scrollLeft / (cardWidth + gap))
      if (newIdx >= 0 && newIdx < services.length && newIdx !== activeIdx) {
        setActiveIdx(newIdx)
      }
    }, 90)
  }

  // Auto-scroll active tab into view on mobile/tablet when activeIdx changes
  useEffect(() => {
    scrollToTab(activeIdx)
  }, [activeIdx])

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const diff = touchStartX.current - touchEndX.current
    if (diff > 55) {
      // Swiped left -> next
      handleNext()
    } else if (diff < -55) {
      // Swiped right -> prev
      handlePrev()
    }
    touchStartX.current = 0
    touchEndX.current = 0
  }

  return (
    <section id="services" className="sec sec--dark services-sec" aria-label="Our Services">
      <div className="wrap">
        {/* Section Header */}
        <div className="sec-header-center">
          <Reveal className="sec-tag sec-tag--gold">
            <Sparkles size={14} />
            <span>Executive Practice Areas</span>
          </Reveal>
          <Reveal as="h2" className="h2 sec-title-center">
            Specialized Solutions in Food Safety, Quality & Sustainability.
          </Reveal>
          <Reveal as="p" className="sec-subtitle-center sec-subtitle-center--light" delay={0.1}>
            Combining technical knowledge with real-world industry experience to deliver practical, cost-effective, and value-driven solutions.
          </Reveal>
        </div>

        {/* Top Executive Practice Selector Grid (3-Col Grid on Desktop, Touch Carousel on Mobile) */}
        <div className="svc-nav-wrap">
          <div
            ref={tabsContainerRef}
            className="svc-nav-grid"
            onScroll={handleNavScroll}
            role="tablist"
            aria-label="Services Practice Areas"
          >
            {services.map((item, idx) => {
              const TabIcon = icons[item.icon] || ShieldCheck
              const isSelected = idx === activeIdx
              return (
                <button
                  key={item.id}
                  role="tab"
                  aria-selected={isSelected}
                  className={`svc-nav-card ${isSelected ? 'is-active' : ''}`}
                  onClick={() => {
                    setActiveIdx(idx)
                    scrollToTab(idx)
                  }}
                >
                  <div className="svc-nav-card__badge">
                    <span className="svc-nav-card__letter">{item.letter}</span>
                  </div>

                  <div className="svc-nav-card__content">
                    <span className="svc-nav-card__tag">
                      Practice {item.letter} &bull; {item.tag}
                    </span>
                    <span className="svc-nav-card__title">{item.title}</span>
                  </div>

                  <div className="svc-nav-card__icon-wrap">
                    <TabIcon size={17} className="svc-nav-card__icon" />
                  </div>

                  {isSelected && (
                    <motion.div
                      layoutId="svc-nav-active-glow"
                      className="svc-nav-card__glow-border"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* Mobile Carousel Navigation Bar (Pagination Dots & Arrow Controls) */}
          <div className="svc-nav-mobile-bar" aria-label="Services Carousel Controls">
            <button
              type="button"
              onClick={handlePrev}
              className="svc-nav-mobile-btn"
              aria-label="Previous Practice Area"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="svc-nav-dots" aria-label="Practice Carousel Indicator">
              {services.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  className={`svc-nav-dot ${idx === activeIdx ? 'is-active' : ''}`}
                  onClick={() => {
                    setActiveIdx(idx)
                    scrollToTab(idx)
                  }}
                  aria-label={`Go to Practice ${item.letter}: ${item.title}`}
                >
                  <span className="svc-nav-dot__label">{item.letter}</span>
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="svc-nav-mobile-btn"
              aria-label="Next Practice Area"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Main Active Practice Dossier (With Mobile Swipe Gesture Support) */}
        <div className="svc-dossier-wrap">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              className="svc-dossier"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
            >
              <div className="svc-dossier__grid">
                {/* Column 1: Media, Key Metrics & Inquire Actions (Compact, Controlled Height) */}
                <div className="svc-dossier__col-media">
                  {/* Cinematic Framed Image */}
                  <div className="svc-dossier__media-frame">
                    <img
                      src={current.image}
                      alt={current.title}
                      className="svc-dossier__img"
                      onError={(e) => {
                        e.target.onerror = null
                        e.target.src = current.fallback
                      }}
                    />
                    <div className="svc-dossier__img-overlay" />

                    {/* Category Stamp Badge */}
                    <div className="svc-dossier__badge-top">
                      <Icon size={14} />
                      <span>Service {current.letter}</span>
                    </div>

                    {/* Impact Metric Plaque */}
                    <div className="svc-dossier__metric-plaque">
                      <span className="svc-dossier__metric-val">{current.stat}</span>
                      <span className="svc-dossier__metric-lbl">{current.statLabel}</span>
                    </div>
                  </div>

                  {/* Tailored For Industry Audience */}
                  <div className="svc-dossier__audience-box">
                    <div className="svc-dossier__audience-header">
                      <Building2 size={14} className="svc-dossier__audience-icon" />
                      <span className="svc-dossier__audience-label">Tailored For:</span>
                    </div>
                    <p className="svc-dossier__audience-text">{current.for}</p>
                  </div>

                  {/* Direct Consultation Action Bar */}
                  <div className="svc-dossier__action-box">
                    <button
                      type="button"
                      onClick={handleInquire}
                      className="btn btn--gold btn--shimmer svc-dossier__cta"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight size={15} />
                    </button>
                    <span className="svc-dossier__guarantee">
                      Direct Expert Assessment &bull; UAE & GCC Compliance
                    </span>
                  </div>
                </div>

                {/* Column 2: Scope of Work & Deliverables Matrix (Compact 2-Column Grid) */}
                <div className="svc-dossier__col-body">
                  {/* Practice Heading */}
                  <div className="svc-dossier__header">
                    <div className="svc-dossier__tag-row">
                      <span className="svc-dossier__service-pill">Practice {current.letter}</span>
                      <span className="svc-dossier__tag-text">{current.tag}</span>
                    </div>
                    <h3 className="svc-dossier__title">{current.title}</h3>
                    <p className="svc-dossier__summary">{current.summary}</p>
                  </div>

                  {/* 2-Column Deliverables Matrix */}
                  <div className="svc-dossier__scope">
                    <div className="svc-dossier__scope-header">
                      <div className="svc-dossier__scope-title-wrap">
                        <Layers size={15} className="svc-dossier__scope-icon" />
                        <h4 className="svc-dossier__scope-title">Key Focus Areas & Deliverables</h4>
                      </div>
                      <span className="svc-dossier__scope-count">
                        {current.points.length} Core Capabilities
                      </span>
                    </div>

                    <div className="svc-dossier__matrix">
                      {current.points.map((pt, i) => (
                        <div key={i} className="svc-dossier__matrix-item">
                          <span className="svc-dossier__check-ring">
                            <Check size={12} strokeWidth={2.6} />
                          </span>
                          <span className="svc-dossier__item-text">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Practice Navigation Flow */}
                  <div className="svc-dossier__footer-nav">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="svc-dossier__nav-btn"
                      aria-label="Previous Practice"
                    >
                      <ChevronLeft size={16} />
                      <span>Previous</span>
                    </button>

                    <div className="svc-dossier__counter">
                      <span className="svc-dossier__counter-current">
                        {String(activeIdx + 1).padStart(2, '0')}
                      </span>
                      <span className="svc-dossier__counter-div">/</span>
                      <span className="svc-dossier__counter-total">
                        {String(services.length).padStart(2, '0')}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={handleNext}
                      className="svc-dossier__nav-btn"
                      aria-label="Next Practice"
                    >
                      <span>Next</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
