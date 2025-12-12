import React from 'react'
import { Helmet } from 'react-helmet'
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
      <Helmet>
        <title>Arg Analytics — Business Process Automation & AI Solutions</title>
        <meta name='description' content='Arg Analytics is a leading automation and AI solutions company dedicated to helping businesses eliminate repetitive work, reduce operational errors, improve cash flow visibility, and scale without adding headcount.' />
        <meta name='keywords' content='business process automation, AI solutions, automation company, finance automation, audit automation, sales automation, ecommerce automation, inventory automation, compliance automation, custom python automations, Arg Analytics, business processes, automated systems, ROI' />
      </Helmet>
        <Navbar />
        <Hero />
        <WhatWeBuild />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        {/* <AboutArgAnalytics /> */}
        <CallToAction />
    </div>
  )
}

export default Home