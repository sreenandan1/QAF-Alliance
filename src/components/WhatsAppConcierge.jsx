import { MessageCircle } from 'lucide-react'
import { site } from '../data/content.js'

export default function WhatsAppConcierge() {
  const defaultMsg = encodeURIComponent('Hello QAF Alliance, I would like to inquire about your executive food safety and advisory services.')
  return (
    <a
      href={`https://wa.me/${site.whatsapp}?text=${defaultMsg}`}
      target="_blank"
      rel="noopener noreferrer"
      className="vip-concierge"
      aria-label="Direct WhatsApp VIP Concierge"
    >
      <span className="vip-concierge__pulse" aria-hidden="true" />
      <span className="vip-concierge__icon">
        <MessageCircle size={22} />
      </span>
      <span className="vip-concierge__text">
        <small>Direct Concierge</small>
        <b>WhatsApp Advisory</b>
      </span>
    </a>
  )
}
