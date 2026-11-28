import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import Loader from './components/Loader.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Showcase from './components/Showcase.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Industries from './components/Industries.jsx'
import Stats from './components/Stats.jsx'
import Training from './components/Training.jsx'
import Projects from './components/Projects.jsx'
import Credentials from './components/Credentials.jsx'
import Team from './components/Team.jsx'
import Testimonials from './components/Testimonials.jsx'
import Insights from './components/Insights.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppConcierge from './components/WhatsAppConcierge.jsx'
import ConsultationModal from './components/ConsultationModal.jsx'

export default function App() {
  const [ready, setReady] = useState(false)
  const [consultationOpen, setConsultationOpen] = useState(false)

  // Smooth scrolling with strict top reset on page load / refresh
  useEffect(() => {
    // 1. Force browser scroll restoration to manual
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)

    // 2. Clear any lingering anchor hash on reload so browser doesn't jump down
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search)
      window.scrollTo(0, 0)
    }

    // 3. Beforeunload listener to reset scroll for the next refresh
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0)
    }
    window.addEventListener('beforeunload', handleBeforeUnload)

    // 4. Initialize Lenis smooth scroll
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return () => window.removeEventListener('beforeunload', handleBeforeUnload)
    }

    const lenis = new Lenis({
      duration: 1.15,
      anchors: false, // Prevent auto-jumping to hash on reload
      smoothWheel: true
    })

    lenis.scrollTo(0, { immediate: true })

    // Support smooth anchor clicks smoothly via Lenis
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]')
      if (!anchor) return
      const targetId = anchor.getAttribute('href')
      if (targetId === '#top') {
        e.preventDefault()
        lenis.scrollTo(0, { duration: 1.2 })
      } else if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId)
        if (targetEl) {
          e.preventDefault()
          lenis.scrollTo(targetEl, { offset: -40, duration: 1.2 })
        }
      }
    }
    document.addEventListener('click', handleAnchorClick)

    let id
    const raf = (t) => {
      lenis.raf(t)
      id = requestAnimationFrame(raf)
    }
    id = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(id)
      lenis.destroy()
      window.removeEventListener('beforeunload', handleBeforeUnload)
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])

  // Intro screen reveal & ensure scroll position stays at top when loader dismisses
  useEffect(() => {
    window.scrollTo(0, 0)
    const t = setTimeout(() => {
      setReady(true)
      window.scrollTo(0, 0)
    }, 1800)
    return () => clearTimeout(t)
  }, [])

  const handleOpenConsultation = (e) => {
    if (e && e.preventDefault) e.preventDefault()
    setConsultationOpen(true)
  }

  return (
    <>
      <Loader done={ready} />
      <ScrollProgress />
      <Navbar onOpenConsultation={handleOpenConsultation} />
      <main id="top">
        <Hero ready={ready} onOpenConsultation={handleOpenConsultation} />
        <Showcase onOpenConsultation={handleOpenConsultation} />
        <About />
        <Services onOpenConsultation={handleOpenConsultation} />
        <Industries onOpenConsultation={handleOpenConsultation} />
        <Stats />
        <Training onOpenConsultation={handleOpenConsultation} />
        <Projects onOpenConsultation={handleOpenConsultation} />
        <Credentials />
        <Team />
        <Testimonials />
        <Insights />
        <Contact />
      </main>
      <Footer onOpenConsultation={handleOpenConsultation} />
      <WhatsAppConcierge />
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </>
  )
}
