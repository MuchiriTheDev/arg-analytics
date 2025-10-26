import React from 'react'
import { motion } from 'framer-motion'
import { FaDollarSign, FaBox, FaChartLine, FaCreditCard, FaFileAlt, FaSearch, FaCogs } from 'react-icons/fa'

const WhatWeBuild = () => {
  const cards = [
    {
      id: 'ecommerce',
      title: 'Ecommerce Revenue Engine',
      description: 'AI-driven optimization for sales funnels, dynamic pricing, and customer retention—boost conversions by 30%+.',
      icon: <FaDollarSign className="w-8 h-8" />,
      link: '/services#ecommerce'
    },
    {
      id: 'inventory',
      title: 'Multi-Channel Inventory & Booking',
      description: 'Seamless sync across platforms with real-time alerts and predictive restocking—eliminate stockouts and overages.',
      icon: <FaBox className="w-8 h-8" />,
      link: '/services#inventory'
    },
     {
      id: 'internal-audit',
      title: 'Internal Audit AI Agent',
      description: 'Proactive risk assessment, policy enforcement, and reporting—enhance governance with continuous, AI-powered oversight.',
      icon: <FaSearch className="w-8 h-8" />,
      link: '/services#internal-audit'
    },
    {
      id: 'receivable',
      title: 'Accounts Receivable AI Agent',
      description: 'Intelligent invoicing, payment reminders, and collections—improve cash flow recovery by 40% through personalized outreach.',
      icon: <FaCreditCard className="w-8 h-8" />,
      link: '/services#receivable'
    },
    {
      id: 'rfp',
      title: 'RFP AI Agent',
      description: 'Streamlined proposal creation, response matching, and submission tracking—win more bids with tailored, error-free RFPs.',
      icon: <FaFileAlt className="w-8 h-8" />,
      link: '/services#rfp'
    },
   
    {
      id: 'custom',
      title: 'Custom Automations & AI Agents',
      description: 'Tailored solutions for your unique workflows— from bespoke integrations to scalable AI copilots.',
      icon: <FaCogs className="w-8 h-8" />,
      link: '/services#custom'
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

  const cardVariants = {
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
    <section id="what-we-build" className="relative py-20 md:py-32 bg-[var(--bg-color)] overflow-hidden">
      {/* Subtle background accents for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/3 via-transparent to-[var(--accent-color)]/3 -z-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title & Subtitle */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-[var(--primary-color)] drop-shadow-lg"
            variants={containerVariants}
          >
            What We Offer
          </motion.h2>
          <motion.p 
            className="text-base md:text-lg max-w-3xl mx-auto text-[var(--text-color)] leading-relaxed drop-shadow-md"
            variants={containerVariants}
          >
            From cash flow to compliance, our AI agents and automations power growth.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="group relative"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Card */}
              <motion.a
                href={card.link}
                className="block p-6 md:p-8 bg-[var(--secondary-color)]/50 backdrop-blur-sm rounded-2xl border border-[var(--border-color)]/20 hover:border-[var(--primary-color)]/30 transition-all duration-300 text-left h-full flex flex-col justify-between shadow-lg hover:shadow-[0_15px_35px_rgba(0,184,184,0.1)]"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-xl bg-[var(--primary-color)]/10 group-hover:bg-[var(--primary-color)]/20 transition-colors">
                  {card.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-base text-center md:text-lg font-semibold text-[var(--text-color)] mb-3 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-xs text-center md:text-sm text-[var(--text-color)]/80 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Arrow indicator */}
                <motion.div 
                  className="flex items-center justify-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg className="w-4 h-4 text-[var(--primary-color)] mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <span className="text-xs font-medium text-[var(--primary-color)]">Learn More</span>
                </motion.div>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhatWeBuild