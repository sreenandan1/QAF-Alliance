import { Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { standards } from '../data/content.js'

export default function Standards() {
  return (
    <section className="sec sec--deep standards-sec">
      <div className="wrap">
        <div className="sec-header-center">
          <Reveal className="sec-tag sec-tag--gold">
            <Sparkles size={14} />
            <span>Accreditation & Benchmarks</span>
          </Reveal>
          <Reveal as="h2" className="h2 sec-title-center">
            Global Frameworks We Prepare You to Master.
          </Reveal>
          <Reveal as="p" className="sec-subtitle-center sec-subtitle-center--light" delay={0.1}>
            Insulating your enterprise against regulatory scrutiny and securing internationally recognized seals of food safety and corporate integrity.
          </Reveal>
        </div>

        <div className="std-grid-lux">
          {standards.map((s, idx) => (
            <Reveal
              key={s.name}
              delay={idx * 0.06}
              className="std-card-lux"
            >
              <div className="std-card-lux__top">
                <div className="std-card-lux__icon">
                  <ShieldCheck size={22} />
                </div>
                <span className="std-card-lux__code">{s.code}</span>
              </div>
              <h3 className="std-card-lux__title">{s.name}</h3>
              <p className="std-card-lux__text">{s.text}</p>
              <div className="std-card-lux__footer">
                <CheckCircle2 size={15} className="std-card-lux__check" />
                <span>Full Audit & Pre-Assessment Support</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
