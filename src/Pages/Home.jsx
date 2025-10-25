import React from 'react'
import Hero from '../Components/HomePageComponents/Hero'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <div className='min-w-full bg-red-300'>
        <Navbar />
        <Hero />
    </div>
  )
}

export default Home