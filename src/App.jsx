import React from 'react'
import Home from './Pages/Home'
import Hero from './Components/HomePageComponents/Hero'
import { Route, Routes } from 'react-router-dom'
import Services from './Pages/Services'

const App = () => {
  return (
    <div className='w-full bg-blue-500'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </div>
  )
}

export default App