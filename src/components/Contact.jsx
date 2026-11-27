import { useState } from 'react'
import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Send,
  CheckCircle2,
  ShieldCheck,
  Linkedin,
  Instagram,
  ArrowRight,
  Info
} from 'lucide-react'
import Reveal from './Reveal.jsx'
import { services, site } from '../data/content.js'

export default function Contact() {
  const [state, setState] = useState('idle') // idle | busy | sent | error

  async function submit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const f = Object.fromEntries(new FormData(form))
    setState('busy')
    try {
      if (site.formEndpoint) {
        const res = await fetch(site.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(f)
        })
        if (!res.ok) throw new Error('Request failed')
      } else {
        const text = `Hello QAF Alliance,\n\nI am ${f.name} from ${f.company}.\n- Service Domain: ${f.service}\n- Email: ${f.email}\n- Phone: ${f.phone}\n- Requirements: ${f.message}`
        window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
      }
      form.reset()
      setState('sent')
    } catch {
      setState('error')
    }
  }

  return (
    <section id="contact" className="sec sec--cream2 contact-sec">
      <div className="wrap contact">
        {/* Contact Information & Concierge Details */}
        <div className="contact__info">
          <Reveal className="sec-tag">
            <Sparkles size={14} />
            <span>Connect With Us</span>
          </Reveal>

          <Reveal as="h2" className="h2 contact__heading">
            Let's Connect. Let's Grow Together.
          </Reveal>

          <Reveal as="p" className="contact__lead" delay={0.1}>
            Whether you are looking to strengthen food safety compliance, improve quality performance, develop your workforce, or implement sustainable business practices, QAF Alliance is ready to support your journey.
          </Reveal>

          {/* Call to action highlight */}
          <Reveal delay={0.15} className="contact__cta-box">
            <h4>Looking for a reliable partner in Food Safety, Quality & Sustainability?</h4>
            <p>Let's discuss your business requirements and explore how QAF Alliance can support your organisation.</p>
          </Reveal>

          <Reveal delay={0.2} className="contact__assurance-card">
            <ShieldCheck size={22} className="contact__assurance-icon" />
            <div>
              <p className="contact__assurance-title">Strict Confidentiality Assured</p>
              <p className="contact__assurance-sub">All consultations and client proprietary information protected by strict non-disclosure.</p>
            </div>
          </Reveal>

          <ul className="contact__list">
            <li>
              <div className="contact__icon-box"><MapPin size={18} /></div>
              <div>
                <span className="contact__meta-lbl">Location</span>
                <span className="contact__meta-val">{site.name} &bull; {site.location}</span>
              </div>
            </li>
            <li>
              <div className="contact__icon-box"><Mail size={18} /></div>
              <div>
                <span className="contact__meta-lbl">Business Email</span>
                <span className="contact__meta-val">
                  {site.email} <small className="contact__meta-note">(Official email to be confirmed)</small>
                </span>
              </div>
            </li>
            <li>
              <div className="contact__icon-box"><Phone size={18} /></div>
              <div>
                <span className="contact__meta-lbl">Telephone / WhatsApp</span>
                <span className="contact__meta-val">
                  Business contact number &bull; to be confirmed
                </span>
              </div>
            </li>
            <li>
              <div className="contact__icon-box contact__icon-box--wa"><MessageCircle size={18} /></div>
              <div>
                <span className="contact__meta-lbl">Instant Consultation Desk</span>
                <a
                  href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Hello QAF Alliance, I would like to inquire about your services.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__meta-val contact__wa-link"
                >
                  Message via WhatsApp &rarr;
                </a>
              </div>
            </li>
          </ul>

          {/* Social Profiles */}
          <div className="contact__social-row">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-pill"
            >
              <Linkedin size={16} />
              <span>LinkedIn Profile</span>
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-pill"
            >
              <Instagram size={16} />
              <span>Instagram Profile</span>
            </a>
          </div>
        </div>

        {/* Executive Inquiry Form */}
        <Reveal as="div" className="form-card-lux" delay={0.1}>
          <div className="form-card-lux__glow" aria-hidden="true" />
          <div className="form-card-lux__header">
            <h3>Request a Consultation</h3>
            <p>Share your operational requirements and our team will get back to you promptly.</p>
          </div>

          <form className="form-lux" onSubmit={submit}>
            <div className="form-lux__row">
              <label>
                <span>Full Name *</span>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Tariq Al Nuaimi"
                />
              </label>
              <label>
                <span>Organization / Facility *</span>
                <input
                  name="company"
                  type="text"
                  required
                  placeholder="e.g. Emirates Food Industries"
                />
              </label>
            </div>

            <div className="form-lux__row">
              <label>
                <span>Work Email *</span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="name@company.com"
                />
              </label>
              <label>
                <span>Contact Number *</span>
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="+971 50 123 4567"
                />
              </label>
            </div>

            <label>
              <span>Service Domain of Interest *</span>
              <select name="service" required defaultValue="Food Industry Consultancy">
                {services.map((s) => (
                  <option key={s.id} value={s.title}>
                    Service {s.letter}: {s.title}
                  </option>
                ))}
                <option value="Training Programmes">Customized Training Programmes</option>
                <option value="General Trading Inquiry">General Trading Inquiry</option>
                <option value="Other Advisory">Other / General Advisory Requirement</option>
              </select>
            </label>

            <label>
              <span>Business Requirements & Scope *</span>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Briefly describe your operational challenges, facility type, or upcoming compliance audit targets..."
              />
            </label>

            <button
              type="submit"
              disabled={state === 'busy'}
              className="btn btn--gold btn--shimmer btn--full"
            >
              <span>{state === 'busy' ? 'Sending Request...' : 'Submit Consultation Request'}</span>
              <Send size={15} />
            </button>

            {state === 'sent' && (
              <div className="form-lux__sent">
                <CheckCircle2 size={16} />
                <span>Thank you. Your consultation request has been received.</span>
              </div>
            )}
            {state === 'error' && (
              <div className="form-lux__error">
                <span>An error occurred. Please message our desk directly via WhatsApp.</span>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
