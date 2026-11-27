import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import Logo from './Logo.jsx'
import { nav } from '../data/content.js'

export default function Navbar({ onOpenConsultation }) {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 30)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  const handleCtaClick = (e) => {
    if (onOpenConsultation) {
      e.preventDefault()
      setOpen(false)
      onOpenConsultation(e)
    }
  }

  return (
    <header className={'nav' + (solid ? ' nav--solid' : '')}>
      <div className="wrap nav__in">
        <Logo />

        <nav className="nav__links" aria-label="Primary Navigation">
          {nav.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>

        <button
          type="button"
          onClick={handleCtaClick}
          className="btn btn--gold btn--shimmer nav__cta"
        >
          <span>Request Consultation</span>
          <ArrowRight size={14} />
        </button>

        <button
          className="nav__burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="drawer"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <a href="#top" onClick={() => setOpen(false)}>Home</a>
            {nav.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
            <button
              type="button"
              className="btn btn--gold btn--shimmer"
              onClick={handleCtaClick}
            >
              <span>Request Consultation</span>
              <ArrowRight size={15} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
