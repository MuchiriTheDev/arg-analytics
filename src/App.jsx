import React from 'react'
import { Helmet } from 'react-helmet'
import { assets } from './assets/assets'
import Home from './Pages/Home'
import Hero from './Components/HomePageComponents/Hero'
import { Route, Routes } from 'react-router-dom'
import Services from './Pages/Services'

const App = () => {
  return (
    <div className='w-full bg-blue-500'>
      <Helmet>
        <title>Arg Analytics — Business Process Automation & AI Solutions</title>
        <meta name='description' content='Arg Analytics is a leading automation and AI solutions company dedicated to helping businesses eliminate repetitive work, reduce operational errors, improve cash flow visibility, and scale without adding headcount. We build intelligent, end-to-end automations that streamline finance, audit, sales, ecommerce, inventory, and compliance functions.' />
        <meta name='keywords' content='business process automation, AI solutions, automation company, finance automation, audit automation, sales automation, ecommerce automation, inventory automation, compliance automation, custom python automations' />
        <meta property="og:url" content="https://www.arg-analytics.com" />
        <meta property="og:image" content={assets.logo1} />
      </Helmet>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </div>
  )
}

export default App