import React from 'react'
import { Helmet } from 'react-helmet'
import HeroServices from '../Components/ServicesPageComponents/HeroServices'
import Navbar from '../Components/Navbar'
import AIAgentChoice from '../Components/ServicesPageComponents/AIAgentChoice'
import WhyBusinessesChooseUs from '../Components/ServicesPageComponents/WhyBusinessesChooseUs'

const Services = () => {
  return (
    <div>
      <Helmet>
        <title>Our Services — Business Process Automation & AI Agents | Arg Analytics</title>
        <meta name='description' content='Arg Analytics designs and deploys AI Agents and automated workflows for finance, audit, sales, ecommerce, inventory, and compliance. Explore Accounts Receivable, RFP, Internal Audit, Ecommerce Revenue, Multi-Channel Inventory, and Custom Python Automations.' />
        <meta name='keywords' content='automation services, AI agents, Accounts Receivable automation, AR automation software, RFP automation, proposal automation, internal audit AI, compliance monitoring, ecommerce automation, Shopify automation, inventory automation, booking automation, custom Python automation, AI workflow developer, Make.com automation' />
      </Helmet>
      <Navbar />
      <HeroServices/>
      <AIAgentChoice />
      <WhyBusinessesChooseUs />
    </div>
  )
}

export default Services