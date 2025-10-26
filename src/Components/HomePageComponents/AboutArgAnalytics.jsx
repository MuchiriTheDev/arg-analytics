import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom' // Assuming router for CTA navigation

const AboutArgAnalytics = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: 'easeOut'
      }
    }
  }

  const ctaVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.4,
        ease: 'easeOut'
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 25px rgba(0, 184, 184, 0.3)',
      transition: { duration: 0.3 }
    }
  }

  return (
    <section id="about-arg-analytics" className="relative py-20 md:py-32 bg-gradient-to-br from-[var(--bg-color)] via-[var(--secondary-color)] to-[var(--bg-color)] overflow-hidden">
      {/* Subtle futuristic overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary-color)_0%,transparent_70%)] opacity-10 -z-10"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Optional: Team/Workspace Photo Placeholder - Glassy overlay for futuristic feel */}
        <motion.div
          className="relative mb-12 overflow-hidden rounded-3xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div 
            className="w-full h-64 md:h-80 bg-gradient-to-br from-[var(--primary-color)]/20 via-transparent to-[var(--accent-color)]/20 flex items-center justify-center"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")', // Placeholder workspace/team photo
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Subtle overlay text */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center">
              <p className="text-white/90 font-bold text-sm md:text-base px-4 py-2 rounded-full bg-[var(--primary-color)]/80">
                Our Team in Action
              </p>
            </div>
          </div>
        </motion.div>

        {/* Vision Paragraph */}
        <motion.div
          className="mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-lg md:text-xl max-w-2xl mx-auto text-[var(--text-color)]/90 italic leading-relaxed font-light drop-shadow-md"
            variants={textVariants}
          >
            Arg Analytics builds intelligent systems that free people to focus on high-value work. We combine data, design, and automation to create lasting business infrastructure.
          </motion.p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover="hover"
        >
          <Link
            to="/about"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover)] text-white font-semibold rounded-2xl shadow-xl hover:shadow-[0_10px_30px_var(--primary-color)]/50 focus:outline-none focus:ring-4 focus:ring-[var(--primary-color)]/50 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="mr-2 text-white">Learn More About Us</span>
            <svg className="w-5 h-5" fill="white" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link> 
        </motion.div>
      </div>
    </section>
  )
}

export default AboutArgAnalytics