import { Sparkles, ArrowRight, Clock, CheckCircle2, ShieldCheck, Info } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { projects, caseStudyNotice } from '../data/content.js'

export default function Projects() {
  return (
    <section id="projects" className="sec sec--deep projects-sec">
      <div className="wrap">
        <div className="sec-header-center">
          <Reveal className="sec-tag sec-tag--gold">
            <Sparkles size={14} />
            <span>Practical Experience & Case Studies</span>
          </Reveal>
          <Reveal as="h2" className="h2 sec-title-center">
            Demonstrated Industry Experience & Impact.
          </Reveal>
          <Reveal as="p" className="sec-subtitle-center sec-subtitle-center--light" delay={0.1}>
            Showcasing real-world practical industry experience across Food Safety Management Systems, sustainability, manufacturing audit readiness, and hospitality mystery audits.
          </Reveal>

          {/* Professional Portfolio Transparency Note */}
          <Reveal delay={0.15} className="cs-transparency-pill">
            <Info size={14} />
            <span>{caseStudyNotice}</span>
          </Reveal>
        </div>

        <div className="proj-stack-lux">
          {projects.map((p, n) => (
            <article
              className={`proj-lux proj-lux--${p.tone}`}
              key={p.title}
              style={{
                top: `calc(5.2rem + ${n * 26}px)`,
                zIndex: n + 1
              }}
            >
              {/* Narrative Content */}
              <div className="proj-lux__text">
                <div className="proj-lux__meta">
                  <span className="proj-lux__counter-pill">Case {String(n + 1).padStart(2, '0')} / 04</span>
                  <span className="proj-lux__sector">{p.sector}</span>
                  <span className="proj-lux__badge-exp">{p.caseType}</span>
                </div>

                <h3 className="proj-lux__title">{p.title}</h3>

                <div className="proj-lux__brief">
                  <div className="proj-lux__section">
                    <span className="proj-lux__label">Project Context</span>
                    <p className="proj-lux__desc">{p.problem}</p>
                  </div>

                  <div className="proj-lux__section">
                    <span className="proj-lux__label">Our Strategic Intervention</span>
                    <p className="proj-lux__desc">{p.result}</p>
                  </div>

                  <div className="proj-lux__section">
                    <span className="proj-lux__label">Key Focus Areas & Deliverables:</span>
                    <ul className="proj-lux__areas-list">
                      {p.areas.map((area) => (
                        <li key={area}>
                          <CheckCircle2 size={14} className="proj-lux__area-check" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="proj-lux__cta-row">
                  <a className="link-gold proj-lux__link" href="#contact">
                    <span>Discuss a similar project</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              {/* Visual & Metric Art Showcase */}
              <div className="proj-lux__media">
                <img
                  src={p.image}
                  alt={p.title}
                  className="proj-lux__img"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = p.fallback
                  }}
                />
                <div className="proj-lux__overlay" />

                {/* Glassmorphic Metric Display */}
                <div className="proj-lux__stat-card">
                  <div className="proj-lux__stat-gold-ring" />
                  <strong className="proj-lux__metric-num">{p.metric}</strong>
                  <span className="proj-lux__metric-lbl">{p.metricLabel}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
