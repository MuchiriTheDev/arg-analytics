import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaRss, FaDollarSign, FaShieldAlt, FaShoppingCart, FaBox, FaCogs } from 'react-icons/fa'

// Import the AI Agent components
import AccountsReceivable from './AiAgentsComponents/AccountsReceivable'
import RFP from './AiAgentsComponents/RFP'
import InternalAuditAiAgent from './AiAgentsComponents/InternalAuditAiAgent'
import EcommerceRevenueEngine from './AiAgentsComponents/EccomerceRevenueEngine'
import MultiChannelInventoryBooking from './AiAgentsComponents/MultiChannelInventoryBooking'
import CustomAutomations from './AiAgentsComponents/CustomAutomations'

const AIAgentChoice = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [selectedAgent, setSelectedAgent] = useState('accounts-receivable') // Default

  const agents = [
    {
      id: 'accounts-receivable',
      title: 'Accounts Receivable AI Agent',
      icon: <FaRss className="w-5 h-5" />,
      component: <AccountsReceivable />
    },
    {
      id: 'rfp',
      title: 'RFP AI Agent',
      icon: <FaDollarSign className="w-5 h-5" />,
      component: <RFP />
    },
    {
      id: 'internal-audit',
      title: 'Internal Audit AI Agent',
      icon: <FaShieldAlt className="w-5 h-5" />,
      component: <InternalAuditAiAgent />
    },
    {
      id: 'ecommerce',
      title: 'Ecommerce Revenue Engine',
      icon: <FaShoppingCart className="w-5 h-5" />,
      component: <EcommerceRevenueEngine />
    },
    {
      id: 'inventory',
      title: 'Multi-Channel Inventory & Booking',
      icon: <FaBox className="w-5 h-5" />,
      component: <MultiChannelInventoryBooking />
    },
    {
      id: 'custom',
      title: 'Custom Automations & AI Agents',
      icon: <FaCogs className="w-5 h-5" />,
      component: <CustomAutomations />
    }
  ]

  // Parse query param ?agent=agentId to set selected agent
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const agentId = params.get('agent')
    const validAgent = agents.find(agent => agent.id === agentId)
    if (validAgent) {
      setSelectedAgent(validAgent.id)
    } else {
      // Default if no valid agent param
      setSelectedAgent('accounts-receivable')
    }
  }, [location.search])

  const handleTabClick = (agent) => {
    setSelectedAgent(agent.id)
    // Update URL with ?agent=agentId (simple query param)
    navigate(`?agent=${agent.id}`)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  const tabVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, staggerChildren: 0.05 }
    }
  }

  const tabButtonVariants = {
    hidden: { scale: 0.95 },
    visible: {
      scale: 1,
      transition: { type: 'spring', stiffness: 300 }
    },
    hover: {
      scale: 1.05,
      y: -2,
      boxShadow: '0 8px 20px rgba(0, 184, 184, 0.3)',
      transition: { duration: 0.2 }
    }
  }

  const contentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: 'easeOut' }
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.3 }
    }
  }

  // Find current agent
  const currentAgent = agents.find(agent => agent.id === selectedAgent)

  return (
    <div className="min-h-screen bg-[var(--bg-color)] py-12 md:py-16">
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header with current agent title */}
        <motion.h1
          className="text-2xl md:text-3xl font-bold text-center mb-4 text-[var(--primary-color)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {currentAgent?.title || 'AI Agents'}
        </motion.h1>

        {/* Tab Selector - Horizontal scrollable on mobile */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-2 overflow-x-auto -mx-2 md:-mx-0"
          variants={tabVariants}
        >
          {agents.map((agent) => (
            <motion.button
              key={agent.id}
              className={`group relative px-4 py-2 md:px-6 md:py-3 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 flex items-center space-x-2 flex-shrink-0 mx-2 ${
                selectedAgent === agent.id
                  ? 'bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-hover)] text-white shadow-lg ring-2 ring-[var(--primary-color)]/30'
                  : 'bg-[var(--secondary-color)]/50 text-[var(--text-color)]/70 border border-[var(--border-color)]/30 hover:border-[var(--primary-color)]/50 hover:text-[var(--primary-color)]'
              }`}
              onClick={() => handleTabClick(agent)}
              variants={tabButtonVariants}
              whileHover="hover"
            >
              <span className="relative z-10">{agent.icon}</span>
              <span className="relative z-10 whitespace-nowrap">{agent.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedAgent}
            className="w-full"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {currentAgent?.component || <div className="text-center text-[var(--text-color)]/50 py-8">Select an AI Agent to view details.</div>}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default AIAgentChoice