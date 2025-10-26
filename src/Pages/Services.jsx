import React from 'react'
import HeroServices from '../Components/ServicesPageComponents/HeroServices'
import Navbar from '../Components/Navbar'
import AIAgentChoice from '../Components/ServicesPageComponents/AIAgentChoice'
import WhyBusinessesChooseUs from '../Components/ServicesPageComponents/WhyBusinessesChooseUs'

const Services = () => {
  return (
    <div>
      <Navbar />
      <HeroServices/>
      <AIAgentChoice />
      <WhyBusinessesChooseUs />
    </div>
  )
}

export default Services