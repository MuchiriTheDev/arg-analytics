import React, { useRef, useEffect, useState, Suspense, lazy } from 'react'
import { motion } from 'framer-motion'

// Lazy load react-globe.gl for client-side only rendering in Vite + React
const Globe = lazy(() => import('react-globe.gl').then((module) => ({ default: module.default })))
import * as THREE from 'three' // THREE can be imported normally

// Fake data points: Professional global tech hubs with size/color for analytics visualization
const fakeDataPoints = [
  { lat: 37.7749, lng: -122.4194, name: 'San Francisco', size: 0.5, color: '#00b8b8' }, // SF - AI Hub
  { lat: 40.7128, lng: -74.0060, name: 'New York', size: 0.4, color: '#00b8b8' }, // NYC - Finance Tech
  { lat: 51.5074, lng: -0.1278, name: 'London', size: 0.45, color: '#00b8b8' }, // London - Innovation Center
  { lat: 35.6762, lng: 139.6503, name: 'Tokyo', size: 0.5, color: '#00b8b8' }, // Tokyo - Robotics
  { lat: -33.8688, lng: 151.2093, name: 'Sydney', size: 0.3, color: '#00b8b8' }, // Sydney - APAC Ops
  { lat: 55.7558, lng: 37.6173, name: 'Moscow', size: 0.35, color: '#00b8b8' }, // Moscow - Data Centers
  { lat: 28.6139, lng: 77.2090, name: 'Delhi', size: 0.4, color: '#00b8b8' }, // Delhi - Emerging Markets
  { lat: -22.9068, lng: -43.1729, name: 'Rio', size: 0.3, color: '#00b8b8' }, // Rio - Sustainable Tech
]

// Fake arcs: Animated connections symbolizing global AI/automation networks
const fakeArcsData = [
  { startLat: 37.7749, startLng: -122.4194, endLat: 40.7128, endLng: -74.0060, color: '[[#00b8b8], #ffffff]' },
  { startLat: 40.7128, startLng: -74.0060, endLat: 51.5074, endLng: -0.1278, color: '[[#00b8b8], #ffffff]' },
  { startLat: 51.5074, startLng: -0.1278, endLat: 35.6762, endLng: 139.6503, color: '[[#00b8b8], #ffffff]' },
  { startLat: 35.6762, startLng: 139.6503, endLat: -33.8688, endLng: 151.2093, color: '[[#00b8b8], #ffffff]' },
]

const Hero = () => {
  const globeEl = useRef()
  const globeContainerRef = useRef()
  const [isGlobeReady, setIsGlobeReady] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [isLightMode, setIsLightMode] = useState(false)

  useEffect(() => {
    const updateDimensions = () => {
      if (globeContainerRef.current) {
        setDimensions({
          width: globeContainerRef.current.offsetWidth,
          height: globeContainerRef.current.offsetHeight
        })
      } else {
        setDimensions({ width: window.innerWidth, height: window.innerHeight })
      }
    }
    updateDimensions() // Initial set
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  useEffect(() => {
    // Detect light mode based on media query (matches CSS prefers-color-scheme)
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)')
    setIsLightMode(mediaQuery.matches)
    const handleChange = (e) => setIsLightMode(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    setMounted(true) // Ensure client-side mount
  }, [])

  useEffect(() => {
    if (mounted && globeEl.current && dimensions.width > 0 && dimensions.height > 0) {
      const controls = globeEl.current.controls()
      controls.autoRotate = true
      controls.autoRotateSpeed = 0.5
      // Set initial pointOfView for a zoomed-out, sky-like professional view
      globeEl.current.pointOfView({ lat: 20, lng: 0, altitude: 2.5 }, 0)
      setIsGlobeReady(true)
    }
  }, [mounted, dimensions])

  const handleGlobeReady = () => {
    if (globeEl.current) {
      const scene = globeEl.current.scene()
      // Optimized starry field for professional cosmic depth (only in dark mode)
      if (!isLightMode) {
        const starsGeometry = new THREE.BufferGeometry()
        const starsMaterial = new THREE.PointsMaterial({ 
          color: 0x88ccff, 
          size: 0.7,
          transparent: true,
          opacity: 0.6
        })
        const starsVertices = []
        for (let i = 0; i < 3000; i++) {
          const x = (Math.random() - 0.5) * 2000
          const y = (Math.random() - 0.5) * 2000
          const z = (Math.random() - 0.5) * 2000
          starsVertices.push(x, y, z)
        }
        starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3))
        const stars = new THREE.Points(starsGeometry, starsMaterial)
        scene.add(stars)
      }
    }
  }

  if (!mounted || dimensions.width === 0 || dimensions.height === 0) {
    return (
      <section className="relative w-full h-screen flex items-center justify-center bg-[var(--bg-color)]">
        <div className={`absolute inset-0 bg-gradient-to-br ${isLightMode ? 'from-sky-900 via-blue-700/70 to-cyan-200/50': 'from-slate-900 via-blue-900/70 to-teal-900/50'}`} />
        <motion.div 
          className="w-32 h-32 border-4 border-[var(--primary-color)]/30 border-t-[var(--primary-color)] rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </section>
    )
  }

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[var(--bg-color)]">
      {/* Professional Sky-like Background: Multi-layer gradient for immersive altitude effect - Day/Night adaptive */}
      <div className={`absolute inset-0 bg-gradient-to-br ${isLightMode ? 'from-sky-900 via-blue-700/70 to-cyan-200/50' : 'from-slate-900 via-blue-900/70 to-teal-900/50'}`} />
      <div className={`absolute inset-0 ${isLightMode ? 'bg-[radial-gradient(ellipse_at_top,_transparent_0%,#f0f9ff_70%)]' : 'bg-[radial-gradient(ellipse_at_top,_transparent_0%,var(--bg-color)_70%)]'}`} />
      
      {/* Lazy-Loaded Globe: Now sized to parent container ref for perfect fit, full viewport - Day texture in light mode */}
      <Suspense fallback={
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <motion.div 
            className="w-32 h-32 border-4 border-[var(--primary-color)]/30 border-t-[var(--primary-color)] rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
      }>
        <div 
          ref={globeContainerRef}
          className="absolute inset-0 z-0 w-screen h-screen" 
          style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }} 
        >
          <Globe
            ref={globeEl}
            globeImageUrl={isLightMode ? "https://unpkg.com/three-globe/example/img/earth-day.jpg" : "https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"} // Day texture for light mode
            bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
            atmosphereColor={isLightMode ? "#03fce8" : "#00b8b8"} // Sky blue atmosphere for day
            atmosphereAltitude={0.2}
            atmosphereBlur={2}
            showAtmosphere={true}
            showGlobe={true}
            globeGlowColor={isLightMode ? "#03fce8" : "#00b8b8"}
            globeGlowPower={isLightMode ? 1.5 : 3} // Softer glow in light mode
            backgroundColor="rgba(0,0,0,0)"
            width={dimensions.width}
            height={dimensions.height}
            pointsData={fakeDataPoints}
            pointAltitude="0.1"
            pointRadius="point.size"
            pointColor="point.color"
            pointResolution={8}
            pointLabel="point.name" // Tooltips for interactivity
            arcsData={fakeArcsData}
            arcColor="arc.color"
            arcDashLength={0.1}
            arcDashGap={0.05}
            arcDashAnimateTime={2000}
            arcStroke={0.3}
            rendererConfig={{
              alpha: true,
              antialias: true,
              preserveDrawingBuffer: false
            }}
            onGlobeReady={handleGlobeReady}
          />
        </div>
      </Suspense>
      
      {/* Subtle Floating Elements: Responsive positioning, adjusted for full width - Hide on mobile, softer in light mode */}
      <motion.div 
        className={`absolute top-1/4 left-[5%] w-12 h-12 bg-[var(--primary-color)]/15 backdrop-blur-md rounded-full border border-[var(--border-color)]/20 hidden md:block ${isLightMode ? 'opacity-50' : ''}`}
        animate={{ 
          y: [0, -15, 0], 
          rotate: [0, 360, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className={`absolute bottom-1/3 right-[5%] w-8 h-8 border-2 border-[var(--border-color)]/15 backdrop-blur-md rounded-lg hidden md:block ${isLightMode ? 'opacity-50' : ''}`}
        animate={{ 
          x: [0, 10, 0], 
          scale: [1, 1.1, 1],
          borderColor: ['#00b8b8', '#c5a052']
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      {/* Main Content: Glassmorphism panel, responsive padding/margins - Enhanced centering with flex wrapper - Adaptive card for light mode */}
      <div className="fixed top-0 left-0 z-10 flex items-center justify-center h-full w-full px-2 sm:px-4">
        <div className={`text-center rounded-3xl p-4 md:p-8 max-w-5xl mx-auto w-full ${isLightMode ? '' : ''}`}>
          {/* Headline: Enhanced responsive classes - Smaller on mobile */}
          <motion.h1 
            className="text-2xl my-6 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold  md:mb-6 text-[var(--primary-color)] drop-shadow-xl leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Smarter Systems, Stronger Business.
          </motion.h1>
          
          {/* Subheadline: Responsive text sizing - Tighter on mobile */}
          <motion.p 
            className="text-xs sm:text-sm md:text-lg mb-6 md:mb-10 text-[var(--text-color)] max-w-3xl mx-auto leading-relaxed drop-shadow-md px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            We build automations and AI agents that make work faster, cleaner, and more profitable connecting global teams with seamless, intelligent workflows.
          </motion.p>
          
          {/* CTA Buttons: Stack on small screens, responsive gap - Full-width on mobile, rounded for touch */}
          <motion.div 
            className="flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <button 
              className="text-xs md:text-sm px-4 py-3 xs:px-4 xs:py-3 bg-[var(--primary-color)] hover:bg-[var(--primary-hover)] text-white font-semibold rounded-lg shadow-xl hover:shadow-[0_10px_30px_var(--primary-color)] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[var(--primary-color)]/50 w-fit sm:w-auto"
              aria-label="Book a Strategy Call"
            >
              Book a Strategy Call
            </button>
            {/* <button 
              className="px-4 py-3 xs:px-6 xs:py-3 border-2 border-[var(--border-color)] hover:bg-[var(--secondary-color)] text-[var(--text-color)] font-semibold rounded-lg shadow-xl hover:shadow-[0_10px_30px_var(--primary-color)] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[var(--primary-color)]/50 w-full sm:w-auto"
              aria-label="See Our Work"
            >
              See Our Work
            </button> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero