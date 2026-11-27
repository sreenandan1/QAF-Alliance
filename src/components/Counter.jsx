import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

export default function Counter({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduce = useReducedMotion()
  const [v, setV] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduce) { setV(to); return }
    const c = animate(0, to, { duration: 2.2, ease: 'easeOut', onUpdate: (n) => setV(Math.round(n)) })
    return () => c.stop()
  }, [inView, to, reduce])

  return <span ref={ref}>{v.toLocaleString()}{suffix}</span>
}
