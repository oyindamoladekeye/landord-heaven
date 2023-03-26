import React from 'react'
import logo from "../assets/logo.png"
import "../styles/navbar.scss"
import {HiBars3BottomRight} from "react-icons/hi2"
import {RxCross2} from "react-icons/rx"
import { useState } from 'react'
export default function Navbar() {

  const [showNavbar ,setShowNavbar] = useState(false);
  const handleShowNavbar=()=>{
    setShowNavbar(!showNavbar)
  }
  return (
    <nav className='navbar'>
        <div>
            <img src={logo} alt="" />
        </div>
        <div className={showNavbar?"nav-mobile-links":"nav-links"}>
            <ul>
                <li>Home</li>
                <li>Featured</li>
                <li>Services</li>
                <li>Explore</li>
            </ul>
            <div className='btn1'>
                <button className='button'>Login/Register</button>
            </div>
        </div>
        <div className='btn'>
            <button className='button'>Login/Register</button>
        </div>
        <div className="toggle" onClick={handleShowNavbar}>
          {showNavbar?<RxCross2 />:<HiBars3BottomRight />}
        </div>
    </nav>
  )
}
