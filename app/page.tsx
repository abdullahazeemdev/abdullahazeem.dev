import React from 'react'

import Hero from './components/Hero'
import Navbar from './components/navbar'
import AboutPage from './components/about'
import Projects from './components/projects'



const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutPage/>
      <Projects/>
    </div>
  )
}

export default page