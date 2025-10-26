import React from 'react'
import { motion } from 'framer-motion'
import { FaUserTie, FaChartBar, FaRocket, FaHeadset } from 'react-icons/fa'

const WhyChooseUs = () => {
  const points = [
    {
      id: 'tailored',
      title: 'Tailored Automations',
      description: 'Built for your unique business model—custom AI agents that fit seamlessly into your workflows, no cookie-cutter solutions.',
      icon: <FaUserTie className="w-8 h-8" />
    },
    {
      id: 'data-driven',
      title: 'Data-Driven Impact',
      description: 'Clear results in hours saved and efficiency gained—measurable ROI from day one with transparent analytics dashboards.',
      icon: <FaChartBar className="w-8 h-8" />
    },
    {
      id: 'ai-future',
      title: 'AI-Enabled Future',
      description: 'Solutions that evolve with your business—adaptive agents that learn, scale, and innovate alongside your growth.',
      icon: <FaRocket className="w-8 h-8" />
    },
    {
      id: 'support',
      title: 'Reliable Support',
      description: 'Ongoing optimization and expert insight—dedicated partnership with proactive monitoring and 24/7 AI-assisted troubleshooting.',
      icon: <FaHeadset className="w-8 h-8" />
    }
  ]

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

  const pointVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
        duration: 0.6
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      boxShadow: '0 20px 40px rgba(0, 184, 184, 0.15)',
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  }

  return (
    <section id="why-choose-us" className="relative py-20 md:py-32 bg-[var(--secondary-color)] overflow-hidden">
      {/* Subtle gradient overlay for elegance */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/5 via-transparent to-[var(--accent-color)]/5 -z-10"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[var(--primary-color)] drop-shadow-lg"
            variants={containerVariants}
          >
            Why Choose Us
          </motion.h2>
        </motion.div>

        {/* Points Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {points.map((point, index) => (
            <motion.div
              key={point.id}
              className="group relative"
              variants={pointVariants}
              whileHover="hover"
            >
              {/* Point Card */}
              <motion.div
                className="relative p-6 md:p-8 bg-[var(--bg-color)]/50 backdrop-blur-sm rounded-2xl border border-[var(--border-color)]/20 hover:border-[var(--primary-color)]/30 transition-all duration-300 h-full flex flex-col justify-between shadow-lg hover:shadow-[0_15px_35px_rgba(0,184,184,0.1)]"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-xl bg-[var(--primary-color)]/10 group-hover:bg-[var(--primary-color)]/20 transition-colors">
                  <div className="text-[var(--primary-color)]">
                    {point.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 text-center">
                  <h3 className="text-lg md:text-xl font-semibold text-[var(--text-color)] mb-3 leading-tight">
                    {point.title}
                  </h3>
                  <p className="text-sm md:text-base text-[var(--text-color)]/80 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-base md:text-lg italic text-[var(--accent-color)] font-medium max-w-2xl mx-auto">
            “We don’t just automate; we engineer results.”
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs