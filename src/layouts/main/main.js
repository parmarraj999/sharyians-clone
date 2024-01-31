import React from 'react'
import Home from '../home/home'
import Service from '../services/Service'
import "../services/service.css"
import About from '../about-section/about'

function Main() {
  return (
    <div>
        <Home/>
        <Service/>
        <div className="background-black" ></div>
        <About/>
    </div>
  )
}

export default Main