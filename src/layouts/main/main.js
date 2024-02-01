import React from 'react'
import Home from '../home/home'
import Service from '../services/Service'
import "../services/service.css"
import About from '../about-section/about'
import Process from '../our-process/process'
import Experience from '../experience/experience'

function Main() {
  return (
    <div>
        <Home/>
        <Service/>
        <div className="background-black" ></div>
        <About/>
        <div className="background-black-down" ></div>
        <Process/>
        <Experience/>
    </div>
  )
}

export default Main