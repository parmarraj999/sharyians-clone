import React from 'react'
import "./header.css"

function Header( { first_word, firt_letter, second_word, second_letter } ) {
  return (
    <div className='header-container'>
        <h2><span>{first_word}</span>{firt_letter} <span>{second_word}</span>{second_letter}</h2>
    </div>
  )
}

export default Header