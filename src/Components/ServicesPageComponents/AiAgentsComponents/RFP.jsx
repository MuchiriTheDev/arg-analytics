import React from 'react'
import { motion } from 'framer-motion'
import { FaCheckCircle, FaFileAlt, FaTrophy, FaClock, FaShieldAlt, FaDatabase, FaChartLine } from 'react-icons/fa'
import { FaCalendarAlt } from 'react-icons/fa'

const RFP = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.15
      }
    }
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  const listItemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, type: 'spring', stiffness: 200 }
    }
  }

  const benefitVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, type: 'spring', stiffness: 200 }
    },
    hover: {
      scale: 1.03,
      y: -3,
      boxShadow: '0 12px 25px rgba(0, 184, 184, 0.2)',
      transition: { duration: 0.25, ease: 'easeOut' }
    }
  }

  const ctaVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.3, ease: 'easeOut' }
    },
    hover: {
      scale: 1.03,
      boxShadow: '0 10px 25px rgba(0, 184, 184, 0.35)',
      transition: { duration: 0.25 }
    }
  }

  return (
    <section className="relative py-16 md:py-24 bg-[var(--bg-color)] overflow-hidden">
      {/* Compact gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/2 via-transparent to-[var(--accent-color)]/2 -z-10"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Overview */}
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1 
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] bg-clip-text text-transparent drop-shadow-lg leading-tight"
            variants={sectionVariants}
          >
            RFP AI Agent
          </motion.h1>
          <motion.p 
            className="text-sm md:text-base max-w-2xl mx-auto text-[var(--text-color)]/90 leading-relaxed"
            variants={sectionVariants}
          >
            The RFP AI Agent simplifies and accelerates the Request for Proposal process by automating document review, compliance validation, and initial proposal drafting — ideal for consulting, IT, construction, and government contracting firms.
          </motion.p>
        </motion.div>

        {/* Compact What It Includes - Inline icons, tighter list */}
        <motion.div
          className="mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-xl md:text-2xl font-semibold mb-6 text-[var(--primary-color)] flex items-center justify-center"
            variants={sectionVariants}
          >
            <FaCheckCircle className="mr-2 w-5 h-5 text-[var(--accent-color)]" />
            What It Includes
          </motion.h2>
          <ul className="space-y-3 max-w-2xl mx-auto">
            {[
              'Auto-extraction of key requirements from RFP documents (PDF, Word, or scanned).',
              'Compliance checklist generation and gap analysis.',
              'Draft proposal templates auto-filled with company data and past project references.',
              'Centralized RFP tracking dashboard.',
              'Optional approval workflow for team collaboration.'
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center space-x-3 text-sm md:text-base text-[var(--text-color)]/85 leading-relaxed pl-1 border-l border-[var(--primary-color)]/20 hover:border-[var(--primary-color)]/40 transition-colors"
                variants={listItemVariants}
              >
                <FaCheckCircle className="w-4 h-4 text-[var(--primary-color)] flex-shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Compact Key Benefits - 1-col stack on mobile, 2-col desktop with mini-stats */}
        <motion.div
          className="mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-xl md:text-2xl font-semibold mb-6 text-[var(--primary-color)] flex items-center justify-center"
            variants={sectionVariants}
          >
            <FaChartLine className="mr-2 w-5 h-5 text-[var(--accent-color)]" />
            Key Benefits
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { icon: <FaTrophy className="w-4 h-4" />, title: 'Win More Contracts', desc: 'Faster turnaround gives you a competitive edge in bidding.', stat: '2x Wins' },
              { icon: <FaShieldAlt className="w-4 h-4" />, title: 'Guaranteed Compliance', desc: 'Never miss a requirement or document clause again.', stat: 'Zero Misses' },
              { icon: <FaClock className="w-4 h-4" />, title: 'Time Savings', desc: 'Reduce hours of manual document review and formatting.', stat: '-80% Time' },
              { icon: <FaDatabase className="w-4 h-4" />, title: 'Knowledge Retention', desc: 'Store previous RFP responses for future reuse and consistency.', stat: 'Reusable' }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="group relative p-4 bg-[var(--secondary-color)]/20 backdrop-blur-sm rounded-xl border border-[var(--border-color)]/20 hover:border-[var(--accent-color)]/40 transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-md"
                variants={benefitVariants}
                whileHover="hover"
              >
                {/* Icon & Stat */}
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-[var(--primary-color)]/10 group-hover:bg-[var(--primary-color)]/20 transition-colors w-10 h-10 flex items-center justify-center">
                    <div className="text-[var(--primary-color)] group-hover:text-white transition-colors">
                      {benefit.icon}
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[var(--accent-color)] bg-[var(--accent-color)]/10 px-2 py-1 rounded">
                    {benefit.stat}
                  </span>
                </div>
                
                {/* Content */}
                <h3 className="text-sm md:text-base font-semibold text-[var(--text-color)] mb-2 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-xs md:text-sm text-[var(--text-color)]/80 leading-relaxed flex-1">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compact CTA Teaser */}
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-base md:text-lg mb-6 text-[var(--text-color)]/90 italic font-light max-w-xl mx-auto leading-relaxed"
            variants={sectionVariants}
          >
            Streamline your RFPs and win more bids. Let's get started.
          </motion.p>
          <motion.a
                        href="https://calendly.com/brian-arg-analytics/30min"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] text-white font-semibold rounded-xl shadow-lg hover:shadow-[0_10px_25px_var(--primary-color)]/50 focus:outline-none focus:ring-4 focus:ring-[var(--primary-color)]/50 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden"
                        variants={ctaVariants}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                         <FaCalendarAlt className="mr-2 text-white w-4 h-4 relative z-10" />
                         <span className="relative text-white z-10">Book a Free Consultation</span>
                      </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default RFP