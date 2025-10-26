import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    quote: "Arg Analytics transformed our reporting pipeline—now we save 20 hours weekly on audits alone. Their AI agents are game-changers.",
    author: "John M",
    company: "JM Consulting"
  },
  {
    id: 2,
    quote: "Seamless inventory sync across our branches. No more manual reconciliations—efficiency up 35%, thanks to their custom automations.",
    author: "Moses M",
    company: "Standard Bank"
  },
  {
    id: 3,
    quote: "From RFP responses to compliance checks, their agents handle it all with precision. We've doubled our bid win rate in months.",
    author: "Bernard M",
    company: "BN Hardware & Construction"
  }
]

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
      duration: 0.5,
    },
  },
}

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } },
  active: { 
    scale: 1.3, 
    backgroundColor: 'var(--primary-color)', 
    transition: { duration: 0.2 } 
  },
}

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 200, damping: 15 },
  },
  hover: {
    scale: 1.2,
    boxShadow: '0 0 8px rgba(0, 184, 184, 0.5)',
    transition: { duration: 0.2 },
  },
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Handle navigation button clicks
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  // Handle dot click for manual navigation
  const handleDotClick = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section id="testimonials"className="relative py-20 md:py-32 bg-[var(--secondary-color)] overflow-hidden">
      <motion.div
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Main Headline */}
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 leading-tight"
          style={{ color: 'var(--primary-color)' }}
          variants={itemVariants}
        >
          Real Clients. Real Results.
        </motion.h2>

        {/* Subheading */}
        <motion.div
          className="flex items-center justify-center text-sm sm:text-base font-bold mb-6"
          style={{ color: 'var(--text-color)' }}
          variants={itemVariants}
        >
          <p>In business since 2020 — trusted by founders, coaches, consultants & speakers across the U.S.</p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative mt-4 flex items-center justify-center">
          {/* Previous Button */}
          <motion.button
            className="absolute left-0 sm:left-2 md:-left-10 p-2 rounded-full border border-[var(--border-color)] bg-[var(--secondary-color)]"
            style={{ color: 'var(--primary-color)' }}
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-lg" />
          </motion.button>

          {/* Testimonial Block */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="bg-[var(--secondary-color)]/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-md border border-[var(--border-color)]/30 max-w-lg mx-8 sm:mx-12"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
            >
              <p
                className="text-sm sm:text-base leading-relaxed italic"
                style={{ color: 'var(--text-color)' }}
              >
                "{testimonials[currentIndex].quote}"
              </p>
              <p
                className="text-sm sm:text-base font-semibold mt-4"
                style={{ color: 'var(--primary-color)' }}
              >
                — {testimonials[currentIndex].author}, {testimonials[currentIndex].company}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Next Button */}
          <motion.button
            className="absolute right-0 sm:right-2 md:-right-10 p-2 rounded-full border border-[var(--border-color)] bg-[var(--secondary-color)]"
            style={{ color: 'var(--primary-color)' }}
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-lg" />
          </motion.button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: index === currentIndex ? 'var(--primary-color)' : 'var(--border-color)' }}
              variants={dotVariants}
              initial="hidden"
              animate={index === currentIndex ? 'active' : 'visible'}
              onClick={() => handleDotClick(index)}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Testimonials