import Counter from './Counter.jsx'
import { stats } from '../data/content.js'

export default function Stats() {
  return (
    <section className="stats stats-lux" aria-label="Key Performance Benchmarks">
      <div className="wrap">
        <div className="stats__grid">
          {stats.map((s, idx) => (
            <div key={s.label} className="stat-lux">
              <div className="stat-lux__top">
                <span className="stat-lux__index">0{idx + 1}</span>
                <span className="stat-lux__line" />
              </div>
              <strong className="stat-lux__num">
                <Counter to={s.to} />
                <span className="stat-lux__suffix">{s.suffix}</span>
              </strong>
              <span className="stat-lux__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
