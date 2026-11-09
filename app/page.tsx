import React from 'react'

import Hero from './components/Hero'
import Navbar from './components/navbar'
import AboutPage from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'



const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutPage/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default page