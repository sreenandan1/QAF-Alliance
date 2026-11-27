import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, ShieldCheck, CheckCircle2, ArrowRight, MessageCircle, Send } from 'lucide-react'
import { site, services } from '../data/content.js'

const facilityTypes = [
  'Food Manufacturing & Processing',
  'Hotel, Resort & Luxury Dining',
  'Commercial Catering / Central Kitchen',
  'Restaurant, Café & Cloud Kitchen',
  'Retail, Supermarket & Logistics',
  'Corporate / Other Enterprise'
]

const advisoryScopes = [
  'HACCP & FSMS System Development',
  'ISO 22000 / ISO 9001 Certification',
  'BRCGS Food Safety Audit Readiness',
  'Plastic Reduction & Zero-Waste Gastronomy',
  'Mystery Guest & Service Quality Audits',
  'Certified Workforce Training Programmes',
  'General Trading & Supplies Facilitation',
  'Custom Advisory Consultation'
]

export default function ConsultationModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1)
  const [facility, setFacility] = useState(facilityTypes[0])
  const [scope, setScope] = useState(advisoryScopes[0])
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [notes, setNotes] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleWhatsAppSend = () => {
    const text = `Hello QAF Alliance,\n\nI would like to request an executive consultation.\n- Name: ${name || 'N/A'}\n- Company: ${company || 'N/A'}\n- Facility Type: ${facility}\n- Advisory Scope: ${scope}\n- Email: ${email || 'N/A'}\n- Phone: ${phone || 'N/A'}\n- Requirements: ${notes || 'Standard advisory assessment'}`
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
    setStep(1)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <motion.div
            className="modal-box modal-box--lux"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Golden Ambient Rim */}
            <div className="modal-box__rim" aria-hidden="true" />

            {/* Header */}
            <div className="modal-box__head">
              <div className="modal-box__badge">
                <Sparkles size={13} />
                <span>Executive Concierge &bull; QAF Alliance</span>
              </div>
              <button
                className="modal-box__close"
                onClick={onClose}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {!submitted ? (
              <div className="modal-box__body">
                <div className="modal-box__title-area">
                  <h3 className="modal-box__title">
                    Request an Advisory Consultation
                  </h3>
                  <p className="modal-box__subtitle">
                    Select your operational sector and focus areas. Our senior partners respond promptly.
                  </p>
                </div>

                {/* Step indicator */}
                <div className="modal-steps">
                  <div className={`modal-step ${step >= 1 ? 'is-active' : ''}`}>
                    <span>1</span> Facility Type
                  </div>
                  <div className={`modal-step ${step >= 2 ? 'is-active' : ''}`}>
                    <span>2</span> Scope & Goals
                  </div>
                  <div className={`modal-step ${step >= 3 ? 'is-active' : ''}`}>
                    <span>3</span> Contact Info
                  </div>
                </div>

                {/* Step 1: Facility Type */}
                {step === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="modal-step-content"
                  >
                    <label className="modal-label">Select Your Facility or Enterprise Type:</label>
                    <div className="modal-options-grid">
                      {facilityTypes.map((item) => (
                        <button
                          key={item}
                          type="button"
                          className={`modal-opt-btn ${facility === item ? 'is-selected' : ''}`}
                          onClick={() => setFacility(item)}
                        >
                          <CheckCircle2 size={15} className="modal-opt-check" />
                          <span>{item}</span>
                        </button>
                      ))}
                    </div>

                    <div className="modal-actions">
                      <button
                        type="button"
                        className="btn btn--gold btn--shimmer"
                        onClick={() => setStep(2)}
                      >
                        <span>Continue to Advisory Scope</span>
                        <ArrowRight size={15} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Scope & Goals */}
                {step === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="modal-step-content"
                  >
                    <label className="modal-label">Select Your Primary Operational Objective:</label>
                    <div className="modal-options-grid">
                      {advisoryScopes.map((item) => (
                        <button
                          key={item}
                          type="button"
                          className={`modal-opt-btn ${scope === item ? 'is-selected' : ''}`}
                          onClick={() => setScope(item)}
                        >
                          <CheckCircle2 size={15} className="modal-opt-check" />
                          <span>{item}</span>
                        </button>
                      ))}
                    </div>

                    <div className="modal-actions modal-actions--split">
                      <button
                        type="button"
                        className="btn btn--ghost"
                        onClick={() => setStep(1)}
                      >
                        &larr; Back
                      </button>
                      <button
                        type="button"
                        className="btn btn--gold btn--shimmer"
                        onClick={() => setStep(3)}
                      >
                        <span>Proceed to Details</span>
                        <ArrowRight size={15} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Organization Details */}
                {step === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="modal-step-content"
                  >
                    <div className="modal-summary-pill">
                      <span>Targeting: <b>{scope}</b> for <b>{facility}</b></span>
                    </div>

                    <div className="form-row">
                      <div className="form-field">
                        <label>Your Name *</label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Tariq Al Nuaimi"
                          required
                        />
                      </div>
                      <div className="form-field">
                        <label>Company / Organization *</label>
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="e.g. Royal Palace Hospitality"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-field">
                        <label>Work Email *</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@company.ae"
                          required
                        />
                      </div>
                      <div className="form-field">
                        <label>WhatsApp / Phone Number *</label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+971 50 123 4567"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-field">
                      <label>Specific Requirements or Audit Timeline</label>
                      <textarea
                        rows={2}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Upcoming inspection date, facility capacity, or specific standards..."
                      />
                    </div>

                    <div className="modal-actions modal-actions--split">
                      <button
                        type="button"
                        className="btn btn--ghost"
                        onClick={() => setStep(2)}
                      >
                        &larr; Back
                      </button>

                      <button
                        type="button"
                        className="btn btn--gold btn--shimmer btn--luxury-glow"
                        onClick={handleWhatsAppSend}
                      >
                        <MessageCircle size={16} />
                        <span>Dispatch to WhatsApp VIP Desk</span>
                      </button>
                    </div>

                    <p className="modal-privacy-note">
                      <ShieldCheck size={14} /> Strict non-disclosure confidentiality guaranteed.
                    </p>
                  </motion.div>
                )}
              </div>
            ) : (
              <div className="modal-box__submitted">
                <div className="submitted-check">
                  <CheckCircle2 size={48} />
                </div>
                <h3>Consultation Request Dispatched</h3>
                <p>
                  Thank you, <b>{name || 'valued partner'}</b>. Your inquiry regarding <b>{scope}</b> for <b>{company || facility}</b> has been queued directly for our advisory team.
                </p>
                <button
                  type="button"
                  className="btn btn--gold btn--shimmer"
                  onClick={handleReset}
                >
                  Done
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
