import { AnimatePresence, motion } from 'framer-motion'

export default function Loader({ done }) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="loader loader--luxury"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden="true"
        >
          {/* Radial ambient lighting */}
          <div className="loader__aura" />

          <div className="loader__content">
            <motion.div
              className="loader__logo-wrap"
              initial={{ scale: 0.86, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src="/images/qaf-alliance-logo-transparent.png"
                alt="QAF ALLIANCE"
                className="loader__logo-img"
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = '/images/qaf-alliance-logo.jpg'
                }}
              />
              <div className="loader__shimmer" />
            </motion.div>

            <motion.div
              className="loader__bar-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.div
                className="loader__bar-fill"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>

            <motion.p
              className="loader__tagline"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              Assurance &bull; Innovation &bull; Sustainability
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
