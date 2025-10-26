import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaEnvelope, FaLinkedin, FaPaperPlane } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa6'

const CallToAction = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('') // 'success' or 'error'

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    // Simulate form submission (replace with your API endpoint, e.g., EmailJS or backend)
    try {
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
      await new Promise(resolve => setTimeout(resolve, 1500)) // Mock delay
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

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

  const ctaVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 15px 35px rgba(0, 184, 184, 0.4)',
      transition: { duration: 0.3 }
    }
  }

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.3 }
    }
  }

  return (
    <section id="call-to-action" className="relative py-20 md:py-32 bg-gradient-to-br from-[var(--primary-color)]/10 via-[var(--secondary-color)] to-[var(--bg-color)] overflow-hidden">
      {/* Futuristic wave overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--accent-color)_0%,transparent_70%)] opacity-20 -z-10"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline & Subline */}
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] bg-clip-text text-transparent drop-shadow-lg"
            variants={ctaVariants}
          >
            Ready to Automate?
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl max-w-2xl mx-auto text-[var(--text-color)]/90 leading-relaxed"
            variants={ctaVariants}
          >
            Let's discuss how our systems can transform your business.
          </motion.p>
        </motion.div>

        {/* Primary CTA Button */}
        <motion.div
          className="text-center mb-12"
          variants={ctaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover="hover"
        >
          <a
            href="https://calendly.com/your-link/strategy-call" // Replace with your Calendly/booking link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover)] text-white font-semibold rounded-2xl shadow-xl hover:shadow-[0_15px_35px_var(--primary-color)]/50 focus:outline-none focus:ring-4 focus:ring-[var(--primary-color)]/50 transition-all duration-300 transform active:scale-[0.98]"
          >
            <FaCalendarAlt className="mr-2 text-white w-5 h-5" />
            <p className="text-white">Book a Free Strategy Call</p>
          </a>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto space-y-4"
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)]/30 bg-[var(--secondary-color)]/50 backdrop-blur-sm text-[var(--text-color)] placeholder-[var(--text-color)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]/50 transition-all"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)]/30 bg-[var(--secondary-color)]/50 backdrop-blur-sm text-[var(--text-color)] placeholder-[var(--text-color)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]/50 transition-all"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Tell us about your automation needs..."
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              required
              className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)]/30 bg-[var(--secondary-color)]/50 backdrop-blur-sm text-[var(--text-color)] placeholder-[var(--text-color)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]/50 transition-all resize-none"
              disabled={isSubmitting}
            />
          </div>
          <motion.button
            type="submit"
            className="w-full flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover)] text-white font-semibold rounded-xl shadow-lg hover:shadow-[0_10px_25px_var(--primary-color)]/50 focus:outline-none focus:ring-4 focus:ring-[var(--primary-color)]/50 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <FaPaperPlane className="mr-2 w-4 h-4 animate-pulse" />
                Sending...
              </>
            ) : (
              <>
                <FaPaperPlane className="mr-2 w-4 h-4" />
                Send Message
              </>
            )}
          </motion.button>

          {/* Submit Status */}
          {submitStatus && (
            <motion.p
              className={`text-center text-sm font-medium ${submitStatus === 'success' ? 'text-[var(--primary-color)]' : 'text-red-400'}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {submitStatus === 'success' ? 'Message sent! We\'ll be in touch soon.' : 'Something went wrong. Please try again.'}
            </motion.p>
          )}
        </motion.form>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-6 mt-12 pt-8 border-t border-[var(--border-color)]/20"
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="mailto:hello@arganalytics.com" // Replace with your email
            className="group p-3 rounded-xl bg-[var(--secondary-color)]/50 backdrop-blur-sm border border-[var(--border-color)]/20 hover:border-[var(--primary-color)]/30 transition-all hover:text-[var(--primary-color)]"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/company/arg-analytics" // Replace with your LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-xl bg-[var(--secondary-color)]/50 backdrop-blur-sm border border-[var(--border-color)]/20 hover:border-[var(--primary-color)]/30 transition-all hover:text-[var(--primary-color)]"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedinIn className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction