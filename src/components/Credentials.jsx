import { Sparkles, Award, ShieldCheck, CheckCircle2, AlertCircle, FileCheck2 } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { credentials, credentialsDisclaimer, standards } from '../data/content.js'

export default function Credentials() {
  return (
    <section id="credentials" className="sec sec--deep credentials-sec">
      <div className="wrap">
        {/* Section Header */}
        <div className="sec-header-center">
          <Reveal className="sec-tag sec-tag--gold">
            <Sparkles size={14} />
            <span>Professional Credentials & Standards</span>
          </Reveal>
          <Reveal as="h2" className="h2 sec-title-center">
            Professional Qualifications & Competencies.
          </Reveal>
          <Reveal as="p" className="sec-subtitle-center sec-subtitle-center--light" delay={0.1}>
            Our professional expertise is supported by advanced academic qualifications, internationally recognized lead auditor certifications, and extensive industry experience.
          </Reveal>
        </div>

        {/* Credentials Grid (8 Key Qualifications) */}
        <div className="cred-grid">
          {credentials.map((cred, idx) => (
            <Reveal
              key={cred.title}
              delay={idx * 0.05}
              className="cred-card"
            >
              <div className="cred-card__top">
                <div className="cred-card__icon-box">
                  <Award size={20} />
                </div>
                <span className="cred-card__issuer">{cred.issuer}</span>
              </div>
              <h3 className="cred-card__title">{cred.title}</h3>
              <p className="cred-card__desc">{cred.desc}</p>
            </Reveal>
          ))}
        </div>

        {/* Transparency Disclaimer Notice */}
        <Reveal delay={0.2} className="cred-disclaimer-card">
          <div className="cred-disclaimer-card__icon">
            <AlertCircle size={22} />
          </div>
          <div className="cred-disclaimer-card__text">
            <h4>Professional Credentials Notice</h4>
            <p>{credentialsDisclaimer}</p>
          </div>
        </Reveal>

        {/* Global Standards & Frameworks Sub-Section */}
        <div className="standards-sub">
          <div className="sec-header-center">
            <Reveal as="h3" className="h2 sec-title-center">
              Global & Regional Standards We Implement
            </Reveal>
            <Reveal as="p" className="sec-subtitle-center sec-subtitle-center--light" delay={0.1}>
              Proven methodologies preparing your enterprise for regulatory approvals and international benchmark certifications.
            </Reveal>
          </div>

          <div className="std-grid-lux">
            {standards.map((s, idx) => (
              <Reveal
                key={s.name}
                delay={idx * 0.05}
                className="std-card-lux"
              >
                <div className="std-card-lux__top">
                  <div className="std-card-lux__icon">
                    <ShieldCheck size={22} />
                  </div>
                  <span className="std-card-lux__code">{s.code}</span>
                </div>
                <h4 className="std-card-lux__title">{s.name}</h4>
                <p className="std-card-lux__text">{s.text}</p>
                <div className="std-card-lux__footer">
                  <CheckCircle2 size={15} className="std-card-lux__check" />
                  <span>Full Implementation & Gap Assessments</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
