import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Compass,
  Target,
  Sparkles,
  Award,
  ShieldCheck,
  TrendingUp,
  Leaf,
  Users,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'
import Reveal from './Reveal.jsx'
import { about, pillars } from '../data/content.js'

const valueIcons = [Award, ShieldCheck, Sparkles, TrendingUp, Leaf, Users]

export default function About() {
  const [activePillar, setActivePillar] = useState(0)

  return (
    <section id="about" className="sec sec--cream about-sec">
      <div className="wrap">
        {/* Category tag */}
        <Reveal className="sec-tag">
          <Sparkles size={14} />
          <span>About QAF Alliance</span>
        </Reveal>

        {/* Lead Headline */}
        <Reveal as="h2" className="about__lead">
          {about.headline}
        </Reveal>

        {/* Editorial Grid: Image + Strategic Narrative */}
        <div className="about__editorial">
          {/* Left: Luxury Editorial Visual */}
          <Reveal className="about__visual-wrap" delay={0.1}>
          <div className="about__visual-frame">
            <img
              src="/images/about-luxury.jpg"
              alt="QAF Alliance professional food quality & assurance consultancy"
              className="about__img"
              onError={(e) => {
                e.target.onerror = null
                e.target.src = 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80'
              }}
            />
            <div className="about__visual-overlay" />

              {/* Floating prestige badge */}
              <div className="about__prestige-card">
                <span className="about__prestige-num">15+</span>
                <span className="about__prestige-label">Years Food Safety & Quality Management Leadership</span>
              </div>
            </div>
          </Reveal>

          {/* Right: Narrative + Mission/Vision Cards */}
          <div className="about__content">
            <Reveal delay={0.15}>
              <p className="about__prose-lead">
                {about.lead}
              </p>
              {about.paragraphs.map((p, idx) => (
                <p key={idx} className="about__prose-sub">
                  {p}
                </p>
              ))}
            </Reveal>

            {/* Mission & Vision luxury cards */}
            <div className="about__mv-grid">
              <Reveal delay={0.25} className="about__mv-card">
                <div className="about__mv-icon">
                  <Target size={22} />
                </div>
                <div>
                  <h3>Our Mission</h3>
                  <p>{about.mission}</p>
                </div>
              </Reveal>

              <Reveal delay={0.3} className="about__mv-card">
                <div className="about__mv-icon">
                  <Compass size={22} />
                </div>
                <div>
                  <h3>Our Vision</h3>
                  <p>{about.vision}</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Core Values: 6-Card Grid */}
        <div className="about__values-wrapper">
          <div className="sec-header-center">
            <Reveal className="sec-tag">
              <Sparkles size={14} />
              <span>Guiding Principles</span>
            </Reveal>
            <Reveal as="h3" className="h2 sec-title-center">
              Our Core Values
            </Reveal>
            <Reveal as="p" className="sec-subtitle-center" delay={0.1}>
              The institutional values that guide our advisory engagements, client relationships, and continuous pursuit of excellence.
            </Reveal>
          </div>

          <div className="values-grid">
            {about.coreValues.map((val, idx) => {
              const IconComp = valueIcons[idx] || Award
              return (
                <Reveal key={val.title} delay={idx * 0.07} className="value-card">
                  <div className="value-card__top">
                    <div className="value-card__icon-box">
                      <IconComp size={22} />
                    </div>
                    <span className="value-card__num">{val.num}</span>
                  </div>
                  <h4 className="value-card__title">{val.title}</h4>
                  <p className="value-card__desc">{val.desc}</p>
                </Reveal>
              )
            })}
          </div>
        </div>

        {/* The Three Pillars: Assurance • Innovation • Sustainability */}
        <div className="about__pillars-wrapper">
          <div className="sec-header-center">
            <Reveal className="sec-tag">
              <Sparkles size={14} />
              <span>Brand Triad</span>
            </Reveal>
            <Reveal as="h3" className="h2 sec-title-center">
              Assurance • Innovation • Sustainability
            </Reveal>
            <Reveal as="p" className="sec-subtitle-center" delay={0.1}>
              The foundational pillars that define QAF Alliance and every practical solution we deliver.
            </Reveal>
          </div>

          <div className="pillars-lux">
            {pillars.map((p, idx) => {
              const isActive = activePillar === idx
              return (
                <div
                  key={p.title}
                  className={`pillar-lux ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActivePillar(idx)}
                  onMouseEnter={() => setActivePillar(idx)}
                  tabIndex={0}
                  onFocus={() => setActivePillar(idx)}
                >
                  <div className="pillar-lux__header">
                    <span className="pillar-lux__num">{p.num}</span>
                    <h4 className="pillar-lux__title">{p.title}</h4>
                  </div>
                  <p className="pillar-lux__sub">{p.subtitle}</p>
                  <p className="pillar-lux__text">{p.text}</p>
                  <div className="pillar-lux__tags">
                    {p.tags.map((t) => (
                      <span key={t} className="pillar-lux__tag">{t}</span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
