import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useViewportScroll, useTransform } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll' // For smooth scrolling on same page
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom' // For page navigation
import { FaChevronDown, FaBars, FaTimes, FaCalendarAlt } from 'react-icons/fa' // React Icons for chevrons and icons
import { assets } from '../assets/assets'

// Assume assets imported; replace with your logo path
// import { assets } from '../assets/assets' // Adjust path as needed

const Navbar = () => {
  const [isHomeOpen, setIsHomeOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { scrollY } = useViewportScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation() // Get current page path
  const isHomePage = location.pathname === '/' // Check if on homepage
  const navigate = useNavigate()

  const navItems = [
    {
      id: 'home',
      label: 'Home',
      dropdown: [
        { label: 'About', to: 'about', page: '/' },
        { label: 'Features', to: 'features', page: '/' },
        { label: 'Contact', to: 'contact', page: '/' }
      ]
    },
    {
      id: 'services',
      label: 'Services',
      dropdown: [
        { label: 'AI Automation', to: 'ai-automation', page: '/services' },
        { label: 'Analytics', to: 'analytics', page: '/services' },
        { label: 'Consulting', to: 'consulting', page: '/services' }
      ]
    }
  ]

  // Track scroll position for homepage only (stolen from provided Navbar)
  useEffect(() => {
    if (isHomePage) {
      const unsubscribe = scrollY.onChange((y) => {
        setIsScrolled(y > 100)
      })
      return () => unsubscribe()
    } else {
      setIsScrolled(false) // No scroll effect on other pages
    }
  }, [scrollY, isHomePage])

  // Conditional background and text color based on page and scroll (stolen/adapted)
 // Adaptive background: Fades from transparent to theme's --bg-color on home scroll; solid --bg-color elsewhere
const backgroundColor = isHomePage
  ? useTransform(scrollY, [0, 300], ['transparent', 'var(--bg-color)'])
  : 'var(--bg-color)';
  const textColor = isHomePage
    ? useTransform(scrollY, [0, 100], ['#FFFFFF', 'var(--text-color)'])
    : 'var(--text-color)'

  const toggleDropdown = (id) => {
    if (id === 'home') setIsHomeOpen(!isHomeOpen)
    if (id === 'services') setIsServicesOpen(!isServicesOpen)
  }

  const closeDropdowns = () => {
    setIsHomeOpen(false)
    setIsServicesOpen(false)
    setIsMobileOpen(false)
  }

  const handleNavClick = (subItem, onClose) => {
    if (subItem.page === window.location.pathname) {
      // Same page scroll
      const element = document.getElementById(subItem.to)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      // Navigate to page and scroll
      navigate(subItem.page)
      setTimeout(() => {
        const element = document.getElementById(subItem.to)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
    onClose()
  }

  const DropdownItem = ({ subItem, onClick }) => (
    <div
      className="block px-4 py-3 text-sm font-medium text-[var(--text-color)] hover:text-[var(--primary-color)] hover:bg-[var(--primary-color)]/10 transition-all duration-200 cursor-pointer"
      onClick={() => handleNavClick(subItem, onClick)}
    >
      {subItem.label}
    </div>
  )

  const NavItemDesktop = ({ item }) => (
    <div className="relative group" onMouseLeave={() => closeDropdowns()}>
      <button
        onClick={() => toggleDropdown(item.id)}
        className="flex items-center space-x-1 px-3 py-2 text-[var(--text-color)] font-medium rounded-md hover:text-[var(--primary-color)] hover:bg-[var(--primary-color)]/10 transition-all duration-200"
        style={{ color: textColor }}
      >
        <span>{item.label}</span>
        <motion.span
          className="w-4 h-4 ml-1"
          animate={{ rotate: (item.id === 'home' ? isHomeOpen : isServicesOpen) ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <FaChevronDown />
        </motion.span>
      </button>

      <AnimatePresence>
        {((item.id === 'home' && isHomeOpen) || (item.id === 'services' && isServicesOpen)) && (
          <motion.ul
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-[var(--secondary-color)]/95 backdrop-blur-xl rounded-xl shadow-2xl border border-[var(--border-color)]/20 py-1 min-w-max"
          >
            {item.dropdown.map((subItem) => (
              <li key={subItem.to}>
                <DropdownItem subItem={subItem} onClick={closeDropdowns} />
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )

  // Animation variants (stolen/adapted from provided Navbar)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  }

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 180,
        damping: 15,
        duration: 0.4,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 180,
        damping: 15,
        duration: 0.4,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  }

  const underlineVariants = {
    hidden: { scaleX: 0 },
    hover: {
      scaleX: 1,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.4,
      },
    },
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-shadow duration-300 ${
        isScrolled && isHomePage ? 'shadow-md' : ''
      }`}
      style={{ backgroundColor }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Logo (stolen from provided Navbar) */}
        <RouterLink
          to="/"
          className="flex-shrink-0"
          variants={linkVariants}
          whileHover={{ scale: 1.05 }}
          onClick={closeDropdowns}
        >
          <img
            src={assets.logo1}
            alt="Your Logo"
            className=" px-5 h-20 w-auto" // Adjust size as needed
          />
          
        </RouterLink>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <NavItemDesktop key={item.id} item={item} />
          ))}
          {/* Book a Call Button - Desktop (stolen/adapted) */}
            <div className="hidden md:flex items-center">
            <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="ml-4 px-4 py-2 bg-[var(--primary-color)] flex justify-center items-center hover:bg-[var(--primary-hover)] text-white font-semibold rounded-xl shadow-lg hover:shadow-[0_4px_12px_var(--primary-color)] transition-all duration-200 text-sm sm:text-base"
                variants={buttonVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                onClick={closeDropdowns}
            >
                <FaCalendarAlt className="mr-2 text-sm text-white" aria-hidden="true" />
                <p className="text-white text-sm">Book Call</p>
            </ScrollLink>
            </div>
        </div>

        

        {/* Mobile Menu Toggle (stolen) */}
        <motion.button
          className="md:hidden text-[var(--text-color)] hover:text-[var(--primary-color)] p-2 rounded-md hover:bg-[var(--primary-color)]/10 transition-colors"
          style={{ color: textColor }}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          variants={linkVariants}
          whileHover={{ scale: 1.1 }}
        >
          {isMobileOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>

      {/* Mobile Menu (stolen/adapted as slide-in sidebar) */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="md:hidden fixed top-0 right-0 w-3/4 max-w-xs h-full flex flex-col justify-between p-6 bg-[var(--secondary-color)]/95 backdrop-blur-xl shadow-lg"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Close Button */}
            <div className="flex justify-end mb-5">
              <motion.button
                className="text-[var(--text-color)] hover:text-[var(--primary-color)] p-2 rounded-md hover:bg-[var(--primary-color)]/10 transition-colors"
                onClick={closeDropdowns}
                aria-label="Close menu"
                variants={linkVariants}
                whileHover={{ scale: 1.1 }}
              >
                <FaTimes />
              </motion.button>
            </div>

            {/* Mobile Nav Items */}
            <div className="space-y-2 mb-4 flex-1">
              {navItems.map((item) => (
                <div key={item.id} className="relative mb-4">
                  <button
                    onClick={() => toggleDropdown(item.id)}
                    className="w-full flex justify-between items-center px-4 py-3 text-[var(--text-color)] font-medium rounded-lg hover:text-[var(--primary-color)] hover:bg-[var(--primary-color)]/10 transition-all"
                  >
                    <span>{item.label}</span>
                    <motion.span
                      className="w-5 h-5"
                      animate={{ rotate: (item.id === 'home' ? isHomeOpen : isServicesOpen) ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaChevronDown />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {((item.id === 'home' && isHomeOpen) || (item.id === 'services' && isServicesOpen)) && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden bg-[var(--secondary-color)]/50 rounded-lg mt-1 ml-4"
                      >
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.to}>
                            <DropdownItem subItem={subItem} onClick={closeDropdowns} />
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ))}   {/* Mobile Book a Call Button */}
           
            </div>
             <div className="pt-2 border-t border-[var(--border-color)]/20">
                <ScrollLink
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="block w-full text-center flex justify-center items-center px-6 py-3 bg-[var(--primary-color)] hover:bg-[var(--primary-hover)] text-white font-semibold rounded-xl shadow-lg hover:shadow-[0_4px_12px_var(--primary-color)] transition-all duration-200"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                    onClick={closeDropdowns}
                >
                    <FaCalendarAlt className="mr-2 inline" aria-hidden="true" />
                    <p className='text-white'>Book a Call</p>
                </ScrollLink>
            </div>
         
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar