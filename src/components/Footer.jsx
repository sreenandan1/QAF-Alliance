import { Sparkles, ShieldCheck, MapPin, Mail, Phone, ArrowUpRight, Linkedin, Instagram } from 'lucide-react'
import Logo from './Logo.jsx'
import { nav, services, site } from '../data/content.js'

export default function Footer({ onOpenConsultation }) {
  return (
    <footer className="foot">
      <div className="wrap foot__grid">
        <div className="foot__brand">
          <Logo height={52} />
          <p className="foot__tag">{site.tagline}</p>
          <p className="foot__motto">{site.subtitle}</p>
          <div className="foot__accreditation">
            <ShieldCheck size={16} />
            <span>UAE-Based Professional Consultancy & Solutions</span>
          </div>
          <p className="foot__location">
            <MapPin size={15} />
            {site.name} &bull; {site.location}
          </p>
        </div>

        <div>
          <h3>Navigation</h3>
          {nav.map(([l, h]) => (
            <a key={h} href={h}>{l}</a>
          ))}
        </div>

        <div>
          <h3>Our Services</h3>
          {services.map((s) => (
            <a key={s.id} href="#services">
              Service {s.letter}: {s.title}
            </a>
          ))}
        </div>

        <div>
          <h3>Executive Inquiries</h3>
          {onOpenConsultation && (
            <button
              type="button"
              onClick={onOpenConsultation}
              className="btn btn--gold btn--shimmer foot__consult-btn"
            >
              <span>Schedule Advisory Briefing</span>
              <ArrowUpRight size={14} />
            </button>
          )}
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="foot__contact-link"
          >
            <Linkedin size={15} />
            <span>LinkedIn Profile</span>
            <ArrowUpRight size={13} />
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="foot__contact-link"
          >
            <Instagram size={15} />
            <span>Instagram Profile</span>
            <ArrowUpRight size={13} />
          </a>
          <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="foot__contact-link">
            <span>WhatsApp Consultation Desk</span>
            <ArrowUpRight size={13} />
          </a>
          <a href={'mailto:' + site.email} className="foot__contact-link">
            <Mail size={15} />
            <span>{site.email}</span>
          </a>
        </div>
      </div>

      <div className="wrap foot__base">
        <span>&copy; {new Date().getFullYear()} {site.name}. All rights reserved. Assurance &bull; Innovation &bull; Sustainability.</span>
        <span>United Arab Emirates</span>
      </div>
    </footer>
  )
}
