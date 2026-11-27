import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles,
  ArrowRight,
  Factory,
  Hotel,
  ChefHat,
  Truck,
  Briefcase,
  CheckCircle2
} from 'lucide-react'
import Reveal from './Reveal.jsx'
import { industries } from '../data/content.js'

const sectorIcons = {
  'food-mfg': Factory,
  'hospitality-tourism': Hotel,
  'food-service-catering': ChefHat,
  'retail-distribution': Truck,
  'other-industries': Briefcase
}

export default function Industries() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="industries" className="sec sec--cream industries-sec">
      <div className="wrap">
        <div className="sec-header-center">
          <Reveal className="sec-tag">
            <Sparkles size={14} />
            <span>Industries We Serve</span>
          </Reveal>
          <Reveal as="h2" className="h2 sec-title-center">
            Tailored Solutions Across Diverse Industry Sectors.
          </Reveal>
          <Reveal as="p" className="sec-subtitle-center" delay={0.1}>
            We provide tailored consultancy, training, and assessment solutions across the entire food supply chain and corporate landscape.
          </Reveal>
        </div>

        {/* High-end industry cards grid */}
        <div className="ind-grid">
          {industries.map((sec, idx) => {
            const Icon = sectorIcons[sec.id] || Factory
            return (
              <Reveal
                key={sec.id}
                delay={idx * 0.08}
                className="ind-card"
              >
                {/* Background high-resolution photography */}
                <div className="ind-card__bg">
                  <img
                    src={sec.image}
                    alt={sec.name}
                    className="ind-card__img"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80'
                    }}
                  />
                  <div className="ind-card__overlay" />
                  <div className="ind-card__hover-glow" />
                </div>

                {/* Card Content */}
                <div className="ind-card__content">
                  <div className="ind-card__top">
                    <div className="ind-card__icon-box">
                      <Icon size={22} />
                    </div>
                    <span className="ind-card__badge">{sec.badge}</span>
                  </div>

                  <div className="ind-card__bottom">
                    <h3 className="ind-card__title">{sec.name}</h3>
                    <p className="ind-card__text">{sec.text}</p>

                    {/* Sub-industry tags */}
                    <div className="ind-card__tags">
                      {sec.items.map((item) => (
                        <span key={item} className="ind-card__tag">
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="ind-card__footer">
                      <span className="ind-card__stat">{sec.stat}</span>
                      <a href="#contact" className="ind-card__link">
                        <span>Inquire</span>
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
