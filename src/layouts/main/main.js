import React from 'react'
import Home from '../home/home'
import Service from '../services/Service'
import "../services/service.css"
import About from '../about-section/about'
import Process from '../our-process/process'
import Experience from '../experience/experience'
import Contact from '../../component/contact-home/contact'

function Main() {
  return (
    <div>
      <Home />
      <Service />
      <div className="background-black" ></div>
      <About />
      <div className="background-black-down" ></div>
      <Process />
      <Experience />
      <Contact />

    </div>
  )
}

export default Main