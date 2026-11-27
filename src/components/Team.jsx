import { Sparkles, Award, Shield, CheckCircle2, UserCheck, Briefcase } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { team } from '../data/content.js'

export default function Team() {
  return (
    <section id="team" className="sec sec--cream team-sec">
      <div className="wrap">
        <div className="sec-header-center">
          <Reveal className="sec-tag">
            <Sparkles size={14} />
            <span>Executive Leadership</span>
          </Reveal>
          <Reveal as="h2" className="h2 sec-title-center">
            Technical Leadership & Operational Mastery.
          </Reveal>
          <Reveal as="p" className="sec-subtitle-center" delay={0.1}>
            Hands-on professionals combining technical expertise, regulatory compliance acumen, and real-world industry experience.
          </Reveal>
        </div>

        {/* Executive Leadership Showcase Cards */}
        <div className="team-exec-grid">
          {team.map((m, n) => {
            const isFounder = m.name === 'Nishad Ali K P'
            const initials = isFounder ? 'NA' : 'TD'

            return (
              <Reveal key={m.name} delay={n * 0.1} className="team-exec-card">
                {/* Header Row: Monogram Seal + Role Info */}
                <div className="team-exec-card__head">
                  <div className="team-exec-card__seal">
                    <span className="team-exec-card__initials">{initials}</span>
                    <div className="team-exec-card__seal-ring" aria-hidden="true" />
                  </div>

                  <div className="team-exec-card__titles">
                    <span className="team-exec-card__exp-pill">{m.experience}</span>
                    <h3 className="team-exec-card__name">{m.name}</h3>
                    <p className="team-exec-card__role">{m.role}</p>
                    <span className="team-exec-card__cred">
                      <Award size={14} />
                      {m.credentials}
                    </span>
                  </div>
                </div>

                {/* Narrative Bio */}
                <p className="team-exec-card__bio">{m.bio}</p>

                {/* Specialisations Grid */}
                {m.specialisations && (
                  <div className="team-exec-card__specs">
                    <span className="team-exec-card__specs-title">
                      {isFounder ? 'Core Specialisations:' : 'Key Responsibilities:'}
                    </span>
                    <ul className="team-exec-card__specs-list">
                      {m.specialisations.map((spec) => (
                        <li key={spec}>
                          <CheckCircle2 size={14} className="team-exec-card__check" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
