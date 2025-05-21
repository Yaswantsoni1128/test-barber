import React from 'react'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Services from './Services.jsx'
import Barbers from './Barbers.jsx'
import WhyChooseUs from './WhyChooseUs.jsx'
import Reviews from './Reviews.jsx'
import Gallery from './Gallery.jsx'
import Contact from './Contact.jsx'
import FAQ from './FAQ.jsx'
import Footer from './Footer.jsx'

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Barbers/>
      <Services/>
      <WhyChooseUs/>
      <Reviews/>
      <Gallery/>
      <Contact/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default LandingPage