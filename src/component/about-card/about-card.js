import React from 'react'
import "./about-card.css"

function AboutCard({heading, paragraph}) {
  return (
    <div className='about-card-container df' >
        <div className='box-1 box' >
           <h1>{heading}</h1>
           <p>{paragraph}</p>
        </div>
        <div className='box-2 box' >
           <div className='color-card' >
           </div>
           <div className='card-bg-circle' ></div>
        </div>
    </div>
  )
}

export default AboutCard