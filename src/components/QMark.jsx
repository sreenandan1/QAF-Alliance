import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

// The hero centrepiece: a gold Q that draws itself, with slow orbiting rings
// and a gentle tilt that follows the pointer.
export default function QMark({ play }) {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 16 })
  const sy = useSpring(my, { stiffness: 60, damping: 16 })
  const rotateX = useTransform(sy, [-1, 1], [9, -9])
  const rotateY = useTransform(sx, [-1, 1], [-11, 11])

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 2)
    my.set(((e.clientY - r.top) / r.height - 0.5) * 2)
  }
  const reset = () => { mx.set(0); my.set(0) }
  const go = play ? 'show' : 'hide'

  return (
    <div className="qmark" onMouseMove={onMove} onMouseLeave={reset} aria-hidden="true">
      <svg className="qmark__orbit qmark__orbit--a" viewBox="0 0 400 400" fill="none">
        <circle cx="200" cy="200" r="192" stroke="#C8A24A" strokeOpacity=".35" strokeWidth="1" strokeDasharray="2 10" />
        <circle cx="200" cy="8" r="5" fill="#E3C77A" />
      </svg>
      <svg className="qmark__orbit qmark__orbit--b" viewBox="0 0 400 400" fill="none">
        <circle cx="200" cy="200" r="168" stroke="#F5EEDC" strokeOpacity=".18" strokeWidth="1" />
        <circle cx="368" cy="200" r="4" fill="#F5EEDC" />
      </svg>
      <motion.div style={{ rotateX, rotateY, transformPerspective: 900 }} className="qmark__tilt">
        <svg viewBox="0 0 400 400" fill="none">
          <defs>
            <linearGradient id="goldG" x1="60" y1="40" x2="340" y2="360" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#F1DC9F" />
              <stop offset=".5" stopColor="#C8A24A" />
              <stop offset="1" stopColor="#8F6F25" />
            </linearGradient>
          </defs>
          <g transform="rotate(-90 200 190)">
            <motion.circle cx="200" cy="190" r="118" stroke="url(#goldG)" strokeWidth="30" strokeLinecap="round"
              variants={{ hide: { pathLength: 0 }, show: { pathLength: 1 } }} initial="hide" animate={go}
              transition={{ duration: 1.8, ease: [0.65, 0, 0.35, 1] }} />
          </g>
          <motion.path d="M236 238 L322 340" stroke="url(#goldG)" strokeWidth="30" strokeLinecap="round"
            variants={{ hide: { pathLength: 0 }, show: { pathLength: 1 } }} initial="hide" animate={go}
            transition={{ duration: 0.9, delay: 1.3, ease: 'easeOut' }} />
          <motion.circle cx="200" cy="190" r="78" stroke="#F5EEDC" strokeOpacity=".22" strokeWidth="1.5"
            variants={{ hide: { pathLength: 0 }, show: { pathLength: 1 } }} initial="hide" animate={go}
            transition={{ duration: 2.2, delay: 0.6, ease: 'easeInOut' }} />
        </svg>
      </motion.div>
    </div>
  )
}
