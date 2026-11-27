import { useState, useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Sparkles,
  Check,
  Clock,
  GraduationCap,
  Users,
  Search,
  ArrowRight,
  BookOpen
} from 'lucide-react'
import Reveal from './Reveal.jsx'
import { trainingDomains, trainingNote } from '../data/content.js'

export default function Training({ onOpenConsultation }) {
  const [activeDomainIdx, setActiveDomainIdx] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const currentDomain = trainingDomains[activeDomainIdx]

  // Filtered courses based on domain and search term
  const displayedCourses = useMemo(() => {
    const q = searchQuery.toLowerCase().trim()
    if (!q) return currentDomain.courses

    return currentDomain.courses.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.highlights.toLowerCase().includes(q) ||
        c.target.toLowerCase().includes(q)
    )
  }, [currentDomain, searchQuery])

  const handleCourseInquire = (courseTitle, e) => {
    if (onOpenConsultation) {
      e.preventDefault()
      onOpenConsultation(e)
    }
  }

  return (
    <section id="training" className="sec sec--cream2 training-sec">
      <div className="wrap">
        {/* Centered Editorial Header */}
        <div className="sec-header-center">
          <Reveal className="sec-tag">
            <Sparkles size={14} />
            <span>Training Programmes</span>
          </Reveal>
          <Reveal as="h2" className="h2 sec-title-center">
            Developing Competent Professionals Through Practical Training.
          </Reveal>
          <Reveal as="p" className="sec-subtitle-center" delay={0.1}>
            Industry-focused training programmes designed to strengthen operational habits, enhance regulatory compliance, and build sustainable food safety culture.
          </Reveal>

          {/* Delivery Note Callout Pill */}
          <Reveal delay={0.15} className="train__delivery-card-centered">
            <GraduationCap size={20} className="train__badge-icon" />
            <span><b>Flexible Delivery:</b> {trainingNote}</span>
          </Reveal>
        </div>

        {/* Domain Selection Tabs & Search Bar */}
        <div className="train__controls-row">
          <div className="train__domain-tabs" role="tablist" aria-label="Training Domains">
            {trainingDomains.map((domain, idx) => {
              const isSelected = idx === activeDomainIdx
              return (
                <button
                  key={domain.id}
                  role="tab"
                  aria-selected={isSelected}
                  className={`train__domain-btn ${isSelected ? 'is-active' : ''}`}
                  onClick={() => {
                    setActiveDomainIdx(idx)
                    setSearchQuery('')
                  }}
                >
                  <span className="train__domain-count">{domain.courses.length}</span>
                  <span className="train__domain-label">{domain.name}</span>
                  {isSelected && (
                    <motion.div
                      layoutId="train-domain-active"
                      className="train__domain-active-bar"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* Quick Course Search */}
          <div className="train__search-box">
            <Search size={16} className="train__search-icon" />
            <input
              type="text"
              placeholder="Search syllabus..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="train__search-input"
            />
            {searchQuery && (
              <button
                type="button"
                className="train__search-clear"
                onClick={() => setSearchQuery('')}
              >
                &times;
              </button>
            )}
          </div>
        </div>

        {/* Active Domain Info Banner */}
        <div className="train__domain-banner">
          <div>
            <span className="train__domain-badge">{currentDomain.badge}</span>
            <h3 className="train__domain-title">{currentDomain.name}</h3>
          </div>
          <p className="train__domain-desc">{currentDomain.desc}</p>
        </div>

        {/* Full-Width Course Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDomain.id + searchQuery}
            className="train__grid-full"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {displayedCourses.length > 0 ? (
              displayedCourses.map((course, cIdx) => (
                <div key={course.title} className="course-card-lux">
                  <div className="course-card-lux__top">
                    <span className="course-card-lux__num">
                      {cIdx < 9 ? `0${cIdx + 1}` : cIdx + 1}
                    </span>
                    <span className="course-card-lux__duration">
                      <Clock size={13} />
                      {course.duration}
                    </span>
                  </div>

                  <h4 className="course-card-lux__title">{course.title}</h4>

                  <div className="course-card-lux__target">
                    <Users size={13} />
                    <span><b>Audience:</b> {course.target}</span>
                  </div>

                  <p className="course-card-lux__highlights">
                    {course.highlights}
                  </p>

                  <button
                    type="button"
                    onClick={(e) => handleCourseInquire(course.title, e)}
                    className="course-card-lux__action"
                  >
                    <span>Inquire About Syllabus</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              ))
            ) : (
              <div className="train__no-results">
                <p>No modules found matching &ldquo;{searchQuery}&rdquo; in this domain.</p>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="btn btn--gold btn--shimmer"
                >
                  Clear Filter
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
