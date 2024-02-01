import React from 'react'
import Header from '../../component/header/header'
import "./service.css"

function Service() {
  return (
    <div className='service_container'>
      <div className='service_container_width' >

        <Header first_word="O" first_letter="ur" second_word="S" second_letter="ervices" />
        <div className='card_container' >
          <div className='card_row' >
            <div className='service_card' >
              <h4>Branding</h4>
              <img src='../../image/img-1.png' />
            </div>
            <div className='service_card' >
              <h4>graphics design</h4>
              <img src='../../image/img-2.png' />
            </div>
          </div>
          <div className='card_row' >
            <div className='service_card' >
              <h4>websites</h4>
              <img src='../../image/img-5.png' />
            </div>
            <div className='service_card' >
              <h4>responsive design</h4>
              <img src='../../image/img-6.png' />
            </div>
          </div>
          <div className='card_row' >
            <div className='service_card' >
              <h4>marketing</h4>
              <img src='../../image/img-3.png' />
            </div>
            <div className='service_card' >
              <h4>digital wedding cards</h4>
              <img src='../../image/img-4.png' />
            </div>
          </div>
        </div>
        <h6>We Can Also Help With,</h6>
        <div className='more_service_container' >
          <div className='service_card_v2' >
            <h2>SEO</h2>
            <p>In today's digital age, getting your website seen is more important than ever. That's where search engine optimization (SEO) comes in. SEO is the process of optimizing your website to rank higher in search engine results pages (SERPs)</p>
            <button>Learn More</button>
          </div>
          <div className='service_card_v2' style={{ background: "#c0dcc8" }} >
            <h2>Customer Support</h2>
            <p>We believe great products deserve great support. That's why our friendly customer care team is always just a click or call away, ready to listen and help you get the most out of your experience. 24/7 chat, quick email responses</p>
            <button>Learn More</button>
          </div>
          <div className='service_card_v2' style={{ background: "#e1c5c5" }} >
            <h2>Animated Video</h2>
            <p>Bring your ideas to life with the magic of animation! Animated videos are a powerful tool for engaging your audience, telling your story, and promoting your brand. Whether you're looking for a fun and eye-catching explainer video, a heartwarming character animation</p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service