import React from 'react'
import ButtonEmoji from "../../component/buttonEmoji";
import "./home.css"
import Button from '../../component/button/Button';

function Home() {
  console.log("home")
  return (
    <div className='main-container' >
      <div className='home-container' >  
        <div>
          <h2>we are</h2>
          <h1>web <span>d</span>eity</h1>
          <h3>build <span>'n</span> infinity and beyond</h3>
        </div>
        <Button Text="Let's Talk ->" color="#0d7ae5"/>
        <div className='triple-icon-container'>
          <img src='../../image/triple-down-icon.png'/>
        </div>
      </div>
    </div>
  )
}

export default Home