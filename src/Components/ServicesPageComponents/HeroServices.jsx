import React from 'react'
import { motion } from 'framer-motion'
import { FaCalendarAlt } from 'react-icons/fa'

const HeroServices = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const headlineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  const sublineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.3, ease: 'easeOut' }
    }
  }

  const ctaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.5, ease: 'easeOut' }
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 15px 35px rgba(0, 184, 184, 0.4)',
      transition: { duration: 0.3 }
    }
  }

  return (
    <section className="relative h-[110vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--bg-color)] via-[var(--secondary-color)] to-[var(--primary-color)]/10">
      {/* Futuristic interconnected modules visual - SVG animation */}
      <div className="absolute inset-0 z-0">
        <svg viewBox="0 0 1200 800" className="w-full h-full opacity-20">
          {/* Animated interconnected nodes */}
          <motion.circle
            cx="200" cy="400" r="80"
            fill="url(#node1)"
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.circle
            cx="600" cy="200" r="60"
            fill="url(#node2)"
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          />
          <motion.circle
            cx="1000" cy="500" r="70"
            fill="url(#node3)"
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={{ scale: [0.8, 1.15, 0.8], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
          {/* Connecting lines with dash animation */}
          <motion.line
            x1="280" y1="400" x2="600" y2="200"
            stroke="var(--primary-color)"
            strokeWidth="2"
            strokeDasharray="10,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          />
          <motion.line
            x1="600" y1="200" x2="1000" y2="500"
            stroke="var(--accent-color)"
            strokeWidth="2"
            strokeDasharray="8,4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse', delay: 0.5 }}
          />
          {/* Gradients for nodes */}
          <defs>
            <radialGradient id="node1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--primary-color)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="var(--primary-color)" stopOpacity="0.2" />
            </radialGradient>
            <radialGradient id="node2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--accent-color)" stopOpacity="0.7" />
              <stop offset="100%" stopColor="var(--accent-color)" stopOpacity="0.1" />
            </radialGradient>
            <radialGradient id="node3" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--primary-hover)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="var(--primary-hover)" stopOpacity="0.1" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Headline */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[var(--primary-color)] via-white to-[var(--accent-color)] bg-clip-text text-transparent drop-shadow-2xl leading-tight"
          variants={headlineVariants}
        >
          Automation That Drives
          <br />
          <span className="text-[var(--accent-color)]">Real Business Results</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-[var(--text-color)]/90 leading-relaxed drop-shadow-lg"
          variants={sublineVariants}
        >
          From cash flow to compliance, our AI agents streamline your most demanding business processes — saving hours and improving accuracy.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={ctaVariants} whileHover="hover" whileTap={{ scale: 0.98 }}>
          <a
            href="https://calendly.com/your-link/strategy-call" // Replace with your Calendly link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover)] text-white font-semibold rounded-2xl shadow-xl hover:shadow-[0_15px_35px_var(--primary-color)]/50 focus:outline-none focus:ring-4 focus:ring-[var(--primary-color)]/50 transition-all duration-300 transform active:scale-[0.98] backdrop-blur-sm"
          >
            <FaCalendarAlt className="mr-3 text-white w-5 h-5" />
            <p className="text-white">Book a Free Consultation</p>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroServices