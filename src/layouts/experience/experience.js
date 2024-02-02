import React from 'react'
import './experience.css'
import Header from '../../component/header/header'
import Button from '../../component/button/Button'

function Experience() {
  return (
    <div className='experience-home-container' >
      <div className='experience-width-container'>
        <Header first_word="O" first_letter="ur" second_word="E" second_letter="xperience" />
        <p>By driving digital potential at every step of business lifecycle, we mean creating powerful user-centered design solutions and branding for complex systems, apps, and websites. We utilize clients’ business knowledge and our industry expertise to tackle any design challenge.</p>
        <div className='project-block-container' >
          <div className="block-1 block" >
            <h2>01</h2>
            <img src='../../image/img-exp-1.jpg' />
          </div>
          <div className='block-container'>
            <div className='block-flex'>
              <div className='block'>
                <h2>02</h2>
                <img src='../../image/img-exp-2.jpg' />
              </div>
              <div className='block'>
                <h2>03</h2>
                <img src='../../image/img-exp-3.jpg' />
              </div>
            </div>
            <div className='block-flex'>
              <div className='block'>
                <h2>04</h2>
                <img src='../../image/img-exp-4.jpg' />
              </div>
              <div className='block'>
                <h2>05</h2>
                <img src='../../image/img-exp-5.jpg' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience