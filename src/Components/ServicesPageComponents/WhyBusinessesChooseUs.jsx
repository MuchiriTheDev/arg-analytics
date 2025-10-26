import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight, FaCalendarAlt } from 'react-icons/fa'

const WhyBusinessesChooseUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const headlineVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: 0.1, ease: 'easeOut' }
    }
  }

  const ctaVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: 0.2, ease: 'easeOut' }
    },
    hover: {
      scale: 1.03,
      boxShadow: '0 10px 25px rgba(0, 184, 184, 0.3)',
      transition: { duration: 0.25 }
    }
  }

  return (
    <section className="relative py-12 md:py-20 bg-gradient-to-br from-[var(--bg-color)] via-[var(--secondary-color)] to-[var(--primary-color)]/10 overflow-hidden">
      {/* Compact wave overlay */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[var(--primary-color)]/3 to-transparent -z-10"></div>
      
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] bg-clip-text text-transparent drop-shadow-md leading-tight"
          variants={headlineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Automation That Fits Your Business
          <br />
          <span className="text-[var(--accent-color)]">Not the Other Way Around</span>
        </motion.h2>

        {/* Text */}
        <motion.p
          className="text-base md:text-lg max-w-xl mx-auto mb-8 text-[var(--text-color)]/90 italic font-light leading-relaxed drop-shadow-sm"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Every automation we build is tailored to your systems, processes, and team structure. Whether you're in consulting, banking, or construction, our AI agents integrate seamlessly and deliver measurable impact from day one.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover="hover"
        >
          <a
            href="/contact" // Or Calendly link
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover)] text-white font-semibold rounded-xl shadow-lg hover:shadow-[0_10px_25px_var(--primary-color)]/40 focus:outline-none focus:ring-4 focus:ring-[var(--primary-color)]/50 transition-all duration-300 transform active:scale-[0.98] relative overflow-hidden group"
          >
            <span className="mr-2 text-white"><FaCalendarAlt /></span>
            <span className='text-white'>Book a Discovery Call</span>
            <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
            {/* Compact shimmer on hover */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5, ease: 'linear' }}
            />
          </a>
          <motion.p
            className="mt-3 text-xs md:text-sm text-[var(--text-color)]/70 italic"
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Let's identify the best automation for your business.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyBusinessesChooseUs