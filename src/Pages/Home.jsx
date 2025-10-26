import React from 'react'
import Hero from '../Components/HomePageComponents/Hero'
import Navbar from '../Components/Navbar'
import WhatWeBuild from '../Components/HomePageComponents/WhatWeBuild'
import WhyChooseUs from '../Components/HomePageComponents/WhyChooseUs'
import Testimonials from '../Components/HomePageComponents/Testimonials'
import HowItWorks from '../Components/HomePageComponents/HowItWorks'
import AboutArgAnalytics from '../Components/HomePageComponents/AboutArgAnalytics'
import CallToAction from '../Components/HomePageComponents/CallToAction'

const Home = () => {
  return (
    <div className='min-w-full bg-red-300'>
        <Navbar />
        <Hero />
        <WhatWeBuild />
        <WhyChooseUs />
        <Testimonials />
        <HowItWorks />
        <AboutArgAnalytics />
        <CallToAction />
    </div>
  )
}

export default Home