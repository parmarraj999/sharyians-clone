import React from 'react'
import "./about.css"
import AboutCard from '../../component/about-card/about-card'

function About() {
  return (
    <div className='about-home-container' >
        <div className='about-home-width'>
          <div className='about-main-heading' >
            <h1>Who Are We ?</h1>
            <h2>How to Deliver Perfection</h2>
            <p>At Brand Vision, our primary goal is achieving outstanding results for our clients.   Our adaptive team offers a broad range of marketing services, custom-tailored to each client's unique needs. By continuously updating our strategies with the latest marketing trends, we ensure effective engagement with various customer groups. Our dedicated approach often surpasses client expectations, fostering a tradition of success and satisfaction. </p>
          </div>
          <AboutCard 
          heading="Our Commitment to Client Satisfaction at Web Deity" 
          paragraph="At Web Deity, we ensure our clients are never disappointed with their projects. With more than 250 5-star reviews, client satisfaction is our top priority. We assign a dedicated account manager to each client for clear communication, aiming to always deliver great results." />
        </div>
    </div> b
  )
}

export default About