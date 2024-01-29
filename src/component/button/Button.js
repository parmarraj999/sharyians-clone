import React from 'react'
import { Link } from 'react-router-dom'
import "./button.css"

function Button({ link ,Text}) {
  return (
    <div className='button' >
        <Link className='link' to={`${link}`}>{Text}</Link>
    </div>
  )
}

export default Button