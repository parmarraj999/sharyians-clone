import React, { useState } from 'react'
import "./about-card.css"

function AboutCard({heading, paragraph ,reverseProp, color_one, color_two}) {

  // const [reverse,setReverse] = useState(reverseProp)

  return (
    <div>
      {
        reverseProp===false ?
        <div className='about-card-container df' >
        <div className='box-2 box' >
           <div className='color-card' style={{background: `radial-gradient(${color_one},${color_two})`,boxShadow:`0px 0px 150px ${color_one}`}} >
           </div>
           <div className='card-bg-circle' ></div>
        </div>
        <div className='box-1 box' >
           <h1>{heading}</h1>
           <p>{paragraph}</p>
        </div>
    </div>
         :
    <div className='about-card-container dfrc' >
        <div className='box-1 box' >
           <h1>{heading}</h1>
           <p>{paragraph}</p>
        </div>
        <div className='box-2 box' >
           <div className='color-card' style={{background: `radial-gradient(${color_one},${color_two})`,boxShadow:`0px 0px 150px ${color_one}`}}>
           </div>
           <div className='card-bg-circle' ></div>
        </div>
    </div>
      }
    </div>
  )
}

export default AboutCard