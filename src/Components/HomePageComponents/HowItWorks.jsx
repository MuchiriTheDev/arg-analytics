import React from 'react'
import { motion } from 'framer-motion'
import { FaSearch, FaTools, FaChartLine } from 'react-icons/fa'

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      number: 1,
      title: 'Discovery',
      description: 'We assess your operations and identify automation gaps—mapping workflows with precision to uncover hidden efficiencies.',
      icon: <FaSearch className="w-10 h-10" />,
      color: 'from-[var(--primary-color)] to-[var(--primary-hover)]'
    },
    {
      id: 2,
      number: 2,
      title: 'Build',
      description: 'We design and deploy AI agents or workflow automations—crafting intelligent systems that integrate seamlessly and scale effortlessly.',
      icon: <FaTools className="w-10 h-10" />,
      color: 'from-[var(--accent-color)] to-[var(--primary-color)]'
    },
    {
      id: 3,
      number: 3,
      title: 'Optimize',
      description: 'We monitor performance and scale as you grow—iterating with data-driven insights for continuous evolution and peak results.',
      icon: <FaChartLine className="w-10 h-10" />,
      color: 'from-[var(--primary-hover)] to-[var(--accent-color)]'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const stepVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25,
        duration: 0.8
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      boxShadow: '0 25px 50px rgba(0, 184, 184, 0.25)',
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  }

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.5, ease: 'easeInOut' },
        opacity: { duration: 0.5 }
      }
    }
  }

  return (
    <section id="how-it-works" className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-[var(--bg-color)] via-[var(--bg-color)] to-[var(--secondary-color)]">
      {/* Futuristic particle backdrop */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,_var(--primary-color)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,_var(--accent-color)_0%,transparent_50%),radial-gradient(circle_at_40%_40%,_var(--primary-color)_0%,transparent_50%)]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] bg-clip-text text-transparent drop-shadow-lg"
          >
            How It Works
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl max-w-2xl mx-auto text-[var(--text-color)]/80 leading-relaxed"
          >
            Three seamless, intelligent steps to future-proof your business with cutting-edge automation.
          </motion.p>
        </motion.div>

        {/* Steps Timeline */}
        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Desktop: Curved horizontal timeline */}
          <div className="hidden md:block">
            <div className="relative flex items-center justify-between">
              {/* Background curve line */}
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path
                  d="M0 50 Q25 30 50 50 T100 50"
                  stroke="url(#gradient-line)"
                  strokeWidth="2"
                  fill="none"
                  variants={lineVariants}
                />
                <defs>
                  <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--primary-color)" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="var(--accent-color)" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="var(--primary-hover)" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Steps */}
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="relative flex flex-col items-center flex-1 z-10"
                  variants={stepVariants}
                  whileHover="hover"
                >
                  {/* Step Connector Node */}
                  <motion.div
                    className="w-4 h-4 rounded-full mb-6 relative"
                    style={{ backgroundColor: 'var(--primary-color)' }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.3, type: 'spring', stiffness: 400 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-[var(--accent-color)] opacity-0"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  {/* Step Card */}
                  <motion.div
                    className="relative p-6 lg:p-8 bg-[var(--secondary-color)]/60 backdrop-blur-md rounded-3xl border border-[var(--border-color)]/20 hover:border-[var(--primary-color)]/40 transition-all duration-500 flex flex-col items-center text-center max-w-sm mx-auto shadow-2xl hover:shadow-[0_20px_60px_rgba(0,184,184,0.2)]"
                    whileHover={{ y: -10 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Step Number Orb */}
                    <motion.div
                      className={`w-16 h-16 mb-6 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-2xl ring-4 ring-[var(--primary-color)]/20 flex-shrink-0`}
                      style={{ background: `linear-gradient(135deg, ${step.color})` }}
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                    >
                      {step.number}
                    </motion.div>
                    
                    {/* Icon */}
                    <motion.div
                      className="w-20 h-20 mb-6 rounded-2xl bg-[var(--primary-color)]/10 group-hover:bg-[var(--primary-color)]/20 transition-all duration-300 flex items-center justify-center relative overflow-hidden"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="text-3xl text-[var(--primary-color)] z-10 relative">
                        {step.icon}
                      </div>
                      {/* Icon glow pulse */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[var(--primary-color)]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      />
                    </motion.div>
                    
                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <h3 className="text-base lg:text-lg font-bold text-[var(--text-color)] leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-sm lg:text-base text-[var(--text-color)]/80 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical timeline with straight lines */}
          <div className="md:hidden space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="relative flex flex-col items-center"
                variants={stepVariants}
                whileHover="hover"
              >
                {/* Vertical line above (except first) */}
                {index > 0 && (
                  <motion.div
                    className="w-0.5 h-12 bg-gradient-to-b from-[var(--primary-color)]/30 to-transparent absolute top-0 left-1/2 transform -translate-x-1/2"
                    variants={lineVariants}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  />
                )}

                {/* Step Card */}
                <motion.div
                  className="relative p-6 bg-[var(--secondary-color)]/60 backdrop-blur-md rounded-3xl border border-[var(--border-color)]/20 hover:border-[var(--primary-color)]/40 transition-all duration-500 flex flex-col items-center text-center max-w-md mx-auto shadow-2xl hover:shadow-[0_20px_60px_rgba(0,184,184,0.2)] z-10"
                  whileHover={{ y: -10 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Step Number Orb */}
                  <motion.div
                    className={`w-14 h-14 mb-4 rounded-full flex items-center justify-center text-white font-bold text-base shadow-2xl ring-4 ring-[var(--primary-color)]/20 flex-shrink-0`}
                    style={{ background: `linear-gradient(135deg, ${step.color})` }}
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                  >
                    {step.number}
                  </motion.div>
                  
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 mb-4 rounded-2xl bg-[var(--primary-color)]/10 group-hover:bg-[var(--primary-color)]/20 transition-all duration-300 flex items-center justify-center relative overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="text-2xl text-[var(--primary-color)] z-10 relative">
                      {step.icon}
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[var(--primary-color)]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    />
                  </motion.div>
                  
                  {/* Content */}
                  <div className="flex-1 space-y-2">
                    <h3 className="text-sm lg:text-base font-bold text-[var(--text-color)] leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs lg:text-sm text-[var(--text-color)]/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>

                {/* Vertical line below (except last) */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="w-0.5 h-12 bg-gradient-to-b from-transparent to-[var(--primary-color)]/30 absolute bottom-0 left-1/2 transform -translate-x-1/2"
                    variants={lineVariants}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.8, delay: (index + 1) * 0.2 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks