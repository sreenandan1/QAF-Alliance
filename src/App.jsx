import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import Loader from './components/Loader.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import InteractiveCursorGlow from './components/InteractiveCursorGlow.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
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

  // Smooth scrolling (skipped when the visitor prefers reduced motion)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ duration: 1.15, anchors: true })
    let id
    const raf = (t) => { lenis.raf(t); id = requestAnimationFrame(raf) }
    id = requestAnimationFrame(raf)
    return () => { cancelAnimationFrame(id); lenis.destroy() }
  }, [])
  

  // Intro screen reveal
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 1800)
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
      <InteractiveCursorGlow />
      <Navbar onOpenConsultation={handleOpenConsultation} />
      <main id="top">
        <Hero ready={ready} onOpenConsultation={handleOpenConsultation} />
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
