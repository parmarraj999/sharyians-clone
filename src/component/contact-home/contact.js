import React from 'react'
import './contact.css'
import Button from '../button/Button'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className='contact-blue-container' >
      <h2>Have A Project ?</h2>
      <button>
        <Link to="/contact" className='link'>Contact</Link>
      </button>
    </div>
  )
}

export default Contact