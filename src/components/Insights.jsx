import { useState } from 'react'
import { ArrowUpRight, Sparkles, Clock, BookOpen, ChevronDown } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { insights, insightsCategories, site } from '../data/content.js'

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [visibleCount, setVisibleCount] = useState(6)

  const filteredInsights =
    activeCategory === 'All'
      ? insights
      : insights.filter((item) => item.category === activeCategory)

  const displayedList =
    activeCategory === 'All'
      ? filteredInsights.slice(0, visibleCount)
      : filteredInsights

  return (
    <section id="insights" className="sec sec--dark insights-sec">
      <div className="wrap">
        <div className="ins__head">
          <div>
            <Reveal className="sec-tag sec-tag--gold">
              <Sparkles size={14} />
              <span>Insights & Knowledge Centre</span>
            </Reveal>
            <Reveal as="h2" className="h2">
              Knowledge That Drives Excellence.
            </Reveal>
            <Reveal as="p" className="sec-subtitle-center sec-subtitle-center--light" delay={0.1}>
              Sharing practical knowledge, industry developments, regulatory updates, and professional guidance across the UAE and GCC.
            </Reveal>
          </div>

          <Reveal delay={0.15} className="ins__social-links">
            <a
              className="link-gold ins__insta-link"
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Follow on LinkedIn</span>
              <ArrowUpRight size={17} />
            </a>
            <a
              className="link-gold ins__insta-link"
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Instagram Dispatches</span>
              <ArrowUpRight size={17} />
            </a>
          </Reveal>
        </div>

        {/* Category Filter Tabs */}
        <div className="ins__filter-row" role="tablist" aria-label="Insights Categories">
          {insightsCategories.map((cat) => {
            const isSelected = cat === activeCategory
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isSelected}
                className={`ins__filter-btn ${isSelected ? 'is-active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat)
                  setVisibleCount(6)
                }}
              >
                <span>{cat}</span>
              </button>
            )
          })}
        </div>

        {/* Balanced Insights Grid */}
        <div className="ins-grid-lux">
          {displayedList.map((p, n) => {
            return (
              <Reveal
                as="article"
                key={p.title}
                delay={n * 0.05}
                className="ins-card-lux"
              >
                {/* Visual Imagery */}
                <div className="ins-card-lux__media">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="ins-card-lux__img"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src =
                        'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80'
                    }}
                  />
                  <div className="ins-card-lux__img-overlay" />
                  <span className="ins-card-lux__tag-badge">{p.tag}</span>
                </div>

                {/* Content */}
                <div className="ins-card-lux__content">
                  <div className="ins-card-lux__meta">
                    <span className="ins-card-lux__category-pill">
                      {p.category}
                    </span>
                    <span className="ins-card-lux__time">
                      <Clock size={13} />
                      {p.readTime}
                    </span>
                  </div>

                  <h3 className="ins-card-lux__title">{p.title}</h3>
                  <p className="ins-card-lux__text">{p.text}</p>

                  <a
                    className="link-gold ins-card-lux__read"
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Read Advisory Dispatch</span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Load More Button for 'All' Category */}
        {activeCategory === 'All' && visibleCount < filteredInsights.length && (
          <div className="ins__load-more-wrap">
            <button
              type="button"
              className="btn btn--gold btn--shimmer"
              onClick={() => setVisibleCount((prev) => prev + 6)}
            >
              <span>View More Publications ({filteredInsights.length - visibleCount} remaining)</span>
              <ChevronDown size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
