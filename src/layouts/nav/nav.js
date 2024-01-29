import React, { useState } from 'react'
import "./nav.css"
import { NavLink } from 'react-router-dom'
import Button from '../../component/button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import MobileNav from '../../component/mobileNav/MobileNav'

function Nav() {

  const [navToggle, setNavToggle] = useState(false);

  return (
    <div className='nav-container' >
      <div className='nav' >
        <img src="../../image/logo.png" />
        <ul>
          <NavLink className="navlink" >Cards</NavLink>
          <NavLink className="navlink" > <span></span> Work</NavLink>
          <NavLink className="navlink" > <span></span> Pricing</NavLink>
          <NavLink className="navlink" > <span></span> Contact</NavLink>
        </ul>
        <div style={{ display: "flex", gap: ".8rem", alignItems: "center"}} >
          {
            navToggle ?""
            : 
            <Button link="Contact" Text="Book A Call" />
          }
          {
            navToggle ?
              <FontAwesomeIcon className='menu-icon' icon={faClose} style={{ fontSize: "1.8rem", color: "white" }} onClick={()=>setNavToggle(false)} />
              :
              <>
                <FontAwesomeIcon className='menu-icon' icon={faBars} style={{ fontSize: "1.8rem", color: "white" }} onClick={()=>setNavToggle(true)}/>
              </>
          }
        </div>
        {
          navToggle ? 
           <MobileNav/>
           : ""
        }
      </div>
    </div>
  )
}

export default Nav